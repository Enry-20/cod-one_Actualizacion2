let enlace= document.getElementsByClassName("liga1");
function preesme(){
  window.location.href="https://getbootstrap.com/docs/4.5/components/collapse/"
}
enlace.onclick= preesme;
function scrolled(){
  let fondo= window.pageYOffset
  if(fondo>770){document.getElementById("navbar").style.background="black"}
  else{document.getElementById("navbar").style.background="none"}
}
window.addEventListener("scroll", scrolled);



// Window.sr = ScrollReveal();
// sr.reveal("#navbar", {
//   duration: 2000,
//   origin: "bottom"
// });
// window.onscroll= function(){slowdown}
// // let navegation= document.getElementById("navbar")
// // let cuerpo=document.querySelectorAll("body")

// function slowdown(){
//   if( document.nav.scrollTop>80 || document.body.scrollTop>80){
//     document.getElementById("navbar2").style.background= "black"
//     document.getElementById("navbar2").style.padding= "35px"
//   }
//   else { document.getElementById("navbar2").style.background="none"
// document.getElementById("navbar2").style.padding= "0px"}
// }

