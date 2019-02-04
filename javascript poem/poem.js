/* From Mozilla website https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function poem() {
	let nouns = ["dog", "cat", "pig", "cow", "elephant", "giraffe", "rhinoceros", "leopard", "jaguar", "human", "ant", "anteater", "alligator snapping turtle", "crocodile", "Swiss roll"];
	let adjectives = ["big", "small", "good", "bad", "angry", "cowardly", "yellow", "blue", "green", "red", "delicious", "terrible", "dastardly", "legendary", "irrelevant", "wet"];
	let verbs = ["jumps", "runs", "bounces", "falls", "dies", "eats", "drinks", "mimes", "cries", "licks", "plays"];
	let adverbs = ["quickly", "lazily", "smoothly", "slowly", "crazily", "horribly", "flawlessly", "finally"];

	let sentence = "The " + adjectives[getRandomInt(adjectives.length)] + " " + 
	nouns[getRandomInt(nouns.length)] + " " + verbs[getRandomInt(verbs.length)] + 
	" " + adverbs[getRandomInt(adverbs.length)] + ".";

	let d = document.getElementById("div1");
	d.innerHTML += sentence + "<br/>";
}