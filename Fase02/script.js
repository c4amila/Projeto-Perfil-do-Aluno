const galeria = document.querySelectorAll('.img');
const botaoProx = document.getElementById('prox');
const botaoVoltar = document.getElementById('voltar');

function mostrarImagem(iamgemAtual){
    for (let i = 0; i < galeria.length; i++) {
        if (i === iamgemAtual) {
            galeria[i].classList.add('principal');
        }else{
            galeria[i].classList.remove('principal');
        } 
    }
}

let ind = 0;

botaoProx.addEventListener('click', () => {
    ind = (ind + 1) % galeria.length;
    mostrarImagem(ind);
})

botaoVoltar.addEventListener('click', () => {
    ind = (ind - 1 + galeria.length) % galeria.length;
    mostrarImagem(ind);
})