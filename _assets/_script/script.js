const qS = (el) => document.querySelector(el);
const qSAll = (el) => document.querySelectorAll(el);

qS("#calc").addEventListener("click", calculoIMC);

qS("#reset").addEventListener("click", resetCalc);

function calculoIMC() {
  let nome = qS("#nome").value;
  let altura = qS("#altura").value;
  let peso = qS("#peso").value;
  if (nome !== "" && altura !== "" && peso !== "") {
    let imc = (peso / (altura ^ 2)).toFixed(2);
    let resultado = "";
    if (imc < 18.5) {
      resultado = "Abaixo do Peso";
    } else if (imc >= 18.5 && imc < 25) {
      resultado = "Peso Normal";
    } else if (imc >= 25 && imc < 30) {
      resultado = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
      resultado = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 40) {
      resultado = "Obesidade Grau II";
    } else if (imc >= 40) {
      resultado = "Obesidade Grau III ou Mórbida";
    }
    qS(".resultado").style.display = "flex";
    qS(".resultado").innerHTML = `${nome} seu IMC é: ${imc} <br> ${resultado}`;
  } else {
    qS(".resultado").innerHTML = "Preencha todos os campos";
  }
}

function resetCalc() {
  qS("#nome").value = "";
  qS("#altura").value = "";
  qS("#peso").value = "";
  qS(".resultado").innerHTML = "";
  qS(".resultado").style.display = "none";
}
