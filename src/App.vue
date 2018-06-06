<template>
	<div id="wrap">
        <Header />

        <Content />

        <Footer />
    </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';


export default {
	name: 'App',

	components: {
		Header,
		Footer,
		Content,
	},
}
</script>

<style lang="scss">
@import './assets/css/layout.scss';
@import './assets/css/header.scss';
@import './assets/css/content.scss';
</style>