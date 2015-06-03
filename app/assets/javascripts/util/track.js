(function(){
	window.Track = function(trackName){
		this.trackName =  trackName;
		this.roll = [];
	}
	
	Track.prototype = {
		record: function(){
			var d = new Date();
			this.startTime = d.getTime();
			organActions.startRecording();
			console.log("Recording");
		},
		
		stopRecording: function(){
			var d = Date.now()
			this.delta = d - this.startTime;
			this.addNotes(lastPlayed, this.delta);
			organActions.stopRecording();
			lastPlayed = [];
			console.log(this.roll)
		},
		
		addNotes: function(notes, delta){
				this.roll = notes;
		},
		
		play: function(){
			var start = Date.now()
			while (Date.now() - start <= this.delta) {
					this.roll.forEach(function(roll){
							var currentTime = Date.now()
							//var delta = roll.time.start - start;
							roll.note.start();
					})
			}
			

				this.roll.forEach(function(roll){
						roll.note.stop();
				});
		}
		
	}
})();