//references to the DOM elements
const cover = document.getElementById("cover");
const audioObj = new Audio("./assets/audio/parseltongue.mp3");
console.log(audioObj);
const audioPage = new Audio("./assets/audio/pageflip.mp3");
console.log(audioPage);

cover.addEventListener("click", function () {
  audioObj.play();
});

for (let i = 1; i < 18; i++) {
  let page = document.getElementById("p" + i);
  page.addEventListener("click", function () {
    audioPage.play();
  });
}
