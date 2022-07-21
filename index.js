

let sliderLinks = ['img/s1.png', 'img/s2.png', 'img/s3.png']

let leftBtn = document.querySelector("#left-btn");
let rightBtn = document.querySelector("#right-btn");

let sliderState = 0;
let slider = document.querySelector("#slides");

rightBtn.addEventListener("click", function () {
    sliderState++;
    if (sliderState === sliderLinks.length) {
        sliderState = 0;
    }
    slider.src = sliderLinks[sliderState];
});

leftBtn.addEventListener("click", function () {
    sliderState--;
    if (sliderState < 0) {
        sliderState = sliderLinks.length - 1;
    }
    slider.src = sliderLinks[sliderState];
})