import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        favorites:[
           
        ],
    },
    mutations: {
        addToFavorites(state,payload){
            if(!state.favorites.includes(payload)){
                state.favorites.push(payload);
            }
        },
    },
    actions:{
        addToFavorites({commit},payload){
            commit('addToFavorites', payload)
        },
    }
});
