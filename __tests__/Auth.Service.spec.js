import { autorizacao } from "../src/core/services/Auth.Service";
import { naoAutorizadoError } from "../src/core/errors/naoAutorizadoError";

describe("autorizacao", () => {
  test("Mostrar acesso negado e que o usuario precisa estar logado", () => {
    expect(() => autorizacao("_teste1", false, "_teste2")).toThrow(
      naoAutorizadoError,
    );
  });
  test("Mostrar acesso negado pois o usuario não tem autorização para realizar tal ação", () => {
    expect(() =>
      autorizacao("processo_carregamento", true, "visitante"),
    ).toThrow(naoAutorizadoError);
  });
  test("Mostrar acesso permitido pois deu tudo certo, o usuario esta logado e tem autorização para realizar tal ação", () => {
    expect(() =>
      autorizacao("autorizar_despacho", true, "gerente"),
    ).not.toThrow();
  });
});
