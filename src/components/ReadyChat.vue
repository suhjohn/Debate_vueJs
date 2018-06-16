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
        <div
            class="input" 
            v-bind:class="{ active: readyChatActive }"
            >

            <AutoSizeTextarea
                :disabled="!readyChatActive"
                :submit="sendAction"
                scrollMinHeight="50"
                placeholder="Chat away here! Press Shift+Enter to change lines, Enter to send"
            />

            <!-- <textarea 
                ref="message_input"
                class="message_input"
                name="message"
                spellcheck="false"
                placeholder="Chat away here! Press Shift+Enter to change lines, Enter to send"
                v-model="messageRoom1Text"
                v-on:keydown="autoResize"
                v-on:keyup="autoResize"
                :disabled="!readyChatActive"
            ></textarea> -->
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

import AutoSizeTextarea from './AutoSizeTextarea';

export default {
    name: 'ReadyChat',
    
    components: {
        AutoSizeTextarea,
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
            //message: '',
            //scrollHeight: 30,
    	}
  	},

    methods: {
        sendAction(message) {

            // const data = {
            //     name: 'me',
            //     message: this.messageRoom1Text,
            //     like: {
            //         count: 0,
            //         likeByMe: false,
            //     }
            // };
            
            this.$store.dispatch('sendReadyChatMessage', message);
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

