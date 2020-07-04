<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view></router-view>

     
        <site-footer></site-footer>
        <site-footer><fa-icon :icon="['fas', 'bug']" size="2x" :spin="spin" /></site-footer>

    </div>
</template>

<script>
    import NavBar from './components/nav-bar';
    import SiteFooter from './components/footer';
    import Landing from './components/landing';
    import pgLanding from './styles/pgLanding.css';
    import cNav from './styles/cNav.css';

    export default {
        name: 'App',
        components: {
            NavBar,
            SiteFooter
        },
        data() {
            return {
                spin: false
            };
        },
    };
</script>

<style scoped>

</style>