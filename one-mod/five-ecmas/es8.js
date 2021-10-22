/*------------STRING PADDINFD---------------*/

console.log("IGTI".padStart(1));
console.log("IGTI".padStart(6));
console.log("IGTI".padEnd(4));
console.log("IGTI".padEnd(7));

console.log("IGTI".padStart(6, "D"));
console.log("IGTI".padStart(6, "DAJ"));
console.log("IGTI".padEnd(6, "D"));
console.log("IGTI".padEnd(6, "DAJ"));

console.log("IGTI".padEnd(7, "D"));
console.log("IGTI".padEnd(7, "DAJ"));
console.log("IGTI".padEnd(13, "DAJ"));

/*--Object.Entries() Object.values()- Object.getOwnPropertydescriptors--------------*/
const tipoLogradouro = {
  A: "Área",
  AER: "Aeroporto",
  AL: "Alameda",
  AV: "Avenida",
  BC: "Beco",
  R: "Rua",
};

console.log(Object.entries(tipoLogradouro));
console.log(Object.values(tipoLogradouro));

let endereco = { logradouro: "Brasil" };
console.log(Object.getOwnPropertyDescriptors(endereco, "logradouro"));

/*-------TRAILLING COMMAS---------------- */

function tanques(arg, arg1, arg2) {}
tanques("fiat", "palio", 2019);

/*--------------ASYNC AWAIT------------------------- */

const api = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("Sucesso");
  resolve("falha");
});

function request() {
  api.then(console.log).catch(console.error);
}
request();

async function request1() {
  const retorno = await api;
  console.log(retorno);
}
request1();

async function request2() {
  try {
    const retorno = await api;
    console.log(retorno);
  } catch (err) {
    console.error(err);
  }
}
request2();

function base2(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2 ** x);
    }, 2000);
  });
}

base2(10).then((r) => {
  console.log(r);
});

let sum = base2(1) + base2(2) + base2(3);
console.log(sum);

//SOLUCAO1
base2(1).then((r) => {
  console.log(r + base2(2).then((r) => {
        console.log(r + base2(3).then((r) => {
              console.log(r);
            })
        )})
  )})

//SOLUCAO2
function somaPromises() {
  return new Promise((resolve) => {
    base2(1).then((a) => {
      base2(2).then((b) => {
        base2(3).then((c) => {
          resolve(a + b + c);
        })
      })
    })
  })
}
somaPromises().then((y)=> {console.log("Solucao2: " +y)});

//SOLUCAO ASYNC + AWAIT

async function somaPromisesA(){
  const a = await base2(1)
  const b = await base2(2)
  const c = await base2(3)
  return a+b+c;
}

somaPromisesA().then((s)=> {console.log("Solucao Async+Await: " + s)})