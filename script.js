// TODAS AS FUNÇÕES

function imc(){
    var peso = document.querySelector(".peso").value 
    var altura = document.querySelector(".altura").value 
    var imc = peso / (altura * altura)

     if (imc < 18.5) {
         document.querySelector(".imprimir").innerHTML = "Você está em nível de magreza."
     }else if(imc >= 18.5 && imc <= 24.9) {
         document.querySelector(".imprimir").innerHTML = "Você está dentro do peso normal."
     }else if(imc >= 25.0 && imc <= 29.9) {
         document.querySelector(".imprimir").innerHTML = "Você está um pouco acima do peso."
     }else if (imc >= 30 && imc <= 39.9) {
         document.querySelector(".imprimir").innerHTML = "Você está com Obesidade."
     }else if (imc >= 40.0) {
         document.querySelector(".imprimir").innerHTML = "Você está com Obesidade Grave."
     }else{
         document.querySelector(".imprimir").innerHTML = "Valor inválido!"
     }

     document.querySelector(".IMC").innerHTML = `Seu imc é: ${imc.toFixed(2)}`
 }

 function somar(){
    let num1 = Number(document.querySelector(".num1").value)
    let num2 = Number(document.querySelector(".num2").value) 
    let resultado = (num1 + num2)
    document.querySelector(".imprimir").innerHTML = `O resultado da soma é ${resultado}`
}

function impar_par(){
    var num = document.querySelector(".num").value 
    if (num % 2 === 0){
        document.querySelector(".imprimir").innerHTML = `O número ${num}
        é par`
    } else {
        document.querySelector(".imprimir").innerHTML = `O número ${num}
        é ímpar`
    }
}

function pesoIdeal(){
    var sexo = document.querySelector(".sexo").value.toUpperCase()
    var altura = document.querySelector(".altura").value
        if (sexo === "MASCULINO"){
            var calculoMasculino = (72.7 * altura) - 58
            document.querySelector(".imprimir").innerHTML = `O seu peso 
            ideal é: ${calculoMasculino.toFixed(2)}`
        }else if (sexo === "FEMININO") {
            var calculoFeminino = (62.1 * altura) - 44.7
            document.querySelector(".imprimir").innerHTML = `O seu peso 
            ideal é: ${calculoFeminino.toFixed(2)}`
        }else{
            document.querySelector(".imprimir").innerHTML = `Valor 
            Inválido. Tente Novamente!`
        }
}

function tabuada(){
    const num = parseInt(document.querySelector(".num").value);
    const op = document.querySelector(".op").value.toUpperCase();
    let tabuada = '';
    if(op == "MULTIPLICAÇÃO"){
        for(let i = 0; i <= 10; i++){
            tabuada += `${num} x ${i} = ${num * i} <br> `
            document.querySelector(".resposta").innerHTML = tabuada;
        }
    } else if(op == "DIVISÃO"){
        for(let i = 0; i <= 10; i++){
            tabuada += `${num} / ${i} = ${(num / i).toFixed(2)} <br> `
            document.querySelector(".resposta").innerHTML = tabuada;
        }
    } else if (op === "SOMA"){
        for(let i = 0; i <= 10; i++){
            tabuada += `${num} + ${i} = ${num + i} <br> `
            document.querySelector(".resposta").innerHTML = tabuada;
        }
    } else if(op == "SUBTRAÇÃO"){
        for(let i = 0; i <= 10; i++){
            tabuada += `${num} - ${i} = ${num - i} <br> `
            document.querySelector(".resposta").innerHTML = tabuada;
        }
    } else {
        document.querySelector(".resposta").innerHTML = "VALOR INVÁLIDO!";
    }
    
}

function armazenarValores(){
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    let num3 = document.querySelector(".num3").value;

    const numeros = [num1, num2, num3];

    document.querySelector(".saida").innerHTML = `Os números inseridos foram ${numeros}`;

}

function compararTimes(){

    let time1 = document.querySelector(".time1").value;
    let time2 = document.querySelector(".time2").value;
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;

    if(num1 > num2){
        document.querySelector(".saida").innerHTML = `O time ${time1} ganhou a partida por ${num1} x ${num2}`;
    } else if(num2 > num1){
        document.querySelector(".saida").innerHTML = `O time ${time2} ganhou a partida por ${num2} x ${num1}`;
    } else{
        document.querySelector(".saida").innerHTML = `O time ${time1} e o time ${time2} empataram a partida por ${num1} x ${num2}`;
    }
}

function antecessor(){
    var num1 = document.querySelector(".num1").value
    var antecessor = parseInt(num1 - 1)
    document.querySelector(".antecessor").innerHTML = `O antecessor 
    deste número é: ${antecessor}.`
}

function areaRetangulo(){
    var base = document.querySelector(".base").value
    var alt = document.querySelector(".alt").value
    var area = parseInt(base * alt)
    document.querySelector(".area").innerHTML = `A aréa 
    do retângulo é: ${area} cm2.`
}

function diasVividos(){
    var anos = document.querySelector(".anos").value
    var meses = document.querySelector(".meses").value
    var dias = document.querySelector(".dias").value
    var anosEmDias = parseInt(anos * 365)
    var mesesEmDias = parseInt(meses * 30)
    var diasTotais = parseInt(anosEmDias + mesesEmDias + dias)
    document.querySelector(".aréa").innerHTML = `Você 
    tem ${diasTotais} dias vividos.`
}

function porcentagemVotos(){
    var eleitores = document.querySelector(".total").value
    var votosValidos = document.querySelector(".val").value
    var votosBrancos = document.querySelector(".bran").value
    var votosNulos = document.querySelector(".nul").value
    var porcentagemValidos = parseInt((votosValidos/eleitores)*100)
    var porcentagemBrancos = parseInt((votosBrancos/eleitores)*100)
    var porcentagemNulos = parseInt((votosNulos/eleitores)*100)
    document.querySelector(".porcentagem").innerHTML = `Porcentagem:<br>
    Votos Válidos: ${porcentagemValidos}%.
    Votos Brancos: ${porcentagemBrancos}%.
    Votos Nulos: ${porcentagemNulos}%.`
}

function reajusteSalarial(){
    var salarioMensal = document.querySelector(".salario").value
    var reajuste = document.querySelector(".reajuste").value
    var reajuste2 = Number((reajuste * salarioMensal) / 100)
    var salarioReajustado = Number(salarioMensal +++ reajuste2)
    document.querySelector(".salarioReajustado").innerHTML = `O valor do sálário
    mensal com os ${reajuste}% de reajuste adicional é R$ ${salarioReajustado} reais.`
}

function custo(){
    var custoFabrica = document.querySelector(".custo").value
    var distribuidor = custoFabrica * (28/100)
    var impostos = custoFabrica * (45/100)
    var custoFinal = Number(custoFabrica +++ distribuidor +++ impostos)
    document.querySelector(".custoFinal").innerHTML = `O custo final
    do consumidor é R$ ${custoFinal}.`
}

function comissaoCarros(){
    var carrosVendidos = document.querySelector(".carrosVendidos").value 
    var totalVendas = document.querySelector(".totalVendas").value
    var salario = document.querySelector(".salario").value
    var comissao = document.querySelector(".comissão").value
    comissao2 = (totalVendas) * (carrosVendidos * (comissao/100))
    comissaoVendas = totalVendas * 0.05
    var salarioFinal = Number(salario +++ comissao2 +++ comissaoVendas)
    document.querySelector(".salarioFinal").innerHTML = `O salário final
    do funcionário é R$ ${salarioFinal}.`
}

function maiorNumero() {
    const array = [];
    for (let i = 0; i < 5; i++) {
        const num = Number(prompt("Digite um número: "));
        const modulo = Math.abs(num);
        array.push(modulo);
    }
    document.querySelector(".imprimir").innerHTML = `Maior número: 
    ${Math.max(...array)} <br>`;
}