soma()

function soma() {
    //Variaveis
let vitoria = 25
let derrota = 0
// Operadores
var soma = vitoria - derrota

//Laço de repetição
if(soma <= 10){
    console.log("O Herói tem saldo  de " + (soma), "Vitórias e está no nivel de Ferro")
}else if(soma >=11 && soma <= 20){
    console.log("O Herói tem saldo de " + (soma), "Vitórias e está no nivel de Bronze")
}else if(soma >= 21 && soma <= 50){
    console.log("O Herói tem saldo  de " + (soma), "Vitórias e está no nivel de Prata")
}else if(soma >= 51 && soma <= 80){
    console.log("O Herói tem saldo  de " + (soma), "Vitórias e está no nivel de Ouro")
}else if(soma >= 81 && soma <= 90){
    console.log("O Herói tem saldo  de " + (soma), "Vitórias e está no nivel de Diamante")
}else if (soma >= 91 && soma <= 100){
    console.log("O Herói tem saldo de  " + (soma), "Vitórias e está no nivel de Lendário")
}else{
    console.log("O Herói tem saldo de " + (soma), "Vitórias e está no nivel de Imortal")
}
}