const images = {
    img0: "Desert during daytime with a large rock formation",
    img1: "Milky Way Galaxy",
    img2: "Mesa Arch with Milky Way visible",
    img3: "Large mountains covered in snow",
    img4: "Vast mountaineous landscape",
};

const numImgs = Object.keys(images).length;
let currentImageIndex = 0;

const image = document.getElementById("image");
const desc = document.getElementById("desc");
const navDots = document.getElementById("nav-dots");

Object.keys(images).forEach((key, index) => {
    navDots.innerHTML += `<span class="dot" onclick="currentImageIndex = ${index}; updateImage();"></span>`;
});

function updateImage() {
    image.src = `img/img${currentImageIndex}.jpg`;
    desc.innerHTML = images[`img${currentImageIndex}`];

    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[currentImageIndex].classList.add("active");
}

function back() {
    currentImageIndex = (currentImageIndex - 1 + numImgs) % numImgs;
    updateImage();
}

function next() {
    currentImageIndex = (currentImageIndex + 1) % numImgs;
    updateImage();
}

updateImage();
