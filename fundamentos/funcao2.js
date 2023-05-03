//aramzenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazendando uma funcao arrow em variavel

const soma = (a, b) => {
    return a +b
}

console.log(soma(2, 3))

// retorno implicito

const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))


const imprimirr2 = a => console.log(a)
imprimirr2('legal!!')
