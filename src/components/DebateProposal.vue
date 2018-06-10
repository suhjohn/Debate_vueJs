<template>
    <div class="toggle_wrap">
        <div class="toggle" ref="toggle" v-on:click="toggleChatAction">toggle</div>

        <div v-bind:class="{ hide: toggleChat }" class="toggle_chat" ref="toggleChat">
            <header>
                <h3>Representatives’ Proposals</h3>
            </header>
            <section>
                <div class="messages">
                    <div class="row" v-for="(row, idx) in messageRoom2">
                        <div class="avatar"></div>
                        <div class="content">
                            <div class="name">{{ row.name }}</div>
                            
                            <div class="message">{{ row.message }}</div>
                        </div>
                        <div class="vote aligner">
                            <dl v-if="row.vote" class="text-center">
                                <label v-bind:for="'vote-item-' + idx">
                                <dt>
                                    <input type="radio" name="vote" class="Aligner-item" v-bind:id="'vote-item-' + idx">
                                </dt>
                                <dd>
                                    vote
                                </dd>
                                </label>
                            </dl>
                            
                            <dl v-if="!row.vote" class="text-center">
                                <dt>{{ row.voteCount }}</dt>
                                <dd>votes</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
            <div id="footer">
                <AutoSizeTextarea
                    :submit="sendAction"
                    scrollMinHeight="70"
                    placeholder="Type out your argument! Your argument will be voted on soon"
                />
                <button class="send">Submit<br>Argument</button>
            </div>
        </div>
    </div>
</template>

<script>
import AutoSizeTextarea from './AutoSizeTextarea';

export default {
    name: 'DebateProposal',
    
    components: {
        AutoSizeTextarea,
    },
	  
	data () {
    	return {
            toggleChat: true,			
				
			messageRoom2: [
				{
					name: 'user 1',
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
					voteCount: 10,
					vote: false
				},
				{
					name: 'user 1',
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
					voteCount: 0,
					vote: true
				},
				{
					name: 'user 1',
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
					voteCount: 0,
					vote: true
				},
				{
					name: 'user 1',
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
					voteCount: 7,
					vote: true
				},
				{
					name: 'user 1',
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
					voteCount: 5,
					vote: false
				},
				{
					name: 'user 1',
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
					voteCount: 0,
					vote: false
				},
			],
        }
  	},

    methods: {
        toggleChatAction(e){
            this.toggleChat = !this.toggleChat;
        },

        sendAction(){

        }
    }
}
</script>

<style lang="scss">
@import '../assets/css/toggleChat.scss';
</style>

