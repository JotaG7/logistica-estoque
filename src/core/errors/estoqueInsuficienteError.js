export class estoqueInsuficienteError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "estoqueInsuficiente";
  }
}
