/*/codigos juntos com a professora
//criação de arrays
const pets=["gato","doguinho","pato"];
const numeros=[7,4,3,-7,56,10];
const arrayMisto=[10,"teste",true];
const umItem=[1];
const arrayVazio=[];
//segunda parte-observar arrays
console.log(pets.length);//3
console.log(pets[3]);//underfinded
console.log(arrayMisto.includes(10));
console.log(arrayMisto.includes("teste"));
console.log(arrayMisto.includes(true));
console.log(umItem);
console.log(umItem.length);
//manipulação de arrays
/*const copiaPets=pets
console.log(copiaPets,pets);
copiaPets.push("raposa");//add nas duas variaveis
console.log(copiaPets,pets);*/

/*const copiaPets=pets.slice()//o slice corta o vinculo entre as variaveis, meio que fica imune
console.log(copiaPets,pets);
copiaPets.push("raposa");// add apenas no copia.Pets
console.log(copiaPets,pets);

// remoção splice()
copiaPets.splice(2,2);
 //(indice, quantidade)splice remove (X,Y) a partir de X remova a partir de Y itens da array
console.log(copiaPets);
// ordenar sort()
console.log(pets);
console.log(pets.sort());// a palavra com maiuscula vai primeiro ;/
//em uma variavel mista, os numeros vem na frente. strings e deois os booleanos
console.log(numeros);
console.log(numeros.sort());// sempre ordena na ordem crescente do primeiro numero
//site com essas coisas https:developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

//exercicio de fixação
const numeros=[7,4,9,2];
sliceNumeros= numeros.slice()

console.log(numeros);
console.log(numeros.sort());
console.log(numeros.reverse());

numeros.splice(3,1);
console.log(numeros);

numeros.push(6);
console.log(numeros);

numeros.splice(2,1);
console.log(numeros);



