import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const USERS_COLLECTION = 'USERS'
const LIST_COLLECTION  = 'List'
const TODO_COLLECTION  = 'Todos'
const STORAGE_KEY      = 'MY_TODO'
const PUSH_COLLECTION = 'PUSH'
const NOTIFICATION_COLLECTION = 'Notification'

const store = new Vuex.Store({
    state: {
        user: null,
        messageRoom1: [
            {
                name: 'user 1',
                message: 'heelow',
                like: {
                    count: 1,
                    likeByMe: true
                }
            }
        ],
        readyChatActive: true,
        representChatActive: false,
    },
    getters: {
        isLogined: state => {
            return !!state.user
        },
    },
    mutations: {
        login(state, user){
            state.user = user
        },
        logout(state){
            state.user = null
        },
        setUserData(state, user){
            state.user = user
        },
    },
    actions: {
        login(context, payload){
            
        },
        logout(context){
            
        },
        setUserData(context, payload){
            
        },
    }
})

export default store
