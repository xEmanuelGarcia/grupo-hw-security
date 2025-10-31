<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">O que Nossos Clientes Dizem</h2>
        <p class="section-subtitle">Depoimentos reais de quem confia no Grupo HW</p>
      </div>
      
      <div class="testimonials-carousel">
        <div class="testimonials-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.id"
            class="testimonial-slide"
          >
            <div class="testimonial-card">
              <div class="testimonial-content">
                <i class="fas fa-quote-left quote-icon"></i>
                <p>{{ testimonial.content }}</p>
              </div>
              <div class="testimonial-author">
                <div class="author-info">
                  <h5>{{ testimonial.author }}</h5>
                  <span>{{ testimonial.location }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation dots -->
        <div class="testimonial-dots">
          <button 
            v-for="(testimonial, index) in testimonials" 
            :key="`dot-${testimonial.id}`"
            class="dot" 
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
          ></button>
        </div>
        
        <!-- Navigation arrows -->
        <button class="nav-arrow prev" @click="prevSlide">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="nav-arrow next" @click="nextSlide">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'TestimonialsSection',
  props: {
    testimonials: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const currentSlide = ref(0)
    let autoSlideInterval = null
    
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % props.testimonials.length
    }
    
    const prevSlide = () => {
      currentSlide.value = currentSlide.value === 0 
        ? props.testimonials.length - 1 
        : currentSlide.value - 1
    }
    
    const goToSlide = (index) => {
      currentSlide.value = index
    }
    
    const startAutoSlide = () => {
      autoSlideInterval = setInterval(nextSlide, 5000)
    }
    
    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval)
      }
    }
    
    onMounted(() => {
      startAutoSlide()
    })
    
    onUnmounted(() => {
      stopAutoSlide()
    })
    
    return {
      currentSlide,
      nextSlide,
      prevSlide,
      goToSlide,
      startAutoSlide,
      stopAutoSlide
    }
  }
}
</script>

<style scoped>
.testimonials-carousel {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  margin-top: 2rem;
}

.testimonials-wrapper {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial-slide {
  min-width: 100%;
  padding: 0 1rem;
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #ccc;
  cursor: pointer;
  transition: background 0.3s ease;
}

.dot.active {
  background: var(--primary-color);
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--primary-color);
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.nav-arrow:hover {
  background: var(--primary-color);
  color: white;
}

.nav-arrow.prev {
  left: -25px;
}

.nav-arrow.next {
  right: -25px;
}

@media (max-width: 768px) {
  .nav-arrow {
    display: none;
  }
}
</style>
