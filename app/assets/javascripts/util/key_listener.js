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
			}
		}
		//}
	
})();