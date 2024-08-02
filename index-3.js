function glory(){
    return "For Your glory";
}

function I(){
    return "I will do anything";
}

function you(){
    return "Just to see You";
}

function king(){
    return "To behold You as my King";
}

function refrain() {
    let words = "";
    words += `${glory()}`;
    words += `${I()}`;
    words += `${you()}`;
    words += `${king()}`;
    return words;
}

function song() {
    let r;
    
    console.log("Lord if I\n");
    console.log("Find favor in Your sight\n");
    console.log("Lord please\n");
    console.log("Hear my hearts cry\n");
    console.log("I'm desperately waiting\n");
    console.log("To be where You are\n");
    console.log("I'll cross the hottest desert\n");
    console.log("I'll travel near or far\n");
    r = refrain();
    console.log(r);
    console.log("Lord if I find favor in Your sight\n");
    console.log("Lord please, Lord please(Lord please)\n");
    console.log("Hear my hearts cry(hear my hearts cry)\n");
    console.log("I'm desperately waiting (I'm desperately waiting)\n");
    console.log("To be where You are(to be where You are)\n");
    console.log("I'll cross the hottest desert (I'll cross the hottest desert)\n");
    console.log("I'll travel near or far\n");
    console.log("For Your glory(for Your glory)\n");
    console.log("I will do (I will do) anything(anything)\n");
    console.log("Just to see You(just to see You)\n");
    console.log("To behold You as my King(to behold You as my King)\n");
    console.log(r);
    console.log("I wanna be where You are (I really wanna be there)\n");
    console.log("I gotta be where You are\n");
    console.log("I wanna be where You are\n");
    console.log("I gotta be where You are\n");
    console.log("I wanna be where You are\n");
    console.log("Gotta be where You are (I wanna be there)\n");
    console.log("I wanna be where You are\n");
    console.log("Gotta be where You are\n");
    console.log(r);
    console.log("I wanna be where You are\n");
    console.log("Peace is where You are\n");
    console.log("Joy is where You are\n");
    console.log("And love is who You are\n");
    return song;
}

song();
