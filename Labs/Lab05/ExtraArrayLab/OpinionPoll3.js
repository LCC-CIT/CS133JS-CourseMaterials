// Global 2D array that will hold the responses.
// In the nested arrays (inner arrays), the element at index:
//    0 holds the number of responses
//    1 holds the average of the scores
/* TODO: Declare and initialize the responses array with values of 0 in every element */

// totalResponses adds up the total number of responses.
// It is called by updateTable
// Parameters: none
// Returns: the total number of responses (one for each question answered)
/* TODO: Write this funciton.
   It should return the sum of the values in the first elements of all the inner arrays.
*/


/*************************************************/
/****************** Event Handler Code *********/
/*************************************************/

// noInput is an event handler for the "Don't know" checkbox.
// It hides the number input if the ckeckbox is checked, or unhides it if it is unchecked
// Parameter: qId - question ID
// Returns: nothing
function noInput(qId) {
    if (isDontKnow(qId) == true) {
        getNumberInputElement(qId).setAttribute("hidden", "hidden");

    } else {
        getNumberInputElement(qId).removeAttribute("hidden");
    }
}

// addResponses is an event handler for the "Submit Responses" button
// Parameters: none
// Returns: nothing
/* TODO: Write this function.
   Loop through the responses array and for each inner array
   add 1 to the count of responses for that question to the value at index 0, 
   and add the number from the numeric input elelent to the value at index 1.
   Use this statement to get the value from the numeric input:
      parseInt(getNumberInputElement(i + 1).value)
*/


/*************************************************/
/****************** DOM Interaction Code *********/
/*************************************************/

// getNumber gets a reference to the specified number input element
// Parameter: qId - question ID number
// Returns: the specified input element object.
function getNumberInputElement(qId) {
    return document.querySelector("#row" + qId + " input:first-of-type");
}

// isDontKnow gets the state of the "Don't know" checkbox for one question
// Parameter: qId - question ID number
// Returns: boolean true or false depending on the state of the checkbox
function isDontKnow(qId) {
    return document.querySelector("#q" + qId).checked;
}

// updateTable updates the vote count for one question and updates the total counts
// Parameter: questionNumber - the question ID number
// Returns: nothing
function updateTable(questionNumber) {
    let i = questionNumber - 1; // outer array index
    // Update response average for the specified question
    let td4 = document.querySelector("#row" + questionNumber + " td:nth-of-type(4)");
    if (responses[i][0] != 0) {
        td4.innerHTML = (responses[i][1] / responses[i][0]).toFixed(2); // average respoonse rounded to 2 decimal points
    }
    // Update total
    let td2 = document.querySelector("tfoot td:nth-of-type(2)");
    td2.innerHTML = totalResponses();
}