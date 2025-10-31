# Script de Cópia da Pasta Dist do Servidor

Este conjunto de scripts permite copiar a pasta `dist` do servidor para o seu PC local de forma automatizada.

## 📋 Arquivos

- `copy_dist_from_server.py` - Script principal para cópia
- `setup_server_config.sh` - Script de configuração interativo
- `server_config.py` - Arquivo de configuração (será criado)

## 🚀 Como Usar

### 1. Primeira configuração

Execute o script de configuração:
```bash
./setup_server_config.sh
```

Ou configure manualmente editando as variáveis no `copy_dist_from_server.py`.

### 2. Copiar pasta dist

```bash
# Cópia normal (com backup da pasta local)
python3 copy_dist_from_server.py

# Cópia sem backup
python3 copy_dist_from_server.py --no-backup

# Teste (apenas mostra os comandos, sem executar)
python3 copy_dist_from_server.py --dry-run
```

## ⚙️ Configurações

### Servidor
- `host`: IP ou domínio do servidor
- `user`: Usuário SSH
- `port`: Porta SSH (padrão: 22)
- `remote_path`: Caminho da pasta dist no servidor
- `ssh_key`: Caminho para chave SSH (opcional)

### Local
- `backup_dir`: Pasta para backups (padrão: `./server_backups`)
- `current_dist`: Pasta dist local (padrão: `./dist`)

## 🛠️ Funcionalidades

- ✅ Backup automático da pasta `dist` local
- ✅ Cópia via SCP com suporte a chave SSH
- ✅ Validação de configuração
- ✅ Modo de teste (dry-run)
- ✅ Log detalhado das operações

## 📝 Exemplo de Uso

```bash
# Configurar uma vez
./setup_server_config.sh

# Testar configuração
python3 copy_dist_from_server.py --dry-run

# Copiar do servidor
python3 copy_dist_from_server.py
```

## 🔒 Requisitos

- Python 3.x
- SSH configurado com acesso ao servidor
- Comando `scp` disponível

## 💡 Dicas

1. **Primeira vez**: Use `--dry-run` para testar
2. **Chave SSH**: Configure para evitar solicitar senha
3. **Backups**: Os backups locais ficam em `./server_backups/`
4. **Permissões**: Verifique se o usuário SSH tem acesso à pasta remota

## 🚨 Solução de Problemas

### Erro de conexão SSH
- Verifique host, usuário e porta
- Teste conexão manual: `ssh usuario@servidor`

### Erro de permissão
- Verifique permissões da pasta remota
- Teste comando manual: `scp -r usuario@servidor:/caminho/dist ./`

### Arquivo não encontrado
- Confirme o caminho da pasta dist no servidor
- Use caminho absoluto no `remote_path`
