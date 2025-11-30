#!/bin/bash

# Verificar estrutura de arquivos via FTP
SERVER="69.6.212.30"
USER="hg139271"

echo "🔍 Listando arquivos no cPanel..."
echo "Digite a senha FTP (ou pressione Ctrl+C para cancelar):"
read -s PASSWORD

echo ""
echo "📂 Estrutura de diretórios:"
echo ""

lftp -u "$USER,$PASSWORD" "ftp://$SERVER" <<EOF
set ftp:ssl-allow no
set ssl:verify-certificate no
ls -la
echo "---"
cd public_html
ls -la
echo "---"
echo "Verificando se index.html existe:"
ls -la index.html
bye
EOF
