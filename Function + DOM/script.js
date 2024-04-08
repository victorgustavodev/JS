function exec(){
    verificarInput();
    printarNome();
}

function verificarInput() {
    var input = document.getElementById('nome').value;
    var div = document.getElementById('div');

    input === '' ? input = true : input = false

    input ? div.classList.add('red') : div.classList.remove('red'), div.classList.add('green');

}

function printarNome(){
    const nome = document.getElementById('nome').value;
    const p = document.getElementById('p');
    const div = document.getElementById('div')

    p.innerHTML = `${nome}`

    p.innerHTML = div.classList.contains('red') ? 'Preencha o campo acima! 🕷️' : `Seja bem vindo! <span> ${nome} <span> 👋` ;

}


