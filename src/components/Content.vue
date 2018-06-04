<template>
    <div id="content">
        <Menu />

        <div class="left">
            <ReadyChat />
            <UserList/>
            <Feedback/>
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
import UserList from './UserList';
import Feedback from './Feedback';

export default {
    name: 'Content',
    
    mounted(){
    },

    components: {
        ReadyChat,
        DebateChat,
        DebateProposal,
        Menu,
        UserList,
        Feedback
	},
	  
	data() {
		return {
			
		};
    },
    
    methods: {
        
        
    }
}
</script>
