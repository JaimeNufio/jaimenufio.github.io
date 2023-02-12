<template>
<Flip :style="{'height':'500px'}">
    <template #front>
        <Terminal
            :color="terminalFrontColor">
            <template #header>
                <slot name="headerFront"/>
            </template>
            <template #content>
                <slot name="contentFront"/>
            </template>
        </Terminal>
    </template>
    <template #back>
        <Terminal
            :color="terminalBackColor">
            <template #header>
                <slot name="headerBack"/>
            </template>
            <template #content>
                <slot name="contentBack"/>
            </template>
        </Terminal>
    </template>
</Flip>
</template>


<script>
import Flip from '@/components/Toys/Flip.vue'
import Terminal from './Terminal.vue';

export default{
    components:{
        Flip,
        Terminal
    },

    props:{
       terminalFrontColor:{
        type:String,
        default:'rgba(70, 70, 70, 0.85)'
       } ,
       terminalBackColor:{
        type:String,
        default:'rgba(70, 70, 70, 0.85)'
       } 
    }
}

</script>