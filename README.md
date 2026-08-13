Portfólio pessoal de José Pedro Bernardes, desenvolvedor full stack, construído com Next.js e Tailwind CSS.

🚀 Stack
Next.js 16 — App Router + Turbopack
React 19
TypeScript
Tailwind CSS v4
next-themes — alternância entre tema claro e escuro
📁 Estrutura do projeto
src/
  app/
    layout.tsx        # Layout raiz + ThemeProvider
    page.tsx           # Home
  components/
    Header.tsx          # Cabeçalho (logo + navegação)
    Logo.tsx             # Logotipo com link para home
  lib/
    nav-links.ts          # Dados dos links de navegação
public/
  assets/                  # Imagens estáticas (logo, etc.)
🛠️ Como rodar localmente

Clone o repositório e instale as dependências:

bash
npm install

Rode o servidor de desenvolvimento:

bash
npm run dev

Abra http://localhost:3000 no navegador.

📦 Scripts disponíveis
Comando	Descrição
npm run dev	Inicia o servidor de desenvolvimento
npm run build	Gera o build de produção
npm run start	Roda o build de produção
npm run lint	Executa o linter (ESLint)
✅ Roadmap
 Estrutura inicial do projeto (Next.js + Tailwind v4)
 Header com logo e navegação
 Botão de alternância de tema (dark/light)
 Seção "Sobre mim"
 Seção de Skills
 Seção de Projetos
 Seção de Contato
 Deploy na Vercel
📄 Licença

Este projeto é de uso pessoal.

📬 Contato
E-mail: josepedro.bernardes1@gmail.com
