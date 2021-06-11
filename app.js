function getData() {
    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    let plec = document.getElementById("plec").value;
    let telefon = document.getElementById("telefon").value;
    let ulica = document.getElementById("ulica").value;
    let dom = document.getElementById("dom");
    let lokal = document.getElementById("lokal").value;
    let data = document.getElementById("data").value;
    let godzinaIndex = document.getElementById("godzina");
    let godzina = hourIndex.options[godzinaIndex.selectedIndex].text;
    let przycisk = document.getElementById("przycisk").checked;
    //let error = document.getElementById("error-text");

    return {
        imie, 
        nazwisko,
        plec,
        telefon,
        ulica,
        dom,
        lokal,
        data,
        godzina,
        godzinaIndex,
        przycisk,
       // error
    };
}