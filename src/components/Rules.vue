<template>
  <body id="body">
    <div class="home-root">
      <navigationbar />
      <div id="text">
        <h6>
          1) REGULATIONS 1.1 The FIA will organise the FIA Formula One World
          Championship (the Championship) which is the property of the FIA and
          comprises two titles of World Champion, one for drivers and one for
          constructors. It consists of the Formula One Grand Prix races which
          are included in the Formula One calendar and in respect of which the
          ASNs and organisers have signed organisation agreements with the FIA.
          All the participating parties (FIA, ASNs, organisers, Competitors and
          circuits) undertake to apply as well as observe the rules governing
          the Championship and must hold the appropriate FIA Licences which are
          issued to drivers, Competitors, officials, organisers and circuits.
          1.2 The final text of these Sporting Regulations shall be the English
          version which will be used should any dispute arise as to their
          interpretation. Headings in this document are for ease of reference
          only and do not form part of these Sporting Regulations. 1.3 These
          Sporting Regulations apply to the whole calendar year referred to in
          the title, and to the Championship taking place within that calendar
          year (“the Championship”). Any changes made by the FIA for safety
          reasons may come into effect without notice or delay.
        </h6>
        <h6>
          2) GENERAL UNDERTAKING 2.1 All drivers, Competitors and officials
          participating in the Championship undertake, on behalf of themselves,
          their employees, agents and suppliers, to observe all the provisions
          as supplemented or amended of the International Sporting Code (the
          Code), the Formula One Technical Regulations (Technical Regulations),
          the Formula One Financial Regulations (Financial Regulations) and the
          present Formula One Sporting Regulations together referred to as “the
          Regulations”. 2.2 The Championship and each of its Competitions is
          governed by the FIA in accordance with the Regulations. 2.3
          Competition means any competition entered into the FIA Formula One
          Championship Calendar for any year commencing four (4) hours before P1
          is scheduled to start and ending at the time for the lodging of a
          protest under the terms of the Code or the time when a technical or
          sporting certification has been carried out under the terms of the
          Code, whichever is the later. 2.4 Any special national regulations
          must be submitted to the FIA with the original application for
          inclusion of a Competition on the international calendar. Only with
          the approval of the FIA can such special regulations come into force
          for a Competition.
        </h6>
        <h6>
          3) GENERAL CONDITIONS 3.1 It is the Competitor’s responsibility to
          ensure that all persons concerned by his entry observe all the
          requirements of the Regulations. If a Competitor is unable to be
          present in person at the Competition, he must nominate his
          representative in writing. The person having charge of an entered car
          during any part of a Competition is responsible jointly and severally
          with the Competitor for ensuring that the requirements are observed.
          3.2 Competitors must ensure that their cars comply with the conditions
          of eligibility and safety throughout each practice session, sprint
          session and the race. 3.3 The presentation of a car for initial
          scrutineering in accordance with Article 31.1 will be deemed an
          implicit statement of conformity. 3.4 All persons concerned in any way
          with an entered car or present in any other capacity whatsoever in the
          paddock, pit lane, or track must wear an appropriate pass at all
          times. 2023 Formula 1 Sporting Regulations 3/110 19 October 2022 ©2022
          Fédération Internationale de l’Automobile Issue 3 3.5 No pass may be
          issued or used other than with the agreement of the FIA. A pass may be
          used only by the person and for the purpose for which it was issued.
          3.6 Each Competitor must hold the minimum FIA Environmental
          Accreditation as follows: a) 2 Star Rating by 30 June 2022 b) 3 Star
          Rating by 30 June 2023
        </h6>
        <h6>
          4) LICENCES 4.1 All drivers, Competitors and officials participating
          in the Championship must hold an FIA Super Licence. Applications for
          Super Licences must be made annually to the FIA through the
          applicant’s ASN. 4.2 With the exception of a reprimand or fine, when a
          penalty is applied under the Code or Article 54.3 the stewards may
          impose penalty points on a driver’s Super Licence. If a driver accrues
          twelve (12) penalty points his licence will be suspended for the
          following Competition, following which twelve (12) points will be
          removed from the licence. Penalty points will remain on a driver’s
          Super Licence for a period of twelve (12) months after which they will
          be respectively removed on the twelve (12) month anniversary of their
          imposition.
        </h6>
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
  background-color:maroon;
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
