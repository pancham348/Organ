(function(){
	window.Track = function(trackName){
		this.trackName = trackName;
		this.roll = [];
		window.track = this;
	}

	var _playNotes = function(notes){
		//play all the notes
		KeyStore._resetKeys();
		notes.forEach(function(note){
			organActions.playKey(note);
		})
		//KeyStore._resetKeys();
	};

	Track.prototype = {
		record: function(){
			KeyStore._resetKeys();
			var d = new Date();
			this.startTime = d.getTime();
			console.log("Recording");
		},

		stopRecording: function(){
			this.addNotes([]);
			console.log(this.roll)
		},

		addNotes: function(notes){
			var delta = Date.now() - this.startTime;
			this.roll.push({notes: notes, time: delta});
		},
		play: function(){
			var slices = this.roll.slice();
			var playNotes = this._playNotes;
			slices.forEach(function(slice){
				// if (a) {
				// 	clearTimeout(a)
				// }
				var a = setTimeout(_playNotes.bind(null, slice.notes), slice.time);
				// clearTimeout(a)
			});
		}

	}
})();
