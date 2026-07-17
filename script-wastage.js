const scriptURL = "https://script.google.com/macros/s/AKfycbyZAzBrjAkJZEGP6J_o95g_3EEak9otHponmtrox3-ng-xKCnuT3BRbir_fmlAl1rTSTQ/exec";

const form = document.getElementById("wastageForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const photo = document.getElementById("photo").files[0];

    if (!photo) {
        alert("Please select a photo.");
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "⏳ Saving...";

    const reader = new FileReader();

    reader.onload = function () {

        fetch(scriptURL, {

            method: "POST",

            body: JSON.stringify({

                itemNo: document.getElementById("itemNo").value,

                quantity: document.getElementById("quantity").value,

                reason: document.getElementById("reason").value,

                resource: document.getElementById("resource").value,

                expiryDate: document.getElementById("expiryDate").value,

                photo: reader.result,

                responsible: document.getElementById("responsible").value

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

            console.log(err);

            alert("Error: " + err);

            submitBtn.disabled = false;
            submitBtn.textContent = "Submit";

        });

    };

    reader.readAsDataURL(photo);

});