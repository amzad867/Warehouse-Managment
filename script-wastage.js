const scriptURL = "https://script.google.com/macros/s/AKfycbxxuCJRw9iqlBUgnoF0G3MnSkQKwXAAq0EOod2hT-gZ_Mk6G3SRQyViRf_Iblosvn0G/exec";

const form = document.getElementById("wastageForm");
const preview = document.getElementById("preview");
const photo = document.getElementById("photo");
const submitBtn = document.getElementById("submitBtn");

let photoBase64 = "";
let fileName = "";
let mimeType = "";

// Photo Preview + Base64
photo.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    fileName = file.name;
    mimeType = file.type;

    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";

    const reader = new FileReader();

    reader.onload = function (e) {

        photoBase64 = e.target.result.split(",")[1];

    };

    reader.readAsDataURL(file);

});


// Submit
form.addEventListener("submit", function (e) {

    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Uploading...";

    fetch(scriptURL, {

        method: "POST",

        headers: {
    "Content-Type": "application/json"
},
        body: JSON.stringify({

            formType: "DailyWastage",

            itemNo: document.getElementById("itemNo").value,

            quantity: document.getElementById("quantity").value,

            reason: document.getElementById("reason").value,

            resource: document.getElementById("resource").value,

            expireDate: document.getElementById("expireDate").value,

            responsible: document.getElementById("responsible").value,

            photo: "",

            fileName: "",

            mimeType: ""

        })

    })

   .then(async (res) => {

    const text = await res.text();

    alert(
        "Status: " + res.status +
        "\n\nResponse:\n" + text
    );

    form.reset();

    preview.style.display = "none";
    preview.src = "";

    photoBase64 = "";

    submitBtn.disabled = false;
    submitBtn.innerHTML = "Submit";

})
.catch((err) => {

    alert(
        "ERROR:\n" +
        err.name +
        "\n\n" +
        err.message
    );

    console.error(err);

    submitBtn.disabled = false;
    submitBtn.innerHTML = "Submit";

});