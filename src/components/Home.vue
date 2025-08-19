<template>
  <body id="body">
    <div class="home-root"> 
      <navigationbar />
      <div id="text">
        <h1>CARBON EMMISSIONS ERADICATION</h1>
        <h5>
        <h3>____________________________________________________________________________________________________________</h3>
          <h4>
            Investment in infrastructure and innovation are crucial drivers to
            technological progress, and not just any progress, but one that
            creates lasting solutions to environmental challenges that F1 as a
            sport has brought eg. High Carbon Emmisions.
            <h3>________________________________________________________________</h3>
          </h4>
          Why F1? Why 100% fuel sustainability? Well, everyone understands the need
          for the change in the motorsports world, an extensive report into F1's
          environmental impact revealed the championship was responsible for
          generating almost over 256000 tonnes of CO2 emmisions in the 2019
          season only in the F1 sport only as an example!
        </h5>
        <h3>_____________________________________________________</h3>

        <div class="scroll-container">
          <img
            src="https://images.pexels.com/photos/6697875/pexels-photo-6697875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="track"
          />
          <img
            src="https://images.pexels.com/photos/13857977/pexels-photo-13857977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="redbull"
          />
          <img
            src="https://images.pexels.com/photos/12078680/pexels-photo-12078680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="redbull"
          />
          <img
            src="https://images.pexels.com/photos/12078678/pexels-photo-12078678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="alpha"
          />
          <img
            src="https://images.pexels.com/photos/17809274/pexels-photo-17809274/free-photo-of-leclerc-side-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="ferrari"
          />
          <img
            src="https://images.pexels.com/photos/12075477/pexels-photo-12075477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="merc"
          />
          <img
            src="https://images.pexels.com/photos/12078677/pexels-photo-12078677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="aston"
          />
        </div>
        <h3>About Us</h3>
        <h5>
          "Over the years F1 has improved and developed to reduce the carbon
          footprint and minimise the net cost for operation ..."
        </h5>

        <a href="/aboutUs" class="text-info">Read More</a>

        <h5>
          You can participate in donation and voting to help this organization
          keep track, provide accountability and make a change in the sport and
          an impact to the green world.
        </h5>
        <a href="/Vote" class="spaced-button">Vote</a>

        <a href="/addRolePage" class="spaced-button">Sign A Petition</a>

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
div.scroll-container {
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
  padding: 0px;
}
div.scroll-container img {
  padding: 10px;
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
