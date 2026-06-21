const button = document.querySelector(".botao")

button.addEventListener("click" , sortear)

function sortear() {

    const valor1 = Math.ceil(document.querySelector(".primeiro").value)
    const valor2 = Math.floor(document.querySelector(".max").value)
    if(valor2>=valor1){
        alert("O Primeiro Número Não Pode Ser Menor Que O Segundo" )
    }
    else{
        const result = Math.floor(Math.random() * (valor2 - valor1 + 1)) +valor1
        alert(result)
        
    }
}