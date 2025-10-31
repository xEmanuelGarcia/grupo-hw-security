notei que o mapa de cobertura esta de sao paulo, quando deveria estar a area que atuamos, e tbm notei que o mapa nao aparece<template>
  <section class="services" id="services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Nossos Serviços</h2>
        <p class="section-subtitle">Soluções completas em segurança para sua proteção</p>
      </div>
      
      <div class="services-grid">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="service-card"
          @mouseenter="handleHover(service.id, true)"
          @mouseleave="handleHover(service.id, false)"
        >
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
          
          <transition name="fade">
            <div v-if="hoveredService === service.id" class="service-overlay">
              <router-link
                class="btn btn-outline"
                :to="`/servicos/${service.id}`"
              >
                Saiba Mais
              </router-link>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ServicesSection',
  props: {
    services: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const hoveredService = ref(null)
    
    const handleHover = (serviceId, isHovered) => {
      hoveredService.value = isHovered ? serviceId : null
    }
    
    return {
      hoveredService,
      handleHover
    }
  }
}
</script>

<style scoped>
.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 215, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.btn-outline {
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: white;
  color: var(--primary-color);
}
</style>
