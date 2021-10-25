import axios from 'axios';

const apiPosts = axios.create ({
baseURL:'https://jsonplaceholder.typicode.com/'
})

async function getPosts(){
  let res = await apiPosts.get('posts'); 
  return res.data; 
}

//export default apiPosts;
// export { getPosts }

const nome = 'Gama Academy' ;
 console . log ( nome . padStart ( 13 ) ) ;
 console . log ( nome . padStart ( 2 ) ) ;


//  INICIO declare A, B, C
//   escreva("informe um valor positivo para A") 
//   leia(A) B = 0 C = 1 
//   enquanto (A != 0) faça B = B + 1 C = C * 2 A = A - 1 
//   fim-enquanto 
//   FIM 
//   Ao final desta execução, para uma entrada de valor 5, os valores de A, B e C, respectivamente serão:

  let a,b,c;
  if(a) b=0; c=1;
  while(a!=0){b=b+1; c=c*2; a=a-a;
  return a,b,c}
  a=5
  