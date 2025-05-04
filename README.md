#  FURIA Howl

Projeto desenvolvido para o **processo seletivo da FURIA Esports**, com o objetivo de demonstrar habilidades práticas em desenvolvimento Fullstack.

Esta aplicação permite buscar os tweets mais recentes de um usuário do Twitter e gerar automaticamente um resumo com ajuda da **API da OpenAI**, exibindo tudo em uma interface moderna e responsiva.

---

## ✨ Tecnologias Utilizadas

### 🔷 Frontend
- [React (Vite)](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### 🔶 Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📦 Instalação e Execução

### ✅ Pré-requisitos
- Node.js v18+
- Yarn ou npm
- Conta na [OpenAI](https://platform.openai.com/) com chave de API
- Conta no [XDeveloper](https://developer.x.com/) com chave de API

---

### 🔄 Clonando o repositório

```bash
git clone https://github.com/seu-usuario/furia-howl.git
cd furia-howl
```

---

### 📁 Instalação de dependências

#### Backend
```bash
cd backend
npm install # ou yarn
```

#### Frontend
```bash
cd frontend
npm install # ou yarn
```

---

### 🔐 Configuração do `.env`

No diretório `/backend`, crie um arquivo `.env` com:

```env
PORT=porta
TWITTER_API_KEY=sua_api
TWITTER_API_SECRET=sua_secret_api
TWITTER_BEARER_TOKEN=bearer_twitter_api
OPENAI_API_KEY=sua_openai_key
```

---

### ▶️ Executando a aplicação

#### Iniciar o backend
```bash
cd backend
npm run dev
```

#### Iniciar o frontend
```bash
cd frontend
npm run dev
```

---

## 💻 Funcionalidades

- 🔍 Busca tweets recentes de um usuário (@username);
- 🧠 Gera resumo automático usando a OpenAI;
- 🌑 Tema escuro por padrão;
- 📄 Suporte a dados mockados (utilizados para testes enquanto a API do Twitter estava com limitações).

---

## 📁 Estrutura de Pastas (simplificada)

```
project-root/
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │       └── twitter.js
│   │   ├── services/
│   │       └── twitter.js
│   │       └── ai.js
│   │   └── server.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── Home.tsx
    │   ├── assets/
    │   │   └── furia-logo.png
    │   │   └── furia-icon.png
    │   └── App.tsx
    └── index.html
```

---

## ⚠️ Limitações Atuais

- A API oficial do Twitter impõe **limites de requisição (rate limit)** na versão gratuita, para mostrar funcionalidade do projeto os testes são feitos com dados mockados;
- A aplicação não possui paginação nem busca avançada;
- Sem testes automatizados implementados até o momento;
- Design ainda básico (foco atual: funcionalidade);
- Dependência de conta paga no OpenAI após certo volume.

---

## 🚀 Melhorias Futuras

- Implementação de um ChatBOT
- Sistema de cache/localStorage para reduzir chamadas à API;
- Painel de visualização com análises/sentimento;
- Criação de testes com Jest e Cypress;
- Deploy automatizado (Vercel + Render);
- Adição de loading spinners e feedback visual ao usuário.

---

## 🖤 Agradecimentos

Desenvolvido com dedicação para o processo seletivo da **FURIA Esports**!
Como um fã de E-sports e também um fã da **FURIA** agradeço a oportunidade!
