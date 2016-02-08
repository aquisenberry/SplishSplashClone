"use strict";

module.exports = function(ecs, game) {
	game.entities.registerSearch("grav", ["gravity", "velocity"]);
	ecs.addEach(function(entity, elapsed) {
		var velocity = game.entities.get(entity, "velocity");
		velocity.y += game.entities.get(entity, "gravity");
	}, "grav");
}
