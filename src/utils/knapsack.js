export function knapsack(atletas, valorMercado) {
  // Inicializa a matriz de resultados com zeros
  let solution = [];
  for (let i = 0; i <= atletas.length; i++) {
    solution.push(Array(valorMercado + 1).fill(0));
  }

  // Loop para preencher a matriz de resultados
  for (let i = 1; i <= atletas.length; i++) {
    for (let j = 1; j <= valorMercado; j++) {
      // Se o atleta atual não pode ser colocado na mochila, 
      // o valor de sua habilidade é zero
      if (atletas[i - 1].valorMercado > j) {
        solution[i][j] = solution[i - 1][j];
      } else {
        // Caso contrário, a habilidade é a máxima entre
        // a habilidade do atleta anterior e a habilidade deste atleta mais a habilidade da mochila restante
        solution[i][j] = Math.max(solution[i - 1][j], solution[i - 1][j - atletas[i - 1].valorMercado] + atletas[i - 1].habilidade);
      }
    }
  }

  // Retorna o maior valor de habilidade possível
  return solution[atletas.length][valorMercado];
}