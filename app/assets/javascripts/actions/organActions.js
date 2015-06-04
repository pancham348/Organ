window.organActions = {
	pressKey: function(keyCode){
    AppDispatcher.dispatch({
      actionType: OrganConstants.KEY_PRESSED,
      keyCode: keyCode
    });
	},

	releaseKey: function(keyCode){
    AppDispatcher.dispatch({
      actionType: OrganConstants.KEY_RELEASED,
      keyCode: keyCode
    });
	},

	playKey: function(key){
		AppDispatcher.dispatch({
      actionType: OrganConstants.PLAY_KEY,
      key: key
    });
	}
}
