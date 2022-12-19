/* 1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
  - name
  - surname
  - age
  - height
  - weight
  - sex
2. Panaudojant array.forEach:
  - Atspausdinti kiekvieną elementą
  - Atspausdinti kiekvieno elemento pilną vardą
  - Atspausdinti kiekvieno elemento kūno masės indeksą
3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
  - kurių vardas ilgesnis nei 6 simboliai
  - kurių svoris didesnis nei 80kg
  - kurie aukštesni nei 185cm
4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
  - ūgius
  - svorius
  - ūgius, svorius ir amžius : [{height, weight, age}, ...]
  - KMI indeksus
  - KMI indeksus ir amžius
5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
  - svorių vidurkį
  - ūgio vidurkį
------------------------------------ 2 Dalis ------------------------------------ 
0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
    Person klasėje:    
    - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
    - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg 
2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5
3. Atrinkti vaikus, su antsvoriu (KMI > 30)
4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]*/

/*  1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
 - name
  - surname
  - age
  - height
  - weight
  - sex */

const people = [
    {
      name: "Dalius",
      surname: "Valius",
      age: 35,
      height: 180,
      weight: 75,
      sex: "male"
    },
    {
      name: "Dalytė",
      surname: "Valytė",
      age: 7,
      height: 100,
      weight: 60,
      sex: "female"
    },
    {
      name: "Serbentautas",
      surname: "Bordiūras",
      age: 25,
      height: 185,
      weight: 85,
      sex: "male"
    },
    {
      name: "Alicija",
      surname: "Kabaretas",
      age: 70,
      height: 150,
      weight: 70,
      sex: "female"
    },
    {
      name: "Skirvydas",
      surname: "Petraitis",
      age: 40,
      height: 190,
      weight: 90,
      sex: "male"
    },
    {
      name: "Alisa",
      surname: "Stebuklaitė",
      age: 17,
      height: 175,
      weight: 75,
      sex: "female"
    },
    {
      name: "Darius",
      surname: "Girėnas",
      age: 28,
      height: 162,
      weight: 48,
      sex: "male"
    },
    {
      name: "Morta",
      surname: "Karalaitė",
      age: 31,
      height: 165,
      weight: 55,
      sex: "female"
    }
  ];
  
/*2. Panaudojant array.forEach:
  - Atspausdinti kiekvieną elementą
  - Atspausdinti kiekvieno elemento pilną vardą
  - Atspausdinti kiekvieno elemento kūno masės indeksą */
  console.log('2.Panaudojant array.forEach:..')
  people.forEach(person => {
    console.log(person);
    console.log(`${person.name} ${person.surname}`);
    console.log(calculateBMI(person.height, person.weight));
  });
  
  // Funkcija paskaičiuoti BMI
  function calculateBMI(height, weight) {
    return weight / (height / 100) ** 2;
  }
  
  /* 3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
  - kurių vardas ilgesnis nei 6 simboliai
  - kurių svoris didesnis nei 80kg
  - kurie aukštesni nei 185cm */
  console.log('3.Panaudojant array.filter')

  console.log('Vardai ilgesni nei 6 simboliai:')
    const longNamePeople = people.filter(person => person.name.length > 6);
  console.log(longNamePeople);
  
  console.log('Sveriantys < 80 kg:')
    const heavyPeople = people.filter(person => person.weight > 80);
  console.log(heavyPeople);

  console.log('Aukstesni nei 185cm:')
    const tallPeople = people.filter(person => person.height > 185);
  console.log(tallPeople);
  
/* 4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
  - ūgius
  - svorius
  - ūgius, svorius ir amžius : [{height, weight, age}, ...]
  - KMI indeksus
  - KMI indeksus ir amžius */
  console.log('4. array.map:')

  console.log('Ugiai:')
  const heights = people.map(person => person.height);
  console.log(heights);
  
  console.log('Svoris:')
  const weights = people.map(person => person.weight);
  console.log(weights);
  
  console.log('{height, weight, age}')
  const heightWeightAge = people.map(person => ({
  height: person.height,
  weight: person.weight,
  age: person.age
  }));
  console.table(heightWeightAge);
  
  console.log('BMI')
  const BMIs = people.map(person => calculateBMI(person.height, person.weight));
  console.log(BMIs);
  
  console.log('BMI and age')
  const BMIAndAge = people.map(person => ({
  BMI: calculateBMI(person.height, person.weight),
  age: person.age
  }));
  console.table(BMIAndAge);

/* 5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
  - svorių vidurkį
  - ūgio vidurkį
  */
 console.log('array.reduce:')

 console.log('Average weight:')
const averageWeight = people.reduce((total, person) => total + person.weight, 0) / people.length;
console.log(averageWeight);

console.log('Average height:')
const averageHeight = people.reduce((total, person) => total + person.height, 0) / people.length;
console.log(averageHeight);

//  ------------------------------------ 2 Dalis ------------------------------------ 
// 0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:

class Person {
    constructor(name, surname, age, height, weight, sex) {
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.height = height;
      this.weight = weight;
      this.sex = sex;
    }
  
    // sukurti vidinį metodą: getBMI();
    getBMI() {
      return this.weight / (this.height / 100) ** 2;
    }
  
    // sukurti vidinį metodą: toString();
    // atspausdina žmogų su esamom savybėm;

    toString() {
      return `${this.name} ${this.surname}, age: ${this.age}, height: ${this.height}, weight: ${this.weight}, sex: ${this.sex}, BMI: ${this.getBMI()}`;
    }
  }
  
  const peoplePrototypes = people.map(person => new Person(person.name, person.surname, person.age, person.height, person.weight, person.sex));
  
  // 1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg 
  console.log('Moterys jaunesnės nei 20 metų ir svoris:')
  
  const youngWomen = peoplePrototypes.filter(person => person.sex === "female" && person.age < 20 && person.weight > 70);
  console.log(youngWomen);
  
  // 2.  Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5
  console.log('Vyrai kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5:')

  const oldMen = peoplePrototypes.filter(person => person.sex === "male" && person.age > 25 && person.getBMI() < 18.5);
  console.log(oldMen);
  
  // 3. Atrinkti vaikus, su antsvoriu (KMI > 30)
  console.log('Vaikai, su antsvoriu (KMI > 30):')

  const obeseChildren = peoplePrototypes.filter(person => person.age < 18 && person.getBMI() > 30);
  console.log(obeseChildren);
  
  // 4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
  console.log('Pensininkai, su antsvoriu (KMI > 30):')

  const obesePensioners = peoplePrototypes.filter(person => person.age >= 65 && person.getBMI() > 30);
  console.log(obesePensioners);
  
  // 5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]
  console.log('Visi, kieno KMI nepatenka į rėžius [18.5; 25]:')

  const notHealthyBMI = peoplePrototypes.filter(person => person.getBMI() < 18.5 || person.getBMI() > 25);
  console.log(notHealthyBMI);
  