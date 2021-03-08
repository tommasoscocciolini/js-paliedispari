function palindromo (parola){ //creo funzione
  var parola = String(prompt("Inserisci una parola")); //chiedo parola
  if (parola=="" || parola=="null") {
    return alert("Hai inserito una parola non valida");
  } else{
      if (isNaN(parola)) { //controllo input
        var inverso = parola.split("").reverse().join("");  //inverto parola
        if (parola==inverso) {
          return alert('La parola ' + parola + ' è un Palindromo');
        } else return alert('La parola ' + parola + ' NON è un Palindromo');
      } else return alert("hai inserito un numero e non una parola");
    }
}


function pariodispari(){
  var pariodispari = String(prompt("Inserisci pari o dispari")); //chiedo pari o dispari
  pariodispari= pariodispari.toUpperCase(); //trasformo in upper/lower
  if (pariodispari=="PARI" || pariodispari=="DISPARI") { //se input corretto procedo
    // console.log(pariodispari);
    var num1 = parseInt(prompt("Inserisci un numero da 1 a 5")); //chiedo numero 1
    // console.log(num1);
    if (num1>=1 && num1<=5) { //controllo
      var num2 = Math.round(Math.random() * (5 - 1) + 1); //genero numero 2
      // console.log(num2);

      var somma= num1+num2;
      // console.log(somma);
      if (somma%2==0) {
        var risultato= "PARI"
      } else var risultato= "DISPARI";
      if (risultato==pariodispari) {
        return alert("HAI VINTO! Il tuo numero era "+num1+" l'altro numero "+num2+". Totale "+somma+" che è "+pariodispari)
      } else alert("HAI PERSO! Il tuo numero era "+num1+" l'altro numero "+num2+". Totale "+somma+" che è "+pariodispari)
    } else alert("inserisci un numero tra 1 e 5");
  } else {
    alert("inserisci 'pari' o 'dispari'");
  }
}



// pariodispari();
