var Key = React.createClass({
	
	getInitialState: function(){
		return {keyClass: "key" }
	},
	
	componentDidMount:function(){
		this.note = new Note(Tones[this.props.noteName])
		KeyStore.addChangeListener(this.playNote);
	},

	playNote: function(){
		if (playingKeys[this.props.noteName]) {
			this.note.start();
			this.setState({keyClass: "blue-key"})
		}else{
			this.note.stop();
			this.setState({keyClass: "key"})
		}
	},

	render: function(){
		var c = this.state.keyClass
			return(
				<div className={c}>
					
				</div>
			)
	}
})