//easter egg, com créditos
//aqui é onde fica as mensagens do console.
console.group("%c Creditos","font-size: 1.3em;");
  console.group("%c Categorias Gerais","font-size: 1.1em;");
  console.log("%c > Javascript: " + "%c Rafael Goudinho, Mateus Soares.","color: #FFD100;","color: gray;");
  console.log("%c > html: " + "%c Rafael Goudinho, Mateus Soares.","color: orange;","color: gray;");
  console.log("%c > css: " + "%c Mateus Soares, Rafael Goudinho.","color: cyan;","color: gray;");
  console.groupEnd();
  console.group("%c Categorias específicas","font-size: 1.1em;");
  console.log("%c > Javascript geral: " + "%c Rafael Goudinho.","color: #158335;","color: gray;");
  console.log("%c > html geral: " + "%c Rafael Goudinho.","color: #158335;","color: gray;")
  console.log("%c > css geral: " + "%c Mateus Soares.","color: #158335;","color: gray;");
  console.log("%c > Javascript final: " + "%c Rafael Goudinho, Mateus Soares.","color: #9c0000;","color: gray;");
  console.log("%c > html final: " + "%c Rafael Goudinho, Mateus Soares.","color: #9c0000;","color: gray;");
  console.log("%c > css final: " + "%c Rafael Goudinho.","color: #9c0000","color: gray;");
  console.log("%c > debug geral: " + "%c Rafael Goudinho.","color: #6200b0;","color: gray;");
  console.log("%c > controle de git e github: " + "%c Rafael Goudinho.","color: #6200b0;","color: gray;");
  console.log("%c > comentarios e documentacao: " + "%c Rafael Goudinho","color: #6200b0;","color: gray;")
  console.log("%c > perguntas: " + "%c Maria Helena.","color: #6200b0;","color: gray;");
  console.groupEnd();
  console.groupEnd();
  //Copyright 
  console.warn("todos os diretos reservados a" + "%c Rafael Goudinho Pereira Mariano","color: gray;")
  
//lista de perguntas 
// se quiser alterar as perguntas, mude essa parte.
const questoes = [
  {
    pergunta: "1. O que é o Sistema Nervoso?",
    opcoes: ["O sistema que transporta sangue e nutrientes pelo corpo.",
    "O sistema que coordena as ações do corpo e transmite sinais pelo organismo",
    "O sistema que digere os alimentos e absorve os nutrientes."],
    dica: "essa é uma dica1",
    certa: 1 ,
  },
  {
    pergunta: "2 qual é a principal célula do sistema nervoso?",
    opcoes: ["Neurônio","Glóbulo Vermelho","Célula do Sangue"],
    dica: "essa é uma dica2",
    certa: 0 ,
  },
  {
    pergunta: "3. Qual é a função dos nervos?",
    opcoes: ["Bombear o sangue","Levar mensagens entre o corpo e o cérebro","Digerir os alimentos"],
    dica: "essa é uma dica3",
    certa: 1 ,
  },
  {
    pergunta: "4. Quais são as partes do Sistema Nervoso Central?",
    opcoes: ["Pulmões e Nariz","Coração e Artérias","Cérebro e Medula Espinhal"],
    dica: "essa é uma dica4",
    certa: 2,
  },
  {
    pergunta: "5. O que protege o cérebro?",
    opcoes: ["O Crânio","A coluna","As costelas"],
    dica: "essa é uma dica5",
    certa: 0 ,
  },
  {
    pergunta: "6. O que é o ato reflexo?",
    opcoes: ["Movimento lebto e planejado","Comando do coração","Reação rápida sem pensar"],
    dica: "essa é uma dica6",
    certa: 2 ,
  },
  {
    pergunta: "7. Qual parte controla o equilíbrio?",
    opcoes: ["Cerebelo","Estômago","Coração"],
    dica: "essa é uma dica7",
    certa: 0 ,
  },
  {
    pergunta: "8. O que a Medula Espinhal faz?",
    opcoes: ["Digere os alimentos","Produz sangue novo","Liga o Cérebro ao resto do corpo"],
    dica: "essa é uma dica8",
    certa: 2 ,
  },
  {
    pergunta: "9. Como se protege o Sistema Nervoso?",
    opcoes: ["Não bebendo água","Dormindo bem, e protegendo a cabeça","Comendo só doce"],
    dica: "essa é uma dica9",
    certa: 1,
  }
];
//variável guardando, o número da questão.
let questao = 0
//controle do tempo
let tick;
//botoes
const botoes = document.querySelectorAll(".botao");
//[extra] áudios 
const correto = new Audio("correto.mp3");
const errado = new Audio("errado.mp3");
const relogio = new Audio("relogio.mp3");
const dicaS = new Audio("tempo.mp3");
//dica
const aread = document.getElementById('dica');
//header e main
const header = document.getElementById('inicio');
const main = document.getElementById('princ');
//configurações 
main.style.display = 'none';
aread.style.display = 'none';
//iniciar 
function iniciar() {
  header.style.display = 'none';
  main.style.display = 'block';
  perguntar();
};
function perguntar() {
  //pega o elemento pergunta 
  const encontrar_pergunta = document.getElementById("pergunta");
  //troca o texto 
  encontrar_pergunta.innerText = questoes[questao].pergunta;
  //encontra os botões 
  //altera a questão 
  function alterar_quest() {
    const contador = document.getElementById('quest');
    let atual = questao + 1;
    contador.innerText = atual + "/" + questoes.length;
    //inicializa o tempo
    clearInterval(tick);
    tempo();
  };
  alterar_quest();
  //dica
  function mostrar_dica() {
    aread.innerText = "💡" + questoes[questao].dica;
    aread.style.display = 'block';
  };
  //tempo
function tempo() {
    clearInterval(tick);
    let tempo_r = 30;
    // Atualiza o visual logo no início para não começar em branco
    const cronom = document.getElementById('tempo');
    if (cronom) cronom.innerText = tempo_r;
    tick = setInterval(() => {
      tempo_r--;
      if (cronom) {
          cronom.innerText = tempo_r;
      }
      tocar_relogio();

      if (tempo_r <= 0) {
        clearInterval(tick);
        erro++
        dicaS.currentTime = 0;
        dicaS.play();
        setTimeout(() => {
          dicaS.pause();
        }, 1000);
        mostrarMensagem('tempo');
        mudar_classe();
        setTimeout(() => {
          voltar_classe();
        }, 2000);
        setTimeout(() =>{
          proxima_questao();
        }, 1000);
      };
      if (tempo_r === 15) {
        mostrar_dica();
        relogio.pause();
        dicaS.currentTime = 0;
        dicaS.play();
  setTimeout(() => {
    dicaS.pause();
  }, 1000);
      };
    }, 1000); // <--- Fechamento correto do setInterval aqui!
}

  //altera os botões para a sua respectiva opção 
  alterar_botoes(botoes);
  };
function alterar_botoes(botoes) {
  botoes[0].innerText = questoes[questao].opcoes[0]
  botoes[1].innerText = questoes[questao].opcoes[1]
  botoes[2].innerText = questoes[questao].opcoes[2]
}


//definindo a resposta correta 

function mudar_classe() {
  botoes.forEach(botao => {
    botao.classList.remove('opc-c','opc-e','neutro');
    botao.classList.add('opc-e');
    }
  );
  const resposta_certa = questoes[questao].certa;
  botoes[resposta_certa].classList.add('opc-c');
};
function voltar_classe() {
  botoes.forEach(botao => {
    botao.classList.remove('opc-c','opc-e');
    botao.classList.add('neutro');
    }
  );
}
function tocar_errado() {
  errado.currentTime = 0;
  errado.play();
};
function tocar_certo() {
  correto.currentTime = 0;
  correto.play();
};
function tocar_relogio() {
  relogio.play();
};
//declarando acertos e erros 
let acerto = 0
let erro = 0
//verificando se tá certo
 function checar_resposta(opcao_escolhida) {
   mudar_classe();
  if (opcao_escolhida === questoes[questao].certa) {
    tocar_certo();
    acerto++
    mostrarMensagem('correto');
  } else {
    tocar_errado();
    erro++
    mostrarMensagem('errado');
  }
  setTimeout(() =>{
    proxima_questao();
    voltar_classe();
  }, 2000);
}
 

function proxima_questao() {
  questao++;
  aread.style.display = 'none';
  if (questao < questoes.length) {
    perguntar();
  } else {
    console.log(acerto,erro)
    setTimeout(() => {
localStorage.setItem('totalA',acerto);
localStorage.setItem('totalE',erro);
window.location.href = "fim.html";
}, 1000)
  }
}

//mostrar mensagem de acerto e erro

function mostrarMensagem(resul) {
  const msg = document.getElementById('msg');
  msg.classList.remove('msg-c','msg-e','msg-t');
  if (resul === 'correto') {
    msg.classList.add('msg-c');
    msg.innerText = 'resposta correta! parabéns!';
  };
  if (resul === 'errado') {
    msg.classList.add('msg-e');
    msg.innerText = 'resposta icorreta, valeu a tentativa!';
  };
  if (resul === 'tempo') {
    msg.classList.add('msg-t');
    msg.innerText = 'Acabou o tempo!';
  };
  msg.style.display = 'block';
  setTimeout(() =>{
    msg.style.display = 'none';
  }, 2000);
};
