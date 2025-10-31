<template>
  <section class="service-detail">
    <div class="container service-detail-container">
      <div class="service-header-flex">
        <div class="service-header-image-col">
          <!-- Espaço reservado para imagem do rastreamento veicular -->
        </div>
        <div class="service-header-content-col">
          <h1>Rastreamento Veicular</h1>
          <p class="service-description">Monitoramento em tempo real, bloqueio remoto, histórico de rotas e segurança para seu veículo ou frota.</p>
          <div class="service-info-blocks-stack">
            <div class="service-info-block">
              <h2 class="section-sub">O que é?</h2>
              <p>O rastreamento veicular utiliza tecnologia GPS/GPRS para monitorar a localização do veículo em tempo real, permitindo acompanhamento de rotas, paradas e status via app ou web.</p>
            </div>
            <div class="service-info-block">
              <h2 class="section-sub">Como funciona?</h2>
              <ul class="service-features">
                <li>Dispositivo instalado no veículo envia dados para a central 24h.</li>
                <li>Acesso via aplicativo ou plataforma web.</li>
                <li>Monitoramento, histórico de rotas, alertas e bloqueio remoto.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="service-content-grid">
        <div class="service-cards-row">
          <div class="service-card-info">
            <h2 class="section-sub">Principais Recursos</h2>
            <ul class="service-features">
              <li>Localização em tempo real</li>
              <li>Histórico de trajetos</li>
              <li>Alertas de ignição, velocidade e cerca eletrônica</li>
              <li>Bloqueio remoto</li>
              <li>App para smartphone</li>
              <li>Relatórios personalizados</li>
            </ul>
          </div>
          <div class="service-card-info">
            <h2 class="section-sub">Vantagens</h2>
            <ul class="service-features">
              <li>Segurança contra roubo/furto</li>
              <li>Recuperação rápida do veículo</li>
              <li>Redução do valor do seguro</li>
              <li>Gestão de frotas eficiente</li>
              <li>Tranquilidade para famílias e empresas</li>
            </ul>
          </div>
        </div>
        <div class="service-cards-row">
          <div class="service-card-info">
            <h2 class="section-sub">Diferenciais</h2>
            <ul class="service-features">
              <li>Suporte 24h</li>
              <li>Instalação profissional</li>
              <li>Cobertura nacional</li>
              <li>Atendimento especializado</li>
              <li>Equipe propria para Recuperação de veículos</li>
            </ul>
          </div>
          <div class="service-card-info">
            <h2 class="section-sub">Tendências</h2>
            <ul class="service-features">
              <li>Integração com IoT e telemetria</li>
              <li>Monitoramento de comportamento do motorista</li>
              <li>Relatórios inteligentes</li>
            </ul>
          </div>
        </div>
        <div class="service-content-col">
          <h2 class="section-sub">Dúvidas Frequentes</h2>
          <ul class="service-features">
            <li><b>Funciona sem sinal de celular?</b> Rastreador RF sim, GPS depende de operadora.</li>
            <li><b>O bloqueio é seguro?</b> Sim, feito por profissionais autorizados.</li>
            <li><b>Precisa de manutenção?</b> Baixa, mas recomenda-se revisão anual.</li>
            <li><b>Interfere no funcionamento do carro?</b> Não, instalação segura.</li>
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
</style>
