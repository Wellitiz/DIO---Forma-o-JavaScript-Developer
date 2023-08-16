

function escrevaMeuNome (nome) {
    return 'meu nome é ' + nome;
};



function verificarMaioridade (idade) {
    if (idade >= 18){
        console.log(escrevaMeuNome('Wellington') + ' e eu sou maior de Idade');
    } else {
        console.log('Menor de idade');
    }
}

verificarMaioridade (19);