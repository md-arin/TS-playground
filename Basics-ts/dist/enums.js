"use strict";
var direction;
(function (direction) {
    direction[direction["Up"] = 0] = "Up";
    direction[direction["Down"] = 1] = "Down";
    direction[direction["Left"] = 2] = "Left";
    direction[direction["Right"] = 3] = "Right";
})(direction || (direction = {}));
function doSomething(keyPresseed) {
    if (keyPresseed == direction.Up) {
    }
}
doSomething(direction.Up);
