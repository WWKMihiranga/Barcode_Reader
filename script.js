document.getElementById("btnGenerate").addEventListener("click",function(){
    let val = document.getElementById("textInput").value;
    JsBarcode("#barcode", val);
})