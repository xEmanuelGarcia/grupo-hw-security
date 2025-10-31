#!/bin/bash
# Script de Deploy para Servidor de Hospedagem

echo "🚀 Deploy do Frontend Vue.js - Grupo HW"
echo "========================================"

# Configurações (AJUSTE CONFORME SEU SERVIDOR)
DEST_PATH="/var/www/grupohw.org"  # Caminho no servidor de hospedagem
BACKUP_PATH="/var/backups/html_backups"
CURRENT_PATH="/home/bojack/institucional/dist"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Função para mostrar status
show_status() {
    echo ""
    echo "📊 Status do Deploy"
    echo "=================="
    echo "🗂️  Origem: $CURRENT_PATH"
    echo "🌐 Destino: $DEST_PATH"
    echo "💾 Backup: $BACKUP_PATH"
    echo "⏰ Data: $(date)"
    echo ""
}

# Função para verificar pré-requisitos
check_requirements() {
    echo "🔍 Verificando pré-requisitos..."
    
    # Verificar se pasta dist existe
    if [ ! -d "$CURRENT_PATH" ]; then
        echo "❌ Pasta dist não encontrada em: $CURRENT_PATH"
        exit 1
    fi
    
    # Verificar se index.html existe
    if [ ! -f "$CURRENT_PATH/index.html" ]; then
        echo "❌ Arquivo index.html não encontrado na pasta dist"
        exit 1
    fi
    
    # Verificar se pasta assets existe
    if [ ! -d "$CURRENT_PATH/assets" ]; then
        echo "❌ Pasta assets não encontrada na pasta dist"
        exit 1
    fi
    
    echo "✅ Pré-requisitos atendidos"
}

# Função para criar backup
create_backup() {
    if [ -d "$DEST_PATH" ]; then
        echo "💾 Criando backup do site atual..."
        
        # Criar diretório de backup se não existir
        sudo mkdir -p "$BACKUP_PATH"
        
        # Criar backup
        backup_name="html_backup_$TIMESTAMP"
        sudo cp -r "$DEST_PATH" "$BACKUP_PATH/$backup_name"
        
        if [ $? -eq 0 ]; then
            echo "✅ Backup criado: $BACKUP_PATH/$backup_name"
        else
            echo "⚠️  Aviso: Erro ao criar backup (continuando...)"
        fi
    else
        echo "ℹ️  Diretório de destino não existe, pulando backup"
    fi
}

# Função para fazer deploy
deploy_files() {
    echo "📤 Iniciando deploy dos arquivos..."
    
    # Criar diretório de destino se não existir
    sudo mkdir -p "$DEST_PATH"
    
    # Limpar conteúdo atual (exceto backups)
    echo "🧹 Limpando diretório de destino..."
    sudo rm -rf "$DEST_PATH"/*
    
    # Copiar arquivos da dist
    echo "📁 Copiando arquivos da pasta dist..."
    sudo cp -r "$CURRENT_PATH"/* "$DEST_PATH/"
    
    if [ $? -eq 0 ]; then
        echo "✅ Arquivos copiados com sucesso"
    else
        echo "❌ Erro ao copiar arquivos"
        exit 1
    fi
}

# Função para ajustar permissões
fix_permissions() {
    echo "🔧 Ajustando permissões..."
    
    # Permissões para arquivos e diretórios
    sudo find "$DEST_PATH" -type d -exec chmod 755 {} \;
    sudo find "$DEST_PATH" -type f -exec chmod 644 {} \;
    
    # Propriedade para servidor web
    if command -v apache2 &> /dev/null; then
        sudo chown -R www-data:www-data "$DEST_PATH"
        echo "✅ Permissões ajustadas para Apache"
    elif command -v nginx &> /dev/null; then
        sudo chown -R nginx:nginx "$DEST_PATH"
        echo "✅ Permissões ajustadas para Nginx"
    else
        echo "⚠️  Servidor web não detectado, ajuste permissões manualmente"
    fi
}

# Função para verificar deploy
verify_deploy() {
    echo "🧪 Verificando deploy..."
    
    # Verificar arquivos principais
    files_to_check=("index.html" "assets" ".htaccess")
    
    for file in "${files_to_check[@]}"; do
        if [ -e "$DEST_PATH/$file" ]; then
            echo "✅ $file: OK"
        else
            echo "❌ $file: NÃO ENCONTRADO"
        fi
    done
    
    # Verificar tamanho
    size=$(du -sh "$DEST_PATH" 2>/dev/null | cut -f1)
    echo "📏 Tamanho total: ${size:-'N/A'}"
}

# Função principal
main() {
    show_status
    
    # Confirmar deploy
    echo "⚠️  ATENÇÃO: Este script irá substituir o conteúdo em $DEST_PATH"
    read -p "Deseja continuar? (s/N): " confirm
    
    if [[ ! $confirm =~ ^[Ss]$ ]]; then
        echo "❌ Deploy cancelado pelo usuário"
        exit 0
    fi
    
    echo ""
    echo "🔄 Iniciando processo de deploy..."
    
    check_requirements
    create_backup
    deploy_files
    fix_permissions
    verify_deploy
    
    echo ""
    echo "🎉 Deploy concluído com sucesso!"
    echo ""
    echo "📋 Próximos passos:"
    echo "   1. Testar o site no navegador"
    echo "   2. Verificar todas as rotas (/servicos, /contato, etc.)"
    echo "   3. Testar funcionalidades (WhatsApp, formulários)"
    echo "   4. Verificar analytics (Google Analytics/Tag Manager)"
    echo ""
    echo "🔗 Comandos úteis de teste:"
    echo "   curl -I http://seudominio.com"
    echo "   curl -I http://seudominio.com/servicos"
    echo "   curl -I http://seudominio.com/assets/index-Bg3KQE0p.js"
    echo ""
}

# Verificar argumentos
case "$1" in
    "status")
        show_status
        verify_deploy
        ;;
    "check")
        check_requirements
        echo "✅ Verificação concluída - pronto para deploy"
        ;;
    "backup-only")
        create_backup
        ;;
    "help")
        echo "Uso: $0 [opção]"
        echo ""
        echo "Opções:"
        echo "  (sem opção)  - Deploy completo"
        echo "  status       - Mostrar status atual"
        echo "  check        - Verificar pré-requisitos"
        echo "  backup-only  - Apenas criar backup"
        echo "  help         - Mostrar esta ajuda"
        ;;
    "")
        main
        ;;
    *)
        echo "❌ Opção inválida: $1"
        echo "Use: $0 help para ver as opções"
        exit 1
        ;;
esac
