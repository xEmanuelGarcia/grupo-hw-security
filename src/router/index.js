import { createRouter, createWebHistory } from 'vue-router'

// Importação lazy dos componentes de página
const Home = () => import('../pages/HomePage.vue')
const About = () => import('../pages/AboutPage.vue')
const Services = () => import('../pages/ServicesPage.vue')
const Contact = () => import('../pages/ContactPage.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Grupo HW - Segurança e Proteção',
      description: 'Soluções completas em segurança, monitoramento, portarias, CFTV, alarmes e rastreamento para residências e empresas na região metropolitana de Porto Alegre.'
    }
  },
  {
    path: '/sobre',
    name: 'About',
    component: About,
    meta: {
      title: 'Sobre o Grupo HW',
      description: 'Conheça a história, missão e certificações do Grupo HW, referência em segurança e monitoramento.'
    }
  },
  {
    path: '/servicos',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Nossos Serviços - Grupo HW',
      description: 'Portarias, CFTV, alarmes monitorados, rastreamento veicular e soluções completas em segurança.'
    }
  },
  {
    path: '/contato',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contato - Grupo HW',
      description: 'Fale com o Grupo HW para orçamento, dúvidas ou suporte em soluções de segurança.'
    }
  },
  {
    path: '/servicos/portaria',
    name: 'PortariaDetail',
    component: () => import('../pages/PortariaDetail.vue'),
    meta: {
      title: 'Portarias e Controle de Acesso - Grupo HW',
      description: 'Detalhes completos sobre portarias físicas, virtuais e controle de acesso.'
    }
  },
  {
    path: '/servicos/cftv',
    name: 'CFTVDetail',
    component: () => import('../pages/CFTVDetail.vue'),
    meta: {
      title: 'CFTV e Monitoramento - Grupo HW',
      description: 'Detalhes completos sobre sistemas de CFTV e monitoramento 24h.'
    }
  },
  {
    path: '/servicos/alarme-residencial',
    name: 'AlarmeResidencialDetail',
    component: () => import('../pages/AlarmeResidencialDetail.vue'),
    meta: {
      title: 'Segurança Residencial e Alarmes Monitorados - Grupo HW',
      description: 'Detalhes completos sobre alarmes monitorados e soluções residenciais.'
    }
  },
  {
    path: '/servicos/rastreamento-veicular',
    name: 'RastreamentoVeicularDetail',
    component: () => import('../pages/RastreamentoVeicularDetail.vue'),
    meta: {
      title: 'Rastreamento Veicular - Grupo HW',
      description: 'Detalhes completos sobre rastreamento veicular, monitoramento em tempo real, bloqueio remoto e gestão de frotas.'
    }
  },
  {
    path: '/servicos/facilities',
    name: 'FacilitiesDetail',
    component: () => import('../pages/FacilitiesDetail.vue'),
    meta: {
      title: 'Facilities e Serviços Terceirizados - Grupo HW',
      description: 'Detalhes completos sobre terceirização de serviços, facilities, limpeza, portaria, manutenção e apoio para empresas e condomínios.'
    }
  },
  {
    path: '/servicos/seguranca-empresarial',
    name: 'SegurancaEmpresarialDetail',
    component: () => import('../pages/SegurancaEmpresarialDetail.vue'),
    meta: {
      title: 'Segurança Empresarial - Grupo HW',
      description: 'Soluções integradas para proteção de empresas, indústrias e comércios: monitoramento, controle de acesso, consultoria e gestão de riscos.'
    }
  },
  {
    path: '/politica-de-privacidade',
    name: 'PoliticaPrivacidade',
    component: () => import('../pages/PoliticaPrivacidade.vue'),
    meta: {
      title: 'Política de Privacidade - Grupo HW',
      description: 'Saiba como tratamos seus dados pessoais, cookies e informações de navegação.'
    }
  },
  {
    path: '/termos-de-uso',
    name: 'TermosUso',
    component: () => import('../pages/TermosUso.vue'),
    meta: {
      title: 'Termos de Uso - Grupo HW',
      description: 'Regras para navegação, direitos e deveres dos usuários do site.'
    }
  },
  {
    path: '/promocao/kit-cameras',
    name: 'KitCamerasPromo',
    component: () => import('../pages/promocoes/KitCamerasPromo.vue'),
    meta: {
      title: 'Oferta Especial - Kit de Câmeras CFTV com 30% OFF - Grupo HW',
      description: 'Aproveite nossa promoção exclusiva! Kit completo de câmeras CFTV com instalação gratuita e 30% de desconto. Oferta por tempo limitado!'
    }
  },
  {
    path: '/seguranca',
    name: 'LandingPage',
    component: () => import('../pages/LandingPage.vue'),
    meta: {
      title: 'Segurança 24h por dia, 7 dias por semana - Grupo HW',
      description: 'Mais de 7 anos oferecendo segurança completa com tecnologia de ponta e resposta imediata. Proteção residencial e empresarial.',
      keywords: 'segurança 24h, alarme monitorado, cftv, proteção residencial, segurança empresarial, grupo hw'
    }
  },
  {
    path: '/campanha',
    redirect: '/seguranca'
  },
  {
    path: '/landing',
    redirect: '/seguranca'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Sempre rola para o topo ao trocar de rota
    return { top: 0 }
  }
})

export default router
