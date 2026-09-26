const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const songs = [
    { name: "The way life goes", artist: "Lil Uzi Vert", src: "songs/liluzi.mp3" },
    { name: "scars", artist: "novulent", src: "songs/scars.mp3" },
    { name: "Fair Trade", artist: "Drake & Travis Scott", src: "songs/fairtrade.mp3" },
    { name: "RICH BABY DADDY! ", artist: "Drake & SR, SZA", src: "songs/richbabydaddy.mp3" },
    { name: "Hours In Silence", artist: "Drake & 21 Savage", src: "songs/hours.mp3" },
    { name: "Jenice STFU", artist: "OVO Drake", src: "songs/STFU.mp3" },
    { name: "Sticky", artist: "Drake", src: "songs/sticky.mp3" },
    { name: "I Was Never There", artist: "The Weekend", src: "songs/neverthere.mp3" },
    { name: "King Of The Fall", artist: "XO The Weeknd", src: "songs/kingofthefall.mp3" },
    { name: "Heartless", artist: "The Weeknd, Metro Boomin", src: "songs/heartless.mp3" },
    { name: "Woke up in Japan", artist: "Post Malone & Doja Cat", src: "songs/ilikeyou.mp3" },
    { name: "Crash First", artist: "mgk & honestav", src: "songs/crashmgk.mp3" },
    { name: "run", artist: "Joji", src: "songs/run.mp3" },
    { name: "Fuck L", artist: "XXXT & 3PPIE", src: "songs/fkluv.mp3" },
    { name: "spd", artist: "Travis Scott", src: "songs/spd.mp3" },
    { name: "In Ankhon Ki Masthi Ki", artist: "the joy in her eyes", src: "songs/masthiremix.mp3" },
    { name: "Jab Koi Baat Bigad Jaaye", artist: "🍃", src: "songs/jabkoibat.mp3" },
    // { name: "Speed Demon", artist: "Justin Bieber", src: "songs/speeddemon.mp3" },
    // { name: "A Thousand Miles", artist: "Vanessa Carlton", src: "songs/thousand.mp3" },
    // { name: "", artist: "", src: "songs/.mp3" },
    { name: "wokeuplikethis", artist: "Lil Uzi Vert & Playboi Carti", src: "songs/wokeup.mp3" }
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
    songIndex = (songIndex - 1) % songs.length;  // songIndex = (songIndex = 1 + songs.lenght) % songs.length;
    loadSong(songIndex);
    playSong(songIndex);
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