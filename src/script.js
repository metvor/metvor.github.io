var lastScroll = window.pageYOffset;
window.onscroll = function() {
    currentScroll = window.pageYOffset;
    if (lastScroll > currentScroll) {
        document.getElementById('navbar').style.top = '0';
    } else {
        document.getElementById('navbar').style.top = '-70px';
    }
    lastScroll = currentScroll;
}

window.onload=function(){
    document.getElementById("button").style.display='none';
  
  }
  function showButton(){
    document.getElementById("button").style.display='block';
  }