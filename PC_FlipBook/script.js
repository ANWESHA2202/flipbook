//references to the DOM elements
const cover = document.getElementById('cover');
const audioObj = new Audio('resources/parseltongue.mp3');


const audioPage = new Audio('resources/pageflip.mp3');


cover.addEventListener('click', function() {
    audioObj.play();
});

for (let i = 1; i < 18; i++) {
    let page = document.getElementById('p' + i);
    page.addEventListener('click', function() {
        audioPage.play();
    })
}