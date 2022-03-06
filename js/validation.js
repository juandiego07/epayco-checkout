let testProd = document.getElementById("testProd");
testProd.addEventListener("click",
    function() {
        if (testProd.checked) {
            console.log(!testProd.checked);
            document.getElementById("labelTestProd").innerHTML =
                "Producción";
        } else {
            console.log(!testProd.checked);
            document.getElementById("labelTestProd").innerHTML =
                "Prueba";
        }
    });