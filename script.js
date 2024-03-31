let btn = document.querySelector("#btn");
let barcode = document.querySelector("#barcode");
let loading = document.querySelector("#barCanvas");
btn.addEventListener("click", function() {
    let intro = document.getElementById("container");
    intro.style.display= "none";
    
    // Loading icon show
    loading.style.display = "block";
    barcode.onload = () =>{
        loading.style.display = "none";
        intro.style.display= "block";
    } 
    // use text value
    let input = document.querySelector("#text").value;
    // API with text
    let api = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input}`;
    // barcode img show
    barcode.src = api;
    
    // Share barcode link
    let shareBtn = document.createElement("button");
    shareBtn.textContent = "Share Barcode";
    shareBtn.style.padding = "7px 7px";
    shareBtn.style.marginLeft = "20px"
    shareBtn.style.marginTop = "100px"
    shareBtn.style.position = "absolute";
    shareBtn.style.border = "2px solid black";
    shareBtn.style.borderRadius = "20px";
    shareBtn.style.cursor = "pointer";
    shareBtn.style.fontSize = "1rem";
    shareBtn.style.fontWeight = "600";
    shareBtn.style.backgroundColor = "transparent";
    shareBtn.style.color = "white";

    shareBtn.onclick = function() {
        let barcodeLink = document.createElement("textarea");
        barcodeLink.value = api;
        document.body.appendChild(barcodeLink);
        barcodeLink.select();
        document.execCommand("copy");
        document.body.removeChild(barcodeLink);
        alert("Barcode link copied to clipboard!");
    }

    intro.appendChild(shareBtn);
});
