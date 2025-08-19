<template>
  <body id="body">
    <div class="home-root">
      <navigationbar />
      <div id="text">
        <h4>F1 2023 RACING CALENDER</h4>
        <table id="f1Calender">
          <tr>
            <td>Date</td>
            <td>RACE</td>
            <td>LIGHTS OUT</td>
          </tr>
          <tr>
            <td>Mar 3 - 5</td>
            <td>Gulf Air Bahrain GP; Bahrain International Circuit</td>
            <td>M. Verstappen</td>
          </tr>
          <tr>
            <td>Mar 17 - 19</td>
            <td>STC Saudi Arabian GP; Jeddah Street Circuit</td>
            <td>S. Pérez</td>
          </tr>
          <tr>
            <td>Mar 31 - Apr 2</td>
            <td>Rolex Australian GP; Melbourne Grand Prix Circuit</td>
            <td>M. Verstappen</td>
          </tr>
          <tr>
            <td>Apr 28 - 30</td>
            <td>Azerbaijan GP; Baku City Circuit</td>
            <td>S. Pérez</td>
          </tr>
          <tr>
            <td>May 5 - 7</td>
            <td>Crypto.com Miami GP; Miami International Autodrome</td>
            <td>M. Verstappen</td>
          </tr>
          <tr>
            <td>May 19 - 21</td>
            <td>
              Qatar Airways Emilia Romagna GP; Autodromo Enzo e Dino Ferrari
            </td>
            <td>Canceled</td>
          </tr>
          <tr>
            <td>May 26 - 28</td>
            <td>Monaco GP; Circuit de Monaco</td>
            <td>M. Verstappen</td>
          </tr>
          <tr>
            <td>Jun 2 - 4</td>
            <td>AWS Spanish GP; Circuit de Barcelona-Catalunya</td>
            <td>M. Verstappen</td>
          </tr>
          <tr>
            <td>DateJun 16 - 18</td>
            <td>Pirelli Canadian GP; Circuit Gilles-Villeneuve</td>
            <td>M. Verstappen</td>
          </tr>
          <tr>
            <td>Jun 30 - Jul 2</td>
            <td>RACERolex Austrian GP; Red Bull Ring</td>
            <td>M. Verstappen</td>
          </tr>
          <tr>
            <td>Jul 7 - 9</td>
            <td>Aramco British GP; Silverstone Circuit</td>
            <td>M. Verstappen</td>
          </tr>
          <tr>
            <td>Jul 21 - 23</td>
            <td>Qatar Airways Hungarian GP; Hungaroring</td>
            <td>M. Verstappen</td>
          </tr>
          <tr>
            <td>Jul 28 - 30</td>
            <td>MSC Cruises Belgian GP; Circuit de Spa-Francorchamps</td>
            <td>M. Verstappen</td>
          </tr>
          <tr>
            <td>Aug 25 - 27</td>
            <td>Heineken Dutch GP; Circuit Park Zandvoort</td>
            <td>M. Verstappen</td>
          </tr>
          <tr>
            <td>Sep 1 - 3</td>
            <td>Pirelli Italian GP; Autodromo Nazionale Monza</td>
            <td>M. Verstappen</td>
          </tr>
          <tr>
            <td>Sep 15 - Sep 17 - 3:00 pm</td>
            <td>Singapore Airlines Singapore GP; Marina Bay Street Circuit</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Sep 22 - Sep 24 - 8:00 am</td>
            <td>Lenovo Japanese GP; Suzuka International Racing Course</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Oct 6 - Oct 8 - 8:00 pm</td>
            <td>Qatar Airways Qatar GP; Losail International Circuit</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Oct 20 - Oct 22 - 10:00 pm</td>
            <td>Lenovo United States GP; Circuit of the Americas</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Oct 27 - Oct 29 - 11:00 pm</td>
            <td>Mexico City GP; Autodromo Hermanos Rodriguez</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Nov 3 - Nov 5 - 8:00 pm</td>
            <td>Rolex São Paulo GP; Autodromo Jose Carlos Pace</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Nov 17 - Nov 19 - 9:00 am</td>
            <td>Heineken Las Vegas GP; Las Vegas Street Circuit</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Nov 24 - Nov 26 - 4:00 pm</td>
            <td>Etihad Airways Abu Dhabi GP; Yas Marina Circuit</td>
            <td>-</td>
          </tr>
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
export default {
  components: {
    navigationbar,
  },
};
function myFunction() {
  document.getElementById("myTABLE").style.tableLayout = "fixed";
}
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
#f1Calender {
  width: 100%;
  background-color: rgb(119, 118, 118, 0.6);
}
table,
td {
  border: 1px solid rgb(179, 179, 179);
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
