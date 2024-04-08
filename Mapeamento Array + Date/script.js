// cria uma função que atualiza o relogia a cada 1000ms atraves do setInterval

function atualizarRelogio(){
var hoje = new Date();

var diaDaSemana = hoje.getDay();
var dia = hoje.getDate()
var mes = hoje.getMonth()
var ano = hoje.getFullYear()
var horas = hoje.getHours()
var minutos = hoje.getMinutes()

// se minutos for menos que 10, minutos vai receber '0' + o valor atual
minutos < 10 ? minutos = '0' + minutos : minutos;

// Array para mapear os números de dia da semana para os nomes correspondentes
var nomesDosDias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

var nomesDosMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


var exibir = `${(nomesDosDias[diaDaSemana])}, ${dia} de ${(nomesDosMeses[mes])} de ${ano} ${horas}:${minutos}`

const div = document.getElementById('dateTime')
    div.innerHTML = `<h1>${exibir}</h1>`;
}

setInterval(atualizarRelogio, 1000);
