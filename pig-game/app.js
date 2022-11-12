// console.log('hello word');

// változó deklarálás
// let pontszam = 4;
// nem módosítható változó deklarálás
// const pi = 3.14;
// a potszám változó értékét növeltük egy-el
// pontszam = pontszam +1;

// console.log(pontszam);

// tömb, array:
// let scores = [2,3,4,5];

// az egész tömböt kiirja:
// console.log(scores);
// csak a nulladik elemet irja ki:
// console.log(scores[0]);

// változó deklarálás
let scores, roundScore, activePlayer;

// a játékosok pontszámai, mindkét játákos null ponttal indul
// értékadás : value assignment
scores = [0, 0];

// forduló alatt megszerzett pontok
roundScore = 0;

// az első játékos kezd
activePlayer = 0;

// dom manipuláció (dom: document object model = HTML kód)

// kiválsztjuk a score-0 id-vel rendelkező html elemet
// és a tartalmát beállítjuk 0-ra
document.querySelector('#score-0').textContent = 0;

// camelCase: mindenÚjSzótNagyBetűvelÍrunk // JavaScript
// PascalCase: AzElsőBetűIsNagybetű // JavaScript
// snake_case: minden_szó_között_alsóvonás_van // Python
// kebab-case: a-szavak-között-kötőjel-van  // CSS


document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

// a játék indításakor a kocka még nem látszik:
document.querySelector('.dice').style.display = 'none';

// a kokca dobás, gombra kattintás
document.querySelector('.btn-roll').addEventListener('click', function() {
  console.log('dobtunk a kockával');
});
