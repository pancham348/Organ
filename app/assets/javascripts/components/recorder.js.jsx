var Recorder = React.createClass({
	componentDidMount: function(){
		this.track = new Track("newTrack");
		KeyStore.addChangeListener(this._onChange);
	},
	_onChange: function(){
		this.track.addNotes(Object.keys(KeyStore.getPlayingKeys()));
	},
	record: function(){
		this.track.record();
	},

	stopRecording: function(){
		this.track.stopRecording();
	},

	play: function(){
		this.track.play();
	},

	render: function(){
		var that = this;
		return(
			<div id="recorder">
			<button id="recording" onClick={this.record}>Record</button>
			<button id="play-track" onClick={this.stopRecording}>Stop</button>
				<button id="play-track" onClick={this.play}>Play</button>
			</div>
		)
	}
})
