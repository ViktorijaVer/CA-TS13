console.group("11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių");
{
function isEvenNumberOfLetters(str) {
    return str.length % 2 === 0;
    }

console.log('---');
console.log({
    'labas': isEvenNumberOfLetters('labas'),
    'kempės': isEvenNumberOfLetters('kempės'),
    '123123': isEvenNumberOfLetters('123123'),
})
console.log('---');
}
console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
    function getNumberOfVowels(str) {
        const vowels = ['a', 'e', 'ė', 'ę', 'i', 'į', 'y', 'u', 'ū', 'o', 'ą', 'ų'];
        let count = 0;
      
        for (const letter of str) {
          if (vowels.includes(letter)) {
            count++;
          }
        }
        return count;
      }
  }
  console.log('---');
  console.log({
  'aaaaa': getNumberOfVowels('aaaaa'),
  'sasasasa': getNumberOfVowels('sasasasa'),
  'aeyuioąčė': getNumberOfVowels('aeyuioąčė'),
   })
  console.log('---');
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
    function getNumberOfConsonants(str) {
        const consonants = ['b', 'c', 'č', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 'š', 't', 'v', 'z', 'ž'];
        let count = 0;
      
        for (const letter of str) {
          if (consonants.includes(letter)) {
            count++;
          }
        }
        return count;
      }
  }
  console.log('---');
  console.log({
  'aaaaa': getNumberOfConsonants('aaaaa'),
  'sasasasa': getNumberOfConsonants('sasasasa'),
  'aeyuioąčė': getNumberOfConsonants('aeyuioąčė'),
   })
  console.log('---');
console.groupEnd();
console.log();

console.group("14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaitmenų");
{
  function isOnlyLetters(str) {
const result = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
return result.length > 0;
}
}
  console.log('---');
  console.log({
    'labas': isOnlyLetters('labas'),
    'kempės': isOnlyLetters('kempės'),
    '123123': isOnlyLetters('123123'),
  })
  console.log('---');
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
function letterACount(str) {
    const result = str.match(/a/gi) ?? [];

    return result.length;
}
    console.log('---');
    console.log({
        'labas': letterACount('labas'),
        'kempės': letterACount('kempės'),
        '123123': letterACount('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje");
{
function letterCount(str, searchLetter) {
    let count = 0;

    for (const letter of str) {
    if (letter === searchLetter) {
    count++;
    }
}
return count;
  }
   console.log('---');
  console.log({
  'labas, a': letterCount('labas', 'a'),
  'kempės, k': letterCount('kempės', 'k'),
  '123123, z': letterCount('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
/* {
function indexOfLetterA(str) {
for (let i = 0; i < str.length; i++) {
if (str[i] === 'a') {
    return i;
    }
}    
  return -1;
}
console.log('---');
console.log({
'labas': lastIndexOfLetterA('labas'),
'kempės': lastIndexOfLetterA('kempės'),
'123123': lastIndexOfLetterA('123123'),
})
console.log('---');
} 
?!?!?!?!?!?!?!?
*/
console.groupEnd();
console.log();

console.group("18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje");
{
  function indexOfLetter(str, searchLetter) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   'labas, a': lastIndexOfLetter('labas', 'a'),
  //   'kempės, k': lastIndexOfLetter('kempės', 'k'),
  //   '123123, z': lastIndexOfLetter('123123', 'z'),
  // })
  // console.log('---');
  // !?!?!??!?!
}
console.groupEnd();
console.log();

console.group("19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje");
{
    function indexesOfLetterA(str) {
        const indexes = [];
      
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
        indexes.push(i);
      }
      }
    return indexes;
    } 
  console.log('---');
  console.log({
  'labas': indexesOfLetterA('labas'),
  'kempės': indexesOfLetterA('kempės'),
  '123123': indexesOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje");
{

  const letterEVariations = 'eęė';

  const additionalLTChecks = {
    a: 'aą',
    i: 'iį',
    e: letterEVariations,
    ę: letterEVariations,
    ė: letterEVariations,
    u: 'uūų'
  }

  function indexesOfLetter(str, searchLetter) {
    const search = additionalLTChecks[searchLetter] ?? searchLetter;
    const letterRegex = new RegExp(search);
    const foundResults = str.search(letterRegex);
    console.log(foundResults);
    // code ...
  }
  // console.log('---');
  // console.log({
  //   'labas, a': indexesOfLetter('labas', 'a'),
  //   'kempės, m': indexesOfLetter('kempės', 'm'),
  //   '123123, 2': indexesOfLetter('123123', '2'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();
