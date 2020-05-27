// #1
// A global object that represents a bicycle
const bicycle = {
    frontGear: 3,
    rearGear: 4,
    frontBrake: false,
    rearBrake: false
};

// #2 Both functions operate on the global bicycle object

// getFrontGear returns a number that represents the front gear setting
function getFrontGear() {
    return bicycle.frontGear;
}

// getRearGear returns a number that represents the rear gear setting
function getRearGear() {
    return bicycle.rearGear;
}

// #3 This function operates on the global bicycle object
// setFrontBrake takes a boolean argument that sets the brake if it is true
function setFrontBrake(isOn) {
    bicycle.frontBrake = true;
}

// #4 This function operates on the bee object that was created in the html file.
// flyHome sets the hasNectar property to true because this is what determines the
// direction the bee will fly (toward home). Then it calls the fly method so 
// the string describing the bee's flight is returned.
function flyHome() {
    bee.hasNectar = true;
    return bee.fly();
}

// #5 This code sets properties on the flower object that was creatd in the html file.
flower.type = "rose";
flower.perennial = true;

// #6 This code defines a dance method on the bee object that was created in the html file.
bee.dance = function() {
    return "Flying in a figure eight.";
};

// #7 This code deletes the type property on the bee object.
delete bee.type;

// #8 This function returns a string containing the keys (prperty names) of
// of all the properties on the flower object.
function listKeys() {
    let keyString = "";
    for (let key in flower) {
        keyString += key + ", ";
    }
    return keyString;
}