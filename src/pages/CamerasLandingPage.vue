<template>
  <div class="cameras-landing">
    <!-- Hero Section -->
    <section class="hero-cameras">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              O que foi conquistado com anos<br/>
              não vai ser levado em minutos
            </h1>
            <div class="location-badge">
              <i class="fas fa-shield-alt"></i>
              <span>Proteção 24/7</span>
            </div>
            <p class="hero-subtitle">
              Invista em segurança de verdade. Câmeras com visão total, 
              alertas instantâneos e o conforto de saber: agora nada passa despercebido.
            </p>
            <a href="https://wa.me/5551933003158?text=Olá!%20Quero%20proteger%20meu%20espaço%20com%20câmeras%20de%20segurança!" 
               class="btn btn-primary btn-large">
              <i class="fab fa-whatsapp"></i>
              Quero meu orçamento
            </a>
          </div>
          <div class="hero-image">
            <img :src="cameraImg" 
                 alt="Câmera de Segurança PTZ" 
                 class="camera-img">
          </div>
        </div>
      </div>
    </section>

    <!-- Problemas Section -->
    <section class="problems-section">
      <div class="container">
        <h2 class="section-title">É impossível estar em todos os lugares ao mesmo tempo</h2>
        
        <div class="problems-grid">
          <div class="problem-card">
            <i class="fas fa-door-open problem-icon"></i>
            <h3>Portões</h3>
          </div>
          <div class="problem-card">
            <i class="fas fa-boxes problem-icon"></i>
            <h3>Estoque</h3>
          </div>
          <div class="problem-card">
            <i class="fas fa-warehouse problem-icon"></i>
            <h3>Garagem</h3>
          </div>
          <div class="problem-card">
            <i class="fas fa-door-closed problem-icon"></i>
            <h3>Corredores</h3>
          </div>
        </div>

        <div class="highlight-box">
          <div class="highlight-content">
            <p class="highlight-text">
              <strong class="fear-phrase">Se você já teve medo de sair de casa,</strong><br/>
              deixar seu negócio sozinho ou se preocupou<br/>
              com o que acontece quando você não está presente...
            </p>
            <p class="impact-phrase">Então saiba a importância de agir<br/>antes que algo aconteça.</p>
            <a href="https://wa.me/5551933003158?text=Olá!%20Quero%20proteção%20com%20câmeras%20de%20segurança!" 
               class="btn btn-primary btn-large">
              <i class="fab fa-whatsapp"></i>
              Quero proteção
            </a>
          </div>
          <div class="highlight-image">
            <img :src="camera2Img" 
                 alt="Sistema de Câmeras de Segurança" 
                 class="ptz-img">
          </div>
        </div>
      </div>
    </section>

    <!-- Tipos de Câmeras Section -->
    <section class="cameras-types">
      <div class="container">
        <h2 class="section-title white">Câmeras de segurança para quem<br/>leva proteção a sério</h2>
        
        <div class="types-grid">
          <div class="type-card">
            <img :src="camera3Img" 
                 alt="Câmera Externas" 
                 class="type-img">
            <h3>Câmeras Externas HD</h3>
          </div>
          <div class="type-card">
            <img :src="camera4Img" 
                 alt="Monitoramento Interno" 
                 class="type-img">
            <h3>Monitoramento Interno</h3>
          </div>
          <div class="type-card">
            <img :src="camera5Img" 
                 alt="Centro de Monitoramento" 
                 class="type-img">
            <h3>Central 24 horas</h3>
          </div>
        </div>

        <div class="features-grid">
          <div class="feature-item">
            <i class="fas fa-video"></i>
            <div>
              <h4>Imagens em alta<br/>definição 24h</h4>
            </div>
          </div>
          <div class="feature-item">
            <i class="fas fa-mobile-alt"></i>
            <div>
              <h4>Acesse remoto<br/>via celular</h4>
            </div>
          </div>
          <div class="feature-item">
            <i class="fas fa-eye"></i>
            <div>
              <h4>Detecção de<br/>movimento com alerta<br/>em tempo real</h4>
            </div>
          </div>
          <div class="feature-item">
            <i class="fas fa-database"></i>
            <div>
              <h4>Gravação contínua<br/>armazenamento seguro</h4>
            </div>
          </div>
        </div>

        <div class="cta-center">
          <a href="https://wa.me/5551933003158?text=Olá!%20Quero%20instalar%20câmeras%20de%20segurança!" 
             class="btn btn-primary btn-large">
            Solicitar contato
          </a>
        </div>
      </div>
    </section>

    <!-- Como Funciona Section -->
    <section class="how-it-works">
      <div class="container">
        <h2 class="section-title">Como funciona o processo?</h2>
        
        <div class="process-wrapper">
          <div class="process-grid">
            <div class="process-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>Visita técnica gratuita</h3>
                <p>Analisamos sua propriedade para criar a melhor solução</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>Projeto sob medida</h3>
                <p>Desenvolvemos um projeto específico para suas necessidades</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>Instalação profissional</h3>
                <p>Time especializado realiza a instalação com garantia</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h3>Acesso remoto liberado</h3>
                <p>Configuramos seu app para visualização em qualquer lugar</p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-number">5</div>
              <div class="step-content">
                <h3>Suporte contínuo e manutenção</h3>
                <p>Garantimos que sua segurança esteja sempre em dia</p>
              </div>
            </div>
          </div>

          <div class="process-images">
            <img :src="camera6Img" 
                 alt="Processo de instalação" 
                 class="process-img">
            <img :src="camera7Img" 
                 alt="Central de monitoramento" 
                 class="process-img">
          </div>
        </div>
      </div>
    </section>

    <!-- Depoimentos Section -->
    <section class="testimonials-dark">
      <div class="container">
        <h2 class="section-title white">Depoimentos de quem já se sente<br/>mais seguro:</h2>
        
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                <i class="fas fa-user"></i>
              </div>
              <div class="testimonial-info">
                <h4>Luiz Gustavo</h4>
                <div class="stars">★★★★★</div>
              </div>
            </div>
            <p class="testimonial-text">
              "Já tinha câmeras antes, mas com a qualidade de imagem e o app do Grupo HW 
              é outra coisa! Consigo ver tudo do meu celular com nitidez perfeita."
            </p>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                <i class="fas fa-user"></i>
              </div>
              <div class="testimonial-info">
                <h4>Carla A.</h4>
                <div class="stars">★★★★★</div>
              </div>
            </div>
            <p class="testimonial-text">
              "Me sinto muito mais segura agora! Consigo monitorar minha loja mesmo 
              quando estou em casa. O sistema de alerta funciona perfeitamente."
            </p>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                <i class="fas fa-user"></i>
              </div>
              <div class="testimonial-info">
                <h4>Eduardo S.</h4>
                <div class="stars">★★★★★</div>
              </div>
            </div>
            <p class="testimonial-text">
              "A instalação foi rápida e profissional. Em menos de 4 horas meu 
              estabelecimento estava 100% monitorado. Recomendo demais!"
            </p>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">+ 3.500</div>
            <div class="stat-label">câmeras<br/>instaladas</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">> 20</div>
            <div class="stat-label">cidades<br/>atendidas</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">Equipe</div>
            <div class="stat-label">qualificada e<br/>certificada</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">Tecnologia</div>
            <div class="stat-label">de ponta com<br/>alta definição</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">Atendimento</div>
            <div class="stat-label">humanizado e<br/>personalizado</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">Proteção</div>
            <div class="stat-label">que vai além das<br/>câmeras</div>
          </div>
        </div>

        <div class="cta-center">
          <a href="https://wa.me/5551933003158?text=Olá!%20Quero%20solicitar%20um%20orçamento%20de%20câmeras!" 
             class="btn btn-primary btn-large">
            Solicite seu orçamento
          </a>
        </div>
      </div>
    </section>

    <!-- Formulário Section -->
    <section class="form-section">
      <div class="container-form">
        <h2 class="section-title-dark">Não espere o imprevisto.<br/>Previna com quem entende.</h2>
        
        <div class="form-card">
          <h3 class="form-title">
            Preencha e receba<br/>
            seu <span class="highlight-red">orçamento!</span>
          </h3>
          
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">Nome *</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                placeholder="Seu nome completo"
                required
              >
            </div>

            <div class="form-group">
              <label for="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                placeholder="seu@email.com"
                required
              >
            </div>

            <div class="form-group">
              <label for="phone">Telefone *</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="form.phone" 
                placeholder="(51) 99999-9999"
                required
              >
            </div>

            <div class="form-group">
              <label for="location">Tipo de Local *</label>
              <select id="location" v-model="form.location" required>
                <option value="">Selecione...</option>
                <option value="residencia">Residência</option>
                <option value="comercio">Comércio</option>
                <option value="industria">Indústria</option>
                <option value="condominio">Condomínio</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary btn-full" :disabled="isSubmitting">
              <span v-if="!isSubmitting">Solicitar orçamento</span>
              <span v-else>Enviando...</span>
            </button>

            <p class="form-disclaimer">
              Ao solicitar orçamento, você concorda em receber contato e aceita nossa 
              <router-link to="/politica-de-privacidade">política de privacidade</router-link> e 
              <router-link to="/termos-de-uso">termos de uso</router-link>.
            </p>
          </form>

          <transition name="fade">
            <div v-if="submitMessage" class="submit-message" :class="submitSuccess ? 'success' : 'error'">
              {{ submitMessage }}
            </div>
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CamerasLandingPage',
  setup() {
    const cameraImg = new URL('../assets/images/services/camera.png', import.meta.url).href
    const camera2Img = new URL('../assets/images/services/camera 2.png', import.meta.url).href
    const camera3Img = new URL('../assets/images/services/camera 3.png', import.meta.url).href
    const camera4Img = new URL('../assets/images/services/camera 4.png', import.meta.url).href
    const camera5Img = new URL('../assets/images/services/camera 5.png', import.meta.url).href
    const camera6Img = new URL('../assets/images/services/fullcolor.jpg', import.meta.url).href
    const camera7Img = new URL('../assets/images/services/CAMERA 7.png', import.meta.url).href
    
    const form = ref({
      name: '',
      email: '',
      phone: '',
      location: ''
    })

    const isSubmitting = ref(false)
    const submitMessage = ref('')
    const submitSuccess = ref(false)

    const handleSubmit = async () => {
      isSubmitting.value = true
      submitMessage.value = ''

      try {
        // Simular envio (integre com sua API real)
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Redirecionar para WhatsApp com mensagem personalizada
        const message = `Olá! Gostaria de um orçamento para câmeras de segurança.%0A%0ANome: ${form.value.name}%0AEmail: ${form.value.email}%0ATelefone: ${form.value.phone}%0ATipo: ${form.value.location}`
        window.open(`https://wa.me/5551933003158?text=${message}`, '_blank')

        submitSuccess.value = true
        submitMessage.value = 'Redirecionando para WhatsApp...'
        
        // Limpar formulário
        form.value = {
          name: '',
          email: '',
          phone: '',
          location: ''
        }
      } catch (error) {
        submitSuccess.value = false
        submitMessage.value = 'Erro ao enviar. Tente novamente.'
      } finally {
        isSubmitting.value = false
        setTimeout(() => {
          submitMessage.value = ''
        }, 3000)
      }
    }

    return {
      cameraImg,
      camera2Img,
      camera3Img,
      camera4Img,
      camera5Img,
      camera6Img,
      camera7Img,
      form,
      isSubmitting,
      submitMessage,
      submitSuccess,
      handleSubmit
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero-cameras {
  background: #181818;
  padding: 6rem 0 4rem;
  min-height: 600px;
  display: flex;
  align-items: center;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.hero-text {
  color: white;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: white;
}

.location-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 214, 0, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 214, 0, 0.3);
}

.location-badge i {
  color: #FFD600;
}

.hero-subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  color: #f5f5f5;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.camera-img {
  max-width: 90%;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5));
  transform: scale(1.1);
}

/* Problems Section */
.problems-section {
  background: #232323;
  padding: 3rem 0 3.5rem;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #fff;
  line-height: 1.3;
}

.section-title.white {
  color: white;
}

.section-title-dark {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #fff;
}

.problems-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.problem-card {
  text-align: center;
  padding: 1.2rem 0.8rem;
}

.problem-icon {
  font-size: 2.2rem;
  color: #FFD600;
  margin-bottom: 0.5rem;
}

.problem-card h3 {
  font-size: 1.1rem;
  color: #f5f5f5;
  font-weight: 600;
}

.highlight-box {
  background: #181818;
  border-radius: 12px;
  padding: 2.5rem 1.5rem 2.5rem 2rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  border: 1px solid rgba(255, 214, 0, 0.3);
  max-width: 1000px;
  margin: 0 auto;
}

.highlight-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
}

.highlight-text {
  color: white;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

.fear-phrase {
  font-size: 1.1rem;
  color: #fff;
  font-weight: 600;
}

.impact-phrase {
  font-size: 1.4rem;
  color: #FFD600;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
}

.red-text {
  color: #FFD600;
  font-weight: 600;
}

.highlight-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  transform: scale(1.05);
}

/* Tipos de Câmeras */
.cameras-types {
  background: #181818;
  padding: 5rem 0;
  color: white;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.type-card {
  text-align: center;
}

.type-img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.type-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 3rem 0;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-item i {
  font-size: 2rem;
  color: #FFD600;
  flex-shrink: 0;
}

.feature-item h4 {
  font-size: 0.95rem;
  line-height: 1.4;
  font-weight: 500;
}

/* Como Funciona */
.how-it-works {
  background: #232323;
  padding: 5rem 0;
}

.process-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.process-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.process-step {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.step-number {
  font-size: 2rem;
  font-weight: 700;
  color: #FFD600;
  flex-shrink: 0;
  min-width: 40px;
}

.step-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #fff;
}

.step-content p {
  color: #f5f5f5;
  line-height: 1.5;
  opacity: 0.9;
  font-size: 0.9rem;
}

.process-images {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
}

.process-img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Depoimentos */
.testimonials-dark {
  background: #181818;
  padding: 5rem 0;
  color: white;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.testimonial-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.testimonial-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #FFD600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #181818;
  font-size: 1.5rem;
}

.testimonial-info h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.stars {
  color: #FFD600;
  font-size: 1rem;
}

.testimonial-text {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-style: italic;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  margin: 3rem 0;
  text-align: center;
}

.stat-item {
  padding: 1.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFD600;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  line-height: 1.4;
  opacity: 0.9;
}

/* Formulário */
.form-section {
  background: #232323;
  padding: 5rem 0;
}

.container-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
}

.form-card {
  background: #181818;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 214, 0, 0.3);
}

.form-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #fff;
}

.highlight-red {
  color: #FFD600;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #f5f5f5;
  font-size: 0.95rem;
}

.form-group input,
.form-group select {
  padding: 1rem;
  border: 2px solid #333;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #232323;
  color: #f5f5f5;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #FFD600;
  box-shadow: 0 0 0 3px rgba(255, 214, 0, 0.1);
}

.form-disclaimer {
  text-align: center;
  font-size: 0.875rem;
  color: #f5f5f5;
  opacity: 0.8;
  line-height: 1.6;
}

.form-disclaimer a {
  color: #FFD600;
  text-decoration: none;
}

.form-disclaimer a:hover {
  text-decoration: underline;
}

.submit-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}

.submit-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.btn-primary {
  background: #FFD600;
  color: #181818;
  font-weight: 700;
}

.btn-primary:hover {
  background: #FFC800;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 214, 0, 0.3);
}

.btn-large {
  padding: 1.25rem 3rem;
  font-size: 1.125rem;
}

.btn-full {
  width: 100%;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.cta-center {
  text-align: center;
  margin-top: 3rem;
}

/* Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .problems-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .types-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-cameras {
    padding: 4rem 0 3rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .section-title,
  .section-title-dark {
    font-size: 1.75rem;
  }

  .highlight-box {
    grid-template-columns: 1fr;
    padding: 2rem;
  }

  .problems-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .types-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-images {
    grid-template-columns: 1fr;
  }

  .form-card {
    padding: 2rem 1.5rem;
  }
}
</style>
