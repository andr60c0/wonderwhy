window.addEventListener("load", loadMenu);

function loadMenu() {
    console.log("loadMenu:");

    document.querySelector("#menuknap").removeEventListener("click", loadMenu);

    document.querySelector("#menuknap").addEventListener("click", clickButton);
}

function clickButton() {
    console.log("clickButton:");
    document.querySelector("#menuknap").removeEventListener("click", clickButton);

    document.querySelector("#menu").classList.remove("hidden");

    document.querySelector("#menuknap").addEventListener("click", clickBack);

    //    document.querySelector("#menu").addEventListener("animationiteration", clickButtonEnd);
}


function clickBack() {
    console.log("clickBack");
    document.querySelector("#menu").removeEventListener("click", clickBack);

    document.querySelector("#menu").classList.add("hidden");

    document.querySelector("#menuknap").addEventListener("click", loadMenu);
}
