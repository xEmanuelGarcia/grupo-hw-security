<template>
  <section class="service-detail">
    <div class="container service-detail-container">
      <div class="service-header-flex">
        <div class="service-header-flex">
          <div class="service-header-image-col">
            <!-- Espaço reservado para imagem do CFTV -->
          </div>
          <div class="service-header-content-col">
            <h1>CFTV e Monitoramento</h1>
            <p class="service-description">Monitoramento 24h com câmeras de alta definição, acesso remoto e gravação segura para sua empresa ou residência.</p>
            <div class="service-info-blocks-stack">
              <div class="service-info-block">
                <h2 class="section-sub">O que é?</h2>
                <p>Sistemas de CFTV (Circuito Fechado de TV) permitem o monitoramento 24h de ambientes internos e externos, com câmeras de alta definição, gravação segura e acesso remoto. Ideal para residências, empresas e condomínios que buscam segurança e controle total.</p>
              </div>
              <div class="service-info-block">
                <h2 class="section-sub">Principais Recursos</h2>
                <ul class="service-features">
                  <li>Instalação profissional de câmeras</li>
                  <li>Imagens em HD/4K e visão noturna</li>
                  <li>Acesso remoto por app ou computador</li>
                  <li>Gravação em nuvem/local</li>
                  <li>Alertas em tempo real</li>
                  <li>Integração com alarmes e sensores</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="service-cards-row">
          <div class="service-card-info">
            <h2 class="section-sub">Diferenciais</h2>
            <ul class="service-features">
              <li>Projetos personalizados para cada ambiente</li>
              <li>Suporte técnico especializado</li>
              <li>Relatórios de eventos e acessos</li>
            </ul>
          </div>
          <div class="service-card-info">
            <h2 class="section-sub">Vantagens</h2>
            <ul class="service-features">
              <li>Monitoramento 24h</li>
              <li>Imagens em alta definição</li>
              <li>Gravação segura e redundante</li>
              <li>Acesso remoto de qualquer lugar</li>
              <li>Alertas em tempo real</li>
            </ul>
          </div>
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: 3.5rem;
}

.service-header-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  align-items: flex-start;
  margin-bottom: 2.5rem;
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

.service-header-info-row {
  display: flex;
  flex-wrap: wrap;
  gap: 2.2rem;
}

.service-header-info-block {
  flex: 1 1 220px;
  background: #232323;
  border-radius: 10px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.18);
  padding: 1.2rem 1rem 1rem 1rem;
  margin-bottom: 1rem;
  color: #fff;
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
  flex: 1 1 320px;
  background: #232323;
  border-radius: 10px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.18);
  padding: 1.2rem 1rem 1rem 1rem;
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
</style>