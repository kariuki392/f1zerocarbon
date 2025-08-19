<template>
    <body id="body">
    <navigationbar />
    <div id="login">
        <h3 class="text-center text-white pt-5">WELCOME BACK, CAPTAIN!</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" @submit.prevent="login" method="post">
                            <h3 class="text-center text-info">LOGIN</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br>
                                <input type="text" name="username" id="username" class="form-control" v-model="username">
                            </div>
                            <div class="form-group">
                                <label for="email" class="text-info">Email:</label><br>
                                <input type="text" name="email" id="email" class="form-control" v-model="email">
                            </div>
                            <div class="form-group">
                                <label for="Sub_county_id" class="text-info">Subcounty:</label><br>
                                <input type="text" name="Sub_county_id" id="Sub_county_id" class="form-control" v-model="subcountyid">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="password" name="password" id="password" class="form-control" v-model="password">
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br>
                                <input type="submit" name="ENTER" class="btn btn-info btn-md" value="ENTER">
                                <a href="/User" class="text-info"></a>
                            </div>
                            <div id="register-link" class="text-right">
                                <a href="/register" class="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</template>

<script>
   import navigationbar from './Navigation.vue'
   import axios from 'axios'
   export default{
    components:{
        navigationbar,
    },
    data(){
        return{
            baseUrl: "http://127.0.0.1:8000/api",
            username: "",
            email: "",
            password: "",
            subcountyid: null
        }
    },
    methods:{
        login(){
            axios.post(this.baseUrl + '/findOneUser', 
            {
                name: this.username,
                email: this.email,
                password: this.password,
                subcountyid: this.subcountyid
            }
            )
            .then(response => console.log(response.data));
        }
    }
   }
</script>

<style scoped>

#body {
  height: 800px;
  overflow: scroll;
  background-color: aqua;
}
#login .container #login-row #login-column #login-box {
  margin-top: 40px;
  max-width: 900px;
  height: 450px;
  border: 1px solid #23b4c7;
  background-color: white;
  text-align: left;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 15px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: 20px;
}
</style>