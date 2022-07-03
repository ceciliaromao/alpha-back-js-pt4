document.getElementById('btn').addEventListener('click', calcIMC);

function calcIMC() {
  const result = document.querySelector('#result');
  const weight = parseFloat(document.querySelector('#weight').value.replace(",", "."));
  const height = parseFloat(document.querySelector('#height').value.replace(",", ".")) / 100;
  
  if (isNaN(weight) || weight <= 0) {
    alert('Valor inválido para o seu peso.');
    return false;
  }
  if (isNaN(height) || height <= 0) {
    alert('Valor inválido para a sua altura.');
    return false;
  }
  
  const imc = weight / (height * height);
  let imcInfo = '';
  if (imc < 18.5) {
    imcInfo = 'abaixo do peso';
  } else if (imc < 24.9) {
    imcInfo = 'peso normal';
  } else if (imc < 29.9) {
    imcInfo = 'sobrepeso';
  } else {
    imcInfo = 'obesidade';
  }

  result.textContent = 'IMC: ' + imc.toFixed(2) + ', classificado como ' + imcInfo + '.';
}  