/*
  la funzione createPeopleFromNamesAndAges prende in input una lista di nomi (parametro 'n') e una lista di numeri (parametro 'a') 
  e crea una nuova lista di oggetti con una proprieta' `name` e una proprietà `age` rispettivamente con i valori degli elementi delle due liste 
  es. 
    n = ['a', 'b', 'c'] | a = [1, 2, 3]-> [{ name: 'a', age: 1 }, { name: 'b', age: 2 }, { name: 'c', age: 3 }] 
 */

const names = [
  "Nastiusha",
  "Nicola",
  "Kiki",
];

const ages = [
  26,
  27,
  2
]

function createPeopleFromNamesAndAges(n, a) {}

const result = createPeopleFromNamesAndAges(array);

console.log(
  result[0].name === "Nastiusha" &&
  result[0].age === 26 &&
    result[1].name === "Nicola" &&
    result[1].age === 27 &&
    result[2].name === "Kiki" &&
    result[2].name === 2
);
