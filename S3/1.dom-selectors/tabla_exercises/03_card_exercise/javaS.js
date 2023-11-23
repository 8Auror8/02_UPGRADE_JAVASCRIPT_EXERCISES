var container = document.querySelector('#cardContainer');



const cards = [
    {
    "img": "http://dummyimage.com/109x100.png/ff4444/ffffff",
    "title": "Dusicyon thous"
    }, {
    "img": "http://dummyimage.com/162x100.png/cc0000/ffffff",
    "title": "Phascogale tapoatafa"
    }, {
    "img": "http://dummyimage.com/113x100.png/ff4444/ffffff",
    "title": "Pelecanus occidentalis"
    }, {
    "img": "http://dummyimage.com/136x100.png/5fa2dd/ffffff",
    "title": "Ictonyx striatus"
    }, {
    "img": "http://dummyimage.com/213x100.png/cc0000/ffffff",
    "title": "Sterna paradisaea"
    }, {
    "img": "http://dummyimage.com/120x100.png/dddddd/000000",
    "title": "Agama sp."
    }, {
    "img": "http://dummyimage.com/156x100.png/dddddd/000000",
    "title": "Cordylus giganteus"
    }, {
    "img": "http://dummyimage.com/243x100.png/dddddd/000000",
    "title": "Ursus americanus"
    }, {
    "img": "http://dummyimage.com/145x100.png/ff4444/ffffff",
    "title": "Choriotis kori"
    }, {
    "img": "http://dummyimage.com/130x100.png/5fa2dd/ffffff",
    "title": "Tapirus terrestris"
    }


]

cards.forEach(card =>{
    let cardNode = document.createElement('div');
    cardNode.className = 'card';

    let img = document.createElement('img');
    img.setAttribute('src', card.img);

    let title = document.createElement('p');
    title.innerHTML = card.title;

    container.appendChild(cardNode);
    cardNode.appendChild(img);
    cardNode.appendChild(title);
})

let cantidad = 10;

/* for(let i=0; i < cantidad; i++){
    let card = document.createElement('div');
    card.className = 'card';

    let img = document.createElement('img');
    img.setAttribute('src', 'https://picsum.photos/200');

    let title = document.createElement('p');
    title.innerHTML = 'el titulo';

    container.appendChild(card);
    card.appendChild(img);
    card.appendChild(title);

} */