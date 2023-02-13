<template>
  <div class="h-slice hero p-5 jumbo">
    <div class="container"> 
      <div class="row justify-content-between">
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
              And I make things.
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




  <SkewedDivider
    colorTop="var(--first-dark)"
    colorBottom="var(--second-dark)"
    :styleNum="2"
    >
    <template #content> 
      <div class="container row mx-auto px-5"> 
        <div class="col-12 col-md-8 pb-5">
          <div class=" montserrat title">About Me</div>
            <div class="heebo text p-3">
            <p>I'm a 25 year old software engineer, current frontend developer and aspiring data scientist. </p>
            <p>I'm a self-starter software hobbyist turned developer looking to learn and work on new bleeding edge technologies on the frontier of computing. Currently pursuing a Masters in Data Science at NJIT in hopes of entering a big data role.</p>
            <p>In my free time I like to tinker with software and hardware, and this page will hopefully serve a platform to show off what I've been making.</p>
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex align-items-center p">
          <div class="mx-auto" 
          :style="{'transform': 'rotateZ(6deg)',
           'background':'var(--third-dark)',
            'padding':'15px 25px'}">
            <img  class="py-3" :style="{width:'100%','transform':'rotate(-8deg)'}" src="@/assets/images/jaime.jpg"/>
          </div>
        </div>
      </div>
    </template>
  </SkewedDivider>

  <!-- <div class="h-slice"></div> -->
</template>

<script>

import SkewedDivider from "@/components/Util/SkewedDivider.vue";

export default{
  components:{
    SkewedDivider,
}
}
</script>

<style>

.jumbo{
  padding: 20px;
  padding-bottom: 20px;
  background-color: var(--first-dark) !important;
}

.sub-title,.title,.text{
  /* filter:invert(1) */
  color: white;
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