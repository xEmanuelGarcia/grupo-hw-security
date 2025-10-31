<template>
  <section class="about" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-content">
          <h2 class="section-title">Sobre o Grupo HW</h2>
          <p class="about-text">
            Com mais de 7 anos de experiência no mercado de segurança, o Grupo HW é líder em soluções de proteção e monitoramento. Nossa missão é proteger o que é mais importante para você através de tecnologia avançada e atendimento especializado.
          </p>
          <p class="about-text">
            Oferecemos soluções completas: portarias físicas e virtuais, CFTV, alarmes monitorados, rastreamento veicular, segurança residencial e empresarial. Tudo que você precisa para se sentir protegido.
          </p>
          
          <div class="about-features">
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="feature-item animate-slide-in"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <i class="fas fa-check-circle"></i>
              <span>{{ feature }}</span>
            </div>
          </div>
        </div>
        
        <div class="about-image">
          <img :src="logoUrl" alt="Grupo HW - logo" class="about-logo" />
          <p class="about-tag">Grupo HW — Segurança Premium</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AboutSection',
  setup() {
    const features = ref([
      'Portarias físicas e virtuais',
      'CFTV e alarmes monitorados', 
      'Rastreamento GPS',
      'Central de monitoramento 24h'
    ])

  const logoUrl = new URL('../assets/images/about/base.png', import.meta.url).href

    return {
      features,
      logoUrl
    }
  }
}
</script>

<style scoped>
.about-stats {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.stat-box {
  text-align: center;
  padding: 1rem;
  background: var(--light-color);
  border-radius: 8px;
  min-width: 80px;
}

.stat-box .stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
}

.stat-box .stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slide-in 0.6s ease forwards;
}

.about-image { display: flex; flex-direction: column; align-items: center; justify-content: center; }
.about-logo { max-width: 280px; width: 100%; height: auto; object-fit: contain; border-radius: 6px; box-shadow: 0 6px 18px rgba(0,0,0,0.18); }
.about-tag { margin-top: 0.75rem; color: rgba(0,0,0,0.7); font-weight: 600; text-align: center; }

@media (max-width: 768px) { .about-logo { max-width: 220px; } }
</style>
