<template>
  <navigationbar />
  <div id="body">
    <div id="text">
      <h1 id="title">ABOUT US</h1>
      <h5>
        <h2>'captains..'</h2>
        <h3>
          Indeed, over the years F1 has improved and developed to reduce the
          carbon footprint and minimise the net cost for operation as far as
          energy is concerned.
        </h3>
        Our organization (THE Middleman) keeps track, holds accountable and
        awards teams, drivers and principles to minimise the carbon emmissions
        and efficiency while travelling and performing in those races
        accordingly as they try to improve and develop. It goes without saying
        Formula 1 as a sport uses alot of energy from racing to moving around
        the world and everything in-between as reflected on the report and
        statistics and if not closely mornitored and regulated this sport may
        end up with a large carbon footprint which may lead to very many
        consequences; from affecting the sport to affecting the world as we call
        it our home, We are all about keeping the sport in check inorder to
        enjoy the sport and keep the world Green. Awards to team drivers and
        team principles are awarded at the end of every season with the least
        carbon emmisions, efficient modes of operation and regulated use of
        energy that emits harmful emmsions to the environment either short term
        or long term effects, Solutions offered and practiced by teams also do
        not go unrewarded. Other divisions in the motorsports such as f2, f3,
        MotorGp and others regulated under FIA are also kept in check in terms
        of carbon footprint. This organization(proprietion) specifically focuses
        on the pinacle of motorsports, FORMULA 1. F1 has advanced technology on
        the cars such as electric motors for example, not only to go fast but
        also to reduce combustion necessary to go at such speeds. Other
        developments such as better aero bodykits strategies for pitstops etc
        are recognized greatly in the race hence dominating teams and big
        upgrades.
      </h5>
      <h1></h1>
    </div>
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
          <a href="/Goals">Our Goals</a>|| <a href="/Help">Contact Teams</a>||
        </nav>
        <p>&copy; 2023 captains..™. All rights reserved.</p>
      </div>
    </body>
  </div>
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
  margin-top: 0px;
  color: white;
}
#title {
  margin-top: 50px;
  text-align: center;
}
#body {
  margin: 5px;
  text-align: center;
  padding: 5px;
  height: 605px; 
  background-image: url("https://th.bing.com/th/id/R.496c0654e8731ef78306110155f94e1a?rik=0sTE1UhbQv78uA&riu=http%3a%2f%2fwww.ojdo.de%2fwp%2fwp-content%2fgallery%2fred-blurry-wallpapers%2fred-mist.jpg&ehk=uRdc0FLOWlGB1BodFFmBusQ%2fTePFv9%2bF6BD7cQrYq4M%3d&risl=&pid=ImgRaw&r=0");
}
#endBanner {
  margin: 0;
  position: fixed;
  padding: 0;
  font-family: Arial, sans-serif;
}
.content {
  padding: 20px;
  color: white;
}
.footer {
  background-color: #000000;
  color: white;
  text-align: center;
  padding: 10px;
  bottom: 110;
  width: 100%;
  margin-top: 455px;
  margin-bottom: 150px;
}
</style>
