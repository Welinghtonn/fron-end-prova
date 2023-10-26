var array = ["https://animerant.com.br/wp-content/uploads/2023/08/d241aa2d-3feb-4e91-8f93-be205d59242f.jpg"]
var array2 = ["https://cinepop.com.br/wp-content/uploads/2023/04/imagem_2023-04-20_155630085-e1682017091515.jpg"]

var container = document.getElementById("container")

array.forEach(element => {
    let img = document.createElement("img");
    img.width = '300';
    img.height = '300';
    img.src = element;
    container.appendChild(img)

    let li = document.createElement('li');
    li.textContent = '10/10/10';
    container.appendChild(li);

    li = document.createElement('li');
    li.textContent = 'R$10,10';

    container.appendChild(li)

    li = document.createElement('li');
    li.textContent = 'Quantidade: 10';

    container.appendChild(li)
}
)

array2.forEach(element => {
    let img = document.createElement("img");
    img.width = '300';
    img.height = '300';
    img.src = element;
    container.appendChild(img)

    let li = document.createElement('li');
    li.textContent = '10/10/10';
    container.appendChild(li);

    li = document.createElement('li');
    li.textContent = 'R$10,10';

    container.appendChild(li)

    li = document.createElement('li');
    li.textContent = 'Quantidade: 10';

    container.appendChild(li)
}
)
