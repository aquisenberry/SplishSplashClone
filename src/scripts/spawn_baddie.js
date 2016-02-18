"use strict";

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

module.exports = function(entity, game) {

	var baddie = game.instantiatePrefab("baddie");
	var right = getRandomInt(0,1);
	var y = getRandomInt(120, game.canvas.height - 120);
    var size = getRandomInt(15,30);
    var speed = getRandom(0.075, 0.3);
    var baddie_size = {
        "width": size,
        "height": size
    };
	var baddie_pos = {
		"x": -size,
		"y": y
	};
	var baddie_velocity = {
		"x": speed,
		"y": 0
	}
	if(right) {
		baddie_pos.x = game.canvas.width;
		baddie_velocity.x = -speed;
	}
	game.entities.set(baddie, "size", baddie_size);
	game.entities.set(baddie, "position", baddie_pos);
	game.entities.set(baddie, "velocity", baddie_velocity);


	var timers = game.entities.get(entity, "timers");
	timers.spawn_baddie.time = 0;
	timers.spawn_baddie.running = true;

}
