import { Component, State, Prop } from '@stencil/core';
import { Store } from '@stencil/redux';


@Component({
  tag: 'oled-screen',
})
export class OledScreen {
  @Prop({ context: 'store' }) store: Store;
  @State() width: number;
  @State() height: number;
  @State() pixelSize: number;
  @State() pixels: string[][] | null;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => ({
      width: state.screen.width,
      height: state.screen.height,
      pixelSize: state.screen.pixelSize,
      pixels: state.screen.pixels,
    }));
  };

  getRow(columnIndex) {
    const row = [];
    for (var rowIndex = 0; rowIndex < this.width; rowIndex++) {
      row.push((
        <oled-pixel
          size={this.pixelSize}
          color={this.pixels[columnIndex][rowIndex]}
          x={this.pixelSize * rowIndex}
          y={this.pixelSize * columnIndex}
        ></oled-pixel>
      ));
    }
    return row;
  }

  getScreen() {
    const rows = [];
    for (var i = 0; i < this.height; i++) {
      rows.push(this.getRow(i));
    }
    return rows;
  }

  hostData() {
    return {
      style: {
        position: 'relative',
        width: `${this.width * this.pixelSize}px`,
        height: `${this.height * this.pixelSize}px`,
      },
    };
  }

  render() {
    return this.pixels && this.getScreen();
  }
}
