// Et array for billettinfo og et for feilmeldinger
var billetter = [];
var feilmeldinger = [];

    function kjoopBillett() {

        // Legger det brukeren legger inn i inputfeltene i hver sin variabel
        var film = document.getElementById('film').value;
        var antall = document.getElementById("antall").value;
        var fornavn = document.getElementById("fornavn").value;
        var etternavn = document.getElementById("etternavn").value;
        var nummer = document.getElementById("nummer").value;
        var epost = document.getElementById("epost").value;


        // Legger inn feilmeldinger til det respektive feltet hvis
        var tomt = document.getElementsByClassName('verdi');
        var lengde = tomt.length;
        for (var i = 0; i < lengde; i++) {
            if (tomt[i].value == '') {
                var j = i+1;
                document.getElementById('feil-' + j).innerHTML = "Må skrive noe inn i " + tomt[i].id;
                var tomInput = new Boolean(true);
                feilmeldinger.push(tomt[i]);
            }
            // Denne gjør sånn at hvis du fyller ut feltet som var tomt, så forsvinner feilmeldingen
            else {
                var j = i + 1;
                document.getElementById('feil-' + j).innerHTML = ""
            }

        };

        // Denne koden kjører hvis alle inputfeltene ikke er tomme
        if (!tomInput) {
            var billett = {
                film: film,
                antall: antall,
                fornavn: fornavn,
                etternavn: etternavn,
                nummer: nummer,
                epost: epost,
            };
            billetter.push(billett);

        // lager tabellen og Legger input-verdier inn i en tabell
        let ut = "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>telefonnr</th><th>epost</th>" +
            "</tr>";
            for (let b of billetter) {
                ut += "<tr>";
                ut += "<td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.nummer + "</td><td>" + b.epost + "</td>";
                ut += "</tr>";
            }


        // Skriver ut billettene til nettsiden
        document.getElementById("billetter").innerHTML=ut;

        //Gjør alle inputfelt tomme
        document.getElementById("film").value="";
        document.getElementById("antall").value="";
        document.getElementById("fornavn").value="";
        document.getElementById("etternavn").value="";
        document.getElementById("nummer").value="";
        document.getElementById("epost").value="";
    }

}

    //Funksjon som sletter arrayet med splice og setter tabellen som lister arrayet til ""
    function slettBilletter() {
        billetter.splice(0, billetter.length);
        document.getElementById("billetter").innerHTML="";
    }