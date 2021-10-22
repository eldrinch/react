/*------String.trimStart() e String.trimEnd()--------- */

let email = "   teste@teste.com.br"
console.log(email);
console.log(email.trimStart());

let login ="testeslogin   "
console.log(login);
console.log(login.trimEnd());

/*-----Parametro opcional do Catch----*/

const api = new Promise((resolve, reject)=>{
  if (Math.random()>0.5) resolve('Sucesso')
  resolve('Falha')
})

async function request(){
  try{
    const retorno =  await api;
    console.log(retorno);
    
  }catch(err){
    console.log(err);
  }
}

//request();

/*------Array.flat() e Array.flatMap()-------*/

let arr = [1,2,[3,4] ];
console.log(arr.flat());

let arr1 = [1,2,[3,4,[5,6]],[7,8]]
console.log(arr1.flat());

let arr2 =  [1,2,[3,4,[5,6]],[7,8]];
console.log(arr2.flat(2));

let arr3 =  [1,2,[3,4,[5,6,[7,8,9,10]]]];
console.log(arr3.flat(Infinity));

let arr4 = [1,2,3,,5]
console.log(arr4);
console.log(arr4.flat());