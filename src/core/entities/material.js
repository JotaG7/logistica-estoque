import { estoqueInsuficienteError } from "../errors/estoqueInsuficienteError";

export class Materiais {
  #quantidade;

  constructor(id, nome, quantidade, galpaoOrigem) {
    this.id = id;
    this.nome = nome;
    this.#quantidade = quantidade;
    this.galpaoOrigem = galpaoOrigem;
  }

  //metodo getter de campo privado
  getQuantidade() {
    return this.#quantidade;
  }

  //Metodo interno de validação de material
  validarMaterial(quantidadeSolicitada) {
    if (quantidadeSolicitada <= this.#quantidade) {
      return true;
    } else {
      throw new estoqueInsuficienteError(`Não temos essa quantia em estoque`);
    }
  }

  //Metodo interno de retirada de material
  retirarMaterial(quantidadeARetirar) {
    this.validarMaterial(quantidadeARetirar);
    this.#quantidade = this.#quantidade - quantidadeARetirar;
  }

  //Metodo interno de acrescento de material
  adicionarMaterial(quantidadeAAdicionar) {
    this.#quantidade = this.#quantidade + quantidadeAAdicionar;
  }
}
