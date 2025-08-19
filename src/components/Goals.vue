<template>
  <body id="body">
    <div class="home-root">
      <navigationbar />
      <div id="text">
        <h5>
          We continue to lead the way in creating a sustainable sport for fans
          around the world to enjoy, using innovative technology & changing the
          way we work
          <h3>OUR KEY GOALS:</h3>

          <h4>1: Develop future engine powered by sustainable fuels.</h4>

          <h4>2: Become Net Zero Carbon by 2030.</h4>

          <h4>3: Zero waste on and off track.</h4>

          <h4>4: Reduced footprint back at base.</h4>

          <h4>5: Leave a lasting positive impact.</h4>
        </h5>
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
export default {
  components: {
    navigationbar,
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
  padding: 0;
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
