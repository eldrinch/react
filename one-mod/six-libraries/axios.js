//https://axios-http.com/docs/intro
//npm install axios
//https://jsonplaceholder.typicode.com

// import axios from 'axios';
// import postsApi from './services/postsApi.js'

import { getPosts } from './services/postsApi.js'

// let res = await axios.get('https://jsonplaceholder.typicode.com/users'); 
//let res = await postsApi.get('posts'); 
let res = await getPosts();
console.log(res);

/*
//res = await axios.get(`https://jsonplaceholder.typicode.com/users/${1}`); 
res = await postsApi.get('posts'); 

//console.log(res.data);


res = await axios.put(`https://jsonplaceholder.typicode.com/posts`, {
  userId: 1,
  id: 1,
  title: 'TETES prehenderit',
  body: 'testes\n' +
    'testes\n' +
    'tsets\n' +
    'tsetteo'
})
console.log(res.data);
//res = await axios.post(`https://jsonplaceholder.typicode.com/posts`,{

res = await postsApi.post(`posts`,{
userId: 1,
id: 1,
title: 'TETES prehenderit',
body: 'testes\n' +
  'testes\n' +
  'tsets\n' +
  'tsetteo'
}
)
// console.log(res.status);
// console.log(res.data);

res = await postsApi.delete(`posts/${101}`)
//console.log(res.status);
*/