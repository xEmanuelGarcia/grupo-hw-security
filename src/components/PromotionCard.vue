<template>
  <div 
    v-if="isVisible && promotion" 
    class="promotion-card"
    :class="{ 'animate-slide-in': showAnimation }"
  >
    <!-- Badge de desconto em diagonal -->
    <div class="discount-ribbon">
      <span>{{ promotion.discount }}</span>
    </div>

    <button 
      class="close-btn" 
      @click="closeCard"
      aria-label="Fechar promoção"
    >
      <i class="fas fa-times"></i>
    </button>
    
    <div class="promotion-content">
      <div class="promotion-icon">
        <i :class="promotion.icon"></i>
      </div>
      
      <div class="promotion-text">
        <h3 class="promotion-title">{{ promotion.title }}</h3>
        <p class="promotion-description">{{ promotion.description }}</p>
        
        <!-- Seção de preços melhorada -->
        <div class="price-section">
          <div class="price-row">
            <span class="price-label">De</span>
            <span class="original-price">{{ promotion.originalPrice }}</span>
          </div>
          <div class="price-row">
            <span class="price-label">Por apenas</span>
            <span class="final-price">{{ promotion.finalPrice }}</span>
          </div>
        </div>
        
        <div class="validity-info">
          {{ promotion.validity }}
        </div>
      </div>
      
      <button 
        class="cta-button"
        @click="handleClick"
      >
        <i class="fab fa-whatsapp"></i>
        {{ promotion.ctaText }}
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
    
    <div class="promotion-glow"></div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'

export default {
  name: 'PromotionCard',
  props: {
    promotion: {
      type: Object,
      default: () => ({
        id: 'kit-cameras',
        title: 'Kit de Câmeras CFTV',
        description: 'Monitoramento completo com câmeras HD',
        discount: 'Até 30% OFF',
        validity: 'Válido até 31/12/2024',
        icon: 'fas fa-video',
        ctaText: 'Quero Aproveitar',
        landingPage: '/promocao/kit-cameras'
      })
    },
    autoShow: {
      type: Boolean,
      default: true
    },
    showDelay: {
      type: Number,
      default: 3000 // 3 segundos
    }
  },
  emits: ['click', 'close'],
  setup(props, { emit }) {
    const isVisible = ref(false)
    const showAnimation = ref(false)
    const hasBeenClosed = ref(false)

    // Verifica se o card foi fechado anteriormente
    const cardKey = computed(() => `promotion-${props.promotion.id}-closed`)
    
    onMounted(() => {
      // Verifica se o usuário já fechou este card
      const wasClosed = localStorage.getItem(cardKey.value)
      
      if (props.autoShow && !wasClosed) {
        setTimeout(() => {
          showCard()
        }, props.showDelay)
      }
    })

    const showCard = () => {
      if (!hasBeenClosed.value) {
        isVisible.value = true
        setTimeout(() => {
          showAnimation.value = true
        }, 100)
      }
    }

    const closeCard = () => {
      showAnimation.value = false
      setTimeout(() => {
        isVisible.value = false
        hasBeenClosed.value = true
        // Salva no localStorage que o usuário fechou este card
        localStorage.setItem(cardKey.value, 'true')
        emit('close')
      }, 300)
    }

    const handleClick = () => {
      emit('click', props.promotion)
      // Redireciona para a landing page
      if (props.promotion.landingPage) {
        window.open(props.promotion.landingPage, '_blank')
      }
    }

    return {
      isVisible,
      showAnimation,
      showCard,
      closeCard,
      handleClick
    }
  }
}
</script>

<style scoped>
.promotion-card {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 340px;
  background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 20px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 215, 0, 0.2);
  z-index: 1000;
  overflow: hidden;
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.promotion-card.animate-slide-in {
  transform: translateY(0);
  opacity: 1;
}

/* Badge de desconto em diagonal */
.discount-ribbon {
  position: absolute;
  top: 15px;
  right: -35px;
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  padding: 8px 45px;
  transform: rotate(45deg);
  font-weight: 800;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  z-index: 3;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.discount-ribbon span {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 4;
  backdrop-filter: blur(10px);
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.close-btn i {
  font-size: 14px;
  color: #fff;
}

.promotion-content {
  padding: 25px;
  position: relative;
  z-index: 2;
}

.promotion-icon {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
}

.promotion-icon i {
  font-size: 3rem;
  background: linear-gradient(135deg, var(--gold-color), #f39c12);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3));
}

.promotion-text {
  text-align: center;
  margin-bottom: 25px;
}

.promotion-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 12px;
  line-height: 1.3;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.promotion-description {
  font-size: 1rem;
  color: #b0b0b0;
  margin-bottom: 20px;
  line-height: 1.5;
}

.price-section {
  background: rgba(255, 215, 0, 0.1);
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.price-row:last-child {
  margin-bottom: 0;
}

.price-label {
  font-size: 0.9rem;
  color: #b0b0b0;
  font-weight: 500;
}

.original-price {
  font-size: 1.1rem;
  color: #888;
  text-decoration: line-through;
  font-weight: 600;
}

.final-price {
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--gold-color);
  text-shadow: 0 2px 4px rgba(255, 215, 0, 0.3);
}

.validity-info {
  font-size: 0.8rem;
  color: #888;
  font-style: italic;
  text-align: center;
}

.cta-button {
  width: 100%;
  background: linear-gradient(135deg, var(--gold-color), #e67e22);
  color: #1a1a1a;
  border: none;
  border-radius: 15px;
  padding: 16px 24px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 215, 0, 0.5);
  background: linear-gradient(135deg, #e67e22, var(--gold-color));
}

.cta-button i.fab {
  font-size: 1.2rem;
}

.cta-button i.fas {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.cta-button:hover i.fas {
  transform: translateX(5px);
}

/* Efeito de brilho */
.promotion-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, 
    transparent, 
    rgba(255, 215, 0, 0.1), 
    transparent, 
    rgba(255, 215, 0, 0.1), 
    transparent
  );
  border-radius: 20px;
  animation: glow 3s linear infinite;
  pointer-events: none;
}

@keyframes glow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsividade */
@media (max-width: 768px) {
  .promotion-card {
    width: calc(100vw - 40px);
    left: 20px;
    bottom: 100px; /* Mais espaço para o WhatsApp */
    max-width: 360px;
  }
  
  .promotion-content {
    padding: 20px;
  }
  
  .promotion-title {
    font-size: 1.2rem;
  }
  
  .promotion-description {
    font-size: 0.95rem;
  }
  
  .promotion-icon i {
    font-size: 2.5rem;
  }
  
  .final-price {
    font-size: 1.6rem;
  }
  
  .original-price {
    font-size: 1rem;
  }
  
  .discount-ribbon {
    padding: 6px 40px;
    font-size: 0.9rem;
  }
  
  .cta-button {
    padding: 14px 20px;
    font-size: 1rem;
  }
}

/* Animações */
@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%) translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
}

@keyframes slideOutToLeft {
  from {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%) translateY(20px);
    opacity: 0;
  }
}

/* Estados de hover */
.promotion-card:hover {
  box-shadow: 
    0 25px 80px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 215, 0, 0.4);
  transform: translateY(-8px);
}

.promotion-card:hover .discount-ribbon {
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
}

.promotion-card:hover .promotion-glow {
  animation-duration: 2s;
}

/* Efeito de partículas (opcional) */
.promotion-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
  border-radius: 20px;
  pointer-events: none;
  opacity: 0.5;
}
</style>
