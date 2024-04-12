enum Direction {
    Up = 99,
    Down,
    Right = 41,
    Left
}

function DoSomething(KeyPressed: Direction) {
    if(KeyPressed == Direction.Up) {

    }
}

DoSomething(Direction.Down)
////

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// app.get('/', (req, res) => {
//     if(!req.query.userId) {
//         res.status(ResponseStatus.Error).json({});
//     }

//         res.status(ResponseStatus.Success).json({});
// })