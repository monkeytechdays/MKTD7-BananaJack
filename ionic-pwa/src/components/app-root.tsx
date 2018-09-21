import { Component, Prop, Listen } from '@stencil/core';
import { Store } from '@stencil/redux';
import { bananaStore } from '../store';

@Component({
  tag: 'app-root',
})
export class AppRoot {
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;

  @Prop({context: 'store'}) store: Store;


  componentWillLoad() {
    this.store.setStore(bananaStore({}));
  }


  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */
  @Listen('window:swUpdate')
  async onSWUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'New version available',
      showCloseButton: true,
      closeButtonText: 'Reload'
    });
    await toast.present();
    await toast.onWillDismiss();
    window.location.reload();
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-login" />
          <ion-route url="/rooms" component="app-rooms" />
          <ion-route url="/rooms/:roomId" component="app-room" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
