<template>
  <div class="h-slice">

    <div class="container px-3">
      <div class="section-title "> 

          <div class="pb-4 text-wrap text-break">
                <div class="title montserrat">Work Experience</div>
                <!-- <div class="sub-title mada">Working in the Industry since 2020.</div> -->
            </div>
        </div>
      <div class="row d-flex py-3 px-3"> 
        <div class="col-12 col-md-4 d-flex flex-column justify-content-start">
          <div class="row flex-column justify-items-center py-3">
          <div class="col-12 col-lg-12">
            <img src="@/assets/images/advisr.png"/>
          </div>
          <div class="col-12 col-md-12">
            <span class="sub-title mada">
              Advisr, Inc<br/>
            </span>
            <span class="text heebo">
              New York City, NY <br/>
              Feb 2022 - Present
            </span>
          </div>
          </div>
        </div>
        <div class="col-12 col-md-8"> 
          <Terminal 
          color="rgba(70,70,70,.85)"
          textColor="white"
          >
          <template #header>
            <span>Software Engineer (Full Stack)</span>
          </template>
          <template #content>
            <ul>
              <li>Developing a data driven recommendation engine webapp to simplify the product sales process for
advertisements using <span class="bold-advisr-advisr">Vue.js</span>, <span class="bold-advisr">Express.js</span>, <span class="bold-advisr">PostgreSQL</span>, and <span class="bold-advisr">Docker</span>.</li>
              <li>Assisting in the development of a tool that automatically generates PowerPoint presentations based on the sales
campaign data (client objective, target audience, geo, flight dates, total budget, etc.)</li>
              <li>Designing and manage database tables using <span class="bold-advisr">PostgreSQL</span> and <span class="bold-advisr">Redis</span>.</li>
              <li>Implementing automated tests using <span class="bold-advisr">Cypress</span> and <span class="bold-advisr">Jenkins</span>.</li>
              <li>Performing <span class="bold-advisr">Agile</span> software development practices (Standups, Sprint Meetings, Retrospectives, etc.)</li>
            </ul>
          </template>
        </Terminal>
        </div>
      </div>
      <div class="row d-flex py-3 px-3"> 
        <div class="col-12 col-md-4 d-flex flex-column justify-content-start">
          <div class="row flex-column justify-items-center py-3">
          <div class="col-12 col-lg-12">
            <img :style="{'width':'200px',}" src="@/assets/images/adp.png"/>
          </div>
          <div class="col-12 col-lg-12">
            <span class="sub-title mada">
              ADP, Inc<br/>
            </span>
            <span class="text heebo">
              Parsippany, NJ <br/>
              August 2020 - Feb 2022 
            </span>
          </div>
          </div>
        </div>
        <div class="col-12 col-md-8 "> 
          <Terminal 
          color="rgba(70,70,70,.85)"
          textColor="white"
          >
          <template #header>
            <span>Software Engineer (Full Stack)</span>
          </template>
          <template #content>
            <ul>
              <li>Monitored Production environment and wrote dashboards using <span class="bold-adp">Splunk</span>.</li>
              <li>Revamped long-term storage solution for daily performance logs into a <span class="bold-adp">Grafana</span>/<span class="bold-adp">InfluxDB</span> stack.</li>
              <li>Assisted the team in maintaining the CD/CI pipeline at ADP through deployments and automation tools such as
                <span class="bold-adp">Jenkins</span>, and <span class="bold-adp">Docker</span>.</li>
              <li>Developed test scripts for testing in <span class="bold-adp">VuGen</span> to be run in <span class="bold-adp">LoadRunner</span>.</li>
            </ul>
          </template>
        </Terminal>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Terminal from "@/components/Terminal/Terminal.vue"

export default{
components:{
    Terminal
}
}
</script>

<style scoped>

*{
    color: white
}

.h-slice{
  padding-top: 0px;
}

.row .terminal-content{
  /* height: 500px; */
  height: 100%;
}

.terminal-content{
  height: 500px;
}

.h-slice{
    background-color: var(--second-dark);
}

.bold-advisr{
  font-weight: 900;
  color:rgb(92, 182, 255);

}
.bold-adp{
  font-weight: 900;
  color:rgb(255, 39, 39);

}

.sub-title{
    font-weight: 500 !important;
}

.sub-title{
    font-size: 1.3em;
}

</style>