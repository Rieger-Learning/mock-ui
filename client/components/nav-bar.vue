<template>
<div class="nav">
    <b-navbar toggleable="lg">
          
        <b-nav align="right">
            <div class="col-6">
                <b-nav-item to="/" active>Home</b-nav-item>
            </div>
            <div class="col-2">
                <b-nav-item to="/login"> Login </b-nav-item>
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