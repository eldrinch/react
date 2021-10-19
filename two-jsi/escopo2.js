//EXEMPLO CLOUSURE

function IMC() {
  let altura = 1.8;

  function calcula() {
    let peso = 70;
    console.log("IMC " + peso / (altura * altura));
  }
  return calcula;
}
let imc = IMC();
//imc();

// EXEMPLO CLOUSURE ENCAPSULAMENTO
function Carro() {
  this.propietario = "Rafael";
  let ano = 2020;
  //funcao expressao
  this.getAno = function () {
    return ano;
  };
  this.setAno = function (a) {
    ano = a;
  };
}

let carro = new Carro ();
console.log(carro.propietario);
console.log(carro.ano);
console.log(carro.getAno());
console.log(carro.setAno());