/* Written by Brian Bird, 4/29/22
   Goes with the lecture notes on problem solving for CS133JS
*/
'use strict'

let repeat = "";
let total = 0;
do {
    // 1. Read the price
    let price = parseFloat(prompt("Enter the price"));
    // 2. If the price is per pound, calculate it
    let perPound = prompt("Is the price per pound? (yes/no)");
    if (perPound === "yes") {
        let weight = parseFloat(prompt("Enter the weight"));
        price *= weight;
    }
    // 3. If there is a coupon, deduct the discount
    let coupon = prompt("Do you have a coupon? (yes/no)");
    if (coupon === "yes") {
        let discount = parseFloat(prompt("How many dollrs is the discount?"));
        price -= discount;
    }
    // 4. Add the price to the total
    total += price;
    // 5. Repeat for each item
    repeat = prompt("Do you want to add nother item? (yes/no)");
} while (repeat === "yes");
alert("Total: " + total)