import { createStore } from 'vuex';

import Core from './core';
import App from '../modules/app/application/store';

// Create a new store instance.
export default createStore({
  modules: {
    Core,
    App,
  },
});
