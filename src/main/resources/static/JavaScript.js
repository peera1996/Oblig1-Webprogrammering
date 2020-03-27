//Array for feilmeldinger
let feilmeldinger = [];

//Funksjonen som legger verdien fra inputfeltene inn i en variabel
function lagreBillett() {
    const b = {
        film : $("#film").val(),
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonnr : $("#telefonnr").val(),
        epost : $("#epost").val()
    };

    //Sjekker om inputfeltene er tomme, og lager eventuelt en feilmelding hvis et eller flere felter er tomt
    let tomt = document.getElementsByClassName('verdi');
    let lengde = tomt.length;
    for (let i = 0; i < lengde; i++) {
        if (tomt[i].value == '') {
            let j = i+1;
            document.getElementById('feil-' + j).innerHTML = "Må skrive noe inn i " + tomt[i].id;
            var tomInput = Boolean(true); //brukte "var" her for å få tilgang til den i if(!tomInput)
            feilmeldinger.push(tomt[i]);
        }
        // Denne gjør sånn at hvis du fyller ut feltet som var tomt, så forsvinner feilmeldingen
        else {
            let j = i + 1;
            document.getElementById('feil-' + j).innerHTML = ""
        }

    };
    //Denne gjør sånn at koden for å lagre billetten bare kjøres hvis alle input feltene er fylt ut
    if(!tomInput) {
        $.post("/lagre", b, function() {
            hentAlle();
        });
        //nullstiller input-feltene
        $("#navn").val("");
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefonnr").val("");
        $("#epost").val("");
    }
}

//Henter arrayet og kjører neste function
function hentAlle() {
    $.get("/hentAlle", function(data) {
        formaterData(data);
    });
}

//Denne lager en tabell og lister ut billettene
function formaterData(billetter) {
    let ut = "<table><tr>" +
        "<th id='th'>Film</th><th id='th'>Antall</th><th id='th'>Fornavn</th><th id='th'>Etternavn</th><th id='th'>Telefonnr</th><th id='th'>Epost</th>" +
        "</tr>";
    for (const b of billetter) {
        ut += "<tr>";
        ut += "<td id='td'>" + b.film + "</td><td id='td'>" + b.antall + "</td><td id='td'>" + b.fornavn + "</td><td id='td'>" + b.etternavn + "</td><td id='td'>" + b.telefonnr + "</td><td id='td'>" + b.epost + "</td>";
        ut += "</tr>";
    }
    $("#utBillett").html(ut);
}

//Funksjon til å slette alle billettene
function slettAlleBilletter() {
    $.get( "/slettAlle", function() {
        hentAlle()
    });
}

//Dette er javascript for Oblig1
/*
// Et array for billettinfo og et for feilmeldinger
let billetter = [];
let feilmeldinger = [];

function kjoopBillett() {


    // Legger det brukeren legger inn i inputfeltene i hver sin variabel
    let film = document.getElementById('film').value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;


    // Legger inn feilmeldinger til det respektive feltet hvis
    let tomt = document.getElementsByClassName('verdi');
    let lengde = tomt.length;
    for (let i = 0; i < lengde; i++) {
        if (tomt[i].value == '') {
            let j = i+1;
            document.getElementById('feil-' + j).innerHTML = "Må skrive noe inn i " + tomt[i].id;
            var tomInput = Boolean(true); //brukte "var" her for å få tilgang til den i if(!tomInput)
            feilmeldinger.push(tomt[i]);
        }
        // Denne gjør sånn at hvis du fyller ut feltet som var tomt, så forsvinner feilmeldingen
        else {
            let j = i + 1;
            document.getElementById('feil-' + j).innerHTML = ""
        }

    };

    // Denne koden kjører hvis alle inputfeltene ikke er tomme
    if (!tomInput) {
        let billett = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost,
        };
        billetter.push(billett);

        // lager tabellen og Legger input-verdier inn i en tabell
        let ut = "<table><tr>" +
            "<th id='th'>Film</th><th id='th'>Antall</th><th id='th'>Fornavn</th><th id='th'>Etternavn</th><th id='th'>Telefonnr</th><th id='th'>Epost</th>" +
            "</tr>";
        for (let b of billetter) {
            ut += "<tr>";
            ut += "<td id='td'>" + b.film + "</td><td id='td'>" + b.antall + "</td><td id='td'>" + b.fornavn + "</td><td id='td'>" + b.etternavn + "</td><td id='td'>" + b.telefonnr + "</td><td id='td'>" + b.epost + "</td>";
            ut += "</tr>";
        }


        // Skriver ut billettene til nettsiden
        document.getElementById("billetter").innerHTML=ut;

        //Gjør alle inputfelt tomme
        document.getElementById("film").value="";
        document.getElementById("antall").value="";
        document.getElementById("fornavn").value="";
        document.getElementById("etternavn").value="";
        document.getElementById("telefonnr").value="";
        document.getElementById("epost").value="";
    }

}

    //Funksjon som sletter arrayet med splice og setter tabellen som lister arrayet til ""
function slettBilletter() {
    billetter.splice(0, billetter.length);
    document.getElementById("billetter").innerHTML="";
}
*/
