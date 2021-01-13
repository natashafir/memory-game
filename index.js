const items = [
    {
        id: 0,
        img_url: './img/colibri.gif'
    },
    {
        id: 1,
        img_url: './img/hello.gif'
    },
    {
        id: 2,
        img_url: './img/hi.gif'
    },
    {
        id: 3,
        img_url: './img/inlove.gif'
    },
    {
        id: 4,
        img_url: './img/love.gif'
    },
    {
        id: 5,
        img_url: './img/play.gif'
    },
    {
        id: 6,
        img_url: './img/sleep.gif'
    },
    {
        id: 7,
        img_url: './img/space.gif'
    }
];

// let cards = [];
const sectionMemory = document.getElementById('section__memory');

// const flipCard = (event) => {
//     let target = event.target;
//     img.src = items[target.id].img_url;
//     console.log(img.src);
// };
// sectionMemory.addEventListener('click', flipCard);

// I choose to use the Fisher–Yates shuffle algorithm.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createCardItem(item) {
    const cardWrapper = document.createElement('div');
    const imgBack = document.createElement('img');
    const imgFront = document.createElement('img');
    cardWrapper.classList.add("memory-card"); //class for CSS
    cardWrapper.appendChild(imgBack);
    cardWrapper.appendChild(imgFront);
    imgBack.src = "./img/img-0.jpeg";
    imgFront.src = item.img_url;
    imgBack.classList.add("back-face");
    imgFront.classList.add("front-face");
    cardWrapper.id = item.id;
    return cardWrapper;
}

function createAllCards() {
    let allCards = shuffle([...items, ...items]);
    allCards.forEach(elem => {
        sectionMemory.appendChild(createCardItem(elem));
        // console.log(elem);
    });

}
createAllCards();

