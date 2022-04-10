import { createStore } from 'vuex';
import beerModule from './beerModule';
import userModule from './userModule';

export default createStore({
  modules: {
    user: userModule,
    beer: beerModule,
  },
});
