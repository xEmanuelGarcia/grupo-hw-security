<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="nav-brand" aria-label="Logo Grupo HW">
            <img :src="logoUrl" alt="Logo Grupo HW" class="logo-img" />
            <span>Grupo HW</span>
          </div>
          <p>Soluções em segurança para uma vida melhor. Proteção 24/7 com tecnologia de ponta e equipe especializada.</p>
          <div class="social-links">
            <a href="https://www.facebook.com/GRUPOHWSEGURANCA" aria-label="Facebook" title="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/grupohw" aria-label="Instagram" title="Instagram"><i class="fab fa-instagram"></i></a>
            <a :href="`https://wa.me/${contactInfo.whatsapp}`" aria-label="WhatsApp" title="WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Serviços</h4>
          <ul>
            <li><router-link to="/servicos/portaria">Portaria e Controle de Acesso</router-link></li>
            <li><router-link to="/servicos/cftv">CFTV e Monitoramento</router-link></li>
            <li><router-link to="/servicos/alarme-residencial">Segurança Residencial e Alarmes Monitorados </router-link></li>
            <li><router-link to="/servicos/rastreamento-veicular">Rastreamento Veicular</router-link></li>
            <li><router-link to="/servicos/facilities">Facilities</router-link></li>
            <li><router-link to="/servicos/seguranca-empresarial">Segurança Empresarial</router-link></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Empresa</h4>
          <ul>
            <li><router-link to="/sobre">Sobre Nós</router-link></li>
            <li><router-link to="/contato">Contato</router-link></li>
            <li><router-link to="/politica-de-privacidade">Política de Privacidade</router-link></li>
            <li><router-link to="/termos-de-uso">Termos de Uso</router-link></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4>Atendimento</h4>
          <p><i class="fas fa-phone"></i> {{ contactInfo.phones?.[0] }}</p>
          <p><i class="fas fa-envelope"></i> {{ contactInfo.emails?.[0] }}</p>
          <p><i class="fas fa-clock"></i> {{ contactInfo.hours?.emergency }}</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Grupo HW - Segurança e Proteção. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import logoUrl from '../assets/images/logo/logo.png'

export default {
  name: 'AppFooter',
  props: {
    contactInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const currentYear = computed(() => new Date().getFullYear())
    return { currentYear, logoUrl }
  }
}
</script>

<style scoped>


.footer {
  background: #181818;
  color: #f5f5f5;
  padding: 1.5rem 0 0.2rem 0;
}

.footer-grid {
  display: flex;
  flex-wrap: nowrap;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.7rem;
  width: 100%;
}

.container {
  max-width: 100vw;
  width: 90%;
  padding-left: 0;
  padding-right: 0;
}

.footer-brand {
  flex: 1 1 220px;
  min-width: 200px;
  margin-bottom: 0.7rem;
}

.logo-img {
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
  filter: drop-shadow(0 0 1px #fff);
}

.footer-links {
  flex: 1 1 180px;
  min-width: 160px;
  margin-bottom: 0.7rem;
}
.footer-links h4 {
  color: #FFD600;
  font-size: 1.08rem;
  margin-bottom: 0.7rem;
}
.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-links li {
  margin-bottom: 0.5rem;
}
.footer-links a, .footer-links router-link {
  color: #FFD600;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
}
.footer-links a:hover, .footer-links router-link:hover {
  color: #fff;
}

.footer-contact {
  flex: 1 1 220px;
  min-width: 200px;
  margin-bottom: 0.7rem;
}
.footer-contact h4 {
  color: #FFD600;
  font-size: 1.08rem;
  margin-bottom: 0.7rem;
}
.footer-contact p {
  margin: 0.3rem 0;
  font-size: 1rem;
}
.footer-contact i {
  color: #FFD600;
  margin-right: 0.5rem;
}

.social-links {
  margin-top: 0.7rem;
  display: flex;
  gap: 1rem;
}
.social-links a {
  color: #FFD600;
  font-size: 1.3rem;
  transition: color 0.2s;
}
.social-links a:hover {
  color: #fff;
}

.footer-bottom {
  text-align: center;
  font-size: 0.98rem;
  color: #aaa;
  margin-top: 0.7rem;
  padding-bottom: 0.2rem;
}

@media (max-width: 1200px) {
  .footer-grid {
    flex-wrap: wrap;
    gap: 1rem;
  }
}
@media (max-width: 900px) {
  .footer-grid {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  .footer-brand, .footer-links, .footer-contact {
    min-width: 0;
  }
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>

