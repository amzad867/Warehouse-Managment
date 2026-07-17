const scriptURL = "https://script.google.com/macros/s/AKfycbz4m88v0MlvJnoMHO10E8x9Vi1_JYhnmrrm4bkbwg-poNkb0jqdj3JSR1qqdDA1OLjAFA/exec";

const form = document.getElementById("shortstockForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function(e){

    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "⏳ Saving...";

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

        form.reset();

        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";

    })

    .catch(err => {

        alert("Error: " + err);

        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";

    });

});