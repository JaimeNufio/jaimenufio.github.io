<template>
<div class="h-slice">
    <div class="container degrees">
        <div class="title montserrat">Education</div>

        <div class="long-card">
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
        </div>

        <div class="long-card">
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
        </div>

    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.degrees{
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.text-part{
    padding: 15px;
    text-align: left;
}

.text-part .heebo{
    font-size: .7em;
}

.long-card{
    background-color: #E9282D;
    padding: 5px 10px;
    border-radius: 10px;
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
</style>