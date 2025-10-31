# 🚀 Deploy Automático via GitHub Actions

## ✨ Como Funciona

Sempre que você fizer **push** para o GitHub, o site será **automaticamente**:
1. ✅ Buildado (npm run build)
2. ✅ Enviado para o cPanel via FTP
3. ✅ Atualizado no ar

---

## ⚙️ Configuração (Fazer UMA VEZ)

### **1. Obter Credenciais FTP do cPanel**

No cPanel, acesse **FTP Accounts**:

- **Servidor FTP**: Geralmente `ftp.seudominio.com` ou IP do servidor
- **Usuário FTP**: Nome de usuário do cPanel (ex: `usuario@dominio.com`)
- **Senha FTP**: Sua senha do cPanel
- **Diretório**: `/public_html/` (ou caminho específico)

### **2. Adicionar Secrets no GitHub**

1. Vá para o repositório no GitHub: 
   https://github.com/xEmanuelGarcia/grupo-hw-security

2. Clique em **Settings** (Configurações)

3. No menu lateral, clique em **Secrets and variables** → **Actions**

4. Clique em **New repository secret** e adicione:

   **Secret 1:**
   - Name: `FTP_SERVER`
   - Value: `ftp.seudominio.com` (ou IP)
   
   **Secret 2:**
   - Name: `FTP_USERNAME`
   - Value: Seu usuário FTP completo
   
   **Secret 3:**
   - Name: `FTP_PASSWORD`
   - Value: Sua senha FTP

5. Clique **Add secret** para cada um

---

## 🎯 Como Usar

### **Deploy Automático:**
```bash
# Faça suas alterações
git add .
git commit -m "Atualizações no site"
git push origin main

# 🎉 Deploy acontece automaticamente!
# Acompanhe em: https://github.com/xEmanuelGarcia/grupo-hw-security/actions
```

### **Deploy Manual (sem commit):**
1. Vá para: https://github.com/xEmanuelGarcia/grupo-hw-security/actions
2. Clique no workflow **Deploy to cPanel**
3. Clique em **Run workflow** → **Run workflow**

---

## 📊 Monitoramento

Acompanhe o status do deploy:
- **GitHub Actions**: https://github.com/xEmanuelGarcia/grupo-hw-security/actions
- **Status**:
  - ✅ Verde = Deploy bem-sucedido
  - ❌ Vermelho = Erro (veja os logs)
  - 🟡 Amarelo = Em execução

---

## 🔍 Troubleshooting

### **Erro: "FTP connection failed"**
✅ Verifique:
- Servidor FTP correto (pode ser IP em vez de domínio)
- Usuário e senha corretos
- Firewall do servidor permite conexões FTP

### **Erro: "Permission denied"**
✅ Verifique:
- Caminho do diretório está correto (`public_html/`)
- Usuário FTP tem permissão de escrita

### **Deploy não acontece automaticamente**
✅ Verifique:
- Secrets estão configurados corretamente
- Workflow está na branch `main`
- Push foi feito para a branch `main`

---

## 🎨 Personalização

### **Deploy apenas em horários específicos:**
Altere em `.github/workflows/deploy.yml`:
```yaml
on:
  schedule:
    - cron: '0 2 * * *'  # Todo dia às 2h da manhã
```

### **Deploy para múltiplos ambientes:**
Crie secrets adicionais:
- `FTP_SERVER_STAGING`
- `FTP_SERVER_PRODUCTION`

---

## 💡 Vantagens

✅ **Zero trabalho manual** - Push e pronto!
✅ **Build automático** - Sempre com a versão mais recente
✅ **Histórico completo** - Veja todos os deploys no GitHub
✅ **Rollback fácil** - Volte para commit anterior
✅ **Notificações** - Saiba se o deploy funcionou

---

## 🔒 Segurança

- ✅ Senhas nunca aparecem no código
- ✅ Secrets criptografados pelo GitHub
- ✅ Apenas você pode editar os secrets
- ✅ Logs não mostram senhas

---

## 📝 Próximos Passos

1. Configure os Secrets no GitHub (passo 2)
2. Faça commit do arquivo `.github/workflows/deploy.yml`
3. Faça push para testar
4. Acompanhe em Actions

**Dica:** Teste primeiro com um commit pequeno para ver se funciona!
