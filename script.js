const iniciar = document.querySelector("button")
const select = document.querySelector("select")
const time = document.getElementById("tempo")

const status = document.querySelector("#status")
const som = new Audio("beep.mp3")

iniciar.addEventListener("click",pegarElemento)
function pegarElemento(){
   

  

    let tempo;


    switch(select.value){
        case "pizza" :
        tempo = 35
        break;

        case "hamburger" :
        tempo = 25
        break;

        case "pipoca" :
        tempo = 15
        break;

        case "cafe" :
        tempo = 10 
        break;
    }
    iniciar.innerHTML = "Executando..."
    iniciar.disabled = true
    status.innerHTML = "🔥Aquecendo..."
    
    time.innerHTML = tempo;
    let contador = setInterval(() => {
    time.innerHTML = tempo;

    tempo--;

    if (tempo < 0) {
        clearInterval(contador);
        time.innerHTML = "0";
        status.innerHTML = "Está Pronto! ✅";
        som.play()
        iniciar.innerHTML = "Iniciar"
        iniciar.disabled = false
    
    }
}, 1000);

    

}

