window.organActions = {
	pressKey: function(keyCode){
    AppDispatcher.dispatch({
      actionType: OrganConstants.KEY_PRESSED,
      keyCode: keyCode,
			startTime: Date.now()
    });
	},
	
	releaseKey: function(keyCode){
    AppDispatcher.dispatch({
      actionType: OrganConstants.KEY_RELEASED,
      keyCode: keyCode
    });
	},
	
	startRecording: function(){
    AppDispatcher.dispatch({
			actionType: OrganConstants.RECORDING,
      startTime: Date.now()
    });
	},
	
	stopRecording: function(){
    AppDispatcher.dispatch({
			actionType: OrganConstants.STOPPED_RECORDING,
    });
	}
}