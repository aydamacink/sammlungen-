import { createStore } from "vuex";
import collectionsModule from "./modules/collections/index";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    collections: collectionsModule,
  },
});
