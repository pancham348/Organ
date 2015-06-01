var Key = React.createClass({
	componentDidMount:function(){
		debugger;
		this.note = new Note(Tones[this.props.noteName])
	},

	playNote: function(){
	 	this.note.start();
	},

	render: function(){
			return(
				<div className="key">
					
				</div>
			)
	}
})