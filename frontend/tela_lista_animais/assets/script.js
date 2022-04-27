/*
Porte pequeno: 1
Porte médio: 2
Porte grande: 3

Tem raça: 1
Sem raça: 0

Tipo cachorro: 1
Tipo gato: 2
Tipo outros: 3
*/

let animal01 = {
    image: './assets/animal.jpg',
    name: 'Animal A',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis neque non quam gravida efficitur. Aliquam erat volutpat. Sed venenatis imperdiet dapibus. In iaculis mauris vestibulum magna sagittis, nec convallis ante gravida. Aenean egestas rhoncus hendrerit. Nunc egestas leo at leo efficitur, quis sodales tortor eleifend.',
    porte:2,
    raca:1,
    tipo:1
}

let animal02 = {
    image: './assets/animal.jpg',
    name: 'Animal B',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis neque non quam gravida efficitur. Aliquam erat volutpat. Sed venenatis imperdiet dapibus. In iaculis mauris vestibulum magna sagittis, nec convallis ante gravida. Aenean egestas rhoncus hendrerit. Nunc egestas leo at leo efficitur, quis sodales tortor eleifend.',
    porte:3,
    raca:0,
    tipo:2
}

let animal03 = {
    image: './assets/animal.jpg',
    name: 'Animal C',
    description: 'Descrição curta do Animal C',
    porte:3,
    raca:1,
    tipo:1
}

let animal04 = {
    image: './assets/animal.jpg',
    name: 'Animal D',
    description: 'Descrição curta do Animal D',
    porte:1,
    raca:1,
    tipo:2
}

let listAnimais = [animal01, animal02]

var ul = document.getElementsByClassName('list-container');


function create() {
    for(var element in listAnimais){
        var li = document.createElement("li");
        console.log(element);
        li.innerHTML = `
                        <a href="../tela_perfilAnimal/perfilAnimal.html">
                        <div class="image-container">
                            <img src="${listAnimais[element].image}">
                        </div>

                        <div class="name-container"> 
                            <span class="name">${listAnimais[element].name}</span>
                            <span class="description">${listAnimais[element].description}</span>
                        </div>`
        li.className = "myList";

        ul[0].appendChild(li)
    }
}

document.addEventListener("DOMContentLoaded", create);
