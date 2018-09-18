import './base.css';

class PlopHello extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `Plop !`;
    }

}
customElements.define('plop-hello', PlopHello);