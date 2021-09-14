export default {
  collections(state: { collections: any }) {
    console.log("state", state.collections);
    return state.collections;
  },
  hasCollections(state: { collections: any }) {
    return state.collections && state.collections.length > 0;
  },
};
