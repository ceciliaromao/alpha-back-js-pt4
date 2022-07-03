document.getElementById('btn').addEventListener('click', Draw);

function Draw() {
  const result = document.querySelector("#result");
  const min = Math.ceil(parseFloat(document.querySelector("#min").value.replace(",", ".")));
  const max = Math.floor(parseFloat(document.querySelector("#max").value.replace(",", ".")));

  if (isNaN(min)) {
    alert('Valor inválido para o valor mínimo.');
    return false;
  }

  if (isNaN(max)) {
    alert('Valor inválido para o valor máximo.');
    return false;
  }

  if (min >= max) {
    alert('Valor máximo deve ser maior que o valor máximo.');
    return false;
  }

  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  result.textContent = 'Valor sorteado: ' + num + '.';
}