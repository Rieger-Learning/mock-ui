<template>
<div class="nav">
    <b-navbar toggleable="lg">
        <b-nav align="left">
            <a href="#" class="navbar-brand name router-link-exact-active router-link-active" target="_self">
            <b-img src="./RL_logo.76a609ee.png" alt="Cartoon brain in a Jar">
            </a>
            <b-navbar-brand id="logo" to="/">Rieger Learning</b-navbar-brand>
            <b-nav-item class="link" to="/">Home</b-nav-item>
            <!--MOVE LOGIN TO A MODAL INSTEAD OF A WHOLE PAGE;
            MAKE 2ND LINK A DIFF PAGE-->
            <b-nav-item class="link" to="/login"> Login </b-nav-item>
        </b-nav>
    </b-navbar>
</div>
</template>

<script>
    export default {
        name: "nav-bar.vue"
    }
</script>

<style scoped>

</style>