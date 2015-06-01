(function(){
	window.PRESSED_KEYS = {};
	window.KEY_MAP = {
		65:'C1',
		66:'C2',
		67:'C3',
		68:'C4',
		69:'C5',
		70:'C6',
		71:'C7',
		72:'D1',
		73:'D2',
		74:'D3',
		75:'D4',
		76:'D5',
		77:'D6',
		78:'D7'
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