<template>
  <div id="app">
    <!-- Header -->
    <AppHeader 
      v-if="!isCamerasLandingPage"
      :is-scrolled="isScrolled"
      :mobile-menu-open="mobileMenuOpen"
      @toggle-mobile-menu="toggleMobileMenu"
      @close-mobile-menu="closeMobileMenu"
    />
    
    <!-- Main Content SPA -->
    <main>
        <router-view v-slot="{ Component }">
          <Transition name="fade-route" mode="out-in">
            <component :is="Component" />
          </Transition>
        </router-view>
    </main>
    
  <!-- Cookie Consent -->
  <CookieConsent />

  <!-- Footer -->
  <AppFooter :contact-info="contactInfo" />

  <!-- WhatsApp Float Button -->
  <WhatsAppFloat :phone="contactInfo.whatsapp" />

  <!-- Promotion Card Flutuante -->
  <!-- <PromotionCard 
    v-if="shouldShowPromotionCard"
    :promotion="currentPromotion"
    @click="handlePromotionClick"
    @close="handlePromotionClose"
  /> -->
  </div>
</template>

<script>

import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useScroll } from '@vueuse/core'
import { RouterView, useRoute } from 'vue-router'
// Components
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
import CookieConsent from './components/CookieConsent.vue'
import PromotionCard from './components/PromotionCard.vue'

export default {
  name: 'App',
  components: {
  AppHeader,
  AppFooter,
  WhatsAppFloat,
  CookieConsent,
  PromotionCard,
  RouterView
  },
  setup() {
    const loading = ref(true)
    const mobileMenuOpen = ref(false)
    const { y } = useScroll(window)
    const isScrolled = ref(false)
    const route = useRoute()

    // Verificar se está na landing page de câmeras
    const isCamerasLandingPage = computed(() => {
      return route.path === '/cameras'
    })

    // Promoção do Kit de Câmeras
    const currentPromotion = ref({
      id: 'kit-cameras',
      title: 'Kit de Câmeras CFTV',
      description: 'Monitoramento completo com câmeras HD, e Visualização Remota via App',
      discount: '24% OFF',
      originalPrice: 'R$ 3.299,00',
      finalPrice: 'R$ 2.499,00',
      validity: 'Enquanto durarem os estoques',
      icon: 'fas fa-video',
      ctaText: 'Quero Aproveitar',
      landingPage: '/promocao/kit-cameras'
    })

    // Controlar visibilidade do card baseado na rota
    const shouldShowPromotionCard = computed(() => {
      // PromotionCard desabilitado
      return false
    })
    

    // Dados da aplicação
    const stats = ref([
      { number: '7+', label: 'Anos de Experiência' },
      { number: '1080+', label: 'Clientes Protegidos' },
      { number: '530+', label: 'Sistemas Instalados' },
      { number: '24/7', label: 'Monitoramento' }
    ])

    const services = ref([
      {
        id: 1,
        icon: 'fas fa-shield-alt',
        title: 'Portarias e Controle de Acesso',
        description: 'Serviços de portaria física e virtual com controle de acesso inteligente e monitoramento 24h.',
        features: ['Portaria física', 'Portaria virtual', 'Controle de acesso', 'Monitoramento 24h']
      },
      {
        id: 2,
        icon: 'fas fa-video',
        title: 'CFTV e Monitoramento',
        description: 'Instalação e monitoramento de circuito fechado de TV com câmeras de alta definição.',
        features: ['Instalação profissional', 'Câmeras HD/4K', 'Visão noturna', 'Acesso remoto']
      },
      {
        id: 3,
        icon: 'fas fa-bell',
        title: 'Alarmes Monitorados',
        description: 'Sistemas de alarme monitorados para empresas e residências com resposta rápida.',
        features: ['Sensores inteligentes', 'Central 24h', 'Resposta rápida', 'App mobile']
      },
      {
        id: 4,
        icon: 'fas fa-car',
        title: 'Rastreamento Veicular',
        description: 'Proteção completa para veículos com GPS de alta precisão e bloqueio remoto.',
        features: ['GPS alta precisão', 'Bloqueio remoto', 'Alertas tempo real', 'Gestão de frotas']
      },
      {
        id: 5,
        icon: 'fas fa-home',
        title: 'Segurança Residencial',
        description: 'Soluções completas para proteger sua residência com tecnologia de ponta.',
        features: ['Alarmes residenciais', 'CFTV doméstico', 'Controle remoto', 'Monitoramento 24h']
      },
      {
        id: 6,
        icon: 'fas fa-building',
        title: 'Segurança Empresarial',
        description: 'Proteção corporativa completa com sistemas integrados e monitoramento especializado.',
        features: ['Sistemas integrados', 'Controle de funcionários', 'Relatórios gerenciais', 'Suporte dedicado']
      }
    ])

    const certifications = ref([
      { icon: 'fas fa-certificate', title: 'ANATEL', description: 'Equipamentos homologados e certificados' },
      { icon: 'fas fa-shield-alt', title: 'ISO 27001', description: 'Segurança da Informação certificada' },
      { icon: 'fas fa-medal', title: 'Polícia Federal', description: 'Autorização para funcionamento em segurança' },
      { icon: 'fas fa-award', title: 'Qualidade Certificada', description: 'Padrões internacionais de qualidade' }
    ])

    const testimonials = ref([
      {
        id: 1,
        content: 'O sistema de CFTV e alarme que instalaram na minha empresa funciona perfeitamente. Me sinto muito mais seguro e a qualidade das câmeras é excelente!',
        author: 'João Silva',
        location: 'Empresário - Porto Alegre/RS'
      },
      {
        id: 2,
        content: 'Contratei a portaria virtual e foi a melhor decisão! Controlo tudo pelo app e ainda economizo com funcionários. Tecnologia de ponta!',
        author: 'Maria Oliveira',
        location: 'Síndica - Canoas/RS'
      },
      {
        id: 3,
        content: 'O alarme monitorado da minha casa já evitou duas tentativas de invasão. A central responde super rápido e me sinto protegida 24h!',
        author: 'Ana Santos',
        location: 'Advogada - Gravataí/RS'
      }
    ])

    const coverage = ref({
      cities: [
        'Gravataí', 'Porto Alegre', 'Canoas', 
        'Cachoeirinha', 'Sapucaia do Sul', 'Esteio'
      ],
      highlights: [
        {
          icon: 'fas fa-clock',
          title: 'Tempo de Resposta',
          description: 'Até 15 minutos em emergências'
        },
        {
          icon: 'fas fa-headset',
          title: 'Central 24/7',
          description: 'Monitoramento ininterrupto'
        }
      ]
    })

    const whyChooseUs = ref([
      {
        icon: 'fas fa-trophy',
        title: 'Líder de Mercado',
        subtitle: 'Excelência Comprovada',
        description: 'Mais de 7 anos de experiência oferecendo soluções completas em segurança com resultados comprovados'
      },
      {
        icon: 'fas fa-microchip',
        title: 'Tecnologia Avançada',
        subtitle: 'Inovação Constante',
        description: 'Equipamentos de última geração: CFTV, alarmes inteligentes, controle de acesso e rastreamento GPS'
      },
      {
        icon: 'fas fa-users',
        title: 'Suporte Dedicado',
        subtitle: 'Atendimento Personalizado',
        description: 'Equipe especializada disponível 24h para todos os nossos serviços: portarias, alarmes e monitoramento'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Proteção Completa',
        subtitle: 'Segurança Total',
        description: 'Soluções integradas para residências e empresas: tudo que você precisa em segurança, exceto vigilância'
      }
    ])

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

    // Methods
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }

    // Funções para gerenciar promoções
    const handlePromotionClick = (promotion) => {
      console.log('Promoção clicada:', promotion)
      // Aqui você pode adicionar tracking/analytics
    }

    const handlePromotionClose = () => {
      console.log('Promoção fechada')
      // Aqui você pode adicionar tracking/analytics
    }

    const handleFormSubmit = async (formData) => {
      console.log('Formulário enviado:', formData)
      // Aqui você implementaria a lógica de envio
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ success: true, message: 'Mensagem enviada com sucesso!' })
        }, 2000)
      })
    }

    // Lifecycle
    onMounted(() => {
      // Simular carregamento
      try {
        setTimeout(() => {
          loading.value = false
        }, 1500)

        // Fallback: se algo travar, limparemos o loading após 7s e logaremos
        setTimeout(() => {
          if (loading.value) {
            console.warn('Fallback: carregamento ainda ativo, limpando loading.')
            loading.value = false
          }
        }, 7000)

        const onError = (ev) => {
          console.error('Unhandled error:', ev)
          loading.value = false
        }

        const onRejection = (ev) => {
          console.error('Unhandled rejection:', ev)
          loading.value = false
        }

        window.addEventListener('error', onError)
        window.addEventListener('unhandledrejection', onRejection)

        // cleanup on unmount
        onUnmounted(() => {
          window.removeEventListener('error', onError)
          window.removeEventListener('unhandledrejection', onRejection)
        })
      } catch (err) {
        console.error('Erro no onMounted:', err)
        loading.value = false
      }

      // Watch scroll position
      const updateScrolled = () => {
        isScrolled.value = y.value > 100
      }
      
      window.addEventListener('scroll', updateScrolled)
      
      onUnmounted(() => {
        window.removeEventListener('scroll', updateScrolled)
      })
    })

    return {
      loading,
      mobileMenuOpen,
      isScrolled,
      stats,
      services,
      whyChooseUs,
      certifications,
      testimonials,
      coverage,
      contactInfo,
      currentPromotion,
      shouldShowPromotionCard,
      toggleMobileMenu,
      closeMobileMenu,
      handlePromotionClick,
      handlePromotionClose,
      handleFormSubmit,
      isCamerasLandingPage
    }
  }
}

</script>

<style>
/* Transição de fade entre rotas */
.fade-route-enter-active, .fade-route-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-route-enter-from, .fade-route-leave-to {
  opacity: 0;
}
.fade-route-enter-to, .fade-route-leave-from {
  opacity: 1;
}
</style>
