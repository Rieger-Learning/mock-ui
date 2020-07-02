<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col sm="6" offset="3">
                <Landing /> 
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Landing from '../components/landing.vue';
    
    export default {
        name: "home.vue",
        components: {
        Landing
        }
 
    }
</script>

<style scoped>

</style>