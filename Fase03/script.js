//CARROSSEL DE IMAGENS
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
//-----

//MOVIMENTO DAS SETAS
function mover(botao, direcao) {
    const li = botao.parentElement;//pega elemento pai
    const ul = li.parentElement;

    if(direcao === 'sobe' && li.previousElementSibling){//pega o irmao anterior
        ul.insertBefore(li, li.previousElementSibling);//insere nó antes
    }else if(direcao === 'desce' && li.nextElementSibling){
        ul.insertBefore(li.nextElementSibling, li);
    }
}
//-----

//ADICIONAR NOVAS UCS e ORDENAÇÃO DA LISTA COM SETAS 
function addNovaUc() {
    const uc = prompt('Digite sua nova UC: ');
    if (uc) {
        const lista = document.getElementById('lista');
        const li = document.createElement('li');
        const text = document.createTextNode(uc + ' ');
        li.appendChild(text);
        
        //setas
        const botaoSobe = document.createElement('button');
        botaoSobe.innerHTML = '&#8679;';
        const botaoDesce = document.createElement('button');
        botaoDesce.innerHTML = '&#8681;';

        botaoSobe.addEventListener('click', function(){
            mover(this, 'sobe');
        });
        botaoDesce.addEventListener('click', function(){
            mover(this, 'desce');
        });

        //add os botoes
        li.appendChild(botaoSobe);
        li.appendChild(botaoDesce);
        lista.appendChild(li); // poe o li na lista

    }
}
//----

//VALIDANDO CPF E EMAIL
document.getElementById('cpf').addEventListener('blur', function (){
    const cpf = this.value;
    const modeloCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if(!modeloCpf.test(cpf)){
        alert('Cpf inválido, utilize a formatação correta!');
    }
});

document.getElementById('email').addEventListener('blur', function (){
    const email = this.value;
    const modeloEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!modeloEmail.test(email)){
        alert('email inválido, utilize o formato correto!');
    }
});
//----

//ADICIONAR MAIS TEXTO NA DESCRIÇÃO
function addDesc() {
    const campo = document.getElementById('novaDesc');
    const text = campo.value.trim();
    if(text){
        const descricao = document.getElementById('descricao');
        descricao.innerHTML += ' ' + text;
        input.value = ' ';
    }
}
//----