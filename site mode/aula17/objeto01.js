let a1 = ['José', 18, 80.5] //Array

let a2 = {nome: 'Luiz', idade: 20, peso: 84.5, engordar(p){
    console.log('Engordou')
    this.peso += p
}} //Object

a2.engordar(2)

console.log(a1)
console.log(a2)