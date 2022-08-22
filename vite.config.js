import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  base : "/egenda-vite",
  root : root,
  build :{
    outDir : outDir,
    emptyOutDir : true,
    rollupOptions : {
      input : {
        index : resolve(root, 'index.html'),
        tarefaList: resolve(root, 'tarefa/tarefa.listagem.html'),
        tarefaCreate : resolve(root, 'tarefa/tarefa.cadastrar.html'),
      }
    }
  },
  publicDir : '../public'
});