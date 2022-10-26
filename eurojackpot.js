document.getElementById("demo").onclick = function () {
  losowanie();
};

function losowanie() {

const set1 = new Set();
const set2 = new Set();

do {
  set1.add(Math.floor(Math.random(1) * 50)+1);
}
while (set1.size <=4);

console.log(set1);

do {
set2.add(Math.floor(Math.random(1) *12)+1);
}
while (set2.size <=1);
console.log(set2);

let zbior = Array.from(set1);
let zbior2 = Array.from(set2);

let segregation1 = zbior.sort(function (a,b){
  return a-b;
})
let segregation2 = zbior2.sort(function (a,b){
  return a-b;
})
console.log(`Wylosowano ${zbior.length} cyfr z 50: `);
console.log(zbior);
console.log(`Oraz ${zbior2.length} cyfr z 12: `)
console.log(zbior2);

document.getElementById("p_wynik").innerHTML =
  "wylosowano 5 cyfr z 50: " +
  "<br />" +
  "<br />" +
    zbior[0] +
    "<br />" +
    zbior[1] +
    "<br />" +
    zbior[2] +
    "<br />" +
    zbior[3] +
    "<br />" +
    zbior[4] ;

document.getElementById("p_wynik2").innerHTML =
    "oraz 2 cyfry z 12: " + 
    "<br />" +
    "<br />" +
    zbior2[0] +
    "<br />" +
    zbior2[1] ;


};