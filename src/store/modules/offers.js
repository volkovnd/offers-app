import { createOffer, deleteOffer, getOffers } from "@/api";

const state = () => ({
  currentOffers: [],
});

/** @type {import("vuex").MutationTree} */
const mutations = {
  SET_CURRENT_OFFERS: (state, currentOffersData) => {
    state.currentOffers = currentOffersData;
  },
};

/** @type {import("vuex").ActionTree} */
const actions = {
  async getOffers({ commit }) {
    const offers = await getOffers();

    commit("SET_CURRENT_OFFERS", offers);
  },

  async deleteOffer({ dispatch }, id) {
    await deleteOffer(id);

    await dispatch("getOffers");
  },

  async createOffer({ dispatch }, data) {
    await createOffer(data);

    await dispatch("getOffers");
  },
};

/** @type {import("vuex").GetterTree} */
const getters = {
  offers: (state) => state.currentOffers,
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true,
};
