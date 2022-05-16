//Sequencia
console.log('Peso 1')
console.log('Peso 2')
console.log('Peso 3')

//Repetição While -> Compara antes de executar
var c = 1
while (c <= 3) {
    console.log(`Passo ${c}`)
    c++ // c = c + 1
}

//Repetição Do While -> Executa antes de comparar e repetir
do {
    console.log(`Do passo ${c}`)
    c++
} while (c <= 6)

//Repetição For -> Inicializa uma var, compara antes de executar e incrementa a cada repetição
for (var c1 = 1; c1 <= 10; c1++) {
    console.log(`For passo ${c1}`)
}