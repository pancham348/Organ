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
	
	window.allTones = {
			// C1: 32.7,
			// C2: 65.4,
			// C3: 130.8,
			// C4: 261.6,
			// C5: 523.3,
			// C6: 1046.5,
			// C7: 2093.0,
			// D1: 36.7,
			// D2: 73.4,
			// D3: 146.8,
			// D4: 293.7,
			// D5: 587.3,
			// D6: 1174.7,
			// D7: 2349.3,
			// E1: 41.2,
			// E2: 82.4,
			// E3: 164.8,
			// E4: 329.6,
			// E5: 659.3,
			// E6: 1318.6,
			// E7: 2637,
	}
	
	for (key in initialTones){
		for (var i = 1; i <= 7; i++) {
			if (i > 1) {
				allTones[key + i] = allTones[key + (i - 1)] * 2
			}else{
				allTones[key + i] = initialTones[key] * i
			}
			
		}
	}
	
	window.Tones = []


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


