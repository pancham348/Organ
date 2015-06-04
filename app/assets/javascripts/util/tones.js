(function(){

	var initialTones = {
		A: 22.5,
		B: 30.8,
		C: 32.7,
		D: 36.7,
		E: 41.2,
		F: 43.7,
		G: 49,
		AS: 29.13,
		CS: 34.5,
		DS: 38.9,
		FS: 46.25,
		GS: 52.0
	}

	window.allTones = {};

	for (key in initialTones){
		for (var i = 1; i <= 7; i++) {
			if (i > 1) {
				allTones[key + i] = allTones[key + (i - 1)] * 2
			}else{
				allTones[key + i] = initialTones[key] * i
			}

		}
	}

	window.Tones = [];


	for (var j = 3; j <= 6; j++) {
		for (key in initialTones){
			if (j === 3 && ((key === 'A') || (key === 'B'))) {
				continue
			}

			if (j === 6 && (key !== 'A') && (key !== 'B') && (key !== 'C')) {
				break
			}

			//Tones[key + j] = allTones[key + j]
			Tones.push(key + j)

			if (key !== "E" && key !== "B" && key.length < 2 && (key + j) != "C6") {
				Tones.push(key + "S" + j)
			}
		}
	}

})();
