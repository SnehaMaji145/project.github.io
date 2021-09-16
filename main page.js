let one = document.getElementById("MenuItems");
one.style.maxHeight = "0px";
function menutoggle() {
    if (one.style.maxHeight == "0px") {
        one.style.maxHeight = "200px"
    }
    else {
        one.style.maxHeight = "0px";
    }
}