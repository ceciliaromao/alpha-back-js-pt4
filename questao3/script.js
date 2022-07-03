document.getElementById('btn').addEventListener('click', Verify);

function Verify() {
  const num = parseFloat(document.querySelector("#num").value.replace(",", "."));
  const min = document.querySelector("#min");
  const max = document.querySelector("#max");

  if (isNaN(num)) {
    alert('Valor inválido!');
    return false;
  }

  min.textContent = 'Menor inteiro: ' + Math.floor(num) + '.';
  max.textContent = 'Maior inteiro: ' + Math.ceil(num) + '.';
} 