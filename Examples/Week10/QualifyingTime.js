// Original Code
/*
const QUALIFYING_TIME = 11.15;
// Array of runner objects with name and time properties
let runners = [ {name:"Emily", time:10.35}, {name:"Hannah", time:12.92}, {name:"Madison", time:9.87}, {name:"Ashley", time:11.16}, {name:"Sarah", time:12.01}, {name:"Alexis", time:11.15}];  

// Find the qualifying runners and display them on the console
for(let runner of runners) {
  if (runner.time <= QUALIFYING_TIME) {
     console.log(runner.name);
  }
} */

/* Exercises:
    1. Put the for loop into a function.
    2. Put the array and function into an object.
    3. Does it make sense for the const to be global?
    4. Write another function to find the runner with the fastest time.
*/

// 1. Put the for loop into a function.
function findQualifiers(runnersArray) {
    let runners = ""
    for (let runner of runnersArray) {
        if (runner.time <= QUALIFYING_TIME) {
            runners += runner.name + ", ";
        }
        return runners;
    }
}

// 2. Put the array and function into an object.
const olympicTrials = {
    runners: [ {name:"Emily", time:10.35}, {name:"Hannah", time:12.92}, {name:"Madison", time:9.87}, {name:"Ashley", time:11.16}, {name:"Sarah", time:12.01}, {name:"Alexis", time:11.15}],
    findQualifiers: function() {
        QUALIFYING_TIME = 11.15;
        let qualifiers = ""
        for (let runner of this.runners) {
            if (runner.time <= QUALIFYING_TIME) {
                qualifiers += runner.name + ", ";
            }
        }
        return qualifiers;
    },
    findFastest: function () {
        QUALIFYING_TIME = 11.15;
        let fastestTime = 100;
        let fastestName = "";
        for (let runner of this.runners) {
            if (runner.time < fastestTime) {
                fastestTime = runner.time;
                fastestName= runner.name;
            }
        }
        return fastestName;
    }
}

console.log("Qualifiers:")
console.log(olympicTrials.findQualifiers());
console.log("Fastest:")
console.log(olympicTrials.findFastest());


// 3. Does it make sense for the const to be global?  
// No, I put it in the function

// 4. Write another function to find the runner with the fastest time.
// It's in the object.