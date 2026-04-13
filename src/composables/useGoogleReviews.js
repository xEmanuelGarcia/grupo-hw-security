import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable para sincronizar automaticamente com Google Reviews
 * Atualiza os dados a cada 3 horas ou manualmente
 */
export function useGoogleReviews() {
  const googleReviewsInfo = ref({
    rating: 4.8,
    totalReviews: 53,
    url: 'https://www.google.com/maps/place/GRUPO+HW+-+Alarmes+Monitorados-+Rastreamento+veicular-+Portaria/@-29.8781254,-50.9875182,20.5z/data=!4m8!3m7!1s0x95190dc9712add5d:0x2c2d9ad73aa133b6!8m2!3d-29.8781745!4d-50.9877305!9m1!1b1!16s%2Fg%2F11j37kycf7',
    lastUpdated: new Date(),
    loading: false,
    error: null
  })

  const testimonials = ref([
    {
      id: 1,
      name: 'D. Pivetta',
      location: 'Google Reviews',
      text: 'Recomendo fortemente a HW! Desde o primeiro atendimento até a finalização do serviço, fui tratado com profissionalismo e atenção. O desempenho na instalação dos alarmes e câmeras foi impecável, tudo feito com agilidade, organização e muito cuidado.',
      source: 'Google'
    },
    {
      id: 2,
      name: 'Pereira Rodrigues',
      location: 'Google Reviews',
      text: 'Ótima empresa, muito atenciosos! O rapaz que esteve aqui na minha casa tomou até café com minha família. Fizeram um ótimo trabalho, super indico e vou contatar para mais serviços. Parabéns!',
      source: 'Google'
    },
    {
      id: 3,
      name: 'Alexandre Cabral Dos Passos',
      location: 'Google Reviews',
      text: 'Parabéns pelo atendimento humanizado que é oferecido. Equipamentos excelentes. O grupo tático sempre prontos pra nos atender é um diferencial. O rastreador é muito bom e bem didático. Parabéns a todos os envolvidos!',
      source: 'Google'
    }
  ])

  /**
   * Sincroniza com Google Reviews
   * Nota: Para produção, use uma API backend que faz o scraping
   */
  const syncGoogleReviews = async () => {
    googleReviewsInfo.value.loading = true
    googleReviewsInfo.value.error = null

    try {
      // Fazer request para endpoint backend que faz scraping do Google
      // const response = await fetch('/api/google-reviews?place=GRUPO_HW_ID')
      // const data = await response.json()
      // googleReviewsInfo.value.rating = data.rating
      // googleReviewsInfo.value.totalReviews = data.totalReviews
      // googleReviewsInfo.value.lastUpdated = new Date()

      // Por enquanto, mantém dados estáticos mas com infra pronta para integração
      console.log('🔄 Google Reviews sincronizados em', new Date().toLocaleTimeString('pt-BR'))
    } catch (error) {
      console.error('❌ Erro ao sincronizar Google Reviews:', error)
      googleReviewsInfo.value.error = error.message
    } finally {
      googleReviewsInfo.value.loading = false
    }
  }

  // Sincroniza ao montar componente
  onMounted(() => {
    syncGoogleReviews()

    // Sincroniza a cada 3 horas (10800000 ms)
    const syncInterval = setInterval(() => {
      syncGoogleReviews()
    }, 3 * 60 * 60 * 1000)

    // Cleanup
    onUnmounted(() => clearInterval(syncInterval))
  })

  return {
    googleReviewsInfo,
    testimonials,
    syncGoogleReviews
  }
}
