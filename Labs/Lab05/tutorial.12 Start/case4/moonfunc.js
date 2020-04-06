/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 12
   Case Problem 4

   Filename: moonfunc.js

   Function List:
   calcMPhase(cDay)
      Returns the phase number (from 0 to 15) of the Moon for the date 
      stored in cDay

   calcMAge(cDay)
      Returns the age of the Moon for the date stored in cDay

   calcMDist(cDay)
      Returns the distance in Earth radii between the Earth and the Moon on the date 
      stored in cDay

   calcMDec(cDay)
      Returns the declination (latitude on the nighttime sky) of the Moon
      on the date stored in cDay

   calcMRA(cDay)
      Returns the right ascension (longitude on the nighttime sky) of
      the Moon on the date stored in cDay

   CalcMZodiac(cDay)
      Returns the name of the constellation or Zodiac that the Moon resides
      in on the date stored in cDay

   roundValue(value, n)
      Rounds value to 'n' digits

   normalize(v)
      Normalizes the value in v

*/

function calcMPhase(cDay) {
   var AG = calcMAge(cDay);

   if (AG < 0.759) phase=0;
   else if (AG < 2.759) phase=1;
   else if (AG <  4.759) phase=2;
   else if (AG < 5.759) phase=3;
   else if (AG <  7.759) phase=4;
   else if (AG < 9.759) phase=5;
   else if (AG < 10.759) phase=6;
   else if (AG < 13.759) phase=7;
   else if (AG < 15.759) phase=8;
   else if (AG < 17.759) phase=9;
   else if (AG < 18.759) phase=10;
   else if (AG < 20.759) phase=11;
   else if (AG < 22.759) phase=12;
   else if (AG < 23.759) phase=13;
   else if (AG < 24.759) phase=14;
   else if (AG < 28.289) phase=15;
   else phase=0;

   return phase;
}

function calcMAge(cDay) {

   var thisYear=cDay.getFullYear();
   var thisMonth=cDay.getMonth()+1;
   var thisDay=cDay.getDate();

   var YY = thisYear - Math.floor((12 - thisMonth)/10);
   var MM = thisMonth+9;
   if (MM >= 12) MM=MM-12;     
    
   var K1 = Math.floor( 365.25 * ( YY + 4712 ) );
   var K2 = Math.floor( 30.6 * MM + 0.5 );
   var K3 = Math.floor( Math.floor( ( YY / 100 ) + 49 ) * 0.75 ) - 38;
    
   var JD = K1 + K2 + thisDay + 59;
   if (JD > 2299160) JD=JD-K3;

   var IP = normalize((JD-2451550.1)/29.530588853);
   var AG = IP*29.53; // the moon's age in days   

   return roundValue(AG, 3);
}

function calcMDist(cDay) {

   var thisYear=cDay.getFullYear();
   var thisMonth=cDay.getMonth()+1;
   var thisDay=cDay.getDate();

   var YY = thisYear - Math.floor((12 - thisMonth)/10);
   var MM = thisMonth+9;
   if (MM >= 12) MM=MM-12;     
    
   var K1 = Math.floor( 365.25 * ( YY + 4712 ) );
   var K2 = Math.floor( 30.6 * MM + 0.5 );
   var K3 = Math.floor( Math.floor( ( YY / 100 ) + 49 ) * 0.75 ) - 38;
    
   var JD = K1 + K2 + thisDay + 59;
   if (JD > 2299160) JD=JD-K3;

   var IP = normalize((JD-2451550.1)/29.530588853);
   DP = 2*Math.PI*normalize( (JD - 2451562.2 ) / 27.55454988 );
   DI = 60.4 - 3.3*Math.cos( DP ) - 0.6*Math.cos( 2*IP - DP ) - 0.5*Math.cos( 2*IP );

   return roundValue(DI,3);
}

function calcMDec(cDay) {
   var thisYear=cDay.getFullYear();
   var thisMonth=cDay.getMonth()+1;
   var thisDay=cDay.getDate();

   var YY = thisYear - Math.floor((12 - thisMonth)/10);
   var MM = thisMonth+9;
   if (MM >= 12) MM=MM-12;     
    
   var K1 = Math.floor( 365.25 * ( YY + 4712 ) );
   var K2 = Math.floor( 30.6 * MM + 0.5 );
   var K3 = Math.floor( Math.floor( ( YY / 100 ) + 49 ) * 0.75 ) - 38;
    
   var JD = K1 + K2 + thisDay + 59;
   if (JD > 2299160) JD=JD-K3;

   NP = 2*Math.PI*normalize( ( JD - 2451565.2 ) / 27.212220817 );
   DEC = 5.1*Math.sin( NP );

   return roundValue(DEC,3);
}

function calcMRA(cDay) {

   var thisYear=cDay.getFullYear();
   var thisMonth=cDay.getMonth()+1;
   var thisDay=cDay.getDate();

   var YY = thisYear - Math.floor((12 - thisMonth)/10);
   var MM = thisMonth+9;
   if (MM >= 12) MM=MM-12;     
    
   var K1 = Math.floor( 365.25 * ( YY + 4712 ) );
   var K2 = Math.floor( 30.6 * MM + 0.5 );
   var K3 = Math.floor( Math.floor( ( YY / 100 ) + 49 ) * 0.75 ) - 38;
    
   var JD = K1 + K2 + thisDay + 59;
   if (JD > 2299160) JD=JD-K3;
   var IP = normalize((JD-2451550.1)/29.530588853);
   DP = 2*Math.PI*normalize( ( JD - 2451562.2 ) / 27.55454988 );

   RP = normalize( ( JD - 2451555.8 ) / 27.321582241 );
   RA = 360*RP + 6.3*Math.sin( DP ) + 1.3*Math.sin( 2*IP - DP ) + 0.7*Math.sin( 2*IP );
   return roundValue(RA,3);
}

function calcMZodiac(cDay) {
   var LO = calcMRA(cDay);
   if (LO <  33.18) Zodiac = "Pisces";
   else if (LO <  51.16) Zodiac = "Aries";
   else if (LO <  93.44) Zodiac = "Taurus";
   else if (LO < 119.48) Zodiac = "Gemini";
   else if (LO < 135.30) Zodiac = "Cancer";
   else if (LO < 173.34) Zodiac = "Leo";
   else if (LO < 224.17) Zodiac = "Virgo";
   else if (LO < 242.57) Zodiac = "Libra";
   else if (LO < 271.26) Zodiac = "Scorpio";
   else if (LO < 302.49) Zodiac = "Sagittarius";
   else if (LO < 311.72) Zodiac = "Capricorn";
   else if (LO < 348.58) Zodiac = "Aquarius";
   else Zodiac = "Pisces";
  
   return Zodiac;
}

function roundValue(value, n) {
   return Math.round(Math.pow(10,n)*value)/Math.pow(10,n);
}

function normalize(v) {
   v = v - Math.floor(v);
   if (v < 0) v++;
   return v;
}
