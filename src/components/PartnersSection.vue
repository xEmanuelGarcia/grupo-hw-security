<template>
  <section class="partners-section">
    <div class="container">
      <h2 class="section-title">Nossos Parceiros</h2>
      <swiper
        :modules="modules"
        :slides-per-view="getSlidesPerView"
        :loop="true"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
        :space-between="32"
        class="partners-carousel"
      >
        <swiper-slide v-for="(partner, idx) in partners" :key="idx" class="partner-logo">
          <img :src="partner.src" :alt="'Logo do parceiro ' + partner.alt" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default {
  name: 'PartnersSection',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      partners: [
        { src: new URL('../assets/images/parceiros/bitelo.jpeg', import.meta.url).href, alt: 'Bitelo' },
        { src: new URL('../assets/images/parceiros/cremolato.jpeg', import.meta.url).href, alt: 'Cremolato' },
        { src: new URL('../assets/images/parceiros/grupo cortel.png', import.meta.url).href, alt: 'Grupo Cortel' },
        { src: new URL('../assets/images/parceiros/macromix.jpeg', import.meta.url).href, alt: 'Macromix' },
        { src: new URL('../assets/images/parceiros/madevinte.png', import.meta.url).href, alt: 'Madevinte' },
        { src: new URL('../assets/images/parceiros/progresso.png', import.meta.url).href, alt: 'Progresso' },
        { src: new URL('../assets/images/parceiros/risul.jpg', import.meta.url).href, alt: 'Risul' },
        { src: new URL('../assets/images/parceiros/sest senat.jpeg', import.meta.url).href, alt: 'Sest Senat' },
        { src: new URL('../assets/images/parceiros/unidasul.jpeg', import.meta.url).href, alt: 'Unidasul' },
      ],
      modules: [Autoplay]
    }
  },
  computed: {
    getSlidesPerView() {
      if (window.innerWidth < 600) return 2;
      if (window.innerWidth < 900) return 3;
      return 5;
    }
  }
}
</script>

<style scoped>
.partners-section {
  padding: 60px 0;
  background: transparent;
  color: #222;
  text-align: center;
}
.partners-carousel {
  margin-top: 32px;
}
.partner-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.partner-logo img {
  max-height: 80px;
  max-width: 160px;
  object-fit: contain;
  transition: transform 0.25s ease, filter 0.25s ease;
}
.partner-logo img:hover {
  transform: translateY(-4px);
}
</style>
