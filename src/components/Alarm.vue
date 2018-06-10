<template>
    <div class="alarm_area" v-bind:class="{active : alarmState}">
        <div class="backdrop black"></div>

        <div class="alram_wrap">
            <div class="alarm_box type_1" v-bind:class="[alarmState == 'REPRESENTER_CHOSEN' ? 'active' : '']">
                <div class="">image</div>
                <div class="">
                    <div>Your statement</div>
                    <p>
                        has been chosen.<br>
                        It will be sent to the opposing side.
                    </p>
                </div>
            </div>

            <div class="alarm_box type_2" v-bind:class="[alarmState == 'REPRESENTER' ? 'active' : '']">
                <div class="">image</div>
                <div class="">
                    <div>You</div>
                    <p>
                        are the <span class="sub_title_font_color">representative</span> this round!
                    </p>
                </div>
            </div>

            <div class="alarm_box type_3" v-bind:class="[alarmState == 'REPRESENTER_VOTE' ? 'active' : '']">
                <div class="">image</div>
                <div class="">
                    <div>Vote</div>
                    <p>
                        on your representatives!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Alarm',
    
    mounted(){
    },

    computed: {
        alarmState(){
            return this.$store.state.alarmState;
        }
    },
	  
	data() {
		return {
			
		};
    },
    
    methods: {
        
        
    }
}
</script>


<style lang="scss">
@import '../assets/css/alarm.scss';
</style>