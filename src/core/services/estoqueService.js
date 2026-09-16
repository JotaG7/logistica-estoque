import { autorizacao } from "./Auth.Service";

export function despachoEstoque(
  usuario,
  material,
  permissao,
  veiculo,
  quantidade,
) {
  autorizacao(permissao, usuario.getStatus(), usuario.getCargo());
  veiculo.despacharVeiculo();
  material.retirarMaterial(quantidade);
}

export function adicionarEstoque(usuario, material, permissao, quantidade) {
  autorizacao(permissao, usuario.getStatus(), usuario.getCargo());
  material.adicionarMaterial(quantidade);
}
