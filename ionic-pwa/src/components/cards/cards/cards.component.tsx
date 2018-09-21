import { Component, Prop } from '@stencil/core';
import { Card } from '../../../model';

@Component({
  tag: 'cards-list',
  styleUrl: 'cards.component.css'
})
export class CardsListComponent {
  @Prop() cards: Card[] = [];

  render() {
    return this.cards.map(card => (<card-detail card={card}></card-detail>));
  }
}
