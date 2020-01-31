let dzwieki = ['./sounds/Familiada/dobrze.mp3', './sounds/Familiada/blad.mp3', 'sounds/1z10/dobrze.mp3', 'sounds/1z10/zle.mp3'];

for (let i = 0; i < dzwieki.length; i++) {
	dzwieki[i] = new Audio(dzwieki[i]);
}

function dzwiek(id) {
	dzwieki[id].play();
}

let div = document.querySelectorAll('body > div');

for (let i = 0; i < div.length; i++) {
	div[i].addEventListener('click', function() {
		dzwiek(div[i].getAttribute('id'));
	});
}