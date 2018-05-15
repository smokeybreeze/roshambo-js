
function Score() {
	this.wins=0;
	this.losses=0;
	this.ties=0;
	
	this.increaseWins = function(){
		this.wins++;
	}
	this.increaseLosses = function(){
		this.losses++;
	}
	 this.increaseTies = function(){
		this.ties++;
	}
	this.toString = function(){
		output = "Wins: " + this.wins + " Ties: " + this.ties + " Losses: " + this.losses;
		return output;
	}
}
