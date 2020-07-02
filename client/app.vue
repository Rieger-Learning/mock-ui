<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view></router-view>
     
        <site-footer></site-footer>
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
                message: 'Using Parcel In A Vue.js App',
            };
        },
    };
</script>

<style scoped>

</style>