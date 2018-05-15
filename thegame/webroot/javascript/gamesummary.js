function GameSummary(client, server, result) {
	this.clientGesture=client;
	this.serverGesture=server;
	this.result=result;
	this.date=new Date();
	
	this.getClientGesture = function(){
		this.clientGesture;
	}
	
	this.getServerGesture = function(){
		this.serverGesture;
	}
	
	this.getResult = function(){
		this.result;
	}
	
	this.getDate = function(){
		this.date;
	}
	
	this.toString = function() {
		let output = "Client :: " + this.clientGesture;
		let simpleDate = this.date.getHours()+ ":" + this.date.getMinutes() + "." + this.date.getSeconds();
		output = output + " :: Server :: " + this.serverGesture;
		output = output + " :: Result :: " + this.result;
		output = output + " :: Time played :: " + simpleDate;
		return output;
	}
}