<template>
  <navigationbar />
  <div id="body">
    <div id="text">      
        <h1 id="title">HELP</h1>
        <h3>
          For Help and Concerns, feel free to contact our help teams via the following
          mediums below;
        </h3>
        <li id="info">
          <h5>
            <h3>
            Emails: captainsfiaF1@gmail.com; / F1Fia@gmail.com;
          </h3> 
          <h3> 
            Telephone Number: 0200009476 / 0200009477 / 0200009478
          </h3>
          </h5>
          <h5>Terms And Conditions Apply.</h5>
        </li>
        
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
  margin-top: 22px;
  color: white;
}
#title {
  margin-top: 50px;
  text-align: center;
  font-style: bold;
}
#info {
  margin-top: 50px;
  text-align: left;
  font-style: bold;
}
#endBanner {
  margin: 0;
  position: fixed;
  padding: 0;
  font-family: Arial, sans-serif;
  margin-top: 400px;
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
  margin-top: 400px;
}
#body {
  margin: 5px;
  text-align: center;
  padding: 5px;
  height: 605px;
  background-image: url("https://images.pexels.com/photos/12989710/pexels-photo-12989710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
}
</style>
