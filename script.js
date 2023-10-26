var array = ["https://animerant.com.br/wp-content/uploads/2023/08/d241aa2d-3feb-4e91-8f93-be205d59242f.jpg"]
var array2 = ["https://cinepop.com.br/wp-content/uploads/2023/04/imagem_2023-04-20_155630085-e1682017091515.jpg"]
var array3 = ["https://viciados.net/wp-content/uploads/2020/03/3ecd49ac.jpg"]
var array4 = ["https://static.animecorner.me/2021/08/link-click-thumbnail.png"]
var array5 = ["https://skdesu.com/wp-content/uploads/2018/03/franxx.jpg"]
var array6 = ["https://m.media-amazon.com/images/S/pv-target-images/5f52ea22cb7467ee60406ea0bf80551a2e8989ef3e9fea2a023822907afe4e24.jpg"]
var array7 = ["https://m.media-amazon.com/images/S/pv-target-images/012cf04881569148f80426f65d1453e6530d7b4edb9599f65902133539a10b99.jpg"]
var array8 = ["https://animotaku.fr/wp-content/uploads/2023/03/naruto-nouveau-projet-anime-2023.jpeg"]
var array9 = ["https://m.media-amazon.com/images/S/pv-target-images/dc873823327bc2148c53f4d05eea425b115c80f974f250e259d91f200606c9ba.jpg"]
var array10 = ["https://hull.geekship.com.br/wp-content/uploads/2023/04/My-hero-academia-6a-temporads.jpg"]

var container = document.getElementById("container")

array.forEach(element => {
    let img = document.createElement("img");
    img.height = '300';
    img.src = element;
    container.appendChild(img)


    let li = document.createElement('li');
    li.textContent = 'jujutsu';

    container.appendChild(li)

    li = document.createElement('li');
    li.textContent = '10/10/1010';

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
    img.height = '300';
    img.src = element;
    container.appendChild(img)

    let li = document.createElement('li');
    li.textContent = 'velozes e furuiosos';
    container.appendChild(li);

    li = document.createElement('li');
    li.textContent = '20/5/2010';

    container.appendChild(li);

    li = document.createElement('li');
    li.textContent = 'R$20,20';

    container.appendChild(li)

    li = document.createElement('li');
    li.textContent = 'Quantidade: 20';

    container.appendChild(li)
}
)
array3.forEach(element => {
    let img = document.createElement("img");
    img.height = '300';
    img.src = element;
    container.appendChild(img)

    let li = document.createElement('li');
    li.textContent = 'slime';
    container.appendChild(li);

    li = document.createElement("li")
    li.textContent = '30/30/2030';
    container.appendChild(li);

    li = document.createElement('li');
    li.textContent = 'R$30,30';

    container.appendChild(li)

    li = document.createElement('li');
    li.textContent = 'Quantidade: 30';

    container.appendChild(li)
}
)

array4.forEach(element => {
    let img = document.createElement("img");
    img.height = '300';
    img.src = element;
    container.appendChild(img)

    let li = document.createElement('li');
    li.textContent = 'link click';
    container.appendChild(li);

    li = document.createElement('li')
    li.textContent = '15/15/1000';
    container.appendChild(li);

    li = document.createElement('li');
    li.textContent = 'R$15,15';

    container.appendChild(li)

    li = document.createElement('li');
    li.textContent = 'Quantidade: 15';

    container.appendChild(li)
}
)

array5.forEach(element => {
    let img = document.createElement("img");
    img.height = '300';
    img.src = element;
    container.appendChild(img)

    let li = document.createElement('li');
    li.textContent = 'darling the franx';
    container.appendChild(li);

    li = document.createElement('li')
    li.textContent = '25/10/1020';
    container.appendChild(li);

    li = document.createElement('li');
    li.textContent = 'R$25,60';

    container.appendChild(li)

    li = document.createElement('li');
    li.textContent = 'Quantidade: 25';

    container.appendChild(li)
}
)

array6.forEach(element => {
    let img = document.createElement("img");
    img.height = '300';
    img.src = element;
    container.appendChild(img)

    let li = document.createElement('li');
    li.textContent = 'overlord';
    container.appendChild(li);

    li = document.createElement('li')
    li.textContent = '12/10/2110';
    container.appendChild(li);

    li = document.createElement('li');
    li.textContent = 'R$12,10';

    container.appendChild(li)

    li = document.createElement('li');
    li.textContent = 'Quantidade: 40';

    container.appendChild(li)
}
)

array7.forEach(element => {
    let img = document.createElement("img");
    img.height = '300';
    img.src = element;
    container.appendChild(img)

    let li = document.createElement('li');
    li.textContent = 're:zero';
    container.appendChild(li);

    li = document.createElement('li')
    li.textContent = '16/05/2007';
    container.appendChild(li);

    li = document.createElement('li');
    li.textContent = 'R$23,10';

    container.appendChild(li)

    li = document.createElement('li');
    li.textContent = 'Quantidade: 18';

    container.appendChild(li)
}
)

array8.forEach(element => {
    let img = document.createElement("img");
    img.height = '300';
    img.src = element;
    container.appendChild(img)

    let li = document.createElement('li');
    li.textContent = 'naruto';
    container.appendChild(li);

    li = document.createElement('li')
    li.textContent = '08/09/2001';
    container.appendChild(li);

    li = document.createElement('li');
    li.textContent = 'R$17,10';

    container.appendChild(li)

    li = document.createElement('li');
    li.textContent = 'Quantidade: 33';

    container.appendChild(li)
}
)

array9.forEach(element => {
    let img = document.createElement("img");

    img.height = '300';
    img.src = element;
    container.appendChild(img)

    let li = document.createElement('li');
    li.textContent = 'black clover';
    container.appendChild(li);

    li = document.createElement('li')
    li.textContent = '10/10/2021';
    container.appendChild(li);

    li = document.createElement('li');
    li.textContent = 'R$27,10';

    container.appendChild(li)

    li = document.createElement('li');
    li.textContent = 'Quantidade: 16';

    container.appendChild(li)
}
)

array10.forEach(element => {
    let img = document.createElement("img");
    img.height = '300';
    img.src = element;
    container.appendChild(img)

    let li = document.createElement('li');
    li.textContent = 'my hero academy';
    container.appendChild(li);

    li = document.createElement('li')
    li.textContent = '23/12/2000';
    container.appendChild(li);

    li = document.createElement('li');
    li.textContent = 'R$23,10';

    container.appendChild(li)

    li = document.createElement('li');
    li.textContent = 'Quantidade: 23';

    container.appendChild(li)
}
)
