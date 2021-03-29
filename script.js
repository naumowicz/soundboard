const kolory = ['red', 'green', 'blue', 'purple', 'teal', 'maroon', 'orange', 'black', '#F87217', 'magenta', '#6C2DC7'];

const text = ['Familiada - dobrze', 'Familiada - źle', 'Familiada - było', '1 z 10 - czołówka','1 z 10 - dobrze', '1 z 10 - źle', '1 z 10 - otóż nie', 'urwie mnie od internetu'];

let dzwieki = ['./sounds/Familiada/dobrze.mp3', './sounds/Familiada/blad.mp3', 'sounds/Familiada/bylo.mp3', 'sounds/1z10/czolowka.mp3' 'sounds/1z10/dobrze.mp3', 'sounds/1z10/zle.mp3', 'sounds/1z10/otoznie.m4a', 'sounds/inne/urwieOdInternetu.mp3'];

for (let i = 0; i < dzwieki.length; i++) {
	dzwieki[i] = new Audio(dzwieki[i]);
}

function dzwiek(id) {
	dzwieki[id].play();
}

const body = document.querySelector('body');

function randomColor() {
	return kolory[Math.floor(Math.random() * kolory.length)];
}

function generujPrzyciski() {
	for (let i = 0; i < text.length; i++) {
		let div = document.createElement('div');
		div.setAttribute('id', i);
		let span = document.createElement('span');
		span.innerText = text[i];
		div.addEventListener('click', function () {
			dzwiek(i);
		});
		div.style.backgroundColor = randomColor();
		div.appendChild(span);
		body.appendChild(div);
	}
}

generujPrzyciski();
