<template>
	<div class="debate_chat_wrap messages" v-chat-scroll="{always: true, smooth: true}">
		<div class="row block" 
			v-bind:class="[ row.pros ? 'pros' : 'cons' ]" 
			v-for="row in messageRoom3">
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
</template>


<script>
export default {
    name: 'DebateChat',
    
    components: {
		
	},
	  
	data () {
    	return {
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
    	}
  	},

    methods: {
        
    }
}
</script>

