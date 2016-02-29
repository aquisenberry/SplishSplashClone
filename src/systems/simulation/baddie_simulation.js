"use strict";

module.exports = function(ecs, game) { //eslint-disable-line no-unused-vars
    ecs.addEach(function(entity, elapsed) { //eslint-disable-line no-unused-vars
        var pos = game.entities.get(entity, "position");
        if(pos.x < -65 || pos.x > game.canvas.width + 35) {
            game.entities.destroy(entity);
        }
    }, "baddie");
};
