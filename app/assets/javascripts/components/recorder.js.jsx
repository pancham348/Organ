var Recorder = React.createClass({
	
	componentDidMount: function(){
		this.track = new Track("newTrack")
	},
	
	record: function(){
		if (this.track) {
			this.track.record();
		}
	},
	
	stopRecording: function(){
		if (this.track) {
			this.track.stopRecording();
		}
	},
	
	play: function(){
		if (this.track) {
			this.track.play();
		}
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