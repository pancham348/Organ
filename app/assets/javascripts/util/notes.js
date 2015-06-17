(function(){
	 var ctx = new (window.AudioContext || window.webkitAudioContext)();
	 
	 window.Note = function(freq){
		 
		 var createOscillator = function(freq){
			 var osc = ctx.createOscillator();
			 osc.type = "sine";
			 osc.frequency.value = freq;
			 osc.detune.value = 0;
			 osc.start(ctx.currentTime);
			 return osc;
		 };
		 
		 var createGainNode = function(){
			 var gainNode = ctx.createGain();
			 gainNode.gain.value = 0;
			 gainNode.connect(ctx.destination);
			 return gainNode;
		 };
		 
		 this.oscillatorNode = createOscillator(freq);
		 
		 this.gainNode = createGainNode();
		 
		 this.oscillatorNode.connect(this.gainNode);

	 }
	 
	 Note.prototype = {
		 start: function(){
			 this.gainNode.gain.value = 0.75;
		 },
		 
		 stop: function(){
		 	this.gainNode.gain.value = 0.0;
		 }
	 }
	 
})();