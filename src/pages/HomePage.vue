<template>
  <div>
    <HeroSection :stats="stats" />
  <!-- <ServicesSection :services="services" /> -->
    <WhyChooseUsSection :reasons="whyChooseUs" />
    <PartnersSection />
    <TestimonialsSection :testimonials="testimonials" />
    <CoverageSection :coverage="coverage" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
// import ServicesSection from '../components/ServicesSection.vue'
import WhyChooseUsSection from '../components/WhyChooseUsSection.vue'
import PartnersSection from '../components/PartnersSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import CoverageSection from '../components/CoverageSection.vue'

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
    icon: 'fas fa-home',
    title: 'Segurança Residencial e Alarmes Monitorados',
    description: 'Soluções completas para proteger sua residência ou empresa: alarmes monitorados, sensores inteligentes, monitoramento 24h, resposta rápida e controle total pelo app.',
    features: [
      'Alarmes residenciais e empresariais',
      'Sensores inteligentes',
      'Central 24h',
      'Resposta rápida',
      'App mobile',
      'CFTV doméstico',
      'Controle remoto',
      'Monitoramento 24h'
    ]
  },
  {
    id: 4,
    icon: 'fas fa-car',
    title: 'Rastreamento Veicular',
    description: 'Proteção completa para veículos com GPS de alta precisão e bloqueio remoto.',
    features: ['GPS alta precisão', 'Bloqueio remoto', 'Alertas tempo real', 'Gestão de frotas']
  },

  {
    id: 6,
    icon: 'fas fa-building',
    title: 'Segurança Empresarial',
    description: 'Proteção corporativa completa com sistemas integrados e monitoramento especializado.',
    features: ['Sistemas integrados', 'Controle de funcionários', 'Relatórios gerenciais', 'Suporte dedicado']
  },
  {
    id: 7,
    icon: 'fas fa-broom',
    title: 'Facilities',
    description: 'Serviços de apoio para empresas e condomínios: limpeza, zeladoria, recepção, portaria social e mais.',
    features: [
      'Limpeza profissional',
      'Zeladoria',
      'Recepção',
      'Portaria social',
      'Serviços de apoio sob demanda',
      'Equipe treinada e uniformizada'
    ]
  }
])

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
</script>
