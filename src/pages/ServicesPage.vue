<template>
  <div>
    <ServicesSection :services="services" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ServicesSection from '../components/ServicesSection.vue'


const services = ref([
  {
    id: 'portaria',
    icon: 'fas fa-shield-alt',
    title: 'Portarias e Controle de Acesso',
    description: 'Serviços de portaria física e virtual com controle de acesso inteligente e monitoramento 24h.',
    features: ['Portaria física', 'Portaria virtual', 'Controle de acesso', 'Monitoramento 24h']
  },
  {
    id: 'cftv',
    icon: 'fas fa-video',
    title: 'CFTV e Monitoramento',
    description: 'Instalação e monitoramento de circuito fechado de TV com câmeras de alta definição.',
    features: ['Instalação profissional', 'Câmeras HD/4K', 'Visão noturna', 'Acesso remoto']
  },
  {
    id: 'alarme-residencial',
    icon: 'fas fa-home',
    title: 'Segurança Residencial e Alarmes Monitorados',
    description: 'Alarmes monitorados, sensores inteligentes e monitoramento 24h para sua casa ou empresa.',
    features: [
      'Alarmes monitorados',
      'Sensores inteligentes',
      'Monitoramento 24h',
      'App mobile'
    ]
  },
  {
    id: 'rastreamento-veicular',
    icon: 'fas fa-car',
    title: 'Rastreamento Veicular',
    description: 'Proteção completa para veículos com GPS de alta precisão e bloqueio remoto.',
    features: ['GPS alta precisão', 'Bloqueio remoto', 'Alertas tempo real', 'Gestão de frotas']
  },
  {
    id: 'facilities',
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
  },
  {
    id: 'seguranca-empresarial',
    icon: 'fas fa-building',
    title: 'Segurança Empresarial',
    description: 'Proteção corporativa completa com sistemas integrados e monitoramento especializado.',
    features: ['Sistemas integrados', 'Controle de funcionários', 'Relatórios gerenciais', 'Suporte dedicado']
  }
])
</script>
