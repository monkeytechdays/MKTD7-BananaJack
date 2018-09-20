import { Component, Prop } from '@stencil/core';

// import BackendApi from '../api';

@Component({
    tag: 'app-rooms',
    styles: `

    `,
})
export class AppRooms {
    @Prop({ connect: 'ion-router' }) nav: HTMLIonRouterElement;

    componentWillLoad() {
        // console.log('getRooms', BackendApi.getRooms());
    }

    async redirectToRoom2() {
        const navCtrl: HTMLIonRouterElement = await (this.nav as any).componentOnReady();
        navCtrl.push('/rooms/2')
    }

    handleOnClick = () => this.redirectToRoom2();

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Rooms</ion-title>
                </ion-toolbar>
            </ion-header>,
            <ion-content padding>
                Rooms page
                <ion-button onClick={this.handleOnClick} expand="block">Go to room 2</ion-button>
            </ion-content>
        ];
    }
}
