<template>
    <div>
        <navigationbar />
        <button name="addRole" class="background-primary" @click="addRole">Add Role
   </button>
        <table class="table table-hover">
      <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">ACTIONS</th>
        </tr>
    </thead>
    <tbody>
       <!--the v-for loops through all the rows-->
       <tr v-for="role in roles" :key="role.id">
        <td>
          {{ role.id }}
        </td>
        <td>
          {{ role.name }}
        </td>
        <td>
          <button
          name="updateRoles"
          class="background-primary"
          @click="updateRoles(role)"
          >Update
        </button>

          <button
          name="deleteRoles"
          class="background-primary"
          @click="deleteRoles(role)"
          >Delete
        </button>
         </td>
        </tr>
     </tbody>
    </table>
    </div>
  </template>
  

  <script>
  import navigationbar from "./Navigation.vue";
  import axios from "axios";
  import router from "../main";
  
  export default {
    data() {
      return {
        roles: [],
        errors: [],
        baseUrl: "http://127.0.0.1:8000/api",
      };
    },
    components: {
      navigationbar,
    },
    methods: {
      addRole() {
        //this router.push routes the addUser button to the register page after it has been pressed
        router.push("/addRolePage");
      },
    
        async deleteRoles(role) {
      try {
        await axios.delete(this.baseUrl + "/deleteRoles", {
          data: { id: role.id },
        });
      this.roles = this.roles.filter((r) =>r.id !== role.id);
    }catch (e) {
      this.errors.push(e);
            }
  },
  async updateRoles(role) {
      try {
        await axios.update(this.baseUrl + "/updateRoles", {
          data: { id: role.id },
        });
      this.roles = this.roles.filter((r) =>r.id !== role.id);
    }catch (e) {
      this.errors.push(e);
            }
  },
    },

  
    async created() {
      try {
        const response = await axios.get(this.baseUrl + "/readAllRoles");
        this.roles = response.data.tasks;
      } catch (e) {
        this.errors.push(e);
      }
    },
  };
  </script>
  
  <style scoped></style>
  