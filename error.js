const form = document.getElementById('form')
const imie = document.getElementById('imie')
const nazwisko = document.getElementById('nazwisko')
const telefon = document.getElementById('telefon')
const ulica = document.getElementById('ulica')
const dom = document.getElementById('dom')
const data = document.getElementById('data')
const godzina = document.getElementById('godzina')
const przycisk = document.getElementById('przycisk')
const error = document.getElementById('error')

przycisk.addEventListener('Rezerwuj', (e) => {
    let messages = []
    if (imie.value.length <= 3 ) {
         messages.push('Wypełnij poprawnie wszystkie pola z gwiazdką');
    }
})

przycisk.addEventListener('Rezerwuj', (e) => {
    let messages = []
    if (nazwisko.value.length <= 3) {
         messages.push('Wypełnij poprawnie wszystkie pola z gwiazdką');
    }
})

przycisk.addEventListener('Rezerwuj', (e) => {
    let messages = []
    if (telefon.value.length <8 && telefon.value.length > 12) {
         messages.push('Wypełnij poprawnie wszystkie pola z gwiazdką');
    }
})

przycisk.addEventListener('Rezerwuj', (e) => {
    let messages = []
    if (ulica.value.length < 3) {
         messages.push('Wypełnij poprawnie wszystkie pola z gwiazdką');
    }
})

przycisk.addEventListener('Rezerwuj', (e) => {
    let messages = []
    if (dom.value.length = 0) {
         messages.push('Wypełnij poprawnie wszystkie pola z gwiazdką');
    }
})





