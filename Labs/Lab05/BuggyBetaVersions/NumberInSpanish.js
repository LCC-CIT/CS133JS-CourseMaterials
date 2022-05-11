/* Functions used by WebApp1_RomanNumeralCalc.html *
 * Written by Brian Bird for CS133JS, 5/15/2020    *
 * Bugs added by Brian Bird 5/10/2022              */

function toSpanish(index) {
    let translate = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];
    if (index < 1) {
        translation = "un número negativo";
    } else {
        translation = translate[index];
    }
    return translation;
}