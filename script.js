!async function main() {
    "use strict";

    const dom = {
        lyric: document.querySelector(".lyric"),
        player: document.querySelector(".player")
    };

    // load lrc file
    const res = await fetch("../MPE&LRC/04-For Your Glory(Live).lrc");
    const lrc = await res.text();

    const lyrics = parseLyric(lrc);

    dom.player.src = "./audio.mp3";

    dom.player.ontimeupdate = () => {
        const time = dom.player.currentTime;
        const index = syncLyric(lyrics, time);

        if (index == null) return;

        dom.lyric.innerHTML = lyrics[index].text;
    };

}();

function parseLyric(lrc) {
    // same as previous code
}

function syncLyric(lyrics, time) {
    // same as previous code
}