<template>

<div class="h-slice hero p-5">
  <div class="container"> 

    <div class="row">
      <div class="mx-auto col-12 col-md-3">
        <img  class="py-3" :style="{width:'100%'}" src="@/assets/images/icon.gif"/>
      </div>
      <div class="hero-text col-12 col-md-9">
        <div class=" title montserrat"> 
          Hello World!
        </div>

        <div class="sub-title mada">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>

        <div class="text heebo">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ab debitis minima facilis, eum dolorem veniam nemo dolores, itaque quidem magni beatae alias possimus impedit accusamus mollitia cumque! Quas, facilis.
        </div>
      </div>
    </div>
  </div>  
</div>

  <div class="">



    <Terminal 
      title="Hello World "
      color="rgba(250,100,0,.75)"
      textColor="white">
      <template #content>Nufio@FooBar: $_</template>
    </Terminal>

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

<style>
.title{
  font-size: 4em;
  text-align: left;
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
background-color: rgb(0, 0, 0);
 color: white;
 min-height: 15vh !important; 
}


/* Mobile modifiers */
@media (max-width: 575.98px) { 
  .hero{
    min-height: 100vh !important;
  }
}

</style>