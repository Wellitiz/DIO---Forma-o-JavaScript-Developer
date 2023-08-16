const gasolina = 5.15;
const etanol = 4.75;
const medG = 12;
const medE = 8;
const tipoC = "G";
let dis = 6500;

if (tipoC === "G") {
  let km = dis / medG;
  let valor = km * gasolina;
  console.log(valor.toFixed(2));
} else {
  let km = dis / medE;
  let valor = km * etanol;
  console.log(valor.toFixed(2));
}

