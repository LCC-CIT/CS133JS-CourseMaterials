/*
   New Perspectives on HTML and XHTML 5th Edition
   Tutorial 10
   Case Problem 2

   Function List:
   adsDescription
      Used to return a description for ad "n"

   adsLink
      Used to return the URL for ad "n"
*/


function adDescription(n) {
   var descrip = new Array();
   descrip[1]="[AD] Diamond Health Club - For all your Health Club Needs";
   descrip[2]="[AD] Pixal - Quality Digital Equipment and Accessories";
   descrip[3]="[AD] dHome - Quality Geodesic Domes and Homes";
   descrip[4]="[AD] Dunston Retreat Center - get away";
   descrip[5]="[AD] LanGear - Quality Network Solutions for all your Business Needs";

   return descrip[n];
}

function adLink(n) {
   var link = new Array();
   link[1]="http://www.diamondhealth.com";
   link[2]="http://www.pixalproducts.com";
   link[3]="http://www.dhome.com";
   link[4]="http://www.dunstonretreats.com";
   link[5]="http://wwww.langearproducts.com";

   return link[n];
}