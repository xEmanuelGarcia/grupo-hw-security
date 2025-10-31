<template>
  <div v-if="show" class="cookie-consent">
    <div class="cookie-message">
      <span>
        Utilizamos cookies para melhorar sua experiência e analisar o uso do site. Você pode aceitar ou recusar o uso de cookies.
      </span>
      <div class="cookie-actions">
        <button class="btn-accept" @click="acceptCookies">Aceitar</button>
        <button class="btn-decline" @click="declineCookies">Recusar</button>
        <router-link to="/politica-de-privacidade" class="cookie-link">Saiba mais</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const show = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) {
    show.value = true
  }
})

function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted')
  show.value = false
}

function declineCookies() {
  localStorage.setItem('cookieConsent', 'declined')
  show.value = false
}
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #232323;
  color: #fff;
  padding: 1.2rem 1rem;
  box-shadow: 0 -2px 12px rgba(0,0,0,0.18);
  z-index: 9999;
  display: flex;
  justify-content: center;
}
.cookie-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
}
.cookie-actions {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}
.btn-accept, .btn-decline {
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
}
.btn-accept {
  background: #FFD600;
  color: #232323;
}
.btn-decline {
  background: #444;
  color: #fff;
}
.cookie-link {
  color: #FFD600;
  text-decoration: underline;
  font-size: 0.98rem;
  align-self: center;
}
</style>
