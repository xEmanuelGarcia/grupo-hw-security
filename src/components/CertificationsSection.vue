<template>
  <section class="certifications">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Certificações e Reconhecimentos</h2>
        <p class="section-subtitle">Nossa qualidade é reconhecida por órgãos competentes e pelo mercado</p>
      </div>
      <div class="certifications-grid">
        <div 
          v-for="(cert, index) in certifications" 
          :key="index"
          class="cert-item"
        >
          <div class="cert-icon">
            <i :class="cert.icon"></i>
          </div>
          <h4>{{ cert.title }}</h4>
          <p>{{ cert.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CertificationsSection',
  props: {
    certifications: {
      type: Array,
      default: () => []
    }
  }
}
</script>
