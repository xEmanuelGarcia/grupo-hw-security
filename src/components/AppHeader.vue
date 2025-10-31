
<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <router-link to="/" class="nav-brand" aria-label="Ir para a página inicial">
  <img :src="logoUrl" alt="Logo Grupo HW" class="logo-img" />
        <span>Grupo HW</span>
      </router-link>
      <nav class="nav">
        <ul class="nav-list" :class="{ active: mobileMenuOpen }">
          <li><router-link to="/" class="nav-link" @click.native="$emit('close-mobile-menu')">Início</router-link></li>
          <li><router-link to="/servicos" class="nav-link" @click.native="$emit('close-mobile-menu')">Serviços</router-link></li>
          <li><router-link to="/sobre" class="nav-link" @click.native="$emit('close-mobile-menu')">Sobre</router-link></li>
          <li><router-link to="/contato" class="nav-link" @click.native="$emit('close-mobile-menu')">Contato</router-link></li>
        </ul>
        <button 
          class="mobile-menu-toggle" 
          :class="{ active: mobileMenuOpen }"
          @click="$emit('toggle-mobile-menu')"
          aria-label="Abrir ou fechar menu de navegação">
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  emits: ['toggle-mobile-menu', 'close-mobile-menu'],
  props: {
    isScrolled: {
      type: Boolean,
      default: false
    },
    mobileMenuOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      logoUrl: new URL('../assets/images/logo/logo.png', import.meta.url).href,
      logoWebpUrl: new URL('../assets/images/logo/logo.webp', import.meta.url).href
    }
  }
}
</script>

<style scoped>
.header {
  background: #181818;
  color: #f5f5f5;
  padding: 0.4rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  max-width: 100%;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.2rem;
  min-height: 48px;
  max-width: 90%;
}
.logo-img {
  height: 32px;
  margin-right: 8px;
  vertical-align: middle;
}
.nav {
  display: flex;
  align-items: center;
}
.nav-list {
  display: flex;
  gap: 1.2rem;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-link {
  color: #FFD600;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.2rem 0.7rem;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
}
.nav-link:hover {
  background: #FFD600;
  color: #181818;
}

.nav-link-special {
  background: linear-gradient(45deg, #FFD600, #FFA500);
  color: #181818 !important;
  font-weight: 600;
  animation: pulse 2s infinite;
}

.nav-link-special:hover {
  background: linear-gradient(45deg, #FFA500, #FFD600);
  transform: scale(1.05);
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(255, 214, 0, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(255, 214, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 214, 0, 0); }
}

.mobile-menu-toggle {
  display: none;
}
@media (max-width: 900px) {
  .container {
    flex-direction: row;
    padding: 0 0.7rem;
  }
  .nav-list {
    flex-direction: column;
    gap: 0.7rem;
    background: #232323;
    position: absolute;
    top: 56px;
    right: 0;
    left: 0;
    z-index: 100;
    padding: 1rem 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: none;
  }
  .nav-list.active {
    display: flex;
  }
  .mobile-menu-toggle {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 1rem;
  }
  .mobile-menu-toggle span {
    display: block;
    width: 24px;
    height: 3px;
    background: #FFD600;
    margin: 3px 0;
    border-radius: 2px;
    transition: 0.3s;
  }
}
</style>
