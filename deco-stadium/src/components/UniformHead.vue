<template>
    <header id="head">
        <div class="header" id="head2">
            <RouterLink :onclick="scrollToTop" to="/"><img id="logo" class="deco header" src="../assets/mackhead.png" alt="Maverick Logo"/></RouterLink>
            <div id="indicator"></div>
            <button class="headernav calend"><RouterLink :onclick="scrollToTop" class="rl" to="/calendar">Event<br>Calendar</RouterLink></button>
            <button class="headernav"><RouterLink :onclick="scrollToTop" class="rl" to="/office">Box<br>Office</RouterLink></button>
            <button class="headernav"><RouterLink :onclick="scrollToTop" class="rl" to="/info">Info</RouterLink></button>
            <button class="headernav rl" v-on:click="drop(0)">
                Event<br>Planning
                <div id="dropdown0">
                    <div class="dropitem0">
                        <RouterLink class="rl" to="/planning#why" @click.native="scrollTo('why')">
                            <p>
                                Why<br>Host?
                            </p>
                        </RouterLink>
                    </div>
                    <div class="dropitem0">
                        <RouterLink class="rl" to="/planning#test" @click.native="scrollTo('test')">
                            <p>
                                Local<br>Testimonials
                            </p>
                        </RouterLink>
                    </div>
                    <div class="dropitem0">
                        <RouterLink class="rl" to="/planning#collate" @click.native="scrollTo('collate')">
                            <p>
                                Compare &<br>Contrast
                            </p>
                        </RouterLink>
                    </div>
                    <div class="dropitem0">
                        <RouterLink href="#deta" class="rl" to="/planning#deta" @click.native="scrollTo('deta')">
                            <p>
                                Details & Contacts
                            </p>
                        </RouterLink>
                    </div>
                </div>
            </button>
            <button class="headernav rl" v-on:click="drop(1)">
                More
                <div id="dropdown1">
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
                        <RouterLink class="rl" to="/planning#contac" @click.native="scrollTo('contac')">
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
var dropamounts = [4, 3]
var dropheight = [8*dropamounts[0], 8*dropamounts[1]]
const route = ref()
const _hash = ref("")

async function drop(x) {
            if(x!=undefined) {
                let z = (x === 0) ? 4 : 3
                console.log(z, x)
                let elem = "dropdown" + x.toString()
                let elem2 = "dropitem" + x.toString()
                    dropped[x] = !(dropped[x])
                    let newHeight = dropheight[x]-Number(document.getElementById(elem).style.maxHeight.replace("vw", ""))
                    document.getElementById(elem).style.minHeight = (newHeight).toString() + "vw"
                    document.getElementById(elem).style.maxHeight = (newHeight).toString() + "vw"
                    for(let y=0;y<z;y++) {
                        document.getElementsByClassName(elem2).item(y).style.minHeight = (dropheight[x]/dropamounts[x]).toString() + "vw"
                        document.getElementsByClassName(elem2).item(y).style.maxHeight = (dropheight[x]/dropamounts[x]).toString() + "vw"
                }
            }
        }

async function scrollToTop() {
    window.scrollTo(0,0)
    updateHeader(false)
    if(dropped[0]) {
        drop(0)
    }
    if(dropped[1]) {
        drop(1)
    }
}


export const checkMainScroll = createStateChangeDetector( 
    () => (document.getElementsByTagName("main")[0].scrollTop > window.outerHeight/3), 
    updateHeader, updateHeader)


function updateHeader(sizeChange) {
    if((document.documentElement.clientWidth>1000)) {
        console.log("updated")
        if(sizeChange) {
            document.getElementById("head").style.height = "4vw"
            document.getElementById("head2").style.height = "4vw"
            document.getElementById("indicator").style.height = "6vw"
            for(let x=0;x<5;x++) {
                document.getElementsByClassName("headernav").item(x).style.fontSize = "1.375vw"
            }
            document.getElementById("logo").style.width = "3vw"
            document.getElementById("logo").style.marginLeft = "8vw"
            document.getElementById("logo").style.marginRight = "8.4vw"
            document.getElementById("dropdown0").style.top = "5vw"
            document.getElementById("dropdown0").style.fontSize = "1vw"
            document.getElementById("dropdown1").style.top = "5vw"
            document.getElementById("dropdown1").style.fontSize = "1vw"
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
            document.getElementById("logo").style.width = "7vw"
            document.getElementById("logo").style.marginLeft = "6.4vw"
            if(window.outerWidth > 1000) {
                document.getElementById("logo").style.marginRight = "6vw"
            }
            else {
                document.getElementById("logo").style.marginRight = "3vw"
            }
            document.getElementById("dropdown0").style.top = "9vw"
            document.getElementById("dropdown0").style.fontSize = "1.6vw"
            document.getElementById("dropdown1").style.top = "9vw"
            document.getElementById("dropdown1").style.fontSize = "1.6vw"
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
        scrollTo: function(hashval)
        {   
            console.log(_hash.value, hashval)
                if(document.getElementById("/planning") != undefined && (_hash.value != hashval)) {
                _hash.value = hashval
                let elementPosition = document.getElementById(_hash.value).getBoundingClientRect().top
                console.log(elementPosition)
                document.getElementById("/planning").scrollTo({
                    top: (document.getElementById("/planning").scrollTop + elementPosition),
                    behavior: 'smooth'
                })
            }
        }
    },
    setup() {
        route.value = useRoute()
        return { scrollToTop, drop, window }
    },
    async mounted() {
        await delay(100)
        setInterval(checkOpacity, 200)
        document.getElementById("head").classList.add("float") 
        return
    }
}
</script>

