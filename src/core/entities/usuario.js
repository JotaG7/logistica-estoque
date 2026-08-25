export class Usuario {
  #senha;
  #cargo;
  #statusLogado;

  constructor(id, nome, email, senha, cargo) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.#senha = senha;
    this.#cargo = cargo;
    this.#statusLogado = false; // Status inicial do boolean
  }

  //Encapsulamento com comportamento
  loginCheckout(emailUsuario, senhaUsuario) {
    if (emailUsuario === this.email && senhaUsuario === this.#senha) {
      this.#statusLogado = true;
    }
  }

  //Encapsulamento com comportamento
  logout() {
    if (this.#statusLogado === true) {
      this.#statusLogado = false;
      //Irei colocar outro erro com intenção aqui
    }
  }

  //Metodo para pegar um dado privado, agora é instaciar um objeto e declarar ele para ler
  getCargo() {
    return this.#cargo;
  }

  getStatus() {
    return this.#statusLogado;
  }
}
