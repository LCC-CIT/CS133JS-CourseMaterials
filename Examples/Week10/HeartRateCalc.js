// Solution to an exercise in the final review lecture notes for CS 133JS
// By Brian Bird, 12/5/2024

let age = prompt("Enter your age");
let activityLevel = prompt("Do you want to do moderate or vigorous exercise? (m or v)");

function heartRateCalc(age, activityLevel) {
    const MAX_HEART_RATE = 220 - age; // 220 is a number for estimating max heart rate
    const heartRate = {
        lowerHeartRate: 0,
        upperHeartRate: 0
    };


    if (activityLevel == "m") {
        const MODERATE_INTENSITY_MIN = 64; // percentage of maximum heart rate
        const MODERATE_INTENSITY_MAX = 76;
        heartRate.lowerHeartRate = MAX_HEART_RATE * MODERATE_INTENSITY_MIN * 0.01;
        heartRate.upperHeartRate = MAX_HEART_RATE * MODERATE_INTENSITY_MAX * 0.01;
    } else {
        const VIGOROUS_INTENSITY_MIN = 77; // percentage of maximum heart rate
        const VIGOROUS_INTENSITY_MAX = 93;
        heartRate.lowerHeartRate = MAX_HEART_RATE * VIGOROUS_INTENSITY_MIN * 0.01;
        heartRate.upperHeartRate = MAX_HEART_RATE * VIGOROUS_INTENSITY_MAX * 0.01;
    }
    return heartRate;
}

let rate = heartRateCalc(age, activityLevel);

console.log("Your heart rate should be between: " + rate.lowerHeartRate.toFixed(0) +
    " and " + rate.upperHeartRate.toFixed(0) + " BPM.");