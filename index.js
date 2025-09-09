let homescoreEl = document.getElementById("homescore-el");
let guestscoreEl = document.getElementById("guestscore-el");
let inithome = 0;
let initguest = 0;

console.log(homescoreEl.textContent);
console.log(guestscoreEl.textContent);

function homep1() {
  inithome += 1;
  homescoreEl.textContent = inithome;
}

function homep2() {
  inithome += 2;
  homescoreEl.textContent = inithome;
}

function homep3() {
  inithome += 3;
  homescoreEl.textContent = inithome;
}

function guestp1() {
  initguest += 1;
  guestscoreEl.textContent = initguest;
}

function guestp2() {
  initguest += 2;
  guestscoreEl.textContent = initguest;
}

function guestp3() {
  initguest += 3;
  guestscoreEl.textContent = initguest;
}

window.homep1 = homep1;
window.homep2 = homep2;
window.homep3 = homep3;
window.guestp1 = guestp1;
window.guestp2 = guestp2;
window.guestp3 = guestp3;
