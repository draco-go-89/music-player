const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const songs = [
    { name: "the way life goes", artist: "Lil Uzi Vert", src: "songs/liluzi.mp3" },
    { name: "fair trade", artist: "Drake & Travis Scott", src: "songs/fairtrade.mp3" },
    { name: "richbabydaddy! ", artist: "Drake & SR, SZA", src: "songs/richbabydaddy.mp3" },
    { name: "sticky", artist: "Drake", src: "songs/sticky.mp3" },
    { name: "over my dead body", artist: "Drake", src: "songs/overmy.mp3" },
    { name: "I Was Never There", artist: "The Weekend", src: "songs/neverthere.mp3" },
    { name: "King Of The Fall", artist: "XO The Weeknd", src: "songs/kingofthefall.mp3" },
    { name: "Heartless", artist: "The Weeknd, Metro Boomin", src: "songs/heartless.mp3" },
    { name: "blinding lights", artist: "the weeknd", src: "songs/blinding.mp3" },
    { name: "Popular", artist: "The Weeknd & Playboi Carti", src: "songs/popular.mp3" },
    { name: "Wake up in Japan", artist: "Post Malone & Doja Cat", src: "songs/ilikeyou.mp3" },
    { name: "pillowtalk", artist: "zayn", src: "songs/pillowtalk.mp3" },
    { name: "slut", artist: "taylor swift", src: "songs/slut.mp3" },
    { name: "medicine", artist: "unknown artist//", src: "songs/medicine.mp3" },
    { name: "sdp", artist: "Travis Scott", src: "songs/spd.mp3" },
    { name: "viah", artist: "Jass Manak", src: "songs/viah.mp3" },
    { name: "inankhoonkimasthiki", artist: "the joy in her eyes", src: "songs/masthiremix.mp3" },
    { name: "the night we met", artist: "14 sept", src: "songs/night.mp3" }
    // { name: "", artist: "", src: "songs/.mp3" },
    // { name: "wokeuplikethis", artist: "Lil Uzi Vert & Playboi Carti", src: "songs/wokeup.mp3" }
];

let songIndex = 0;
let isPlaying = false;

function loadSong(index) {
    title.textContent = songs[index].name;
    artist.textContent = songs[index].artist;
    audio.src = songs[index].src;
}

function playSong() {
    audio.play();
    playBtn.innerHTML = "⏸️";
    isPlaying = true;
}

function pauseSong() {
    audio.pause();
    playBtn.innerHTML = "▶️";
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

loadSong(songIndex);