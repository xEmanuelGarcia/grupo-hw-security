#!/bin/bash
# Comandos para copiar dist atualizada - COPIE E COLE NO TERMINAL

echo "🚀 Copiando pasta dist atualizada..."

# 1. Criar backup do site atual
echo "💾 Criando backup..."
sudo cp -r /var/www/html /var/www/html_backup_$(date +%Y%m%d_%H%M%S)

# 2. Limpar conteúdo atual
echo "🧹 Limpando diretório de destino..."
sudo rm -rf /var/www/html/*

# 3. Copiar nova pasta dist
echo "📁 Copiando arquivos da pasta dist..."
sudo cp -r /home/bojack/institucional/dist/* /var/www/html/

# 4. Ajustar permissões
echo "🔧 Ajustando permissões..."
sudo chmod -R 755 /var/www/html
sudo chown -R www-data:www-data /var/www/html

# 5. Verificar resultado
echo "✅ Deploy concluído!"
ls -la /var/www/html/

echo ""
echo "🧪 Teste no navegador:"
echo "   - Homepage: http://seudominio.com"
echo "   - Serviços: http://seudominio.com/servicos"
echo "   - Contato: http://seudominio.com/contato"
