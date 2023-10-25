function toggleMenu() {
    document.getElementById("gridBtn").classList.toggle("open");
    document.getElementById("listsBtn").classList.toggle("open");
    document.getElementById("defgridview").classList.toggle("open");
  }
  
  const xo = document.getElementById("gridBtn");
  xo.onclick = toggleMenu;
  
  const ox = document.getElementById("listsBtn");
  ox.onclick = toggleMenu;
  
  var viewtype = "O";
  var ww = window.innerWidth;
  
  if (ww >= 592 && ww <= 991) {
    toggleMenu();
    viewtype = "M";
  }
  
  function checkWidth() {
    ww = window.innerWidth;
    if (ww >= 592 && ww <= 991) {
      if (viewtype != "M") {
        toggleMenu();
        viewtype = "M";
      }
    } else {
      if (viewtype == "M") {
        toggleMenu();
        viewtype = "O";
      }
    }
  }