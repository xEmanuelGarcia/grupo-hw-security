#!/bin/bash
# Script de configuração inicial para copy_dist_from_server.py

echo "🔧 Configuração do Script de Cópia da Pasta Dist"
echo "================================================"

# Verificar se Python está instalado
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 não encontrado. Instale Python3 primeiro."
    exit 1
fi

echo "✅ Python3 encontrado"

# Solicitar informações do servidor
echo ""
echo "📝 Configure as informações do seu servidor:"
echo ""

read -p "🌐 Host do servidor (IP ou domínio): " server_host
read -p "👤 Usuário SSH: " server_user
read -p "🚪 Porta SSH (padrão 22): " server_port
read -p "📁 Caminho da pasta dist no servidor: " server_path
read -p "🔑 Caminho da chave SSH (opcional, Enter para pular): " ssh_key

# Definir valores padrão
server_port=${server_port:-22}

# Criar arquivo de configuração
cat > server_config.py << EOF
# Configuração do servidor - Gerado automaticamente
SERVER_CONFIG = {
    'host': '${server_host}',
    'user': '${server_user}',
    'port': ${server_port},
    'remote_path': '${server_path}',
    'ssh_key': '${ssh_key}' if '${ssh_key}' else None,
}

LOCAL_CONFIG = {
    'backup_dir': './server_backups',
    'current_dist': './dist',
}
EOF

echo ""
echo "✅ Configuração salva em server_config.py"
echo ""
echo "🚀 Para usar o script:"
echo "   python3 copy_dist_from_server.py          # Copia com backup"
echo "   python3 copy_dist_from_server.py --no-backup  # Copia sem backup"
echo "   python3 copy_dist_from_server.py --dry-run    # Apenas teste"
echo ""
echo "💡 Dica: Teste primeiro com --dry-run para verificar se está tudo certo!"
