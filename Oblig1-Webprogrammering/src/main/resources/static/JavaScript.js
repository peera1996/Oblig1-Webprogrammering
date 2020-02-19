let billetter = [];

function kjoopBillett () {

    const velgFilm = document.getElementById("velgFilm").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const nummer = document.getElementById("nummer").value;
    const epost = document.getElementById("epost").value;

    const billett = {
        velgFilm : velgFilm,
        antall : antall,
        fornavn : fornavn,
        etternavn : etternavn,
        nummer : nummer,
        epost : epost
    };
    billetter.push(billett);

    document.getElementById("velgFilm").value="";
    document.getElementById("antall").value="";
    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("nummer").value="";
    document.getElementById("epost").value="";

    visBilletter()
}

function visBilletter() {

    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";

    for (let b of billetter) {
        ut += "<tr>";
        ut += "<td>" + b.velgFilm + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.nummer + "</td><td>" + b.epost + "</td>";
        ut += "</tr>";
    }
    console.log(billetter)
    document.getElementById("billetter").innerHTML=ut;
}

function slettBilletter() {
    billetter.splice(0, billetter.length);
    document.getElementById("billetter").innerHTML="";

}
