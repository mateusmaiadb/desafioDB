import { calcularTrocoComCedulas, calcularTroco, calcularMoedas } from "../src/app";

describe("Troco", () => {
  // test("Teste troco", () => {
  //   const resultado = calcularTroco(100.50, 100);
  // });

  test("Teste de calculo de troco com cedulas com 115 de troco ", () => {
    const resultado = calcularTrocoComCedulas(15);
    
    expect(resultado).toBe(15);
  });

//   test("Teste moedas", () => {
//     const resultado = calcularMoedas(calcularTroco(100.49, 100));
//   });

});
