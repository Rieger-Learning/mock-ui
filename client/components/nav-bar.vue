<template>
<div class="nav">
    <b-navbar toggleable="lg">
          
        <b-nav align="right">
            <div class="col-8">
                    <a href="#" class="navbar-brand name router-link-exact-active router-link-active" target="_self">
                        <b-img src="./RL_logo.76a609ee.png" alt="Cartoon brain in a Jar">
                    
                    </a>
                    <b-navbar-brand id="logo"> Rieger Learning</b-navbar-brand> 
                                      
            </div>
            <div class="col-2" id="link">
                <b-nav-item to="/" active>Home</b-nav-item>
            </div>
            <div class="col-2" id="link">
                <b-nav-item to="/login"> About </b-nav-item>
                 <!--MOVE LOGIN TO A MODAL INSTEAD OF A WHOLE PAGE;
            MAKE 2ND LINK A DIFF PAGE-->
            </div>   

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