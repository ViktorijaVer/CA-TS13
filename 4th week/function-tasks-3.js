console.group("21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeFirstLetterA(str) {
for (let i = 0; i < str.length; i++) {
  console.log(str[i])
}
  }
  console.log({
  'labas': removeFirstLetterA('labas'),
  'kempiniukas': removeFirstLetterA('kempiniukas'),
  '123123': removeFirstLetterA('123123'),
  })

console.groupEnd();
console.log();

console.group("22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeLastLetterA(str) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   'labas': removeLastLetterA('labas'),
  //   'kempiniukas': removeLastLetterA('kempiniukas'),
  //   '123123': removeLastLetterA('123123'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();

console.group("23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje");
{
  function removeAllOccurencesOfLetterA(str) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   'labas': removeAllOccurencesOfLetterA('labas'),
  //   'kempiniukas': removeAllOccurencesOfLetterA('kempiniukas'),
  //   '123123': removeAllOccurencesOfLetterA('123123'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();

console.group("24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje");
{
  function removeAllOccurencesOfLetter(str, letter) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   'labas, a': removeAllOccurencesOfLetter('labas', 'a'),
  //   'kempiniukas, i': removeAllOccurencesOfLetter('kempiniukas', 'i'),
  //   '123123, 3': removeAllOccurencesOfLetter('123123', '3'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();

// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group("25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.");
{
  function filterLetters(str, lettersToRemove) {
    // code ...
  }
  // console.log('---');
  // const str = filterLetters('Brangakmienio paveikslas', ['a', 'i']);
  // console.log(str);
  // console.log('---');
}
console.groupEnd();
console.log();

console.group("26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį");
{
  function replaceSpaceWithDash(str) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   'viens du trys': replaceSpaceWithDash('viens du trys'),
  //   'as tave myliu': replaceSpaceWithDash('as tave myliu'),
  //   'Bairis seniuk': replaceSpaceWithDash('Bairis seniuk'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();

console.group("27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja");
{
  function capitalize(str) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   'viens du trys': capitalize('viens du trys'),
  //   'as tave myliu': capitalize('as tave myliu'),
  //   'Bairis seniuk': capitalize('Bairis seniuk'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();

console.group("28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'");
{
  function strReverse(str) {
    // code ...
  }
  // console.log('---');
  // strReverse('viens du trys');
  // strReverse('as tave myliu');
  // strReverse('Bairis seniuk');
  // console.log('---');
}
console.groupEnd();
console.log();


// 29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)
//  mama -> false
//  mamam -> true
//  123321 -> true
//  123456 -> false
console.group("29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)");
{
  function isPalyndrome(str) {
    let i = 0;
    let k = str.length - 1;
    while (i < k) {
      if (str[i] !== str[k]) return false;
      i++;
      k--;
    }
    return true;
  }
  // console.log('---');
  // console.log({
  //   'mama': isPalyndrome('mama'),
  //   'mamam': isPalyndrome('mamam'),
  //   '123321': isPalyndrome('123321'),
  //   '123456': isPalyndrome('123456'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();

// 30. Sukurkite funkciją, kuri taiso pastraipos klaidas:
//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
{

  function capitalizeFirstLetter(str) {
    // code ...
  }

  function splitIntoSentences(paragraph) {
    /*
      2.1 Atskirti pagal sakinio baigimo ženklus ir juos įsiminti
      2.2 Pašalinti tuščius tarpus iš kairės ir dešinės
      2.3 grąžinti objektą su dviem masyvais:
      {
        sentences: [sentence1, sentence2, ... , sentenceN],
        separator: [ '.', '?', ... , '!'],
      }
    */
  }

  function reduceEmptySpaces(str) {
    // Jūsų sugalvota logika, kaip šalinti tarpus prieš kablelį ir kelis tarpus iš eilės
  }

  // 1.
  function fixParagraph(paragraph) {
    /*
      2. Pirmiausiai suskirstome į sakinius, naudojant splitIntoSentences: 
            string  ->  {
                          sentences: [sentence1, sentence2, ... , sentenceN],
                          separator: [ '.', '?', ... , '!'],
                        }
      3. Redaguoti kiekvieną sakinį, naudojant funkciją reduceEmptySpaces
      4. Redaguoti kiekvieną sakinį, naudojant funkciją capitalizeFirstLetter
      5. Sujungti sakinius su atitinkamais sakinių skiriamaisiais/baigiamaisiais ženklais
      6. Grąžinti rezultatą.
    */
  }

  // const paragraph = '    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ';
  // const fixedParagraph = fixParagraph(paragraph);
  // console.log(paragraph);
  // console.log(fixedParagraph);
  // console.log('---');
}
console.groupEnd();
console.log();

// 31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą:
//  labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas']
console.group("31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą");
{
  function splitSentence(sentence) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   'Labas aš Jonas': splitSentence('Labas aš Jonas'),
  //   'Kėgliai yra gerai': splitSentence('Kėgliai yra gerai'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();


// 32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį
//  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
//  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];  
//  explode('home/about/13', '/');        -> ['home', 'about', '13'];  
console.group("32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį");
{
  function explode(str, separator) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   "'Man patinka sniegas', ' '": explode('Man patinka sniegas', ' '),
  //   "'home/about/13', '/'": explode('home/about/13', '/'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();
}