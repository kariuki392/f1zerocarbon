<template>
  <body id="body">
    <div class="home-root">
      <navigationbar />
      <div id="text">
        <h3>2023 Driver Standings</h3>
        <h4>Championship Points Standings</h4>
        <table id="DriversStandingsTable">
          <tr>
            <td>Position</td>
            <td>Driver</td>
            <td>Nationality</td>
            <td>Car</td>
            <td>Points</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Max Verstappen</td>
            <td>NED</td>
            <td>RED BULL RACING HONDA RBPT</td>
            <td>364</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sergio Perez</td>
            <td>MEX</td>
            <td>RED BULL RACING HONDA RBPT</td>
            <td>219</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Fernando Alonso</td>
            <td>ESP</td>
            <td>ASTON MARTIN ARAMCO MERCEDES</td>
            <td>170</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Lewis Hamilton</td>
            <td>GBR</td>
            <td>MERCEDES</td>
            <td>164</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Carlos Sainz</td>
            <td>ESP</td>
            <td>FERRARI</td>
            <td>117</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Charles Leclerc</td>
            <td>MON</td>
            <td>FERRARI</td>
            <td>111</td>
          </tr>
          <tr>
            <td>7</td>
            <td>George Russell</td>
            <td>GBR</td>
            <td>MERCEDES</td>
            <td>109</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Lando Norris</td>
            <td>GBR</td>
            <td>MCLAREN MERCEDES</td>
            <td>79</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Lance Stroll</td>
            <td>CAN</td>
            <td>ASTON MARTIN ARAMCO MERCEDES</td>
            <td>47</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Pierre Gasly</td>
            <td>FRA</td>
            <td>ALPINE RENAULT</td>
            <td>37</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Esteban Ocon</td>
            <td>FRA</td>
            <td>ALPINE RENAULT</td>
            <td>36</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Oscar Piastri</td>
            <td>AUS</td>
            <td>MCLAREN MERCEDES</td>
            <td>36</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Alexander Albon</td>
            <td>THA</td>
            <td>WILLIAMS MERCEDES</td>
            <td>21</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Nico Hulkenberg</td>
            <td>GER</td>
            <td>HAAS FERRARI</td>
            <td>9</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Valtteri Bottas</td>
            <td>FIN</td>
            <td>ALFA ROMEO FERRARI</td>
            <td>6</td>
          </tr>
          <tr>
            <td>16</td>
            <td>Zhou Guanyu</td>
            <td>CHN</td>
            <td>ALFA ROMEO FERRARI</td>
            <td>4</td>
          </tr>
          <tr>
            <td>17</td>
            <td>Yuki Tsunoda</td>
            <td>JPN</td>
            <td>ALPHATAURI HONDA RBPT</td>
            <td>3</td>
          </tr>

          <tr>
            <td>18</td>
            <td>Kevin Magnussen</td>
            <td>DEN</td>
            <td>HAAS FERRARI</td>
            <td>2</td>
          </tr>
          <tr>
            <td>19</td>
            <td>Logan Sargeant</td>
            <td>USA</td>
            <td>WILLIAMS MERCEDES</td>
            <td>0</td>
          </tr>
          <tr>
            <td>20</td>
            <td>Liam Lawson</td>
            <td>NZL</td>
            <td>ALPHATAURI HONDA RBPT</td>
            <td>0</td>
          </tr>
          <tr>
            <td>21</td>
            <td>Nyck De Vries</td>
            <td>NED</td>
            <td>ALPHATAURI HONDA RBPT</td>
            <td>0</td>
          </tr>
          <tr>
            <td>22</td>
            <td>Daniel Ricciardo</td>
            <td>AUS</td>
            <td>ALPHATAURI HONDA RBPT</td>
            <td>0</td>
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
table,
td {
  border: 1px solid rgb(100, 100, 100);
}
#DriversStandingsTable {
  width: 100%;
  background-color: rgb(119, 118, 118, 0.6);
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
