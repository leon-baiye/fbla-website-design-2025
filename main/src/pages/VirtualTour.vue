<style>
iframe#tourinsert {
    transition: filter 0.5s ease-out;
    pointer-events: auto;
}
h3#exit {
    position: absolute;
    z-index: 1;
    text-align: center;
    color: rgb(116, 116, 116);
    width: 70vw;
    margin-left: 15vw;
    margin-right: 15vw;
    top: 7vh;
    font-size: 2vw;
    opacity: 0;
    transition: opacity 0.5s ease-out;
}
main.virtualtour {
    width: 100vw;
    height: 100vh;
}
</style>

<template>
    <main class="virtualtour">
        <h3 id="exit">[press x key to exit]</h3>
        <iframe id="tourinsert" src="https://storage.net-fs.com/hosting/6752951/34/" width="100%" height="100%" allow="autoplay; accelerometer; gyroscope; devicemotion; xr-spatial-tracking;" ></iframe>
    </main>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
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
