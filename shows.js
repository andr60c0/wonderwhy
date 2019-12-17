window.addEventListener("load", loadPage);

function loadPage() {
    console.log("loadPage");


    document.querySelector(".knap").addEventListener("click", showAll);




}

function showAll() {
    console.log("showAll");
    let myLength;
    myLength = this.parentElement.parentElement.parentElement.children;

    //    console.log("My length is ", myLength[0]);


    for (i = 0; i < myLength.length; i++) {
        myLength[i].classList.remove("hide");



    }
    this.textContent = "Show less";

    document.querySelector(".knap").addEventListener("click", showLess);

}

function showLess() {
    console.log("showLess");
    let myLength;
    myLength = this.parentElement.parentElement.parentElement.children;

    //    console.log("My length is ", myLength[0]);


    for (i = 4; i < myLength.length - 1; i++) {
        myLength[i].classList.add("hide");



    }


    this.textContent = "Show more";

    document.querySelector(".knap").addEventListener("click", showAll);

}
