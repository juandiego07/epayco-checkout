document.getElementById("pay").addEventListener("click", () => {
    var handler = ePayco.checkout.configure({
        key: document.getElementById("publicKey").value,
        test: !document.getElementById("testProd").checked,
    });

    console.log(document.getElementById("amount").value);
    console.log(document.getElementById("taxBase").value);
    console.log(document.getElementById("taxIva").value);
    console.log(document.getElementById("taxIco").value);

    let data = {
        //Parametros compra (obligatorio)
        name: document.getElementById("name").value,
        description: document.getElementById("inputDescription").value,
        invoice: document.getElementById("invoice").value,
        currency: document.getElementById("currency").checked ? "usd" : "cop",
        amount: document.getElementById("amount").value,
        tax_base: document.getElementById("taxBase").value,
        tax: document.getElementById("taxIva").value,
        tax_ico: document.getElementById("taxIco").value,
        country: "co",
        lang: document.getElementById("language").checked ? "en" : "es",
        //Onpage="false" - Standard="true"
        external: document.getElementById("typeUx").checked ? "true" : "false",
        //Atributos opcionales
        confirmation: document.getElementById("urlConfirmation").value,
        response: document.getElementById("urlResponse").value,
        extra1: "",
        extra2: "",
        extra3: "",
        //Atributos cliente
        name_billing: document.getElementById("name").value,
        address_billing: document.getElementById("address").value,
        type_doc_billing: "cc",
        mobilephone_billing: document.getElementById("phone").value,
        number_doc_billing: document.getElementById("id").value,
        //atributo deshabilitación metodo de pago
        //methodsDisable: ["TDC", "PSE","SP","CASH","DP"]
    };

    handler.open(data);
});