// Solution to an exercise in the final review lecture notes for CS 133JS
// By Brian Bird, 12/5/2024

const loft = {          // parent object
  water: 100, 
  food: 100,
  whoThere: function() {
    return this.pigeon.name;
  },
  pigeon: {              // child object
      name: "Agatha", 
      type: "Egyptian Swift", 
      speed: 50,
      fly: function() {
           return this.name + " is flying at " + this.speed + "MPH with " + loft.water + "%.";
      }
  }
}