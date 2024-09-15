const loaderContainer = document.querySelector(".container-load");
loaderContainer.className = loaderContainer.className.replace("d-none");
setTimeout(() => {
        loaderContainer.className += " d-none";
}, 2500);

const button = document.querySelector(".button");
const productName = document.querySelector("#productName");
const productCode = document.querySelector("#productCode");
const productImage = document.querySelector("#productImage");
const unitPrice = document.querySelector("#unitPrice");
const productQty = document.querySelector("#productQty");
const productTotal = document.querySelector("#productTotal");
const from = document.querySelector("#from");



async function post_fetch(url, request) {
        try {
                let response = await fetch(url, request);
                console.log(response);
                window.location = "read.html";
        } catch (error) {
                console.log(error);
        }
}

from.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Product Name : ", productName.value);
        console.log("Product Code : ", productCode.value);
        console.log("Product Image : ", productImage.value);
        console.log("Unit price : ", unitPrice.value);
        console.log("Product Quantity : ", productQty.value);
        console.log("Product Total : ", productTotal.value);

        let url = "http://164.68.107.70:6060/api/v1/CreateProduct";
        let data = {
                ProductName: productName.value,
                ProductCode: productCode.value,
                Img: productImage.value,
                UnitPrice: unitPrice.value,
                Qty: productQty.value,
                TotalPrice: productTotal.value
        }

        let request = {
                method: "POST",
                headers: {
                        "Content-Type": "application/json",
                        "Action": "application/json"
                },
                body: JSON.stringify(data)
        }
        loaderContainer.className = loaderContainer.className.replace("d-none");

        productName.value = "";
        productCode.value = "";
        productImage.value = "";
        unitPrice.value = "";
        productQty.value = "";
        productTotal.value = "";

        post_fetch(url, request);
        console.log(event);
});

// button.addEventListener("click", (event) => {
//         event.preventDefault();
//         console.log("Product Name : ", productName.value);
//         console.log("Product Code : ", productCode.value);
//         console.log("Product Image : ", productImage.value);
//         console.log("Unit price : ", unitPrice.value);
//         console.log("Product Quantity : ", productQty.value);
//         console.log("Product Total : ", productTotal);
//         let url = "http://164.68.107.70:6060/api/v1/CreateProduct";
//         let data = {
//                 ProductName: productName.value,
//                 ProductCode: productCode.value,
//                 Img: productImage.value,
//                 UnitPrice: unitPrice.value,
//                 Qty: productQty.value,
//                 TotalPrice: productTotal.value
//         }

//         let request = {
//                 method: "POST",
//                 headers: {
//                         "Content-Type": "application/json",
//                         "Action": "application/json"
//                 },
//                 body: JSON.stringify(data)
//         }
//         loaderContainer.className = loaderContainer.className.replace("d-none");

//         productName.value = "";
//         productCode.value = "";
//         productImage.value = "";
//         unitPrice.value = "";
//         productQty.value = "";
//         productTotal.value = "";

//         post_fetch(url, request);
//         console.log(event);
// });