// Competencies: Functions and Arrays
/*

Instruksi
=========
Buatlah beberapa function berikut:

1. multiplication, yang menerima dua parameter berupa num1 dan num2. Function tersebut akan mengalikan dua angka dan mereturn hasil perkaliannya.
  contoh
  ------
  input: multiplication(3, 6)
  output: 18

2. powerMe, yang menerima dua parameter berupa num1 dan num2. Function tersebut akan memangkatkan num1 dengan num2 (num1 dipangkat dengan num2) dan mereturn hasil perpangkatannya.
  Boleh menggunakan sintaks Math.pow  
  contoh
  ------
  input: powerMe(2, 3)
  output: 8

3. evenSiblings, yang menerima satu parameter berupa angka, dimana setiap angka yang dimulai dari 1 menuju angka tersebut, semua angka yang genap masuk ke dalam array.
Return array tersebut.

  contoh
  ------
  input: evenSiblings(15)
  proses: dari 0 - 15 yang habis dibagi 2: 2, 4, 6, 8, 10, 12, 14 
  output: [2, 4, 6, 8, 10, 12, 14]
*/

function multiplication (num1, num2) {
  // hanya code disini
  return num1 * num2;
}
  
function powerMe(num1, num2) {
  // hanya code disini
  var hasilPerpangkatan = num1;
  for(var i = 1; i < num2; i++){
    hasilPerpangkatan = hasilPerpangkatan * num1;   
  }
  return hasilPerpangkatan 

}
  
function evenSiblings(num) {
  // hanya code disini
  var arrayGenap = [];

  for(var i = 0; i < num; i++){
   if(i % 2 === 0 ) {
       arrayGenap.push(i);    
       }    
    }
    return arrayGenap;
}

console.log(multiplication(3, 6)); {
console.log(powerMe(2,3));
console.log(evenSiblings(15));
     
}