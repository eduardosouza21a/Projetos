let modalQt = 1;


const cs = (el)=>document.querySelectorAll(el);
const c = (el)=> document.querySelector(el);  // função usada par não repetir o querySelector
/* ou const c = (el)=> {
    return document.querySelector(el);
}  - funções sem o uso de {} */


// listagem das pizza
pizzaJson.map ((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

              //"data-key" é o nome do atribulto, data é um "sufixo" para falar que ali tem uma informação especifica sobre o item.
    pizzaItem.setAttribute('data-key', index);  //o index se refere a chave, o numero, o "id" da pizza.

                            //clase  dentro irá selecionar img, por isso o img no final
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`; // Cuidado no uso do "templestream" = text + busca
    
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{  //"modal"
        e.preventDefault(); //aparentemente o 'a' realiza, por padrão um F5

        modalQt = 1; //sempre que for realizada a abertura do modal irá ser colocado com 1 o modalQt
        let key = e.target.closest('.pizza-item').getAttribute('data-key'); //pega informações

        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaBig img').src = pizzaJson[key].img; //cuidado, em imagen não se usa innerHTML, usa se src
                                                    //já que não ira trocar uma sting e sim colocar um "link", um atribulto
        c('.selected').classList.remove('selected');//como havia mais de uma piz..size ultilizei apenas o selected
        
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{    //adicionar as gramas no parametro de tamanho
            if(sizeIndex == 2) {    // no sizeIndex 2 irá ser selecionado
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];

        });

        c('.pizzaInfo--qt').innerHTML = modalQt

        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        }, 300);
    });

    c('.pizza-area').append( pizzaItem );
});


// Eventos do MODAL
function closeModal(){
    c('.pizzaWindowArea').style.opacity = 0
    setTimeout(()=>{
        c('.pizzaWindowArea').style.display = 'none';
    }, 500);
}

cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});
