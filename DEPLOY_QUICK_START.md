# ⚡ GUIA RÁPIDO - Deploy Dual Server

## 🎯 Objetivo
Deploy automático em **2 servidores** ao mesmo tempo:
- **grupohw.org** (Servidor Próprio 191.252.220.225)
- **hwseg.com.br** (cPanel)

---

## 🚀 CONFIGURAÇÃO RÁPIDA (5 minutos)

### **PASSO 1: Configurar Servidor Próprio** 

**No seu servidor (já logado):**
```bash
# Executar script automático
cd /home/bojack/institucional
sudo ./setup_github_ssh.sh
```

Este script vai:
- ✅ Criar pasta `/var/www/grupohw.org`
- ✅ Gerar chave SSH
- ✅ Mostrar a chave para copiar

**Copie TODA a chave SSH que aparecer no final!**

---

### **PASSO 2: Configurar Secrets no GitHub**

Acesse: https://github.com/xEmanuelGarcia/grupo-hw-security/settings/secrets/actions

Clique em **"New repository secret"** e adicione **7 secrets:**

#### Servidor Próprio (4 secrets):

**1. SERVIDOR_PROPRIO_HOST**
```
191.252.220.225
```

**2. SERVIDOR_PROPRIO_USER**
```
root
```

**3. SERVIDOR_PROPRIO_PATH**
```
/var/www/grupohw.org
```

**4. SERVIDOR_PROPRIO_SSH_KEY**
```
(Cole TODA a chave SSH que o script mostrou)
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAACmFlczI1Ni1jdHIAAAAGYmNyeXB0AAAA...
(várias linhas)
...AAAAAAAAAAA=
-----END OPENSSH PRIVATE KEY-----
```

#### cPanel (3 secrets):

**5. CPANEL_FTP_SERVER**
```
ftp.hwseg.com.br
(ou o IP do servidor cPanel)
```

**6. CPANEL_FTP_USERNAME**
```
usuario@hwseg.com.br
(seu usuário FTP completo do cPanel)
```

**7. CPANEL_FTP_PASSWORD**
```
sua-senha-ftp-do-cpanel
```

---

### **PASSO 3: Testar o Deploy**

```bash
# Fazer commit das mudanças
git add .
git commit -m "Config: Deploy dual server"
git push origin main
```

Acompanhe em: https://github.com/xEmanuelGarcia/grupo-hw-security/actions

Você deve ver:
- ✅ **build** (cria o dist/)
- ✅ **deploy-servidor-proprio** (envia para grupohw.org)
- ✅ **deploy-cpanel** (envia para hwseg.com.br)

---

## ✅ Verificar se Funcionou

```bash
# Testar grupohw.org
curl -I http://grupohw.org
curl -I http://grupohw.org/cameras

# Testar hwseg.com.br
curl -I http://hwseg.com.br
curl -I http://hwseg.com.br/cameras
```

Se retornar **200 OK** → Deploy funcionou! 🎉

---

## 🔧 Solução de Problemas

### ❌ Erro no deploy-servidor-proprio

**Problema:** SSH connection failed

**Solução:**
```bash
# No servidor, testar a chave
ssh -i /root/.ssh/github_actions_deploy root@191.252.220.225

# Verificar permissões
ls -la /root/.ssh/
# authorized_keys deve ser 600
# .ssh deve ser 700

# Corrigir se necessário
chmod 600 /root/.ssh/authorized_keys
chmod 700 /root/.ssh
```

### ❌ Erro no deploy-cpanel

**Problema:** FTP authentication failed

**Solução:**
1. Testar credenciais FTP via FileZilla
2. Host: ftp.hwseg.com.br
3. User: usuario@hwseg.com.br
4. Pass: sua-senha

Se conectar OK → Credenciais corretas (use as mesmas no GitHub)

### ⚠️ Deploy funcionou mas site não atualiza

**Solução:**
```bash
# Limpar cache do navegador
Chrome/Firefox: Ctrl + Shift + R
Mac: Cmd + Shift + R

# OU abrir em aba anônima
Ctrl + Shift + N (Chrome)
Ctrl + Shift + P (Firefox)
```

---

## 📊 Monitorar Deploys

**GitHub Actions:**
https://github.com/xEmanuelGarcia/grupo-hw-security/actions

**Cores:**
- 🟢 Verde = Sucesso
- 🔴 Vermelho = Erro (clique para ver logs)
- 🟡 Amarelo = Em execução

---

## 🎯 Resultado Final

Após configurado, **todo commit na branch main** vai:

1. ⚙️ Fazer build do projeto
2. 🚀 Enviar para grupohw.org (via SSH)
3. 🚀 Enviar para hwseg.com.br (via FTP)
4. ✅ Ambos os sites atualizados automaticamente!

---

## 📝 Checklist

- [ ] Executei `./setup_github_ssh.sh` no servidor
- [ ] Copiei a chave SSH completa
- [ ] Adicionei os 4 secrets do servidor próprio no GitHub
- [ ] Adicionei os 3 secrets do cPanel no GitHub
- [ ] Fiz commit e push
- [ ] Vi os 3 jobs verdes no GitHub Actions
- [ ] Testei grupohw.org e hwseg.com.br

---

**Tempo estimado:** 5-10 minutos
**Dificuldade:** Fácil
**Benefício:** Deploy automático em 2 servidores! 🎉
