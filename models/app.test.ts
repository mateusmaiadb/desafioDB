import { calcularTroco, calcularTrocoComCedulasEMoedas } from "../src/app";

describe("Troco", () => {
  test("Quando a função calcularTroco for chamado com o valor pago de 100,50 e o valor do produto for 100 , deve retornar o resultado do troco de 0,50 centavos ", () => {
    const valorPago = 100.5;
    const valorCompra = 100;
    const resultado = 0.5;

    const troco = calcularTroco(valorPago, valorCompra);

    expect(troco).toBe(resultado);
  });

  test("Teste para 187 reais, para verificar se todas as notas estão sendo retornadas corretamente", () => {
    const valorPago = 287;
    const valorCompra = 100;
    const resultado = [
      "Cédula de 100   quantidade: 1",
      "Cédula de 50   quantidade: 1",
      "Cédula de 20   quantidade: 1",
      "Cédula de 10   quantidade: 1",
      "Cédula de 5   quantidade: 1",
      "Cédula de 2   quantidade: 1",
    ];

    const troco = calcularTrocoComCedulasEMoedas(
      calcularTroco(valorPago, valorCompra)
    );

    expect(troco).toEqual(resultado);
  });

  test("Teste para 1.90 centavos, para verrificar se todas as moedas estão sendo retornadas devidamente", () => {
    const valorPago = 2;
    const valorCompra = 0.1;

    const resultado = [
      "Moeda de 1 quantidade: 1",
      "Moeda de 0.5 quantidade: 1",
      "Moeda de 0.25 quantidade: 1",
      "Moeda de 0.1 quantidade: 1",
      "Moeda de 0.05 quantidade: 1",
    ];

    const troco = calcularTrocoComCedulasEMoedas(
      calcularTroco(valorPago, valorCompra)
    );

    expect(troco).toEqual(resultado);
  });
});
