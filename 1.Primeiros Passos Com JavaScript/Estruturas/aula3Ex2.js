const peso = 94;
const altura = 1.68;
const IMC = (peso / (altura * altura))


if (IMC <= 18.5) {
    console.log('Abaixo do Peso')
} else if (IMC <= 25) {
    console.log('Peso Ideal')
} else if (IMC <= 30) {
    console.log('Acima do Peso')
} else if (IMC <= 40) {
    console.log('Obeso')
} else if (IMC > 40) {
    console.log('Obesidade Grave')
}

console.log(IMC.toFixed(2))

