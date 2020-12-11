const imageMax = document.querySelector('.img-12-max');
const images = document.querySelectorAll('.img-12-min');
let count = 0;

const next = document.querySelector('.next');
next.onclick = nextFunction;
const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

function nextFunction() {
    if (count + 1 == images.length) {
        count = -1;
    }
    count++;
    updateImageAndSerialNumberOfActiveImg(true);
}

function prevFunction() {
    if (count - 1 < 0) {
        count = images.length;
    };
    count--;
    updateImageAndSerialNumberOfActiveImg();
}

function updateImageAndSerialNumberOfActiveImg(flag) {
    let i = flag ? count - 1 : count + 1;

    if (count < 0 || count == 0 && i != 1) {
        i = images.length - 1;
    }
    if (count == images.length - 1 && i == images.length) {
        i = 0;
    }

    imageMax.src = `img/${count+1}.png`;
    images[i].classList.remove('active-img');
    images[count].classList.add('active-img');
}
