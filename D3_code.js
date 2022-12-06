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
    "Oh noh, non hai diritto alla spedizione gratuita perciò pagherai " +
      TotalplusShipping +
      " €"
  );
}

/* ESERCIZIO 6 */

const Discount = Tot;
if (TotalShoppingCart >= 50) {
  console.log(
    "Complimenti hai diritto alla spedizione gratuita e devi pagare solo! " +
      TotalShoppingCart +
      " €"
  );
}
if (TotalShoppingCart <= 50) {
  console.log(
    "Oh noh, non hai diritto alla spedizione gratuita perciò pagherai " +
      TotalplusShipping +
      " €"
  );
}
