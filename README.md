BananaJack
===

Goals
---

Use WebComponent to implement a BananaJack client.

If you want, you can start on these git branches:

* `start-native`: containing a skeleton for native WebComponent
* `start-stencil`: containing a skeleton for Stencil


Rules
---

The purpose is to earn lots of 🍌.
The rules are a very simplified version of BlackJack.

When you enter the room

- you had to wait the end of the active round
- at the beginning of the round, two cards are given to every active players, including the *bank*
- the score is the sum of the value of your cards (King, Queen and Jack give 10, Ace can give 1 or 11).
  - if score is 21, you have a BananaJack 🎉
  - if score is greater than 21, you loose 😢
  - otherwise you can `draw` a new card or `stay`, notice than if already have `stay` once, you cannot `draw` a card
- at the end of the round, players with greater score earn a 🍌, if you have a BananaJack you earn one more 🍌.

You can play [here](http://ilaborie.org:9898)

REST API
---

### Login

`POST http://ilaborie.org:9898/api/auth/login`

With body:

```json
{
    "name": "toto"
}
```

Return a `Player`:

```json
{
    "id": "12f128c8a81d9fcf58615b6ba871e74e9c961975",
    "name": "toto",
    "score": 0
}
```

### Logout

`POST http://ilaborie.org:9898/api/auth/logout`

With body:

```json
{
    "playerId": "12f128c8a81d9fcf58615b6ba871e74e9c961975"
}
```

Return a `Player`:

```json
{
    "id": "12f128c8a81d9fcf58615b6ba871e74e9c961975",
    "name": "toto",
    "score": 42
}
```

### Get Rooms

`GET http://ilaborie.org:9898/api/room`

Return an array of `Room`:

```json
[
    {
        "bank": {
            "canDo": [],
            "hand": {
                "cards": [ "4H", "5H" ],
                "score": 9
            },
            "move": "burst"
        },
        "full": false,
        "id": 1,
        "name": "Room #01",
        "players": [
            {
                "player": {
                    "id": "d14202bd59734f221afacdee1ae97d5461088c28",
                    "name": "toto",
                    "score": 2
                },
                "status": {
                    "canDo": [ "draw", "stay" ],
                    "hand": {
                        "cards": [ "0S", "8D" ],
                        "score": 18
                    },
                    "move": "in-game"
                }
            }
        ]
    }, /* ... */
]
```

### Join Room

`POST http://ilaborie.org:9898/api/room/join`

With body:

```json
{
  "roomId":1,
  "playerId":"d14202bd59734f221afacdee1ae97d5461088c28",
}
```

Return the updated `Room`:

```json
{
  "id":1,
  "name":"Room #01",
  "players":[
    {
      "player": {"id":"d14202bd59734f221afacdee1ae97d5461088c28","name":"toto","score":0},
      "status": {
        "hand":{"cards":[],"score":0},
        "move":"wait",
        "canDo":[]
      }
    }
  ],
  "bank": {
    "hand":{"cards":[],"score":0},
    "move":"in-game",
    "canDo":["draw","stay"]
  },
  "full":false
}
```

### Leave Room

`POST http://ilaborie.org:9898/api/room/leave`

With body:

```json
{
  "roomId":1,
  "playerId":"d14202bd59734f221afacdee1ae97d5461088c28",
}
```

Return the updated `Room`

### Do an action `draw`, `stay`

`POST http://ilaborie.org:9898/api/room/move`

With body:

```json
{
  "roomId": 1,
  "playerId": "d14202bd59734f221afacdee1ae97d5461088c28",
  "action": "stay"
}
```

Return the updated `Room`

WebSocket API
---

When you join a room, you need to open a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
at `ws://ilaborie.org:9898/ws/<ROOM_ID>`.

When connected, you also need to send a register message like that

```json
{
  "playerId": "d14202bd59734f221afacdee1ae97d5461088c28",
}
```

Then the server notify when event appends, they look like:

```typescript
interface RoomEvent {
    type: string;
    round?: number;
    step?: number;
    room?: Room;
    roomId?: number;
    player?: Player;
    winners?: string;
    action?: Move;
}
```

### type `turn-started`

A new round have started, the `room` attribute contains the updated `Room`.

### type `turn-ended`

A turn is ended, thus another one is starting, the `room` attribute contains the updated `Room`.

### type `round-ended`

A round is ended, the `room` attribute contains the updated `Room`.

### type `player-joining`

A player is joining the room, see the `player` attribute.

### type `player-leaving`

A player is joining the room, see the `player` attribute.

### type `player-action`

A player have made a move, see the `action` attribute.

Suggestions
---

You are free to implements

* [a typescript model](./samples/model.ts)
* [a typescript backend API with fetch](./samples/api.ts)
* [a CSS file](./samples/base.css)
* [an error page](./samples/error.html)
* [a login page](./samples/login.html)
* [a rooms list page](./samples/rooms.html)
* [a current room page](./samples/current.html)
