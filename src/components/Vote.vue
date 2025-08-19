<template>
  <body id="body">
    <div class="home-root">
      <navigationbar />
      <div id="text">
        <h3>VOTE NOW!</h3>
        <h5>
          Vote here now for driver of the month based on their performances, their
          pace, their contributions to a green world and the efforts to
          practice and encourage the movement to a green world!
        </h5>
        <h4>______________________________________________________________________________________</h4>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">DRIVER</th>
              <th scope="col">VOTE</th>
            </tr>
          </thead>
          <tbody>
            <!--the v-for loops through all the rows-->
            <tr v-for="driver in drivers" :key="driver.id">
              <td>
                {{ driver.id }}
              </td>
              <td>
                {{ driver.name }}
              </td>
              <td>
                <button
                  name="updateDriver"
                  class="background-primary"
                  @click="updateDriver(driver)"
                >
                  Vote
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div id="endBanner">
          <head>
            <title>Website with End-of-Page Navigation Banner</title>
          </head>
        </div>
        <body>
          <div class="footer">
            <div class="content">
              <h1>cps..OUR PARTNERS</h1>
              <p>Fédération Internationale de l'Automobile.</p>
            </div>
            <nav>
              <a href="/">Home</a> || <a href="/Standings">Standings</a>||
              <a href="/aboutUs">About Us</a>||
              <a href="/Rules">Rules and Regulations</a>||
              <a href="/Goals">Our Goals</a>||
              <a href="/Help">Contact Teams</a>||
            </nav>
            <p>&copy; 2023 captains..™. All rights reserved.</p>
            <p>&copy; 2003-2023 Formula One World Championship Limited.</p>
          </div>
        </body>
      </div>
    </div>
  </body>
</template>

<script>
import navigationbar from "./Navigation.vue";
import axios from "axios";
export default {
  components: {
    navigationbar,
  },
  methods: {
    async deleteDriver(driver) {
      try {
        await axios.delete(this.baseUrl + "/deleteDriver", {
          data: { id: driver.id },
        });
        this.driver = this.user.filter((r) => r.id !== driver.id);
      } catch (e) {
        this.errors.push(e);
      }
    },
    async updateDriver(driver) {
      driver.VoteCount++;
      // console.log(driver);
      try {
        await axios.put(this.baseUrl + "/updateDriver", {
          id: driver.id,
          VoteCount: driver.VoteCount,
        });
        this.driver = this.driver.filter((r) => r.id !== driver.id);
      } catch (e) {
        this.errors.push(e);
      }
    },
  },

  async created() {
    try {
      // console.log('rubtas');
      const response = await axios.get(this.baseUrl + "/readAllDrivers");
      // console.log(response);
      this.drivers = response.data.tasks;

      // console.log(response.data);
      // console.log(this.drivers);
    } catch (e) {
      this.errors.push(e);
    }
    try {
      await axios.put(this.baseUrl + "/updateDriver");
    } catch (e) {
      this.errors.push(e);
    }
  },
  data() {
    return {
      drivers: [],
      baseUrl: "http://127.0.0.1:8000/api",
      errors: [],
    };
  },
};
</script>

<style scoped>
#text {
  margin-top: 50px;
  color: white;
}
#body {
  text-align: center;
  padding: 0px;
  height: 605px;
  background-image: url("https://images.pexels.com/photos/12989710/pexels-photo-12989710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
}
.spaced-button {
  margin-right: 150px;
  margin-left: 150px;
}
#news {
  text-align: left;
  margin-top: 35px;
}
#blogs {
  text-align: right;
  margin-top: 300px;
}
#endBanner {
  margin: 0;
  position: fixed;
  padding: 0px;
  font-family: Arial, sans-serif;
}
.content {
  padding: 20px;
}
.footer {
  background-color: #000000;
  color: white;
  margin-top: 500px;
  text-align: center;
  padding: 10px;
  bottom: 110;
  width: 100%;
}
</style>
