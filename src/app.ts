var cedulas: number[] = [100, 50, 20, 10, 5, 2];
var moedas: number[] = [1, 0.5, 0.25, 0.1, 0.05];
var troco: number;

export function calcularTroco(valorPago: number, valorCompra: number): number {
  troco = valorPago - valorCompra;
  return troco;
}

export function calcularTrocoComCedulasEMoedas(troco: number) {
  let resultado: any = [];

  for (var i = 0; i < cedulas.length; i++) {
    var qtdCedulas = Math.floor(Math.floor(troco) / cedulas[i]);
    if (qtdCedulas > 0) {
      troco = troco % cedulas[i];
      resultado.push(`Cédula de ${cedulas[i]}   quantidade: ${qtdCedulas}`);
    }
  }

  for (var i = 0; i < moedas.length; i++) {
    var qtdMoedas = Math.floor(troco / moedas[i]);
    if (qtdMoedas > 0) {
      troco -= qtdMoedas * moedas[i];
      troco = +troco.toFixed(2);
      resultado.push(`Moeda de ${moedas[i]} quantidade: ${qtdMoedas}`);
    }
  }
  return resultado;
}

console.log(calcularTrocoComCedulasEMoedas(calcularTroco(2, 0.1)));
