# 🚀 ADICIONAR SECRETS NO GITHUB - PASSO A PASSO

## 📍 Link Direto
https://github.com/xEmanuelGarcia/grupo-hw-security/settings/secrets/actions

---

## 🔐 SECRETS PARA ADICIONAR (Total: 7)

### ✅ SECRET 1: SERVIDOR_PROPRIO_HOST
1. Clique em **"New repository secret"**
2. **Name:** `SERVIDOR_PROPRIO_HOST`
3. **Value:** `135.181.202.241`
4. Clique em **"Add secret"**

---

### ✅ SECRET 2: SERVIDOR_PROPRIO_USER
1. Clique em **"New repository secret"**
2. **Name:** `SERVIDOR_PROPRIO_USER`
3. **Value:** `root`
4. Clique em **"Add secret"**

---

### ✅ SECRET 3: SERVIDOR_PROPRIO_PATH
1. Clique em **"New repository secret"**
2. **Name:** `SERVIDOR_PROPRIO_PATH`
3. **Value:** `/var/www/grupohw.org`
4. Clique em **"Add secret"**

---

### ✅ SECRET 4: SERVIDOR_PROPRIO_SSH_KEY
1. Clique em **"New repository secret"**
2. **Name:** `SERVIDOR_PROPRIO_SSH_KEY`
3. **Value:** Abra o arquivo `GITHUB_SECRETS.md` e copie TODA a chave SSH (incluindo as linhas BEGIN e END)
4. Clique em **"Add secret"**

**A chave começa com:**
```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAA...
```

**E termina com:**
```
...AQIDBAUG
-----END OPENSSH PRIVATE KEY-----
```

---

### ✅ SECRET 5: CPANEL_FTP_SERVER
1. Clique em **"New repository secret"**
2. **Name:** `CPANEL_FTP_SERVER`
3. **Value:** `ftp.hwseg.com.br`
4. Clique em **"Add secret"**

---

### ✅ SECRET 6: CPANEL_FTP_USERNAME
1. Clique em **"New repository secret"**
2. **Name:** `CPANEL_FTP_USERNAME`
3. **Value:** `hg139271`
4. Clique em **"Add secret"**

---

### ✅ SECRET 7: CPANEL_FTP_PASSWORD
1. Clique em **"New repository secret"**
2. **Name:** `CPANEL_FTP_PASSWORD`
3. **Value:** `SUA-SENHA-FTP-DO-CPANEL` (somente você sabe)
4. Clique em **"Add secret"**

**⚠️ IMPORTANTE:** Use a senha do usuário FTP `hg139271` do cPanel

---

## 📋 RESUMO DOS 7 SECRETS

| # | Nome do Secret | Valor |
|---|----------------|-------|
| 1 | SERVIDOR_PROPRIO_HOST | 135.181.202.241 |
| 2 | SERVIDOR_PROPRIO_USER | root |
| 3 | SERVIDOR_PROPRIO_PATH | /var/www/grupohw.org |
| 4 | SERVIDOR_PROPRIO_SSH_KEY | (chave SSH completa - ver GITHUB_SECRETS.md) |
| 5 | CPANEL_FTP_SERVER | ftp.hwseg.com.br |
| 6 | CPANEL_FTP_USERNAME | hg139271 |
| 7 | CPANEL_FTP_PASSWORD | (sua senha) |

---

## ✅ APÓS ADICIONAR TODOS OS 7 SECRETS

### 1. Testar Deploy Automático

```bash
# Fazer uma pequena alteração
echo "# Deploy test" >> README.md

# Commit e push
git add .
git commit -m "Test: Deploy dual automatico"
git push origin main
```

### 2. Acompanhar Execução

Acesse: https://github.com/xEmanuelGarcia/grupo-hw-security/actions

Você deve ver o workflow "Deploy Dual" executando com 3 jobs:

- ✅ **build** (verde) - Compilou o projeto
- ✅ **deploy-servidor-proprio** (verde) - Enviou para grupohw.org
- ✅ **deploy-cpanel** (verde) - Enviou para hwseg.com.br

### 3. Verificar Sites

```bash
# Teste grupohw.org
curl -I http://grupohw.org
curl -I http://grupohw.org/cameras

# Teste hwseg.com.br  
curl -I http://hwseg.com.br
curl -I http://hwseg.com.br/cameras
```

Se retornar **200 OK** → Deploy funcionou! 🎉

---

## 🔧 SE DER ERRO

### ❌ Erro no deploy-servidor-proprio (SSH)
**Verifique:**
- Secret 4 (SERVIDOR_PROPRIO_SSH_KEY) tem a chave completa?
- Incluiu as linhas BEGIN e END?
- Não tem espaços extras no início/fim?

### ❌ Erro no deploy-cpanel (FTP)
**Verifique:**
- Secret 7 (CPANEL_FTP_PASSWORD) está correto?
- Teste as credenciais via FileZilla:
  - Host: ftp.hwseg.com.br
  - User: hg139271
  - Pass: sua senha
  - Port: 21

---

## 🎯 RESULTADO FINAL

Após configurado, **todo commit** vai:

1. ✅ Build automático
2. ✅ Deploy em grupohw.org (135.181.202.241)
3. ✅ Deploy em hwseg.com.br (via cPanel)
4. ✅ **2 sites atualizados automaticamente!**

---

## 📞 INFORMAÇÕES TÉCNICAS

**Servidor Próprio (grupohw.org):**
- IP: 135.181.202.241
- Usuário: root
- Método: SSH/SFTP
- Pasta: /var/www/grupohw.org

**cPanel (hwseg.com.br):**
- Servidor: ftp.hwseg.com.br
- Usuário: hg139271
- Porta: 21
- Método: FTP
- Pasta: public_html/

---

**⏱️ Tempo estimado:** 5 minutos  
**🎯 Dificuldade:** Fácil  
**✨ Resultado:** Deploy automático em 2 servidores!
