const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff'); //obs: as vezes um erro em uma função que nem está rodando impede a leitura do codigo
const lamp = document.getElementById ('lamp')


function isLampBroken (){
    return lamp.src.indexOf ( 'quebrada') > -1
}                  //faz uma varredura para encontra uma string, quando não encontrada se acha o numero -1, ou seja, não há

function lampOn () {
    if ( !isLampBroken () ) {
        // ! serve como negação, em outras palavras a função acima é lida como: Se(if) Não(!) verdadeira, ou seja, diferente de -1, execulta-se a função
    lamp.src = 'Acesa.jpg';
}
}

function Desl () { if ( !isLampBroken () ) {
    lamp.src = 'Apagada.jpg'; }
}

function LampBroken () {
    lamp.src = 'quebrada.jpg'
}

turnOn.addEventListener('click', lampOn );
                    //parametro, ação
turnOff.addEventListener('click', Desl)

lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', Desl)
//...esculta o evento ( ... e realiza ...)
lamp.addEventListener('dblclick', LampBroken)