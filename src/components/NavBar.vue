<template>
<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">JaimeNuf.io</a>
    <button 
    class="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    >
      <box-icon name='menu-alt-right' color="white" ></box-icon>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li 
            v-for="page in navPages" 
            :key="page.name" 
            class="nav-item"
        >
            <RouterLink :to="{name:page.name}" class="d-flex pe-3"> 
                <div class="pt-2"> 
                    <box-icon 
                    type='solid' 
                    :name="page.icon" 
                    color="white"
                    :class="isActive(page)" ></box-icon>
                </div>
            <div 
                class="nav-link ps-2"
                :class="isActive(page)" 
                aria-current="page" >
                {{page.title}}
            </div>
            </RouterLink>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li> -->
      </ul>
    </div>
  </div>
  
</nav>
</template>

<script>
import {useRoute} from 'vue-router'

export default{
    data(){
        return{
            navPages:[
                {
                    name:'about',
                    title: 'About Me',
                    icon: 'user'
                },
                {
                    name:'home',
                    title: 'Resume',
                    icon: 'spreadsheet'

                },
                {
                    name:'code',
                    title: 'Projects',
                    icon: 'terminal'
                },
                {
                    name:'demos',
                    title: 'Demos',
                    icon: 'flask'
                },
                {
                    name:'pets',
                    title: 'Pets',
                    icon: 'cat'
                },
            ]
        }
    },
    methods:{
        isActive(page){
            const route = useRoute();
            console.log(route.name,page.name)
            return route.name == page.name ? 'active': ''
        }
    }
}
</script>

<style >
*{
    text-decoration: none !important;
}

nav.navbar.bg-dark{
    background-color: var(--accent-dark) !important;
}

.navbar-nav .nav-link{
    text-align: left;
    vertical-align: middle;
    padding: 10px 0px;
    /* margin-left: auto; */
}

box-icon.h-15{
    height:15px;
}

.navbar-nav .nav-link{
    /* font-weight: lighter !important; */
    color: var(--bs-navbar-active-color) !important;
    opacity: .4;
}

box-icon{
    opacity: .4;
}

a .active{
    opacity: 1 !important;
}

</style>