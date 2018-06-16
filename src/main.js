import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Snotify from 'vue-snotify';
import VueNativeSock from 'vue-native-websocket';

//import App from './Home';
import App from './App';
import store from './store';



Vue.config.productionTip = false;
Vue.prototype.$http      = axios;


axios.defaults.baseURL = "http://Squarrel-Server-Dev.ap-northeast-2.elasticbeanstalk.com"
Vue.use(VueAxios, axios);
Vue.use(Snotify);



/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: { App },
	template: '<App/>',
	store
});


