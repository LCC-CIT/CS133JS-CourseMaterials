// Target heart rate range for exercise based on age
// By Brian Bird, 6/3/2020

let age = prompt("Enter your age");
let maxHeartRate = 220 - age; // 220 is the number used for estimating maximum heart rate
let activityLevel = prompt("Do you want to  do moderate or vigorous exercise? (enter m or v)");
let lowerHeartRate = 0,
    upperHeartRate = 0;

if (activityLevel == "m") {
    const MODERATE_INTENSITY_MIN = 64; // percentage of maximum heart rate
    const MODERATE_INTENSITY_MAX = 76;
    lowerHeartRate = maxHeartRate * MODERATE_INTENSITY_MIN * 0.01;
    upperHeartRate = maxHeartRate * MODERATE_INTENSITY_MAX * 0.01;
} else {
    const VIGOROUS_INTENSITY_MIN = 77; // percentage of maximum heart rate
    const VIGOROUS_INTENSITY_MAX = 93;
    lowerHeartRate = maxHeartRate * VIGOROUS_INTENSITY_MIN * 0.01;
    upperHeartRate = maxHeartRate * VIGOROUS_INTENSITY_MAX * 0.01;
}

console.log("Your heart rate should be between: " + lowerHeartRate.toFixed(0) +
    " and " + upperHeartRate.toFixed(0) + " BPM.")

// Source: https://www.cdc.gov/physicalactivity/basics/measuring/heartrate.htm