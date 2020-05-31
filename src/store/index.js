import Vue from "vue"
import vuex from "vuex"
import axios from "axios"
import todos from "./modules/todos"

Vue.use(vuex, axios)

export default new vuex.Store({
    modules: {
        todos
    },  
    state: {
        
    },
    actions: {

    },
    mutations: {
        
    }
})