<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-nav align="left">
            <b-navbar-brand to="/"><img src="../Images/RL_logo.png"></b-navbar-brand>
            <b-navbar-brand to="/">Rieger Learning</b-navbar-brand>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/login"> Login </b-nav-item>
        </b-nav>
    </b-navbar>
</template>

<script>
    export default {
        name: "nav-bar.vue"
    }
</script>

<style scoped>

</style>