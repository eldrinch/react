function Pessoa(nome) {
  if (!nome) {
    this.nome = "Fulano";
  } else {
    this.nome = nome;
  }
  this.dizerOla = function(){console.log(this.nome + " diz: Olá! "); };
}

let pessoaA = new Pessoa("Alberto")

Pessoa.digaOla = function() {console.log("Olá, meu nome é: " + this.nome);};

let pessoaB = new Pessoa("Maria")

console.log("-------------------------");
try {
  pessoaA.digaOla();
}catch(e){
  console.log("Falha no pessoaA.digaOla");
}

try {
  pessoaB.digaOla();
}catch(e){
  console.log("Falha no pessoaB.digaOla");
}
console.log("-------------------------");


pessoaB.digaOla = function(){console.log("Oi meu nome é " + this.nome);};

try {
  pessoaA.digaOla();
}catch(e){
  console.log("Falha no pessoaA.digaOla");
}

try {
  pessoaB.digaOla();
}catch(e){
  console.log("Falha no pessoaB.digaOla");
}
console.log("-------------------------");


Pessoa.prototype.digaOla = function(){console.log("Olá, eu sou o: " + this.nome);}

let pessoaC = new Pessoa("Ana ");

try {
  pessoaA.digaOla();
}catch(e){
  console.log("Falha no pessoaA.digaOla");
}

try {
  pessoaB.digaOla();
}catch(e){
  console.log("Falha no pessoaB.digaOla");
}

try {
  pessoaC.digaOla();
}catch(e){
  console.log("Falha no pessoaC.digaOla");
}
console.log("-------------------------");


Pessoa.prototype.dizerOla = function(){
  console.log(this.nome + " Vou dizer outro Olá");
}

pessoaB.dizerOla = function (){
  console.log(this.nome + " consigo dizer outro Olá ");
}

try {
  pessoaA.dizerOla();
}catch(e){
  console.log("Falha no pessoaA.dizerOla");
}

try {
  pessoaB.dizerOla();
}catch(e){
  console.log("Falha no pessoaB.dizerOla");
}

try {
  pessoaC.dizerOla();
}catch(e){
  console.log("Falha no pessoaC.dizerOla");
}
console.log("-------------------------");

if (year >= 1981 && year <= 1996){
  const millenial = true;
  const food ="avocado toast"
}

let year = 1985
console.log(year);