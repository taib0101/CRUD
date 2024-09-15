const loaderContainer = document.querySelector(".container-load");
loaderContainer.className = loaderContainer.className.replace("d-none");
setTimeout(() => {
    loaderContainer.className += " d-none";
}, 2500);

const productName = document.querySelector("#productName");
const productCode = document.querySelector("#productCode");
const productImage = document.querySelector("#productImage");
const unitPrice = document.querySelector("#unitPrice");
const productQty = document.querySelector("#productQty");
const productTotal = document.querySelector("#productTotal");
const from = document.querySelector("#from");



// it takes id from previous htl page
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
console.log(id);

async function readPreviousUpdate() {
    let url = "http://164.68.107.70:6060/api/v1/ReadProductByID/" + id;
    let request = {
        method: "GET"
    }

    let response = await fetch(url, request);
    let readData = await response.json();
    readData = readData.data;

    productName.value = readData[0].ProductName;
    productCode.value = readData[0].ProductCode;
    productImage.value = readData[0].Img;
    unitPrice.value = readData[0].UnitPrice;
    productQty.value = readData[0].Qty;
    productTotal.value = readData[0].TotalPrice;

};

async function update() {
    productName.value = productName.value;
    productCode.value = productCode.value;
    productImage.value = productImage.value;
    unitPrice.value = unitPrice.value;
    productQty.value = productQty.value;
    productTotal.value = productTotal.value;

    let data = {
        ProductName: productName.value,
        ProductCode: productCode.value,
        Img: productImage.value,
        UnitPrice: unitPrice.value,
        Qty: productQty.value,
        TotalPrice: productTotal.value
    }

    let url = "http://164.68.107.70:6060/api/v1/UpdateProduct/" + id;
    let request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Action": "application/json"
        },
        body: JSON.stringify(data)
    }


    loaderContainer.className = loaderContainer.className.replace("d-none");
    await fetch(url, request);
    window.location = "./read.html";
    setTimeout(() => {
        loaderContainer.className += " d-none";
    }, 2500);
}

readPreviousUpdate();

from.addEventListener("submit", (event) => {
    event.preventDefault();
    update();
});
