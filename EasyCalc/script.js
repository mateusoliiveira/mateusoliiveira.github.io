function calcularCombustivel() {
  let x = document.getElementById("precoLitro").value;
  let y = document.getElementById("consumoL").value;

  Number(x)
  Number(y)
  
  let resultadoCombustivel = x / y

  document.getElementById("resultadoComb").innerHTML = resultadoCombustivel


}