/* Functions used by WebApp1_RomanNumeralCalc.html *
 * Written by Brian Bird for CS133JS, 5/15/2020    */

function toSpanish(index) {
    let translate = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];
    let translation = "";
    if (index < 0) {
        translation = "un número negativo";
    } else {
        translation = translate[index];
    }
    return translation;
}