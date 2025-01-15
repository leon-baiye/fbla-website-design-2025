<style>
iframe#tourinsert {
    filter: brightness(1);
    transition: filter 0.5s ease-out;
}
h3#exit {
    position: absolute;
    z-index: 1;
    text-align: center;
    color: rgb(116, 116, 116);
    width: 70vw;
    margin-left: 15vw;
    margin-right: 15vw;
    top: 85vh;
    font-size: 2vw;
    opacity: 0;
    transition: opacity 0.5s ease-out;
}
main.virtualtour {
    width: 100vw;
    height: 100vh;
}
div#flipnotif {
    opacity: 0;
    position: absolute;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    transition: opacity 0.5s ease-out;
}
h3.flipnotif {
    color: white; 
    text-align: center; 
    font-size: 3vw; 
    margin-top: 40vh;
}
</style>

<template>
    <main class="virtualtour">
        <div id="flipnotif">
            <h3 class="flipnotif">Please rotate your device to landscape for the best experience.</h3>
        </div>
        <h3 id="exit">[press x to exit]</h3>
        <iframe id="tourinsert" src="https://storage.net-fs.com/hosting/6752951/34/" width="100%" height="100%" allowvr="yes" allow="xr-spatial-tracking" allowfullscreen="yes"></iframe>
    </main>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    if(window.innerWidth < window.innerHeight) {
        const checkOrientation = () => {
            if (window.matchMedia("(orientation: landscape)").matches) {
                document.getElementById("flipnotif").style.opacity = 0;
            } else {
                document.getElementById("flipnotif").style.opacity = 1;
            };
        };

        checkOrientation();

        window.addEventListener("orientationchange", checkOrientation);
    }

    const router = useRouter()
    document.addEventListener('keypress', function(event) {
        if(event.key === 'x') {
            router.push({path:"/"})
        }
    })
  }
};

</script>
