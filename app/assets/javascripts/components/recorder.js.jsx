var Recorder = React.createClass({
	
	getInitialState:function(){
		return {status: "Press Record to start making music!"}
	},
	componentDidMount: function(){
		this.track = new Track("newTrack");
		KeyStore.addChangeListener(this._onChange);
	},
	_onChange: function(){
		this.track.addNotes(Object.keys(KeyStore.getPlayingKeys()));
	},
	record: function(){
		this.track.record();
		this.setState({status: "RECORDING"})
	},

	stopRecording: function(){
		this.track.stopRecording();
		this.setState({status: "Press Record to start making music!"})
	},

	play: function(){
		this.track.play();
	},

	render: function(){
		var that = this;
		var leftOct = window.leftOct
		var rightOct = window.rightOct
		return(
			<div id="recorder">
				<button id="recording" onClick={this.record}>Record</button>
				<button id="play-track" onClick={this.stopRecording}>Stop</button>
				<button id="play-track" onClick={this.play}>Play</button>
				<div id="status">{this.state.status}</div>
			  <div>{leftOct}</div>
				<div>{rightOct}</div>
			</div>
		)
	}
})
