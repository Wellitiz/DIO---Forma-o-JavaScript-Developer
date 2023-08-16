class pessoa {
    nome; 
    peso; 
    altura;

    constructor (nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC () {
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC () {
        if (this.calcularIMC() <= 18.5) {
            return'Abaixo';
        } else if (this.calcularIMC() <= 25) {
            return'Ideal';
        } else if (this.calcularIMC() <= 30) {
            return'Acima';
        } else if (this.calcularIMC() <= 40) {
            return'Obeso';
        } else if (this.calcularIMC() > 40) {
            return'Obesidade Grave';
        }
    }
}

const jose = new pessoa ('Jose Araujo', 70, 1.75);
const wellington = new pessoa ('Wellington Martins', 58, 1.73);
const weslley = new pessoa ('Weslley Mattos', 77, 1.73);

console.log('Olá, me chamo ', jose.nome, 'e tenho',jose.calcularIMC().toFixed(2), 'de IMC, e meu peso esta', jose.classificarIMC());
console.log('Olá, me chamo ', wellington.nome, 'e tenho',wellington.calcularIMC().toFixed(2), 'de IMC, e meu peso esta', wellington.classificarIMC());
console.log('Olá, me chamo ', weslley.nome, 'e tenho',weslley.calcularIMC().toFixed(2), 'de IMC, e meu peso esta', weslley.classificarIMC());
