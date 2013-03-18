define([
	"pumpkin"
],function(
	Pumpkin
){

	var Module = Pumpkin.Module.extend({
		_name: 'Players',
		_type: 'core',
		players: [],
		topics: {
			'game.clicked':'handleClick',
			'game.render':'updatePlayers'
		},
		handleClick: function(position){

			var iterate = 0.5;

			for (var i = 0; i < 150; i++) {
				var bar = new PIXI.Sprite(this.sandbox.textures.bar);
				var bx = position.x;
				var by = position.y;

				bar.anchor.x = 1;
				bar.anchor.y = 1;
				


				switch(true){
					case (i%2==0):
						bx +=1;
						by +=1;
						break;
					case (i%2==0):
						bx -=1;
						by -=1;
						break;
					case (i%3==0):
						bx -=2;
						by -=2;
						break;
					case (i%4==0):
						bx +=2;
						by +=2;
						break;
				}

				bar.position.x = bx;
				bar.position.y = by;
				bar.scaler = 0.5;
				bar.width = 1;
				bar.height = 1;
				

				bar.rotation += 0.09*i;
				

				

				this.sandbox.stage.addChild(bar);
				this.players.push(bar);	
			};

			
			//console.log(position);
		},
		updatePlayers: function(){
			this.players.forEach(function(player){
				
				if (player.height > 100 || player.height < 1) {
					player.scaler = -player.scaler;
				};
				player.rotation += 0.03;
				player.height += player.scaler;
			});
		}
	});

	return Module;

});