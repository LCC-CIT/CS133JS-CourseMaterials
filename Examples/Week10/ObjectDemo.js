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