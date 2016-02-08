"use strict";

function normalize(x, y, pos) {

    var d = Math.sqrt((pos.x - x) * (pos.x - x) + (pos.y - y) * (pos.y - y)); 

    return {
        "x": (x-pos.x)/d,
        "y": (y-pos.y)/d
    };

}

module.exports = function(ecs, game) { //eslint-disable-line no-unused-vars
    ecs.addEach(function(entity, elapsed) { //eslint-disable-line no-unused-vars
		if(game.input.mouse.consumePressed(0)) {
			game.entities.set(entity, "aiming", true);
			game.entities.set(entity, "aim_start", {"x": game.input.mouse.x, "y": game.input.mouse.y});
		}
		console.log(game.entities.get(entity, "velocity"));
		if(game.entities.get(entity, "aiming") && ! game.input.mouse.isPressed(0)) {
			game.entities.set(entity, "aiming", false);
			var new_pos = game.entities.get(entity, "aim_start");
			var uv = normalize(new_pos.x, new_pos.y, {"x": game.input.mouse.x, "y": game.input.mouse.y});
			game.entities.set(entity, "velocity", {"x": uv.x * 0.6, "y": uv.y * 0.7});
			game.entities.set(entity, "gravity", 0.01);
		}
    }, "arrow");
};
