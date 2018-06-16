import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const ALARM_STATE_COLLECTION = [
  "REPRESENTER_CHOSEN", //
  "REPRESENTER", //대표로 선택됨
  "REPRESENTER_VOTE" //대표자 투표
];

const store = new Vuex.Store({
  state: {
    user: null,
    messageRoom1: [
      {
        name: "user 1",
        message: "heelow",
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
    debateUserToken: "",
    userToken: "",
    wsConnection: null
  },
  getters: {
    isLogined: state => {
      return !!state.user;
    },
    getDebateUserToken: state => {
      return state.debateUserToken;
    },
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
    },
    setUserData(state, user) {
      state.user = user;
    },
    updateMenuActive(state, active) {
      state.menuActive = active;
    },
    updateAlarmState(state, alaram) {
      state.alarmState = ALARM_STATE_COLLECTION[alaram];

      setTimeout(() => {
        state.alarmState = null;
      }, 1500);
    },
    updateReadyChatActive(state, active) {
      state.readyChatActive = active;
    },
    sendReadyChatMessage(state, payload) {
      console.log("[sendReadyChatMessage] sending message: "+ JSON.stringify(payload))
      state.wsConnection.send(payload);
      state.messageRoom1.push(payload);
    },
    setDebateUserToken(state, token) {
      console.log("[setDebateUserToken] Set DebateUserToken to Vuex");
      state.debateUserToken = token;
    },
    setUserToken(state, token){
      console.log("[setUserToken] Set setUserToken to Vuex and axios");
      state.userToken = token;
    },
    setWebsocketConnection(state, token) {
      console.log("[setWebsocketConnection] Set wsConnection to Vuex");
      state.wsConnection = new WebSocket(
        "ws://Squarrel-Server-Dev.ap-northeast-2.elasticbeanstalk.com/ws/?token=" +
          token
      );
      state.wsConnection.onmessage = (data) => {
        console.log(data)
      }
    }
  },
  actions: {
    login(context, payload) {},
    logout(context) {},
    sendReadyChatMessage(context, message) {
      const data = {
        event_name: "chat",
        payload: {
          body: message,
          timestamp: new Date().getTime()
        }
      };

      context.commit("sendReadyChatMessage", {
        name: "me",
        message: message,
        like: {
          count: 0,
          likeByMe: false
        }
      });
    },
    updateMenuActive(context, active) {
      context.commit("updateMenuActive", active);
    },
    updateAlarmState(context, alaram) {
      context.commit("updateAlarmState", alaram);
    },
    updateReadyChatActive(context, active) {
      context.commit("updateReadyChatActive", active);
    },
    initializeWSConnection(context, token) {
      context.commit("setDebateUserToken", token);
      context.commit("setWebsocketConnection", token);
    }
  }
});

export default store;
