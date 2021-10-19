let carro = {
  propietario: "Fernanda",
  ano: 2016,
};

const handler = {
  get(target, property, receiver) {
    console.log(`GET ${property}`);
    if (property in target) {
      return target[property];
    }
    return "Propiedade inexistente";
    // return target[property];
  },
};

//let carroProxy = new Proxy(carro, {});
let carroProxy = new Proxy(carro, handler);
console.log("-----------------");
console.log(carro.ano);
console.log(carroProxy.ano);
console.log(carro.modelo);
console.log(carroProxy.modelo);
console.log("-----------------");

//EXEMPLO PROXY PARA TRADUTOR
let tradutor = {
  Carro: "Car",
  Ano: "Year",
};

let handlerTradutor = {
  get(target, property) {
    if (property in target) {
      return target[property];
    } else {
      return property;
    }
  },
  
  //interceptar as operaçoes de atribuiçoes de varivael em nosso objeto
  set(target, property, value){
    if(typeof value == "string"){
      target[property] = value;
      return true;
    }else{
      return false;
    }
  }
};

let tradutorProxy = new Proxy(tradutor, handlerTradutor);

console.log(tradutor.Carro);
console.log(tradutorProxy.Carro);
console.log(tradutorProxy['Carro']);
console.log(tradutorProxy['Modelo']);

tradutorProxy["Modelo"] = 'Model';
tradutorProxy["Marca"]= 123456;

console.log(tradutorProxy['Modelo']);
console.log(tradutorProxy['Marca']);