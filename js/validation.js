let testProd = document.getElementById("testProd");
testProd.addEventListener("click", function() {
    if (testProd.checked)
        document.getElementById("labelTestProd").innerHTML = "Producción";
    else document.getElementById("labelTestProd").innerHTML = "Prueba";
});

let language = document.getElementById("language");
language.addEventListener("click", function() {
    if (language.checked)
        document.getElementById("labelLanguage").innerHTML = "Ingles";
    else document.getElementById("labelLanguage").innerHTML = "Español";
});

let typeUx = document.getElementById("typeUx");
typeUx.addEventListener("click", function() {
    if (typeUx.checked)
        document.getElementById("labelTypeUx").innerHTML = "Estandar";
    else document.getElementById("labelTypeUx").innerHTML = "OnePage";
});

let currency = document.getElementById("currency");
currency.addEventListener("click", function() {
    if (currency.checked)
        document.getElementById("labelCurrency").innerHTML =
        "<strong>Dolares (USD)</strong>";
    else
        document.getElementById("labelCurrency").innerHTML =
        "<strong>Pesos (COP)</strong>";
});

let invoice = document.getElementById("invoice");
invoice.value = Math.floor(Math.random() * (3999999 - 1)) + 1;

let taxBase = document.getElementById("taxBase");
taxBase.addEventListener("keyup", () =>
    add(taxBase.value, taxIva.value, taxIco.value)
);

let taxIva = document.getElementById("taxIva");
taxIva.addEventListener("keyup", () =>
    add(taxBase.value, taxIva.value, taxIco.value)
);

let taxIco = document.getElementById("taxIco");
taxIco.addEventListener("keyup", () =>
    add(taxBase.value, taxIva.value, taxIco.value)
);

let amount = document.getElementById("amount");

function add(taxBase, taxIVa, taxIco) {
    var add = parseFloat(taxBase) + parseFloat(taxIVa) + parseFloat(taxIco);
    amount.value = add.toString();
    console.log(amount);
}

let inputDescription = document.getElementById("inputDescription");
inputDescription.addEventListener("change", () => console.log(inputDescription.value));