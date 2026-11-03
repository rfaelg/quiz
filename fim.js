
//dando nome as informações recebidas 
let fimAc = localStorage.getItem("totalA");
let fimEr = localStorage.getItem("totalE");
//detectando o main
const main = document.getElementById('main');
//outros elementos 
const result = document.getElementById('hd');
//transferindo a página 
document.getElementById('acertos').textContent = fimAc;
document.getElementById('erros').textContent = fimEr;
function voltar() {
  window.location.href = "index.html";
};
if (fimAc > fimEr) {
  main.style.boxShadow = '0px 0px 20px 10px var(--verde)';
  result.innerText = 'parabéns 🥳, continue assim!';
};
if (fimEr > fimAc) {
  main.style.boxShadow = '0px 0px 20px 10px var(--vermelho)';
  result.innerText = 'precisa melhorar!';
};
if (fimAc === fimEr) {
  main.style.boxShadow = '0px 0px 20px 10px #FFE100';
  result.innerText = 'por pouco, mas parabéns 🥳 !';
};
