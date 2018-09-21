import { Component, Prop } from '@stencil/core';
import {Player} from "../../model";

// import BackendApi from '../api';

@Component({
  tag: 'player-hand',
  styleUrl: 'player-hand.css'
})
export class PlayerHand {
  @Prop() player: Player;

  componentWillLoad() {
    // console.log('getRooms', BackendApi.join(this.roomId, 'username'));
  }

  render() {
    return [
      <div class="player bank">
        <div class="name">{this.player.name}</div>
        <div class="score">{this.player.score}</div>
        <div class="move"></div>
        <div class="cards"></div>
        <div class="actions"></div>
      </div>
    ];
  }
}
