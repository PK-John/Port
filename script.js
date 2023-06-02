var typed = new Typed(".multiplo-texto", { 
    strings : ["Estudante de Programação", "Desenvolvedor Web"] ,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

var logo = window.document.getElementById('logo')
var sobre = window.document.getElementById('sobre')

logo.addEventListener('click', refresh)
sobre.addEventListener('click', descricao)

function refresh(){
    window.location.reload()
}

function descricao(){
    document.body.innerHTML = document.getElementById("body2").innerHTML;

}