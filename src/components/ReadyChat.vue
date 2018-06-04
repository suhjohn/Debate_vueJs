<template>
	<div class="ready_chat_wrap">
        <div class="messages">
            <div class="row" v-for="row in messageRoom1">
                <div class="avatar"></div>
                <div class="content">
                    <div class="name">{{ row.name }}</div>
                    <div class="message">
                        {{ row.message }}
                    </div>
                    <div class="label">0</div>
                </div>
            </div>

        </div>
        <form class="input" v-on:submit.prevent="messageRoom1Submit">
            <input 
                type="text" 
                name="message" 
                placeholder="Chat away here! Press Shift+Enter to change lines, Enter to send"
                v-model="messageRoom1Text">
        </form>
    </div>
</template>

<script>
export default {
    name: 'ReadyChat',
    
    components: {
		
    },
    
    computed: {
        messageRoom1(){
            return this.$store.state.messageRoom1
        }
    },

	  
	data () {
    	return {
            messageRoom1Text: '',
    	}
  	},

    methods: {
        messageRoom1Submit: function(){
            if( !this.messageRoom1Text ) return;

            this.messageRoom1.push({
                name: 'me',
                message: this.messageRoom1Text
            });

            this.messageRoom1Text = '';
        },
    }
}
</script>

