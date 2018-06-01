<template>
	<header>
		<div class="topic">
			<h1>{{ topic }}</h1>
			<nav class="aligner-item">
				<ul>
					<li>
						<a href="#a">Debates</a>
					</li>
					<li>
						<a href="#a">About</a>    
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
export default {
	name: 'Header',
	  
	data () {
    	return {
      		topic: 'Do you agree that stricter gun control laws should be made?',
			sub_topic: 'Does the Second Amendment protect individual gun ownership?',
    	}
  	}
}
</script>

