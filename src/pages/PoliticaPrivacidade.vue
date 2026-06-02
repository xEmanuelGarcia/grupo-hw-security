<template>
  <section class="legal-detail">
    <div class="container legal-container">
      <h1>Política de Privacidade</h1>
      
      <h2>1) Introdução</h2>
      <p>A HW SISTEMAS DE SEGURANCA LTDA está totalmente comprometida em resguardar a privacidade e segurança dos dados de todos os usuários do aplicativo HW MOBILE. O objetivo deste documento é esclarecer quais informações são coletadas, como são armazenadas e de que forma são utilizadas, em atendimento às exigências descritas na Lei nº 13.709/2018, conhecida como Lei Geral de Proteção de Dados (LGPD).</p>
      
      <h2>2) Utilização</h2>
      <p>O HW MOBILE possui diversos recursos agrupados nas categorias abaixo:</p>
      <ul>
        <li>Clientes de monitoramento de alarmes que utilizam o aplicativo. Para esses, fornece praticidade e autonomia ao usuário no controle de seu painel de alarme, câmeras e acionamentos remotos.</li>
        <li>Moradores de condomínios que tenham a portaria atendida remotamente. O aplicativo permite ao usuário o controle das informações relativas ao seu imóvel assim como o acesso de visitantes e prestadores de serviço ao condomínio por meio de QR Code ou chave digital.</li>
        <li>Técnicos de empresas de monitoramento de alarmes e portarias remotas. O aplicativo agiliza a execução de ordens de serviço e vistorias.</li>
      </ul>
      
      <h2>3) Funcionamento</h2>
      <p>Durante o uso, o HW MOBILE se conecta através da internet com o servidor Moni localizado na intranet da empresa de monitoramento, ocorrendo troca de informações de forma totalmente criptografada.</p>
      <p>Para que ocorra um acesso não autorizado às informações, seria necessária a descriptografia dos dados e conhecimento do protocolo de comunicação, que não é humanamente inteligível. Estes dois fatores reduzem significativamente a chance de obtenção desautorizada de quaisquer informações trafegadas.</p>
      <p>Quando fechado ou em segundo plano, o aplicativo somente recebe mensagens do servidor que são denominadas "notificações push". Quando ativo, essas notificações são exibidas na tela de "Mensagens".</p>
      
      <h2>4) Dados Pessoais</h2>
      <p>Todos os dados coletados pelo HW MOBILE são armazenados no banco de dados do software Moni, instalado em um servidor localizado na intranet da empresa de monitoramento ao qual o usuário é cliente. Tais dados são classificados pelas categorias abaixo:</p>
      <ul>
        <li><strong>Notificações:</strong> são mensagens informativas que o software Moni envia para o aplicativo HW MOBILE, tais como: eventos do alarme monitorado; atendimento de portaria remota; ordens de serviço e vistorias para os técnicos da empresa de monitoramento.</li>
        <li><strong>Conclusão de eventos:</strong> são textos digitados pelo usuário para a conclusão de eventos da central de alarme, caso o recurso de autoatendimento esteja habilitado para o cliente da empresa de monitoramento de alarmes.</li>
        <li><strong>Ordens de serviço:</strong> são informações relacionadas à execução de ordens de serviço no local monitorado, fornecidas pelo técnico da empresa de monitoramento de alarmes.</li>
        <li><strong>Vistorias:</strong> são informações relacionadas à realização de vistorias no local monitorado por ocasião de eventos de disparo de alarme, fornecidas pelo vistoriador da empresa de monitoramento de alarmes.</li>
        <li><strong>Imóveis:</strong> são informações relacionadas aos imóveis de moradores de condomínios com atendimento remoto de portarias, realizado por empresas que utilizam o software Moni. Tais informações são classificadas nas seguintes subcategorias:
          <ul style="margin-top: 0.5rem;">
            <li><strong>Moradores:</strong> Nome, Email, Telefone, Data de Nascimento, CPF, RG e Foto dos moradores do imóvel.</li>
            <li><strong>Veículos:</strong> Placa, Descrição e Observação dos veículos dos moradores do imóvel.</li>
            <li><strong>Prestadores de Serviço:</strong> Nome, Telefone, CPF, RG, Tipo de Serviço, Observação e Foto dos prestadores de serviços do imóvel.</li>
            <li><strong>Visitantes:</strong> Nome, Telefone, CPF, RG, Relação com Responsável, Observação e Foto dos visitantes do imóvel.</li>
            <li><strong>Bilhetes:</strong> aviso que pode ser cadastrado pelos moradores do imóvel e que será exibido na tela de atendimento do software Moni.</li>
            <li><strong>Festas:</strong> Título, Data e Hora Inicial e Final, Área Comum, Mensagem e Lista de Convidados de festas do imóvel.</li>
            <li><strong>QR Code:</strong> gerado pelo morador para liberar o acesso ao condomínio para um visitante.</li>
          </ul>
        </li>
        <li><strong>Localização:</strong> o HW MOBILE somente acessa e armazena a localização do usuário nas seguintes situações:
          <ul style="margin-top: 0.5rem;">
            <li>Técnicos da empresa de monitoramento executando ordens de serviço ou realizando vistorias.</li>
            <li>Cliente da empresa de monitoramento após pressionar o botão de Pânico, Entrada Assistida ou outro botão personalizado, caso esteja habilitada esta função no software Moni.</li>
          </ul>
        </li>
      </ul>
      
      <h2>5) Finalidades</h2>
      <p>O armazenamento dos dados pessoais coletados pelo HW MOBILE é realizado apenas para finalidades relacionados aos serviços prestados pela empresa de monitoramento de alarmes e atendimento de portarias remotas, tais como:</p>
      <ul>
        <li>Monitoramento dos eventos gerados pelo alarme do cliente;</li>
        <li>Atendimento de eventos gerados pelo cliente no aplicativo;</li>
        <li>Execução de ordens de serviço nos locais monitorados;</li>
        <li>Realização de vistorias nos locais monitorados;</li>
        <li>Atendimento remoto de portarias de condomínios.</li>
      </ul>
      
      <h2>6) Retenção e Exclusão de Dados</h2>
      <p>Os dados de acesso coletados pelo HW MOBILE são mantidos até que sejam excluídos ou desativados após o encerramento do contrato com o cliente.</p>
      
      <h2>7) Contato</h2>
      <p>Se você tiver qualquer dúvida ou precisar de esclarecimentos sobre nossa Política de Privacidade, entre em contato conosco pelo e-mail <strong>adm@hwseg.com.br</strong>. Estamos à disposição para ajudar!</p>
    </div>
  </section>
</template>

<script setup>
// Nenhuma lógica específica
</script>

<style scoped>
.legal-detail {
  padding: 3rem 0 2rem 0;
  background: #181818;
  color: #f5f5f5;
  min-height: 100vh;
}
.legal-container {
  max-width: 900px;
  margin: 3.5rem auto;
  padding: 0 1.5rem;
}
h1 {
  color: #FFD600;
  font-size: 2.1rem;
  margin-bottom: 1.2rem;
}
h2 {
  color: #FFD600;
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 0.7rem;
}
ul {
  margin-bottom: 1.2rem;
  padding-left: 1.2rem;
}
p {
  margin-bottom: 1rem;
}
</style>
