<template>
  <div class="h-slice hero p-5">
    <div class="container"> 
      <div class="row justify-content-center">
        <div class="col-12 col-md-3 d-flex align-items-center">
          <img  class="py-3 circle" :style="{width:'100%'}" src="@/assets/images/icon.gif"/>
        </div>
        <div class="col-12 col-md-9  d-flex align-items-center">
          <div class="hero-text ">
            <div class="sub-title mada">
              Hello, my name is
            </div>
            <div class="main-title title montserrat"> 
              JAIME NUFIO
            </div>
            <div class="sub-title mada">
              I'm a software developer.
            </div>
            <div class="text heebo pt-2">
              Welcome to my corner of the internet.<br/>
              Feel free to look around and see what I've worked on.
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>

  <Skills/>
  <WorkExperience/>

  <!-- <div class="h-slice"></div> -->
</template>

<script>
import WorkExperience from "@/components/ResumeParts/WorkExperience.vue"
import Skills from "@/components/ResumeParts/Skills.vue"


export default{
components:{
  WorkExperience,
  Skills
}
}
</script>

<style>

.h-slice{
 padding: 20px;
 padding-bottom: 20px;
 /* min-height: 50vh; */
}

.main-title{
  font-size: 8vb !important;
  line-height: 10vh;
  word-wrap: normal;
}

.title{
  font-size: 5vb;
  text-align: left;
  /* line-height: 5vb; */
}

.sub-title{
  font-size: 2em;
  text-align: left;
}

.text{
  font-size: 1em;
  text-align: left;
}

.hero{
background-color: rgb(255, 255, 255);
 color: rgb(0, 0, 0);
 min-height: 15vh !important; 
}

.hero-text{
  text-align: center;
}

.flip{
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.circle{
  border-radius: 50%;
  display: inline-block;
  margin-right:3px !important;

}

/* Mobile modifiers */
@media (max-width: 575.98px) { 
  .hero{
    min-height: 100vh !important;
  }
}

</style>