"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 99] = "Up";
    Direction[Direction["Down"] = 100] = "Down";
    Direction[Direction["Right"] = 41] = "Right";
    Direction[Direction["Left"] = 42] = "Left";
})(Direction || (Direction = {}));
function DoSomething(KeyPressed) {
    if (KeyPressed == Direction.Up) {
    }
}
DoSomething(Direction.Down);
////
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
// app.get('/', (req, res) => {
//     if(!req.query.userId) {
//         res.status(ResponseStatus.Error).json({});
//     }
//         res.status(ResponseStatus.Success).json({});
// })
