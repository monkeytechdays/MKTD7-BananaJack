import {Component, Prop, State} from '@stencil/core';
import {Player} from "../../model";

// import BackendApi from '../../api';

@Component({
    tag: 'app-room',
    styleUrl: 'app-room.css'
})
export class AppRoom {
    @Prop() roomId: number;

    handleOnLeave = () => {
      console.log('Leave Room');
    };

    @State() players: Player[] = [
      {
        id: 'Bank',
        name: 'Bank',
        score: 10
      },
      {
        id: 'Player 1',
        name: 'Player 1',
        score: 12
      }
    ];

    componentWillLoad() {
        //console.log('getRooms', BackendApi.join(this.roomId, 'Fred'));
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Rooms</ion-title>
                </ion-toolbar>
            </ion-header>,
            <ion-content padding>
              <article class="room-current">
                <header>
                  <div class="name">
                    Room {this.roomId}
                  </div>
                  <button type="button" onClick={this.handleOnLeave}>Leave</button>
                </header>

                <h3 class="winner">
                  Bank
                </h3>

                <div class="players">
                  {this.players.map((currentPlayer) => (
                    <player-hand player={currentPlayer}></player-hand>
                  ))}
                </div>
              </article>

            </ion-content>
        ];
    }
}
