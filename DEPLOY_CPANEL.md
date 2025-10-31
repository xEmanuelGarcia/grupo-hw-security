# 🚀 Guia de Deploy via cPanel

## ✅ Pré-requisitos
- Acesso ao cPanel da hospedagem
- Build do projeto atualizado (pasta `dist/`)
- Cliente FTP ou File Manager do cPanel

---

## 📦 Método 1: File Manager do cPanel (Recomendado)

### **Passo 1: Preparar o pacote**
1. Compactar a pasta `dist/` em um arquivo `.zip`:
   ```bash
   cd /home/bojack/institucional
   zip -r dist.zip dist/
   ```

### **Passo 2: Fazer upload via cPanel**
1. **Acesse o cPanel** da sua hospedagem
2. Navegue até **File Manager** (Gerenciador de Arquivos)
3. Vá até a pasta `public_html` (ou pasta do domínio)
4. **IMPORTANTE**: Faça backup dos arquivos atuais antes!
5. Clique em **Upload** no topo da página
6. Faça upload do arquivo `dist.zip`

### **Passo 3: Extrair arquivos**
1. No File Manager, localize o arquivo `dist.zip`
2. Clique com botão direito → **Extract** (Extrair)
3. Após extrair, **mova** todo o conteúdo de `dist/` para `public_html/`
   - Selecione todos os arquivos dentro de `dist/`
   - Clique em **Move** (Mover)
   - Mova para: `/public_html/`
4. **Delete** a pasta `dist/` vazia e o arquivo `dist.zip`

### **Passo 4: Verificar estrutura**
Sua pasta `public_html/` deve ter:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── *.css
│   ├── *.js
│   ├── *.png
│   └── ...
└── (outros arquivos estáticos)
```

---

## 📡 Método 2: FTP/SFTP

### **Passo 1: Conectar via FTP**
Use um cliente FTP como FileZilla:
- **Host**: ftp.seudominio.com (ou IP do servidor)
- **Usuário**: seu_usuario_cpanel
- **Senha**: sua_senha_cpanel
- **Porta**: 21 (FTP) ou 22 (SFTP)

### **Passo 2: Fazer backup**
1. Conecte ao servidor
2. Baixe todos os arquivos de `public_html/` como backup

### **Passo 3: Upload dos arquivos**
1. No FileZilla, navegue até a pasta `dist/` local
2. Selecione **TODOS** os arquivos dentro de `dist/`
3. Arraste para a pasta `public_html/` no servidor remoto
4. Aguarde o upload completar

---

## 🔧 Método 3: Terminal SSH (Avançado)

Se você tem acesso SSH no cPanel:

```bash
# 1. Conectar via SSH
ssh usuario@seudominio.com

# 2. Navegar até public_html
cd ~/public_html

# 3. Fazer backup
tar -czf backup_$(date +%Y%m%d_%H%M%S).tar.gz *

# 4. Limpar arquivos antigos (cuidado!)
rm -rf * .[!.]*

# 5. Clonar repositório GitHub
git clone https://github.com/xEmanuelGarcia/grupo-hw-security.git temp

# 6. Instalar dependências e buildar
cd temp
npm install
npm run build

# 7. Mover arquivos do build
mv dist/* ../
mv dist/.htaccess ../

# 8. Limpar
cd ..
rm -rf temp

# 9. Ajustar permissões
chmod 755 public_html
find public_html -type f -exec chmod 644 {} \;
find public_html -type d -exec chmod 755 {} \;
```

---

## ⚙️ Configuração do .htaccess

O arquivo `.htaccess` é **ESSENCIAL** para o Vue Router funcionar:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Este arquivo garante que:
- URLs como `/servicos`, `/seguranca` funcionem corretamente
- Recarregar a página não dê erro 404
- Todas as rotas sejam redirecionadas para `index.html`

---

## ✅ Checklist Pós-Deploy

Após fazer o deploy, verifique:

- [ ] Site carrega em `https://seudominio.com`
- [ ] Página inicial (`/`) funciona
- [ ] Navegação entre páginas funciona
- [ ] Rota `/seguranca` (landing page) carrega corretamente
- [ ] WhatsApp CTAs direcionam para **+55 51 93300-3158**
- [ ] Imagens carregam corretamente
- [ ] Sem erros no Console do navegador (F12)
- [ ] Mobile responsivo funcionando
- [ ] Formulário de contato funciona
- [ ] Links do footer estão corretos

---

## 🔍 Troubleshooting

### **Erro 404 nas rotas do Vue**
✅ **Solução**: Verifique se o arquivo `.htaccess` está na raiz do `public_html/`

### **Imagens não carregam**
✅ **Solução**: Verifique as permissões dos arquivos:
```bash
chmod 644 public_html/assets/*
```

### **CSS/JS não carrega**
✅ **Solução**: 
1. Limpe o cache do navegador (Ctrl+Shift+R)
2. Verifique se os arquivos estão em `public_html/assets/`

### **WhatsApp CTAs com número antigo**
✅ **Solução**: Certifique-se de fazer novo build após atualizar os números

### **Erro de CORS**
✅ **Solução**: Adicione ao `.htaccess`:
```apache
Header set Access-Control-Allow-Origin "*"
```

---

## 🔄 Deploy Automático (GitHub Actions)

Para deploys automáticos, você pode configurar GitHub Actions com FTP:

1. No GitHub, vá em **Settings** → **Secrets**
2. Adicione:
   - `FTP_SERVER`: ftp.seudominio.com
   - `FTP_USERNAME`: seu_usuario
   - `FTP_PASSWORD`: sua_senha

3. Crie `.github/workflows/deploy.yml` (arquivo já será criado)

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs de erro do cPanel
2. Teste localmente com `npm run preview`
3. Verifique permissões de arquivos no servidor
4. Confirme que mod_rewrite está habilitado no Apache

---

**Última atualização**: 31/10/2025
**Versão**: 2.0.0
**Número WhatsApp**: +55 51 93300-3158
