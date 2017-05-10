/*
   New Perspectives on HTML, XHTML, and DHTML
   Tutorial 11
   Case Problem 1

   Function List:

   resetQuiz()
      Used to reset the quiz by setting the timer value back to 0

   showQuiz()
      Used to make the quiz questions visible

   hideQuiz()
      Used to hide the quiz questions
*/

function resetQuiz() {
   document.quiz.quizclock.value = 0;
   for (i=0; i<document.quiz.elements.length; i++) document.quiz.elements[i].disabled=false;
   document.quiz.stop.disabled = true;
}

function showQuiz() {
   document.getElementById("quiztable").style.visibility="visible";
   document.quiz.start.disabled = true;
   document.quiz.stop.disabled = false;
}

function hideQuiz() {
   document.getElementById("quiztable").style.visibility="hidden";
}

function gradeQuiz() {
   correct=0;
   if (document.quiz.q1[1].checked) correct++;
   if (document.quiz.q2[3].checked) correct++;
   if (document.quiz.q3[0].checked) correct++;
   if (document.quiz.q4[3].checked) correct++;
   if (document.quiz.q5[2].checked) correct++;
   
   document.getElementById("cor1").style.backgroundColor="yellow";
   document.getElementById("cor2").style.backgroundColor="yellow";
   document.getElementById("cor3").style.backgroundColor="yellow";
   document.getElementById("cor4").style.backgroundColor="yellow";
   document.getElementById("cor5").style.backgroundColor="yellow";

   for (i=0; i<document.quiz.elements.length; i++) document.quiz.elements[i].disabled=true;

   return correct;
}
