//* Aula Objetos e suas funcionalidades

//? Exercícios práticos

const estudante = {
    nome: 'Eduardo',
    sobrenome: 'Lima Boucault',
    matricula: 123456,
    notasSemestre: [8, 9, 10]
}

console.log(estudante)

estudante.modulo = 'Objetos'

console.log(estudante)

//? Imprimindo dados isolados

console.log('Nome do estudante' , estudante.nome)

console.log('Segunda nota do semestre' , estudante.notasSemestre[1])

//? Criando cópia do objeto original

const copiaEstudante = {...estudante}

//? Alterando valor propriedade nome

copiaEstudante.nome = "Astrodev"

console.log('Cópia do objeto com nome alterado' , copiaEstudante)

//? Nova nota adicionada

copiaEstudante.notasSemestre = [...
copiaEstudante.notasSemestre , 9] //* Método para adicionar elemento a cópia da array sem alterar original --> chamar objeto.propriedade = [...(spread) criando uma nova cópia da cópia e adiciona o novo elemento]

console.log('Cópia com nota nova adicionada' , copiaEstudante)

//? Alterando valor da propriedade módulo

copiaEstudante.modulo = "Python"

console.log('Cópia com módulo alterado' , copiaEstudante)

//? Criando novo array para adicionar os objetos como elementes deste array

const estudanteLabenu = []

estudanteLabenu.push(estudante)

estudanteLabenu.push(copiaEstudante)

console.log('Imprimindo array no console', estudanteLabenu , copiaEstudante)

//? Exercício de fixação

const carrinho = {
    nome: 'Eduardo' ,
    formaPagamento: 'Pix' ,
    endereco: 'Rua Caramelo Amarelo, 123'
}

console.log('Meu carrinho de compras:' , carrinho)

//? AQUI UTILIZAMOS O MÉTODO DE ADICIONAR NOVAS PROPRIEDADES COM NOVOS VALORES, NO CASO A CHAVE COMPRAS QUE É UMA ARRAY QUE GUARDA 3 ELEMENTOS QUE SÃO OBJETOS

carrinho.compras = [  
    {
        nome: 'Carne' ,
        preco: 50 ,
        quantidade: 2
    } ,
    {
        nome: 'Leite' ,
        preco: 3.20 ,
        quantidade: 2
    } ,
    {
        nome: 'Lâmina de barbear' ,
        preco: 10 ,
        quantidade: 1
    }
]

console.log('Minhas compras:' , carrinho.compras.length)

const carrinhoPresente = {...carrinho}

carrinhoPresente.nome = 'Lucas'

carrinhoPresente.formaPagamento = 'Carrinho Presente'

console.log('Meu carrinho:' , carrinho , '\nCarrinho para presente:' , carrinhoPresente)