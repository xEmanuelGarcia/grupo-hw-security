<template>
  <section class="service-detail">
    <div class="container service-detail-container">
      <div class="service-header-flex">
        <div class="service-header-image-col">
          <!-- Espaço reservado para imagem da portaria -->
        </div>
        <div class="service-header-content-col">
          <h1>Portarias e Controle de Acesso</h1>
          <p class="service-description">Soluções completas em portaria física e virtual, com controle de acesso inteligente e monitoramento 24h para condomínios, empresas e indústrias.</p>
          <div class="service-info-blocks-stack">
            <div class="service-info-block">
              <h2 class="section-sub">O que é?</h2>
              <p>Portarias e controle de acesso são soluções essenciais para garantir a segurança de condomínios, empresas e indústrias. Elas controlam a entrada e saída de pessoas, veículos e mercadorias, prevenindo riscos e aumentando a tranquilidade dos usuários.</p>
            </div>
            <div class="service-info-block">
              <h2 class="section-sub">Tipos de Portaria</h2>
              <ul class="service-features">
                <li><b>Portaria física:</b> profissionais treinados no local, atuando 24h.</li>
                <li><b>Portaria remota/virtual:</b> monitoramento e controle à distância, com redução de custos e alta tecnologia.</li>
                <li><b>Portaria híbrida:</b> combinação das duas modalidades.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="service-content-grid">
        <div class="service-cards-row">
          <div class="service-card-info">
            <h2 class="section-sub">Tecnologias Utilizadas</h2>
            <ul class="service-features">
              <li>Biometria (digital, facial)</li>
              <li>Cartão de proximidade (RFID)</li>
              <li>QR Code e senhas temporárias</li>
              <li>Câmeras integradas (CFTV)</li>
              <li>Interfones e aplicativos mobile</li>
              <li>Controle de acesso veicular (tag, placa)</li>
            </ul>
          </div>
          <div class="service-card-info">
            <h2 class="section-sub">Vantagens</h2>
            <ul class="service-features">
              <li>Redução de custos operacionais (principalmente com portaria remota)</li>
              <li>Aumento da segurança e rastreabilidade</li>
              <li>Relatórios detalhados de acessos</li>
              <li>Resposta rápida a incidentes</li>
              <li>Integração com sistemas de alarme e monitoramento</li>
            </ul>
          </div>
          <div class="service-card-info">
            <h2 class="section-sub">Diferenciais</h2>
            <ul class="service-features">
              <li>Equipe treinada e certificada</li>
              <li>Atendimento 24h</li>
              <li>Soluções personalizadas para cada perfil de cliente</li>
              <li>Suporte técnico especializado</li>
            </ul>
          </div>
          <div class="service-card-info">
            <h2 class="section-sub">Tendências</h2>
            <ul class="service-features">
              <li>Uso crescente de inteligência artificial para reconhecimento facial</li>
              <li>Integração com aplicativos e automação residencial</li>
              <li>Portarias 100% digitais e autônomas</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Tendências e Dúvidas Frequentes abaixo dos cards -->
      <div class="service-extra-row">
        <div class="service-extra-col">
          <h2 class="section-sub">Dúvidas Frequentes</h2>
          <ul class="service-features">
            <li><b>Como funciona a portaria remota?</b> O controle é feito à distância, com operadores monitorando acessos em tempo real e autorizando entradas via sistemas integrados.</li>
            <li><b>É possível integrar com outros sistemas de segurança?</b> Sim, é possível integrar com CFTV, alarmes, automação e aplicativos.</li>
            <li><b>O que acontece em caso de falta de energia/internet?</b> Sistemas possuem redundância e protocolos de contingência para garantir a segurança.</li>
            <li><b>Como é feito o controle de visitantes?</b> Cadastro prévio, autorização digital e registro de entrada/saída.</li>
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
</style>