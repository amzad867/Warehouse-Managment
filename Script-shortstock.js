const scriptURL = "https://script.google.com/macros/s/AKfycbxtzNuZLivKE-Lsej80nHNqnH4j7BzBj7yidCdbK6AfWfTIbx7HjV1618JHuLkg9UmE/exec";

document.getElementById("shortstockForm").addEventListener("submit", function(e){

    e.preventDefault();

    fetch(scriptURL,{
        method:"POST",

        body: JSON.stringify({

            formType: "ShortStock",

            itemNo: document.getElementById("itemNo").value,
            shelf: document.getElementById("shelf").value,
            shortQuantity: document.getElementById("shortQuantity").value

        })

    })

    .then(res => res.text())
    .then(data => {
        alert("Server Response: " + data);
        document.getElementById("shortstockForm").reset();
    })

    .catch(error => {
        alert("Error: " + error);
        console.log(error);
    });

});