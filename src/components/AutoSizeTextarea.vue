<template>
	<textarea 
        class="message_input"
        ref="message_input"
        spellcheck="false"
        :disabled="disabled"
        :placeholder="placeholder"
        v-on:keydown="autoResize"
        v-on:keyup="autoResize"
    ></textarea>
</template>

<script>
import Vue from 'vue';
import VueChatScroll from 'vue-chat-scroll';
Vue.use(VueChatScroll);

export default {
    name: 'autoSizeTextarea',

    //['placeholder', 'submit', 'disabled', 'scrollMaxHeight', 'scrollMinHeight']
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        submit: {
            type: Function,
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        scrollMaxHeight: {
            //type: Number,
            default: 160,
        },
        scrollMinHeight: {
            //type: Number,
            default: 20,
        }
    },
    
    components: {
    },

    mounted(){
        
        this.$refs.message_input.style.height = this.scrollMinHeight + 'px';
        this.messageInput = this.$refs.message_input;
    },

    created(){
        
    },

	  
	data () {
    	return {
    	}
  	},

    methods: {
        autoResize(e){
            if(e.keyCode === 13 && e.type == 'keyup' && !e.shiftKey) {
                if(e.target.value){
                    this.submit(e.target.value);
                }
                
                this.resetMessage();
                e.target.style.height = this.scrollMinHeight + 'px';
                return;
            }

            e.target.style.height = 1 + 'px';

            let height = e.target.scrollHeight;

            let h1 = Math.max(this.scrollMinHeight, height);

            let h2 = Math.min(this.scrollMaxHeight, h1);

            e.target.style.height = h2 + 'px';
        },

        resetMessage(){
            this.$refs.message_input.value = '';
        },
    }
}
</script>

