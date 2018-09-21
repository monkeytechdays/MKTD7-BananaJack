import { Component, Prop } from '@stencil/core';
import { Card } from '../../../model';

@Component({
  tag: 'card-detail',
  styleUrl: 'card.component.css'
})
export class CardComponent {
  @Prop() card: Card;

  render() {
    return this.card ? (
      <img src={this.card.image} />
    ) : null;
  }
}
