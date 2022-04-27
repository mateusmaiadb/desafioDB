import {  calcularTroco, calcularTrocoComCedulasEMoedas } from "../src/app";

describe("Troco", () => {
  test("Quando a função calcularTroco for chamado com o valor pago de 100,50 e o valor do produto for 100 , deve retornar o resultado do troco de 0,50 centavos ", () => {
    
    const valorPago = 100.50;
    const valorCompra = 100;
    const resultado = 0.50;
    
    const troco = calcularTroco(valorPago, valorCompra);

    expect(troco).toBe(resultado);

  });

  
  
 
});
