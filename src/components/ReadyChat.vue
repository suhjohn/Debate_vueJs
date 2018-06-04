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
	  
	data () {
    	return {
            messageRoom1Text: '',
      		messageRoom1: [
				{
					name: 'user 1',
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
				},
				{
					name: 'user 1',
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
				},
				{
					name: 'user 1',
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
				},
				{
					name: 'user 1',
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
				},
			],
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

