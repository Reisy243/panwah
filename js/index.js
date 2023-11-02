function miFuncionRecarga() {
    
    var altura = document.documentElement.clientHeight;
    document.getElementById("infodiv").style.top = altura / 3.5 + "px";
    
    
  }
  
const btnSwitch = document.querySelector('#switch');
var actheme = localStorage.getItem('theme');




if (actheme == null){
    document.body.setAttribute('theme','dark')
}else{
    document.body.setAttribute('theme',actheme);
}




  window.onload = miFuncionRecarga;
  var lightcontrol = document.getElementById("lightcontrol");
  var lightavar = 0;
  lightcontrol.addEventListener("click", function() {
    
    var catto = document.body.getAttribute('theme');
    
    if(catto == "dark"){
        document.body.setAttribute('theme','light');
        localStorage.setItem('theme', 'light');
        console.log(catto);
        document.getElementById("barracheck").style.left = 40 + "px";
        document.getElementById("txtcheck").textContent = "On";
    }
    if (catto == "light"){
        document.body.setAttribute('theme','dark');
        localStorage.setItem('theme', 'dark');
        console.log(catto);
        document.getElementById("barracheck").style.left = 0 + "px";
        document.getElementById("txtcheck").textContent = "Off";
    }


    



  });