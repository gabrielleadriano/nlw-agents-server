# NLW Agents Server

Servidor Fastify para gerenciamento de salas, utilizando PostgreSQL e Drizzle ORM.

## ⚙️ Tecnologias & Bibliotecas

- 🚀 **Fastify** — Framework web rápido para Node.js
- 🗄️ **drizzle-orm** — ORM para TypeScript/Node.js
- 🐘 **PostgreSQL** — Banco de dados relacional
- 🧩 **zod** — Validação de esquemas
- 🔗 **fastify-type-provider-zod** — Integração Zod com Fastify
- 🌱 **drizzle-seed** — Seed de dados para Drizzle ORM
- 🌐 **@fastify/cors** — Middleware CORS para Fastify

## 🧑‍💻 Padrões de Projeto

- 📦 **Barrel files**: Exportação centralizada de schemas
- 🗂️ **Organização por domínio**: Separação de rotas, banco e validações
- ✅ **Validação de ambiente**: Uso do Zod para variáveis de ambiente

## 🚀 Setup

1. 📥 **Clone o projeto**
2. 🐳 **Configure o banco**  
   Use Docker:
   ```sh
   docker compose up -d
   ```
3. ⚙️ **Configure o arquivo `.env`**  
   Baseie-se em `.env.example`
4. 📦 **Instale dependências**
   ```sh
   npm install
   ```
5. 🛠️ **Execute as migrations**
   ```sh
   npx drizzle-kit migrate
   ```
6. 🌱 **Seed do banco**
   ```sh
   npm run db:seed
   ```
7. 🚀 **Inicie o servidor**
   ```sh
   npm run dev
   ```

## 📚 Endpoints

- `GET /health` — Health check
- `GET /rooms` — Lista de salas

## 🗂️ Estrutura de Pastas

- `src/server.ts` — Entrypoint do servidor
- `src/db/` — Conexão, schema, seed e migrations
- `src/http/routes/` — Rotas HTTP

---
