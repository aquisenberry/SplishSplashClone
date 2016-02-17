"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
    ecs.addEach(function(entity, context) { // eslint-disable-line no-unused-vars
		var score = game.entities.get(entity, "score");
		context.font = "24px mono";
		context.fillStyle = "red";
		var msg = score + "pts";
		var w = context.measureText(msg).width;

		context.fillText(msg, game.canvas.width - w - 10, 30);
    }, "player");
};
