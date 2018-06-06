import Vue from 'vue';

//import App from './Home';
import App from './App';
import store from './store';

import axios from 'axios';
import VueWebsocket from "vue-websocket";

Vue.config.productionTip = false;
Vue.prototype.$http      = axios;



//Vue.use(VueWebsocket, "ws://Squarrel-Server-Dev.ap-northeast-2.elasticbeanstalk.com");


/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: { App },
	template: '<App/>',
	store
});


