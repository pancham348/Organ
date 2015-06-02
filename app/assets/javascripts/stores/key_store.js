(function(){
	window.PRESSED_KEYS = {};
	window.KEY_MAP = {
		65:'C3',
		66:'C4',
		67:'C5',
		68:'D3',
		69:'D4',
		70:'D5',
		71:'E3',
		72:'E4',
		73:'E5',
		74:'F3',
		75:'F4',
		76:'F5',
		77:'G3',
		78:'G4',
		79:'G5',
		80: 'C2'
		
	}
	
	window.playingKeys = {}
	var CHANGE_EVENT = "change"
	var currentKey;
	window.KeyStore = $.extend({}, EventEmitter.prototype, {
		addChangeListener: function(callback){
			this.on(CHANGE_EVENT, callback)
		},
		
		dispatcherID: AppDispatcher.register(function(payload){
			
      if(payload.actionType === OrganConstants.KEY_PRESSED) {
				if (!playingKeys[KEY_MAP[payload.keyCode]]) {
	  			//var n = new Note(Tones[KEY_MAP[payload.keyCode]])
					//n.start()
					playingKeys[KEY_MAP[payload.keyCode]] = true;
	        
				}
				//playingKeys[payload.keyCode].start()
				KeyStore.emit(CHANGE_EVENT);
  			
      }else if (payload.actionType === OrganConstants.KEY_RELEASED) {
				//var n = new Note(Tones[KEY_MAP[payload.keyCode]])
				//playingKeys[payload.keyCode].stop();
				delete playingKeys[KEY_MAP[payload.keyCode]];
        KeyStore.emit(CHANGE_EVENT);
      }
		})
  })
	
})();