const p = document.getElementById("status")
const input = document.querySelector("input")
const segundo = document.querySelector(".num2")
const botao = document.querySelector("button")
botao.addEventListener("click",procurar)




const contacts =  [ {name: `Miguel`, number: `219836534525` },
                    {name: `Júlio`|| `Julio`, number: `219836534526` },
                    {name: `Eduardo`, number: `219836534527` },
                    {name: `Diego`, number: `219836534528` }

]
function procurar() {
    for (let i = 0; i < contacts.length; i++) {

        if (
            input.value.toLowerCase() === contacts[i].name.toLowerCase() ||
            segundo.value === contacts[i].number
        ) {
            p.innerHTML = `Aqui Está O Contato Procurado<br>
            Nome: ${contacts[i].name}<br>
            Número: ${contacts[i].number}`;
            return;
        }
    }

    p.innerHTML = "Contato Não Encontrado,tente sem der espaços ou adicionar caracteres especiais";
}

