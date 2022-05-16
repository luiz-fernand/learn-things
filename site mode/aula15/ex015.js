let num = [5,4,6]

console.log(`Nosso array é: ${num}`)
console.log(`E seu primeiro valor é: ${num[0]}`)

num[3] = 7      //Identifica que o indice não existe e adiciona automaticamente

console.log(`Nosso array agora é: ${num}`)

num.push(1)     //Comando para adicionar um numero no próximo indice (adicionando um novo)

console.log(`Nosso array de novo é: ${num}`)
console.log(`Nosso array tem o tamanho de: ${num.length}`)  //Mostra o tamanho do vetor

num.sort()      //Organiza o vetor em ordem crescente

console.log(`Nosso array se tornou: ${num}`)

for(var n = 0; n < num.length; n++) console.log(`Lendo a linha (${n}) do array: ${num[n]}`) //Maneira comum
for(let pos in num) console.log(`Lendo novamente a linha (${pos}) do array: ${num[pos]}`) //Maneira especifica

console.log(`A busca retornou: ${num.indexOf(7)}`)  //Pesquisa se o valor existe no array, caso sim, ele retorna sua posição, caso não, ele retorna -1