

// Array of runner objects with name and time properties
let runners = [{
        name: "Emily",
        time: 10.35
    }, {
        name: "Hannah",
        time: 12.92
    },
    {
        name: "Madison",
        time: 9.87
    }, {
        name: "Ashley",
        time: 11.16
    },
    {
        name: "Sarah",
        time: 12.01
    }, {
        name: "Alexis",
        time: 11.15
    }
];


// Find all the qualifying runners and return their names in a string
function findQualifiers() {
    const QUALIFYING_TIME = 11.15;
	let qualifiers = "";
    for (let runner of runners) {
        if (runner.time <= QUALIFYING_TIME) {
            qualifiers += runner.name + ", ";
        }
    }
    return qualifiers;
}

// Find the one fastest runner and return their name in a string
function findFastest() {
    let fastest = "";  // name of fastest runner
    let fastestTime = 100;
    for (let runner of runners) {
        if (fastestTime > runner.time)
        {
            fastestTime = runner.time;
            fastest = runner.name;
        }
    }
    return fastest;
}