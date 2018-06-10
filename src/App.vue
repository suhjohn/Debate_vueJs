<template>
	<div id="wrap">
        <Header />

        <Content />

        <Footer />

		<Alarm/>
    </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import Alarm from './components/Alarm';

export default {
	name: 'App',

	components: {
		Header,
		Footer,
		Content,
		Alarm
	},
}
</script>

<style lang="scss">
@import './assets/css/layout.scss';
@import './assets/css/header.scss';
</style>