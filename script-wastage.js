const scriptURL = "https://script.google.com/macros/s/AKfycbxtzNuZLivKE-Lsej80nHNqnH4j7BzBj7yidCdbK6AfWfTIbx7HjV1618JHuLkg9UmE/exec";

document.getElementById("wastageForm").addEventListener("submit", function(e){

    e.preventDefault();

    fetch(scriptURL,{
        method:"POST",

        body:JSON.stringify({
            formType: "DailyWastage",
            
            itemNo:document.getElementById("itemNo").value,
            quantity:document.getElementById("quantity").value,
            reason:document.getElementById("reason").value,
            resource:document.getElementById("resource").value,
            expireDate:document.getElementById("expireDate").value,
            responsible:document.getElementById("responsible").value

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
