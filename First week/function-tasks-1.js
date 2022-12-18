console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  // ...sprendimas ir spausdinimas
  function getFirstElement(array) {
    return array.shift();
  }
  
  let arr = [1, 2, 3, 4, 5];
  let firstElement = getFirstElement(arr);
  
  console.log(firstElement);  
  console.log(arr);  
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  // ...sprendimas ir spausdinimas
  function removeFirstElement(array) {
    return array.shift();
  }
  let arr = [1, 2, 3, 4, 5];
  let firstElement = removeFirstElement(arr);

  console.log(firstElement); 
  console.log(arr); 
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  // ...sprendimas ir spausdinimas
  function getLastElement(array) {
    return array.pop();
  }
  
  let arr = [1, 2, 3, 4, 5];
  let lastElement = getLastElement(arr);
  
  console.log(lastElement);  
  console.log(arr);  
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  // ...sprendimas ir spausdinimas
  function removeLastElement(array) {
    return array.pop();
  }
  
  let arr = [1, 2, 3, 4, 5];
  let lastElement = removeLastElement(arr);
  
  console.log(lastElement);  
  console.log(arr); 
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  // ...sprendimas ir spausdinimas
  function getArrayLength(array) {
    return array.length;
  }
  
  let arr = [1, 2, 3, 4, 5];
  let length = getArrayLength(arr);
  
  console.log(length); 
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  // ...sprendimas ir spausdinimas
  function printLastElementIndex(array) {
    let lastIndex = array.length - 1;
    console.log(lastIndex);
  }
  
  let arr = [1, 2, 3, 4, 5];
  printLastElementIndex(arr); 
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  // ...sprendimas ir spausdinimas
  function printElementIndexes(array) {
    let indexes = array.map((value, index) => index.toString());
    console.log(indexes);
  }
  
  let arr = [1, 2, 3, 4, 5];
  printElementIndexes(arr);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  // ...sprendimas ir spausdinimas
  function printElementValues(array) {
    let values = array.map((value) => value.toString());
    console.log(values);
  }
  
  let arr = [1, 2, 3, 4, 5];
  printElementValues(arr);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  // ... sprendimas ir spausdinimas
  function printElementPairs(array) {
    array.forEach((value, index) => {
      console.log(`[${index}] => ${value}`);
    });
  }
  
  let arr = [1, 2, 3, 4, 5];
  printElementPairs(arr);  
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  // ...sprendimas ir spausdinimas
  function printElementsBackwards(array) {
    let reversed = array.reverse();
    for (let i = 0; i < reversed.length; i++) {
      console.log(reversed[i]);
    }
  }
  
  let arr = [1, 2, 3, 4, 5];
  printElementsBackwards(arr);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  // ...sprendimas ir spausdinimas
  function printElementIndexes(array) {
    let indexes = array.map((value, index) => index);
    console.log(indexes.join(' '));
  }
  
  let arr = [1, 2, 3, 4, 5];
  printElementIndexes(arr);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  // ...sprendimas ir spausdinimas
  function printElementValues(array) {
    console.log(array.join(' '));
  }
  
  let arr = [-111, 2, -9, 48];
  printElementValues(arr);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  // ...sprendimas ir spausdinimas
  function printElementPairs(array) {
    let pairs = array.map((value, index) => `[${index}]=>${value}`);
    console.log(pairs.join(' '));
  }
  
  let arr = [17, 8, 88];
  printElementPairs(arr); 
}
console.groupEnd();
