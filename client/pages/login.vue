  
<template>
    <div>
        <h2>Login</h2>
        <a href="http://127.0.0.1:1235/auth/github">Login with GitHub</a>
        Or login with Rieger Learning.
        <b-form v-on:submit="login">
            <b-form-input 
            v-model="email" 
            name="email"></b-form-input>
            <b-form-input 
            type="password" 
            v-model="password" 
            name="password"></b-form-input>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        <a href="#" v-on:click="logout"> Logout </a>
    </div>
</template>

<script>
import router from "../router";
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
        email: '',
        password: '' 
    }
  },
  methods: {
    login(evt) {

        evt.preventDefault();
        let email = this.email;
        let password = this.password;
        let login = () => {
            let data = {
            email: email,
            password: password
            };
            
        axios.post("http://127.0.0.1:1235/api/login", data)
            .then((response) => {
                console.log("Logged in");
                router.push("/home");
            })
            .catch((errors) => {
                console.log("Cannot log in");
            });
      }
      login();
    },
    logout: function (e) {
      axios.get("/api/logout")
        .then(() => {
          router.push("/")
        })
    }
  }
}
</script>