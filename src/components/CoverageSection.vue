<template>
  <section class="coverage">
    <div class="container">
      <div class="coverage-grid">
        <div class="coverage-content">
          <h2 class="section-title">Área de Cobertura</h2>
          <p class="coverage-text">
            Atendemos Gravataí, Porto Alegre, Canoas, Cachoeirinha, Sapucaia do Sul, Esteio e região metropolitana, com equipes especializadas e tempo de resposta otimizado para sua segurança.
          </p>
          <div class="coverage-cities">
            <div 
              v-for="city in coverage.cities" 
              :key="city"
              class="city-item"
            >
              <i class="fas fa-map-marker-alt"></i>
              <span>{{ city }}</span>
            </div>
          </div>
          <div class="coverage-highlight">
            <div 
              v-for="highlight in coverage.highlights" 
              :key="highlight.title"
              class="highlight-item"
            >
              <i :class="highlight.icon"></i>
              <div>
                <h4>{{ highlight.title }}</h4>
                <p>{{ highlight.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="coverage-map">
          <img :src="mapUrl" alt="Mapa de Cobertura" class="coverage-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoverageSection',
  props: {
    coverage: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    mapUrl() {
      return new URL('../assets/images/coverage/mapa.png', import.meta.url).href
    }
  }
}
</script>
<style scoped>
.coverage-image {
  width: 100%;
  max-width: 420px;
  display: block;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
}
</style>
