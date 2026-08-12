# 📖 Tutorial Completo — Shiny Car Studio
### Como editar, atualizar e publicar o site

---

## ANTES DE COMEÇAR — O que você precisa instalar

1. **Node.js** → baixe em [nodejs.org](https://nodejs.org) (versão LTS)
2. **VS Code** → baixe em [code.visualstudio.com](https://code.visualstudio.com) (editor de código)
3. Conta no **GitHub** → [github.com](https://github.com)
4. Conta no **Vercel** → [vercel.com](https://vercel.com) (conecte com GitHub)

---

## ESTRUTURA DO PROJETO

Depois de extrair o ZIP `shiny_detailer_projeto_nextjs.zip`, você terá:

```
shiny_site/
├── public/
│   └── images/          ← TODAS AS FOTOS FICAM AQUI
├── src/
│   ├── app/
│   │   ├── globals.css  ← Cores, fontes, estilos globais
│   │   ├── layout.tsx   ← SEO (título, descrição)
│   │   └── page.tsx     ← Página principal (junta tudo)
│   └── components/
│       ├── Navbar.tsx       ← Menu de navegação
│       ├── Hero.tsx         ← Seção inicial (Corvette)
│       ├── Servicos.tsx     ← Todos os serviços e preços
│       ├── Galeria.tsx      ← Grade de fotos
│       ├── Sobre.tsx        ← Seção "Sobre nós"
│       ├── TeslaStrip.tsx   ← Faixa da Tesla
│       ├── InteriorStrip.tsx← Faixa do interior
│       ├── Numeros.tsx      ← Números/estatísticas
│       ├── Agendamento.tsx  ← Formulário de agendamento
│       └── Footer.tsx       ← Rodapé
└── package.json
```

---

## 1. COMO EDITAR TEXTOS

### Abrir o projeto
1. Abra o VS Code
2. Clique em **File → Open Folder**
3. Selecione a pasta `shiny_site`

### Editar o título do site (SEO)
Arquivo: `src/app/layout.tsx`

```tsx
// Procure estas linhas e edite:
title: 'Shiny Car Studio | Detalhamento Automotivo Premium',
description: 'Detalhamento automotivo premium em Itajaí...',
```

### Editar o Hero (seção inicial)
Arquivo: `src/components/Hero.tsx`

```tsx
// Procure e edite o texto principal:
<h1>
  ONDE O<br />
  <span>DETALHE</span><br />
  DEFINE TUDO        ← edite aqui
</h1>

// Edite o subtítulo:
<p>Proteção e estética de alto padrão...</p>

// Edite os números de estatísticas:
{ n: '200+', l: 'Veículos' },
{ n: '5★', l: 'Avaliação' },
{ n: '2+', l: 'Anos' },

### Editar a seção "Sobre Nós"
Arquivo: `src/components/Sobre.tsx`

Procure as linhas com `<p>` e edite o texto dentro delas.

### Editar o rodapé
Arquivo: `src/components/Footer.tsx`

```tsx
// Endereço:
<li>📍 Itajaí, Santa Catarina</li>

// Telefone:
<li>📱 (47) 9 9747-8717</li>
```

---

## 2. COMO TROCAR IMAGENS

### Onde ficam as imagens
Todas as fotos ficam na pasta: `public/images/`

### Como trocar uma foto
1. Renomeie a nova foto com o **mesmo nome** da foto que quer substituir
   - Exemplo: quer trocar o Corvette → renomeie para `corvette_de_frente.jpg`
2. Cole na pasta `public/images/` substituindo o arquivo antigo
3. Pronto! A foto já aparece no site

### Nomes das fotos atuais
```
corvette_de_frente.jpg   ← Hero principal
corvette_de_costas.jpg   ← Seção Sobre e Galeria
tesla.jpg                ← Faixa Tesla
frente_f250.jpg          ← Galeria
interior_f250.jpg        ← Faixa Interior
roda_f250.jpg            ← Fundo dos números
frente_nivus_preta.jpg   ← Galeria
logo_shiny.jpg           ← Logo navbar e footer
```

### Adicionar nova foto na galeria
Arquivo: `src/components/Galeria.tsx`

```tsx
// Encontre o array "fotos" e adicione:
const fotos = [
  { src: '/images/corvette_de_costas.jpg', label: 'Corvette', sub: 'Polimento Premium' },
  { src: '/images/tesla.jpg', label: 'Tesla', sub: 'Coating Cerâmico' },
  // → adicione sua nova foto aqui:
  { src: '/images/nome_da_sua_foto.jpg', label: 'Seu Carro', sub: 'Descrição' },
]
```

---

## 3. COMO ADICIONAR NOVOS SERVIÇOS

Arquivo: `src/components/Servicos.tsx`

Encontre o array da categoria onde quer adicionar. Por exemplo, para adicionar em **Tratamento Interno**:

```tsx
interno: [
  // serviços existentes...
  
  // → adicione no final da categoria:
  {
    nome: 'Nome do Novo Serviço',
    desc: 'Descrição detalhada do serviço aqui.',
    preco: 'A partir de R$XXX',
  },
],
```

### Adicionar nova categoria inteira
1. Adicione no array `categories`:
```tsx
{ id: 'nova', label: 'Nome da Categoria' },
```

2. Adicione no objeto `services`:
```tsx
nova: [
  { nome: 'Serviço 1', desc: 'Descrição...', preco: 'A partir de R$X' },
],
```

---

## 4. COMO ATUALIZAR PREÇOS

Arquivo: `src/components/Servicos.tsx`

Encontre o serviço pelo nome e edite o campo `preco`:

```tsx
{
  nome: 'Higienização Completa',
  desc: '...',
  preco: 'A partir de R$550',   ← edite este valor
},
```

Para serviços com preços por tipo (como Lavagem Detalhada):
```tsx
precos: [
  { label: 'Hatch', valor: 'R$160' },   ← edite aqui
  { label: 'Sedan', valor: 'R$180' },
  { label: 'SUV', valor: 'R$210' },
],
```

---

## 5. COMO RODAR O SITE LOCALMENTE (ver as alterações)

Abra o terminal no VS Code (**View → Terminal**) e rode:

```bash
# Primeira vez — instalar pacotes:
npm install

# Iniciar o servidor local:
npm run dev
```

Depois abra o navegador em: **http://localhost:3000**

O site atualiza automaticamente a cada alteração salva. ✅

---

## 6. COMO FAZER O PRIMEIRO DEPLOY NO VERCEL

### Passo 1 — Subir para o GitHub
No terminal do VS Code:

```bash
git init
git add .
git commit -m "Shiny Car Studio - versão inicial"
```

Depois vá em [github.com/new](https://github.com/new), crie um repositório chamado `shiny-detailer` e copie o comando que o GitHub mostrar, parecido com:

```bash
git remote add origin https://github.com/SEU_USUARIO/shiny-detailer.git
git push -u origin main
```

### Passo 2 — Importar no Vercel
1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clique em **Add New → Project**
3. Selecione o repositório `shiny-detailer`
4. Deixe tudo padrão — o Vercel detecta Next.js automaticamente
5. Clique em **Deploy**

Pronto! Em 2 minutos o site estará no ar com uma URL pública. ✅

---

## 7. COMO ATUALIZAR O SITE JÁ PUBLICADO

Depois de fazer qualquer alteração no código ou imagens:

```bash
# No terminal do VS Code:
git add .
git commit -m "descrição do que foi alterado"
git push
```

O Vercel detecta o push automaticamente e publica a nova versão em cerca de 1 minuto. Não precisa fazer nada mais. ✅

---

## 8. COMO SUBIR ALTERAÇÕES FUTURAS (passo a passo resumido)

```
1. Edite os arquivos no VS Code
2. Salve (Ctrl+S)
3. Abra o terminal (View → Terminal)
4. git add .
5. git commit -m "o que você alterou"
6. git push
7. Aguarde 1 minuto → site atualizado!
```

---

## DICAS IMPORTANTES

**Sempre salve o arquivo** antes de rodar `git add .`

**Não apague as aspas** ao editar textos — edite apenas o conteúdo entre elas.

**Se algo quebrar**, desfaça com `Ctrl+Z` no VS Code ou rode:
```bash
git checkout -- .
```
(isso reverte para a última versão salva no Git)

**Para alterar o número do WhatsApp**, procure por `5547997478717` nos arquivos e substitua pelo novo número (apenas dígitos, com DDI 55).

**Para alterar o endereço ou e-mail**, edite o arquivo `Footer.tsx`.

---

## SUPORTE

Se tiver dúvidas ou algo quebrar, basta me perguntar aqui — é só descrever o que você alterou e qual erro apareceu.
