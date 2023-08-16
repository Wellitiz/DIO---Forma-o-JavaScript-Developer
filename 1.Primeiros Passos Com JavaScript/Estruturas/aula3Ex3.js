const pagamento = "3x";
const preço = 100;

if (pagamento === "vista") {
  const final = preço - (preço / 100) * 10;
  console.log(final);
} else if (pagamento === "pix") {
  const final = preço - (preço / 100) * 15;
  console.log(final);
} else if (pagamento === "2x") {
  console.log(preço);
} else {
    const final = preço + (preço / 100) * 10;
    console.log(final);
}


class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
  }
}

function descreverPessoa(pessoa) {
  console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
}

const renan = new Pessoa('Renan', 30);
console.log(descreverPessoa(renan));