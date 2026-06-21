const button = document.querySelector(".botao");

button.addEventListener("click", sortear);

function sortear() {
  const valor1 = Math.ceil(document.querySelector(".primeiro").value);
  const valor2 = Math.floor(document.querySelector(".max").value);

  if (valor2 > valor1) {
    const result = Math.floor(Math.random() * (valor2 - valor1)) + valor1;
    alert(result);
  } else {
    alert("O Valor Minino Tem Que Ser MENOR Que O valor Máximo");
  }
}
