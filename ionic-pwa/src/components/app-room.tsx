import { Component, Prop } from '@stencil/core';

// import BackendApi from '../api';

@Component({
    tag: 'app-room',
    styles: `

    `,
})
export class AppRoom {
    @Prop() roomId: number;

    componentWillLoad() {
        // console.log('getRooms', BackendApi.join(this.roomId, 'username'));
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Rooms</ion-title>
                </ion-toolbar>
            </ion-header>,
            <ion-content padding>
                Room {this.roomId} page
            </ion-content>
        ];
    }
}
