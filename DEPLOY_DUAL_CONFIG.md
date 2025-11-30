# 🚀 Configuração de Deploy Dual - Dois Servidores

## 📋 Visão Geral

O sistema agora faz deploy **automático em 2 servidores** simultaneamente:

1. **grupohw.org** → Servidor Próprio (via SFTP/SSH)
2. **hwseg.com.br** → cPanel (via FTP)

---

## 🔐 Secrets Necessárias no GitHub

Configure em: `https://github.com/xEmanuelGarcia/grupo-hw-security/settings/secrets/actions`

### **Para Servidor Próprio (grupohw.org)**

#### Opção 1: SSH com Chave Privada (Recomendado) 🟢

```
Secret Name: SERVIDOR_PROPRIO_HOST
Value: 191.252.220.225 (ou seu IP)

Secret Name: SERVIDOR_PROPRIO_USER
Value: root (ou seu usuário SSH)

Secret Name: SERVIDOR_PROPRIO_SSH_KEY
Value: (Cole sua chave SSH privada completa)

Secret Name: SERVIDOR_PROPRIO_PATH
Value: /var/www/grupohw.org (caminho completo no servidor)
```

**Como gerar a chave SSH:**
```bash
# No seu servidor
ssh-keygen -t rsa -b 4096 -C "github-actions"
# Pressione Enter 3x (sem senha)

# Adicione a chave pública ao authorized_keys
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys

# Copie a chave PRIVADA para o GitHub Secret
cat ~/.ssh/id_rsa
# Cole TODO o conteúdo no secret SERVIDOR_PROPRIO_SSH_KEY
```

#### Opção 2: SSH com Senha (Alternativa) 🟡

Se preferir usar senha em vez de chave SSH, use este workflow alternativo:
- Secret: `SERVIDOR_PROPRIO_PASSWORD` (sua senha SSH)

### **Para cPanel (hwseg.com.br)**

```
Secret Name: CPANEL_FTP_SERVER
Value: ftp.hwseg.com.br (ou IP do cPanel)

Secret Name: CPANEL_FTP_USERNAME
Value: seu-usuario@hwseg.com.br (usuário FTP completo)

Secret Name: CPANEL_FTP_PASSWORD
Value: sua-senha-ftp
```

---

## 🎯 Como Funciona

### **Fluxo de Deploy:**

```
1. Push para main
   ↓
2. Build (cria dist/)
   ↓
3. Deploy Paralelo:
   ├─→ grupohw.org (via SSH)
   └─→ hwseg.com.br (via FTP)
```

### **Jobs do Workflow:**

1. **build** - Faz npm install + npm run build
2. **deploy-servidor-proprio** - Envia para grupohw.org
3. **deploy-cpanel** - Envia para hwseg.com.br

Os dois deploys acontecem **em paralelo** (ao mesmo tempo).

---

## 📝 Passo a Passo - Configuração Completa

### **Etapa 1: Configurar Servidor Próprio (grupohw.org)**

**No seu servidor (191.252.220.225):**

```bash
# 1. Conectar via SSH
ssh root@191.252.220.225

# 2. Verificar/Criar diretório do site
sudo mkdir -p /var/www/grupohw.org
sudo chown -R root:www-data /var/www/grupohw.org
sudo chmod -R 755 /var/www/grupohw.org

# 3. Gerar chave SSH para GitHub Actions
ssh-keygen -t rsa -b 4096 -C "github-actions-deploy"
# Salvar em: /root/.ssh/github_actions_key
# Sem senha (pressione Enter 3x)

# 4. Adicionar chave pública ao authorized_keys
cat /root/.ssh/github_actions_key.pub >> /root/.ssh/authorized_keys
chmod 600 /root/.ssh/authorized_keys

# 5. Mostrar chave PRIVADA (copie TUDO)
cat /root/.ssh/github_actions_key
```

**No GitHub:**
- Vá para: Settings → Secrets → Actions → New secret
- Name: `SERVIDOR_PROPRIO_SSH_KEY`
- Value: Cole TODA a chave privada (incluindo BEGIN/END)

### **Etapa 2: Configurar cPanel (hwseg.com.br)**

**No cPanel:**

1. Acesse: **FTP Accounts** ou **Contas FTP**
2. Anote ou crie uma conta FTP:
   - Servidor: `ftp.hwseg.com.br` (ou IP)
   - Usuário: `usuario@hwseg.com.br`
   - Senha: (sua senha)
   - Diretório: `/public_html/`

**No GitHub:**
- Adicione os 3 secrets do cPanel

### **Etapa 3: Adicionar Secrets no GitHub**

```bash
# Total de 7 secrets necessárias:

# Servidor Próprio (4):
SERVIDOR_PROPRIO_HOST       → 191.252.220.225
SERVIDOR_PROPRIO_USER       → root
SERVIDOR_PROPRIO_SSH_KEY    → (chave SSH privada completa)
SERVIDOR_PROPRIO_PATH       → /var/www/grupohw.org

# cPanel (3):
CPANEL_FTP_SERVER          → ftp.hwseg.com.br
CPANEL_FTP_USERNAME        → usuario@hwseg.com.br
CPANEL_FTP_PASSWORD        → sua-senha-ftp
```

### **Etapa 4: Testar o Deploy**

```bash
# No seu computador local
cd /home/bojack/institucional

# Fazer uma pequena alteração
echo "# Deploy Test" >> README.md

# Commit e push
git add .
git commit -m "Test: Deploy dual server"
git push origin main

# Acompanhar no GitHub
# https://github.com/xEmanuelGarcia/grupo-hw-security/actions
```

---

## 🔧 Troubleshooting

### **Erro: SSH Connection Failed**

```bash
# No servidor, verificar se SSH está rodando
sudo systemctl status sshd

# Testar conexão
ssh -i ~/.ssh/github_actions_key root@191.252.220.225

# Ver logs do SSH
sudo tail -f /var/log/auth.log
```

### **Erro: FTP Connection Failed**

```bash
# Testar credenciais FTP
ftp ftp.hwseg.com.br
# Digite username e password
# Se conectar OK → credenciais corretas

# Ou via FileZilla
# Host: ftp.hwseg.com.br
# User: seu-usuario@hwseg.com.br
# Pass: sua-senha
```

### **Erro: Permission Denied**

```bash
# No servidor próprio
sudo chown -R root:www-data /var/www/grupohw.org
sudo chmod -R 755 /var/www/grupohw.org

# Se usar nginx
sudo chown -R nginx:nginx /var/www/grupohw.org

# Se usar apache
sudo chown -R www-data:www-data /var/www/grupohw.org
```

### **Deploy funcionou mas site não atualiza**

```bash
# Limpar cache do servidor
# Nginx:
sudo nginx -s reload

# Apache:
sudo systemctl reload apache2

# Limpar cache do navegador:
# Chrome/Firefox: Ctrl + Shift + R
# Mac: Cmd + Shift + R
```

---

## 🎨 Workflows Alternativos

### **Deploy Apenas em Servidor Próprio**

Comentar o job `deploy-cpanel` no `.github/workflows/deploy.yml`

### **Deploy Apenas em cPanel**

Comentar o job `deploy-servidor-proprio` no `.github/workflows/deploy.yml`

### **Deploy Manual**

```bash
# Via GitHub Actions:
# 1. Vá para: https://github.com/xEmanuelGarcia/grupo-hw-security/actions
# 2. Clique em "Deploy Dual"
# 3. Clique em "Run workflow"
# 4. Escolha a branch: main
# 5. Clique em "Run workflow"
```

---

## 📊 Monitoramento

### **Verificar Deploy**

```bash
# Servidor próprio
curl -I http://grupohw.org
curl -I http://grupohw.org/cameras

# cPanel
curl -I http://hwseg.com.br
curl -I http://hwseg.com.br/cameras

# Se retornar 200 OK → Deploy funcionou!
```

### **GitHub Actions Status**

- ✅ Verde = Deploy bem-sucedido
- ❌ Vermelho = Erro (clique para ver logs)
- 🟡 Amarelo = Em execução

---

## 🚀 Próximos Passos

1. ✅ Configure as 7 secrets no GitHub
2. ✅ Faça um commit de teste
3. ✅ Acompanhe no GitHub Actions
4. ✅ Verifique os 2 sites

---

## 📞 Suporte

Se encontrar problemas, verifique:
1. Logs do GitHub Actions (clique no workflow vermelho)
2. Permissões do servidor
3. Credenciais SSH/FTP
4. Caminhos corretos

---

**Última atualização:** 30/11/2025
