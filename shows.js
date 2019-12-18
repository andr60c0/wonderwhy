window.addEventListener("load", loadPage);



var classname = document.getElementsByClassName("knap");


function loadPage() {
    console.log("loadPage");


    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', showAll);


    }


}

function showAll() {
    console.log("showAll");
    this.removeEventListener("click", showAll);
    let myLength;
    myLength = this.parentElement.parentElement.parentElement.children;

    //    console.log("My length is ", myLength[0]);


    for (i = 0; i < myLength.length; i++) {
        myLength[i].classList.remove("hide");



    }
    this.textContent = "Show less";

    this.addEventListener("click", showLess);

}

function showLess() {
    console.log("showLess");
    this.removeEventListener("click", showLess);
    let myLength;
    myLength = this.parentElement.parentElement.parentElement.children;

    //    console.log("My length is ", myLength[0]);


    for (i = 4; i < myLength.length - 1; i++) {
        myLength[i].classList.add("hide");



    }


    this.textContent = "Show more";


    this.addEventListener("click", showAll);


}
