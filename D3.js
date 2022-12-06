/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const NumbersArray = [2000, 50000];
const m = Math.max(...NumbersArray);

console.log(m);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const num = 5000;
if (num != 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const num2 = 5000;
const resto = num2 % 5;

if (resto === 0) {
  console.log("E' divisibile per 5");
} else {
  console.log("Non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

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

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

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

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/*Esercizio 07  vedi test.js */
/*
const ProductsPriceArray02 = [10, 30, 20, 50];
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
  */
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

if (typeof Algorithm8 === "number") {
  console.log("Il valore inserito è un numero");
}

if (typeof Algorithm8 !== "number") {
  console.log("Il valore inserito non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const number09 = 4447;

if (number09 === 0) {
  console.log("Il numero inserito è 0");
} else if (number09 % 2 === 0) {
  console.log("Il numero inserito è pari");
} else {
  console.log("Il numero inserito è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 4;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
*/
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Cagliari";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2];
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

var array01 = [];
console.log(array01);

array01.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(array01);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array01[9] = 100;

console.log(array01);
