let song = new Audio("../sound/proud-of-you.mp3")
let jreng = new Audio("../sound/menakutkan.mp3")
let openBox = new Audio("../sound/open-box.mp3")
let closeBox = new Audio("../sound/close-box.mp3")
let bukaSurat = new Audio("../sound/buka-surat.mp3")

const kadoPertama = document.getElementById("kadoPertama")
const kadoKedua = document.getElementById("kadoKedua")
const kadoKetiga = document.getElementById("kadoKetiga")
const containerWrapper = document.querySelector(".containerWrapper")

const tutup = document.getElementsByClassName("close")
const tutup2 = document.querySelector(".close2")


kadoPertama.addEventListener("click", function() {
    openBox.play()
})

kadoKedua.addEventListener("click", function() {
    openBox.play()
})

kadoKetiga.addEventListener("click", function() {
    jreng.play()
})

tutup[0].addEventListener("click", function() {
    closeBox.play()
})

tutup[1].addEventListener("click", function() {
    closeBox.play()
})

tutup2.addEventListener("click", function() {
    closeBox.play()
    playMusic()
})


song.loop = true;
let udahAda = false;
function playMusic(){

    udahAda == false;
    if(udahAda == false) {
        udahAda = true
        song.play();
    }
}



