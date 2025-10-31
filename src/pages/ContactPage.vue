<template>
  <div>
    <ContactSection :contact-info="contactInfo" @submit-form="handleFormSubmit" />
  </div>
</template>

<script setup>

import { ref } from 'vue'
import ContactSection from '../components/ContactSection.vue'

function handleFormSubmit(formData) {
  // Aqui você pode integrar com uma API real se desejar
  // Simulação de envio bem-sucedido
  return Promise.resolve({
    success: true,
    message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
  })
}

const contactInfo = ref({
  phones: ['(51) 93300-3158'],
  whatsapp: '5551933003158',
  emails: ['contato@hwseg.com.br', 'comercial@hwseg.com.br'],
  address: {
    street: 'RS 020, 9834 - Itacolomi',
    city: 'Gravataí/RS'
  },
  hours: {
    weekdays: 'Segunda à Sexta: 8h às 18h',
    emergency: 'Emergência: 24h'
  }
})
</script>
