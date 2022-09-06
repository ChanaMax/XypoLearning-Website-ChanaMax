/* Hamburger Menu*/

var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
menuBtn.onclick = function() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
    } else {
        sideNav.style.right = "-250px";
    }
}

/* Smooth Scroll Animation*/


var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

/* Cursor Animation*/

const cursor = document.querySelector('.cursor ');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top:" + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")

})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})