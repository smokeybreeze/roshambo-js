//document.writeln("<script type='text/javascript' src='gamesummary.js'></script>");
//document.writeln("<script type='text/javascript' src='score.js'></script>");

let theScore = new Score();
let gameHistory =[];
let resultEnum = new Result();

function GameService() {
	
	this.getScore = function() {	
		return theScore;
	}

	this.getGameHistory = function() {	
		return gameHistory;
	}
	
	this.playGame = function(input) {																																												
		let result = "error";		
		if (input==("scissors")) {
			result = resultEnum.LOSS;
			theScore.increaseLosses();
		}
		if (input==("paper")) {
			result = resultEnum.WIN;
			theScore.increaseWins();
		}
		if (input==("rock")) {
			result = resultEnum.TIE;
			theScore.increaseTies();
		}
		
		if (result == "error") { return; }
		console.log("The is the result: " + result);
		
		let gameSummary = new GameSummary(input, "rock", result);
		gameHistory.unshift(gameSummary);
		this.printGameHistory(gameHistory);
		console.log(theScore.toString());
		console.log("Number of wins: " + theScore.wins);
		console.log(gameSummary + " :: ");
		return gameSummary;
	}
	
	this.printGameHistory = function(gameHistory){
		console.log("************** GAME HISTORY *****************");
		let aggregate = "";
		for (let i=0; i < gameHistory.length; i++){
			let gameSummary = gameHistory[i];
			console.log(gameSummary);
			let output = "Client :: " + gameSummary.clientGesture;
			output = output + " :: Server :: " + gameSummary.serverGesture;
			output = output + " :: Result :: " + gameSummary.result;
			output = output + " :: Time played :: " + gameSummary.date;
			console.log(output);
			aggregate =  aggregate + output + "<br/>";
		}
		document.getElementById('history').innerHTML = aggregate;
		
		console.log("***********END OF GAME HISTORY *****************");
		return aggregate;
		
	}
}

