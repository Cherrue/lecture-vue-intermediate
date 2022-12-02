import { createStore } from 'vuex'
import todoApp from './modules/todoApp'

// Create a new store instance.
export const store = createStore({
    modules: {
        todoApp
    },
})