/**
 * API Backend Example - Google Reviews Scraper
 * 
 * Este arquivo é um exemplo de como implementar o backend
 * para fazer scraping dos reviews do Google Maps
 * 
 * Instale: npm install express axios cheerio cors dotenv
 * 
 * Use este para implementar seu próprio endpoint backend
 */

// ============ NODEJS EXPRESS BACKEND EXAMPLE ============

/*
import express from 'express'
import axios from 'axios'
import * as cheerio from 'cheerio'
import cors from 'cors'

const app = express()
app.use(cors())

const GOOGLE_PLACE_ID = '0x95190dc9712add5d:0x2c2d9ad73aa133b6'
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/GRUPO+HW+-+Alarmes+Monitorados-+Rastreamento+veicular-+Portaria/@-29.8781254,-50.9875182,20.5z/data=!4m8!3m7!1s0x95190dc9712add5d:0x2c2d9ad73aa133b6!8m2!3d-29.8781745!4d-50.9877305!9m1!1b1!16s%2Fg%2F11j37kycf7'

// Endpoint para sincronizar reviews do Google
app.get('/api/google-reviews', async (req, res) => {
  try {
    // Fazer request para o Google Maps
    const response = await axios.get(GOOGLE_MAPS_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    })

    // Parse HTML com cheerio
    const $ = cheerio.load(response.data)

    // Extrair rating e total de reviews
    const ratingText = $('[aria-label*="estrelas"]').attr('aria-label')
    const rating = parseFloat(ratingText) || 4.8
    const totalReviews = parseInt($('[role="img"][aria-label*="avaliações"]').text()) || 53

    // Retornar dados
    res.json({
      rating,
      totalReviews,
      lastUpdated: new Date(),
      url: GOOGLE_MAPS_URL
    })
  } catch (error) {
    console.error('Erro ao scraping Google Reviews:', error)
    res.status(500).json({
      error: 'Falha ao sincronizar com Google Reviews',
      message: error.message
    })
  }
})

app.listen(3000, () => {
  console.log('✅ API de Google Reviews rodando em http://localhost:3000')
})
*/

// ============ ALTERNATIVA: USANDO PLAYWRIGHT (Melhor Performance) ============

/*
import express from 'express'
import { chromium } from 'playwright'

const app = express()

app.get('/api/google-reviews', async (req, res) => {
  let browser

  try {
    browser = await chromium.launch()
    const page = await browser.newPage()

    // Acessar página do Google Maps
    await page.goto('https://www.google.com/maps/place/...')

    // Esperar carregamento dos dados
    await page.waitForSelector('[aria-label*="estrelas"]', { timeout: 5000 })

    // Extrair dados
    const rating = await page.locator('[aria-label*="estrelas"]').first().getAttribute('aria-label')
    const reviewCount = await page.locator('[role="img"][aria-label*="avaliações"]').textContent()

    res.json({
      rating: parseFloat(rating) || 4.8,
      totalReviews: parseInt(reviewCount) || 53,
      lastUpdated: new Date()
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  } finally {
    if (browser) await browser.close()
  }
})

app.listen(3000)
*/

// ============ ALTERNATIVA: USANDO API EXTERNA (Mais Simples) ============

/*
// Use serviços como:
// - GooglePlacesAPI (requer API key)
// - PlaceIQ
// - Trustpilot API
// - ReviewMeta

import express from 'express'

const app = express()

// Exemplo com Google Places API
app.get('/api/google-reviews', async (req, res) => {
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
  const PLACE_ID = '0x95190dc9712add5d:0x2c2d9ad73aa133b6'

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&key=${GOOGLE_API_KEY}`
    )
    const data = await response.json()

    res.json({
      rating: data.result.rating || 4.8,
      totalReviews: data.result.user_ratings_total || 53,
      reviews: data.result.reviews || [],
      lastUpdated: new Date()
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(3000)
*/

// ============ RECOMENDAÇÃO ============
/*
Para sincronização automática em produção, recomendo:

1. **Usar Google Places API** - Mais confiável
   - Requer API key (pago)
   - Dados oficiais do Google

2. **Cache com Redis** - Para não sobrecarregar
   - Sincroniza a cada 1-3 horas
   - Retorna cache se disponível

3. **Monitoramento** - Para verificar falhas
   - Log de sincronizações
   - Alertas se rating cair muito

4. **Tratamento de erro** - Mostra dados estáticos como fallback
   - Se API falhar, mostra última sincronização
   - Nunca mostra erro ao usuário
*/

export default {
  GOOGLE_PLACE_ID,
  GOOGLE_MAPS_URL,
  SYNC_INTERVAL: 3 * 60 * 60 * 1000 // 3 horas
}
