<style>
Renderer {
    width: 100vw;
    height: 100vh;
}
h2.model {
    position: absolute;
    text-align: center;
    width: 70vw;
    margin-left: 15vw;
    margin-right: 15vw;
    top: 15vh;
    color: rgba(116, 116, 116, 0.555);
    font-size: 4vw;
}
h3.exit {
    position: absolute;
    text-align: center;
    color: rgba(116, 116, 116, 0.555);
    width: 70vw;
    margin-left: 15vw;
    margin-right: 15vw;
    top: 75vh;
    font-size: 3vw;
}
main.model {
    width: 100vw;
    height: 100vh;
}
</style>

<template>
    <main class="model">
        <h2 class="model">[zoom to enlarge]</h2>
        <h3 class="exit">[press x to exit]</h3>
        <Renderer ref="renderer" :antialias="true" :orbit-ctrl="{ enableDamping: true }" :resize="true">
            <Camera :position="{ x: 1, y: 0, z: 0 }"></Camera>
            <Scene background="#000000" ref="scene">
                <AmbientLight></AmbientLight>
                <GltfModel src="../assets/sculpt.glb"/>
            </Scene>
        </Renderer>
    </main>
</template>

<script>
import {
  AmbientLight,
  Camera,
  GltfModel,
  Renderer,
  Scene,
} from 'troisjs';
import { useRouter } from 'vue-router';

export default {
  components: {
    AmbientLight,
    Camera,
    GltfModel,
    Renderer,
    Scene,
  },
  mounted() {
    const router = useRouter()
    document.addEventListener('keypress', function(event) {
        if(event.key === 'x') {
            router.push({path:"/"})
        }
    })
  }
};

</script>
