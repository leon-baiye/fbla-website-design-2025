<style>
h3.tour {
    color: black;
    font-size: 1.5vw;
    text-align: center;
    margin-top: 2vw;
}

h2.tour {
  font-size: 2vw;
  margin: 2.5vw;
  margin-bottom: 7vw;
}

iframe.tallyform {
    width: 75vw;
    margin-left: 12.5vw;
    border-radius: 1vw;
    border-color: gray;
    border-width: 0.15vw;
    border-style: solid;
    height: 34vw;
}
</style>

<template>
    <main class="mt">
        <div class="outer">
            <div class="inner">
                <div class="title2">
                    <h1>Book a Tour</h1>
                </div>
                <h3 class="tour">Fill out the form below to request a tour of the Mecca.</h3>
                <h3 class="tour">We'll get back to you shortly!</h3>
                <h4>Fields marked with an asterisk (*) are required.</h4>
                <iframe class="tallyform" data-tally-src="https://tally.so/embed/3EvNKq?hideTitle=1" loading="lazy" title="Marvin Ridge Mecca Tour Request">
                </iframe>
                <h2 class="tour">THANKS FOR YOUR INTEREST IN A TOUR!</h2>
            </div>
            <UniformFoot class="ft"/>
        </div>
    </main>
  </template>
  
<script>
    import HistoryStrip from '../components/HistoryStrip.vue';
    import UniformFoot from '../components/UniformFoot.vue';
    import { checkMainScroll } from '../components/UniformHead.vue';
    export default {
        components: {
            HistoryStrip,
            UniformFoot,
        },
        beforeRouteLeave(to, from) {
            document.getElementById("/tour").removeEventListener("scroll", checkMainScroll)
        },
        mounted() {
            document.getElementById("/tour").addEventListener("scroll", checkMainScroll)
            let formScript = document.createElement('script')
            formScript.setAttribute('src', './src/formAppend.js')
            document.head.appendChild(formScript)
        },
    };
</script>

