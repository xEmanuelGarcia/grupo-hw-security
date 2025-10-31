# 🎯 Deploy Direto do GitHub para cPanel

## ✅ Solução Mais Simples: cPanel Git™ Version Control

### **Passo 1: Ativar no cPanel**

1. **Acesse seu cPanel**
2. Procure por **"Git™ Version Control"** ou **"Git Version Control"**
3. Clique em **"Create"** (Criar)

---

### **Passo 2: Configurar Repositório**

Preencha os campos:

- **Clone URL**: 
  ```
  https://github.com/xEmanuelGarcia/grupo-hw-security.git
  ```

- **Repository Path**: 
  ```
  /home/SEU_USUARIO/repositories/grupo-hw-security
  ```
  ⚠️ **NÃO coloque direto em public_html ainda!**

- **Repository Name**: 
  ```
  grupo-hw-security
  ```

Clique em **"Create"**

---

### **Passo 3: Ativar Deploy Automático**

1. Na lista de repositórios, clique em **"Manage"** no seu repositório
2. Copie o caminho que aparece (algo como `/home/usuario/repositories/grupo-hw-security`)
3. Vá para **"Deploy Settings"** ou **"Configurações de Deploy"**
4. **✅ IMPORTANTE**: Marque **"Enable Automatic Deployment"**

---

### **Passo 4: Configurar Build e Deploy**

O arquivo `.cpanel.yml` que eu criei faz isso automaticamente, mas você precisa:

1. **Editar o arquivo `.cpanel.yml`** e trocar `USERNAME` pelo seu usuário real:

```yaml
---
deployment:
  tasks:
    # Instalar Node.js se necessário
    - export NVM_DIR="$HOME/.nvm"
    - source $NVM_DIR/nvm.sh
    - nvm use 18 || nvm install 18
    
    # Instalar dependências
    - npm install
    
    # Fazer build
    - npm run build
    
    # Copiar para public_html
    - export DEPLOYPATH=/home/SEU_USUARIO_AQUI/public_html/
    - /bin/cp -R dist/* $DEPLOYPATH
    - /bin/cp dist/.htaccess $DEPLOYPATH
```

2. **Commit e push**:
```bash
git add .cpanel.yml
git commit -m "Add cPanel deployment config"
git push origin main
```

---

### **Passo 5: Primeiro Deploy**

No cPanel Git Version Control:

1. Clique em **"Manage"** no repositório
2. Clique em **"Pull or Deploy"** → **"Deploy HEAD Commit"**
3. Aguarde o processo completar

---

## 🔄 Como Funciona Depois

**Fluxo de trabalho:**

```bash
# 1. Faça suas alterações localmente
git add .
git commit -m "Minhas alterações"

# 2. Envie para GitHub
git push origin main

# 3. No cPanel, vá em Git Version Control
# 4. Clique em "Pull or Deploy" → "Update from Remote"
# 5. Pronto! Site atualizado!
```

---

## ⚡ Alternativa SUPER Simples (Sem Build Automático)

Se o cPanel não suportar Node.js/npm, use este fluxo:

### **Configuração única:**

1. Clone repositório no cPanel (passos 1-2)
2. **NÃO** ative deploy automático
3. Faça build **localmente**:
   ```bash
   cd /home/bojack/institucional
   npm run build
   git add dist/
   git commit -m "Update build"
   git push origin main
   ```

4. No cPanel Git Version Control:
   - Clique em **"Manage"**
   - Clique em **"Pull or Deploy"**
   - Os arquivos de `dist/` vão para o servidor

5. Via **Terminal SSH** ou **cPanel Terminal**:
   ```bash
   cd ~/repositories/grupo-hw-security
   cp -R dist/* ~/public_html/
   cp dist/.htaccess ~/public_html/
   ```

---

## 📋 Checklist Rápido

- [ ] Git Version Control está disponível no seu cPanel
- [ ] Repositório clonado com sucesso
- [ ] Arquivo `.cpanel.yml` configurado com seu usuário correto
- [ ] Primeiro deploy manual funcionou
- [ ] Teste: faça uma alteração pequena e faça push
- [ ] Verifique se apareceu no site

---

## 🚫 Se Não Funcionar

### **Opção Manual Simples:**

1. **Localmente** (no seu servidor atual):
   ```bash
   cd /home/bojack/institucional
   npm run build
   tar -czf site.tar.gz dist/
   ```

2. **Baixe** o arquivo `site.tar.gz` 

3. **No cPanel File Manager**:
   - Upload do `site.tar.gz` para `public_html/`
   - Clique direito → Extract
   - Mova conteúdo de `dist/` para raiz de `public_html/`

**Pronto! Feito manualmente mas funciona 100%**

---

## 💡 Melhor Solução para Você

Baseado na sua situação, recomendo:

### **Se o cPanel tem Terminal SSH:**
→ Use método manual com comandos (mais confiável)

### **Se o cPanel tem Git Version Control moderno:**
→ Use deploy automático com `.cpanel.yml`

### **Se nada funcionar:**
→ Use FTP manual ou File Manager (sempre funciona!)

---

**Qual método você prefere testar primeiro?** Me avise que te guio passo a passo! 🚀
