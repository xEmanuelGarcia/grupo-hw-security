#!/bin/bash

# Script de teste manual FTP
echo "🔍 Testando conexão FTP com cPanel..."
echo ""

SERVER="69.6.212.30"
USER="hg139271"

echo "Servidor: $SERVER"
echo "Usuário: $USER"
echo ""
echo "Digite a senha FTP:"
read -s PASSWORD

echo ""
echo "📡 Testando conexão..."
echo ""

# Teste básico de conexão
lftp -u "$USER,$PASSWORD" "ftp://$SERVER" <<EOF
ls
pwd
cd public_html
ls
pwd
bye
EOF

echo ""
echo "✅ Teste concluído!"
