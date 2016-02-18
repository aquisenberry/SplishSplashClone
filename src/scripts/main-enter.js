"use strict";

module.exports = function(game) { // eslint-disable-line no-unused-vars

	// Place Player
	var player = 1;
	var player_size = game.entities.get(player, "size");
	var start_pos = {
		"x": game.canvas.width / 2 - player_size.width / 2,
		"y": game.canvas.height - player_size.height - 85

	}
	game.entities.set(player, "position", start_pos);
	var start_velocity = {
		"x": 0,
		"y": -0.3
	}
	game.entities.set(player, "velocity", start_velocity);

	// Place Walls
	var top_wall = game.instantiatePrefab("wall");
	var top_size = game.entities.get(top_wall, "size");
	var bot_wall = game.instantiatePrefab("wall");
	game.entities.set(top_wall, "position", {"x": game.canvas.width / 2 - top_size.width / 2, "y": 80});
	game.entities.set(bot_wall, "position", {"x": game.canvas.width / 2 - top_size.width / 2, "y": game.canvas.height - 80});

	// First Coin
	var coin = game.instantiatePrefab("coin");
	var coin_size = game.entities.get(coin, "size");
	game.entities.set(coin, "position", {"x": game.canvas.width / 2 - coin_size.width / 2, "y": 95});

};
