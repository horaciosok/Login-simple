
document.querySelector("#nueva-cuenta").addEventListener("click", act)
document.querySelector("#iniciar").addEventListener("click", act)
function act(){
    document.querySelector(".cont-login").classList.toggle('log-active')
    document.querySelector(".cont-registro").classList.toggle('registro-active')
    
}