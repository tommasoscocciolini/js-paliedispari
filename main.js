function palindromo (parola){
  var parola = String(prompt("Inserisci una parola"));
  // var parolaSplit = parola.split("");
  // var parolaRev = parolaSplit.reverse();
  // console.log(parola);
  // var inverso = parolaRev.join("");
  // console.log(inverso);
  // console.log(parola);
  if (isNaN(parola)) {
    var inverso = parola.split("").reverse().join("");
    if (parola==inverso) {
      return alert('La parola inserita è un Palindromo');
    } else return alert('La parola inserita NON è un Palindromo');
  } else return alert("hai inserito un numero e non una parola");
}

// if (palindromo()) {
//   document.getElementById('result').innerHTML= 'La parola inserita è un Palindromo';
// } else {
//   document.getElementById('result').innerHTML= 'La parola inserita NON è un Palindromo';
// }


function pariodispari(){
  var pariodispari = String(prompt("Inserisci pari o dispari"));
  pariodispari= pariodispari.toUpperCase();
  if (pariodispari=="PARI" || pariodispari=="DISPARI") {
    console.log(pariodispari);
    var num1 = parseInt(prompt("Inserisci un numero da 1 a 5"));
    console.log(num1);
    if (num1>=1 && num1<=5) {
      var num2 = Math.round(Math.random() * (5 - 1) + 1);
      console.log(num2);
    } else alert("inserisci un numero tra 1 e 5");
    var somma= num1+num2;
    console.log(somma);
    if (somma%2==0) {
      var risultato= "PARI"
    } else var risultato= "DISPARI";
    if (risultato==pariodispari) {
      return alert("HAI VINTO")
    } else alert("HAI PERSO")
  } else {
    alert("inserisci 'pari' o 'dispari'");
  }
}



// pariodispari();
