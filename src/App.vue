<template>
	<div id="wrap">
		<Header />
	
		<Content />
	
		<Footer />
	
		<Alarm/>
	</div>
</template>

<script>
	import Vue from "vue";
	import axios from "axios";
	import VueNativeSock from "vue-native-websocket";
	
	import Header from "./components/Header";
	import Footer from "./components/Footer";
	import Content from "./components/Content";
	
	import Alarm from "./components/Alarm";
	
	export default {
		name: "App",
	
		async mounted() {
			//console.log(axios.defaults.headers);
			await this.login();
		},
	
		created() {},
	
		components: {
			Header,
			Footer,
			Content,
			Alarm
		},
	
		methods: {
			async login() {
				var d = {
					username: "asdf",
					password: "asdf"
				};
	
				const res = await this.axios
					.post("/api/auth/login/", d, {
						headers: {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": "*",
							"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
							"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
						}
					})
				await this.checkDebateUser(res.data.token);
	
			},
	
			async checkDebateUser(token) {
				const d1 = {
					team_id: 1,
					nickname: "test1234",
					start_opinion: 0.1
				};
	
				const d2 = {
					debate_id: 1
				};
				let res = null;
				try {
					res = await this.axios
						.get("/api/users/self/debateusers/", {
							params: d2,
							headers: {
								"Content-Type": "application/json",
								"Access-Control-Allow-Origin": "*",
								"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
								"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
	
								Authorization: token
							}
						})
				} catch (err) {
					console.log(err);
				}
	
				let debateUser = res.data.results[0];
				if (debateUser) {
					console.log("[checkDebateUser] Received debateUser")
					const debateUserToken = debateUser.token.split(" ")[1];
					console.log("[checkDebateUser] Received token from debateUser: " + debateUserToken);
					await this.$store.dispatch('initializeWSConnection', debateUserToken);
				}
	
	
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
	
			createDebateusers(token) {
				var d = {
					team_id: 0,
					nickname: "hello user23",
					start_opinion: -0.3
				};
	
				axios({
						method: "POST",
						url: "/api/debateusers/",
						data: JSON.stringify(d),
						withCredentials: false,
						headers: {
							Authorization: token
						}
					})
					.then(res => {
						console.log(res);
					})
					.catch(e => {
						console.error(e);
					});
			}
		}
	};
</script>

<style lang="scss">
	@import "./assets/css/layout.scss";
	@import "./assets/css/transition.scss";
	@import "./assets/css/header.scss";
</style>