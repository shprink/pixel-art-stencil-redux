import { Component, Prop } from '@stencil/core';
import { Store } from '@stencil/redux';
import { configureStore } from '../../store';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {
  @Prop({ context: 'store' }) store: Store;

  componentWillLoad() {
    this.store.setStore(configureStore({}));
  }

  render() {
    return (
      <div class="my-app">
        <header>
          <h1>Pixel Art with Stencil + Redux</h1>
          <span class="flex"></span>
          <a href="https://github.com/shprink/pixel-art-stencil-redux" target="_blank">Github</a>
        </header>
        <p><center>(Open Redux Devtools to see the state changes)</center></p>
        <app-home></app-home>
      </div>
    );
  }
}
