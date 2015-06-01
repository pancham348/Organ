$(function(){
	var Organ = React.createClass({
		render: function(){
			var keys = []
		  Object.keys(Tones).forEach(function(key){
						keys.push(<Key noteName={key}/>)
		  })
			return(
				<div id="organ">{keys}</div>
			)
		}
	});
	var root = document.getElementById("content")
	React.render(<Organ/>, root)
});
