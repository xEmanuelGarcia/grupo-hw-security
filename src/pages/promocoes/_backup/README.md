# Promoções Desabilitadas

Esta pasta contém as promoções que foram temporariamente desabilitadas para não ficarem acessíveis ao público.

## Arquivos Movidos:

### AlarmeResidencialPromo.vue
- **Promoção**: Sistema de Alarme Residencial - 25% OFF
- **Rota removida**: `/promocao/alarme-residencial`
- **Status**: Desabilitada
- **Data**: 04/09/2025

### RastreamentoPromo.vue
- **Promoção**: Rastreamento Veicular - 1º Mês Grátis
- **Rota removida**: `/promocao/rastreamento`
- **Status**: Desabilitada
- **Data**: 04/09/2025

## Promoção Ativa:

Apenas a promoção do **Kit de Câmeras CFTV** permanece ativa:
- **Arquivo**: `KitCamerasPromo.vue` (na pasta pai)
- **Rota**: `/promocao/kit-cameras`
- **Desconto**: 30% OFF
- **Status**: Ativa

## Para Reativar:

1. Mover o arquivo desejado de volta para `/src/pages/promocoes/`
2. Adicionar a rota correspondente em `/src/router/index.js`
3. Atualizar a configuração no `HeroSection.vue` se necessário

## Nota de Segurança:

As rotas foram removidas do sistema de roteamento para evitar que usuários acessem as promoções desabilitadas e tentem reivindicar descontos inválidos.
