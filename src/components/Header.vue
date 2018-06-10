<template>
	<header>
		<div class="topic">
			<h1>{{ topic }}</h1>
			<nav class="aligner-item">
				<ul>
					<li>
						<a href="#a" v-on:click="test">Debates</a>
					</li>
					<li>
						<a href="#a" v-on:click="test2">About</a>    
					</li>
				</ul>
			</nav>
		</div>

		<div class="sub_topic">
			<h3 class="sub_title_font_color">sub topic1 : {{ sub_topic }}</h3>
		</div>
	</header>
</template>

<script>

function getRandomIntInclusive(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var isActive = true;

export default {
	name: 'Header',
	  
	data () {
    	return {
      		topic: 'Do you agree that stricter gun control laws should be made?',
			sub_topic: 'Does the Second Amendment protect individual gun ownership?',
    	}
	  },
	  
	methods: {
		test(){
			this.$store.dispatch('updateAlarmState', getRandomIntInclusive(0, 2));
		},
		test2(){
			isActive = !isActive;
			this.$store.dispatch('updateReadyChatActive', isActive);
		},
	}
}
</script>

