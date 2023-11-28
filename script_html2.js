

function inviaPost(){

let titolo = document.getElementById("titolo").value;

let paragrafo = document.getElementById("paragrafo").value;

let feed = document.getElementById("feed")

if (!titolo) {

    return alert("Il titolo è vuoto")


} else if (!paragrafo) {

    return alert("Il paragrafo è vuoto")


} else {

    let date = new Date(); 
    let formatDate = date.toLocaleDateString()

    feed.innerHTML += `<div style="display: flex; flex-direction: column; background-color: black; color: white; height: 300px; width: 300px;">
    <h1>${titolo}</h1>
    <p>${paragrafo}</p>

    <p><em>Pubblicato il ${formatDate}</em></p>
    </div>`

    document.getElementById("titolo").value = ""
    document.getElementById("paragrafo").value = ""


}



}