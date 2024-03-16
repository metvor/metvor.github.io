
function showSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'flex'
    }
    
function hideSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
    }

let hide = document.getElementById("hideSidebar");
    hide.addEventListener('click', hideSidebar);

let show = document.getElementById("showSidebar");
    show.addEventListener('click', showSidebar);

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName('tab-contents');
    
    function opentab(tabname){
      for(tablink of tablinks){
        tablink.classList.remove('active-link');
      }
      for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-content');
      }
      event.currentTarget.classList.add('active-link');
      document.getElementById(tabname).classList.add('active-content');
     
    }
    
    let prevScrollPos = window.pageYOffset;

    window.addEventListener('scroll', function() {
      const currentScrollPos = window.pageYOffset;
    
      if (prevScrollPos > currentScrollPos) {
        document.querySelector('.navbar').classList.add('show');
      } else {
        document.querySelector('.navbar').classList.remove('show');
      }
    
      prevScrollPos = currentScrollPos;
    });