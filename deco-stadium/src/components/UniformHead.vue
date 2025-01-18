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
                        <RouterLink :onclick="scrollToTop" class="rl" to="/history">
                            <p>
                                Fieldhouse <br>History
                            </p>
                        </RouterLink>
                    </div>
                    <div class="dropitem">
                        <RouterLink :onclick="scrollToTop" class="rl" to="/tour">
                            <p>
                                Book a <br>Tour
                            </p>
                        </RouterLink>
                    </div>
                    <div class="dropitem">
                        <RouterLink class="rl" to="/virtualtour">
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
import { useRoute } from 'vue-router';
import { currentTrans, createStateChangeDetector } from '../main';

const router = ref()
const delay = ms => new Promise(res => setTimeout(res, ms));
var dropped = false
var dropamount = 3
var dropheight = 8*dropamount
const route = ref()

export const checkMainScroll = createStateChangeDetector(
        () => (document.getElementsByTagName("main")[0].scrollTop > window.outerHeight/3),
        updateHeader,
        updateHeader
    )

function updateHeader(fullsize) {
    console.log("updated")
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
        dropheight = 5*dropamount
        if(dropped) {
            document.getElementById("dropdown").style.minHeight = dropheight.toString() + "vw"
            document.getElementById("dropdown").style.maxHeight = dropheight.toString() + "vw"
            for(let x=0;x<3;x++) {
                document.getElementsByClassName("dropitem").item(x).style.minHeight = "5vw"
                document.getElementsByClassName("dropitem").item(x).style.maxHeight = "5vw"
            }
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
        dropheight = 8*dropamount
        if(dropped) {
            document.getElementById("dropdown").style.minHeight = dropheight.toString() + "vw"
            document.getElementById("dropdown").style.maxHeight = dropheight.toString() + "vw"
            for(let x=0;x<3;x++) {
                document.getElementsByClassName("dropitem").item(x).style.minHeight = "8vw"
                document.getElementsByClassName("dropitem").item(x).style.maxHeight = "8vw"
            }
        }
    }
}

function checkOpacity() {
    if(currentTrans!="virtualtour") {
        document.getElementById('head').style.opacity = 1
    }
    else {
        document.getElementById('head').style.opacity = 0
    }
}
export default {
    methods: { 
        async scrollToTop() {
            window.scrollTo(0,0)
        }
    },
    setup() {
        route.value = useRoute()
        async function drop() {
            dropped = !dropped
            let newHeight = dropheight-Number(document.getElementById("dropdown").style.maxHeight.replace("vw", ""))
            document.getElementById("dropdown").style.minHeight = (newHeight).toString() + "vw"
            document.getElementById("dropdown").style.maxHeight = (newHeight).toString() + "vw"
            for(let x=0;x<3;x++) {
                document.getElementsByClassName("dropitem").item(x).style.minHeight = (dropheight/3).toString() + "vw"
                document.getElementsByClassName("dropitem").item(x).style.maxHeight = (dropheight/3).toString() + "vw"
            }
        }
        return { drop, window }
    },
    async mounted() {
        await delay(100)
        setInterval(checkOpacity, 200)
        document.getElementById("head").classList.add("float") 
        return
    }
}
</script>

