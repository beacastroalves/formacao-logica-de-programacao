/*
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos
*/

/*
## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
*/

class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "atacou";
    }
    console.log(`O ${this.tipo} ${this.nome} tem ${this.idade} anos e atacou usando ${ataque}`);   
  }
}

const mago = new heroi("Dumbledore", 116, "mago");
const guerreiro = new heroi("Goku", 30, "guerreiro");
const monge = new heroi("Aang", 12, "monge");
const ninja = new heroi("Jack Chan", 27, "ninja");

mago.atacar(); // O mago Dumbledore tem 2000 anos e atacou usando magia
guerreiro.atacar(); // O guerreiro Goku tem 30 anos e atacou usando espada
monge.atacar(); // O monge Aang tem 12 anos e atacou usando artes marciais
ninja.atacar(); // O ninja Jack Chan tem 27 anos e atacou usando usou shuriken