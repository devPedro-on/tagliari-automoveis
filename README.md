# Tagliari Automóveis — Site institucional

Site de apresentação e conversão de clientes da **Tagliari Automóveis**, loja de compra, venda e troca de veículos em São José - SC.

O site não é uma vitrine nem um e-commerce (a vitrine com o estoque atualizado é o [Instagram da loja](https://www.instagram.com/tagliari_automoveis/)) — o objetivo aqui é apresentar a loja, gerar confiança e converter visitantes em contatos via WhatsApp.

🔗 **Site publicado:** https://tagliari-automoveis.vercel.app

## Seções

- **Hero** — chamada principal com foto da fachada e CTAs (WhatsApp e Instagram)
- **Diferenciais** — financiamento, troca, avaliação do usado, atendimento consultivo
- **Sobre a loja** — apresentação, convite para visitar e informação sobre vendas para outras cidades/estados
- **Carros que já passaram pela loja** — carrossel de fotos (2 por veículo) de vendas anteriores, sem função de estoque/e-commerce
- **Avaliações** — nota e depoimentos reais do Google Maps
- **Como funciona** — passo a passo do atendimento, do primeiro contato à entrega
- **Contato** — WhatsApp, e-mail, endereço e mapa incorporado

## Stack

HTML, CSS e JavaScript puros (sem framework, sem build step). Fontes via Google Fonts (Poppins + Inter).

```
.
├── index.html
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/          # imagens otimizadas em WebP/PNG usadas pelo site
```

A pasta `originais/` (fora do controle de versão, ver `.gitignore`) guarda as fotos originais enviadas antes da otimização — não é usada pelo site.

## Rodando localmente

Por ser um site 100% estático, qualquer servidor HTTP simples funciona. Exemplos:

```bash
npx serve .
```

```bash
python -m http.server 5173
```

Depois acesse `http://localhost:<porta>`.

## Deploy

O projeto está hospedado na **Vercel** como site estático (sem build command, diretório de saída é a raiz do projeto). Qualquer push na branch `main` do GitHub gera um novo deploy automaticamente.

## Contato da loja

- WhatsApp: [+55 48 98816-9989](https://wa.me/5548988169989)
- E-mail: consultorpedrotagliari@gmail.com
- Endereço: R. Francisco Nappi, 278 — Ipiranga, São José - SC, 88111-600
- Instagram: [@tagliari_automoveis](https://www.instagram.com/tagliari_automoveis/)
