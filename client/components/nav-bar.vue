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

            <b-navbar-brand to="/" class="name"><img src="../Images/RL_logo.png" class="logo" alt="Cartoon Brain in a Jar">Rieger Learning</b-navbar-brand>
        </b-nav>   
        <b-nav align="right">
            <div class="col-6">
                <b-nav-item to="/" active>Home</b-nav-item>
            </div>
            <div class="col-2">
                <b-nav-item to="/login"> Login </b-nav-item>
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
/* NAVBAR LOGO */
.name {
    display: inline;
    align-items: baseline;
    font-family: 'Typewriters';
    font-size: 30px;
}
.logo { 
    display: inline-block;
    align-content: top;
}

/* NAVBAR ITEMS */
.navbar .nav-item a{
    color: #455A64;
    text-decoration: none;
    font-family: 'Typewriters';
    font-size: x-large;
    font-weight: bold;
}
.navbar .nav-item a:hover {
    color: #5c8300;
    transform: perspective(600px) translateZ(200px);
}



/* FONT FAMILY */
@font-face {
  font-family: "Typewriters";
  src: url("../Fonts/typewriter-press/Typewriter-Press/Typewriter.woff") format("woff");
}
</style>