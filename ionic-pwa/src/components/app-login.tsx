import { Component } from '@stencil/core';

// import BackendApi from '../api';

@Component({
    tag: 'app-login',
    styles: `

    `,
})
export class AppLogin {
    componentWillLoad() {
        // console.log('login', BackendApi.login('username'));
    }
    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Login</ion-title>
                </ion-toolbar>
            </ion-header>,
            <ion-content padding>
                Login page

                <ion-button href="/rooms" expand="block">Rooms page</ion-button>
            </ion-content>
        ];
    }
}
