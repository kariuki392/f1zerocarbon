<template>
  <body id="body">
    <navigationbar />
    <div id="register">
      <h3 class="text-center text-white pt-5">Register form</h3>
      <div class="container">
        <div
          id="register-row"
          class="row justify-content-center align-items-center"
        >
          <div id="register-column" class="col-md-6">
            <div id="register-box" class="col-md-12">
              <form
                id="Register-form"
                class="form"
                @submit.prevent="register"
                method="post"
              >
                <h3 class="text-center text-info">Register</h3>
                <div class="form-group">
                  <label for="username" class="text-info">Username:</label
                  ><br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="form-control"
                    v-model="username"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="email" class="text-info">Email:</label><br />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="form-control"
                    v-model="email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="Sub_county_id" class="text-info"
                    >Subcounty id:</label
                  ><br />
                  <input
                    type="text"
                    name="Sub_county_id"
                    id="Sub_county_id"
                    class="form-control"
                    v-model="Sub_county_id"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password" class="text-info">Password:</label
                  ><br />
                  <input
                    type="text"
                    name="password"
                    id="password"
                    class="form-control"
                    v-model="password"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="confirm password" class="text-info"
                    >Confirm Password:</label
                  ><br />
                  <input
                    type="text"
                    name="confirm password"
                    id="confirm password"
                    class="form-control"
                    v-model="confirmpassword"
                    required
                  />
                </div>
                <input
                  type="submit"
                  name="submit"
                  class="btn btn-info btn-md"
                  value="Register"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
import axios from "axios";
import navigationbar from "./Navigation.vue";
import router from "../main";
export default {
  components: {
    navigationbar,
  },
  data() {
    username: "";
    email: "";
    password: "";
    Sub_county_id: "";
  },
  methods: {
    async register() {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/createNewUser",
        {
          name: this.username,
          email: this.email,
          password: this.password,
          subcounty_id: this.Sub_county_id,
        }
      );
      setTimeout(() => {
        router.push("/User");
      }, 5000);
    },
  },
};
</script>

<style>
#body {
  height: 750px;
  overflow: auto;
  background-color: black;
}
#register{
  text-align:left;
}
#register .container #register-row #register-column #register-box {
  margin-top: 40px;
  max-width: 900px;
  height: 450px;
  border: 2px solid #23b4c7;
  background-color: white;
  text-align: left;
}
</style>
