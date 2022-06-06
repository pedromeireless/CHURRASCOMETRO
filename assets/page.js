// CHURRASCO DE 1 A 3 HORAS //
// Um homem adulto come em média 400g de carne e bebe 1500ml de cerveja;
// Uma mulher adulta come em média 300g de carne e bebe 1000ml de cerveja;
// Uma criança come em média 200g de carne e bebe 1000ml de agua/refrigerante;

// CHURRASCO ACIMA DE 3 HORAS //
// Adicionar 20% em todas as medidas

// 4 homens e 4 mulheres em um churrasco de 3 horas
// (4 x 400g de carne) + (4 mulheres + 300g de carne) = 2.8kg de carne
// (4 x 1500ml de cerveja) + (4 x 1000ml de cerveja) = 10L de cerveja

// Como calcular a cerveja para as pessoas que vão beber? Pegar o total de adultos que irão, subtrair dos que bebem e multiplicar pela quantidade de agua/refri que uma pessoa comum bebe
// Exemplo: 4 homens e 6 mulheres = 10 adultos; 6 adultos bebem = 10 - 6 = 4 adultos que não bebem; 1 adulto consome 1500ml de agua/refri; 1000 * inputNaoBebem (4) = 4000ml de agua/refri

    let inputHomem = document.getElementById("homens")
    let inputMulher = document.getElementById("mulher")
    let inputDuracao = document.getElementById("duracao")
    let resultado = document.getElementById("resultado")


    function calcular() {
        console.log("calculando...")

        let homens = inputHomem.value
        let mulheres = inputMulher.value
        let duracao = inputDuracao.value
        let botao = document.getElementById("botao")

        let qtdTotalCarne = (carneHomem(duracao) * homens) + (carneMulher(duracao) * mulheres)
        let qtdTotalBebida = (bebidaHomem(duracao) * homens) + (bebidaMulher(duracao) * mulheres)
        let qtdTotalAgua = (bebidaHomem(duracao) * homens / 2) + (bebidaMulher(duracao) * mulheres / 2)


        text.innerHTML = "<p>Você irá precisar de: </p>"
        resultado.innerHTML += `<div class="resultbox">
                                <img src="../images/carne.png"><p>${qtdTotalCarne / 1000} Kg de carne</p>
                                </div>`

        resultado.innerHTML += `<div class="resultbox">
                                <img src="../images/beer.png"><p>${Math.ceil(qtdTotalBebida / 350)} Latas de cerveja</p>
                                </div>`
        resultado.innerHTML += `<div class="resultbox">
                                <img src="../images/agua.png"><p>${(qtdTotalAgua / 1000)} Litros de água/refri</p>
                                </div>`

        botao.style.display = 'none'
    }

    // FUNCTIONS THAT CALCULATED THE QUANTITY OF FOOD AND BEVERAGES
     carneHomem = (duracao) => (duracao > 3) ? 1200 : 1000
     bebidaHomem = (duracao) => (duracao > 3) ? 1800 : 1500
     carneMulher = (duracao) => (duracao > 3) ? 360 : 300 
     bebidaMulher = (duracao) => (duracao > 3) ? 1200 : 1000 
   