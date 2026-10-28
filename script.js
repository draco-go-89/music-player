const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const songs = [
    { name: "All The Stars", artist: "Kendrick Lamar, SZA", src: "songs/allthestars.mp3" },
    { name: "Unforgettable", artist: "Swae Lee", src: "songs/unforgetable.mp3" },
    { name: "Every Breath You Take", artist: "The Police", src: "songs/thekids.mp3" },
    { name: "Ordinary Life", artist: "The Weeknd", src: "songs/ordinarylife.mp3" },
    { name: "Niagara Falls", artist: "The Weeknd", src: "songs/niagarafalls.mp3" },
    { name: "Love Me Harder", artist: "The Weeknd, Ariana Grande", src: "songs/lovemeharder.mp3" },
    { name: "King Of The Fall", artist: "XO The Weeknd", src: "songs/kingofthefall.mp3" },
    { name: "Try Me", artist: "The Weeknd", src: "songs/tryme.mp3" },
    { name: "Starboy", artist: "The Weeknd", src: "songs/starboy.mp3" },
    { name: "Blinding Lights", artist: "The Weeknd", src: "songs/blinding.mp3" },
    { name: "Creepin", artist: "Metro Boomin, The Weeknd, 21 Savage", src: "songs/creepin.mp3" },
    { name: "The Hills", artist: "The Weeknd", src: "songs/thehills.mp3" },
    { name: "Trance", artist: "Metro Boomin, Travis Scott", src: "songs/trance.mp3" },
    { name: "pray for me", artist: "The Weeknd", src: "songs/prayforme.mp3" },
    { name: "I Was Never There", artist: "The Weekend", src: "songs/neverthere.mp3" },
    { name: "Heartless", artist: "The Weeknd, Metro Boomin", src: "songs/heartless.mp3" },
    { name: "Popular", artist: "The Weeknd & Playboi Carti", src: "songs/popular.mp3" },
    { name: "the way life goes", artist: "Lil Uzi Vert", src: "songs/liluzi.mp3" },
    { name: "fashion killa", artist: "A$AP ROCKY", src: "songs/fashioonkilla.mp3" },
    { name: "Shut It Down", artist: "Drake", src: "songs/shutdown.mp3" },
    { name: "fair trade", artist: "Drake & Travis Scott", src: "songs/fairtrade.mp3" },
    { name: "richbabydaddy! ", artist: "Drake & SR, SZA", src: "songs/richbabydaddy.mp3" },
    { name: "Sticky", artist: "Drake", src: "songs/sticky.mp3" },
    { name: "Redrum", artist: "21 Savage", src: "songs/redrum.mp3" },
    { name: "Wake up in Japan", artist: "Post Malone, Doja Cat", src: "songs/ilikeyou.mp3" },
    { name: "My Eyes", artist: "Travis Scott", src: "songs/myeyes.mp3" },
    { name: "sdp", artist: "Travis Scott", src: "songs/spd.mp3" },
    { name: "viah", artist: "Jass Manak", src: "songs/viah.mp3" },
    { name: "Medicine", artist: "unknown artist//", src: "songs/medicine.mp3" },
    { name: "In Ankhoon Ki Masthi Ki", artist: "the joy in her eyes", src: "songs/masthiremix.mp3" },
    { name: "Thousand Miles", artist: "The Kid LAROI", src: "songs/thousandmiles.mp3" }
    // { name: "", artist: "", src: "songs/.mp3" },
];

let songIndex = 14;
let isPlaying = false;

function loadSong(index) {
    title.textContent = songs[index].name;
    artist.textContent = songs[index].artist;
    audio.src = songs[index].src;
}

function playSong() {
    audio.play();
    playBtn.innerHTML = "★";
    isPlaying = true;
}

function pauseSong() {
    audio.pause();
    playBtn.innerHTML = "▶";
    isPlaying = false;
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    playSong();
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;  // play previous even when the song is at the first index
    loadSong(songIndex);
    // playSong(songIndex);
    playSong();
}

playBtn.addEventListener("click", () => {
    isPlaying ? pauseSong() : playSong();
});

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

audio.addEventListener("ended", nextSong);

loadSong(songIndex);

// SCRIPT FOR TIME UPDATE
const current = document.getElementById("current");
const duration = document.getElementById("duration");

audio.addEventListener("timeupdate", () => {
    const curMin = Math.floor(audio.currentTime / 60);
    const curSec = Math.floor(audio.currentTime % 60);

    current.textContent =
        `${curMin}:${String(curSec).padStart(2, "0")}`;
});

audio.addEventListener("loadedmetadata", () => {
    const durMin = Math.floor(audio.duration / 60);
    const durSec = Math.floor(audio.duration % 60);

    duration.textContent =
        `${durMin}:${String(durSec).padStart(2, "0")}`;
});

// POO-UP MESSAGE
const openBtn = document.getElementById('openAboutBtn');
const closeBtn = document.getElementById('closeAboutBtn');
const modal = document.getElementById('aboutModal');

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// optional: close if click outside in areas
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});