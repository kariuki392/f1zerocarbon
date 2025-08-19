<template>
  <div>
   <navigationbar />
   <!--here we have added two styles to the table which are separeted by a coma -->
   <button name="addUser" class="background-primary" @click="addUser">
    Add User
   </button>

   <table class="table table-hover">
      <thead>
       <tr>
        <th scope="col">ID</th>
        <th scope="col">NAME</th>
        <th scope="col">EMAIL</th>
        <th scope="col">subcounty_id</th>
        <th scope="col">ACTIONS</th>
       </tr>
     </thead>
      <tbody>
       <!--the v-for loops through all the rows-->
       <tr v-for="user in users" :key="user.id">
        <td>
          {{ user.id }}
        </td>
        <td>
          {{ user.name }}
        </td>
        <td>{{ user.email }}</td>
        <td>{{ user.subcounty_id }}</td>
        <td>
          <button
          name="updateUsers"
          class="background-primary"
          @click="updateUsers(user)"
          >Update</button>

          <button
          name="deleteUsers"
          class="background-primary"
          @click="deleteUsers(user)"
          >Delete</button>
         </td>
        </tr>
     </tbody>
    </table>
  </div>
</template>

<script>
import router from '../main';
import navigationbar from "./Navigation.vue";
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      errors: [],
      baseUrl: "http://127.0.0.1:8000/api",
    };
  },
  components: {
    navigationbar,
  },
  methods: {
    addUser() {
        //this router.push routes the addUser button to the register page after it has been pressed
        router.push("/register");},
    
        async deleteUsers(user) {
      try {
        await axios.delete(this.baseUrl + "/deleteUser", {
          data: { id: user.id },
        });
      this.user = this.user.filter((r) =>r.id !== user.id);
    }catch (e) {
      this.errors.push(e);
         }
   },
   async updateUsers(user) {
      try {
        await axios.update(this.baseUrl + "/updateUser", {
          data: { id: user.id },
        });
      this.user = this.user.filter((r) =>r.id !== user.id);
    }catch (e) {
      this.errors.push(e);
         }
   },
  },

  async created() {
    try {
      const response = await axios.get(this.baseUrl + "/readAllUsers");
      this.users = response.data.tasks;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<style scoped></style>