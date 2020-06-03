function calcCircleStuff(selection, r) {
    let result = 0;
    if (selection == 1) {
        let circumference = 2 * 3.141 * r; // a local variable
        result = circumference;
    } else if (selection == 2) {
        let area = 3.141 * r * r; // another local variable
        result = area;
    } else {
       result = -1;  // -1 means wrong selection
    }
    return result;
}​

let calculation = 0;
let radius = 0;

calculation = prompt("Do you want to find 1) the circumference, or 2) the area of a circle? (Enter 1 or 2)");
radius = prompt("Enter the radius of the circle.");
console.log(calcCircleStuff(calculation, radius));


// the better way!
function calcArea(radius) {
        let circumference = 2 * 3.141 * radius; // a local variable
        return circumference;
}​