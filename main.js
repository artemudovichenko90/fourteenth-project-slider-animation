const images = [];
images.push('img/1.jpg');
images.push('img/1.1.jpg');
images.push('img/1.2.jpg');
images.push('img/2.jpg');
images.push('img/3.jpg');
images.push('img/4.jpg');
images.push('img/5.jpg');
images.push('img/6.jpg');
images.push('img/7.jpg');
images.push('img/8.jpg');
images.push('img/9.jpg');

const sliderLine = document.querySelector('.slider-line');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

for (const img of images) {
    const newElement = document.createElement('div');
    newElement.innerHTML = `<div class="slide"><img src="${img}" alt=""/></div>`
    sliderLine.append(newElement)
}
sliderLine.let
offset = 0;
const width = images.length * 300 - 300;

btnNext.addEventListener('click', () => {
    if (offset < width) {
        offset += 300;
        sliderLine.style.left = -offset + 'px';
    }
});
btnPrev.addEventListener('click', () => {
    if (offset > 0) {
        offset -= 300;
        sliderLine.style.left = -offset + 'px';
    }
});