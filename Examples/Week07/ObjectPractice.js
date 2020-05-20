// #1
const bicycle = {
    frontGear: 3,
    rearGear: 4,
    frontBrake: false,
    rearBrake: false
};

// #2
function getFrontGear() {
    return bicycle.frontGear;
}

function getRearGear() {
    return bicycle.rearGear;
}

// #3
function setFrontBrake(isOn) {
    bicycle.frontBrake = true;
}

// #4
function flyHome() {
    bee.hasNectar = true;
    return bee.fly();
}

// #5
flower.type = "rose";
flower.perennial = true;

// #6
bee.dance = function() {
    return "Flying in a figure eight.";
};

// #7
delete bee.type;

// #8
function listKeys() {
    let keyString = "";
    for (let key in flower) {
        keyString += key + ", ";
    }
    return keyString;
}