<template>
  <section class="service-detail">
    <div class="container service-detail-container">
      <div class="service-header-flex">
        <div class="service-header-image-col">
          <!-- Espaço reservado para imagem do alarme residencial -->
        </div>
        <div class="service-header-content-col">
          <h1>Segurança Residencial e Alarmes Monitorados</h1>
          <p class="service-description">Alarmes monitorados, sensores inteligentes e monitoramento 24h para sua casa ou empresa.</p>
          <div class="service-info-blocks-stack">
            <div class="service-info-block">
              <h2 class="section-sub">O que é?</h2>
              <p>Soluções integradas de segurança residencial e alarmes monitorados para proteger sua casa ou empresa 24h por dia. Sistemas modernos, sensores inteligentes e resposta rápida para sua tranquilidade.</p>
            </div>
            <div class="service-info-block">
              <h2 class="section-sub">Principais Recursos</h2>
              <ul class="service-features">
                <li>Alarmes monitorados 24h</li>
                <li>Sensores inteligentes de presença, abertura e fumaça</li>
                <li>App mobile para controle e notificações</li>
                <li>Integração com CFTV e automação</li>
                <li>Resposta rápida a eventos</li>
                <li>Instalação profissional e suporte técnico</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="service-content-grid">
        <div class="service-cards-row">
          <div class="service-card-info">
            <h2 class="section-sub">Diferenciais</h2>
            <ul class="service-features">
              <li>Monitoramento 24h com central própria</li>
              <li>Equipe treinada e pronta para emergências</li>
              <li>Projetos personalizados para cada residência ou empresa</li>
            </ul>
          </div>
          <div class="service-card-info">
            <h2 class="section-sub">Vantagens</h2>
            <ul class="service-features">
              <li>Proteção contra invasão, incêndio e emergências</li>
              <li>Notificações em tempo real no celular</li>
              <li>Facilidade de uso e controle remoto</li>
              <li>Integração com outros sistemas de segurança</li>
            </ul>
          </div>
        </div>
        <div class="service-content-col">
          <h2 class="section-sub">Dúvidas Frequentes</h2>
          <ul class="service-features">
            <li><b>O que acontece se o alarme disparar?</b> A central entra em contato imediatamente e aciona os protocolos definidos (proprietário, polícia, bombeiros etc.).</li>
            <li><b>Posso controlar tudo pelo celular?</b> Sim, o app permite armar/desarmar, receber alertas e visualizar o status em tempo real.</li>
            <li><b>É possível integrar com câmeras?</b> Sim, o sistema pode ser integrado ao CFTV para visualização das imagens ao vivo.</li>
            <li><b>O sistema funciona em caso de falta de energia?</b> Sim, possui bateria de backup e comunicação redundante.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nenhuma lógica específica
</script>

<style scoped>

.service-detail {
  padding: 3rem 0 2rem 0;
  background: #181818;
  color: #f5f5f5;
  min-height: 100vh;
}

.service-detail-container {
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: 3.5rem;
}

.service-header-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  align-items: flex-start;
  margin-bottom: 3.5rem;
}

.service-info-blocks-stack {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.2rem;
}

.service-info-block {
  background: #232323;
  border-radius: 10px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.18);
  padding: 1.2rem 1rem 1rem 1rem;
  color: #fff;
  margin: 0;
}

.service-header-content-col {
  flex: 2 1 500px;
  min-width: 320px;
}

.service-header-image-col {
  flex: 1 1 340px;
  min-width: 300px;
  min-height: 550px;
  background: #232323;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.18);
}

.service-header-content-col h1 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #FFD600;
  letter-spacing: 0.01em;
}

.service-description {
  font-size: 1.13rem;
  color: #f5f5f5;
  margin-bottom: 1.2rem;
}

.section-sub {
  font-size: 1.18rem;
  font-weight: 700;
  color: #FFD600;
  margin-bottom: 0.5rem;
}

.service-features {
  padding-left: 1.1rem;
  margin: 0.5rem 0 0 0;
  color: #FFD600;
  font-size: 1rem;
}
.service-features li {
  color: #f5f5f5;
  margin-bottom: 0.3rem;
}
.service-features li b {
  color: #FFD600;
}

.service-content-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1.5rem;
}

.service-cards-row {
  display: flex;
  flex: 2 1 500px;
  gap: 2rem;
  flex-wrap: wrap;
}

.service-card-info {
  background: #232323;
  border-radius: 10px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.18);
  padding: 1.2rem 1rem 1rem 1rem;
  flex: 1 1 220px;
  min-width: 220px;
  margin-bottom: 1rem;
  color: #fff;
}

.service-content-col {
  border-radius: 10px;
  min-width: 280px;
  margin-bottom: 1rem;
  color: #fff;
}

.service-content-col ul li b {
  color: #FFD600;
}

@media (max-width: 900px) {
  .service-header-flex,
  .service-content-grid,
  .service-cards-row {
    flex-direction: column;
    gap: 1.2rem;
  }
  .service-header-image-col,
  .service-content-col {
    min-width: 0;
  }
}

</style>