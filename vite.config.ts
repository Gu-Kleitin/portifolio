import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANTE para o GitHub Pages:
// Se o site vai ficar em "https://<seu-usuario>.github.io/<nome-do-repo>/",
// troque o valor abaixo pelo nome real do repositório, ex: "/meu-portfolio/".
// Se o repositório se chamar "<seu-usuario>.github.io" (site de usuário),
// deixe "/".
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});