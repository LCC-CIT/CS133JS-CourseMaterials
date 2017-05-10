/*
   New Perspectives on HTML and CSS
   Tutorial 10
   Case Problem 1

   Function List:
   showDate
      Used to return a text string containing the current date and time.
   getMap
      Used to the determine the current sky map number to display with the online planisphere

*/


function showDateTime() {
   var thisDate = new Date();
   var thisWDay=thisDate.getDay();
   var thisDay=thisDate.getDate();
   var thisMonth=thisDate.getMonth();
   var thisYear=thisDate.getFullYear();
   var mName = new Array("January", "February", "March", "April", "May", 
       "June", "July", "August", "September", "October","November", "December");
   var hours=thisDate.getHours();
   var minutes=thisDate.getMinutes();
   ampm = hours >=12 ? " pm" : " am";
   hours = hours > 12 ? hours-12 : hours;
   minutes = minutes < 10 ? "0"+minutes : minutes;
   return mName[thisMonth]+" "+thisDay+", "+thisYear + ", " + hours + ":" + minutes + ampm;
}

function getMap() {
   thisTime = new Date();
   hour = thisTime.getHours();
   month = thisTime.getMonth();
   mapNumber = (month*2+hour)%24;
   return mapNumber;
}