function refrain() {
    let words = "";
    words += "For Your glory\n"
    words += "I will do anything\n"
    words += "Just to see You\n"
    words += "To behold You as my King\n"
    return words;
}

function song() {
    let r;
    let Swords = "";

    Swords += ("Lord if I\n");
    Swords += ("Find favor in Your sight\n");
    Swords += ("Lord please\n");
    Swords += ("Hear my hearts cry\n");
    Swords += ("I'm desperately waiting\n");
    Swords += ("To be where You are\n");
    Swords += ("I'll cross the hottest desert\n");
    Swords += ("I'll travel near or far\n");
    r = refrain();
    Swords += (r);
    Swords += ("Lord if I find favor in Your sight\n");
    Swords += ("Lord please, Lord please(Lord please)\n");
    Swords += ("Hear my hearts cry(hear my hearts cry)\n");
    Swords += ("I'm desperately waiting (I'm desperately waiting)\n");
    Swords += ("To be where You are(to be where You are)\n");
    Swords += ("I'll cross the hottest desert (I'll cross the hottest desert)\n");
    Swords += ("I'll travel near or far\n");
    Swords += ("For Your glory(for Your glory)\n");
    Swords += ("I will do (I will do) anything(anything)\n");
    Swords += ("Just to see You(just to see You)\n");
    Swords += ("To behold You as my King(to behold You as my King)\n");
    Swords += (r);
    Swords += ("I wanna be where You are (I really wanna be there)\n");
    Swords += ("I gotta be where You are\n");
    Swords += ("I wanna be where You are\n");
    Swords += ("I gotta be where You are\n");
    Swords += ("I wanna be where You are\n");
    Swords += ("Gotta be where You are (I wanna be there)\n");
    Swords += ("I wanna be where You are\n");
    Swords += ("Gotta be where You are\n");
    Swords += (r);
    Swords += ("I wanna be where You are\n");
    Swords += ("Peace is where You are\n");
    Swords += ("Joy is where You are\n");
    Swords += ("And love is who You are\n");
    return Swords;
}

song();

let tag = document.getElementById("forGlory");


function handleClick() {
    let songLyrics;
    songLyrics = song();
    tag.innerHTML = songLyrics;
}

let button = document.getElementById("showLyrics");
button.addEventListener("click", handleClick);