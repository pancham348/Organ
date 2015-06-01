(function(){
	window.PRESSED_KEYS = {};
	window.KEY_MAP = {
		65:'C3',
		66:'C4',
		67:'C5',
		68:'C6',
		69:'C7',
		70:'D1'
	}
	
	window.playingKeys = {}
	var CHANGE_EVENT = "change"
	var currentKey;
	window.KeyStore = $.extend({}, EventEmitter.prototype, {
		addChangeListener: function(){
			this.on(CHANGE_EVENT, callback)
		},
		
		dispatcherID: AppDispatcher.register(function(payload){
			
      if(payload.actionType === OrganConstants.KEY_PRESSED) {
				if (!playingKeys[payload.keyCode]) {
	  			var n = new Note(Tones[KEY_MAP[payload.keyCode]])
					//n.start()
					playingKeys[payload.keyCode] = n;
	        
				}
				playingKeys[payload.keyCode].start()
				KeyStore.emit(CHANGE_EVENT);
  			
      }else if (payload.actionType === OrganConstants.KEY_RELEASED) {
				//var n = new Note(Tones[KEY_MAP[payload.keyCode]])
				playingKeys[payload.keyCode].stop();
        KeyStore.emit(CHANGE_EVENT);
      }
		})
  })
	
})();