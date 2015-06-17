(function(){
	window.KEY_MAP = {
		65:'C3',
		83:'D3',
		68:'E3',
		70:'F3',
		71:'G3',
		72:'C4',
		74:'D4',
		75:'E4',
		76:'F4',
		186:'G4',
		87:'CS3',
		69:'DS3',
		85:'CS4',
		73:'DS4'
	}

	var playingKeys = {};
	window.lastPlayed = [];
	var CHANGE_EVENT = "change"
	var currentKey;
	var startedRecording = false;
	var startingTime;
	window.KeyStore = $.extend({}, EventEmitter.prototype, {
		getPlayingKeys: function(){
				return playingKeys;
		},
		_resetKeys: function(){
			playingKeys = {};
			KeyStore.emit(CHANGE_EVENT);
			return playingKeys;
		},
		addChangeListener: function(callback){
			this.on(CHANGE_EVENT, callback)
		},
		dispatcherID: AppDispatcher.register(function(payload){
			if(payload.actionType === OrganConstants.KEY_PRESSED) {
				if (KEY_MAP[payload.keyCode] && !playingKeys[KEY_MAP[payload.keyCode]]) {
					playingKeys[KEY_MAP[payload.keyCode]] = true;
					KeyStore.emit(CHANGE_EVENT);
				}
      }else if (payload.actionType === OrganConstants.KEY_RELEASED) {
				if (KEY_MAP[payload.keyCode] && playingKeys[KEY_MAP[payload.keyCode]]) {
					delete playingKeys[KEY_MAP[payload.keyCode]];
        	KeyStore.emit(CHANGE_EVENT);
      	}
			}else if (payload.actionType === OrganConstants.PLAY_KEY) {
				if (!playingKeys[payload.key]) {
					playingKeys[payload.key] = true;
        	KeyStore.emit(CHANGE_EVENT);
      	}
			}
		})
  })
	KeyStore.setMaxListeners(53);

})();
