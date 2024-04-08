const data = new Date ('1987-04-21 00:00:00')
const diaSemana = data.getDay();

switch(diaSemana){
case 0:
    diaSemanaTxt = 'Domingo';
    break;
case 1: 
    diaSemanaTxt = 'Segunda';

case 2:
    diaSemanaTxt = 'Terça';
    break;
case 3: 
    diaSemanaTxt = 'Quarta';

case 4:
    diaSemanaTxt = 'Quinta';
    break;
case 5: 
    diaSemanaTxt = 'Sexta';

case 6:
    diaSemanaTxt = 'Sábado';
    break;
}

console.log(diaSemanaTxt)


// A estrutura feita com switch é igual a essa estrutura realizada com if e else

// if(diaSemana === 0){
//     diaSemanaTxt = 'Domingo';
// } else if(diaSemana === 1){
//     diaSemanaTxt = 'Segunda';
// } else if(diaSemana === 2){
//     diaSemanaTxt = 'Terça';
// } else if(diaSemana === 3){
//     diaSemanaTxt = 'Quarta';
// } else if(diaSemana === 4){
//     diaSemanaTxt = 'Quinta';
// } else if(diaSemana === 5){
//     diaSemanaTxt = 'Sexta';
// } else if(diaSemana === 6){
//     diaSemanaTxt = 'Sábado';
// } 

