<template>
  <head>
    <link rel="stylesheet" href="stylesheets/main.css">
  </head>
    <div class="app">
      <UniformHead/>
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition" >
              <component class="c" :is="Component"  />
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

UniformHead {
  transition: none;
}
</style>

<script>
/* blurstrip props:     ['align', 'bkg', 'text1', 'text2', 'color'] */ 
import { RouterView } from 'vue-router'
import UniformHead from './components/UniformHead.vue'
import UniformFoot from './components/UniformFoot.vue'
export default {
  components: {
    UniformFoot,
    UniformHead,
    RouterView
  }
}

</script>
