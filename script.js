


  const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação para estilizar páginas web",
            "Um software para edição de imagens",
            "linguagem de programação utilizada para criar interatividade em páginas web",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o principal objetivo do JavaScript em uma página web?",
        respostas: [
            "Alterar o layout da página",
            "Realizar cálculos matemáticos complexos",
            "Adicionar interatividade e dinamismo à página",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "var myVar = 10;",
            "variável myVar = 10;",
            "variable myVar = 10;",
        ],
        correta: 0
    },
    {
        pergunta: "Qual destas opções representa uma estrutura de controle de fluxo em JavaScript?",
        respostas: [
            "if-else",
            "loop-while",
            "switch-case",
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um estilo de codificação",
            "Um operador lógico",
            "Um bloco de código reutilizável que pode ser executado quando necessário",
        ],
        correta: 2
    },
    {
        pergunta: "Como podemos incluir um comentário de linha em JavaScript?",
        respostas: [
            "// Este é um comentário de linha",
            "' Este é um comentário de linha",
            "# Este é um comentário de linha",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador lógico 'E' em JavaScript?",
        respostas: [
            "&&",
            "||",
            "!",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método em JavaScript utilizado para selecionar um elemento HTML pelo seu ID?",
        respostas: [
            "document.querySelector()",
            "document.getElementById()",
            "document.getElement()",
        ],
        correta: 1
    },
    {
        pergunta: "O que é DOM em JavaScript?",
        respostas: [
            "Uma função built-in para cálculos matemáticos",
            "O modelo de objetos do documento que representa a estrutura da página web",
            "Um método para declaração de variáveis",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
        respostas: [
            "for (i = 0; i < 5; i++)",
            "for (i = 0; i <= 5; i++)",
            "for (i = 1; i <= 5; i++)",
        ],
        correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }