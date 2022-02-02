import Vue from 'vue';
import Vuex from 'vuex';
import CartService from '@/services/CartService';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isSidebarCartOpen: false,
        cartArticles: []
    },
    getters: {
        isSidebarCartOpen: (state) => state.isSidebarCartOpen,
        cartArticles: (state) => state.cartArticles
    },
    mutations: {
        TOGGLE_SIDEBAR (state) {
            state.isSidebarCartOpen = !state.isSidebarCartOpen;
        },
        SET_CART_ARTICLES(state, articles) {
            Object.keys(articles).forEach(key => state.cartArticles.push(articles[key]));
        }
    },
    actions: {
        toggleSidebar ({ commit }) {
            commit('TOGGLE_SIDEBAR');
        },
        fetchProducts({ commit }) {
            CartService.getCartProducts()
                .then((response) => {
                    commit('SET_CART_ARTICLES', response.data);
                })
                .catch((error) => {
                    console.log('There was an error:', error.response);
                });
        }
    }
});
