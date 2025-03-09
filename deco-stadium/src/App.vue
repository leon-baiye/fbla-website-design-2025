<template>
  <head>
    <link rel="stylesheet" href="stylesheets/main.css">
  </head>
    <div class="app">
      <UniformHead/>
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition" >
              <component :id="route.path" class="c" :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
</template>

<style>
div.app {
  position: relative;
  min-height: 100vh;
}
.c {
  position: absolute;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100vw;
  height: 100vh;
  background: white;
}
</style>

<script>
/* blurstrip props:     ['align', 'bkg', 'text1', 'text2', 'color'] */ 
import { RouterView } from 'vue-router'
import UniformHead from './components/UniformHead.vue'
import UniformFoot from './components/UniformFoot.vue'
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router'

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
  }
}
</script>
