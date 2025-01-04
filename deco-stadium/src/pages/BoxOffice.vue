<style>

/* header styling */

h2.office {
    font-size: 4vw;
}
h3.office {
    font-size: 2vw;
    color: black;
    text-align: center;
}

/* parent container */

div.boxoffice {
    margin-top: 5vw;
    margin-bottom: 10vw;
    border-radius: 13px;
    border-style: solid;
    border-width: 0.01vw;
    border-color: rgb(63, 214, 91);
    width: 75vw;
    margin-left: 12.5vw;
    margin-right: 12.5vw;
    height: 40vw;
    overflow-y: scroll;
}

/* legend */ 

div.legend {
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    width: 75vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
    font-size: 2vw;
    color: rgb(255, 255, 255);
    background-color: #00722a;
}
p.d {
    width: 15.5%;
}
p.t {
    width: 14.5%;
}
p.des {
    width: 45%;
}
p.p {
    width: 10%;
}
p.space {
    width: 15%;
}

/* event display container */

div.eventcontainer{
    margin-top: 8vw;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: rgb(240, 255, 250);
}
div.eventdisp {
    margin-bottom: 0.2vw;
    width: 100%;
    height: 10vw;
    justify-items: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-color: rgb(205, 255, 237);
}
p.eday {
    display: table-cell;
    vertical-align: middle;
    width: 10%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    text-align: center;
    color: black;
    font-weight: 500;
    font-size: 1.2vw;
}
p.etitle {
    display: table-cell;
    vertical-align: middle;
    width: 10%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    text-align: center;
    color: black;
    font-weight: 300;
    font-size: 1.3vw;
}
p.edesc {
    display: table-cell;
    vertical-align: middle;
    width: 40%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    text-align: center;
    color: black;
    font-weight: 300;
    font-size: 1.3vw;
}
p.eprice {
    display: table-cell;
    vertical-align: middle;
    width: 8%;
    margin-left: 1%;
    margin-right: 1%;
    text-align: center;
    color: black;
    font-weight: 500;
    font-size: 2.5vw;
}
button.purchase {
    font-family: 'Lexend Exa', sans-serif;
    padding: 0.2vw;
    font-weight: 500;
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 1.5vw;
    background-color: #0aa242;
    color: white;
    border-radius: 8px;
    border-style: none;
    transition: 
        border-radius 0.3s ease-out,
        background-color 0.3s ease-out;
}
.purchase:hover {
    border-radius: 14px;
    background-color: #27c661;
}
a.office {
    margin-left: 1%;
    height: 4.5vw;
    width: 12%;
    background: transparent;
}
div#scrollEx {
    position: absolute;
    display: flex;
    flex-direction: row;
    margin-left: 88vw;
    margin-top: 14vw;
    width: 16vw;
    height: 10vw;
    font-weight: 250;
    opacity: 0;
    align-items: center;
    transition: 0.3s opacity linear
}
img.scrollExplain {
    height: 100%;

}
img.scrollExplain.animated {
    animation: 1.5s ease-out 0s 3 normal forwards running bob
}
@keyframes bob {
    0% {
        margin-top: 0;
    }
    12.5% {
        margin-top: 1.08vw;
    }
    25% {
        margin-top: 1.5vw;
    }
    37.5% {
        margin-top: 1.08vw;
    }
    50% {
        margin-top: 0;
    }
    62.5% {
        margin-top: -1.08vw;
    }
    75% {
        margin-top: -1.5vw;
    }
    87.5% {
        margin-top: -1.08vw;
    }
    100% {
        margin-top: 0;
    }
}
p.scrollExplain {
    width: 3vw;
    text-align: left;
    font-size: 1.5vw;
    color: black;
}
</style>

<template>
    <main>
        <div class="title2">
            <h1>Box Office</h1>
        </div>
        <h2 class="office">Welcome!</h2>
        <h3 class="office">Find tickets for upcoming Fieldhouse events below.</h3>
        <div id="scrollEx">
            <img class="scrollExplain" src="../assets/movingarrow.png">
            <p class="scrollExplain">Scroll to see more events!</p>
        </div>
        <div class="boxoffice">
            <div class="legend">
                <p class="d">Date</p>
                <p class="t">Title</p>
                <p class="des">Description</p>
                <p class="p">Price</p>
                <p class="space"></p>
            </div>
            <div class="eventcontainer">
                <div class="eventdisp" v-for="event in popEvents">
                    <p class="eday">{{ event.date }}<br>{{ event.time }}</p>
                    <p class="etitle">{{ event.title }}</p>
                    <p class="edesc">{{ event.desc }}</p>
                    <p class="eprice">{{ event.price }}</p>
                    <a class="office" :href="event.link"><button class="purchase">Get Tickets</button></a>
                </div>
            </div>
        </div>
        <UniformFoot/>
    </main>
</template>

<script>
import UniformFoot from '../components/UniformFoot.vue';
import { eventList } from '../eventList';
import { ref } from 'vue';
import { createStateChangeDetector } from '../main';
const popEvents = ref([])

const delay = ms => new Promise(res => setTimeout(res, ms));

export default {
    components: {
        UniformFoot
    },
    setup() {
        popEvents.value = []
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth()
        let currentDay = new Date()
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let keys = Object.keys(eventList)
        console.log(keys)
        for(let x=currentYear;(x-2024)<keys.length;x++) {
            let monthKeys = Object.keys(eventList[x.toString()])
            for(let y=0;y<monthKeys.length;y++) {
                let monthEvents = eventList[x.toString()][monthKeys[y]]
                console.log(monthEvents)
                for(let z=0;z<monthEvents.length;z++) {
                    if((+(new Date(monthEvents[z].date)))>(+currentDay)) {
                        popEvents.value.push(monthEvents[z])
                    }
                }
            }
        }
        console.log(popEvents)
        return { popEvents }
    },
    mounted() {
        async function showTut() {
            await delay(1500)
            document.getElementById('scrollEx').style.opacity = 1
            document.getElementsByClassName('scrollExplain').item(0).classList.add("animated")
            await delay(5000)
            document.getElementsByClassName('scrollExplain').item(0).classList.remove("animated")
            document.getElementById('scrollEx').style.opacity = 0
        }
        const checkTut = createStateChangeDetector(
            () => (window.scrollY > 500),
            showTut,
            null
        )
        document.addEventListener('scroll', checkTut)
    }
}
</script>