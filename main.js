import { parosvparatlan } from "./fuggveny.js";

//console.log(parosvparatlan(15))

/*var szam = 12;/* globális, fájl szintű változó */

//console.log(szam)

function fv1() {
  var szam;
  szam += 2; /* NaN => nem egy szám */
  console.log(szam); /* undefined => ez nem hibaüzenet, hanem egy érték */
  var szam = 24;
  var szam2 = 34; /* lokális, függvény szintű változó */
  console.log(szam2);
}

//fv1()

//console.log(szam2) /* Hibaüzenet */
//console.log(szam)

//let szam = 12;

function fv2() {
  let szam2 = 24;
  console.log(szam2); /* 24 */
  {
    let szam2 = 33; /*let hatóköre blokk szintű*/
    console.log(szam2);
  }
  console.log(szam2);
  console.log(szam);
}

//fv2();
//console.log(szam);
//console.log(szam2)

for (let index = 0; index < 3; index++) {
  console.log(index);
}

//console.log(index); /* let esetén hibaüzenet */

const NEV =
  "Béla"; /* const-tal dekralált értéke késöbb nem változtatható meg */
//nev = "Jenő"

/* ***lista*** */

let lista = ["elso", "masodik", "harmadik"];

console.log(lista);
console.log(lista[0]);
console.log("A lista hossza: " + lista.length);

lista[10] = "tizenegyedik";
console.log(lista);
console.log(lista[5]);

lista.push("következő elem"); //lista végére beteszi az adott elemet
console.log(lista);

lista.pop(); //lista végéről kiveszi az adott elemet
console.log(lista);

lista = ["a", "b", "c"];
console.log(lista);

const lista2 = [12, 11, 21]; //hibüzenet, const-hoz akarok új értéket rendelni.

lista2[0] = 1111;
lista2.push(22222);
console.log(lista2);

/* név, telefonszám, kor  */
/* Objektumok */
const SZEMELY1 = {
  nev: "Gabi",
  tel: "06-30-6757556",
  kor: 12,
};

console.log(SZEMELY1.nev);
SZEMELY1.barat = true;
console.log(SZEMELY1);

const SZEMELY2 = {
  nev: "Béla",
  tel: "06-30-6446556",
  kor: 30,
  barat: false,
};

console.log(SZEMELY2);

const SZEMELYLISTA = [
  {
    nev: "Gabi",
    tel: "06-30-6757556",
    kor: 12,
    barat: true
  },

  {
    nev: "Béla",
    tel: "06-30-6446556",
    kor: 30,
    barat: false,
  },
];
/* Irjuk ki Gabi korát: */
console.log(SZEMELYLISTA[0].kor)
