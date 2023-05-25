/*
  la funzione convertNamesToArrayOfPeople prende in input una lista di nomi (parametro 'a') 
  e crea una nuova lista di oggetti con una proprieta' `name` con il valore dell'elemento della lista 
  es. a = ['a', 'b', 'c'] -> [{ name: 'a'}, { name: 'b' }, { name: 'c' }] 
 */

const array = [
  "Nastiusha",
  "Anastasia",
  "Nastiushechka",
  "Pupseldorf",
];

function convertNamesToArrayOfPeople(a) {}

const result = convertNamesToArrayOfPeople(array);

console.log(
  result[0].name === "Nastiusha" &&
    result[1].name === "Anastasia" &&
    result[2].name === "Nastiushechka" &&
    result[3].name === "Pupseldorf"
);
