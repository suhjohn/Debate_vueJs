<template>
    <div class="menu">
        <ul>
            <li v-bind:class="[ menuActive == 'user' ? 'active' : '' ]">
                <a href="javascript:void(0);" v-on:click.stop="menuClickAction('user')">Users</a>
            </li>
            <li v-bind:class="[ menuActive == 'feedback' ? 'active' : '' ]">
                <a href="javascript:void(0);" v-on:click.stop="menuClickAction('feedback')">Feedback</a>
            </li>
        </ul>

        <UserList/>
        <Feedback/>
    </div>    
</template>

<script>
import UserList from './UserList';
import Feedback from './Feedback';

export default {
    name: 'Menu',
    
    mounted(){
    },

    components: {
        UserList,
        Feedback,
    },

    computed: {
        menuActive(){
            return this.$store.state.menuActive;
        }
    },
	  
	data () {
    	return {
        }
  	},

    methods: {
        menuClickAction: function(to){
            this.$store.dispatch('updateMenuActive', to);
        }
    }
}
</script>

<style lang="scss">
@import '../assets/css/menu.scss';
</style>
