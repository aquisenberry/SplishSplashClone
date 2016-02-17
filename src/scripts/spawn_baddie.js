"use strict";

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = function(entity, game) {

	var baddie = game.instantiatePrefab("baddie");
	var right = getRandomInt(0,1);
	var y = getRandomInt(100, game.canvas.height - 120);
	var baddie_pos = {
		"x": -100,
		"y": y
	};
	var baddie_velocity = {
		"x": 0.2,
		"y": 0
	}
	if(right) {
		baddie_pos.x = game.canvas.width + 100;
		baddie_velocity.x = -0.2;
	}
	game.entities.set(baddie, "position", baddie_pos);
	game.entities.set(baddie, "velocity", baddie_velocity);


	var timers = game.entities.get(entity, "timers");
	timers.spawn_baddie.time = 0;
	timers.spawn_baddie.running = true;

}
