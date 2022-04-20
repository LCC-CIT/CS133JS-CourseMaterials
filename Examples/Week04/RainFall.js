/* Written by Brian Bird Spring 2020, revised 4/19/22
   Example for CS133JS */
   `use strict`
   
// Generate a 2 column table of cumulative rainfall by day for a week.
function rainWeek(rainRate) {
    let rainfall = ""; // holds the table of rainfall
    let rainInches = 0;
    for (let day = 1; day <= 7; day++) {
        rainInches += parseFloat(rainRate);
        rainfall += day + "&emsp;&emsp;&emsp;&emsp;" + rainInches + "<br>";
    }
    return rainfall;
}

// Note: &emsp; puts in a space 4 times the width of &nbsp;