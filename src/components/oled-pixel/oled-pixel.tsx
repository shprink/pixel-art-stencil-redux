import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'oled-pixel',
})
export class OledPixel {
  @Prop() color: string;
  @Prop() size: number;
  @Prop() x: number;
  @Prop() y: number;

  hostData() {
    const style = {
      width: `${this.size}px`,
      height: `${this.size}px`,
      left: `${this.x}px`,
      top: `${this.y}px`,
      backgroundColor: this.color,
      position: 'absolute',
      display: 'block',
    };

    return {
      style: style,
    };
  }

  render() {

    return (
      <span></span>
    );
  }
}
