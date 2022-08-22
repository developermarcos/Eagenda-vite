import { EntidadeBase } from "./entidadeBase";
export interface IRepositorioBase<T extends EntidadeBase>{
  inserir(novoRegistro : T) : void;
  editar(registroEditado : T) : void;
  excluir(idExcluir : string) : void;
  listarTodos() : T[];
  selecionarPorId(id : string) : T;
}