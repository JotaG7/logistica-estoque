export class VeiculoNaoEstaProntoError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "VeiculoNaoEstaProntoError";
  }
}
