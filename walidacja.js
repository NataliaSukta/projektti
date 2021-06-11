function validateDane(imie, nazwisko, ulica) {
    if (imie.length > 3 && nazwisko.length > 3 && ulica.length > 3) {
        return true;
    } else {
        return false;
    }
}


function validateTelefon(telefon) {
    if (telefon.length > 8 && telefon.length < 12) {
        return true;
    } else {
        return false;
    }
}

function validateData(data) {
    let today = new Date().toISOString().slice(0, 10);
    return (today < date);
}