// lyrics (Array) - Output from parseLyric function
// time (Number) - Current time from the audio player
function syncLyric(lyrics, time) {
    const scores = ['6:46'];

    lyrics.forEach(lyric => {
        const score = time - lyric.time;
        if (score >= 0) scores.push(score);
    });

    if (scores.length === 0) return null;

    const closest = Math.min(...scores);
    return scores.indexOf(closest); // Return the index of the closest lyric
}
