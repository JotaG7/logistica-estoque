import { VeiculoNaoEstaProntoError } from "../errors/VeiculoNaoEstaProntoError";

export class Veiculos {
  #veiculoPronto;
  #veiculoEmRota;

  constructor(id, modelo, placa) {
    this.id = id;
    this.modelo = modelo;
    this.placa = placa;
    this.#veiculoPronto = false;
    this.#veiculoEmRota = false;
  }

  //Metodo getter de pegar um campo privado
  getVeiculoPronto() {
    return this.#veiculoPronto;
  }

  //Metodo getter de pegar um campo privado
  getVeiculoEmRota() {
    return this.#veiculoEmRota;
  }

  //Metodo de despache interno do veiculo
  despacharVeiculo() {
    if (this.#veiculoPronto === true) {
      this.#veiculoPronto = false;
      this.#veiculoEmRota = true;
    } else {
      throw new VeiculoNaoEstaProntoError(
        "Veiculo não esta pronto para despache, por favor verificar carga pendente",
      );
    }
  }

  //Metodo de mudança de estado
  veiculoComoPronto() {
    this.#veiculoPronto = true;
  }

  //Metodo de mudança de estado
  retornoDaRota() {
    this.#veiculoEmRota = false;
  }
}
