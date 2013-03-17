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

			var bar = new PIXI.Sprite(this.sandbox.textures.bar);
			bar.anchor.x = 0.5;
			bar.anchor.y = 0.5;
			this.sandbox.stage.addChild(bar);
			bar.position.x = position.x;
			bar.position.y = position.y;
			bar.scaler = 0.5;

			this.players.push(bar);
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