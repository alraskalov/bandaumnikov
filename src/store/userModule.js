const userModule = {
  state: () => ({
    user: [],
    loading: false,
    error: false,
  }),
  getters: {},
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        commit('setLoading', true);
        const response = await fetch('https://random-data-api.com/api/users/random_user', {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((data) => data);
        commit('setUser', response);
      } catch (e) {
        commit('setError', true);
        // eslint-disable-next-line no-console
        console.log(e);
      } finally {
        commit('setLoading', false);
      }
    },
  },
  namespaced: true,
};

export default userModule;
