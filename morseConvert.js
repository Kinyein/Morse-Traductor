function convertToMorse(str) {
	const upperStr = str.toString().toUpperCase();

	const morseCode = {
		'A': ' .-',
		'B': ' -...',
		'C': ' -.-.',
		'D': ' -..',
		'E': ' .',
		'F': ' ..-.',
		'G': ' --.',
		'H': ' ....',
		'I': ' ..',
		'J': ' .---',
		'K': ' -.-',
		'L': ' .-..',
		'M': ' --',
		'N': ' -.',
		'Ñ': ' --.--',
		'O': ' ---',
		'P': ' .--.',
		'Q': ' --.-',
		'R': ' .-.',
		'S': ' ...',
		'T': ' -',
		'U': ' ..-',
		'V': ' ...-',
		'W': ' .--',
		'X': ' -..-',
		'Y': ' -.--',
		'Z': ' --..',
		'0': ' -----',
		'1': ' .----',
		'2': ' ..---',
		'3': ' ...--',
		'4': ' ....-',
		'5': ' .....',
		'6': ' -....',
		'7': ' --...',
		'8': ' ---..',
		'9': ' ----.'
	}

	const strArr = upperStr.split(" ");
	const morseSentence = [];
	
	strArr.forEach(w => {
		let word = '';
		for (let l of w) {
			word += morseCode[l] === undefined ? '' : morseCode[l];
		}
		morseSentence.push(word);
	})
	return morseSentence.join(" |");
}

document.addEventListener('DOMContentLoaded', () => {
	const morseForm = document.getElementById('morseTraductorForm');
	const resultContainer = document.querySelector('.container.container-result')
	const newP = document.createElement("p");

	morseForm.addEventListener('submit', e => {
		e.preventDefault();

		const value = morseForm.querySelector('input[type=text]').value;

		const morseResult = convertToMorse(value);
		console.log('morseResult: ', morseResult);
		newP.textContent = morseResult;
		resultContainer.appendChild(newP)
	})
})