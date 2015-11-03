function Game(){
  this.cards = {
    0: [],
    1: [],
    2: [],
    3: []
  };
  for (var i = 0; i < 4 ; i++) {
    var a=0;
    for (var j = 1; j <= 128;) {
      this.cards[i].push(new card(j, i, i));
	j=j+Math.pow(2,a);
	a++;
    }
  }
}

Game.prototype.drawRandomCard = function(){
  var rank = ((Math.floor(Math.random()*100))%13) + 1;
  var suit = (Math.floor(Math.random()*10))%4;
  if (this.cards[suit].length < 1) {
    suit =
  }
}

module.exports = Game;
