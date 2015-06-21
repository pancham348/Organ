(function(){
	window.rightOct = 4;
	window.leftOct = 3;

	window.updateKeys = function(){
		window.KEY_MAP = {
			65:'C' + leftOct,
			83:'D' + leftOct,
			68:'E' + leftOct,
			70:'F' + leftOct,
			71:'G' + leftOct,
			72:'C' + rightOct,
			74:'D' + rightOct,
			75:'E' + rightOct,
			76:'F' + rightOct,
			186:'G' + rightOct,
			87:'CS' + leftOct,
			69:'DS' + leftOct,
			85:'CS' + rightOct,
			73:'DS' + rightOct
		}
		
	}
	
 	updateKeys()
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
