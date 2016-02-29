"use strict";

function place_new_coin(game, top_coin) {
	var coin = game.instantiatePrefab("coin");
	var coin_size = game.entities.get(coin, "size");
	var coin_pos = {
		"x": game.canvas.width / 2 - coin_size.width / 2,
		"y": 95
	}
	if(!top_coin) {
		coin_pos.y = game.canvas.height - 105;
	}
	game.entities.set(coin, "position", coin_pos);

}

module.exports = function(ecs, game) { //eslint-disable-line no-unused-vars
    ecs.addEach(function(entity, elapsed) { //eslint-disable-line no-unused-vars

		var velocity = game.entities.get(entity, "velocity");
		var score = game.entities.get(entity, "score");

		if(game.input.buttonPressed("switch") || game.input.mouse.consumePressed(0)) {
			velocity.y = -velocity.y;	
		}

		var collisions = game.entities.get(entity, "collisions");
		var top_coin;
		for(var i = 0; i < collisions.length; i++) {
			var other = collisions[i];
			if(game.entities.get(other, "wall")) {
				velocity.y = -velocity.y;	
			}
			if(game.entities.get(other, "baddie")) {
				game.sounds.play("hit");
				game.switchScene("game_over", {"score": score});
			}
			if(game.entities.get(other, "coin")) {
                game.sounds.play("pickup");
				top_coin = game.entities.get(entity, "top_coin");
				game.entities.set(entity, "score", ++score);
				game.entities.destroy(other);
				game.entities.set(entity, "top_coin", !top_coin);
				place_new_coin(game, top_coin);
			}
		}
		
    }, "player");
};
