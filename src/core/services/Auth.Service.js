import { naoAutorizadoError } from "../errors/naoAutorizadoError";

//Criação da lista fixa de permissões (RBAC role-based access control)
export const permissoes_por_cargo = {
  almoxarife: ["ver_estoque", "processo_carregamento"],
  gerente: ["ver_estoque", "processo_carregamento", "autorizar_despacho"],
  visitante: ["ver_estoque"],
};

//aqui no caso eu tbm estou em duvida se fiz certo, pois eu utilizo o throw para lançar o
//erro, e então eu teria que lançar o bloco try catch no UI/COMPONENTS para validar a autorizacao ?
export function autorizacao(permissao, status, cargo) {
  if (status === false) {
    throw new naoAutorizadoError(
      "Acesso negado: Voce precisa estar logado para realizar a ação",
    );
  }
  if (permissoes_por_cargo[cargo].includes(permissao) === false) {
    throw new naoAutorizadoError(
      "Acesso negado: Voce não tem autoritade suficiente para realizar tal ação",
    );
  }
}
