//objeto mochila de um aluno
const mochilaAluno = [
    'cartão de crédito',
    'chaves',
    'dinheiro',
    'escova de dente',
    'alcool gel'
]
//pega o ID do elemento no html
let resultado = document.getElementById('incrementar');
//laço de repetição que percorre o indice da variável mochilaAluno
for (let index = 0; index < mochilaAluno.length; index++ ){
    // item pega o indice atual da iteração e coloca na posição dentro da mochilaAluno
   let item = mochilaAluno[index]
    console.log(item)
    //cria um elemento <p></p> a cada interação
    let criar = (document.createElement("p")) 
    //dentro deste elemento criado é alterado a propriedade innerHTML com o nome do item
    criar.innerHTML= item
    //acrescenta como filho direto o elemento criado com os atributos constituidos
    resultado.appendChild(criar)
}
