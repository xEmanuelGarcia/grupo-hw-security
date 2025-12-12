#!/bin/bash

# Script para testar diferentes configurações FTP
# Execute: bash test_ftp_configs.sh

echo "🔧 TESTE DE CONFIGURAÇÕES FTP"
echo "================================"
echo ""

# Suas credenciais
SERVER="69.6.212.30"
USER="hg139271"

# Solicitar senha
echo "Digite a senha FTP:"
read -s PASSWORD
echo ""

echo "Testando conexão com: $USER@$SERVER"
echo ""

# TESTE 1: FTP Padrão (porta 21)
echo "📡 TESTE 1: FTP padrão (porta 21)"
echo "-----------------------------------"
timeout 10 curl -v --ftp-pasv ftp://$USER:$PASSWORD@$SERVER:21/ 2>&1 | grep -E "Connected|220|530|Login|timeout"
echo ""

# TESTE 2: FTPS Explícito (porta 21)
echo "🔒 TESTE 2: FTPS explícito (porta 21)"
echo "-----------------------------------"
timeout 10 curl -v --ftp-ssl --ftp-pasv ftp://$USER:$PASSWORD@$SERVER:21/ 2>&1 | grep -E "Connected|220|530|Login|timeout|SSL"
echo ""

# TESTE 3: FTPS Implícito (porta 990)
echo "🔐 TESTE 3: FTPS implícito (porta 990)"
echo "-----------------------------------"
timeout 10 curl -v --ftp-ssl --ftp-pasv ftps://$USER:$PASSWORD@$SERVER:990/ 2>&1 | grep -E "Connected|220|530|Login|timeout|SSL"
echo ""

# TESTE 4: FTP Ativo (sem passive)
echo "📶 TESTE 4: FTP ativo sem modo passivo"
echo "-----------------------------------"
timeout 10 curl -v ftp://$USER:$PASSWORD@$SERVER:21/ 2>&1 | grep -E "Connected|220|530|Login|timeout"
echo ""

# TESTE 5: Teste com lftp
echo "🔍 TESTE 5: Usando lftp (recomendado)"
echo "-----------------------------------"
if command -v lftp &> /dev/null; then
    lftp -u $USER,$PASSWORD -e "ls; bye" ftp://$SERVER 2>&1 | head -20
else
    echo "⚠️ lftp não instalado. Instale com: sudo apt-get install lftp"
fi
echo ""

# TESTE 6: Verificar se porta está aberta
echo "🌐 TESTE 6: Verificar portas abertas"
echo "-----------------------------------"
echo "Porta 21 (FTP):"
timeout 5 nc -zv $SERVER 21 2>&1
echo ""
echo "Porta 990 (FTPS):"
timeout 5 nc -zv $SERVER 990 2>&1
echo ""
echo "Porta 22 (SFTP/SSH):"
timeout 5 nc -zv $SERVER 22 2>&1
echo ""

echo "================================"
echo "✅ Testes concluídos!"
echo ""
echo "📋 PRÓXIMOS PASSOS:"
echo "1. Se nenhum teste funcionou: verifique IP whitelist no cPanel"
echo "2. Se porta 21 timeout: servidor pode estar bloqueando"
echo "3. Se 530 Login: senha incorreta"
echo "4. Se conectou mas deu erro: ajustar protocolo no GitHub"
