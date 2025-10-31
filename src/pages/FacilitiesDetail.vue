<template>
  <section class="service-detail">
    <div class="container service-detail-container">
      <div class="service-header-flex">
        <div class="service-header-image-col">
          <img class="service-header-image" src="../assets/images/services/facilities.jpg" alt="Facilities e Serviços Terceirizados" />
        </div>
        <div class="service-header-content-col">
          <h1>Facilities e Serviços Terceirizados</h1>
          <p class="service-description">Soluções completas em terceirização de serviços para empresas, condomínios e indústrias, com foco em eficiência, qualidade e segurança.</p>
          <div class="service-info-blocks-stack">
            <div class="service-info-block">
              <h2 class="section-sub">O que é?</h2>
              <p>Facilities são serviços terceirizados que englobam limpeza, portaria, recepção, manutenção, jardinagem, apoio administrativo e outros, otimizando a gestão e reduzindo custos operacionais.</p>
            </div>
            <div class="service-info-block">
              <h2 class="section-sub">Como funciona?</h2>
              <ul class="service-features">
                <li>Equipe treinada e uniformizada</li>
                <li>Gestão profissional e supervisão contínua</li>
                <li>Atendimento personalizado conforme a necessidade do cliente</li>
                <li>Uso de tecnologia e processos padronizados</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="service-content-grid">
        <div class="service-cards-row">
          <div class="service-card-info">
            <h2 class="section-sub">Principais Serviços</h2>
            <ul class="service-features">
              <li>Limpeza e conservação</li>
              <li>Recepção e atendimento</li>
              <li>Jardinagem e paisagismo</li>
              <li>Manutenção predial</li>
              <li>Apoio administrativo</li>
            </ul>
          </div>
          <div class="service-card-info">
            <h2 class="section-sub">Vantagens</h2>
            <ul class="service-features">
              <li>Redução de custos operacionais</li>
              <li>Equipe qualificada e treinada</li>
              <li>Flexibilidade e escalabilidade</li>
              <li>Padronização e qualidade dos serviços</li>
            </ul>
          </div>
          <div class="service-card-info">
            <h2 class="section-sub">Diferenciais</h2>
            <ul class="service-features">
              <li>Supervisão ativa e gestão de equipes</li>
              <li>Treinamento contínuo</li>
              <li>Atendimento emergencial</li>
              <li>Relatórios e indicadores de desempenho</li>
            </ul>
          </div>
        </div>
        <div class="service-content-col">
          <h2 class="section-sub">Dúvidas Frequentes</h2>
          <ul class="service-features">
            <li><b>Posso contratar apenas um serviço?</b> Sim, os serviços são customizáveis conforme a necessidade.</li>
            <li><b>Como é feita a supervisão?</b> Por gestores experientes e acompanhamento em tempo real.</li>
            <li><b>Os funcionários são registrados?</b> Sim, todos com carteira assinada e benefícios.</li>
            <li><b>Há atendimento emergencial?</b> Sim, equipe de prontidão para demandas urgentes.</li>
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
  min-width: 220px;
  min-height: 340px;
  max-height: 550px;
  background: #232323;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.18);
  overflow: hidden;
}

.service-header-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  display: block;
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
