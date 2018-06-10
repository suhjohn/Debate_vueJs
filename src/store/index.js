import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)





const ALARM_STATE_COLLECTION = [
    'REPRESENTER_CHOSEN', //
    'REPRESENTER', //대표로 선택됨
    'REPRESENTER_VOTE' //대표자 투표
];

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
        menuActive: false,
        alarmState: null,
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
        updateMenuActive(state, active){
            state.menuActive = active;
        },
        updateAlarmState(state, alaram){
            state.alarmState = ALARM_STATE_COLLECTION[alaram];

            setTimeout(() => {
                state.alarmState = null;
            }, 1500);
        },
        updateReadyChatActive(state, active){
            state.readyChatActive = active;
        },
        sendReadyChatMessage(state, payload){
            state.messageRoom1.push(payload);
        }
    },
    actions: {
        login(context, payload){
            
        },
        logout(context){
            
        },
        sendReadyChatMessage(context, message){
            const data = {
                event_name : "chat",
                payload: {
                    "body"     : message,
                    "timestamp": new Date().getTime()
                }
            };
            //webSocketClient.send(data);

            context.commit('sendReadyChatMessage', {
                name: 'me',
                message: message,
                like: {
                    count: 0,
                    likeByMe: false
                }
            });
        },
        updateMenuActive(context, active){
            context.commit('updateMenuActive', active);
        },
        updateAlarmState(context, alaram){
            context.commit('updateAlarmState', alaram);
        },
        updateReadyChatActive(context, active){
            context.commit('updateReadyChatActive', active);
        },
    }
})

export default store
