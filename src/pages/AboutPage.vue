<template>
  <div>
    <AboutSection />
    <CertificationsSection :certifications="certifications" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AboutSection from '../components/AboutSection.vue'
import CertificationsSection from '../components/CertificationsSection.vue'

const certifications = ref([
  { icon: 'fas fa-certificate', title: 'ANATEL', description: 'Equipamentos homologados e certificados' },
  { icon: 'fas fa-shield-alt', title: 'ISO 27001', description: 'Segurança da Informação certificada' },
  { icon: 'fas fa-medal', title: 'Polícia Federal', description: 'Autorização para funcionamento em segurança' },
  { icon: 'fas fa-award', title: 'Qualidade Certificada', description: 'Padrões internacionais de qualidade' }
])
</script>
