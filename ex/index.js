const produto = {
    nome: 'Caneta',
    preco: 1.95,
    desconto: 0.05
}

function clone(obj) {
    return { ...obj }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Lapis'

console.log(produto, novoProduto)