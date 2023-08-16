class carro {
    marca; 
    cor; 
    gasto;

    constructor (marca,cor,gasto) {
        this.marca = marca;
        this.cor = cor;
        this.gasto = gasto;
    }

    calcularCusto (distancia, preco) {
        return distancia * this.gasto * preco;
    }


}

const gol = new carro ('Fiate', 'Vermelho', 1/15);
console.log(gol);
console.log(gol.calcularCusto(89,5.6).toFixed(2));