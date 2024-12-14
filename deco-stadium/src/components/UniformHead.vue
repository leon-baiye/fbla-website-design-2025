<template>
    <header id="head">
        <div class="header" id="head2">
            <RouterLink :onclick="scrollToTop" to="/"><img id="logo" class="deco header" src="../assets/Fieldhouse Logo.svg" alt="Deco Logo"/></RouterLink>
            <button class="headernav"><RouterLink :onclick="scrollToTop" class="rl" to="/calendar">Event<br>Calendar</RouterLink></button>
            <button class="headernav"><RouterLink :onclick="scrollToTop" class="rl" to="/office">Box<br>Office</RouterLink></button>
            <button class="headernav"><RouterLink :onclick="scrollToTop" class="rl" to="/info">Stadium<br>Info</RouterLink></button>
            <button class="headernav"><RouterLink :onclick="scrollToTop" class="rl" to="/planning">Event<br>Planning</RouterLink></button>
            <button class="headernav">More</button>
        </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const delay = ms => new Promise(res => setTimeout(res, ms));

function checkHeader() {
    if (window.scrollY > 300) {
        document.getElementById("head").style.height = "4vw"
        document.getElementById("head2").style.height = "4vw"
        for(let x=0;x<5;x++) {
            document.getElementsByClassName("headernav").item(x).style.fontSize = "1.375vw"
        }
        document.getElementById("logo").style.width = "8vw"
        document.getElementById("logo").style.marginLeft = "8vw"
    }
    else {
        document.getElementById("head").style.height = "8vw"
        document.getElementById("head2").style.height = "8vw"
        for(let x=0;x<5;x++) {
            document.getElementsByClassName("headernav").item(x).style.fontSize = "2vw"
        }
        document.getElementById("logo").style.width = "14vw"
        document.getElementById("logo").style.marginLeft = "5vw"
    }
}
export default {
    methods: { 
        scrollToTop() {
            window.scrollTo(0,0);
        }
    },
    async mounted() {
        setInterval(checkHeader, 50)
        await delay(100)
        document.getElementById("head").classList.add("float") 
        return
    }
}
</script>

