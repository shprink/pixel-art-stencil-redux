import { Component, Prop } from '@stencil/core';
import { Store, Action } from '@stencil/redux';

import { getMario, getBoo, getChance, getFlower, getMushroom, getStar, getPika, getAsh } from '../../utils/pixels';
import { actions } from '../../reducers/screen';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  @Prop({ context: 'store' }) store: Store;

  loadMario: Action;
  loadBoo: Action;
  loadChance: Action;
  loadFlower: Action;
  loadMushroom: Action;
  loadStar: Action;
  loadPika1: Action;
  loadPika2: Action;
  loadAsh1: Action;
  loadAsh2: Action;
  intervalState: number;
  interval: any;

  componentWillLoad() {
    this.store.mapDispatchToProps(this, {
      loadMario: () => actions.setPixels(getMario()),
      loadBoo: () => actions.setPixels(getBoo()),
      loadChance: () => actions.setPixels(getChance()),
      loadFlower: () => actions.setPixels(getFlower()),
      loadMushroom: () => actions.setPixels(getMushroom()),
      loadStar: () => actions.setPixels(getStar()),
      loadPika1: () => actions.setPixels(getPika()[0]),
      loadPika2: () => actions.setPixels(getPika()[1]),
      loadAsh1: () => actions.setPixels(getAsh()[0]),
      loadAsh2: () => actions.setPixels(getAsh()[1]),
    });
  };

  handleClassicStateChange = (name = '') => {
    clearInterval(this.interval);
    this[name]();
  }

  handlePikaAnimation = () => {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.intervalState === 1) {
        this.intervalState = 2;
        this.loadPika2();
      } else {
        this.intervalState = 1;
        this.loadPika1();
      }
    }, 100)
  }

  handleAshAnimation = () => {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.intervalState === 1) {
        this.intervalState = 2;
        this.loadAsh2();
      } else {
        this.intervalState = 1;
        this.loadAsh1();
      }
    }, 200)
  }

  render() {
    return (
      <div class='app-home'>
        <oled-screen></oled-screen>
        <h2>
          One state
        </h2>
        <div class="button-wrapper">
          <button onClick={() => this.handleClassicStateChange('loadMario')}>
            Mario
          </button>
          <button onClick={() => this.handleClassicStateChange('loadBoo')}>
            Boo
          </button>
          <button onClick={() => this.handleClassicStateChange('loadChance')}>
            Chance Box
          </button>
          <button onClick={() => this.handleClassicStateChange('loadFlower')}>
            Flower
          </button>
          <button onClick={() => this.handleClassicStateChange('loadMushroom')}>
            Mushroom
          </button>
          <button onClick={() => this.handleClassicStateChange('loadStar')}>
            Star
          </button>
        </div>
        <h2>
          Several states
        </h2>
        <div class="button-wrapper">
          <button onClick={this.handlePikaAnimation}>
            ▶️ Pikachu
          </button>
          <button onClick={this.handleAshAnimation}>
            ▶️ Ash
          </button>
        </div>
      </div>
    );
  }
}
