<template>
  <div class="promo-page">
    <!-- Header da Promoção -->
    <section class="promo-hero">
      <div class="container">
        <div class="promo-content">
          <div class="promo-badge">
            <i class="fas fa-shield-alt"></i>
            <span>PROTEÇÃO TOTAL</span>
          </div>
          
          <h1 class="promo-title">
            Sistema de Alarme Residencial
          </h1>
          
          <div class="promo-highlight">
            <span class="discount-big">25% OFF</span>
            <span class="price-info">
              <span class="old-price">De R$ 1.999</span>
              <span class="new-price">Por R$ 1.499</span>
            </span>
          </div>
          
          <p class="promo-description">
            Sistema completo de alarme monitorado com sensores de presença, 
            sirenes, instalação profissional e monitoramento 24h.
          </p>
          
          <div class="promo-timer">
            <div class="timer-label">Oferta válida até:</div>
            <div class="timer-display">
              <div class="timer-item">
                <span class="timer-value">{{ timeLeft.days }}</span>
                <span class="timer-unit">Dias</span>
              </div>
              <div class="timer-item">
                <span class="timer-value">{{ timeLeft.hours }}</span>
                <span class="timer-unit">Horas</span>
              </div>
              <div class="timer-item">
                <span class="timer-value">{{ timeLeft.minutes }}</span>
                <span class="timer-unit">Min</span>
              </div>
            </div>
          </div>
          
          <div class="promo-cta">
            <a href="https://wa.me/5551933003158?text=Olá!%20Quero%20proteger%20minha%20casa%20com%20alarme%20residencial!" class="btn btn-gold btn-large">
              <i class="fab fa-whatsapp"></i>
              Quero Proteger Minha Casa
            </a>
            <p class="cta-subtitle">
              Consultoria gratuita com especialista!
            </p>
          </div>
        </div>
        
        <div class="promo-image">
          <div class="image-placeholder">
            <i class="fas fa-shield-alt"></i>
            <p>Sistema de Alarme</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefícios -->
    <section class="promo-benefits">
      <div class="container">
        <h2>Sistema Completo de Proteção:</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-eye"></i>
            </div>
            <h3>Sensores de Presença</h3>
            <p>Detectam movimento em todos os ambientes</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-door-open"></i>
            </div>
            <h3>Sensores Magnéticos</h3>
            <p>Monitoram portas e janelas 24 horas</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-volume-up"></i>
            </div>
            <h3>Sirenes Internas</h3>
            <p>Dissuasão imediata em caso de invasão</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-headset"></i>
            </div>
            <h3>Monitoramento 24h</h3>
            <p>Central especializada sempre vigilante</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3>App Mobile</h3>
            <p>Controle total pelo seu smartphone</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-tools"></i>
            </div>
            <h3>Instalação Profissional</h3>
            <p>Equipe técnica especializada</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Urgência -->
    <section class="promo-urgency">
      <div class="container">
        <div class="urgency-content">
          <h2>🚨 Sua Família Merece Proteção!</h2>
          <p>Não espere ser vítima de um crime. Proteja o que é mais importante para você com a tecnologia mais avançada do mercado.</p>
          
          <div class="social-proof">
            <div class="proof-item">
              <strong>98%</strong>
              <span>Eficácia comprovada</span>
            </div>
            <div class="proof-item">
              <strong>24h</strong>
              <span>Monitoramento contínuo</span>
            </div>
            <div class="proof-item">
              <strong>+500</strong>
              <span>Residências protegidas</span>
            </div>
          </div>
          
          <a href="https://wa.me/5551933003158?text=Olá!%20Quero%20proteger%20agora%20com%20desconto%20no%20alarme%20residencial!" class="btn btn-gold btn-large btn-pulse">
            <i class="fab fa-whatsapp"></i>
            Proteger Agora com Desconto
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AlarmeResidencialPromo',
  setup() {
    const timeLeft = ref({ days: 0, hours: 0, minutes: 0 })
    let timerInterval = null

    const updateTimer = () => {
      const endDate = new Date('2025-01-15T23:59:59')
      const now = new Date()
      const difference = endDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

        timeLeft.value = { days, hours, minutes }
      } else {
        timeLeft.value = { days: 0, hours: 0, minutes: 0 }
      }
    }

    onMounted(() => {
      updateTimer()
      timerInterval = setInterval(updateTimer, 60000)
    })

    onUnmounted(() => {
      if (timerInterval) {
        clearInterval(timerInterval)
      }
    })

    return {
      timeLeft
    }
  }
}
</script>

<style scoped>
.promo-page {
  min-height: 100vh;
  margin-top: 80px;
}

.promo-hero {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.promo-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.promo-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gold-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  animation: pulse 2s infinite;
}

.promo-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.promo-highlight {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.discount-big {
  font-size: 4rem;
  font-weight: 900;
  color: var(--gold-color);
  text-shadow: 0 4px 8px rgba(0,0,0,0.3);
  line-height: 1;
}

.price-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.old-price {
  font-size: 1.2rem;
  text-decoration: line-through;
  opacity: 0.7;
}

.new-price {
  font-size: 2rem;
  font-weight: 700;
  color: var(--gold-color);
}

.promo-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.promo-timer {
  background: rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.timer-label {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.timer-display {
  display: flex;
  gap: 1rem;
}

.timer-item {
  text-align: center;
  flex: 1;
}

.timer-value {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--gold-color);
}

.timer-unit {
  font-size: 0.9rem;
  opacity: 0.8;
}

.promo-cta {
  text-align: center;
}

.btn-large {
  padding: 1.25rem 2.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.btn-pulse {
  animation: pulse 2s infinite;
}

.cta-subtitle {
  font-size: 0.95rem;
  opacity: 0.8;
}

.promo-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 100%;
  max-width: 400px;
  height: 300px;
  background: rgba(255,255,255,0.1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(255,255,255,0.3);
}

.image-placeholder i {
  font-size: 4rem;
  color: var(--gold-color);
  margin-bottom: 1rem;
}

.promo-benefits {
  padding: 4rem 0;
  background: #f8f9fa;
}

.promo-benefits .container {
  display: block;
  text-align: center;
}

.promo-benefits h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 3rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.benefit-item {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-5px);
}

.benefit-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.benefit-icon i {
  font-size: 2rem;
  color: white;
}

.benefit-item h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.promo-urgency {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 3rem 0;
}

.promo-urgency .container {
  display: block;
  text-align: center;
}

.urgency-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.social-proof {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 2rem 0;
}

.proof-item {
  text-align: center;
}

.proof-item strong {
  display: block;
  font-size: 2rem;
  color: var(--gold-color);
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .promo-title {
    font-size: 2rem;
  }
  
  .discount-big {
    font-size: 3rem;
  }
  
  .timer-display {
    gap: 0.5rem;
  }
  
  .timer-value {
    font-size: 2rem;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .social-proof {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
