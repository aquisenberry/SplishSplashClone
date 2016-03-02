"use strict";

module.exports = function(ecs, game) {
	ecs.addEach(function(entity, elapsed) {
		
		var size = {
			"width": game.canvas.width * 0.5,
			"height": game.canvas.height * 0.1
		};
		game.entities.set(entity, "size", size);
		var position = game.entities.get(entity, "position");
		position.x = game.canvas.width / 2 - size.width / 2;
		position.y = game.canvas.height / 2 - size.height / 2;

		if(game.input.mouse.consumePressed(0)) {
			if (game.input.mouse.x > position.x 
				&& game.input.mouse.y > position.y 
				&& game.input.mouse.x < position.x + size.width 
				&& game.input.mouse.y < position.y + size.height) {
					game.switchScene("main");
				}
		}

	}, "play_again");
};
