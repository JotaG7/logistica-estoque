export class naoAutorizadoError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "NaoAutorizado";
  }
}
