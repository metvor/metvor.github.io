var lastScroll = window.pageYOffset;
window.onscroll = function() {
    currentScroll = window.pageYOffset;
    if (lastScroll > currentScroll) {
        document.getElementById('navbar').style.top = '0';
    } else {
        document.getElementById('navbar').style.top = '-63px';
    }
    lastScroll = currentScroll;
}

function reveal() {
    var reveals = document.querySelectorAll(".fade-in");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 300;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}   

window.addEventListener("scroll", reveal);
