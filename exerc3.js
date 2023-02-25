const faturamentoDiario = [22174.1664, 24537.6698, 26139.6134, 0.0, 0.0, 26742.6612, 0.0, 42889.2258, 46251.174, 11191.4722, 0.0, 0.0, 3847.4823, 373.7838, 2659.7563, 48924.2448, 18419.2614, 0.0, 0.0, 35240.1826, 43829.1667, 18235.6852, 4355.0662, 13327.1025, 0.0, 0.0, 25681.8318, 1718.1221, 13220.495, 8414.61];

let minFaturamentoDiario = faturamentoDiario[0];
let maxFaturamentoDiario = faturamentoDiario[0];
let somaFaturamentoDiario = faturamentoDiario[0];
let countFaturamentoDiario = 1;

for (let i = 1; i < faturamentoDiario.length; i++) {
  const valorFaturamentoDiario = faturamentoDiario[i];
  
  if (valorFaturamentoDiario < minFaturamentoDiario) {
    minFaturamentoDiario = valorFaturamentoDiario;
  }
  
  if (valorFaturamentoDiario > maxFaturamentoDiario) {
    maxFaturamentoDiario = valorFaturamentoDiario;
  }
  
  if (valorFaturamentoDiario > 0) {
    somaFaturamentoDiario += valorFaturamentoDiario;
    countFaturamentoDiario++;
  }
}

const mediaFaturamentoDiario = somaFaturamentoDiario / countFaturamentoDiario;

let diasAcimaMediaFaturamentoDiario = 0;

for (let i = 0; i < faturamentoDiario.length; i++) {
  const valorFaturamentoDiario = faturamentoDiario[i];
  
  if (valorFaturamentoDiario > mediaFaturamentoDiario) {
    diasAcimaMediaFaturamentoDiario++;
  }
}

console.log(`Menor faturamento diário: ${minFaturamentoDiario}`);
console.log(`Maior faturamento diário: ${maxFaturamentoDiario}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaMediaFaturamentoDiario}`);