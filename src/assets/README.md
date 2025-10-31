# Assets do Grupo HW

Esta pasta contém todos os recursos visuais do site institucional.

## Estrutura de Pastas

### 📁 `/images`
Pasta principal para todas as imagens do site

#### 📁 `/images/logo`
- Logo da empresa em diferentes formatos e tamanhos
- Versões: horizontal, vertical, marca única
- Formatos: PNG (com transparência), JPG, SVG
- Sugestões de arquivos:
  - `logo-horizontal.png` - Logo horizontal principal
  - `logo-vertical.png` - Logo para layouts verticais
  - `logo-marca.png` - Apenas a marca/símbolo
  - `logo-white.png` - Versão branca para fundos escuros
  - `logo-dark.png` - Versão escura para fundos claros

#### 📁 `/images/hero`
- Imagens para a seção principal (hero)
- Backgrounds, banners, imagens de destaque
- Sugestões:
  - `hero-background.jpg` - Fundo principal
  - `security-team.jpg` - Equipe de segurança
  - `monitoring-center.jpg` - Central de monitoramento

#### 📁 `/images/services`
- Imagens relacionadas aos serviços
- Fotos dos equipamentos, instalações
- Sugestões:
  - `cftv-installation.jpg`
  - `alarm-system.jpg`
  - `access-control.jpg`
  - `vehicle-tracking.jpg`
  - `monitoring-24h.jpg`

#### 📁 `/images/about`
- Imagens da seção "Sobre nós"
- Fotos da empresa, escritório, certificações
- Sugestões:
  - `office.jpg` - Escritório da empresa
  - `team.jpg` - Foto da equipe
  - `certificates.jpg` - Certificações

### 📁 `/icons`
- Ícones customizados em SVG
- Ícones específicos da empresa
- Sugestões:
  - `shield-custom.svg`
  - `camera-custom.svg`
  - `alarm-custom.svg`

## Pasta Public

### 📁 `/public/favicon`
- Favicon e ícones da aplicação
- Arquivos que ficam na raiz do site
- Sugestões:
  - `favicon.ico` - 16x16, 32x32
  - `apple-touch-icon.png` - 180x180
  - `favicon-16x16.png`
  - `favicon-32x32.png`
  - `android-chrome-192x192.png`
  - `android-chrome-512x512.png`

## Como Usar

### Importar Imagens no Vue.js:
```javascript
// Importe a imagem
import logoHorizontal from '@/assets/images/logo/logo-horizontal.png'

// Use no template
<img :src="logoHorizontal" alt="Grupo HW" />
```

### Referenciar Assets Públicos:
```html
<!-- Para arquivos em /public -->
<link rel="icon" href="/favicon/favicon.ico">
```

## Formatos Recomendados

- **Logos**: PNG (com transparência) ou SVG
- **Fotos**: JPG (otimizadas)
- **Ícones**: SVG ou PNG
- **Favicon**: ICO, PNG

## Otimização

- Comprima as imagens antes de adicionar
- Use formatos WebP quando possível
- Mantenha diferentes tamanhos para responsividade
