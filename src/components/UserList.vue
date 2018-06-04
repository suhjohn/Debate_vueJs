<template>
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
</template>

<script>

export default {
    name: 'UserList',
    
    mounted(){
    },
	  
	data() {
		return {
			
		};
    },
    
    methods: {
        
        
    }
}
</script>
