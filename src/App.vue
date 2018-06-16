<template>
	<div id="wrap">
        <Header />

        <Content />

        <Footer />

		<Alarm/>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueNativeSock from 'vue-native-websocket';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import Alarm from './components/Alarm';

export default {
	name: 'App',

	mounted(){

		//console.log(axios.defaults.headers);
		this.login();
	},

	created(){
		
	},

	components: {
		Header,
		Footer,
		Content,
		Alarm
	},

	methods: {
		login(){
			var d = {
				username: 'test2',
				password: '123456'
			};

			this.axios.post(BaseUrl + '/api/auth/login/', d, {
				headers: {
					"Content-Type": 'application/json',
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
					"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
				}
			})
			.then(res => {
				console.log(res);
				this.checkDebateUser(res.data.token);
			})
		},

		checkDebateUser(token){
			var d1 = {
				team_id: 1,
				nickname: 'test1234',
				start_opinion: 0.1,
			};

			var d2 = {
				debate_id: 1
			};

			this.axios.get(BaseUrl + '/api/users/self/debateusers/', {
				params: d2,
				headers: {
					"Content-Type": 'application/json',
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
					"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",

					"Authorization": token,
				}
			})
			.then(res => {
				let result = res.data.results[0];
				if( result )
				{
					console.log(result.token);
					
					const webSocketClient = new WebSocket("ws://Squarrel-Server-Dev.ap-northeast-2.elasticbeanstalk.com/ws/", 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Miwicm9sZSI6MSwiZGViYXRlX3VzZXJfaWQiOjIsInRlYW1faWQiOjEsImV4cCI6MTUzMTcyMTExOSwibmJmIjoxNTI5MTI3MzE5fQ.0RJ22lmjLuvvAOFgMkatvEdV4np_EbsQFVr4RKXveEQ');
				}
			})

			// this.axios.post(BaseUrl + '/api/debateusers/', d, {
			// 	headers: {
			// 		"Content-Type": 'application/json',
			// 		"Access-Control-Allow-Origin": "*",
			// 		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			// 		"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",

			// 		"Authorization": token,
			// 	}
			// })
			// .then(res => {
			// 	console.log(res);
			// })
		},


		createDebateusers(token){
			var d = {
				team_id: 0,
				nickname: "hello user23",
				start_opinion: -0.3,
			};

			axios({
				method: 'POST',
				url: BaseUrl + '/api/debateusers/',
				data: JSON.stringify(d),
				withCredentials: false,
				headers: {
					"Authorization": token
				}
			})
			.then(res => {
				console.log(res);
			})
			.catch(e => {
				console.error(e);
			})
		}
	}
}
</script>

<style lang="scss">
@import './assets/css/layout.scss';
@import './assets/css/transition.scss';
@import './assets/css/header.scss';
</style>