let cword = document.getElementById("current-word");
let timedisplay = document.getElementById("time");
let scoredisplay = document.getElementById("score");
let message = document.getElementById("message");
let dropdown = document.getElementById("my-dropdown");
let resetbtn = document.getElementById("reset");




// set difficulty

function setdifficulty() {

    return Number(dropdown.value);
}

let time = setdifficulty();
let score = 0;

let words = [
    "hello","HI","Avenger","javascript","MERN","Cool","sid","html","css","github","git-lab","abacus", "abandon", 
    "ability", "absent", "absorb", "abstract", "absurd", "abuse", "academy", "accent",
    "acoustic", "acquire", "across", "actress", "adapt", "addict", "adequate", "adjective", "adjust", "admiral",
    "admit", "adventure", "aerial", "affair", "afternoon", "again", "agency", "agile", "aircraft", "aisle",
    "alarm", "album", "alcohol", "alert", "alien", "alligator", "allocate", "allow", "alone", "alpha",
    "alter", "although", "altitude", "alumni", "amazing", "ambition", "amend", "amplify", "anatomy", "ancestor",
    "ancient", "angel", "angry", "animal", "ankle", "annoy", "answer", "antenna", "anxiety", "apart",
    "apology", "appear", "apple", "apricot", "arcade", "archer", "arena", "argue", "arise", "army",
    "around", "arrange", "arrest", "arrive", "arrow", "artefact", "artist", "ascend", "ashamed", "aside",
    "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attain",
    "attempt", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "autumn", "average",
    "avocado", "awake", "awesome", "axis", "baby", "bachelor", "bacon", "badge", "bagel", "bake",
    "balance", "ballot", "bamboo", "banana", "bandit", "banker", "barber", "bargain", "barrel", "baseball",
    "basement", "bachelor", "bacon", "badge", "bagel", "bake", "balance", "ballot", "bamboo", "banana",
    "bandit", "banker", "barber", "bargain", "barrel", "baseball", "basket", "bathroom", "battery", "battle",
    "beach", "beard", "beaver", "become", "bedroom", "beef", "before", "begin", "behave", "behind",
    "believe", "below", "belt", "bench", "benefit", "best", "beyond", "bike", "bind", "biology",
    "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "blend",
    "bless", "blind", "bloom", "blue", "blur", "blush", "board", "boat", "body", "boil",
    "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom",
    "bounce", "boxer", "brain", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright",
    "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble",
    "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden",
    "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin",
    "cable", "cactus", "cage", "cake", "calm", "camera", "camp", "canal", "cancel", "candy",
    "cannon"
]

resetbtn.addEventListener("click", () => {
    // alert("hi");
    score = 0;
    time = setdifficulty();
    message.innerHTML = "";
    scoredisplay.innerHTML = score;

})

function showword() {
    let index = Math.floor(Math.random() * words.length);
    cword.innerHTML = words[index]


}

window.addEventListener("DOMContentLoaded", showword);

let inp = document.getElementById("word-input");

function change(e) {
    if (e.target.value === cword.innerHTML) {
        message.innerHTML = "success";
        showword();
        e.target.value = "";
        score++;
        scoredisplay.innerHTML = score;
        time = setdifficulty();
    }
    else {
        message.innerHTML = "";

    }


}

inp.addEventListener("input", change);

setInterval(() => {
    if (time >= 0) {
        timedisplay.innerHTML = time;
        time--;
    }
    else {
        message.innerHTML = "GAME OVER";
        score = -1

    }
}, 1000)






