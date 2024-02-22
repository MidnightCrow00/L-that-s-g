export function parosvparatlan(szam) {
    /*Döntsük el a szam változóról, hogy páros? vagy páratlan-? Logikai értékel */
    szam = Number(szam);
    console.log("A \t"+ szam + "\tpáratlan?");
    if (!Number.isNaN(szam)) {
      if (szam % 2 === 1) {
        console.log(true);
      } else {
        console.log(false);
      }
    }
  }