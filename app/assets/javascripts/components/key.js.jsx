var Key = React.createClass({
	
	getInitialState: function(){
		
		if (this.props.type) {
			return {keyClass: this.props.type }
		}else{
			return {keyClass: "key" }
		}
		
	},
	
	componentDidMount:function(){
		this.note = new Note(allTones[this.props.noteName])
		KeyStore.addChangeListener(this.playNote);
	},

	playNote: function(){
		if (playingKeys[this.props.noteName]) {
			this.note.start();
			if (this.props.type) {
				this.setState({keyClass: "sharp-active"})
			}else{
				this.setState({keyClass: "blue-key"})
			}
			
		}else{
			this.note.stop();
			if (this.props.type) {
				this.setState({keyClass: this.props.type});
			}else{
				this.setState({keyClass: "key"});
			}
			
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