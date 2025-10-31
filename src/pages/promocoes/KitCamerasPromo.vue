<template>
  <div class="promo-page">
    <!-- Header da Promoção -->
    <section class="promo-hero">
      <!-- Badge Diagonal de Desconto -->
      <div class="hero-discount-ribbon">
        <span>24% OFF</span>
      </div>
      
      <div class="container">
        <div class="promo-content">
          <div class="promo-badge">
            <i class="fas fa-fire"></i>
            <span>OFERTA ESPECIAL</span>
          </div>
          
          <h1 class="promo-title">
            Kit de Câmeras CFTV Completo
          </h1>
          
          <div class="promo-highlight">
            <span class="discount-big">24% OFF</span>
            <span class="price-info">
              <span class="old-price">De R$ 3.299,00</span>
              <span class="new-price">Por R$ 2.499,00</span>
              <span class="installment-price">Em até 3x R$ 833,00</span>
            </span>
          </div>
          
          <p class="promo-description">
            Monitoramento completo com câmeras HD, DVR, instalação gratuita, e 
            visualização remota via App.
          </p>
          
          <div class="promo-cta">
            <a href="https://wa.me/5551933003158?text=Olá!%20Quero%20aproveitar%20a%20oferta%20do%20Kit%20CFTV%20com%2024%25%20de%20desconto!" class="btn btn-gold btn-large btn-premium">
              <i class="fab fa-whatsapp"></i>
              <span>Aproveitar Oferta</span>
            </a>
            <p class="cta-subtitle">
              Fale conosco agora e garante seu desconto!
            </p>
          </div>
        </div>
        
        <!-- Área para imagem dos entregáveis/encarte -->
        <div class="promo-image">
          <img 
            src="/src/assets/images/promotion/11bb81b0-335b-4ac6-b7d3-28687969099c.png" 
            alt="Kit CFTV Entregáveis - Promoção" 
            class="promotion-image"
          />
        </div>
      </div>
    </section>

    <!-- Benefícios -->
    <section class="promo-benefits">
      <div class="container">
        <h2>O que está incluso nesta oferta:</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-video"></i>
            </div>
            <h3>4 Câmeras HD 1080p</h3>
            <p>Visão noturna até 20m e resistentes à chuva</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-hdd"></i>
            </div>
            <h3>DVR 4 Canais</h3>
            <p>Gravação contínua com HD de 500GB incluso</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-plug"></i>
            </div>
            <h3>Fonte 5A</h3>
            <p>Fonte de alimentação inclusa para todas as câmeras</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3>3 Meses de Garantia</h3>
            <p>Garantia estendida para sua tranquilidade</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3>App Mobile</h3>
            <p>Monitore de qualquer lugar pelo celular</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-headset"></i>
            </div>
            <h3>Suporte Técnico</h3>
            <p>Atendimento especializado</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Urgência -->
    <section class="promo-urgency">
      <div class="container">
        <div class="urgency-content">
          <h2>⚠️ Oferta Por Tempo Limitado!</h2>
          <p><strong>Apenas enquanto durarem os estoques!</strong></p>
          
          <div class="social-proof">
            <div class="proof-item">
              <strong>🔥</strong>
              <span>Oferta Limitada</span>
            </div>
            <div class="proof-item">
              <strong>4.9★</strong>
              <span>Avaliação média</span>
            </div>
            <div class="proof-item">
              <strong>7 anos</strong>
              <span>No mercado</span>
            </div>
          </div>
          
          <a href="https://wa.me/5551933003158?text=Olá!%20Quero%20garantir%20minha%20oferta%20do%20Kit%20CFTV%20agora!" class="btn btn-gold btn-large btn-pulse">
            <i class="fab fa-whatsapp"></i>
            Garantir Minha Oferta Agora
          </a>
          
          <p class="disclaimer">Esta promoção especial tem validade limitada e quantidade restrita. Garante já o seu kit com desconto exclusivo.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'KitCamerasPromo',
  setup() {
    const timeLeft = ref({ days: 0, hours: 0, minutes: 0 })
    let timerInterval = null

    const updateTimer = () => {
      const endDate = new Date('2024-12-31T23:59:59')
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
      timerInterval = setInterval(updateTimer, 60000) // Atualiza a cada minuto
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
  background: linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%);
  position: relative;
}

.promo-hero {
  background: linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%);
  color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

/* Badge diagonal similar ao card */
.hero-discount-ribbon {
  position: absolute;
  top: 40px;
  right: -40px;
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  padding: 12px 60px;
  transform: rotate(45deg);
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
  z-index: 10;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.promo-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(255, 107, 107, 0.05) 0%, transparent 50%),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.08)"/><circle cx="80" cy="80" r="1" fill="rgba(255,255,255,0.06)"/><circle cx="40" cy="60" r="1" fill="rgba(255,255,255,0.04)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.8;
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
  background: linear-gradient(135deg, var(--gold-color), #e6b800);
  color: var(--primary-color);
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  animation: pulse 2s infinite;
  box-shadow: 
    0 8px 25px rgba(255, 215, 0, 0.3),
    0 0 0 1px rgba(255, 215, 0, 0.1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.promo-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
  line-height: 1.1;
  background: linear-gradient(135deg, #ffffff, #f0f0f0, var(--gold-color));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 12px rgba(0,0,0,0.5);
  position: relative;
}

.promo-highlight {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 2rem;
  background: linear-gradient(145deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05));
  border-radius: 20px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.discount-big {
  font-size: 4.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--gold-color), #ffdf4a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 8px 16px rgba(0,0,0,0.4);
  line-height: 1;
  text-align: center;
  animation: glow 2s ease-in-out infinite alternate;
}

.price-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}

.old-price {
  font-size: 1.1rem;
  text-decoration: line-through;
  opacity: 0.6;
  color: #ccc;
}

.new-price {
  font-size: 2.2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--gold-color), #ffdf4a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.installment-price {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
  margin-top: 0.5rem;
}

.promo-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.promo-timer {
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
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
  padding: 1.5rem 3rem;
  font-size: 1.3rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--gold-color), #e67e22);
  color: #1a1a1a;
  border: none;
  border-radius: 16px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-large:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(255, 215, 0, 0.5);
  background: linear-gradient(135deg, #e67e22, var(--gold-color));
}

.btn-large i {
  font-size: 1.4rem;
}

.btn-premium {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--gold-color), #ffdf4a, #e6b800);
  background-size: 200% 200%;
  animation: shimmer 3s ease-in-out infinite;
  box-shadow: 
    0 15px 35px rgba(255, 215, 0, 0.4),
    0 5px 15px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.btn-premium::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.btn-premium:hover::before {
  left: 100%;
}

.btn-premium:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 
    0 20px 50px rgba(255, 215, 0, 0.6),
    0 8px 25px rgba(0, 0, 0, 0.4);
}

@keyframes shimmer {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.btn-pulse {
  animation: glow-pulse 2s infinite;
}

@keyframes glow-pulse {
  0%, 100% { 
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
  }
  50% { 
    box-shadow: 0 15px 40px rgba(255, 215, 0, 0.6);
  }
}

@keyframes glow {
  from {
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
  }
  to {
    filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8));
  }
}

.cta-subtitle {
  font-size: 0.95rem;
  opacity: 0.8;
  text-align: center;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.promo-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.promotion-image {
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 20px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(255, 215, 0, 0.2);
  transition: transform 0.3s ease;
}

.promotion-image:hover {
  transform: scale(1.02);
}

.image-placeholder {
  width: 100%;
  max-width: 450px;
  height: 350px;
  background: linear-gradient(145deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05));
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(255, 215, 0, 0.4);
  position: relative;
  overflow: hidden;
}

.image-placeholder::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
  opacity: 0.5;
}

.image-placeholder i {
  font-size: 5rem;
  background: linear-gradient(135deg, var(--gold-color), #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 4px 8px rgba(255, 215, 0, 0.3));
}

.image-placeholder p {
  position: relative;
  z-index: 2;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
}

.promo-benefits {
  padding: 4rem 0;
  background: linear-gradient(145deg, #0f0f0f 0%, #1a1a1a 50%, #2d2d2d 100%);
  position: relative;
  border-top: 1px solid rgba(255, 215, 0, 0.2);
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
}

.promo-benefits::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 107, 107, 0.03) 0%, transparent 70%),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.04)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.03)"/><circle cx="45" cy="65" r="1" fill="rgba(255,215,0,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
}

.promo-benefits .container {
  display: block;
  text-align: center;
}

.promo-benefits h2 {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #ffffff, #f0f0f0, var(--gold-color));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3rem;
  font-weight: 800;
  text-shadow: 0 4px 12px rgba(0,0,0,0.5);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.benefit-item {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 215, 0, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.benefit-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, 
    transparent, 
    rgba(255, 215, 0, 0.08), 
    transparent, 
    rgba(255, 215, 0, 0.05), 
    transparent
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(255, 215, 0, 0.3);
  box-shadow: 
    0 30px 80px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(255, 215, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.benefit-item:hover::before {
  opacity: 1;
}

.benefit-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(145deg, #0a0a0a, #2d2d2d);
  border: 2px solid rgba(255, 215, 0, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  position: relative;
  z-index: 2;
  box-shadow: 
    0 12px 30px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(255, 215, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.benefit-item:hover .benefit-icon {
  transform: scale(1.1);
  border-color: rgba(255, 215, 0, 0.6);
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(255, 215, 0, 0.4);
}

.benefit-icon i {
  font-size: 2.2rem;
  background: linear-gradient(135deg, var(--gold-color), #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3));
}

.benefit-item h3 {
  font-size: 1.5rem;
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  font-weight: 700;
}

.benefit-item p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 1rem;
}

.promo-urgency {
  background: linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%);
  color: white;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 215, 0, 0.2);
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
}

.promo-urgency::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 70%, rgba(255, 107, 107, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain2" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="70" cy="70" r="1" fill="rgba(255,255,255,0.03)"/><circle cx="50" cy="80" r="1" fill="rgba(255,107,107,0.04)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain2)"/></svg>');
  pointer-events: none;
}

.promo-urgency .container {
  display: block;
  text-align: center;
}

.urgency-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff, #f0f0f0, var(--gold-color));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  text-shadow: 0 4px 12px rgba(0,0,0,0.5);
}

.urgency-content p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
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
  background: linear-gradient(135deg, var(--gold-color), #ffdf4a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

.proof-item span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.disclaimer {
  font-size: 0.9rem !important;
  color: rgba(255, 255, 255, 0.7) !important;
  margin-top: 1.5rem;
  font-style: italic;
  opacity: 0.8;
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
  
  .promotion-image {
    max-width: 350px;
  }
  
  .social-proof {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
