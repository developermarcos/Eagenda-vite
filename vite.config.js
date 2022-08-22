import { resolve } from "path";
import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  base : "/egenda-vite",
  plugins : [ghPages()],
  root : root,
  build :{
    outDir : outDir,
    emptyOutDir : true,
    rollupOptions : {
      input : {
        tarefaList: resolve(root, 'tarefa/tarefa.listagem.html'),
        tarefaCreate : resolve(root, 'tarefa/tarefa.cadastrar.html'),
      }
    }
  },
  publicDir : '../public'
});