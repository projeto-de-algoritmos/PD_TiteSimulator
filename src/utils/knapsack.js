export const knapsack = (players, budget) => {
  // Inicializa a matriz de resultados com zeros
  let solution = [];
  for (let i = 0; i <= players.length; i++) {
    solution.push(Array(budget + 1).fill(0));
  }

  // Loop para preencher a matriz de resultados
  for (let i = 1; i <= players.length; i++) {
    for (let j = 1; j <= budget; j++) {
      // Se o atleta atual não pode ser colocado na mochila, 
      // o valor de sua habilidade é zero
      if (players[i - 1].value > j) {
        solution[i][j] = solution[i - 1][j];
      } else {
        // Caso contrário, a habilidade é a máxima entre
        // a habilidade do atleta anterior e a habilidade deste atleta mais a habilidade da mochila restante
        solution[i][j] = Math.max(solution[i - 1][j], solution[i - 1][j - players[i - 1].value] + players[i - 1].overall);
      }
    }
  }

  return solution;
}

export const getBestTeam = (players, budget) => {
  const solution = knapsack(players, budget);

  let n = players.length;
  let M = budget;
  let selectedPlayers = [];
  while (n !== 0) {
    if (solution[n][M] !== solution[n - 1][M]) {
      selectedPlayers.push(players[n - 1].name);

      M = M - players[n - 1].value;
    }

    n--;
  }

  return selectedPlayers;
} 