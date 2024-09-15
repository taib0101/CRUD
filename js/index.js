// index.html part
const loaderContainer = document.querySelector(".container-load");

loaderContainer.className = loaderContainer.className.replace("d-none");

setTimeout(() => {
    loaderContainer.className += " d-none"; 
}, 3000);

const create = document.querySelector("#create");
create.addEventListener("click",() => {
    window.location = "./create.html";
});

const read = document.querySelector("#read");
read.addEventListener("click",() => {
    window.location = "./read.html";
});

const update = document.querySelector("#update");
update.addEventListener("click",() => {
    window.location = "./read.html";
});

const deletee = document.querySelector("#delete");
deletee.addEventListener("click",() => {
    window.location = "./read.html";
});