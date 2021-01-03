const cards = [
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

const sectionMemory = document.getElementById('section__memory');

// const changeImg = (event) => {
//     let target = event.target;
//     img.src = cards[target.id].img_url;
//     console.log(img.src);
// };
// sectionMemory.addEventListener('click', changeImg);


function initialGame() {
}

// I choose to use the Fisher–Yates shuffle algorithm.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // imgFront.src = cards[index].img_url;


    function createCardsItems(element, index) {

        const cardWrapper = document.createElement('div');
        const imgBack = document.createElement('img');
        const imgFront = document.createElement('img');
        cardWrapper.classList.add("memory-card"); //class for CSS
        cardWrapper.appendChild(imgBack);
        cardWrapper.appendChild(imgFront);
        imgBack.src = "./img/img-0.jpeg";
        imgFront.src = cards[index].img_url;
        imgBack.classList.add("back-face");
        imgFront.classList.add("front-face");
        cardWrapper.id = cards[index].id;
        sectionMemory.appendChild(cardWrapper);
    }

    let card = cards.map(createCardsItems);

    // cards.forEach(function (element, index) {
    //     const cardWrapper = document.createElement('div');
    //     const img = document.createElement('img');
    //     cardWrapper.classList.add("memory-card"); //class for CSS
    //     cardWrapper.appendChild(img);
    //     img.src = "./img/img-0.jpeg";
    //     // img.src = cards[index].img_url;
    //     img.classList.add("back-face");
    //     cardWrapper.id = cards[index].id;
    //     sectionMemory.appendChild(cardWrapper);
    // });

});