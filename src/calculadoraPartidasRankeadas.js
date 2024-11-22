// # 2️⃣ Calculadora de partidas Rankeadas #
/***O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
*/

/* - Objetivo:
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/


function getMatchBalance(victory, defeat) {
  return victory - defeat
}

function getPlayerLevel(balance) {
  if (balance <= 10) {
    return "Ferro"
  } else if (balance >= 11 && balance <= 20) {
    return "Bronze"
  } else if (balance >= 21 && balance <= 50) {
    return "Prata"
  } else if (balance >= 51 && balance <= 80) {
    return "Ouro"
  } else if (balance >= 81 && balance <= 90) {
    return "Diamante"
  } else if (balance >= 91 && balance <= 100) {
    return "Lendário"
  }

  return "Imortal"
}

function printPlayerLevel(playerName, victory, defeat) {
  const balance = getMatchBalance(victory, defeat)
  console.log(`${playerName} tem de saldo de ${balance} e está no nível ${getPlayerLevel(balance)}`)
}


printPlayerLevel("Ace", 11, 1)      // Ace tem de saldo de 10 e está no nível Ferro
printPlayerLevel("Bear", 12, 1)     // Bear tem de saldo de 11 e está no nível Bronze
printPlayerLevel("Boner", 22, 1)    // Boner tem de saldo de 21 e está no nível Prata
printPlayerLevel("Elmo", 52, 1)     // Elmo tem de saldo de 51 e está no nível Ouro
printPlayerLevel("Jedi", 82, 1)     // Jedi tem de saldo de 81 e está no nível Diamante
printPlayerLevel("Pickle", 92, 1)   // Pickle tem de saldo de 91 e está no nível Lendário
printPlayerLevel("Turtle", 102, 1)  // Turtle tem de saldo de 101 e está no nível Imortal