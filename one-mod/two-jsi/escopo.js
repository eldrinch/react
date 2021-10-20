//ESCOPO DE BLOCO
if (true) {
  const message = "Ola";
  console.log(message);
}
// console.log(message); //ReferenceError: message is not defined

for (const color of ["verde", "vermelho", "amarelo"]) {
  const message = "Olá1";
  console.log(color);
  console.log(message);
}

// console.log(color) // ReferenceError: color is not defined
// console.log(message) // ReferenceError: message is not defined

//EXEMPLO DE ESCOPO DE BLOCO COM VAR; ele nao cria o escopo de bloco  0 0 porem sera e global

if (true) {
  var txt = 0;
  console.log(txt);
}

console.log(txt);

//EXEMPLO DE ESCOPO DE LOCAL COM VAR;

function executar() {
  var text = "Escopo local com VAR";
  console.log(text);
}
executar();
//console.log(text); //ReferenceError: text is not defined

//EXEMPLO DE ESCOPO LOCAL LET CONST
function executar2() {
  let count = 0;
  const test = 2;

  function executar3() {}
  console.log(count);
  console.log(test);
  console.log(executar3);
}

executar2();
//console.log(count); //ReferenceError: count is not defined
//console.log(test); ReferenceError: count is not defined
//console.log(executar3); ReferenceError: count is not defined


//ESCOPO ANINHADO

function executar3(){
  const txt = "Escopo aninhado"
  if(true){
    const nome = 'Carro'
    console.log(txt);
  }
// console.log(nome); //ReferenceError: nome is not defined
}

executar3();

//EXEMPPLO ESCOPO GLOBAL

  let gName =  'Bruno';
  console.log(gName);

//EXEMPLO HOISTING

printName();

function printName(){
  console.log("Nome: " +gName);
}