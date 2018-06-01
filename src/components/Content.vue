<template>
<div id="content">
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

    <div class="left">
        <!-- <div class="top"></div>
        <div class="bottom"></div> -->
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

        <div class="toggle_user_list" v-bind:class="[menuActive == 'user' ? 'active' : '']">
            <div class="repesenters">
                <div class="header">Repesenters</div>
                <section>
                    <ul>
                        <li>
                            <div class="avatar"></div>
                            <div class="user_name">user1</div>
                        </li>
                        <li>
                            <div class="avatar"></div>
                            <div class="user_name">user1</div>
                        </li>
                        <li>
                            <div class="avatar"></div>
                            <div class="user_name">user1</div>
                        </li>
                        <li>
                            <div class="avatar"></div>
                            <div class="user_name">user1</div>
                        </li>
                        <li>
                            <div class="avatar"></div>
                            <div class="user_name">user1</div>
                        </li>
                        <li>
                            <div class="avatar"></div>
                            <div class="user_name">user1</div>
                        </li>
                        <li>
                            <div class="avatar"></div>
                            <div class="user_name">user1</div>
                        </li>
                    </ul>
                </section>
            </div>
            <div class="all_users">
                <div class="header">All users</div>
                <div class="search">
                    <input type="search" name="search" placeholder="search an id...">
                </div>
                <section>
                    <ul>
                        <li>
                            <div class="avatar"></div>
                            <div class="user_name">user1</div>
                            <div>
                                (0 / 30)
                            </div>
                        </li>
                        <li>
                            <div class="avatar"></div>
                            <div class="user_name">user1</div>
                            <div>
                                (0 / 30)
                            </div>
                        </li>
                        <li>
                            <div class="avatar"></div>
                            <div class="user_name">user1</div>
                            <div>
                                (0 / 30)
                            </div>
                        </li>
                        <li>
                            <div class="avatar"></div>
                            <div class="user_name">user1</div>
                            <div>
                                (0 / 30)
                            </div>
                        </li>
                        <li>
                            <div class="avatar"></div>
                            <div class="user_name">user1</div>
                            <div>
                                (0 / 30)
                            </div>
                        </li>
                        <li>
                            <div class="avatar"></div>
                            <div class="user_name">user1</div>
                            <div>
                                (0 / 30)
                            </div>
                        </li>
                        <li>
                            <div class="avatar"></div>
                            <div class="user_name">user1</div>
                            <div>
                                (0 / 30)
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>

        <div class="toggle_feedback" v-bind:class="[menuActive == 'feedback' ? 'active' : '']">
            <div class="header">
                Give Us Feedback!
            </div>
            <section>
                <div class="desc">
                    We want to hear what bothers you - is there anything you’d want us to fix, add or remove? Let us know your thoughts
                </div>
                <form class="content">
                    <textarea name="" placeholder="Let us know what you think...!"></textarea>
                    <button type="submit">submit</button>
                </form>
            </section>
        </div>
    </div>
    <div class="right">
        <div class="messages">
            <div class="row block" v-bind:class="[ row.pros ? 'pros' : 'cons' ]" v-for="row in messageRoom3">
                <div v-bind:class="[ row.pros ? 'pros' : 'cons' ]">
                    <div class="avatar"></div>
                    <div class="content">
                        <div>
                            <div class="name">{{ row.name }}</div>
                            <div class="vote_result">1</div>
                        </div>
                        <div class="message">{{ row.message }}</div>
                    </div>
                </div>
            </div>
        </div>

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
                <textarea placeholder="Type out your argument! Your argument will be voted on soon"></textarea>
                <button class="send">Submit<br>Argument</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Content',
    
    mounted(){
        this.toggle = this.$refs.toggle;
        this.toggleChatEl = this.$refs.toggleChat;

    },
	  
	data() {
		return {
			toggleChat: true,

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

			messageRoom3: [
				{
					name: 'user 1',
					pros: true, 
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
				},
				{
					name: 'user 2',
					pros: true, 
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				},
				{
					name: 'user 3',
					pros: false, 
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
				},
				{
					name: 'user 4',
					pros: true, 
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
				},
				{
					name: 'user 5',
					pros: false, 
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				},
				{
					name: 'user 6',
					pros: false, 
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit \r\n aksjdkajsd aksjdkajsdkjaskdjkajsd asjdklajsd aksdjlkajsdlkjaslkdjaklsdj alskdlaksdlk\r\n 다음중ㄹ',
				},
				{
					name: 'user 6',
					pros: false, 
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit \r\n aksjdkajsd aksjdkajsdkjaskdjkajsd asjdklajsd aksdjlkajsdlkjaslkdjaklsdj alskdlaksdlk\r\n 다음중ㄹ',
				},
				{
					name: 'user 6',
					pros: true, 
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit \r\n aksjdkajsd aksjdkajsdkjaskdjkajsd asjdklajsd aksdjlkajsdlkjaslkdjaklsdj alskdlaksdlk\r\n 다음중ㄹ',
				},
			],

			messageRoom1Text: '',

			menuActive: false,
		};
    },
    
    methods: {
        toggleChatAction:function(e){
            this.toggleChat = !this.toggleChat;
        },
        messageRoom1Submit: function(){
            if( !this.messageRoom1Text ) return;

            this.messageRoom1.push({
                name: 'me',
                message: this.messageRoom1Text
            });

            this.messageRoom1Text = '';
        },
        menuClickAction: function(to){
            this.menuActive = to;
        }
    }
}
</script>
