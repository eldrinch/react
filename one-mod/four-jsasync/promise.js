const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Sucesso P1"), 2000);
});

p1.then((res) => {
  console.log(res), (rej) => {};
});

new Promise((resolve, reject) => {
  setTimeout(() => resolve("Sucesso P1a"), 2000);
}).then(
  (res) => {
    console.log(res);
  },
  (reject) => {}
);

//EXEMPLO 2 - CRIACAO DE PROMISE E O USO DO CATCH
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Sucesso P2"), 2000);
});

p2.then((res) => {
  console.log(res);
});
p2.catch((rej) => {});

p2.then((res) => console.log(res)).catch((rej) => {});

//EXEMPLO 3 - PROMISES COM O CATCH E O UNICO CATCH PARA TODAS AS REJEICOES

const p3 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Sucesso P3");
  } else {
    reject("Falha P3");
  }
});

p3.then(console.log).catch(console.error);

//EXEMPLO 4 - ENCADEAMENTO DE THEN E O CATCH

const p4 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("Sucesso P4")
  reject("Falha P4");
});

p4.then(function acao1 (res){console.log(`${res} da acao 1`); return res})
.then(function acao2 (res){console.log(`${res} da acao 2`); return res})
.then(function acao3 (res){console.log(`${res} da acao 3`); return res})
.catch(function erro(rej) {console.log(rej)})

//EXEMPLO 5 - ENCADEAMENTO DE CATCHs 

const p5 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("Sucesso P5")
  reject("Falha P5");
});

p5.then(function acao1 (res){console.log(`${res} da acao 1 p5`); return res})
.catch(function erro1(rej) {console.log('Errro no primeiro catch p5'); return rej})
.then(function acao2 (res){console.log(`${res} da acao 2 p5`); return res})
.then(function acao3 (res){console.log(`${res} da acao 3 p6`); return res})
.catch(function erro2(rej) {console.log(rej)})

// EXEMPLO 6 - ENCADEAMENTO DE CATCHs DIRETAMENTE A PRIMEIRA PROMISE, OS DOIS SAO EXECUTADOS

const p6 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("Sucesso P6")
  reject("Falha P6");
});

p6.catch(function erro1(rej) {console.error('Errro no primeiro catch p6'); return rej})
p6.catch(function erro2(rej) {console.error(rej)})
p6
.then(function acao1 (res){console.log(`${res} da acao 1 p6`); return res})
.then(function acao2 (res){console.log(`${res} da acao 2 p6`); return res})
.then(function acao3 (res){console.log(`${res} da acao 3 p6`); return res})

//EXEMPLO 7 ENCADEAMENTO DE THENs E CATCHs COM EXECAO NO MEIO DO FLUXO
const p7 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("Sucesso P7")
  reject("Falha P7");
});
p7.catch(function erro1(rej) {console.error('Errro no primeiro catch p7'); return rej})

p7.then(function acao1(res){ console.log('Promesa rejeitada p7 na acao 1'); throw new Error('Errro');})
.catch(function erro2(rej) {console.error('Tratamento das rejeiçoes em P7 ou acao 1'); return rej})
.then(function acao2(res) {console.log(`${res} da acao 2 p7`); return res})
.then(function acao3(res) {console.log(`${res} da acao 3 p7`); return res})
.catch(function erro3(rej) {console.error("Tratamento das rejeicoes em acao2 e acao3")})




