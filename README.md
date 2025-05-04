# 🐾 FURIA Howl - Tweet Analyser

Projeto desenvolvido para o **processo seletivo da FURIA Tech**, com o objetivo de demonstrar habilidades práticas em desenvolvimento Fullstack.

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
- Conta no [X Developer](https://developer.x.com/) com chave de API

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
TWITTER_BEARER_TOKEN=seu_bearer_token
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
- 📄 Suporte a dados mockados (utilizados para testes enquanto a API do Twitter estava com limitações).

---

## 🛣️ Rotas da API

As seguintes rotas estão disponíveis no backend:

### 📥 Buscar tweets reais de um usuário

```
GET /api/twitter/user/:username
```

- **Descrição:** Retorna os tweets reais mais recentes do usuário informado.
- **Exemplo:** [`http://localhost:3000/api/twitter/user/furiafan`](http://localhost:3000/api/twitter/user/furiafan)

---

### 🧪 Buscar tweets mockados de um usuário (modo de teste)

```
GET /api/twitter/mock/:username
```

- **Descrição:** Retorna tweets simulados para testes e desenvolvimento.
- **Exemplo:** [`http://localhost:3000/api/twitter/mock/teste`](http://localhost:3000/api/twitter/mock/teste)

---

## 📁 Estrutura de Pastas (simplificada)

```
furia-howl/
│
├── backend/
│   ├── data/
│   │   └── mockData.js
│   ├── routes/
│   │   └── twitter.js
│   ├── services/
│   │   └── twitter.js
│   │   └── ai.js
│   └── server.js
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

- A API oficial do Twitter impõe **limites de requisição (rate limit)** na versão gratuita, para mostrar funcionalidade do projeto os testes são feitos com dados mockados (utilize o user teste no input principal para ver os dados mockados) ou aguarde o Rate Limit resetar;
- A aplicação não possui paginação nem busca avançada;
- Sem testes automatizados implementados até o momento;
- Design ainda básico (foco atual: funcionalidade);
- Dependência de conta paga no OpenAI após certo volume.

---

## 🚀 Melhorias Futuras

- Implementação de um ChatBOT com a personalidade da FURIA;
- Sistema de cache/localStorage para reduzir chamadas à API;
- Painel de visualização com análises/sentimento;
- Criação de testes com Jest e Cypress;
- Deploy automatizado (Vercel + Render);
- Adição de loading spinners e feedback visual ao usuário.

---

## 🖤 Agradecimentos

Desenvolvido com dedicação para o processo seletivo da **FURIA**!  
Como um fã de E-sports e também um fã da **FURIA**, agradeço a oportunidade!