<template>
  <div class="about mt-5 container">


    <Terminal 
    title="Hello World "
    color="rgba(250,100,0,.8)"
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