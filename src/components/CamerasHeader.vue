<template>
  <header class="cameras-header">
    <div class="header-container">
      <div class="logo-section">
        <img :src="logoUrl" alt="Logo Grupo HW" class="logo-img" />
        <span class="company-name">Grupo HW</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CamerasHeader',
  data() {
    return {
      logoUrl: new URL('../assets/images/logo/logo.png', import.meta.url).href
    }
  }
}
</script>

<style scoped>
.cameras-header {
  background: #181818;
  color: #f5f5f5;
  padding: 0.6rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 56px;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  text-decoration: none;
}

.logo-img {
  height: 38px;
  width: auto;
  vertical-align: middle;
}

.company-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #FFD600;
  letter-spacing: 0.5px;
}

/* Responsivo */
@media (max-width: 768px) {
  .cameras-header {
    padding: 0.4rem 0;
  }

  .header-container {
    min-height: 48px;
    padding: 0 1rem;
  }

  .logo-img {
    height: 32px;
  }

  .company-name {
    font-size: 1rem;
  }
}
</style>