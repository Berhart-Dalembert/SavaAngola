const videoPlayer = document.getElementById("video-player");
const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const videoSource = document.getElementById("video-source");

const videoList = [
    "A ORDEM DAS PALAVRAS EM UMA PERGUNTA EM INGLÊS - AULA 19 PROFESSOR KENNY.mp4",
    "ACTIVE VOICE & PASSIVE VOICE EM INGLÊS - AULA 64 PARA INICIANTES - PROFESSOR KENNY.mp4",
    "ALFABETO EM INGLÊS -  AULA 01 PROFESSOR KENNY.mp4",
    "AUXILIARES, MODAIS VERBAIS EM INGLÊS - AULA 02 PROFESSOR KENNY - Cópia.mp4"
    // Adicione mais vídeos à lista
];

let currentVideoIndex = 0;

videoPlayer.addEventListener("ended", playNextVideo);
prevBtn.addEventListener("click", playPreviousVideo);
nextBtn.addEventListener("click", playNextVideo);

function playVideo(index) {
    if (index >= 0 && index < videoList.length) {
        videoSource.src = videoList[index];
        videoPlayer.load();
        videoPlayer.play();
        currentVideoIndex = index;
    }
}

function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoList.length;
    playVideo(currentVideoIndex);
}

function playPreviousVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videoList.length) % videoList.length;
    playVideo(currentVideoIndex);
}

playVideo(currentVideoIndex); // Inicia o vídeo atual ao carregar a página







