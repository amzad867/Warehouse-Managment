const scriptURL = "https://script.google.com/macros/s/AKfycbwekGxhueot9Jgjch6qfg1DjknPffpq-lZJESs1E_rp7EQTCrkFJieuruMKqpWTJszP/exec";

const form = document.getElementById("shortstockForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

fetch(scriptURL, {

    method: "POST",

    body: JSON.stringify({

        itemNo: document.getElementById("itemNo").value,
        shelf: document.getElementById("shelf").value,
        shortQuantity: document.getElementById("shortQuantity").value

    })

})
.then(res => res.text())
.then(data => {

    alert(data);

})
.catch(err => {

    alert("ERROR: " + err);

});