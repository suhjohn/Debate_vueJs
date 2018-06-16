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
	
				const res = await this.axios.post("/api/auth/login/", d)
				this.axios.defaults.headers['Authorization'] = res.data.token;
				this.$store.commit('setUserToken', res.data.token);
				await this.checkDebateUser(res.data.token);
			},
	
			async checkDebateUser(token) {
				// Assume this is form data
				const d1 = {
					team_id: 1,
					nickname: "test1234",
					start_opinion: 0.1
				};

				// Assume that we have the current debate_id
				const query_params = {
					debate_id: 1
				};

				// Get debateuser result
				let res = null;
				try {
					res = await this.axios.get("/api/users/self/debateusers/", {params: query_params})
				} catch (err) {
					console.log(err);
				}
	
				let debateUser = res.data.results[0];
				if (debateUser) {
					// console log is for debugging - erase them as you wish
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