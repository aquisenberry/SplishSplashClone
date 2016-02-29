"use strict";

module.exports = function(ecs, game) {
	ecs.addEach(function(entity, elapsed) {
		var size = {
			"width": game.canvas.width * 0.5,
			"height": game.canvas.height * 0.1
		};
		game.entities.set(entity, "size", size);
	}, "play_again");
};
