# Sistema de Cards Flutuantes de Promoção

Este documento explica como funciona e como gerenciar o sistema de cards flutuantes de promoção implementado no site.

## Como Funciona

### 1. Componente PromotionCard
- **Localização**: `/src/components/PromotionCard.vue`
- **Função**: Exibe um card flutuante com informações de promoção
- **Características**:
  - Aparece automaticamente após 3 segundos
  - Pode ser fechado pelo usuário
  - Lembra se foi fechado (localStorage)
  - Responsivo para mobile
  - Animações suaves

### 2. Integração no HeroSection
- **Localização**: `/src/components/HeroSection.vue`
- O card é integrado na seção hero da página inicial
- Múltiplas promoções configuradas
- Sistema de rotação automática (comentado, pode ser ativado)

## Promoções Disponíveis

### 1. Kit de Câmeras CFTV (ATIVA)
- **Rota**: `/promocao/kit-cameras`
- **Desconto**: 30% OFF
- **Página**: `KitCamerasPromo.vue`
- **Status**: ✅ Ativa

### 2. Alarme Residencial (DESABILITADA)
- **Rota**: ~~`/promocao/alarme-residencial`~~ (removida)
- **Desconto**: 25% OFF
- **Página**: `_backup/AlarmeResidencialPromo.vue`
- **Status**: ❌ Desabilitada (arquivo movido para backup)

### 3. Rastreamento Veicular (DESABILITADA)
- **Rota**: ~~`/promocao/rastreamento`~~ (removida)
- **Desconto**: 1º Mês Grátis
- **Página**: `_backup/RastreamentoPromo.vue`
- **Status**: ❌ Desabilitada (arquivo movido para backup)

## Como Reativar Promoções Desabilitadas

### Passo a Passo:

1. **Mover arquivo de volta**:
```bash
# Para Alarme Residencial:
mv src/pages/promocoes/_backup/AlarmeResidencialPromo.vue src/pages/promocoes/

# Para Rastreamento:
mv src/pages/promocoes/_backup/RastreamentoPromo.vue src/pages/promocoes/
```

2. **Adicionar rota no `/src/router/index.js`**:
```javascript
// Para Alarme Residencial:
{
  path: '/promocao/alarme-residencial',
  name: 'AlarmeResidencialPromo',
  component: () => import('../pages/promocoes/AlarmeResidencialPromo.vue'),
  meta: {
    title: 'Promoção Alarme Residencial - Até 25% OFF - Grupo HW',
    description: 'Sistema completo de alarme residencial com desconto especial.'
  }
}

// Para Rastreamento:
{
  path: '/promocao/rastreamento',
  name: 'RastreamentoPromo',
  component: () => import('../pages/promocoes/RastreamentoPromo.vue'),
  meta: {
    title: 'Rastreamento Veicular - 1º Mês Grátis - Grupo HW',
    description: 'Proteja seu veículo com nosso sistema de rastreamento.'
  }
}
```

3. **Atualizar HeroSection.vue** (se quiser múltiplas promoções):
```javascript
// Substituir a promoção única por um array:
const promotions = ref([
  {
    id: 'kit-cameras',
    title: 'Kit de Câmeras CFTV',
    // ... configuração existente
  },
  {
    id: 'alarme-residencial',
    title: 'Alarme Residencial',
    // ... nova configuração
  }
])

// Implementar lógica de seleção novamente
```

## Como Adicionar Nova Promoção

### 1. Criar a Landing Page
```bash
# Criar arquivo em src/pages/promocoes/
touch src/pages/promocoes/NovaPromocao.vue
```

### 2. Adicionar Rota
No arquivo `/src/router/index.js`:
```javascript
{
  path: '/promocao/nova-promocao',
  name: 'NovaPromocao',
  component: () => import('../pages/promocoes/NovaPromocao.vue'),
  meta: {
    title: 'Nova Promoção - Grupo HW',
    description: 'Descrição da nova promoção'
  }
}
```

### 3. Configurar no HeroSection
No arquivo `/src/components/HeroSection.vue`, adicionar na array `promotions`:
```javascript
{
  id: 'nova-promocao',
  title: 'Título da Promoção',
  description: 'Descrição curta',
  discount: 'Desconto',
  validity: 'Validade',
  icon: 'fas fa-icon-name',
  ctaText: 'Texto do Botão',
  landingPage: '/promocao/nova-promocao'
}
```

## Configurações Avançadas

### Sistema Simplificado
O sistema foi simplificado para exibir apenas a promoção do Kit de Câmeras CFTV:
- Não há mais rotação automática
- Não há critérios de horário
- Uma única promoção ativa garante foco e evita confusão

### Segurança das Promoções
As promoções desabilitadas foram:
1. **Movidas para pasta `_backup`**: Arquivos preservados mas inacessíveis
2. **Rotas removidas**: URLs não funcionam mais (`/promocao/alarme-residencial` e `/promocao/rastreamento`)
3. **Configuração limpa**: Apenas Kit de Câmeras no código

### Critérios de Exibição (Desabilitado)
~~No `HeroSection.vue`, a função `selectPromotionByCriteria()` permite definir:~~
- ~~Promoções por horário do dia~~
- ~~Promoções por data~~
- ~~Promoções por tipo de usuário~~

**Atual**: Promoção fixa do Kit de Câmeras CFTV

### Rotação Automática (Desabilitada)
~~Para ativar rotação automática, descomente esta linha no `HeroSection.vue`:~~
```javascript
// setInterval(rotatePromotions, 30000) // REMOVIDO
```

**Atual**: Sem rotação, promoção única

### Controle de Exibição
O card verifica no localStorage se foi fechado anteriormente:
- Chave: `promotion-{id}-closed`
- Se existe, não exibe mais o card
- Para reset: limpar localStorage

## Personalização

### Alterar Tempo de Aparição
No `PromotionCard.vue`, modificar a prop `showDelay`:
```javascript
showDelay: {
  type: Number,
  default: 3000 // milissegundos
}
```

### Alterar Posição do Card
No CSS do `PromotionCard.vue`:
```css
.promotion-card {
  position: fixed;
  bottom: 20px;  /* Alterar aqui */
  right: 20px;   /* Alterar aqui */
}
```

### Adicionar Animações
O card já possui animações básicas, mas podem ser expandidas:
- Pulse no botão CTA
- Slide in/out
- Hover effects

## Integração com Marketing

### Tracking de Cliques
O componente emite eventos que podem ser capturados para analytics:
```javascript
// No HeroSection.vue
const handlePromotionClick = (promotion) => {
  // Adicionar código de tracking aqui
  gtag('event', 'promotion_click', {
    promotion_id: promotion.id,
    promotion_name: promotion.title
  })
}
```

### A/B Testing
Para implementar A/B testing:
1. Criar variações da promoção
2. Usar lógica condicional na seleção
3. Registrar métricas de conversão

## Estrutura dos Arquivos

```
src/
├── components/
│   ├── PromotionCard.vue      # Card flutuante
│   └── HeroSection.vue        # Integração principal
├── pages/
│   └── promocoes/             # Landing pages
│       ├── KitCamerasPromo.vue
│       ├── AlarmeResidencialPromo.vue
│       └── RastreamentoPromo.vue
└── router/
    └── index.js               # Configuração de rotas
```

## Exemplos de Uso

### Promoção Sazonal
```javascript
const isBlackFriday = () => {
  const today = new Date()
  const blackFridayDate = new Date('2024-11-29')
  return today.toDateString() === blackFridayDate.toDateString()
}

if (isBlackFriday()) {
  currentPromotion.value = blackFridayPromotion
}
```

### Promoção por Geolocalização
```javascript
if (userLocation === 'porto-alegre') {
  currentPromotion.value = portoAlegrePromotion
}
```

## Manutenção

### Atualizar Datas de Validade
1. Editar a data no componente da landing page
2. Atualizar texto de validade na configuração da promoção
3. Testar timer countdown

### Monitorar Performance
- Verificar taxa de clique nos cards
- Analisar conversões nas landing pages
- Otimizar baseado nos dados

## Suporte Técnico

Para dúvidas ou problemas:
1. Verificar console do navegador
2. Testar localStorage do navegador
3. Verificar rotas no Vue Router
4. Validar CSS responsivo

## WhatsApp Integration

Todos os botões de CTA direcionam para:
- **URL**: `http://bit.ly/41BVRYQ`
- **Ícone**: FontAwesome `fab fa-whatsapp`
- **Funcionalidade**: Abre WhatsApp com mensagem pré-definida
