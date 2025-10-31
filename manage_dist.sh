#!/bin/bash
# Script para copiar arquivos entre servidor e local - USO NO SERVIDOR

echo "📁 Gerenciador de Pasta Dist - Servidor TraccarHW"
echo "================================================"

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
CURRENT_DIR="/home/bojack/institucional"
DIST_DIR="$CURRENT_DIR/dist"

# Função para criar backup
create_backup() {
    if [ -d "$DIST_DIR" ]; then
        backup_name="dist_server_backup_$TIMESTAMP"
        echo "💾 Criando backup: $backup_name"
        cp -r "$DIST_DIR" "$CURRENT_DIR/$backup_name"
        echo "✅ Backup criado: $CURRENT_DIR/$backup_name"
    else
        echo "ℹ️  Pasta dist não existe, pulando backup"
    fi
}

# Função para comprimir dist
compress_dist() {
    if [ -d "$DIST_DIR" ]; then
        archive_name="dist_export_$TIMESTAMP.tar.gz"
        echo "📦 Comprimindo pasta dist..."
        cd "$CURRENT_DIR"
        tar -czf "$archive_name" dist/
        echo "✅ Arquivo criado: $CURRENT_DIR/$archive_name"
        echo "💡 Para baixar: scp bojack@135.181.202.241:$CURRENT_DIR/$archive_name ./"
    else
        echo "❌ Pasta dist não encontrada!"
    fi
}

# Função para mostrar status
show_status() {
    echo "📊 Status Atual"
    echo "==============="
    echo "🖥️  Servidor: $(hostname) ($(whoami))"
    echo "📍 Diretório: $CURRENT_DIR"
    
    if [ -d "$DIST_DIR" ]; then
        size=$(du -sh "$DIST_DIR" | cut -f1)
        echo "📁 Pasta dist: Existe ($size)"
        echo "📄 Arquivos:"
        ls -la "$DIST_DIR/" | head -10
    else
        echo "📁 Pasta dist: Não existe"
    fi
    
    echo ""
    echo "📦 Backups disponíveis:"
    ls -lht "$CURRENT_DIR"/dist_*backup* 2>/dev/null | head -5 || echo "   Nenhum backup encontrado"
    
    echo ""
    echo "📦 Arquivos exportados:"
    ls -lht "$CURRENT_DIR"/*.tar.gz 2>/dev/null | head -5 || echo "   Nenhum arquivo exportado"
}

# Menu principal
case "$1" in
    "backup")
        create_backup
        ;;
    "compress"|"export")
        compress_dist
        ;;
    "status"|"")
        show_status
        ;;
    "help")
        echo "Uso: $0 [ação]"
        echo ""
        echo "Ações:"
        echo "  status    - Mostra status atual (padrão)"
        echo "  backup    - Cria backup da pasta dist"
        echo "  compress  - Comprime dist para download"
        echo "  help      - Mostra esta ajuda"
        echo ""
        echo "Exemplos:"
        echo "  $0 status     # Ver situação atual"
        echo "  $0 backup     # Fazer backup"
        echo "  $0 compress   # Criar arquivo para download"
        ;;
    *)
        echo "❌ Ação inválida: $1"
        echo "Use: $0 help para ver as opções"
        exit 1
        ;;
esac
