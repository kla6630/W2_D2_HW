/*Esercizio 07 */

const ProductsPriceArray02 = [10, 30, 20, 50];
let sum = 0;

for (let i = 0; i < ProductsPriceArray02.length; i++) {
  sum += ProductsPriceArray02[i];
}

console.log(sum);

const TotalShoppingCart02 = sum - sum * 0.2;
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
