<template>
  <div class="whatsapp-float" @mouseenter="handleHover(true)" @mouseleave="handleHover(false)">
    <a 
      :href="whatsappUrl" 
      target="_blank" 
      class="whatsapp-btn"
      :class="{ expanded: isHovered }"
      title="Fale conosco no WhatsApp"
    >
      <i class="fab fa-whatsapp"></i>
      <transition name="slide">
        <span v-if="isHovered" class="whatsapp-text">Fale Conosco</span>
      </transition>
    </a>
    
    <!-- Tooltip -->
    <transition name="fade">
      <div v-if="showTooltip && !isHovered" class="whatsapp-tooltip">
        Precisa de ajuda? Clique aqui!
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'WhatsAppFloat',
  props: {
    phone: {
      type: String,
      required: true
    },
    message: {
      type: String,
      default: 'Olá! Gostaria de mais informações sobre as soluções de segurança da Grupo HW.'
    }
  },
  setup(props) {
    const isHovered = ref(false)
    const showTooltip = ref(false)
    
    const whatsappUrl = computed(() => {
      const encodedMessage = encodeURIComponent(props.message)
      return `https://wa.me/${props.phone}?text=${encodedMessage}`
    })
    
    const handleHover = (hovered) => {
      isHovered.value = hovered
      if (hovered) {
        showTooltip.value = false
      }
    }
    
    onMounted(() => {
      // Mostrar tooltip após 5 segundos
      setTimeout(() => {
        showTooltip.value = true
        // Esconder tooltip após 3 segundos
        setTimeout(() => {
          showTooltip.value = false
        }, 3000)
      }, 5000)
    })
    
    return {
      isHovered,
      showTooltip,
      whatsappUrl,
      handleHover
    }
  }
}
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.whatsapp-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--success-color);
  border-radius: 30px;
  color: white;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(34, 197, 94, 0.4);
  transition: all 0.3s ease;
  animation: whatsapp-pulse 2s infinite;
  white-space: nowrap;
  overflow: hidden;
  min-width: 60px;
  height: 60px;
  justify-content: center;
}

.whatsapp-btn.expanded {
  min-width: 160px;
  justify-content: flex-start;
  padding-left: 1.2rem;
}

.whatsapp-btn:hover {
  transform: scale(1.05);
  background: #16a34a;
  box-shadow: 0 6px 25px rgba(34, 197, 94, 0.6);
  animation: none;
}

.whatsapp-btn i {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.whatsapp-text {
  font-weight: 600;
  font-size: 0.9rem;
}

.whatsapp-tooltip {
  position: absolute;
  bottom: 70px;
  right: 0;
  background: #333;
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  white-space: nowrap;
  box-shadow: var(--shadow);
}

.whatsapp-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  right: 20px;
  border: 8px solid transparent;
  border-top-color: #333;
}

/* Animations */
@keyframes whatsapp-pulse {
  0% { 
    box-shadow: 0 4px 20px rgba(34, 197, 94, 0.4);
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 4px 30px rgba(34, 197, 94, 0.7);
    transform: scale(1.02);
  }
  100% { 
    box-shadow: 0 4px 20px rgba(34, 197, 94, 0.4);
    transform: scale(1);
  }
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .whatsapp-float {
    bottom: 15px;
    right: 15px;
  }
  
  .whatsapp-btn {
    width: 50px;
    height: 50px;
    min-width: 50px;
  }
  
  .whatsapp-btn i {
    font-size: 1.5rem;
  }
  
  .whatsapp-tooltip {
    display: none;
  }
}
</style>
