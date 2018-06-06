<template>
	<div class="ready_chat_wrap">
        <div class="messages" v-chat-scroll="{always: true, smooth: true}">
            <div class="row" 
                v-for="row in messageRoom1">
                <div class="avatar"></div>
                <div class="content">
                    <div class="name">{{ row.name }}</div>
                    <div class="message" v-html="row.message.replace(/(?:\r\n|\r|\n)/g, '<br />')">
                        
                    </div>
                    <div class="like count"
                        v-bind:class="{ active: row.like.likeByMe }"
                        v-on:click="toggleLikeAction(row.like)">
                        {{ row.like.count }}
                    </div>
                </div>
            </div>

        </div>
        <form 
            class="input" 
            v-bind:class="{ active: readyChatActive }"
            ref="form_ready_chat"
            v-on:submit.prevent="messageRoom1Submit"
            >
            <textarea 
                ref="message_input"
                class="message_input"
                name="message"
                spellcheck="false"
                placeholder="Chat away here! Press Shift+Enter to change lines, Enter to send"
                v-model="messageRoom1Text"
                v-on:keydown="autoResize"
                v-on:keyup="autoResize"
                :disabled="!readyChatActive"
                ></textarea>
        </form>
    </div>
</template>

<script>
import Vue from 'vue';
import VueChatScroll from 'vue-chat-scroll';
Vue.use(VueChatScroll);

export default {
    name: 'ReadyChat',
    
    components: {
    },

    mounted(){
        this.form = this.$refs.form_ready_chat;
        this.messageInput = this.$refs.message_input;

        this.scrollMaxHeight = 160;
        this.scrollMinHeight = 20;
    },
    
    computed: {
        messageRoom1(){
            return this.$store.state.messageRoom1;
        },

        readyChatActive(){
            return this.$store.state.readyChatActive;
        },
    },

	  
	data () {
    	return {
            messageRoom1Text: '',
            //scrollHeight: 30,
    	}
  	},

    methods: {
        messageRoom1Submit() {
            if( !this.messageRoom1Text ) return;

            this.messageRoom1.push({
                name: 'me',
                message: this.messageRoom1Text,
                like: {
                    count: 100,
                    likeByMe: false,
                }
            });

            this.messageRoom1Text = '';
        },

        autoResize(e){
            if(e.keyCode === 13 && e.type == 'keyup' && !e.shiftKey) {
                this.messageRoom1Submit();
                e.target.style.height = this.scrollMinHeight + 'px';
                return;
            }

            e.target.style.height = 1 + 'px';

            let height = e.target.scrollHeight;

            let h1 = Math.max(this.scrollMinHeight, height);

            let h2 = Math.min(this.scrollMaxHeight, h1);

            e.target.style.height = h2 + 'px';
        },

        toggleLikeAction(like){   
            like.likeByMe = !like.likeByMe;

            if( like.likeByMe )
                like.count++;
            else 
                like.count--;
        }   
    }
}
</script>

