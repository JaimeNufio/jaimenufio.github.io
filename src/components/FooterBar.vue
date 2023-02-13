<template>
    <footer>
        <div class="d-flex justify-content-center gap-1">
            <!-- <div>|</div> -->
            <div>Jaime Nufio</div>
            <div>|</div>
            <div>
                <a href="https://github.com/JaimeNufio">
                    <box-icon size="" type='logo' name='github' color="#ffffff"></box-icon> 
                </a>
            </div>
            <div>|</div>
            <div>
                <a href="https://www.linkedin.com/in/jaimenufio/">
                    <box-icon size="" type='logo' name='linkedin' color="#ffffff"></box-icon>
                </a> 
            </div>
            <div>|</div>
            <div>
                <a href="https://www.youtube.com/@Wezla/videos">
                    <box-icon size="" type='logo' name='youtube' color="#ffffff"></box-icon> 
                </a>
            </div>
            <!-- <div>|</div> -->
        </div>
    <div>{{new Date().getFullYear()}}</div>
    </footer>
</template>

<style scoped>
*{
    color: white;
    opacity: 1 !important;
}

footer{
  padding: 20px 0 20px 0;
  font-family: montserrat;
  max-height: 200px !important;
}


</style>