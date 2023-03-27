function openObj(evt, objName) {
  let x = document.getElementsByClassName("obj");
  let i, tablinks;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" grey-bc", ""); 
  }
  document.getElementById(objName).style.display = "block";
  evt.currentTarget.className += " grey-bc";
}