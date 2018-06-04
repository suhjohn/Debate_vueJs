<template>
    <div class="toggle_feedback" v-bind:class="[menuActive == 'feedback' ? 'active' : '']">
        <div class="header">
            Give Us Feedback!
        </div>
        <section>
            <div class="desc">
                We want to hear what bothers you - is there anything you’d want us to fix, add or remove? Let us know your thoughts
            </div>
            <form class="content">
                <textarea name="" placeholder="Let us know what you think...!"></textarea>
                <button type="submit">submit</button>
            </form>
        </section>
    </div>
</template>

<script>

export default {
    name: 'Feedback',
    
    mounted(){
    },
	  
	data() {
		return {
			
		};
    },
    
    methods: {
        
        
    }
}
</script>
