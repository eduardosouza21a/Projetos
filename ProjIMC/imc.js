//já se pega os elementos e os coloca em var//

//var fora de function são var globais, em alguns casos é melhor criar dentro da func, já deixando especifico
const calcular = document.getElementById('calcular');

//obs: vc está pegando um elemento, não um valor ou string

// nome.value = 'Eduardo'
// o . é para encontra/acessar uma propriedade

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //1º validar se os campos estão preenchidos//
    if (nome.value !== ''&& altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';
                                             //forma de realizar varios if e um substituir o outro
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso'
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal'
        }else if ( valorIMC < 30){
            classificacao = 'com obesidade grau I'
        }else if ( valorIMC < 35){
            classificacao = 'com obesidade grau II'
        }else if ( valorIMC < 30){
            classificacao = 'com obesidade grau III'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;   // acento grave ( `` ) é usado para não cotatenando, dentro desse acento é possivel inserir variaveis
                                      // vê mais sobre acento grave
    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }

}

calcular.addEventListener('click', imc);