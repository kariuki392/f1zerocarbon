<template>
  <body id="body">
    <div class="home-root">
      <navigationbar />
      <div id="text">
        <h1>CARBON FOOTPRINT REDUCTION</h1>
        <h5>
          _______________________________________________________________________________________________
        </h5>
        <h5>
          It doesn't have to be technical modifications to the cars to start and
          make a change in the sport, for instance, to start somewhere F1 can
          reduce use of single-use plastics inside the paddock and across the
          circuit venues, with a focus on promoting reusable bottle use and
          providing plentiful water stations. It goes without saying that
          therefore there should be a push to re-use, recycle or repurpose race
          weekend materials and what not. At the race tracks and and at
          homebase, the teams should work to make their offices and facilities
          more sustainable by using 100% renewable energy ie. water, sunlight or
          wind. Lastly the F1 Broadcast Operations are working to source
          alternative bio-fuels to run their generators where available in
          markets, which is commendable.
        </h5>
        <div class="scroll-container">
          <img
            src="https://www.gazzetta.gr/sites/default/files/inline-images/2021-07/F1-Net-Zero-2030-f1920%CE%A71080.jpg"
            alt="race car"
          />
        </div>
        <h5>
          ________________________________________________________________________________________________________________________________________________________________
        </h5>
        <h5>
          Development of a 100% sustainable fuel, slashing the use of using-use
          plastics and reviewing travel and freight logistics - these are just
          some of the things Formula 1 as a sport should and partly is currently
          working on as part of its committment to be net zero Carbon by 2030
          just as by the committment title 'NET ZERO 2030'. One of the ways to
          achieve the freight logistics is through remote broadcast operations,
          which will enable the company to reduce freight, while redesigned
          freight containers freight containers mean more efficient aircraft can
          be used to transport the equipment safely and some cases faster. To
          commend F1 on sustainability strategy towards NET ZERO 2030, is three
          years ago F1 set ambitious targets and have since been working with
          the 10 teams, race promoters, partners, suppliers, broadcasters and
          the FIA to reduce the sport's carbon footprint.
        </h5>
        <h5>
          _________________________________________________________________________________________________________________
        </h5>
        <div class="scroll-container2">
          <img
            src="https://presenterse.com/wp-content/uploads/2022/06/formula-1.jpg"
            alt="nz30 logo"
          />
        </div>
        <h5>
          ______________________________________________________________________________________
        </h5>
        <h5>
          There is a petition to have a alternative fuel introduced to the world
          that will not only avoid electric cars (which shall make majority of
          motorsports irrelevant in the industry) but also have a very minimum
          second to none carbon emmisions in the sport and mind-blowingly
          enough, the entire world.
          <h5>
            <h5>__________</h5>
            <h4>THE E10 FUEL(100% SUSTAINABLE FUEL)</h4>
            <h5>_____</h5>
            Comprising of a blend of 90% fuel and 10% renewable ethanol, which
            will reduce CO2 emissions overall - F1 is worling with ARAMCO and
            all the major fuel manufacturers in F1 to develop a 100% sustainable
            fuel to be introduced with a new engine in the next two years(2026)
            this results to 85%-96% CO2 emissions. Not only will this fuel be
            used on the F1 cars but can be implied on over 2 bilion cars on the
            planet and increasing and even other motorsports, talk about a
            bigger impact on the world too as a sport. This being a big
            improvement F1 will work hand in hand with F2 & F3 inorder to come
            with the best combination. Last but not least, F1 should plan to
            build F1 calendars to improve freight and travel logistics so the
            sport is moving more efficiently and as for the fans travelling to
            attend the races, carbon reduction measures should be investigated
            closely and more efficient travel arrangements will be assessed such
            as using Bicycles or electric scooters for the locals if suitable.
          </h5>
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
  background-color: #000000;
}
.spaced-button {
  margin-right: 150px;
  margin-left: 150px;
}
div.scroll-container {
  background-color: #000000;
  overflow: auto;
  white-space: nowrap;
  padding: 0px;
  width: 1350px;
  height: 502px;
}
div.scroll-container2 {
  background-color: #000000;
  overflow: auto;
  white-space: nowrap;
  padding: 0px;
  width: 1350px;
  height: 800px;
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
