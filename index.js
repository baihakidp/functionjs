// review
function greeting(nama) {
  return `hallo ${nama}`;
}
const ketemuAja = greeting("Aja");
const ketemuAli = greeting("Ali");
console.log(ketemuAli);

function kurang(param1, param2) {
  return param1 - param2;
}
const kurang1 = kurang(10, 12);
const kurang2 = kurang(1, 5);
const kurang3 = kurang(5, 0);
const kurang4 = kurang(100, 5);
console.log(kurang4);

function checkKata(param1) {
  const kata = param1.length;
  return kata;
}
const checkAh = checkKata("Wadidaw Wadigidaw");
console.log(checkAh);

function tipeData(param1) {
  const tipeNya = typeof param1;
  return tipeNya;
}
const tipeNyu = tipeData(23);
const tipeNye = tipeData(`azek`);
console.log(tipeNye);

function average(a, b, c, d, e, f, g, h, i, j) {
  const rataRata = (a + b + c + d + e + f + g + h + i + j) / arguments.length;
  return rataRata;
}
const kelasBodo = average(10, 20, 30, 10, 40, 25, 66, 11, 21, 20);
const kelasPinter = average(100, 100, 100, 100, 100, 100, 100, 100, 100, 0);
console.log(kelasPinter);

const score = 40;
if (score > 70) {
  console.log(`lulus`);
} else if (score > 50 && score <= 70) {
  console.log("remedi");
} else {
  console.log("gapernah belajar");
}

const smart = true;
const pretty = false;
const faithful = false;

if (smart == true && faithful == false) {
  console.log(`g`);
} else {
  console.log(`g`);
}

const tahun = 1945;
if (tahun < 1945) {
  console.log(`belum merdeka`);
} else if (tahun >= 1945) {
  console.log(`sudah merdeka`);
} else {
  console.log(`gatau`);
}

const nilai = 60;
if (nilai > 80) {
  console.log(`excellent`);
} else if (nilai >= 60 && nilai <= 80) {
  console.log(`gud job`);
} else if (nilai >= 50 && nilai < 60) {
  console.log(`remed`);
} else {
  console.log(`babay`);
}

// function fizzbuzz

// nomornya habis dibagi 3 keluarin fizz habis dibagi 5 buzz habis dibagi 3 dan 5 fizzbuzz
function fizzbuzz(number) {
  let result;
  if (number % 3 == 0 && number % 5 == 0) {
    result = `fizzbuzz`;
  } else if (number % 3 == 0) {
    result = `fizz`;
  } else if (number % 5 === 0) {
    result = `buzz`;
  } else {
    result = number;
  }
  return result;
}
const cobain1 = fizzbuzz(15);
console.log(cobain1);
