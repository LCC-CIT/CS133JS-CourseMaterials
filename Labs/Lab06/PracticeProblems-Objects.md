<h1>Practice Problems Using Objects in JavaScript</h1>

These problems are designed to give you practice using objects. 

<h2> Table of Contents</h2>

[TOC]

## Programming Problems

The solutions to all of these problems are at the bottom of the page. The best way to learn from these is  to do your best to solve the problems without looking at the solutions. When you are done you can compare your solutions to the solutions at the bottom of the page.

You can also use the solutions to these problems as examples to help you understand the coding concepts so you can solve other problems.



### Initializing and Using Object Literals

1. Create an object literal that represents a car with these properties: make, model, year, color, and a method that prints a string to the console describing the car.

2. Create an object literal that represents a person with properties for name, age, and occupation. Include a method that changes the person's occupation.

3. Create an object literal that represents a bank account with properties for: account number, balance, and account holder name. Write a method that  withdraws money from the account. The method should also check the account balance and return either:
   - An error message if there are insufficient funds in the account.
   - A success message with the new balance.

4. Create an object literal that represents a chain of restaurants with properties for restaurant name, cuisine, and names of three towns where franchises are located. Write a two methods:
   - A method that adds an additional town to the object.
   - A method that lists the towns where franchises are located.



### Using  Loops with Objects

1. Create an object literal that represents a student's class list and contains a property name for each class they are taking. Add methods that use loops to:
   -  Return a string containing the class names and grades for each class.
   - Return the average grade.

### Using Object Constructors

1. Create an object constructor for a Rectangle with properties for length, width, and a method called "area" that calculates and returns the area of the rectangle. Create two Rectangle objects and call the methods to get the area of each.
2. Create an object constructor for a Person with properties for name, age, gender, and a method called "greet" that returns a  greeting message with the person's name. Create two Person objects and call their greet methods.


### Complex (Nested) Objects

1. Create an object literal called "person" that has a "name" property and a "job"  property. The "job" property should be an object with properties "title" and "salary". Write code to print the person properties and job properties to the console.
1. Create an object constructor for a Book that has a "title" property and an  "author" property. The "author" property should be an object with  properties "name" and "birthDate". Create two Book objects and write code to print their properties to the console.

### Arrays of Objects

1. Declare an object constructor for a Person containing name and age properties. Declare an array, create five Person objects and put them in the array. Search the array for the oldest person and print their name to the console.
2. Create an array of object literals representing different books with the following properties: title, author, year. Write a function that takes in the array of books and returns an array of books published after the year 2000.
3. Create an array of objects representing different cars with the  following properties: make, model, year, color. Write a function that  takes in the array of cars and returns an array of cars sorted by year,  from newest to oldest.

## Solutions

These are solutions to the problems above. Note that for each problem, there may be more than one good solution, so if you came up with a different solution that works, it isn't wrong. But, you should compare your solution to this one and see which one is simplest and easiest to understand.

### Initializing and Using Object Literals

1. ```javascript
   const car = {
     make: "Toyota",
     model: "Camry",
     year: 2020,
     color: "Silver",
     describe: function() {
       return "This " + this.year + " " + this.make + " " + this.model + "  is " + this.color;
     } // the this keyword refers to this object.
   };
   
   console.log(car.describe()); // This 2020 Toyota Camry is Silver.
   ```
   
2. ```JavaScript
   const person = {
     name: "Jane",
     age: 30,
     occupation: "Engineer",
     changeOccupation: function(newOccupation) {
       this.occupation = newOccupation;
     }
   };
   
   // Show the initial occupation
   console.log(person.occupatoin);
   // Now change the occupation
   person.changeOccupation("Teacher");
   console.log(person.occupation); 
   
   ```
   
3. ```JavaScript
   const bankAccount = {
     accountNumber: "CU1234987650",
     balance: 5000,
     accountHolderName: "Dave Ramsey",
     
     withdraw: function(amount) {
       let message = "";
       if (amount > this.balance) {
         message = "Insufficient funds!";
       } else {
         this.balance -= amount;
         message = "New balance is " + balance;
       }
       return message;
     }
   };
   
   console.log(bankAccount.withdraw(1000)); // New balance is 4000.
   ```
   
4. ```JavaScript
   const restaurantChain = {
     name: "Royal Orchid",
     cuisine: "Thai",
     towns: ["Eugene", "Springfield", "Cottage Grove"],
     addTown: function(town) {
       this.towns.push(town);
     },
     listTowns: function() {
   	  let townList = this.towns[0]; // Initialize the list with the first town
       // Start the loop at the second town so the commas come out right
       for(let i = 1; i < this.towns.length; i++) {
         townList += ", " + this.towns[i];
       }
       return townList;
     }
   };
   
   // List of locations before adding new ones
   console.log(restaurantChain.listTowns());
   // Add new locations and list them
   restaurantChain.addTown("Portland");
   restaurantChain.addTown("Salem");
   console.log(restaurantChain.listTowns());
   ```

### Using Loops with Objects

1. ```JavaScript
  const classList = {
    math: 90,
    science: 85,
    english: 95,
    history: 88,
    gym: 92,
    getGrades() {
      let grades = "";
      for (const key in this) {
        let grade = this[key];
        // only use property values not functions
        if(typeof(grade) === "number") {
      	grades += key + "\t" + grade + "\n";
        }
      }
      return grades;
    },
    getAverageGrade() {
      let total = 0;
      let count = 0;
      const grades = Object.values(this);
      for (const grade of grades) {
        // only use property values, not functions
         if(typeof(grade) === "number") {
          total += grade;
        	count++;
        }
      }
      return count === 0 ? 0 : total / count;
    }
  };
  
  console.log(classList.getGrades());
  console.log(classList.getAverageGrade());
  ```
  
   

### Using Object Constructors

1. ```javascript
   // Define Rectangle constructor
   function Rectangle(length, width) {
     this.length = length;
     this.width = width;
   	this.calcArea = function() {
     	return this.length * this.width;
   	}
   }
   // Create two Rectangle instances
   var rectangle1 = new Rectangle(4, 5);
   var rectangle2 = new Rectangle(7, 3);
   
   // Calculate and output the area of each Rectangle
   console.log("Rectangle 1 area: " + rectangle1.calcArea()); // 20
   console.log("Rectangle 2 area: " + rectangle2.calcArea()); // 21
   
   ```
   
2. ```javascript
  // Declare a Person constructor
  function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    
    this.greet = function() {
      return "Hello, my name is " + this.name + ".";
    }
  }
  
  // Create two Person objects
  var person1 = new Person("Alice", 25, "female");
  var person2 = new Person("Bob", 30, "male");
  
  // Call their greet methods
  console.log(person1.greet()); // Output: "Hello, my name is Alice."
  console.log(person2.greet()); // Output: "Hello, my name is Bob."
  
  ```



### Complex (Nested) Objects

1. ```javascript
  // Create the person object
  let person = {
    name: "Sally Wilson",
    job: {
      title: "Software Developer",
      salary: 90000
    }
  };
  
  // Print the person properties to the console
  console.log("Person Name:", person.name);
  console.log("Person Job Title:", person.job.title);
  console.log("Person Job Salary:", person.job.salary);
  ```
  
2. ```JavaScript
   // Define the Book constructor
   function Book(title, author) {
     this.title = title;
     this.author = author;
   }
   
   // Define the Author constructor
   function Author(name, birthDate) {
     this.name = name;
     this.birthDate = birthDate;
   }
   
   // Create two Author instances
   const author1 = new Author("Agatha Christie", "September 15, 1890");
   const author2 = new Author("Ernest Hemingway", "July 21, 1899");
   
   // Create two Book instances
   const book1 = new Book("Murder on the Orient Express", author1);
   const book2 = new Book("The Old Man and the Sea", author2);
   
   // Print the properties of the books to the console
   console.log(book1.title);
   console.log(book1.author.name);
   console.log(book1.author.birthDate);
   
   console.log(book2.title);
   console.log(book2.author.name);
   console.log(book2.author.birthDate);
   ```
   

### Arrays of Objects

1. ```javascript
   // Define the Person constructor
   function Person(name, age) {
     this.name = name;
     this.age = age;
   }
   
   // Create an array of five Person objects
   let people = [
     new Person("John", 27),
     new Person("Mary", 33),
     new Person("Peter", 42),
     new Person("Emily", 18),
     new Person("David", 35)
   ];
   
   // Find the oldest person in the array
   let oldestPerson = people[0]; // Start by assuming the first person is the oldest
   
   for (let i = 1; i < people.length; i++) {
     if (people[i].age > oldestPerson.age) {
       // replace oldest person found so far with an older one
       oldestPerson = people[i];
     }
   }
   
   // Print the oldest person's name to the console
   console.log("The oldest person is", oldestPerson.name);
   
   ```

2. ```JavaScript
   const books = [
     { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
     { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997 },
     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
     { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
     { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 }
   ];
   
   function booksPublishedAfter2000(books) {
     const newBooks = [];
     for (const book of books) {
       if (book.year > 2000) {
         newBooks.push(book);
       }
     }
     return newBooks;
   }
   
   console.log(booksPublishedAfter2000(books));
   ```
   
3. ```javascript
      const cars = [
        { make: "Tesla", model: "Model S", year: 2020, color: "white" },
        { make: "Toyota", model: "Corolla", year: 2015, color: "red" },
        { make: "Ford", model: "Mustang", year: 1967, color: "blue" },
        { make: "Chevrolet", model: "Camaro", year: 1970, color: "green" }
      ];
      
      function sortCarsByYear(cars) {
        for (let i = 0; i < cars.length; i++) {
          for (let j = i + 1; j < cars.length; j++) {
            if (cars[i].year < cars[j].year) {
              const temp = cars[i];
              cars[i] = cars[j];
              cars[j] = temp;
            }
          }
        }
        return cars;
      }
      
      console.log(sortCarsByYear(cars)); 
      
      /* In this solution, nested for loops compare each car's year property to every other car's year property, swapping the position of the cars in the array if an  earlier year was found. This sorting algorithm is called "bubble sort". */
      ```

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Course Materials by [Brian Bird](https://profbird.dev), written winter 2023, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 