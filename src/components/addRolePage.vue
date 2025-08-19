<template>
  <body id="body">
    <navigationbar />
    <div id="add role">
      <h3 class="text-center text-white pt-5">Sign Your Petitions</h3>
      <div class="container">
        <div
          id="add roles-row"
          class="row justify-content-center align-items-center"
        >
          <div id="roles-column" class="col-md-6">
            <div id="roles-box" class="col-md-12">
              <form
                id="Add New Role-form"
                class="form"
                @submit.prevent="addRole"
                method="post"
              >
                <h3 class="text-center text-info">Make sure you've logged in before signing</h3>
                <div class="form-group">
                  <label for="name" class="text-info"
                    >PETITIONS ARE SIGNED WITH THE CAPS ON</label
                  ><br/>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    v-model="name"
                    required
                  />
                </div>
                <input
                  type="submit"
                  name="submit"
                  class="btn btn-info btn-md"
                  value="SIGN"
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
    name: "";
  },

  methods: {
    async addRole() {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/createNewRole",
        {
          name: this.name,
        }
      );
      setTimeout(() => {
        router.push("/Roles");
      }, 5000);
    },
  },
};
</script>

<style>
#body {
  text-align: center;
  padding: 0px;
  height: 605px;
  background-color:grey;
}
#addrole{
  color:black;
}
</style>
