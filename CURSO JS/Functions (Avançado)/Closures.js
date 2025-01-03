const nome = "luiz";

const falaNome = () => {
    console.log(nome);
}

function usaFalaNome(){
    const nome = "victor"
    falaNome(nome);
}

usaFalaNome()