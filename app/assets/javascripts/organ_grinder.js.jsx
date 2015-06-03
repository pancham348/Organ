$(function(){
	var Organ = React.createClass({
		render: function(){
			var keys = []

		  Tones.forEach(function(key){

						if (key.length === 3) {
							keys.push(<Key type={"sharp"} noteName={key}/>)
						}else{
							keys.push(<Key noteName={key}/>)
						}
						
		  })
			return(
				<div>
					<div id="organ">{keys}</div>
					<Recorder />
				</div>
			)
		}
	});
	var root = document.getElementById("content")
	React.render(<Organ/>, root)
});
