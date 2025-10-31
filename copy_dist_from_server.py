#!/usr/bin/env python3
"""
Script para copiar a pasta dist do servidor para o PC local.
Execute setup_server_config.sh primeiro ou edite server_config.py manualmente.
"""

import os
import subprocess
import sys
from datetime import datetime
import argparse

# Tentar importar configuração do arquivo
try:
    from server_config import SERVER_CONFIG, LOCAL_CONFIG
except ImportError:
    # Configurações padrão (EDITE ESTAS VARIÁVEIS ou use setup_server_config.sh)
    SERVER_CONFIG = {
        'host': 'SEU_SERVIDOR.com',  # IP ou domínio do servidor
        'user': 'seu_usuario',        # Usuário SSH
        'port': 22,                   # Porta SSH (padrão 22)
        'remote_path': '/var/www/html/dist',  # Caminho da pasta dist no servidor
        'ssh_key': None,              # Caminho para chave SSH (opcional)
    }

    # Configurações locais
    LOCAL_CONFIG = {
        'backup_dir': './server_backups',  # Pasta local para backups
        'current_dist': './dist',          # Pasta dist atual do projeto
    }

def run_command(command, description=""):
    """Executa um comando e retorna o resultado."""
    try:
        print(f"🔄 {description or 'Executando comando'}: {command}")
        result = subprocess.run(
            command, 
            shell=True, 
            check=True, 
            capture_output=True, 
            text=True
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        return False, e.stdout, e.stderr

def create_backup_if_exists():
    """Cria backup da pasta dist local se ela existir."""
    if os.path.exists(LOCAL_CONFIG['current_dist']):
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        backup_path = os.path.join(
            LOCAL_CONFIG['backup_dir'], 
            f"dist_backup_{timestamp}"
        )
        
        os.makedirs(LOCAL_CONFIG['backup_dir'], exist_ok=True)
        
        print(f"💾 Fazendo backup da pasta dist atual...")
        success, stdout, stderr = run_command(
            f"cp -r {LOCAL_CONFIG['current_dist']} {backup_path}",
            "Criando backup"
        )
        
        if success:
            print(f"✅ Backup criado em: {backup_path}")
            return backup_path
        else:
            print(f"❌ Erro ao criar backup: {stderr}")
            return None
    else:
        print("ℹ️  Pasta dist local não existe, pulando backup.")
        return None

def build_scp_command():
    """Constrói o comando SCP baseado na configuração."""
    ssh_options = []
    
    # Adiciona porta se diferente da padrão
    if SERVER_CONFIG['port'] != 22:
        ssh_options.append(f"-P {SERVER_CONFIG['port']}")
    
    # Adiciona chave SSH se especificada
    if SERVER_CONFIG['ssh_key']:
        ssh_options.append(f"-i {SERVER_CONFIG['ssh_key']}")
    
    ssh_opts = " ".join(ssh_options)
    
    command = (
        f"scp {ssh_opts} -r "
        f"{SERVER_CONFIG['user']}@{SERVER_CONFIG['host']}:{SERVER_CONFIG['remote_path']} "
        f"./"
    )
    
    return command

def copy_from_server():
    """Copia a pasta dist do servidor."""
    print(f"🌐 Copiando dist do servidor: {SERVER_CONFIG['host']}")
    print(f"📁 Caminho remoto: {SERVER_CONFIG['remote_path']}")
    
    # Remove pasta dist local se existir
    if os.path.exists(LOCAL_CONFIG['current_dist']):
        run_command(f"rm -rf {LOCAL_CONFIG['current_dist']}", "Removendo dist local")
    
    # Executa SCP
    scp_command = build_scp_command()
    success, stdout, stderr = run_command(scp_command, "Copiando do servidor")
    
    if success:
        print("✅ Pasta dist copiada com sucesso!")
        return True
    else:
        print(f"❌ Erro ao copiar do servidor: {stderr}")
        return False

def validate_config():
    """Valida se a configuração está correta."""
    required_fields = ['host', 'user', 'remote_path']
    missing_fields = []
    
    for field in required_fields:
        if not SERVER_CONFIG[field] or SERVER_CONFIG[field].startswith('SEU_'):
            missing_fields.append(field)
    
    if missing_fields:
        print("❌ Configuração incompleta! Configure os seguintes campos no script:")
        for field in missing_fields:
            print(f"   - {field}: {SERVER_CONFIG[field]}")
        return False
    
    return True

def main():
    parser = argparse.ArgumentParser(description='Copia pasta dist do servidor')
    parser.add_argument(
        '--no-backup', 
        action='store_true', 
        help='Não cria backup da pasta dist local'
    )
    parser.add_argument(
        '--dry-run', 
        action='store_true', 
        help='Apenas mostra os comandos que seriam executados'
    )
    
    args = parser.parse_args()
    
    print("🚀 Iniciando cópia da pasta dist do servidor")
    print("=" * 50)
    
    # Validar configuração
    if not validate_config():
        sys.exit(1)
    
    # Mostrar configuração
    print(f"🖥️  Servidor: {SERVER_CONFIG['user']}@{SERVER_CONFIG['host']}:{SERVER_CONFIG['port']}")
    print(f"📂 Caminho remoto: {SERVER_CONFIG['remote_path']}")
    print(f"📁 Destino local: {LOCAL_CONFIG['current_dist']}")
    print()
    
    if args.dry_run:
        print("🔍 MODO DRY-RUN - Apenas mostrando comandos:")
        scp_command = build_scp_command()
        print(f"Comando SCP: {scp_command}")
        sys.exit(0)
    
    # Criar backup se solicitado
    if not args.no_backup:
        create_backup_if_exists()
    
    # Copiar do servidor
    success = copy_from_server()
    
    if success:
        print("\n🎉 Processo concluído com sucesso!")
        print(f"📁 Pasta dist disponível em: {LOCAL_CONFIG['current_dist']}")
    else:
        print("\n💥 Processo falhou!")
        sys.exit(1)

if __name__ == "__main__":
    main()
