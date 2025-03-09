<template>
    <header id="head">
        <div class="header" id="head2">
            <RouterLink :onclick="scrollToTop" to="/"><img id="logo" class="deco header" src="../assets/Maverick Logo.png" alt="Maverick Logo"/></RouterLink>
            <div id="indicator"></div>
            <button class="headernav"><RouterLink :onclick="scrollToTop" class="rl" to="/calendar">Event<br>Calendar</RouterLink></button>
            <button class="headernav"><RouterLink :onclick="scrollToTop" class="rl" to="/office">Box<br>Office</RouterLink></button>
            <button class="headernav"><RouterLink :onclick="scrollToTop" class="rl" to="/info">Info</RouterLink></button>
            <button class="headernav" v-on:click="drop(0)">
                Event<br>Planning
                <div id="dropdown0" class="drop">
                    <div class="dropitem0">
                        <RouterLink :onclick="scrollToTop" class="rl" to="/planning">
                            <p>
                                Why<br>Host?
                            </p>
                        </RouterLink>
                    </div>
                    <div class="dropitem0">
                        <RouterLink class="rl" to="/planning#test">
                            <p>
                                Testimonials
                            </p>
                        </RouterLink>
                    </div>
                    <div class="dropitem0">
                        <RouterLink class="rl" to="/planning#compare">
                            <p>
                                Compare &<br>Contrast
                            </p>
                        </RouterLink>
                    </div>
                    <div class="dropitem0">
                        <RouterLink class="rl" to="/planning#deta">
                            <p>
                                Details & Contacts
                            </p>
                        </RouterLink>
                    </div>
                </div>
            </button>
            <button class="headernav" v-on:click="drop(1)">
                More
                <div id="dropdown1" class="drop">
                    <div class="dropitem1">
                        <RouterLink :onclick="scrollToTop" class="rl" to="/history">
                            <p>
                                Mecca <br>History
                            </p>
                        </RouterLink>
                    </div>
                    <div class="dropitem1">
                        <RouterLink :onclick="scrollToTop" class="rl" to="/tour">
                            <p>
                                Book a <br>Tour
                            </p>
                        </RouterLink>
                    </div>
                    <div class="dropitem1">
                        <RouterLink class="rl" to="/planning#cont">
                            <p>
                                Contact <br>us
                            </p>
                        </RouterLink>
                    </div>
                </div>
            </button>
        </div>
        <div id="slideanim">
            <div id="slide1"></div>
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
var dropped = [false, false]
var dropamounts = [3, 3]
var dropheight = [8*dropamounts[0], 8*dropamounts[1]]
const route = ref()

export const checkMainScroll = createStateChangeDetector(
        () => (document.getElementsByTagName("main")[0].scrollTop > window.outerHeight/3),
        updateHeader,
        updateHeader
    )

function updateHeader(sizeChange) {
    console.log("updated")
    if(sizeChange) {
        document.getElementById("head").style.height = "4vw"
        document.getElementById("head2").style.height = "4vw"
        document.getElementById("indicator").style.height = "6vw"
        for(let x=0;x<5;x++) {
            document.getElementsByClassName("headernav").item(x).style.fontSize = "1.375vw"
        }
        document.getElementById("logo").style.width = "8vw"
        document.getElementById("logo").style.marginLeft = "8vw"
        document.getElementById("logo").style.marginRight = "3vw"
        document.getElementById("dropdown").style.top = "5vw"
        document.getElementById("dropdown").style.fontSize = "1vw"
        dropheight[0] = 5*dropamounts[0]
        dropheight[1] = 5*dropamounts[1]
        if(dropped[0]) {
            document.getElementById("dropdown0").style.minHeight = dropheight[0].toString() + "vw"
            document.getElementById("dropdown0").style.maxHeight = dropheight[0].toString() + "vw"
            for(let x=0;x<4;x++) {
                document.getElementsByClassName("dropitem0").item(x).style.minHeight = "5vw"
                document.getElementsByClassName("dropitem0").item(x).style.maxHeight = "5vw"
            }
        }
        if(dropped[1]) {
            document.getElementById("dropdown1").style.minHeight = dropheight[1].toString() + "vw"
            document.getElementById("dropdown1").style.maxHeight = dropheight[1].toString() + "vw"
            for(let x=0;x<3;x++) {
                document.getElementsByClassName("dropitem1").item(x).style.minHeight = "5vw"
                document.getElementsByClassName("dropitem1").item(x).style.maxHeight = "5vw"
            }
        }
    }
    else {
        document.getElementById("head").style.height = "8vw"
        document.getElementById("head2").style.height = "8vw"
        document.getElementById("indicator").style.height = "10vw"
        for(let x=0;x<5;x++) {
            document.getElementsByClassName("headernav").item(x).style.fontSize = "2vw"
        }
        document.getElementById("logo").style.width = "14vw"
        document.getElementById("logo").style.marginLeft = "5vw"
        document.getElementById("logo").style.marginRight = "0vw"
        document.getElementById("dropdown").style.top = "9vw"
        document.getElementById("dropdown").style.fontSize = "1.6vw"
        dropheight[0] = 8*dropamounts[0]
        dropheight[1] = 8*dropamounts[1]
        if(dropped[0]) {
            document.getElementById("dropdown0").style.minHeight = dropheight[0].toString() + "vw"
            document.getElementById("dropdown0").style.maxHeight = dropheight[0].toString() + "vw"
            for(let x=0;x<4;x++) {
                document.getElementsByClassName("dropitem0").item(x).style.minHeight = "8vw"
                document.getElementsByClassName("dropitem0").item(x).style.maxHeight = "8vw"
            }
        }
        if(dropped[1]) {
            document.getElementById("dropdown1").style.minHeight = dropheight[1].toString() + "vw"
            document.getElementById("dropdown1").style.maxHeight = dropheight[1].toString() + "vw"
            for(let x=0;x<3;x++) {
                document.getElementsByClassName("dropitem1").item(x).style.minHeight = "8vw"
                document.getElementsByClassName("dropitem1").item(x).style.maxHeight = "8vw"
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
            updateHeader(false)
            if(dropped) {
                this.drop()
            }
        }
    },
    setup() {
        route.value = useRoute()
        async function drop(x) {
            let elem = "dropdown" + x.toString()
            let elem2 = "dropitem" + x.toString()
                dropped[x] = !(dropped[x])
                let newHeight = dropheight[x]-Number(document.getElementById(elem).style.maxHeight.replace("vw", ""))
                document.getElementById(elem).style.minHeight = (newHeight).toString() + "vw"
                document.getElementById(elem).style.maxHeight = (newHeight).toString() + "vw"
                for(let x=0;x<3;x++) {
                    document.getElementsByClassName(elem2).item(x).style.minHeight = (dropheight/dropamounts[x]).toString() + "vw"
                    document.getElementsByClassName(elem2).item(x).style.maxHeight = (dropheight/dropamounts[x]).toString() + "vw"
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

