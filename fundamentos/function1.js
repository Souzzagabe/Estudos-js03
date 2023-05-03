//funcao sem retronro
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSome(2, 3)
imprimirSoma(2)


//funçao com retorno
function soma(a, b = 1 ){
    return a +b

}

console.log(soma(2, 3))
console.log(soma(2))