
for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        animacaoBotao(buttonInnerHTML);
    })
}


document.addEventListener("keydown", function pegaletra(letra) {

    var letraComparar = letra.key;
    //console.log(letraComparar);
    makeSound(letra.key);
    animacaoBotao(letra.key);

})


function makeSound(key) {
    switch (key) {
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    
        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    
        case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    
        case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    
        case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    
        case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    
        case "l":
        var kickb = new Audio("sounds/kick-bass.mp3");
        kickb.play();
        break;    


        default: 
        console.log("Letra não produz som");
        break;
    }
}


function animacaoBotao(botaoApertado) {

var ativarbotao = document.querySelector("." + botaoApertado);

ativarbotao.classList.add("pressed");

setTimeout(function () {
    ativarbotao.classList.remove("pressed")
}, 100);
//console.log(ativarbotao);

}