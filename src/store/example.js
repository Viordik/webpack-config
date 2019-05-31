export default {
    state: {
        message: 'Hello Cats (Vuex)'
    },
    mutations: {},
    actions: {},
    getters: {
        getMessage(state) {
            return state.message;
        }
    }
};