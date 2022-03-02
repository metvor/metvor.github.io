var lastScroll = window.pageYOffset;
window.onscroll = function() {
    currentScroll = window.pageYOffset;
    if (lastScroll > currentScroll) {
        document.getElementById('navbar').style.top = '0';
    } else {
        document.getElementById('navbar').style.top = '-50px';
    }
    lastScroll = currentScroll;
}