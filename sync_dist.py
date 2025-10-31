#!/usr/bin/env python3
"""
Script de sincronização bidirecional para pasta dist.
Permite copiar do servidor para local e vice-versa.
"""

import os
import subprocess
import sys
import argparse
from datetime import datetime
from pathlib import Path

class DistSync:
    def __init__(self):
        # Configuração do servidor (ajuste conforme necessário)
        self.server_config = {
            'host': '135.181.202.241',  # IP do servidor TraccarHW
            'user': 'bojack',
            'port': 22,
            'remote_path': '/home/bojack/institucional/dist',
            'ssh_key': None,  # None para usar senha ou configure o caminho da chave
        }
        
        # Configuração local
        self.local_config = {
            'backup_dir': './server_backups',
            'local_dist': './dist',
        }
    
    def run_command(self, command, description="", show_output=True):
        """Executa um comando e retorna o resultado."""
        try:
            if show_output:
                print(f"🔄 {description}: {command}")
            
            result = subprocess.run(
                command, 
                shell=True, 
                check=True, 
                capture_output=not show_output,
                text=True
            )
            return True, result.stdout if not show_output else "", ""
        except subprocess.CalledProcessError as e:
            return False, e.stdout if e.stdout else "", e.stderr if e.stderr else str(e)
    
    def create_backup(self, path, backup_type="local"):
        """Cria backup de uma pasta."""
        if not os.path.exists(path):
            print(f"ℹ️  Pasta {path} não existe, pulando backup.")
            return None
        
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        backup_dir = Path(self.local_config['backup_dir'])
        backup_dir.mkdir(exist_ok=True)
        
        backup_name = f"{backup_type}_dist_backup_{timestamp}"
        backup_path = backup_dir / backup_name
        
        print(f"💾 Criando backup: {backup_name}")
        success, _, error = self.run_command(
            f"cp -r {path} {backup_path}",
            f"Backup {backup_type}",
            show_output=False
        )
        
        if success:
            print(f"✅ Backup criado: {backup_path}")
            return backup_path
        else:
            print(f"❌ Erro no backup: {error}")
            return None
    
    def build_ssh_command(self, command):
        """Constrói comando SSH com as configurações."""
        ssh_opts = []
        if self.server_config['port'] != 22:
            ssh_opts.append(f"-p {self.server_config['port']}")
        if self.server_config['ssh_key']:
            ssh_opts.append(f"-i {self.server_config['ssh_key']}")
        
        ssh_options = " ".join(ssh_opts)
        return (
            f"ssh {ssh_options} "
            f"{self.server_config['user']}@{self.server_config['host']} "
            f"'{command}'"
        )
    
    def build_scp_command(self, source, dest, direction="download"):
        """Constrói comando SCP."""
        scp_opts = []
        if self.server_config['port'] != 22:
            scp_opts.append(f"-P {self.server_config['port']}")
        if self.server_config['ssh_key']:
            scp_opts.append(f"-i {self.server_config['ssh_key']}")
        
        scp_options = " ".join(scp_opts)
        
        if direction == "download":
            # Do servidor para local
            return f"scp {scp_options} -r {self.server_config['user']}@{self.server_config['host']}:{source} {dest}"
        else:
            # Do local para servidor
            return f"scp {scp_options} -r {source} {self.server_config['user']}@{self.server_config['host']}:{dest}"
    
    def download_from_server(self, backup=True):
        """Baixa pasta dist do servidor."""
        print("⬇️  Baixando pasta dist do servidor...")
        
        # Backup local se existir
        if backup and os.path.exists(self.local_config['local_dist']):
            self.create_backup(self.local_config['local_dist'], "local")
            # Remove pasta local
            self.run_command(f"rm -rf {self.local_config['local_dist']}", "Removendo dist local")
        
        # Download do servidor
        scp_cmd = self.build_scp_command(
            self.server_config['remote_path'],
            "./",
            direction="download"
        )
        
        success, _, error = self.run_command(scp_cmd, "Baixando do servidor")
        
        if success:
            print("✅ Download concluído!")
            return True
        else:
            print(f"❌ Erro no download: {error}")
            return False
    
    def upload_to_server(self, backup=True):
        """Envia pasta dist para o servidor."""
        print("⬆️  Enviando pasta dist para o servidor...")
        
        if not os.path.exists(self.local_config['local_dist']):
            print("❌ Pasta dist local não encontrada!")
            return False
        
        # Backup remoto se solicitado
        if backup:
            print("💾 Criando backup no servidor...")
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            backup_cmd = (
                f"cd /home/bojack/institucional && "
                f"[ -d dist ] && cp -r dist dist_backup_{timestamp} || echo 'Sem dist para backup'"
            )
            
            ssh_cmd = self.build_ssh_command(backup_cmd)
            self.run_command(ssh_cmd, "Backup remoto", show_output=False)
        
        # Upload para servidor
        scp_cmd = self.build_scp_command(
            self.local_config['local_dist'],
            "/home/bojack/institucional/",
            direction="upload"
        )
        
        success, _, error = self.run_command(scp_cmd, "Enviando para servidor")
        
        if success:
            print("✅ Upload concluído!")
            return True
        else:
            print(f"❌ Erro no upload: {error}")
            return False
    
    def sync_status(self):
        """Mostra status de sincronização."""
        print("📊 Status de Sincronização")
        print("=" * 40)
        
        # Status local
        if os.path.exists(self.local_config['local_dist']):
            local_size = subprocess.run(
                f"du -sh {self.local_config['local_dist']}",
                shell=True, capture_output=True, text=True
            ).stdout.split()[0] if os.path.exists(self.local_config['local_dist']) else "N/A"
            print(f"📁 Local:    {self.local_config['local_dist']} ({local_size})")
        else:
            print(f"📁 Local:    {self.local_config['local_dist']} (não existe)")
        
        # Status remoto
        remote_cmd = f"[ -d {self.server_config['remote_path']} ] && du -sh {self.server_config['remote_path']} || echo 'não existe'"
        ssh_cmd = self.build_ssh_command(remote_cmd)
        
        success, output, _ = self.run_command(ssh_cmd, "", show_output=False)
        if success:
            remote_size = output.strip().split()[0] if "não existe" not in output else "não existe"
            print(f"🌐 Remoto:   {self.server_config['remote_path']} ({remote_size})")
        else:
            print(f"🌐 Remoto:   {self.server_config['remote_path']} (erro ao verificar)")
        
        print(f"🖥️  Servidor: {self.server_config['user']}@{self.server_config['host']}")

def main():
    parser = argparse.ArgumentParser(description='Sincronização bidirecional da pasta dist')
    parser.add_argument('action', choices=['download', 'upload', 'status'], 
                       help='Ação: download (servidor->local), upload (local->servidor), status')
    parser.add_argument('--no-backup', action='store_true', 
                       help='Não criar backup antes da sincronização')
    parser.add_argument('--dry-run', action='store_true', 
                       help='Apenas mostrar comandos sem executar')
    
    args = parser.parse_args()
    
    sync = DistSync()
    
    print("🔄 Sincronizador de Pasta Dist")
    print("=" * 40)
    
    if args.action == 'status':
        sync.sync_status()
        return
    
    if args.dry_run:
        print("🔍 MODO DRY-RUN - Comandos que seriam executados:")
        if args.action == 'download':
            cmd = sync.build_scp_command(sync.server_config['remote_path'], "./", "download")
            print(f"Download: {cmd}")
        elif args.action == 'upload':
            cmd = sync.build_scp_command(sync.local_config['local_dist'], "/home/bojack/institucional/", "upload")
            print(f"Upload: {cmd}")
        return
    
    backup = not args.no_backup
    
    if args.action == 'download':
        success = sync.download_from_server(backup)
    elif args.action == 'upload':
        success = sync.upload_to_server(backup)
    
    if success:
        print("\n🎉 Sincronização concluída!")
        sync.sync_status()
    else:
        print("\n💥 Sincronização falhou!")
        sys.exit(1)

if __name__ == "__main__":
    main()
