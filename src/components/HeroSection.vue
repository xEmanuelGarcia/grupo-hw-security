
<template>
  <section class="hero" id="home">
    <div class="hero-overlay"></div>

    <!-- Faixa de banners marquee -->
    <div class="hero-banners full-width" aria-hidden="false">
      <div class="marquee">
        <div class="marquee-track" :style="`--marquee-duration: ${marqueeDuration}s`">
          <div
            class="marquee-item"
            v-for="(b, i) in bannersExtended"
            :key="`banner-${i}`"
          >
            <picture v-if="b.includes('banner alarme')">
              <source :srcset="bannerAlarmeWebp" type="image/webp" />
              <img :src="b" alt="Banner Alarme" class="hero-banner-img" />
            </picture>
            <img v-else :src="b" :alt="`Banner ${i + 1}`" class="hero-banner-img" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title animate-fade-up">
          Soluções Completas em Segurança
        </h1>
        <p class="hero-subtitle animate-fade-up delay-200">
          Há mais de 7 anos protegendo o que é mais importante para você. 
          Portarias, CFTV, alarmes monitorados, rastreamento e muito mais.
        </p>
        <div class="hero-buttons animate-fade-up delay-400">
          <a href="https://wa.me/5551933003158?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20gratuito%20para%20os%20serviços%20de%20segurança." class="btn btn-gold">
            <i class="fab fa-whatsapp"></i>
            Solicitar Orçamento Gratuito
          </a>
          <router-link to="/servicos" class="btn btn-secondary">Conheça Nossas Soluções</router-link>
        </div>
      </div>
    </div>

    <div class="hero-stats">
      <div class="container">
        <div class="stats-grid">
          <div 
            v-for="(stat, index) in stats" 
            :key="index" 
            class="stat-item animate-fade-up"
            :style="{ animationDelay: `${600 + index * 100}ms` }"
          >
            <div class="stat-number" ref="statNumbers">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export default {
  name: 'HeroSection',
  components: {},
  props: {
    stats: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    // Marquee banners
    const marqueeDuration = ref(24)
    const banners = [
      new URL('../assets/images/hero/banner alarme.png', import.meta.url).href,
      new URL('../assets/images/hero/banner frotas.png', import.meta.url).href,
      new URL('../assets/images/hero/banner proteção.png', import.meta.url).href
    ]
    const bannerAlarmeWebp = new URL('../assets/images/hero/banner alarme.webp', import.meta.url).href
    const bannersExtended = [...banners, ...banners]

    // Stats
    const statNumbers = ref([])
    onMounted(() => {
      // Animar contadores quando visível
      const { stop } = useIntersectionObserver(
        statNumbers,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            animateCounters()
            stop()
          }
        },
        { threshold: 0.5 }
      )
    })
    const animateCounters = () => {
      statNumbers.value.forEach((el, index) => {
        const stat = props.stats[index]
        if (!stat) return
        const target = stat.number
        const isNumber = /^\d+/.test(target)
        if (isNumber) {
          const numericValue = parseInt(target.match(/\d+/)[0])
          let current = 0
          const increment = numericValue / 50
          const hasPlus = target.includes('+')
          const counter = setInterval(() => {
            current += increment
            if (current >= numericValue) {
              el.textContent = target
              clearInterval(counter)
            } else {
              el.textContent = Math.floor(current) + (hasPlus ? '+' : '')
            }
          }, 40)
        }
      })
    }
    return {
      statNumbers,
      marqueeDuration,
      bannersExtended,
      bannerAlarmeWebp
    }
  }
}
</script>
<style scoped>
/* Reset any global margins that might affect positioning */
* {
  margin: 0;
  padding: 0;
}

/* Specific override for this component's hero-stats */
section.hero .hero-stats {
  padding: 0 !important;
  margin: 0 !important;
  margin-top: 0 !important;
  background: rgba(0, 0, 0, 0.05) !important;
  position: static !important;
  bottom: auto !important;
  left: auto !important;
  right: auto !important;
  min-height: auto !important;
  height: auto !important;
}

section.hero .hero-stats .container {
  padding: 0.5rem 1rem !important;
  margin: 0 auto !important;
  min-height: auto !important;
}

section.hero .hero-stats .stats-grid {
  padding: 0 !important;
  margin: 0 !important;
  gap: 1rem !important;
  min-height: auto !important;
}

/* Force stats grid to be visible and override global styles */
.stats-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
  max-width: 1000px !important;
  margin: 0 auto !important;
  /* Reduce internal spacing and override global 2rem gap */
  padding: 0.25rem 1rem !important;
  gap: 1rem !important;
  text-align: center !important;
}

.stat-item {
  display: block !important;
  text-align: center !important;
  background: rgba(255, 255, 255, 0.1) !important;
  padding: 0.75rem 0.5rem !important;
  border-radius: 8px !important;
  backdrop-filter: blur(10px) !important;
}

.stat-number {
  font-size: 2.5rem !important;
  font-weight: 700 !important;
  color: var(--gold-color) !important;
  display: block !important;
  /* Override global margin-bottom */
  margin-bottom: 0.25rem !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
}

.stat-label {
  font-size: 1rem !important;
  color: var(--white) !important;
  margin-top: 0.5rem !important;
  display: block !important;
  /* Override global text styles */
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  opacity: 0.8 !important;
}

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  padding-top: 0;
  /* Override global styles */
  height: auto !important;
  align-items: stretch !important;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)) !important;
  /* Ensure no gap with header */
  margin-top: 0 !important;
  border-top: none !important;
}

.hero-banners.full-width {
  position: relative;
  width: 100%;
  z-index: 2;
  overflow: hidden;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
}

.marquee { 
  overflow: hidden; 
}

.marquee-track {
  display: flex;
  animation: marquee var(--marquee-duration, 24s) linear infinite;
  align-items: stretch;
}

.marquee-item { 
  flex: 0 0 50%; 
  padding: 0; 
  margin: 0; 
  box-sizing: border-box; 
}

@keyframes marquee { 
  from { transform: translateX(0); } 
  to { transform: translateX(-50%); } 
}

.hero-banner-img { 
  width: 100%; 
  height: 333px; 
  object-fit: contain; 
  display: block; 
  background: var(--primary-color); 
}

.container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.25rem;
  min-height: 400px;
  box-sizing: border-box;
  /* Override global container styles */
  max-width: none !important;
  margin: 0 !important;
  /* Remove bottom margin to bring stats closer */
}

.hero-content {
  position: relative;
  z-index: 3;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 800px;
  text-align: center;
  /* Ensure proper centering */
  display: block;
}

/* Force proper styling for hero content elements */
.hero-title {
  font-size: 3rem !important;
  font-weight: 700 !important;
  margin-bottom: 1.5rem !important;
  color: var(--white) !important;
  text-align: center !important;
  line-height: 1.2 !important;
}

.hero-subtitle {
  font-size: 1.25rem !important;
  margin-bottom: 2rem !important;
  color: var(--white) !important;
  opacity: 0.9 !important;
  text-align: center !important;
}

.hero-buttons {
  display: flex !important;
  gap: 1rem !important;
  justify-content: center !important;
  flex-wrap: wrap !important;
  margin-top: 2rem !important;
}

/* Increase button sizes */
.hero-buttons .btn {
  padding: 1rem 2.5rem !important;
  font-size: 1.125rem !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  text-decoration: none !important;
  transition: all 0.3s ease !important;
  min-width: 200px !important;
  text-align: center !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.5rem !important;
}

.hero-buttons .btn i {
  font-size: 1.25rem !important;
  flex-shrink: 0 !important;
}

.hero-buttons .btn-gold {
  background: var(--gold-color) !important;
  color: var(--primary-color) !important;
  border: 2px solid var(--gold-color) !important;
}

.hero-buttons .btn-gold:hover {
  background: var(--gold-dark) !important;
  border-color: var(--gold-dark) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3) !important;
}

.hero-buttons .btn-secondary {
  background: transparent !important;
  color: var(--white) !important;
  border: 2px solid var(--white) !important;
}

.hero-buttons .btn-secondary:hover {
  background: var(--white) !important;
  color: var(--primary-color) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2) !important;
}

.hero-stats {
  background: rgba(136, 71, 71, 0.05) !important;
  position: static !important;
  z-index: 4;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  height: auto !important;
  /* Override global CSS with balanced spacing */
  padding: 0.75rem 0 !important;
  margin: 0 !important;
  margin-top: 0 !important;
  flex-shrink: 0 !important;
  width: 100% !important;
  bottom: auto !important;
  left: auto !important;
  right: auto !important;
  backdrop-filter: none !important;
  min-height: auto !important;
  box-sizing: border-box !important;
}

@media (max-width: 1024px) { 
  .hero-banner-img { 
    height: 144px; 
  }
  
  .container {
    padding: 1.5rem 1.25rem;
    min-height: 300px;
  }
  
  .hero-content {
    padding: 0;
  }

  .hero-stats {
    padding: 0.5rem 0 !important;
    margin: 0 !important;
    margin-top: 0 !important;
    min-height: auto !important;
  }
}

@media (max-width: 768px) { 
  .hero-banner-img { 
    height: 108px; 
  }
  
  .container {
    padding: 1rem 1.25rem;
    min-height: 250px;
  }
  
  .hero-content {
    padding: 0;
  }

  .hero-stats {
    padding: 0.5rem 0 !important;
    margin: 0 !important;
    margin-top: 0 !important;
    min-height: auto !important;
  }

  /* Mobile button adjustments */
  .hero-buttons {
    gap: 0.75rem !important;
    flex-direction: column !important;
    align-items: center !important;
  }

  .hero-buttons .btn {
    padding: 0.875rem 2rem !important;
    font-size: 1rem !important;
    min-width: 280px !important;
    max-width: 100% !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.5rem !important;
  }

  .hero-buttons .btn i {
    font-size: 1.125rem !important;
  }

  .hero-title {
    font-size: 2.25rem !important;
  }

  .hero-subtitle {
    font-size: 1.125rem !important;
  }
}
</style>
