const scriptURL = "https://script.google.com/macros/s/AKfycbzBY6jR1cmicZ-fTvCuSSvHzrIvIOFoM_56UEkuTPTE4MlU_N4rtfAMR7en2AwUySn5hQ/exec";

const form = document.getElementById("expiryForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    fetch(scriptURL, {

        method: "POST",

        body: JSON.stringify({

            itemNo: document.getElementById("itemNo").value,

            expiryDate: document.getElementById("expiryDate").value,

            shelf: document.getElementById("shelf").value

        })

    })

    .then(res => res.text())

    .then(data => {

        alert(data);

        form.reset();

    })

    .catch(err => {

        alert("Error: " + err);

        console.log(err);

    });

});