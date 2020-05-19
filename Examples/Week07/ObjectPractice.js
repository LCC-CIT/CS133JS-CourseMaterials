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
cdPlayer.volume = 10;
cdPlayer.album = "Peter, Paul and Mary";

// #6
cdPlayer.skip = function() {
    this.track++;
};

// #7
delete cdPlayer.power;

// #8
function listValues() {
    let valueString = "";
    for (let key in cdPlayer) {
        valueString += cdPlayer[key] + ", ";
    }
    return valueString;
}