<template>
  <div class="wrapper">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
            <slot name="front" />
        </div>
        <div class="flip-card-back">
            <slot name="back" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.wrapper{
  min-height: 550px;
}

.flip-card {
  background-color: transparent;
  /* width: 400px; */
  /* height: 900px; */
  /* width: 100%; */
  /* height: 100%; */
  /* border: 2px solid #f1f1f1; */
  perspective: 1000px; 
  display: block;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-front {
  /* background-color: #bbb; */
  /* color: red; */
}

.flip-card-back {
  /* background-color: red; */
  color: white;
  transform: rotateY(180deg);
}

</style>