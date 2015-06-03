(function(){
	window.PRESSED_KEYS = {};
	window.KEY_MAP = {
		// 65:'C3',
// 		66:'C4',
// 		67:'C5',
// 		68:'D3',
// 		69:'D4',
// 		70:'D5',
// 		71:'E3',
// 		72:'E4',
// 		73:'E5',
// 		74:'F3',
// 		75:'F4',
// 		76:'F5',
// 		77:'G3',
// 		78:'G4',
// 		79:'G5',
// 		80:'CS3',
// 		81:'CS4',
// 		82:'CS5',
// 		83:'DS3',
// 		84:'DS4'
		65:'C3',
		83:'D3',
		68:'E3',
		70:'F3',
		71:'G3',
		72:'C4',
		74:'D4',
		75:'E4',
		76:'F4',
		186: 'G4',
		87:'CS3',
		69:'DS3',
		85:'CS4',
		73:'DS4'
	}
	
	window.playingKeys = {}
	window.lastPlayed = [];
	var CHANGE_EVENT = "change"
	var currentKey;
	var startedRecording = false;
	var startingTime;
	window.KeyStore = $.extend({}, EventEmitter.prototype, {
		addChangeListener: function(callback){
			this.on(CHANGE_EVENT, callback)
		},
		
		dispatcherID: AppDispatcher.register(function(payload){
			
			if (payload.actionType === OrganConstants.RECORDING) {
				startedRecording = true;
				startingTime = payload.startTime;
			}else if(payload.actionType === OrganConstants.STOPPED_RECORDING){
				startedRecording = false;
			}else if(payload.actionType === OrganConstants.KEY_PRESSED) {
				if (KEY_MAP[payload.keyCode]) {
					if (!playingKeys[KEY_MAP[payload.keyCode]]) {
		  			//var n = new Note(Tones[KEY_MAP[payload.keyCode]])
						//n.start()
						playingKeys[KEY_MAP[payload.keyCode]] = payload.startTime;
	        
					}
					//playingKeys[payload.keyCode].start()
					KeyStore.emit(CHANGE_EVENT);
				}
  			
      }else if (payload.actionType === OrganConstants.KEY_RELEASED) {
				//var n = new Note(Tones[KEY_MAP[payload.keyCode]])
				//playingKeys[payload.keyCode].stop();
				if (startedRecording) {
					lastPlayed.push({note: new Note(allTones[KEY_MAP[payload.keyCode]]), start: playingKeys[KEY_MAP[payload.keyCode]], end: Date.now()})
				}
				delete playingKeys[KEY_MAP[payload.keyCode]];
        KeyStore.emit(CHANGE_EVENT);
      }
		})
  })
	
})();