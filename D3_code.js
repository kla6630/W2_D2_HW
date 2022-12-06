/*Esercizio 1*/
const NumbersArray = [2000, 50000];
const m = Math.max(...NumbersArray);

console.log(m);

/*Esercizio 2 */
const num = 5000;

if (num != 5) {
  console.log("not equal");
}

/*Esercizio 3 */

const num2 = 5001;
const resto = num2 % 5;

if (resto === 0) {
  console.log("E' divisibile per 5");
} else {
  console.log("Non è divisibile per 5");
}

/*Esercizio 4 */

const num3 = 16;
const num4 = 8;

const numTGT = 8;

const somma = num3 + num4;
const sottrazione = num3 - num4;

if (somma === numTGT) {
  console.log("La loro somma è " + numTGT);
}
if (sottrazione === numTGT) {
  console.log("La loro differenza è " + numTGT);
}
if (num3 === numTGT) {
  console.log("Il primo numero corrisponde a " + numTGT);
}
if (num4 === numTGT) {
  console.log("Il secondo numero corrisponde a " + numTGT);
}

/* ESERCIZIO 5 */

const ProductsPriceArray = [10, 30, 20, 50];
let sum = 0;

for (let i = 0; i < ProductsPriceArray.length; i++) {
  sum += ProductsPriceArray[i];
}

console.log(sum);

const TotalShoppingCart = sum;
const ShippingPrice = 10;
const TotalplusShipping = TotalShoppingCart + ShippingPrice;

if (TotalShoppingCart >= 50) {
  console.log(
    "Complimenti hai diritto alla spedizione gratuita e devi pagare solo! " +
      TotalShoppingCart +
      " €"
  );
}
if (TotalShoppingCart <= 50) {
  console.log(
    "Oh no, non hai diritto alla spedizione gratuita perciò pagherai " +
      TotalplusShipping +
      " €"
  );
}

/* ESERCIZIO 6 */

const ProductsPriceArray02 = [10, 30, 20, 50];
let sum = 0;

for (let i = 0; i < ProductsPriceArray02.length; i++) {
  sum += ProductsPriceArray02[i];
}

console.log(sum);

const TotalShoppingCart = sum + (sum * 0, 2);
const ShippingPrice = 10;
const TotalplusShipping = TotalShoppingCart + ShippingPrice;

if (TotalShoppingCart >= 50) {
  console.log(
    "Complimenti hai diritto alla spedizione gratuita e devi pagare solo! " +
      TotalShoppingCart +
      " €"
  );
}
if (TotalShoppingCart <= 50) {
  console.log(
    "Oh no, non hai diritto alla spedizione gratuita perciò pagherai " +
      TotalplusShipping +
      " €"
  );
}

/*ESERCIZIO 7 */

/*Esercizio 07  vedi test.js */

/* const ProductsPriceArray02 = [10, 30, 20, 50];
let sum = 0;

for (let i = 0; i < ProductsPriceArray02.length; i++) {
  sum += ProductsPriceArray02[i];
}

console.log(sum);

const TotalShoppingCart02 = (sum - (sum * 0.2));
const ShippingPrice02 = 10;
const TotalplusShipping02 = TotalShoppingCart02 + ShippingPrice02;

if (TotalShoppingCart02 >= 50) {
  console.log(
    "Complimenti hai diritto alla spedizione gratuita e devi pagare solo! " +
      TotalShoppingCart02 +
      " €"
  );
}
if (TotalShoppingCart02 <= 50) {
  console.log(
    "Oh no, non hai diritto alla spedizione gratuita perciò pagherai " +
      TotalplusShipping02 +
      " €"
  );
}
*/

/*ESERCIZIO 8 */

const Algorithm8 = 3;

if (typeof Algorithm8 === "number") {
  console.log("Il valore inserito è un numero");
} else if (typeof Algorithm8 !== "number") {
  console.log("Il valore inserito non è un numero");
}

/*ESERCIZIO 9 */

const number09 = 4447;

if (number09 === 0) {
  console.log("Il numero inserito è 0");
} else if (number09 % 2 === 0) {
  console.log("Il numero inserito è pari");
} else {
  console.log("Il numero inserito è dispari");
}

/*ESERCIZIO 10 */

let val = 4;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
}

/*ESERCIZIO 11 */

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Cagliari";
console.log(me);

/*ESERCIZIO 12 */

delete me.lastName;
console.log(me);

/*ESERCIZIO 13 */

delete me.skills[2];
console.log(me);

/*ESERCIZIO 14 */

var array01 = [];
console.log(array01);

array01.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(array01);

/*ESERCIZIO 15 */

array01[9] = 100;

console.log(array01);
