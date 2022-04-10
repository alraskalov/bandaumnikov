const beerModule = {
  state: () => ({
    beers: [],
  }),
  getters: {},
  mutations: {
    setBeer(state, beer) {
      state.beers = beer;
    },
    removeBeer(state, beer) {
      state.beers = beer;
    },
  },
  actions: {
    async fetchBeer({ state, commit }) {
      try {
        const response = await fetch('https://random-data-api.com/api/beer/random_beer', {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((data) => data);
        commit('setBeer', [response, ...state.beers]);
      } catch (e) {
        console.log(e);
      }
    },
    removeBeer({ state, commit }, beer) {
      commit('removeBeer', state.beers.filter((b) => b.id !== beer.id));
    },
  },
  namespaced: true,
};

export default beerModule;
