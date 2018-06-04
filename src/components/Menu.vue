<template>
    <div class="menu">
        <ul>
            <li v-bind:class="[ menuActive == 'user' ? 'active' : '' ]">
                <a href="#a" v-on:click.stop="menuClickAction('user')">Users</a>
            </li>
            <li v-bind:class="[ menuActive == 'feedback' ? 'active' : '' ]">
                <a href="#a" v-on:click.stop="menuClickAction('feedback')">Feedback</a>
            </li>
        </ul>
    </div>    
</template>

<script>
export default {
    name: 'Menu',
    
    mounted(){
    },
	  
	data () {
    	return {
            menuActive: false,
        }
  	},

    methods: {
        menuClickAction: function(to){
            this.menuActive = to;
        }
    }
}
</script>

