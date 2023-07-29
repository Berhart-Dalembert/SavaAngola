const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");

let currentIndex = 0;

function showImage(index) {
    const slideWidth = images[0].clientWidth;
    carousel.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
}

function nextImage() {
    if (currentIndex === images.length - 1) {
        showImage(0);
    } else {
        showImage(currentIndex + 1);
    }
}

function prevImage() {
    if (currentIndex === 0) {
        showImage(images.length - 1);
    } else {
        showImage(currentIndex - 1);
    }
}

// Adicione os botões de navegação (próximo e anterior) e qualquer estilo adicional que desejar.
// Exemplo:
const nextBtn = document.createElement("button");
nextBtn.innerText = "Próximo";
nextBtn.addEventListener("click", nextImage);

const prevBtn = document.createElement("button");
prevBtn.innerText = "Anterior";
prevBtn.addEventListener("click", prevImage);

const container = document.querySelector(".carousel-container");
container.appendChild(prevBtn);
container.appendChild(nextBtn);