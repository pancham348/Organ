var Organ = React.createClass({
  render: function(){
    var keys = []

    Tones.forEach(function(note, idx){
          if (note.length === 3) {
            keys.push(<Key key={idx} type={"sharp"} noteName={note}/>)
          }else{
            keys.push(<Key key={idx} noteName={note}/>)
          }

    });
    return(
      <div>
        <div id="organ">{keys}</div>
        <Recorder />
      </div>
    )
  }
});
