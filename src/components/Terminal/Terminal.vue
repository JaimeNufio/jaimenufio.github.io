<template>
    <div class="terminal-bg"
        :style="{
            'background-color':color,
            }"
        >
        <div class="header d-flex justify-content-between">
            <span class="ps-3 pt-1">
                <slot name="header"/>
            </span>
            <div class="d-flex pt-2 pe-2"> 
                <span class="dot" :style="{background:'#FF5E57'}"></span>
                <span class="dot" :style="{background:'#FEBC2E'}"></span>
                <span class="dot" :style="{background:'#28C840'}"></span>
            </div>
        </div>
        <div class="terminal-body ubuntu" 
        :style="{'color':textColor}">
            <slot name="content"/>
        </div>
    </div>
</template>

<script>
export default {

props:['title','color','textColor']


}
</script>

<style scoped>


.terminal-bg{
    /* background-color: rgba(200,100,50,.5); */
    min-height: 200px;
    min-width: 200px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 10px 10px 5px rgba(32, 32, 32,.4);
}

.terminal-body{
    text-align: left;
    padding: 15px;
    font-size: 1.2em;
}

.terminal-bg .header{
    background-color: rgb(43, 43, 43);
    /* border-radius: 20px 20px 0px 0px; */
    color: white;
    text-align: left;
    padding: 5px 0px 5px 0px;
    font-size: 1.15em;
    font-weight: 700;
}

.dot {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
  margin-right:3px !important;
}

</style>