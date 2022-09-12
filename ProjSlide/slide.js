'use strict';

const images = [
    { 'id': '1', 'url': 'images1.jfif'},
    { 'id': '2', 'url': 'images2.jfif'},
    { 'id': '3', 'url': 'images3.jpg'},
    { 'id': '4', 'url': 'images4.jpg'},
    { 'id': '5', 'url': 'images5.jpeg'},
    { 'id': '6', 'url': 'images6.jpg'},
]

const containerItems = document.querySelector('#container-items')

const loadImages = ( images, container ) => {
images.forEach ( image => {
    container.innerHTML += `
    <div class='item'>
        <img src='${image.url}'
    </div> `
})
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]); // errei ao colocar item ao inves de items, visto que items é a var de todos as img
              //adiciona no final, manda o primeiro item[0] para o final da lista//
    items = document.querySelectorAll('.item');
                // lê de novo a lista para vê a nova ordem das img
}

const next = () => {     // length trás a quantidade, como a lista começa no 0, o -1 é o ultimo item
    const lastItem = items[items.length -1];
    containerItems.insertBefore( lastItem, items[0]);
    items = document.querySelectorAll('.item');
                  // vai procurar e forma uma "lista" com todos os item
}

document.querySelector('#previous').addEventListener('click', previous);
                // id = #   e  Class = .  
document.querySelector('#next').addEventListener('click', next);