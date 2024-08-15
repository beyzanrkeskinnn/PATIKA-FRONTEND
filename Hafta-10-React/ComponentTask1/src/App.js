window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector("nav").style.backgroundColor = "#355592";
    } else {
      document.querySelector("nav").style.backgroundColor = "transparent";
    }
  }
  
 