<template>
    <div class="cameras-landing-page">
    <div id="root">
        <div role="region" aria-label="Notifications (F8)" tabindex="-1" class="notifications-region">
            <ol tabindex="-1" class="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
            </ol>
        </div>
        <section aria-label="Notifications alt+T" tabindex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false">
        </section>
        <main class="overflow-x-hidden">
            <!-- HERO SECTION -->
            <section class="hw-section bg-background pt-8 md:pt-16">
                <div class="hw-container">
                    <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                        <!-- Text Column -->
                        <div class="flex-1 text-center lg:text-left">
                            <h1 class="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
                                Seu maior erro pode ser não ter câmeras de segurança protegendo o que você mais valoriza hoje.
                            </h1>
                            <p class="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                                Monitore sua casa ou empresa em tempo real, direto do celular, e tenha a tranquilidade de saber que tudo está seguro 24 horas por dia.
                            </p>
                            
                            <!-- CTA Button -->
                            <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
                                <a 
                                    :href="whatsappLink" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    class="inline-flex items-center gap-3 bg-hw-yellow font-display font-extrabold text-accent-foreground px-8 py-4 text-base md:text-lg tracking-wide hover:bg-hw-yellow-hover hover:scale-105 transition-all duration-150 animate-pulse-glow"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle w-6 h-6">
                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                    </svg>
                                    FALE COM UM ESPECIALISTA
                                </a>
                            </div>

                            <!-- Benefits -->
                            <div class="flex items-center gap-6 justify-center lg:justify-start flex-wrap">
                                <div v-for="benefit in heroBenefits" :key="benefit.id" class="flex items-center gap-2 text-muted-foreground">
                                    <component 
                                        :is="benefit.icon" 
                                        class="w-5 h-5 text-hw-yellow flex-shrink-0"
                                    ></component>
                                    <span class="font-body text-sm font-medium">{{ benefit.label }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Camera Image -->
                        <div class="flex-1 flex justify-center">
                            <img 
                                src="/assets/camera-hero-Bshhiv_l.png" 
                                alt="Câmera de segurança HW profissional" 
                                class="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                            >
                        </div>
                    </div>
                </div>
            </section>

            <!-- COMPARISON SECTION -->
            <section class="hw-section bg-primary text-primary-foreground">
                <div class="hw-container">
                    <h2 class="font-display font-black text-3xl md:text-4xl lg:text-5xl text-center mb-4">
                        POR QUE CÂMERAS BARATAS
                        <span class="block text-hw-yellow">VÃO TE DEIXAR NA MÃO?</span>
                    </h2>
                    <p class="font-body text-center text-primary-foreground/70 text-lg mb-12 max-w-2xl mx-auto">
                        Quando o pior acontecer, você vai descobrir que economizou no lugar errado.
                    </p>
                    <div class="grid md:grid-cols-2 gap-0 max-w-4xl mx-auto border border-primary-foreground/20 overflow-hidden">
                        <!-- Generic Cameras -->
                        <div class="bg-primary-foreground/5 p-6 md:p-8 border-b md:border-b-0 md:border-r border-primary-foreground/20">
                            <h3 class="font-display font-extrabold text-xl mb-6 text-primary-foreground/50 text-center">
                                ❌ CÂMERAS GENÉRICAS
                            </h3>
                            <ul class="space-y-4">
                                <li v-for="item in comparisonItems.generic" :key="item.text" class="flex items-start gap-3">
                                    <component :is="IconX" class="w-5 h-5 text-destructive mt-0.5 shrink-0"></component>
                                    <span class="font-body text-primary-foreground/60">{{ item.text }}</span>
                                </li>
                            </ul>
                        </div>
                        <!-- HW Cameras -->
                        <div class="p-6 md:p-8">
                            <h3 class="font-display font-extrabold text-xl mb-6 text-hw-yellow text-center">
                                ✓ CÂMERAS HW
                            </h3>
                            <ul class="space-y-4">
                                <li v-for="item in comparisonItems.hw" :key="item.text" class="flex items-start gap-3">
                                    <component :is="IconCheck" class="w-5 h-5 text-hw-yellow mt-0.5 shrink-0"></component>
                                    <span class="font-body text-primary-foreground font-medium">{{ item.text }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center mt-12">
                        <a 
                            :href="whatsappLink" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="inline-flex items-center gap-3 bg-hw-yellow font-display font-extrabold text-accent-foreground px-8 py-4 text-base md:text-lg tracking-wide hover:bg-hw-yellow-hover hover:scale-105 transition-all duration-150 animate-pulse-glow"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle w-6 h-6">
                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                            </svg>
                            QUERO PROTEÇÃO DE VERDADE
                        </a>
                    </div>
                </div>
            </section>

            <!-- TECHNOLOGY SECTION -->
            <section class="hw-section bg-secondary">
                <div class="hw-container">
                    <h2 class="font-display font-black text-3xl md:text-4xl lg:text-5xl text-center text-foreground mb-4">
                        TECNOLOGIA QUE <span class="bg-hw-yellow px-3 text-accent-foreground">PROTEGE DE VERDADE</span>
                    </h2>
                    <p class="font-body text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
                        Números que comprovam: nossas câmeras são projetadas para funcionar quando você mais precisa.
                    </p>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
                        <div v-for="tech in technologies" :key="tech.stat" class="text-center p-6 bg-background border border-border hover:border-hw-yellow transition-colors duration-150">
                            <div class="font-display font-black text-4xl md:text-5xl text-foreground mb-2">
                                {{ tech.stat }}
                            </div>
                            <div class="font-display font-bold text-sm tracking-wide text-foreground mb-1">
                                {{ tech.title }}
                            </div>
                            <p class="font-body text-sm text-muted-foreground">
                                {{ tech.desc }}
                            </p>
                        </div>
                    </div>
                    <div class="text-center mt-12">
                        <a 
                            :href="whatsappLink" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="inline-flex items-center gap-3 bg-hw-yellow font-display font-extrabold text-accent-foreground px-8 py-4 text-base md:text-lg tracking-wide hover:bg-hw-yellow-hover hover:scale-105 transition-all duration-150 animate-pulse-glow"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle w-6 h-6">
                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                            </svg>
                            SOLICITE SEU ORÇAMENTO
                        </a>
                    </div>
                </div>
            </section>

            <!-- APP FEATURES SECTION -->
            <section class="hw-section bg-background">
                <div class="hw-container">
                    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div class="flex-1 flex justify-center">
                            <img src="/assets/app-mockup-CJNoBoKI.png" alt="Aplicativo HW Segurança mostrando câmera ao vivo" class="w-64 md:w-80 drop-shadow-2xl">
                        </div>
                        <div class="flex-1 text-center lg:text-left">
                            <h2 class="font-display font-black text-3xl md:text-4xl text-foreground mb-6 leading-tight">SUA CASA NA PALMA<span class="block text-hw-yellow">DA SUA MÃO.</span></h2>
                            <p class="font-body text-lg text-muted-foreground mb-6">Acompanhe tudo em tempo real, de qualquer lugar do mundo. Receba alertas inteligentes quando algo suspeito for detectado.</p>
                            <ul class="space-y-3 mb-8 text-left max-w-md mx-auto lg:mx-0">
                                <li class="flex items-center gap-3"><div class="w-2 h-2 bg-hw-yellow shrink-0"></div><span class="font-body text-foreground font-medium">Acesso remoto pelo celular 24h</span></li>
                                <li class="flex items-center gap-3"><div class="w-2 h-2 bg-hw-yellow shrink-0"></div><span class="font-body text-foreground font-medium">Alertas inteligentes por movimento</span></li>
                                <li class="flex items-center gap-3"><div class="w-2 h-2 bg-hw-yellow shrink-0"></div><span class="font-body text-foreground font-medium">Replay e download de gravações</span></li>
                                <li class="flex items-center gap-3"><div class="w-2 h-2 bg-hw-yellow shrink-0"></div><span class="font-body text-foreground font-medium">Compartilhe acesso com a família</span></li>
                            </ul>
                            <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 bg-hw-yellow font-display font-extrabold text-accent-foreground px-8 py-4 text-base md:text-lg tracking-wide hover:bg-hw-yellow-hover hover:scale-105 transition-all duration-150 animate-pulse-glow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle w-6 h-6"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>QUERO MONITORAR MINHA CASA
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- TESTIMONIALS SECTION -->
            <section class="hw-section bg-secondary">
                <div class="hw-container">
                    <h2 class="font-display font-black text-3xl md:text-4xl lg:text-5xl text-center text-foreground mb-8">QUEM PROTEGE COM HW, </h2>
                    <h2 class="text-hw-yellow"><span>NÃO VOLTA ATRÁS</span></h2>                    
                    <p class="font-body text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">Mais de 2.000 residências e empresas já confiam na HW Segurança.</p>
                    <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-background border border-border p-6 md:p-8 flex flex-col">
                            <div class="flex gap-1 mb-4">
                                <component v-for="i in 5" :key="i" :is="IconStar" class="w-5 h-5 fill-hw-yellow text-hw-yellow"></component>
                            </div>
                            <p class="font-body text-foreground mb-6 flex-1 leading-relaxed">"{{ testimonial.text }}"</p>
                            <div>
                                <p class="font-display font-bold text-foreground">{{ testimonial.name }}</p>
                                <p class="font-body text-sm text-muted-foreground">{{ testimonial.location }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-12">
                        <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 bg-hw-yellow font-display font-extrabold text-accent-foreground px-8 py-4 text-base md:text-lg tracking-wide hover:bg-hw-yellow-hover hover:scale-105 transition-all duration-150 animate-pulse-glow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle w-6 h-6"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>FALE CONOSCO AGORA
                        </a>
                    </div>
                </div>
            </section>

            <!-- ABOUT SECTION -->
            <section class="hw-section bg-background">
                <div class="hw-container max-w-3xl text-center">
                    <div class="inline-block bg-hw-yellow px-4 py-1 mb-6">
                        <span class="font-display font-extrabold text-accent-foreground text-sm tracking-widest">QUEM SOMOS</span>
                    </div>
                    <h2 class="font-display font-black text-3xl md:text-4xl text-foreground mb-6">HW SEGURANÇA</h2>
                    <p class="font-body text-lg text-muted-foreground mb-6 leading-relaxed">A HW nasceu com um propósito: garantir que nenhuma família ou empresa fique vulnerável por depender de equipamentos de baixa qualidade. Com mais de 10 anos de experiência no mercado de segurança eletrônica, oferecemos soluções profissionais com tecnologia de ponta.</p>
                    <p class="font-body text-lg text-muted-foreground mb-8 leading-relaxed">Nossa equipe de engenheiros e técnicos especializados cuida de tudo: do projeto personalizado à instalação e manutenção. Porque segurança não é produto — é compromisso.</p>
                    <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 bg-hw-yellow font-display font-extrabold text-accent-foreground px-8 py-4 text-base md:text-lg tracking-wide hover:bg-hw-yellow-hover hover:scale-105 transition-all duration-150 animate-pulse-glow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle w-6 h-6"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>CONHEÇA NOSSAS SOLUÇÕES
                    </a>
                </div>
            </section>
           
            <!-- FAQ SECTION -->
<section class="hw-section bg-primary text-primary-foreground">
  <div class="hw-container max-w-3xl">
    <h2 class="font-display font-black text-3xl md:text-4xl lg:text-5xl text-center mb-12">
      AINDA TEM 
      <span class="text-hw-yellow">DÚVIDAS?</span>
    </h2>
    
    <div class="space-y-2" data-orientation="vertical">
      <div 
        v-for="faq in faqItems" 
        :key="faq.id" 
        :data-state="openFaqId === faq.id ? 'open' : 'closed'"
        data-orientation="vertical" 
        class="border-b border-primary-foreground20">
        
        <h3 data-orientation="vertical" :data-state="openFaqId === faq.id ? 'open' : 'closed'" class="flex">
          <button 
            type="button" 
            class="flex flex-1 items-center justify-between transition-all font-display font-bold text-left text-primary-foreground hover:text-hw-yellow hover:no-underline py-5 text-base md:text-lg"
            :data-state="openFaqId === faq.id ? 'open' : 'closed'"
            :aria-expanded="openFaqId === faq.id"
            @click="toggleFaq(faq.id)"
          >
            <span>{{ faq.question }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200" :style="{ transform: openFaqId === faq.id ? 'rotate(180deg)' : 'rotate(0deg)' }">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </h3>
        
        <div 
          v-if="openFaqId === faq.id"
          class="overflow-hidden text-sm transition-all accordion-content"
        >
          <p class="text-primary-foreground70 py-4 px-0">{{ faq.answer }}</p>
        </div>
      </div>
    </div>

    <div class="text-center mt-12">
      <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 bg-hw-yellow font-display font-extrabold text-accent-foreground px-8 py-4 text-base md:text-lg tracking-wide hover:bg-hw-yellow-hover hover:scale-105 transition-all duration-150 animate-pulse-glow">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle w-6 h-6">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
        </svg>
        TIRE SUAS DÚVIDAS NO WHATSAPP
      </a>
    </div>
  </div>
</section>
           
        </main>
    </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Shield as IconShield, Eye as IconEye, Wifi as IconWifi, X as IconX, Check as IconCheck, Star as IconStar } from 'lucide-vue-next'
import { useGoogleReviews } from '@/composables/useGoogleReviews'

const openFaqId = ref(null)

// Google Reviews Composable - Sincroniza automaticamente
const { googleReviewsInfo, testimonials } = useGoogleReviews()

const toggleFaq = (faqId) => {
  openFaqId.value = openFaqId.value === faqId ? null : faqId
}

// ============ DATA STRUCTURES ============

// Hero Benefits
const heroBenefits = [
  //  { id: 1, icon: IconShield, label: 'Garantia 2 anos' },
    { id: 2, icon: IconEye, label: 'Visão noturna' },
    { id: 3, icon: IconWifi, label: 'Acesso remoto' }
]

// Comparison Section
const comparisonItems = {
    generic: [
        { text: 'Imagem borrada e sem nitidez' },
        { text: 'Para de gravar quando acaba o cartão' },
        { text: 'Sem suporte — você se vira sozinho' },
        { text: 'Visão noturna de 5 metros' },
        { text: 'Sem notificação de invasão' },
        { text: 'Instalação improvisada' }
    ],
    hw: [
        { text: 'Resolução 4K Ultra HD' },
        { text: 'Gravação contínua em nuvem' },
        { text: 'Suporte técnico 24h dedicado' },
        { text: 'Visão noturna infravermelha 30m' },
        { text: 'Alerta instantâneo no celular' },
        { text: 'Instalação profissional inclusa' }
    ]
}

// Technology Stats
const technologies = [
    { stat: '4K', title: 'Resolução Ultra HD', desc: 'Imagens nítidas mesmo com zoom digital' },
    { stat: '30m', title: 'Visão Noturna', desc: 'Infravermelho que enxerga no escuro total' },
    { stat: '3s', title: 'Tempo de Alerta', desc: 'Notificação instantânea no seu celular' },
    { stat: '24/7', title: 'Monitoramento', desc: 'Gravação contínua em nuvem segura' },
    { stat: 'IP67', title: 'Resistência', desc: 'À prova d\'água, poeira e interperies' },
//    { stat: '2 anos', title: 'Garantia Total', desc: 'Cobertura completa com suporte dedicado' }
]

// Testimonials - Google Reviews Reais
// Agora sincronizados automaticamente via composable useGoogleReviews

// Google Reviews Info
// Agora sincronizado automaticamente via composable useGoogleReviews

// FAQ Items
const faqItems = [
    {
        id: 1,
        question: 'Qual o prazo de instalação?',
        answer: 'Realizamos a instalação em até 3 dias úteis após contratação, com técnicos especializados.'
    },
    {
        id: 2,
        question: 'As câmeras funcionam à noite?',
        answer: 'Sim! Nossas câmeras possuem visão noturna infravermelha com alcance de até 30 metros sem necessidade de iluminação.'
    },
    {
        id: 3,
        question: 'Consigo acessar as câmeras pelo celular?',
        answer: 'Claro! Você acessa em tempo real através do app HW Segurança, de qualquer lugar do mundo.'
    },
    {
        id: 4,
        question: 'E se a internet cair?',
        answer: 'As câmeras continuam gravando localmente. Quando internet retornar, as gravações são sincronizadas automaticamente com a nuvem.'
    },
    {
        id: 5,
        question: 'Qual a garantia dos equipamentos?',
        answer: 'Oferecemos garantia de 2 anos com cobertura total, incluindo peças e mão de obra.'
    },
    {
        id: 6,
        question: 'Vocês atendem empresas?',
        answer: 'Sim! Temos soluções personalizadas para empresas, condomínios e estabelecimentos comerciais.'
    }
]

// App Links (Centralized)
const whatsappLink = 'https://wa.me/5551933003158?text=Olá! Acessei o site e quero saber mais sobre as câmeras de segurança'

// ============ LIFECYCLE ============

onMounted(() => {
    // Hide lovable badge if in iframe
    if (window.self !== window.top || navigator.userAgent.includes('puppeteer')) {
        const badge = document.getElementById('lovable-badge')
        if (badge) {
            badge.style.display = 'none'
        }
    }

    // Add click event listener to close button
    const closeButton = document.getElementById('lovable-badge-close')
    if (closeButton) {
        closeButton.addEventListener('click', (event) => {
            event.preventDefault()
            event.stopPropagation()
            const badge = document.getElementById('lovable-badge')
            if (badge) {
                badge.classList.add('closing')
                setTimeout(() => {
                    if (badge) {
                        badge.style.display = 'none'
                    }
                }, 240)
            }
        })
    }
})
</script>

<style scoped>

/* ========================================
   HERO SECTION - LÂMINA 1 (CAMERAS) - CORRIGIDO
   ======================================== */

/* Isola a landing do tema escuro global */
.cameras-landing-page {
  background-color: #ffffff;
  color: #1a1a1a;
  overflow-x: hidden;
}

.cameras-landing-page,
.cameras-landing-page * {
  box-sizing: border-box;
}

.cameras-landing-page main {
  background-color: #ffffff;
  color: #1a1a1a;
}

.cameras-landing-page section {
  background-color: #ffffff;
  color: #1a1a1a;
}

/* ========================================
   HERO SECTION - Dimensionamento
   ======================================== */

.cameras-landing-page .hw-section:first-of-type {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.cameras-landing-page .hw-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

/* ========================================
   FLEX LAYOUT - Duas Colunas
   ======================================== */

.cameras-landing-page .hw-section:first-of-type .hw-container > div {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .cameras-landing-page .hw-section:first-of-type .hw-container > div {
    flex-direction: row;
    align-items: flex-start;
    gap: 5rem;
  }
}

/* Text Column - Esquerda */
.cameras-landing-page .flex-1.text-center.lg\:text-left {
  flex: 1;
  text-align: center;
  width: 100%;
}

@media (min-width: 1024px) {
  .cameras-landing-page .flex-1.text-center.lg\:text-left {
    text-align: left;
    width: auto;
  }
}

/* Camera Image Column - Direita */
.cameras-landing-page .flex-1.flex.justify-center {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

@media (min-width: 1024px) {
  .cameras-landing-page .flex-1.flex.justify-center {
    justify-content: flex-end;
  }
}

/* ========================================
   TIPOGRAFIA - Títulos e Textos
   ======================================== */

/* Badge "HW SEGURANÇA" */
.cameras-landing-page .inline-block.bg-hw-yellow {
  background-color: #ffd700;
  color: #1a1a1a;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 1.5rem;
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);
}

/* H1 - Título Principal (REDIMENSIONADO) */
.cameras-landing-page h1 {
  font-size: 2.25rem;
  line-height: 1.15;
  font-weight: 900;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .cameras-landing-page h1 {
    font-size: 2.75rem;
  }
}

@media (min-width: 1024px) {
  .cameras-landing-page h1 {
    font-size: 2.875rem;
  }
}

/* Subtítulo dentro do H1 */
.cameras-landing-page h1 span.block {
  font-size: 1rem;
  color: #666666;
  font-weight: 700;
  margin-top: 0.75rem;
  line-height: 1.4;
}

@media (min-width: 768px) {
  .cameras-landing-page h1 span.block {
    font-size: 1.125rem;
  }
}

@media (min-width: 1024px) {
  .cameras-landing-page h1 span.block {
    font-size: 1.25rem;
  }
}

/* Descrição (P) */
.cameras-landing-page p.font-body {
  font-size: 1rem;
  color: #666666;
  margin-bottom: 2rem;
  line-height: 1.7;
  max-width: 500px;
}

@media (min-width: 768px) {
  .cameras-landing-page p.font-body {
    font-size: 1.0625rem;
  }
}

@media (min-width: 1024px) {
  .cameras-landing-page p.font-body {
    margin-left: 0;
  }
}

/* ========================================
   BOTÃO CTA - "FALE COM UM ESPECIALISTA" (PILL)
   ======================================== */

.cameras-landing-page a.bg-hw-yellow {
  background-color: #ffd700;
  color: #1a1a1a;
  padding: 0.75rem 1.75rem;
  border-radius: 50px;
  font-weight: 900;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: 0.03em;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  text-decoration: none;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

@media (min-width: 768px) {
  .cameras-landing-page a.bg-hw-yellow {
    font-size: 1rem;
    padding: 0.875rem 2rem;
  }
}

.cameras-landing-page a.bg-hw-yellow:hover {
  background-color: #ffed4e;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 16px 45px rgba(255, 215, 0, 0.4);
  letter-spacing: 0.05em;
}

.cameras-landing-page a.bg-hw-yellow:active {
  transform: translateY(-1px) scale(1.02);
}

/* Ícone do botão */
.cameras-landing-page svg.w-6.h-6 {
  width: 1.375rem;
  height: 1.375rem;
  stroke-width: 2.5;
}

/* ========================================
   BENEFITS - Ícones de Benefício
   ======================================== */

.cameras-landing-page .flex.items-center.gap-6 {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

@media (min-width: 1024px) {
  .cameras-landing-page .flex.items-center.gap-6 {
    justify-content: flex-start;
  }
}

.cameras-landing-page .flex.items-center.gap-2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666666;
  transition: all 0.3s ease;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
}

.cameras-landing-page .flex.items-center.gap-2:hover {
  background-color: rgba(255, 215, 0, 0.1);
  transform: scale(1.05);
}

.cameras-landing-page .flex.items-center.gap-2 svg {
  width: 1.25rem;
  height: 1.25rem;
  color: #ffd700;
  flex-shrink: 0;
}

.cameras-landing-page .flex.items-center.gap-2 span {
  font-size: 0.875rem;
  font-weight: 500;
  color: #1a1a1a;
}

/* ========================================
   IMAGEM DA CÂMERA
   ======================================== */

.cameras-landing-page img {
  width: 100%;
  max-width: 280px;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.12));
  border-radius: 16px;
  transition: transform 0.4s ease, filter 0.4s ease;
}

.cameras-landing-page section:nth-of-type(1) img:hover,
.cameras-landing-page section:nth-of-type(4) img:hover {
  transform: scale(1.02);
  filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.18));
}

@media (min-width: 768px) {
  .cameras-landing-page img {
    max-width: 380px;
  }
}

@media (min-width: 1024px) {
  .cameras-landing-page img {
    max-width: 420px;
  }
}

/* ========================================
   CTA SECTION - Espaçamento
   ======================================== */

.cameras-landing-page .flex.flex-col.sm\:flex-row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .cameras-landing-page .flex.flex-col.sm\:flex-row {
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .cameras-landing-page .flex.flex-col.sm\:flex-row {
    justify-content: flex-start;
  }
}

/* ========================================
   SUPORTE - Notifications & Accordion
   ======================================== */

.notifications-region {
  pointer-events: none;
}

.accordion-content {
  --radix-accordion-content-height: var(--radix-collapsible-content-height);
  --radix-accordion-content-width: var(--radix-collapsible-content-width);
}

/* ========================================
   RESPONSIVO - Mobile First
   ======================================== */

@media (max-width: 767px) {
  .cameras-landing-page .hw-section:first-of-type {
    min-height: auto;
    padding: 2rem 0;
  }

  .cameras-landing-page h1 {
    font-size: 1.875rem;
  }

  .cameras-landing-page .flex-1.text-center.lg\:text-left {
    text-align: center;
  }

  .cameras-landing-page .flex.flex-col.sm\:flex-row {
    justify-content: center;
  }
}

/* ========================================
   ANIMAÇÕES
   ======================================== */

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  }
  50% {
    box-shadow: 0 12px 35px rgba(255, 215, 0, 0.5);
  }
}

@keyframes float-bounce {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes shimmer {
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: -200% center;
  }
}

.cameras-landing-page a.bg-hw-yellow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* ========================================
   COMPARISON SECTION - LÂMINA 2
   ======================================== */

/* Sobrescreve o fundo branco herdado */
.cameras-landing-page section:nth-of-type(2) {
  background-color: #1a1a1a;
  color: #ffffff;
}

.cameras-landing-page section:nth-of-type(2) * {
  color: inherit;
}

/* ========================================
   COMPARISON SECTION - Container
   ======================================== */

.cameras-landing-page section:nth-of-type(2) .hw-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

/* ========================================
   TÍTULOS - COMPARISON
   ======================================== */

.cameras-landing-page section:nth-of-type(2) h2 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.2;
}

@media (min-width: 768px) {
  .cameras-landing-page section:nth-of-type(2) h2 {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .cameras-landing-page section:nth-of-type(2) h2 {
    font-size: 3.25rem;
  }
}

/* Destacar a parte em amarelo do título */
.cameras-landing-page section:nth-of-type(2) h2 span.block {
  display: block;
  color: #ffd700;
  font-weight: 900;
  margin-top: 0.5rem;
}

/* Descrição */
.cameras-landing-page section:nth-of-type(2) p.font-body {
  text-align: center;
  color: #cccccc;
  font-size: 1.125rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* ========================================
   GRID DE COMPARAÇÃO - 2 COLUNAS
   ======================================== */

.cameras-landing-page section:nth-of-type(2) .grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  max-width: 900px;
  margin: 0 auto;
  border: 2px solid rgba(255, 255, 255, 0.15);
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .cameras-landing-page section:nth-of-type(2) .grid {
    grid-template-columns: 1fr;
  }
}

/* ========================================
   COLUNA ESQUERDA - CÂMERAS GENÉRICAS (X)
   ======================================== */

.cameras-landing-page section:nth-of-type(2) .grid > div:first-child {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 2.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.cameras-landing-page section:nth-of-type(2) .grid > div:first-child:hover {
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
}

@media (min-width: 769px) {
  .cameras-landing-page section:nth-of-type(2) .grid > div:first-child {
    border-bottom: 0;
  }
}

@media (max-width: 768px) {
  .cameras-landing-page section:nth-of-type(2) .grid > div:first-child {
    border-right: 0;
  }
}

/* H3 - Título da coluna esquerda */
.cameras-landing-page section:nth-of-type(2) .grid > div:first-child h3 {
  font-size: 1.25rem;
  font-weight: 900;
  color: #ee5a6f;
  text-align: center;
  margin-bottom: 2rem;
}

/* ========================================
   COLUNA DIREITA - CÂMERAS HW (✓)
   ======================================== */

.cameras-landing-page section:nth-of-type(2) .grid > div:last-child {
  background-color: #1a1a1a;
  padding: 2.5rem;
}

/* H3 - Título da coluna direita */
.cameras-landing-page section:nth-of-type(2) .grid > div:last-child h3 {
  font-size: 1.25rem;
  font-weight: 900;
  color: #ffd700;
  text-align: center;
  margin-bottom: 2rem;
}

/* ========================================
   LISTAS DE ITENS
   ======================================== */

.cameras-landing-page section:nth-of-type(2) ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cameras-landing-page section:nth-of-type(2) li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
}

.cameras-landing-page section:nth-of-type(2) li:hover {
  transform: translateX(6px);
}

/* Ícone X (vermelho) */
.cameras-landing-page section:nth-of-type(2) .grid > div:first-child li svg {
  width: 1.5rem;
  height: 1.5rem;
  color: #ee5a6f;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

/* Ícone Check (amarelo) */
.cameras-landing-page section:nth-of-type(2) .grid > div:last-child li svg {
  width: 1.5rem;
  height: 1.5rem;
  color: #ffd700;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

/* Texto dos itens */
.cameras-landing-page section:nth-of-type(2) li span {
  color: #e0e0e0;
  font-weight: 500;
}

.cameras-landing-page section:nth-of-type(2) .grid > div:first-child li span {
  color: #b0b0b0;
}

.cameras-landing-page section:nth-of-type(2) .grid > div:last-child li span {
  color: #ffffff;
}

/* ========================================
   BOTÃO CTA - COMPARISON
   ======================================== */

.cameras-landing-page section:nth-of-type(2) .text-center {
  text-align: center;
  margin-top: 3rem;
}

.cameras-landing-page section:nth-of-type(2) a.bg-hw-yellow {
  background-color: #ffd700;
  color: #1a1a1a;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 900;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: 0.03em;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  text-decoration: none;
  border: none;
  cursor: pointer;
}

@media (min-width: 768px) {
  .cameras-landing-page section:nth-of-type(2) a.bg-hw-yellow {
    font-size: 1.0625rem;
    padding: 1rem 2.5rem;
  }
}

.cameras-landing-page section:nth-of-type(2) a.bg-hw-yellow:hover {
  background-color: #ffed4e;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 16px 45px rgba(255, 215, 0, 0.4);
}

.cameras-landing-page section:nth-of-type(2) svg.w-6.h-6 {
  width: 1.375rem;
  height: 1.375rem;
  stroke-width: 2.5;
}

/* ========================================
   RESPONSIVO - Mobile
   ======================================== */

@media (max-width: 768px) {
  .cameras-landing-page section:nth-of-type(2) {
    padding: 2rem 0;
  }

  .cameras-landing-page section:nth-of-type(2) h2 {
    font-size: 2rem;
  }

  .cameras-landing-page section:nth-of-type(2) h3 {
    font-size: 1.125rem;
  }

  .cameras-landing-page section:nth-of-type(2) li {
    font-size: 0.95rem;
  }

  .cameras-landing-page section:nth-of-type(2) .grid > div {
    padding: 2rem;
  }
}
/* ========================================
   TECHNOLOGY SECTION - LÂMINA 3
   ======================================== */

/* Fundo cinza claro */
.cameras-landing-page section:nth-of-type(3) {
  background-color: #f5f5f5;
  color: #1a1a1a;
  padding: 4rem 0;
}

.cameras-landing-page section:nth-of-type(3) * {
  color: inherit;
}

/* ========================================
   CONTAINER
   ======================================== */

.cameras-landing-page section:nth-of-type(3) .hw-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

/* ========================================
   TÍTULO - TECHNOLOGY
   ======================================== */

.cameras-landing-page section:nth-of-type(3) h2 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .cameras-landing-page section:nth-of-type(3) h2 {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .cameras-landing-page section:nth-of-type(3) h2 {
    font-size: 3.25rem;
  }
}

/* Destacar parte em amarelo */
.cameras-landing-page section:nth-of-type(3) h2 span {
  background-color: #ffd700;
  padding: 0.5rem 1rem;
  color: #1a1a1a;
  font-weight: 900;
  display: inline-block;
}

/* Descrição */
.cameras-landing-page section:nth-of-type(3) p.font-body {
  text-align: center;
  color: #666666;
  font-size: 1.125rem;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* ========================================
   GRID DE CARDS - 3 COLUNAS
   ======================================== */

.cameras-landing-page section:nth-of-type(3) .grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .cameras-landing-page section:nth-of-type(3) .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .cameras-landing-page section:nth-of-type(3) .grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* ========================================
   CARD INDIVIDUAL
   ======================================== */

.cameras-landing-page section:nth-of-type(3) .grid > div {
  background-color: #ffffff;
  padding: 2.5rem 2rem;
  text-align: center;
  border: 2px solid #e5e7eb;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

.cameras-landing-page section:nth-of-type(3) .grid > div:hover {
  border-color: #ffd700;
  box-shadow: 0 16px 40px rgba(255, 215, 0, 0.25);
  transform: translateY(-8px);
  background: linear-gradient(135deg, #ffffff 0%, #fffef5 100%);
}

/* ========================================
   CONTEÚDO DOS CARDS
   ======================================== */

/* Número grande (Stat) */
.cameras-landing-page section:nth-of-type(3) .grid > div > div:first-child {
  font-size: 3.5rem;
  font-weight: 900;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  line-height: 1;
}

@media (max-width: 768px) {
  .cameras-landing-page section:nth-of-type(3) .grid > div > div:first-child {
    font-size: 2.75rem;
  }
}

/* Título do card */
.cameras-landing-page section:nth-of-type(3) .grid > div > div:nth-child(2) {
  font-size: 1.125rem;
  font-weight: 900;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

/* Descrição do card */
.cameras-landing-page section:nth-of-type(3) .grid > div > p {
  font-size: 0.95rem;
  color: #666666;
  line-height: 1.5;
  margin: 0;
}

/* ========================================
   BOTÃO CTA - TECHNOLOGY
   ======================================== */

.cameras-landing-page section:nth-of-type(3) .text-center {
  text-align: center;
  margin-top: 3rem;
}

.cameras-landing-page section:nth-of-type(3) a.bg-hw-yellow {
  background-color: #ffd700;
  color: #1a1a1a;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 900;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: 0.03em;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  text-decoration: none;
  border: none;
  cursor: pointer;
}

@media (min-width: 768px) {
  .cameras-landing-page section:nth-of-type(3) a.bg-hw-yellow {
    font-size: 1.0625rem;
    padding: 1rem 2.5rem;
  }
}

.cameras-landing-page section:nth-of-type(3) a.bg-hw-yellow:hover {
  background-color: #ffed4e;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 16px 45px rgba(255, 215, 0, 0.4);
}

.cameras-landing-page section:nth-of-type(3) svg.w-6.h-6 {
  width: 1.375rem;
  height: 1.375rem;
  stroke-width: 2.5;
}

/* ========================================
   RESPONSIVO - Mobile
   ======================================== */

@media (max-width: 768px) {
  .cameras-landing-page section:nth-of-type(3) {
    padding: 2rem 0;
  }

  .cameras-landing-page section:nth-of-type(3) h2 {
    font-size: 2rem;
  }

  .cameras-landing-page section:nth-of-type(3) h2 span {
    display: block;
    margin-top: 0.5rem;
  }

  .cameras-landing-page section:nth-of-type(3) p.font-body {
    font-size: 1rem;
  }

  .cameras-landing-page section:nth-of-type(3) .grid > div {
    padding: 1.75rem 1.5rem;
  }

  .cameras-landing-page section:nth-of-type(3) .grid > div > div:first-child {
    font-size: 2.5rem;
  }

  .cameras-landing-page section:nth-of-type(3) .grid > div > div:nth-child(2) {
    font-size: 1rem;
  }

  .cameras-landing-page section:nth-of-type(3) .grid > div > p {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .cameras-landing-page section:nth-of-type(3) h2 {
    font-size: 1.75rem;
  }

  .cameras-landing-page section:nth-of-type(3) .grid > div > div:first-child {
    font-size: 2rem;
  }
}
/* ========================================
   APP FEATURES SECTION - LÂMINA 4
   ======================================== */

/* Fundo branco */
.cameras-landing-page section:nth-of-type(4) {
  background-color: #ffffff;
  color: #1a1a1a;
  padding: 4rem 0;
}

.cameras-landing-page section:nth-of-type(4) * {
  color: inherit;
}

/* ========================================
   CONTAINER
   ======================================== */

.cameras-landing-page section:nth-of-type(4) .hw-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

/* ========================================
   FLEX LAYOUT - 2 COLUNAS
   ======================================== */

.cameras-landing-page section:nth-of-type(4) .hw-container > div {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .cameras-landing-page section:nth-of-type(4) .hw-container > div {
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
  }
}

/* ========================================
   COLUNA ESQUERDA - IMAGEM DO APP
   ======================================== */

.cameras-landing-page section:nth-of-type(4) .flex-1.flex.justify-center {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  order: 2;
}

@media (min-width: 1024px) {
  .cameras-landing-page section:nth-of-type(4) .flex-1.flex.justify-center {
    order: 1;
    justify-content: flex-start;
  }
}

.cameras-landing-page section:nth-of-type(4) img {
  width: 100%;
  max-width: 280px;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.12));
}

@media (min-width: 768px) {
  .cameras-landing-page section:nth-of-type(4) img {
    max-width: 320px;
  }
}

@media (min-width: 1024px) {
  .cameras-landing-page section:nth-of-type(4) img {
    max-width: 360px;
  }
}

/* ========================================
   COLUNA DIREITA - TEXTO E CTA
   ======================================== */

.cameras-landing-page section:nth-of-type(4) .flex-1.text-center.lg\:text-left {
  flex: 1;
  text-align: center;
  width: 100%;
  order: 1;
}

@media (min-width: 1024px) {
  .cameras-landing-page section:nth-of-type(4) .flex-1.text-center.lg\:text-left {
    text-align: left;
    order: 2;
  }
}

/* ========================================
   TÍTULO - APP FEATURES
   ======================================== */

.cameras-landing-page section:nth-of-type(4) h2 {
  font-size: 2.25rem;
  font-weight: 900;
  color: #1a1a1a;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .cameras-landing-page section:nth-of-type(4) h2 {
    font-size: 2.75rem;
  }
}

@media (min-width: 1024px) {
  .cameras-landing-page section:nth-of-type(4) h2 {
    font-size: 3rem;
  }
}

/* Parte em amarelo do título */
.cameras-landing-page section:nth-of-type(4) h2 span.block {
  display: block;
  color: #ffd700;
  font-weight: 900;
  margin-top: 0.5rem;
}

/* Descrição */
.cameras-landing-page section:nth-of-type(4) p.font-body {
  font-size: 1.0625rem;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  .cameras-landing-page section:nth-of-type(4) p.font-body {
    text-align: left;
  }
}

/* ========================================
   LISTA DE FEATURES
   ======================================== */

.cameras-landing-page section:nth-of-type(4) ul {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: center;
}

@media (min-width: 1024px) {
  .cameras-landing-page section:nth-of-type(4) ul {
    text-align: left;
  }
}

.cameras-landing-page section:nth-of-type(4) li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: #1a1a1a;
  font-weight: 500;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
}

@media (min-width: 1024px) {
  .cameras-landing-page section:nth-of-type(4) li {
    justify-content: flex-start;
  }
}

.cameras-landing-page section:nth-of-type(4) li:hover {
  transform: translateX(8px);
  color: #ffd700;
}

/* Bolinha amarela do item */
.cameras-landing-page section:nth-of-type(4) li > div {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #ffd700;
  border-radius: 50%;
  flex-shrink: 0;
}

/* ========================================
   BOTÃO CTA - APP FEATURES
   ======================================== */

.cameras-landing-page section:nth-of-type(4) a.bg-hw-yellow {
  background-color: #ffd700;
  color: #1a1a1a;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 900;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: 0.03em;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  text-decoration: none;
  border: none;
  cursor: pointer;
}

@media (min-width: 768px) {
  .cameras-landing-page section:nth-of-type(4) a.bg-hw-yellow {
    font-size: 1.0625rem;
    padding: 1rem 2.5rem;
  }
}

@media (min-width: 1024px) {
  .cameras-landing-page section:nth-of-type(4) a.bg-hw-yellow {
    justify-content: flex-start;
  }
}

.cameras-landing-page section:nth-of-type(4) a.bg-hw-yellow:hover {
  background-color: #ffed4e;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 16px 45px rgba(255, 215, 0, 0.4);
}

.cameras-landing-page section:nth-of-type(4) svg.w-6.h-6 {
  width: 1.375rem;
  height: 1.375rem;
  stroke-width: 2.5;
}

/* ========================================
   RESPONSIVO - Mobile
   ======================================== */

@media (max-width: 768px) {
  .cameras-landing-page section:nth-of-type(4) {
    padding: 2rem 0;
  }

  .cameras-landing-page section:nth-of-type(4) h2 {
    font-size: 1.875rem;
  }

  .cameras-landing-page section:nth-of-type(4) p.font-body {
    font-size: 1rem;
  }

  .cameras-landing-page section:nth-of-type(4) li {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .cameras-landing-page section:nth-of-type(4) h2 {
    font-size: 1.5rem;
  }

  .cameras-landing-page section:nth-of-type(4) img {
    max-width: 240px;
  }
}
/* ========================================
   TESTIMONIALS SECTION - LÂMINA 5
   ======================================== */

/* Fundo cinza claro */
.cameras-landing-page section:nth-of-type(5) {
  background-color: #f5f5f5;
  color: #1a1a1a;
  padding: 4rem 0;
}

.cameras-landing-page section:nth-of-type(5) * {
  color: inherit;
}

/* ========================================
   CONTAINER
   ======================================== */

.cameras-landing-page section:nth-of-type(5) .hw-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

/* ========================================
   TÍTULO - TESTIMONIALS
   ======================================== */

.cameras-landing-page section:nth-of-type(5) h2 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .cameras-landing-page section:nth-of-type(5) h2 {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .cameras-landing-page section:nth-of-type(5) h2 {
    font-size: 3.25rem;
  }
}

/* Parte em amarelo do título */
.cameras-landing-page section:nth-of-type(5) h2 span {
  color: #ffd700;
  font-weight: 900;
  display: inline;
}

@media (max-width: 768px) {
  .cameras-landing-page section:nth-of-type(5) h2 span {
    display: block;
    margin-top: 0.4rem;
  }
}

/* Descrição */
.cameras-landing-page section:nth-of-type(5) p.font-body {
  text-align: center;
  color: #666666;
  font-size: 1.0625rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* ========================================
   GRID DE CARDS - 3 COLUNAS
   ======================================== */

.cameras-landing-page section:nth-of-type(5) .grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1050px;
  margin: 0 auto 2rem;
}

@media (max-width: 1024px) {
  .cameras-landing-page section:nth-of-type(5) .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .cameras-landing-page section:nth-of-type(5) .grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* ========================================
   CARD INDIVIDUAL - TESTIMONIAL
   ======================================== */

.cameras-landing-page section:nth-of-type(5) .grid > div {
  background-color: #ffffff;
  padding: 2rem;
  border: 2px solid #e5e7eb;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.cameras-landing-page section:nth-of-type(5) .grid > div:hover {
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12), 0 0 20px rgba(255, 215, 0, 0.1);
  border-color: #ffd700;
  transform: translateY(-8px);
  background: linear-gradient(135deg, #ffffff 0%, #fffef5 100%);
}

/* ========================================
   ESTRELAS
   ======================================== */

.cameras-landing-page section:nth-of-type(5) .grid > div > div {
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
}

.cameras-landing-page section:nth-of-type(5) svg {
  width: 1.25rem;
  height: 1.25rem;
  color: #ffd700;
}

/* ========================================
   CITAÇÃO / TEXTO DO DEPOIMENTO
   ======================================== */

.cameras-landing-page section:nth-of-type(5) .grid > div > p {
  font-size: 1rem;
  color: #1a1a1a;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  font-style: italic;
}

/* ========================================
   AUTOR - NOME E LOCALIZAÇÃO
   ======================================== */

.cameras-landing-page section:nth-of-type(5) .grid > div > div:last-child {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border-top: 2px solid #ffd700;
  padding-top: 1rem;
  transition: all 0.3s ease;
}

/* Nome do autor */
.cameras-landing-page section:nth-of-type(5) .grid > div h4,
.cameras-landing-page section:nth-of-type(5) .grid > div strong {
  font-size: 1rem;
  font-weight: 900;
  color: #1a1a1a;
  margin: 0;
}

/* Localização */
.cameras-landing-page section:nth-of-type(5) .grid > div span {
  font-size: 0.875rem;
  color: #999999;
  margin: 0;
}

/* ========================================
   BOTÃO CTA - TESTIMONIALS
   ======================================== */

.cameras-landing-page section:nth-of-type(5) .text-center {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.cameras-landing-page section:nth-of-type(5) a.bg-hw-yellow {
  background-color: #ffd700;
  color: #1a1a1a;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 900;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: 0.03em;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  text-decoration: none;
  border: none;
  cursor: pointer;
}

@media (min-width: 768px) {
  .cameras-landing-page section:nth-of-type(5) a.bg-hw-yellow {
    font-size: 1.0625rem;
    padding: 1rem 2.5rem;
  }
}

.cameras-landing-page section:nth-of-type(5) a.bg-hw-yellow:hover {
  background-color: #ffed4e;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 16px 45px rgba(255, 215, 0, 0.4);
}

.cameras-landing-page section:nth-of-type(5) svg.w-6.h-6 {
  width: 1.375rem;
  height: 1.375rem;
  stroke-width: 2.5;
}

/* ========================================
   RESPONSIVO - Mobile
   ======================================== */

@media (max-width: 768px) {
  .cameras-landing-page section:nth-of-type(5) {
    padding: 2rem 0;
  }

  .cameras-landing-page section:nth-of-type(5) h2 {
    font-size: 2rem;
  }

  .cameras-landing-page section:nth-of-type(5) p.font-body {
    font-size: 1rem;
  }

  .cameras-landing-page section:nth-of-type(5) .grid > div {
    padding: 1.5rem;
  }

  .cameras-landing-page section:nth-of-type(5) .grid > div > p {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .cameras-landing-page section:nth-of-type(5) h2 {
    font-size: 1.75rem;
  }

  .cameras-landing-page section:nth-of-type(5) .grid > div {
    padding: 1.25rem;
  }

  .cameras-landing-page section:nth-of-type(5) .grid > div > p {
    font-size: 0.9rem;
  }

  .cameras-landing-page section:nth-of-type(5) a.bg-hw-yellow {
    font-size: 0.95rem;
    padding: 0.75rem 1.75rem;
  }
}
/* ========================================
   ABOUT SECTION - LÂMINA 6 (SIMPLES)
   ======================================== */

/* Fundo branco */
.cameras-landing-page section:nth-of-type(6) {
  background-color: #ffffff;
  color: #1a1a1a;
  padding: 4rem 2rem;
}

.cameras-landing-page section:nth-of-type(6) * {
  color: inherit;
}

/* ========================================
   CONTAINER - Centralizado
   ======================================== */

.cameras-landing-page section:nth-of-type(6) .hw-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

/* ========================================
   BADGE "QUEM SOMOS"
   ======================================== */

.cameras-landing-page section:nth-of-type(6) .inline-block.bg-hw-yellow {
  background-color: #ffd700;
  color: #1a1a1a;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 1.5rem;
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
}

/* ========================================
   TÍTULO - HW SEGURANÇA
   ======================================== */

.cameras-landing-page section:nth-of-type(6) h2 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .cameras-landing-page section:nth-of-type(6) h2 {
    font-size: 3rem;
  }
}

/* ========================================
   PARÁGRAFOS
   ======================================== */

.cameras-landing-page section:nth-of-type(6) p.font-body {
  font-size: 1rem;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.cameras-landing-page section:nth-of-type(6) p.font-body:last-of-type {
  margin-bottom: 2.5rem;
}

/* ========================================
   BOTÃO CTA
   ======================================== */

.cameras-landing-page section:nth-of-type(6) a.bg-hw-yellow {
  background-color: #ffd700;
  color: #1a1a1a;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 900;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: 0.03em;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  text-decoration: none;
  border: none;
  cursor: pointer;
}

.cameras-landing-page section:nth-of-type(6) a.bg-hw-yellow:hover {
  background-color: #ffed4e;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 16px 45px rgba(255, 215, 0, 0.4);
}

.cameras-landing-page section:nth-of-type(6) svg.w-6.h-6 {
  width: 1.375rem;
  height: 1.375rem;
  stroke-width: 2.5;
}

/* ========================================
   RESPONSIVO - Mobile
   ======================================== */

@media (max-width: 768px) {
  .cameras-landing-page section:nth-of-type(6) {
    padding: 2rem 1rem;
  }

  .cameras-landing-page section:nth-of-type(6) h2 {
    font-size: 2rem;
  }

  .cameras-landing-page section:nth-of-type(6) p.font-body {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .cameras-landing-page section:nth-of-type(6) h2 {
    font-size: 1.75rem;
  }

  .cameras-landing-page section:nth-of-type(6) p.font-body {
    font-size: 0.9rem;
  }

  .cameras-landing-page section:nth-of-type(6) a.bg-hw-yellow {
    font-size: 0.95rem;
    padding: 0.75rem 1.75rem;
  }
}
/* FAQ SECTION - LÂMINA 7 COM DROPDOWN FUNCIONANDO */
.cameras-landing-page section:nth-of-type(7) {
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 4rem 2rem;
}

.cameras-landing-page section:nth-of-type(7) .hw-container {
  max-width: 900px;
  margin: 0 auto;
}

.cameras-landing-page section:nth-of-type(7) h2 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffffff;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .cameras-landing-page section:nth-of-type(7) h2 {
    font-size: 3rem;
  }
}

.cameras-landing-page section:nth-of-type(7) h2 span {
  color: #ffd700;
  font-weight: 900;
}

/* Items do accordeão */
.cameras-landing-page section:nth-of-type(7) [data-orientation="vertical"] {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0;
  padding: 0;
}

/* Botão do accordion */
.cameras-landing-page section:nth-of-type(7) button {
  width: 100%;
  padding: 1rem 0;
  background: none;
  border: none;
  color: #ffffff;
  text-align: left;
  font-size: 1.0625rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s ease;
  font-family: inherit;
  margin: 0;
  border-radius: 8px;
  padding: 1rem 0.75rem;
  margin: 0 -0.75rem;
}

.cameras-landing-page section:nth-of-type(7) button:hover {
  color: #ffd700;
  background-color: rgba(255, 215, 0, 0.08);
  padding-left: 1rem;
}

.cameras-landing-page section:nth-of-type(7) button[data-state="open"] {
  color: #ffd700;
  background-color: rgba(255, 215, 0, 0.05);
}

/* Ícone Chevron */
.cameras-landing-page section:nth-of-type(7) button svg {
  width: 1.5rem;
  height: 1.5rem;
  color: #ffd700;
  flex-shrink: 0;
  stroke-width: 2;
  transition: transform 0.3s ease;
}

/* Conteúdo do accordion */
.cameras-landing-page section:nth-of-type(7) .accordion-content {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin: 0;
  animation: fadeIn 0.4s ease;
  background: rgba(255, 215, 0, 0.02);
  padding: 1rem 0.75rem;
  border-radius: 8px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* CTA Button */
.cameras-landing-page section:nth-of-type(7) .text-center {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.cameras-landing-page section:nth-of-type(7) a.bg-hw-yellow {
  background-color: #ffd700;
  color: #1a1a1a;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 900;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: 0.03em;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  text-decoration: none;
  border: none;
  cursor: pointer;
}

@media (min-width: 768px) {
  .cameras-landing-page section:nth-of-type(7) a.bg-hw-yellow {
    font-size: 1.0625rem;
    padding: 1rem 2.5rem;
  }
}

.cameras-landing-page section:nth-of-type(7) a.bg-hw-yellow:hover {
  background-color: #ffed4e;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 16px 45px rgba(255, 215, 0, 0.4);
}

.cameras-landing-page section:nth-of-type(7) a svg.w-6.h-6 {
  width: 1.375rem;
  height: 1.375rem;
  stroke-width: 2.5;
}

/* Responsivo */
@media (max-width: 768px) {
  .cameras-landing-page section:nth-of-type(7) {
    padding: 2rem 1rem;
  }

  .cameras-landing-page section:nth-of-type(7) h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .cameras-landing-page section:nth-of-type(7) button {
    font-size: 1rem;
    padding: 0.875rem 0;
  }

  .cameras-landing-page section:nth-of-type(7) .accordion-content {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .cameras-landing-page section:nth-of-type(7) h2 {
    font-size: 1.75rem;
  }

  .cameras-landing-page section:nth-of-type(7) button {
    font-size: 0.95rem;
    padding: 0.75rem 0;
  }

  .cameras-landing-page section:nth-of-type(7) a.bg-hw-yellow {
    font-size: 0.95rem;
    padding: 0.75rem 1.75rem;
  }
}

@media (max-width: 768px) {
  .cameras-landing-page .hw-container {
    padding: 0 1rem !important;
  }

  .cameras-landing-page .hw-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .cameras-landing-page h1 {
    font-size: 1.95rem;
    line-height: 1.25;
  }

  .cameras-landing-page h1 span.block {
    font-size: 1rem;
  }

  .cameras-landing-page a.bg-hw-yellow {
    width: 100%;
    max-width: 100%;
    justify-content: center;
  }

  .cameras-landing-page .flex.flex-col.sm\:flex-row {
    flex-wrap: wrap;
  }

  .cameras-landing-page .flex.flex-col.sm\:flex-row > * {
    width: 100%;
    max-width: 100%;
  }

  .cameras-landing-page section:nth-of-type(2) .grid > div {
    padding: 1.5rem;
  }

  .cameras-landing-page section:nth-of-type(7) button {
    margin: 0;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .cameras-landing-page section:nth-of-type(7) .accordion-content {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

</style>