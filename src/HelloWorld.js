import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
    this.shadowRoot.querySelector('#decrement').disabled = false;
  }

  __decrement() {

    if (this.counter >= 1) {
      this.counter -= 1;
    }

    if (this.counter == 0) {
      this.shadowRoot.querySelector('#decrement').disabled = true;
    }



  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <button @click=${this.__decrement} id="decrement">decrement</button>
    `;
  }
}
