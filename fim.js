
//dando nome as informações recebidas 
let fimAc = localStorage.getItem("totalA");
let fimEr = localStorage.getItem("totalE");

//transferindo a página 
document.getElementById('acertos').textContent = fimAc;
document.getElementById('erros').textContent = fimEr;
function voltar() {
  window.location.href = "index.html";
}
