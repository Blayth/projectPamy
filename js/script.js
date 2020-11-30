document.addEventListener('DOMContentLoaded', function() {
    let invia = document.getElementById("invia");
    let iscrizione = document.getElementById("iscrizione");
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let eta = document.getElementById("eta").value;
    let errore = document.getElementById("errore");

    invia.addEventListener("click", function(){
        console.log(nome.length);
    if (nome.length == 0){
        errore.style = "display = none";
    }
    else if (nome.length > 1){
        errore.style = "display = none";
    }

    })


});