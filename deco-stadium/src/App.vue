<template>
  <head>
    <link rel="stylesheet" href="stylesheets/main.css">
  </head>
    <div class="app">
      <UniformHead/>
      <div id="rightslideanim">
        <div id="rightslide1"></div>
        <div id="rightslide2"></div>
        <div id="rightslide3"></div>
      </div>
      <div id="leftslideanim">
        <div id="leftslide1"></div>
        <div id="leftslide2"></div>
        <div id="leftslide3"></div>
      </div>
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition" >
              <component :id="route.path" class="c" :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
</template>

<style>
.c {
  position: absolute;
  overflow: hidden;
  width: 100vw;
}
</style>

<script>
/* blurstrip props:     ['align', 'bkg', 'text1', 'text2', 'color'] */ 
import { RouterView } from 'vue-router'
import UniformHead from './components/UniformHead.vue'
import UniformFoot from './components/UniformFoot.vue'
import { ref } from 'vue';

const delay = ms => new Promise(res => setTimeout(res, ms));

export default {
  components: {
    UniformFoot,
    UniformHead,
    RouterView
  },
  async mounted() {
    await delay(100)
    window.scrollTo(0,0)
    document.getElementById("field").classList.add("fade") 
    return
  }

}

</script>
