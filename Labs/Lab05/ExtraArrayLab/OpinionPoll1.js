// Global array that will hold counts of yes votes
let votes = [0, 0, 0];

/*************************************************/
/****************** Event Handler Code *********/
/*************************************************/

// addVotes is the event handler for the "Enter Votes" button.
// It adds one to the count of votes for each question that has a checked checkbox.
// Parameters: none
// Returns: nothing
/* TODO: Write the function described above. 
    The function should add 1 to the value in each element of the votes array
    for which the corrsponsding check box has been checked. Use the getVote
    function to get the value of each check box. Call updateTable at the
    end of the function.
*/

/*************************************************/
/****************** DOM Interaction Code *********/
/*************************************************/

// getVote gets the state of a check box for one question
// Parameter: qNumber - the id number of the question
// Returns: a 1 if the box is checked, 0 if not
function getVote(qNumber) {
    let isChecked = document.querySelector("#q" + qNumber).checked;
    return isChecked ? 1 : 0;
}

// updateTable updates the vote count for each question
// Parameter: questionNumber - the question ID number
// Returns: nothing
function updateTable(questionNumber) {
    let i = questionNumber - 1; // array index
    // Put the vote counts in the 3rd td on the row for this question
    let td3 = document.querySelector("#row" + questionNumber + " td:nth-of-type(3)");
    td3.innerHTML = votes[i]; // number of yes votes
}