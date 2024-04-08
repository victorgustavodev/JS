let array = [];

function prevent(evento){
    evento.preventDefault();
}

function capturar(evento){
    prevent(evento);

    nome = document.getElementById('nome').value;
    sobrenome = document.getElementById('sobrenome').value;
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    resultado = document.getElementById('resultado');
    
    array.push(
        {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        }
    )
    if(nome === '' || sobrenome === '' || peso === '' || altura === ''){
        console.log('vazio');

    } else {
        resultado.innerHTML += `<p>${nome} ${sobrenome}, ${peso} kg, ${altura} m </p>`
        console.log(array);
    }
}

