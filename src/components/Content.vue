<template>
    <div id="content">
        <Menu />

        <div class="left">
            <ReadyChat />
        </div>

        <div class="right">
            <DebateChat />
            <DebateProposal/>
        </div>
    </div>
</template>

<script>

import ReadyChat from './ReadyChat';
import DebateChat from './DebateChat';
import DebateProposal from './DebateProposal';

import Menu from './Menu';

export default {
    name: 'Content',
    
    mounted(){
    },

    components: {
        ReadyChat,
        DebateChat,
        DebateProposal,
        Menu,
	},
	  
	data() {
		return {
			
		};
    },
    
    methods: {
    }
}
</script>


<style lang="scss">
@import '../assets/css/content.scss';
</style>