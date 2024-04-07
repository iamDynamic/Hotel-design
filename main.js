var img = document.getElementById("img")
var Reservation = document.getElementById("reservation")
var box = document.getElementById("box")
function mouseenter() {
    img.src = "/Images/container image/2.jpg"
}
function mouseleave() {
    img.src = "/Images/container image/1.jpg"

}

img.addEventListener("mouseenter", mouseenter)
img.addEventListener("mouseout", mouseleave)
