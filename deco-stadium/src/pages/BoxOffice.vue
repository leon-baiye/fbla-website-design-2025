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
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
    height: 30vw;
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
    width: 80vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
    font-size: 2vw;
    color: rgb(255, 255, 255);
    background-color: #00722a;
}
p.t {
    width: 15%;
}
p.d {
    width: 15%;
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
</style>

<template>
    <main>
        <div class="title2">
            <h1>Box Office</h1>
        </div>
        <h2 class="office">Welcome!</h2>
        <h3 class="office">Find tickets for upcoming Fieldhouse events below.</h3>
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
const popEvents = ref([])

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
    }
}
</script>