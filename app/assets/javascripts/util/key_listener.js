(function(){
	
	
	//window.keyListener = function(){
		document.addEventListener('keydown', storeKey);
		document.addEventListener('keyup', removeKey);
		function storeKey(event){
			if (KEY_MAP[event.keyCode]){
				//window.PRESSED_KEYS[event.keyCode] = window.KEY_MAP[event.keyCode];
				organActions.pressKey(event.keyCode);
			}
		}
	
		function removeKey(event){
			//delete window.PRESSED_KEYS[event.keyCode]
			if (KEY_MAP[event.keyCode]){
			
				organActions.releaseKey(event.keyCode);
			}else if (event.keyCode === 81){
				moveLeftUp()
			}else if (event.keyCode === 80){
				moveRightDown()
			}else if (event.keyCode === 9){
				moveLeftDown()
			}else if (event.keyCode === 219){
				moveRightUp()
			}
		}
		//}
		function moveLeftUp(){
			if (window.leftOct < 5){
				window.leftOct++;
				updateKeys();
			}
		}
		
		function moveLeftDown(){
			if (window.leftOct > 3){
				window.leftOct--;
				updateKeys();
			}
		}
		
		function moveRightUp(){
			if (window.rightOct < 5){
				window.rightOct++;
				updateKeys();
			}
		}
		
		function moveRightDown(){
			if (window.rightOct > 3){
				window.rightOct--;
				updateKeys();
			}
		}
})();