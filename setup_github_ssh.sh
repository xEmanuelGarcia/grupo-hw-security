#!/bin/bash
# Script para configurar SSH no servidor próprio para GitHub Actions

echo "🔐 Configuração SSH para Deploy Automático - grupohw.org"
echo "=========================================================="
echo ""

# Verificar se está rodando como root
if [ "$EUID" -ne 0 ]; then 
  echo "❌ Execute como root: sudo bash setup_github_ssh.sh"
  exit 1
fi

echo "📁 1. Criando diretório do site..."
SITE_PATH="/var/www/grupohw.org"
mkdir -p $SITE_PATH
chown -R www-data:www-data $SITE_PATH
chmod -R 755 $SITE_PATH
echo "✅ Diretório criado: $SITE_PATH"
echo ""

echo "🔑 2. Gerando chave SSH para GitHub Actions..."
SSH_KEY_PATH="/root/.ssh/github_actions_deploy"

if [ -f "$SSH_KEY_PATH" ]; then
    echo "⚠️  Chave já existe. Deseja sobrescrever? (s/n)"
    read -r response
    if [ "$response" != "s" ]; then
        echo "❌ Cancelado."
        exit 1
    fi
fi

ssh-keygen -t rsa -b 4096 -C "github-actions-deploy" -f "$SSH_KEY_PATH" -N ""
echo "✅ Chave SSH gerada!"
echo ""

echo "📝 3. Adicionando chave ao authorized_keys..."
cat "${SSH_KEY_PATH}.pub" >> /root/.ssh/authorized_keys
chmod 600 /root/.ssh/authorized_keys
chmod 700 /root/.ssh
echo "✅ Chave autorizada!"
echo ""

echo "🔍 4. Testando permissões..."
ls -la /root/.ssh/authorized_keys
echo ""

echo "=========================================================="
echo "✅ CONFIGURAÇÃO CONCLUÍDA!"
echo "=========================================================="
echo ""
echo "📋 INFORMAÇÕES PARA CONFIGURAR NO GITHUB:"
echo ""
echo "Secret: SERVIDOR_PROPRIO_HOST"
echo "Value: $(hostname -I | awk '{print $1}')"
echo ""
echo "Secret: SERVIDOR_PROPRIO_USER"
echo "Value: root"
echo ""
echo "Secret: SERVIDOR_PROPRIO_PATH"
echo "Value: $SITE_PATH"
echo ""
echo "Secret: SERVIDOR_PROPRIO_SSH_KEY"
echo "Value: (COPIE A CHAVE ABAIXO - TODA ELA!)"
echo ""
echo "════════════════════════════════════════════════════════"
echo "🔑 CHAVE SSH PRIVADA (Copie TUDO para o GitHub Secret):"
echo "════════════════════════════════════════════════════════"
cat "$SSH_KEY_PATH"
echo ""
echo "════════════════════════════════════════════════════════"
echo ""
echo "📌 Próximos passos:"
echo "1. Acesse: https://github.com/xEmanuelGarcia/grupo-hw-security/settings/secrets/actions"
echo "2. Clique em 'New repository secret'"
echo "3. Adicione os 4 secrets acima"
echo "4. Configure também os 3 secrets do cPanel (CPANEL_*)"
echo "5. Faça um commit para testar!"
echo ""
echo "🔧 Teste SSH:"
echo "ssh -i $SSH_KEY_PATH root@$(hostname -I | awk '{print $1}')"
echo ""
