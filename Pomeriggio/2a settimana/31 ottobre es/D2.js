/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

var num1 = 20;
var num2 = 8;

if (num1 > num2) {console.log("num1 è maggiore di num2")}
else {console.log("num1 è minore di num2")};



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

var num3 = 4;
if (num3 !== 5) {console.log("not equal")};



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var num4 = 40;
if (num4 % 5 === 0) {console.log("divisibile per 5")};




/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

var num5 = 1;
var num6 = 9;

if (num5 === 8||num6 === 8) {console.log("Il valore di uno dei due numeri è 8")}
else if (num5 + num6 === 8) {console.log("La somma dei due valori è 8")}
else if (num5 - num6 === 8 || num6 - num5 === 8) {console.log("La sottrazione dei due valori è 8")};



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var totalShoppingCart = 100;
var scontoBlackFriday = totalShoppingCart * 0.80
if (totalShoppingCart >= 50) {console.log(scontoBlackFriday + " euro")}
else {console.log(scontoBlackFriday + 10 + " euro")}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

var num7 = 2000
var num8 = 500
var num9 = 32

if (num7 >= num8 && num7 >= num9) {
  if (num8 >=num9) {console.log(num7, num8, num9)}
  else {console.log(num7, num9, num8)}
}
else if (num8 >= num7 && num8 >= num9) {
  if (num7 >=num9) {console.log(num8, num7, num9)}
  else {console.log(num8, num9, num7)}
}
else if (num9 >= num7 && num9 >= num8){
  if (num7 >=num8) {console.log(num9, num7, num8)}
  else {console.log(num9, num8, num7)}}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

var num10 = 24
console.log(typeof num10)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var num11 = 31
if (num11 % 2 === 0) {console.log("Il numero è pari")}
else {console.log("Il numero è dispari")}

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

let val = 12;
if (val < 10 && val > 5) {console.log("Meno di 10")} 
else if (val < 5) {console.log("Meno di 5")} 
else {console.log("Uguale a 10 o maggiore")}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array =[];
array.push(1, 2, 3 ,4, 5, 6, 7, 8, 9, 10)
console.log(array)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.pop()
array.push(100)
console.log(array)
