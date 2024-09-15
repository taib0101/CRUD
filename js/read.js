const loaderContainer = document.querySelector(".container-load");
const create = document.querySelector("#create");
const tableBody = document.querySelector("#tableBody");
const deleteAll = document.querySelector("#deleteAll");

loaderContainer.className = loaderContainer.className.replace("d-none");
setTimeout(() => {
    loaderContainer.className += " d-none";
}, 2500);

create.addEventListener("click", (event) => {
    event.preventDefault();
    window.location = "./create.html"
});

let url, request;

async function deletee(id) {
    url = "http://164.68.107.70:6060/api/v1/DeleteProduct/" + id;
    request = {
        method: "GET"
    }

    loaderContainer.className = loaderContainer.className.replace("d-none");
    await fetch(url, request);
    
    setTimeout(() => {
        loaderContainer.className += " d-none";
    }, 2500);

    // if you don't use it, that means it will display previous position
    // comment 30 number line to better understand
    // like let x += "10", x = "", x = "20"
    tableBody.innerHTML = "";
    
    // it better than reloading page
    await read();
}

let updatee = (id) => {
    window.location = `./update.html?id=${id}`
}


async function read() {
    url = "http://164.68.107.70:6060/api/v1/ReadProduct"
    request = {
        method : "GET"
    }
    let response = await fetch(url, request);

    let readData = await response.json();
    readData = readData.data;

    readData.forEach(value => {
        // const newElement = document.createElement("tr");
        // newElement.innerHTML = `
        //     <td>${value['ProductName']}</td>
        //     <td>${value['ProductCode']}</td>
        //     <td>${value['UnitPrice']}</td>
        //     <td>${value['Qty']}</td>
        //     <td>${value['TotalPrice']}</td>
        //     <td><button onclick="deletee('${value['_id']}')">Delete</button></td>
        //     <td><button onclick="updatee('${value['_id']}')">Upadte</button></td>
        // `;
        // tableBody.appendChild(newElement);

        tableBody.innerHTML += `
            <tr>
                <td>${value['ProductName']}</td>
                <td>${value['ProductCode']}</td>
                <td>${value['UnitPrice']}</td>
                <td>${value['Qty']}</td>
                <td>${value['TotalPrice']}</td>
                <td><button onclick="deletee('${value['_id']}')">Delete</button></td>
                <td><button onclick="updatee('${value['_id']}')">Upadte</button></td>
            </tr> 
        `;
   });
}

read();




// delete all part

async function asyncDeleteAll() {
    let response = await fetch(url,request);
    let arr = await response.json();
    arr = arr.data;

    loaderContainer.className = loaderContainer.className.replace("d-none");
    for(let i = 0; i < arr.length; ++i) {
        url = "http://164.68.107.70:6060/api/v1/DeleteProduct/" + arr[i]._id;
        request = {
            method : "GET"
        }
        await fetch(url,request);
    }
    tableBody.innerHTML = "";
    read();

    setTimeout(() => {
        loaderContainer.className += " d-none";
    }, 2500);
}

deleteAll.addEventListener("click",(event) => {
    event.preventDefault();
    asyncDeleteAll();
});