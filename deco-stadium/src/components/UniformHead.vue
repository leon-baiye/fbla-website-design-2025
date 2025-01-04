<template>
    <header id="head">
        <div class="header" id="head2">
            <RouterLink :onclick="scrollToTop" to="/"><img id="logo" class="deco header" src="../assets/Fieldhouse Logo.svg" alt="Fieldhouse Logo"/></RouterLink>
            <div id="highlight"></div>
            <button class="headernav"><RouterLink :onclick="scrollToTop" class="rl" to="/calendar">Event<br>Calendar</RouterLink></button>
            <button class="headernav"><RouterLink :onclick="scrollToTop" class="rl" to="/office">Box<br>Office</RouterLink></button>
            <button class="headernav"><RouterLink :onclick="scrollToTop" class="rl" to="/info">Info</RouterLink></button>
            <button class="headernav"><RouterLink :onclick="scrollToTop" class="rl" to="/planning">Event<br>Planning</RouterLink></button>
            <button class="headernav" v-on:click="drop()">
                More
                <div id="dropdown" class="drop">
                    <div class="dropitem">
                        <RouterLink class="rl" to="/model">
                            <p>
                                Virtual <br>Tour
                            </p>
                        </RouterLink>
                    </div>
                </div>
            </button>
        </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { currentTrans, createStateChangeDetector } from '../main';

const router = ref()
const delay = ms => new Promise(res => setTimeout(res, ms));
var dropped = 0
var dropheight = 8

function updateHeader(fullsize) {
    if(fullsize) {
        document.getElementById("head").style.height = "4vw"
        document.getElementById("head2").style.height = "4vw"
        document.getElementById("highlight").style.height = "6vw"
        for(let x=0;x<5;x++) {
            document.getElementsByClassName("headernav").item(x).style.fontSize = "1.375vw"
        }
        document.getElementById("logo").style.width = "8vw"
        document.getElementById("logo").style.marginLeft = "8vw"
        document.getElementById("logo").style.marginRight = "3vw"
        document.getElementById("dropdown").style.top = "5vw"
        document.getElementById("dropdown").style.fontSize = "1vw"
        if(dropped) {
            document.getElementById("dropdown").style.maxHeight = "5vw"
            dropheight = 5
        }
    }
    else {
        document.getElementById("head").style.height = "8vw"
        document.getElementById("head2").style.height = "8vw"
        document.getElementById("highlight").style.height = "10vw"
        for(let x=0;x<5;x++) {
            document.getElementsByClassName("headernav").item(x).style.fontSize = "2vw"
        }
        document.getElementById("logo").style.width = "14vw"
        document.getElementById("logo").style.marginLeft = "5vw"
        document.getElementById("logo").style.marginRight = "0vw"
        document.getElementById("dropdown").style.top = "9vw"
        document.getElementById("dropdown").style.fontSize = "1.6vw"
        if(dropped) {
            document.getElementById("dropdown").style.maxHeight = "8vw"
            dropheight = 8
        }
    }
}

function checkOpacity() {
    if(currentTrans!="model") {
        document.getElementById('head').style.opacity = 1
    }
    else {
        document.getElementById('head').style.opacity = 0
    }
}
export default {
    methods: { 
        scrollToTop() {
            window.scrollTo(0,0);
        }
    },
    setup() {
        async function drop() {
            dropped = (1-dropped)
            document.getElementById("dropdown").style.height = (dropheight-Number(document.getElementById("dropdown").style.maxHeight.replace("vw", ""))).toString() + "vw"
        }
        return { drop }
    },
    async mounted() {
        await delay(100)
        const checkScroll = createStateChangeDetector(
            () => (window.scrollY > 300),
            updateHeader,
            updateHeader
        )
        document.addEventListener('scroll', checkScroll)
        setInterval(checkOpacity, 200)
        document.getElementById("head").classList.add("float") 
        return
    }
}
</script>

