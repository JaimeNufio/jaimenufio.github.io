<template>
    <div>
        <div v-if="!removeTop"  :style="{'background-color':colorTop}" class="pad"/>
        <div class="diagonal" :class="styleType">
            <div class="d-flex flex-column justify-content-between" >
            <div :style="{'background-color':colorTop}" class="pad"/>
            <div class=""><slot name="content"/></div>
            <div :style="{'background-color':colorBottom}" class="pad"/>
        </div>
    </div>
    <div  :style="{'background-color':colorBottom}" class="pad"/>
  </div>
</template>

<script>
export default {
    props:{
        colorTop:{
            type:String,
            default: "#FF0000"
        },
        colorBottom:{
            type:String,
            default: "#0000FF"
        },
        styleNum:{
            type:Number,
            default: 1
        },
        removeTop:{
            type: Boolean,
            default: false
        }
    },

    computed:{
        styleType:{
            get(){
                if( this.styleNum === 1){
                    return 'style1'
                }
                if( this.styleNum === 2){
                    return 'style2'
                }
                if( this.styleNum === 3){
                    return 'style3'
                }
                if( this.styleNum === 4){
                    return 'style4'
                }
                return 'style1'
            }
        }
    }
}
</script>

<style>

.pad{
    min-height:40px;
    height:5vh;
    z-index:-1;
}

.diagonal{
  position:relative;
  isolation: isolate;

}

.diagonal::after{
  content: '';
  position: absolute;
  z-index: -1;
  inset: 0;
}

.style1.diagonal::after{
    transform: skewY(-3deg);
    background-image:linear-gradient(45deg,#12c2e9,#c471ed,#f64f59)
    /* background-image: var('--accent') !important; */
}

.style2.diagonal::after{
    transform: skewY(-3deg);
    background-image:linear-gradient(45deg,var(--accent),var(--accent));
    /* background-image: var(--accent) !important; */
}

.style3.diagonal::after{
    transform: skewY(3deg);
    background-image:linear-gradient(45deg,var(--first-dark),var(--first-dark));
    /* background-image: var(--accent) !important; */
}

.style4.diagonal::after{
    transform: skewY(-3deg);
    background-image:linear-gradient(45deg,var(--off-gray),var(--off-gray));
    /* background-image: var(--accent) !important; */
}

</style>