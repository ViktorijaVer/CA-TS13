console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
    class Player {
        constructor(name, age, height, weight) {
            this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        }
        
        getAge() {
        return `${this.name} is age ${this.age}`;
        }
    
        getHeight() {
      return `${this.name} is ${this.height}cm`;
        }
            
        getWeight() {
      return `${this.name} weighs ${this.weight}kg`;
        }	
}
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
    class Calculator {
        add(a, b) {
          return a + b;
          }
            
        subtract(a, b) {
          return a - b;
          }
            
        multiply(a, b) {
          return a * b;
          }
            
        divide(a, b) {
          return a / b;
          }
        }
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
class Employee {
    constructor (firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = `${this.firstname} ${this.lastname}`;
        this.email = `${this.fullname.replace(' ','.').toLowerCase()}@company.com`;
    }
    }
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        compareAge(other) {
     if (!other || !(other instanceof Person)) {
          throw new Error("Invalid argument: otherPerson must be an instance of Person");
        }
    
        if (this.age > other.age) {
          return `${other.name} is younger than me.`;
        } else if (this.age < other.age) {
          return `${other.name} is older than me.`;
        } else {
          return `${other.name} is the same age as me.`;
        }
      }
    }
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
    class Rectangle {
        constructor(sideA, sideB) {
          this.sideA = sideA
          this.sideB = sideB
        }
        getArea(){return this.sideA*this.sideB}
        getPerimeter(){return (this.sideA + this.sideB) *2}
      }
      
      class Circle {
        constructor(radius) {
          this.radius = radius;
        }
      
        getArea() {
          return Math.PI * this.radius * this.radius;
        }
      
        getPerimeter() {
          return 2 * Math.PI * this.radius;
        }
      }
      let q = new Circle(4.44);
      console.log(q.getArea());
      console.log(q.getPerimeter());      
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
    class Name {
        constructor(fname, lname) {
                 this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
                 this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();
               }
             
               get fullname() {
                 return `${this.fname} ${this.lname}`;
               }
             
               get initials() {
                 return `${this.fname.charAt(0)}.${this.lname.charAt(0)}`;
               }
             }
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
    function sweetestIcecream(iceCreams) {
        const sweetnessValues = {
             Plain: 0,
             Vanilla: 5,
             ChocolateChip: 5,
             Strawberry: 10,
             Chocolate: 10,
           };
         
           let maxSweetness = 0;
           for (const iceCream of iceCreams) {
             const sweetness = sweetnessValues[iceCream.flavor] + iceCream.numSprinkles;
             if (sweetness > maxSweetness) {
               maxSweetness = sweetness;
             }
           }
         
           return maxSweetness;
   }
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
class OnesThreesNines {
    constructor(num){
        this.nines = Math.floor(num / 9)
        this.threes = Math.floor(num / 3)
        this.ones = Math.floor(num / 1)
        }
    }
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
class User {
    static userCount = 0;   
    constructor(username) {
      this.username = username;
      User.userCount += 1;
    }
    }
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
    class Book {
        constructor(title, author) {
          this.title = title;
          this.author = author;
        }
      
        getTitle() {
          return `Title: ${this.title}`;
        }
      
        getAuthor() {
          return `Author: ${this.author}`;
        }
      }
      
      const PP = new Book("Pride and Prejudice", "Jane Austen");
      const H = new Book("Hamlet", "William Shakespeare");
      const WP = new Book("War and Peace", "Leo Tolstoy");
      
      console.log(PP.title); 
      console.log(H.author); 
      console.log(WP.getTitle()); 
      console.log(PP.getAuthor());
}
console.groupEnd();
