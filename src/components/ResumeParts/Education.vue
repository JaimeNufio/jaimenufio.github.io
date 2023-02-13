<template>
<div class="">

    <SkewedDivider
        :styleNum="4"
        colorTop="#0F3460"
        colorBottom="var(--third-dark)"
    >
        <template #content> 
            <div class="container px-3 degrees">
            <div class="pb-2">
                <div class="title montserrat">Education</div>
                <!-- <div class="sub-title mada">You can click on the cards to see some of the classes I took.</div> -->
            </div>

            <div class="long-card-item">
            <div class="long-card"
            data-bs-toggle="collapse" 
            data-bs-target="#master" 
            aria-expanded="false" 
            aria-controls="masters"
            >
                <div class="image-wrap">
                    <div class="image-part">
                        <img src="@/assets/images/njit.png"/>
                    </div>
                </div>
                <div class="text-part">
                    <div class="card-title montserrat">New Jersey Institute of Technology</div>
                    <div class="card-subtitle mada">MS - Data Science</div>
                    <div class="card-text heebo">2020 - 2023</div>
                    <div class="card-text heebo">3.5 GPA</div>
                </div>
                <div class="ms-auto">
                    <box-icon size='lg' color="white" name='chevron-down'></box-icon>
                </div>
            </div>
            <div class="collapse" id="master">
                <div class="m-2 collapse-internal p-3">
                    <div class="montserrat sub-title text-black">Relevant Course Work:</div>   
                        <div class="d-flex flex-wrap">
                            <div class="col-6 col-lg-3 d-flex"
                            v-for="subject,i in masterClasses"
                                :key="i"
                            >
                                <div class="mada item pe-1">
                                    {{ '-' }}
                                </div>
                                <div class="mada item">
                                {{ subject }}
                            </div>
                        </div>
                    </div>         
                </div>
            </div>
        </div>

        <div class="long-card-item">
            <div class="long-card"
            data-bs-toggle="collapse" 
            data-bs-target="#bachelors" 
            aria-expanded="false" 
            aria-controls="bachelors"
            >
                <div class="image-wrap">
                    <div class="image-part">
                        <img src="@/assets/images/njit.png"/>
                    </div>
                </div>
                <div class="text-part">
                    <div class="card-title montserrat">New Jersey Institute of Technology</div>
                    <div class="card-subtitle mada">BS - Computer Science</div>
                    <div class="card-text heebo">2016 - 2020</div>
                    <div class="card-text heebo">3.645 GPA</div>
                </div>
                <div class="ms-auto pe-0">
                    <box-icon size='lg' color="white" name='chevron-down'></box-icon>
                </div>
            </div>
            <div class="collapse" id="bachelors">
                <div class="m-2 collapse-internal p-3">
                    <div class="montserrat sub-title text-black">Relevant Course Work:</div>   
                        <div class="d-flex flex-wrap">
                            <div class="col-6 col-lg-3 d-flex"
                            v-for="subject,i in bachelorsClasses"
                                :key="i"
                            >
                                <div class="mada item pe-1">
                                    {{ '-' }}
                                </div>
                                <div class="mada item">
                                {{ subject }}
                            </div>
                        </div>
                    </div>         
                </div>
            </div>
        </div>

    </div>
        </template>
    </SkewedDivider>

</div>
</template>

<script>
import SkewedDivider from '../Util/SkewedDivider.vue';

export default {
    SkewedDivider,
    components: { SkewedDivider },
    data (){
        return {
            masterClasses: [
                'Machine Learning','Applied Statistics',
                'Big Data','Deep Learning','Data Analytics with R',
                 'Data Mining','Data Management Systems',
                 'Data Mining & Analysis For Managers'
            ],
            bachelorsClasses: [
                'Linear Algebra','Network Security', 'Android Application Development',
                'Foundations of Computer Science I & II','Web Mining & Information Retrieval',
                'Design in Software Engineering','Database Systems',
                'Artifical Inteligence','Computer Networks','Intensive Linux',
                'Principals of Operating Systems','Computer Organiztion & Architecture',
                'Probability & Statistics','Differential Equations'
            ],
        }
    }
}
</script>

<style scoped>

*{
    opacity: 1;
}

.degrees{
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.sub-title{
    font-size: 1.3em;
}

.text-part{
    padding: 15px;
    text-align: left;
}

.text-part .heebo{
    font-size: .7em;
}

.collapse-internal > .sub-title{
    font-size: 1.3em;
}

.long-card{
    background-color: #e0494e;
    padding: 10px 10px;
    border-radius: 10px;
}

.long-card-item{
    background-color: #e0494e;
    border-radius: 10px;
}

.item{
    text-align: left;
    font-weight: 400 !important;
}

img{
    height: 100%;
}

.image-wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.image-part{
    display: flex;
}

img{
    min-height: 10px;
    max-height: 10vh;
    padding:10px;
    background-color: white;
    border-radius: 25px;
}

.long-card{
    display: flex;
}

*{
    color: white;
}

.heebo{
    font-weight: 400;
}

.mada{
    font-weight: 300;
}
.h-slice{
    background-color: rgb(24, 24, 24);
}

.collapse-internal, .item{
    background-color: aliceblue;
    border-radius: 10px;
    color: black !important;
}

.collapse, .collapsing{
    /* background-color: grey !important;  */
    border-radius: 0 0 10px 10px;
}
</style>