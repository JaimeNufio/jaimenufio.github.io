<template>
  <div class="resume">


    <SkewedDivider
      colorTop="var(--first-dark)"
      colorBottom="var(--second-dark)"
      :styleNum="3"
      :removeTop="true"
    >
      <template #content>
        <div class="container px-3 pb-0">
          <div class="title montserrat">Resume</div>
          <div class="sub-title mada">Quick glance at experience and skills. I encourage you to look at my projects too!</div>
        
          <div class="d-flex pt-3 flex-row-reverse">
            <RouterLink :to="{name:'projects'}" class=""> 
              <button class="btn btn-primary" >To Projects</button>
            </RouterLink>
          </div>
          
        </div>
      </template>
    </SkewedDivider>


    <WorkExperience/>
    <Education/>
    <Skills/>
  </div>
</template>

<script>
import WorkExperience from "@/components/ResumeParts/WorkExperience.vue"
import Skills from "@/components/ResumeParts/Skills.vue"
import Education from "@/components/ResumeParts/Education.vue";
import SkewedDivider from "@/components/Util/SkewedDivider.vue";

export default {
  name: 'ResumeView',
  components: {
    WorkExperience,
    Skills,
    Education,
    SkewedDivider
}
}
</script>

<style scoped>
*{
  /* color:white; */
}

.sub-title{
  font-size: 1em;
  font-weight: 500;
}

.btn.btn-primary{
  background: var(--purple) !important;
  border: none;
}
</style>