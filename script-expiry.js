const scriptURL = "https://script.google.com/macros/s/AKfycbzBY6jR1cmicZ-fTvCuSSvHzrIvIOFoM_56UEkuTPTE4MlU_N4rtfAMR7en2AwUySn5hQ/exec";

const form = document.getElementById("expiryForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "⏳ Saving...";

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

        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";

    })

    .catch(err => {

        alert("Error: " + err);

        console.log(err);

        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";

    });

});