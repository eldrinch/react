/*-------------LET + CONST-----------------*/
//ES5
if (true){
  var v = "Aula"
}
//console.log(v);

//ES6
if (true){
  let x = "Aula"
}
//eu nao consigo accesar minha variavel de forma externa
//console.log(x);

const PI = 3.141595;
//nao consigo reatribuir valores pelo fato de const,
console.log(PI);
//PI = 3.15 //TypeError: Assignment to constant variable.

const Aluno = {
  nome: "Bruno",
  sobrenome: "Texeira"
}
console.log(Aluno.nome);
//Posso atribuir alterar os valores das propiedades do objeto
Aluno.nome = "Carlos"
console.log(Aluno.nome);
//nao consigo reasignar o objeto
// Aluno = {nome:"Julia", sobrenome:"Silva"} //TypeError: Assignment to constant variable.

/*-------------ARROW FUNCTION-----------------*/
//ES5
var soma = function(a, b){
  return a + b;
}

function soma2(a, b){
  return a + b;
}

//ES6
let soma3 = (a, b) => {return a + b} 
let soma4 = (a, b) => a + b;
let log = () => {console.log("Erro");}

const Aluno1 = {
  nome: 'Ana',
  getAluno: function(){return console.log(this)}
}

Aluno1.getAluno();

const Aluno2 = {
  nome: "Ana",
  //o this perde a referencia
  getAluno: ()=> {return console.log(this);}
}
Aluno2.getAluno();

/*-------------CLASSES-----------------*/

//ES5
function Carro(marca){
  this.marca = marca;
}
Carro.prototype.getMarca = function a (){};

//ES6
class Carro1 {
  constructor(marca){
    this.marca = marca
  }
  getMarca(){
    return this.marca;
  }
}
class Veiculo {
  constructor(marca, modelo){
    this.marca = marca,
    this.modelo = modelo
  }
getMarca(){
  return this.marca;
}
getModelo(){
  return this.modelo;
}
}

class Carro2 extends Veiculo {
  constructor(marca, modelo, estepe){
    super(marca, modelo);
    this.estepe = estepe;
  }
  getInfo(){
    return console.log('Marca: ' + super.getMarca() + ', Modelo:', super.getModelo())
  }

}

/*-------------TEMPLATE STRINGS-----------------*/

//ES5
var nome2 = "Marina"
var idade2 = 19
var curso2 = "Computação"

var frase = nome2 + "tem" + idade2 + "anos \n e cursa " + curso2;
console.log(frase);

let nome1 = "Marina"
let idade1 = 19
let curso1 = "Computação"

let frase1 = `${nome1} tem ${idade1} anos e cursa ${curso1} `
console.log(frase1);

/*-------------DESTRUCTING-----------------*/
//ES5
var carros3 = ["Uno", "Gol"];
var car1 = carros3[0];
var car2 = carros3[1];

//ES6
let [a,b] = ["Uno", "Gol", "Onix"]
console.log(a);
console.log(b);

//SWAP
[a,b] = [b,a]
console.log(a);
console.log(b);

const c1 = {modelo: "Onix", ano: 2019};
const {modelo, ano} = c1;

console.log(modelo);
console.log(ano);

const printCarInfo = ({modelo, ano})=>console.log( `Modelo: ${modelo}, Ano:${ano} `);
//destructurar um objeto em função
printCarInfo(c1);

const d = {g:1, f:2};
const {g:x, f:y} = d;
console.log(x , y);

/*-------------DEFAULT + REST + SPREAD-----------------*/
//ES5
var soma6 = function(a,b){
  if(a===undefined) a=1;
  if(b===undefined) b=1;
  return a + b;
}

//ES6
let soma7 = (a=1,b=1)=> a+b;

//REST
function soma8(...valores){
  return valores.reduce((anterior, atual)=> {return anterior + atual})
}
console.log(soma8(10,10,10,10,10,10,10,10));
console.log(soma8(1));

//SPREAD
function soma9(a,b,c){
  return a+b+c;
}
let numeros = [1,2,3];
console.log(soma9(...numeros));

/*-------------FOR OF -----------------*/
//FOR OF - arrays, Maps, Strings, Sets
for (let numero of numeros){
  console.log(numero);
}

for(let numero in numeros){
  console.log(numero);
}

const Aluno4 = {
  nome:"Pedro",
  idade:27,
  curso:"Matematica",
  [Symbol.iterator]: function*(){
    yield this.nome
    yield this.idade
    yield this.curso
  }
}

for(let prop of Aluno4 ){
  console.log(prop);
}

for(let prop in Aluno4 ){
  console.log(prop);
}



