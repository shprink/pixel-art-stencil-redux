import { Action } from './index';

import { getMushroom } from '../utils/pixels';

interface ScreenState {
  width: number;
  height: number;
  pixelSize: number;
  pixels: string[][] | null;
}

export const DEFAULT_STATE: ScreenState = {
  width: 16,
  height: 16,
  pixelSize: 16,
  pixels: getMushroom(),
};

export const types = {
  SCREEN_SET_RESOLUTION: 'SCREEN/SET_RESOLUTION',
  SCREEN_SET_PIXELS: 'SCREEN/SET_PIXELS',
};

export const actions = {
  setNewResolution: (width: number, height: number, pixelSize: number): Action => ({
    type: types.SCREEN_SET_RESOLUTION,
    payload: { width, height, pixelSize },
  }),
  setPixels: (pixels: string[][]) => async dispatch => dispatch({
    type: types.SCREEN_SET_PIXELS,
    payload: { pixels },
  }),
};

const app = (state: ScreenState = DEFAULT_STATE, action: Action) => {
  switch (action.type) {
    case types.SCREEN_SET_RESOLUTION: {
      const { width, height, pixelSize } = action.payload;
      return {
        ...state,
        width,
        height,
        pixelSize,
      };
    }
    case types.SCREEN_SET_PIXELS: {
      const { pixels } = action.payload;
      return {
        ...state,
        pixels,
      };
    }
    default: {
      return state;
    }
  }
};

export default app;

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
