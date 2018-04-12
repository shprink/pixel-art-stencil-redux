import { createStore } from 'redux';
import rootReducer from '../reducers';

const configureStore = (preloadedState: any) =>
  createStore(
    rootReducer,
    preloadedState,
    window['devToolsExtension'] ? window['devToolsExtension']() : f => f,
  );

export { configureStore };
