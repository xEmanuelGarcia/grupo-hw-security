<template>
  <section class="why-choose-us">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Por que escolher o Grupo HW?</h2>
        <p class="section-subtitle">Conheça os diferenciais que nos tornam referência no mercado</p>
      </div>
      
      <div class="reasons-grid">
        <div 
          v-for="(reason, index) in reasons" 
          :key="index"
          class="reason-card"
          :class="`reason-${index + 1}`"
        >
          <div class="reason-icon">
            <i :class="reason.icon"></i>
          </div>
          <div class="reason-content">
            <div class="reason-badge">{{ reason.title }}</div>
            <h3 class="reason-title">{{ reason.subtitle }}</h3>
            <p class="reason-description">{{ reason.description }}</p>
          </div>
          
          <!-- Decorative elements -->
          <div class="reason-decoration"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export default {
  name: 'WhyChooseUsSection',
  props: {
    reasons: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const sectionRef = ref()
    const isVisible = ref(false)
    
    onMounted(() => {
      // Animate cards when section becomes visible
      const { stop } = useIntersectionObserver(
        sectionRef,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            isVisible.value = true
            stop()
          }
        },
        { threshold: 0.2 }
      )
    })
    
    return {
      sectionRef,
      isVisible
    }
  }
}
</script>

<style scoped>
.why-choose-us {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.why-choose-us::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><circle cx="200" cy="200" r="100" fill="rgba(255,215,0,0.05)"/><circle cx="800" cy="300" r="150" fill="rgba(255,215,0,0.08)"/><circle cx="400" cy="700" r="120" fill="rgba(255,215,0,0.03)"/></svg>');
  background-size: cover;
  pointer-events: none;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 4rem;
  position: relative;
}

.reason-card {
  background: var(--dark-color);
  padding: 3rem 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: all 0.4s ease;
  border: 1px solid var(--gold-color);
  overflow: hidden;
  color: var(--white);
}

.reason-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(255, 215, 0, 0.2);
}

.reason-card.reason-1 {
  border-left: 5px solid var(--gold-color);
}

.reason-card.reason-1 .reason-icon {
  background: linear-gradient(135deg, var(--gold-color), var(--gold-dark));
}

.reason-card.reason-2 {
  border-left: 5px solid var(--gold-color);
}

.reason-card.reason-2 .reason-icon {
  background: linear-gradient(135deg, var(--gold-color), var(--gold-dark));
}

.reason-card.reason-3 {
  border-left: 5px solid var(--gold-color);
}

.reason-card.reason-3 .reason-icon {
  background: linear-gradient(135deg, var(--gold-color), var(--gold-dark));
}

.reason-card.reason-4 {
  border-left: 5px solid var(--gold-color);
}

.reason-card.reason-4 .reason-icon {
  background: linear-gradient(135deg, var(--gold-color), var(--gold-dark));
}

.reason-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.reason-badge {
  display: inline-block;
  background: rgba(255, 215, 0, 0.2);
  color: var(--gold-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.reason-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.reason-description {
  color: #ccc;
  line-height: 1.6;
  font-size: 1rem;
}

.reason-decoration {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05));
  opacity: 0.5;
}

/* Bottom Stats */
.bottom-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 2px solid var(--gold-color);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--secondary-color);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border: 1px solid var(--gold-color);
}

.stat-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
}

.stat-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--gold-color), var(--gold-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 1.3rem;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #ccc;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 968px) {
  .reasons-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .bottom-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .why-choose-us {
    padding: 3rem 0;
  }
  
  .reason-card {
    padding: 2rem 1.5rem;
  }
  
  .bottom-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 2rem;
  }
  
  .stat-item {
    padding: 1rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
}
</style>
