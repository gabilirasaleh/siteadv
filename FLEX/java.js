
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`; // Correção: Adicionar aspas invertidas (`) para interpolar a variável idx e corrigir a sintaxe.
}

setInterval(carrossel, 1800);
sss