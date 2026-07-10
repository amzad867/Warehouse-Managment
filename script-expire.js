const scriptURL = "https://script.google.com/macros/s/AKfycbxtzNuZLivKE-Lsej80nHNqnH4j7BzBj7yidCdbK6AfWfTIbx7HjV1618JHuLkg9UmE/exec";

document.getElementById("expiryform").addEventListener("submit", function(e){

    e.preventDefault();

    fetch(scriptURL,{
        method:"POST",

        body: JSON.stringify({

            formType: "ExpiryCheck",

            itemNo: document.getElementById("itemNo").value,
            shelf: document.getElementById("shelf").value,
            expireDate: document.getElementById("expireDate").value

        })

    })

    .then(res => res.text())
    .then(data => {
        alert("Server Response: " + data);
    })
    .catch(error => {
        alert("Error: " + error);
        console.log(error);
    });

});
