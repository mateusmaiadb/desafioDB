var cedulas: number[] = [100, 50, 20, 10, 5, 2];
var moedas: number[] = [1, 0.5, 0.25, 0.1, 0.05];
var troco: number;
var valorPago = 100.49;
var valorCompra = 100;

function calcularTroco(valorPago: number, valorCompra: number): number {
  troco = valorPago - valorCompra;
  return troco;
}

function calcularCedulas(troco: number): void {
  for (var i = 0; i < cedulas.length; i++) {
    var qtdCedulas = Math.floor(troco / cedulas[i]);
    troco = troco % cedulas[i];
    console.log("Cédula de " + cedulas[i] + " quantidade: " + qtdCedulas);
  }
}

calcularCedulas(calcularTroco(valorPago, valorCompra));

function calcularMoedas(troco: number): void {
  for (var i = 0; i < moedas.length; i++) {
    var qtdMoedas = Math.floor(troco / moedas[i]);
    troco = troco % moedas[i];
    troco = +troco.toFixed(2);
    if (troco < 0.05) {
      troco = 0.05;
    }
    console.log(moedas[i] + ": " + qtdMoedas);
    console.log(troco);
  }

  //   console.log("Troco: " + troco);
}
calcularMoedas(calcularTroco(valorPago, valorCompra));
