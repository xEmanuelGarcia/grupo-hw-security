<template>
  <section class="service-detail">
    <div class="container service-detail-container">
      <div class="service-header-flex">
        <div class="service-header-image-col">
          <!-- Espaço reservado para imagem de segurança empresarial -->
        </div>
        <div class="service-header-content-col">
          <h1>Segurança Empresarial</h1>
          <p class="service-description">Soluções integradas para proteção de empresas, indústrias e comércios: monitoramento, controle de acesso, consultoria e gestão de riscos.</p>
          <div class="service-info-blocks-stack">
            <div class="service-info-block">
              <h2 class="section-sub">O que é?</h2>
              <p>Segurança empresarial envolve um conjunto de estratégias, tecnologias e serviços para proteger o patrimônio, as pessoas e as informações de empresas e organizações.</p>
            </div>
            <div class="service-info-block">
              <h2 class="section-sub">Como funciona?</h2>
              <ul class="service-features">
                <li>Diagnóstico e análise de riscos</li>
                <li>Implantação de sistemas de monitoramento e controle de acesso</li>
                <li>Equipe treinada e especializada</li>
                <li>Planos de ação personalizados para cada cliente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="service-content-grid">
        <div class="service-cards-row">
          <div class="service-card-info">
            <h2 class="section-sub">Principais Soluções</h2>
            <ul class="service-features">
              <li>Monitoramento 24h (CFTV, alarmes, sensores)</li>
              <li>Controle de acesso físico e digital</li>
              <li>Portaria presencial e remota</li>
              <li>Consultoria em segurança</li>
              <li>Gestão de riscos e planos de contingência</li>
            </ul>
          </div>
          <div class="service-card-info">
            <h2 class="section-sub">Vantagens</h2>
            <ul class="service-features">
              <li>Redução de perdas e sinistros</li>
              <li>Ambiente mais seguro para colaboradores e clientes</li>
              <li>Atendimento a normas e certificações</li>
              <li>Respostas rápidas a incidentes</li>
              <li>Valorização do patrimônio</li>
            </ul>
          </div>
          <div class="service-card-info">
            <h2 class="section-sub">Diferenciais</h2>
            <ul class="service-features">
              <li>Equipe altamente treinada</li>
              <li>Uso de tecnologia de ponta</li>
              <li>Planos customizados</li>
              <li>Relatórios e indicadores de desempenho</li>
            </ul>
          </div>
        </div>
        <div class="service-content-col">
          <h2 class="section-sub">Dúvidas Frequentes</h2>
          <ul class="service-features">
            <li><b>É possível integrar segurança física e digital?</b> Sim, soluções integradas aumentam a proteção.</li>
            <li><b>Como é feita a análise de riscos?</b> Por consultores especializados, com diagnóstico detalhado.</li>
            <li><b>O serviço é customizável?</b> Sim, cada empresa recebe um plano sob medida.</li>
            <li><b>Há suporte emergencial?</b> Sim, atendimento 24h para incidentes e dúvidas.</li>
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
</style>
