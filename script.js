function myFunction() {
    var x = document.getElementById("top-nav");
    if (x.className === "dr-list-nav") {
        x.className += " responsive";
    } else {
        x.className = "dr-list-nav";
    }
}