/*
  la funzione convertToArrayOfNames prende in input una lista di oggetti (parametro 'a') che hanno una proprietà `name` 
  e crea una nuova lista che contiene i valori delle proprietà `name` di questi oggetti
  es. a = [{ name: 'a'}, { name: 'b' }, { name: 'c' }] -> ['a', 'b', 'c']
 */

const array = [
  { name: "Nastiusha" },
  { name: "Anastasia" },
  { name: "Nastiushechka" },
  { name: "Pupseldorf" },
];

function convertToArrayOfNames(a) {}

const result = convertToArrayOfNames(array);

console.log(
  result[0] === "Nastiusha" &&
    result[1] === "Anastasia" &&
    result[2] === "Nastiushechka" &&
    result[3] === "Pupseldorf"
);
