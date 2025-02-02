<style>

/* imports */ 

@import url('https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&family=Lexend+Giga:wght@100..900&display=swap');

/* calendar layout */ 

div#cal {
  max-width: 50vw;
  height: 44vw;
  border-radius: 1.5vw;
  border-color: #D9D9D9;
  border-width: 1vw;
  border-style: solid;
  width: 60%;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-self: center;
  flex-direction: column;
  margin-top: 0;
  margin-top: 3vw;
  margin-bottom: 3vw;
  transition: 0.3s ease-out;
}

div.top {
    margin-top: -0.5vw;
    padding-top: 0.5vw;
    text-align: center;
    background-color: #002366ff;
    width: 100%;
}

div.weekdays {
    display: flex;
    flex-direction: row;
    background: #9A9A9A;
    align-items: center;
    text-align: center;
    max-height: 4vw;
}

h1.cal {
    font-size: 3vw;
    margin-bottom: 1vw;
    font-weight: 300;
}

h2.cal {
    font-size: 2vw;
    font-weight: 200;
    color: white;
    width: 20%;
    margin-left: 40%;
    margin-right: 40%;
    margin-bottom: 1vw;
    margin-top: 0;
}

h3.cal {
    font-size: 2vw;
    width: 8.56vw;
}

/* day layout */ 

div.daycontainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding-top: 1vw;
    flex-wrap: wrap;
    height: 30vw;
}

div.day {
    color: black;
    width: 7.14vw;
    height: 5vw;
    font-size: 2.5vw;
    padding-bottom: 1vw;
    align-content: center;
    justify-items: center;
}

p.day {
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    margin: 0;
    width: 4vw;
    height: 4vw;
}

p.day.sep {
    color: rgba(0, 0, 0, 0.389)
}

p.day.no {
    color: black
}

p.true {
    background: #f5ad6eff;
    border-radius: 0.7vw;
    transition: 0.3s ease-out;
}

p.true.selected {
    background: #e16a0dff;
    border-radius: 2vw;
}

p.false {
    background: none;
}

img.arrow {
    width: 2.5vw;
    padding-left: 4vw;
    padding-right: 4vw;
    position: absolute;
    margin-top: 3vw;
    transition: 0.2s ease-out;
    z-index: 3;
}
.arrow.left {
    margin-left: 2vw;
}
.arrow.right {
    margin-left: 38vw;
}

/* event display */ 

div.evdisplay {
    margin-top: 10vw;
    margin-left: 70vw;
    border-radius: 1.2vw;
    border-style: solid;
    border-width: 0.5vw;
    border-color: #BEBEBE;
    position: absolute;
    height: 30vw;
    width: 20vw;
    opacity: 0;
    transition: 0.3s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;
}
div.evtitle {
    width: 100%;
    height: auto;
    text-align: center;
    background: #002366ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top-left-radius: 0.6vw;
    border-top-right-radius: 0.6vw;
}
h1.evtitle {
    margin-top: 2vw;
    margin-bottom: 0;
    color: white;
    max-width: 12vw;
    word-wrap: break-word;
    font-family: 'Lexend Giga', sans-serif;
    font-size: 1.5vw;
    font-weight: 300;
}
h2.evdate {
    color: #C7C7C7;
    margin-bottom: 1.2vw;
    font-weight: 400;
    font-size: 1vw;
    text-transform: uppercase;
}
h3.evhost {
    color: black;
    font-weight: 500;
    font-size: 1.3vw;
    width: 85%;
    margin-left: 7.5%;
    margin-right: 7.5%;
    text-align: center; 
}
p.evdesc {
    color: black;
    margin-top: 0;
    font-size: 1.3vw; 
    width: 85%;
    margin-left: 10%;
    margin-right: 10%;

}
button.close {
    width: 5vw;
    text-align: center;
    font-size: 1vw;
    font-family: 'Lexend Giga', sans-serif;
    background: #002366ff;
    position: absolute;
    border-radius: 0.3vw;
    border-width: 0;
    color: white;
    padding: 0.3vw;
    margin-top: 27vw;
}

/* year select */ 

img#up {
    width: 0.7vw;
    margin-left: 3.5vw;
    margin-top: 0.5vw;
    position: absolute;
    rotate: 90deg;
    opacity: 0;
    transition: 0.2s ease-out;
}

img#down {
    width: 0.7vw;
    margin-left: 3.5vw;
    margin-top: 1.5vw;
    position: absolute;
    rotate: 270deg;
    opacity: 0;
    transition: 0.2s ease-out;
}
</style>

<template>
    <main class="me">
        <div class="outer">
            <div class="inner">
                <div class="title2">
                    <h1>Event Calendar</h1>
                </div>
                <div class="evdisplay" id="evdisplay">
                    <div class="evtitle">
                        <h1 class="evtitle">{{ evdata.title }}</h1>
                        <h2 class="evdate">{{ evdata.date }}</h2>
                    </div>
                    <h3 class="evhost">{{ evdata.host }}</h3>
                    <p class="evdesc">{{  evdata.desc }}</p>
                    <button class="close" v-on:click="eventHide()">Close</button>
                </div>
                <div id="cal">
                    <img v-on:click="calendarUpdate('month', 'left')" class="arrow left" src="../assets/LeftTri.svg"/>
                    <img v-on:click="calendarUpdate('month', 'right')" class="arrow right" src="../assets/RightTri.svg"/>
                    <div class="top">
                        <h1 class="cal">{{ months[monthIndex] }}</h1>
                        <img v-on:click="yearUpdate('up')" id="up" src="../assets/LeftTri.svg"/>
                        <img v-on:click="yearUpdate('down')" id="down" src="../assets/LeftTri.svg"/>
                        <h2 v-on:click="calendarUpdate('year')" class="cal">{{ year }}</h2>
                    </div>
                    <div class="weekdays">
                        <h3 class="cal" v-for="wkday in wkdays">
                            {{ wkday }}
                        </h3>
                    </div>
                    <div class="daycontainer">
                        <div class="day" v-for="day in days"><p :id="([(day.event.title).replace(/\s/g, ''), day.number]).join('')" v-on:click="eventPop(day.event, ([(day.event.title).replace(/\s/g, ''), day.number]).join(''))" :class="day.composite">{{ day.number }}</p></div>
                        <!-- [day.highlighted] -->
                    </div>
                </div>
                <h2>How To Use</h2>
                <SideStrip positioning="absolute" divmargin="10vw" vidwidth="35%" topmarg="-20vw" _align="left" marg=0% vidmarg="45%" text1="Navigation" text2="Change months by clicking the left or right arrows. Change years by clicking on the current year, then adjusting the year using the up and down arrows. Click the current year again to finalize your changes." vid="/src/assets/mecca_monthyearexp.mp4" post="/src/assets/meccacover.png"/>
                <SideStrip positioning="absolute" divmargin="10vw" vidwidth="35%" topmarg="-18vw" _align="right" marg=48% vidmarg="0%" text1="Events" text2="Click on a highlighted day to view that day's event, with information like the event's date and hosts. Click the 'Close' button to close the event display area." vid="/src/assets/mecca_eventdispexp.mp4" post="/src/assets/meccacover.png"/>       
            </div>
            <UniformFoot class="fe"/>
        </div>
    </main>
</template>
<script>
import UniformFoot from '../components/UniformFoot.vue';
import SideStrip from '../components/SideStrip.vue';
import { ref } from 'vue';
import { eventList } from '../eventList'
import { checkMainScroll } from '../components/UniformHead.vue';

const evdata = ref({"title": "Event Name", "date": "jan 2nd", "host": "Hosted By Absolut Crusty", "desc": "Event description."})
var currentButton = null
const days = ref([])
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const monthIndex = ref(1)
const year = ref(2024)
var wkdays = ["S", "M", "T", "W", "TH", "F", "S"]

function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function mod(x, y) {
    return (((x % y) + y) % y)
}

function dayUpdate(y, m) {
    let lengthOfMonth, lengthOfNextMonth, lengthOfPrevMonth
    if(m!=1) {
        lengthOfMonth = monthLengths[m]
    }
    else {
        if(!leapYear(year)) {
            lengthOfMonth = 28
        }
        else {
            lengthOfMonth = 29
        }
    }
    if(mod(m-1, 12)!=1) {
        lengthOfPrevMonth = monthLengths[mod(m-1, 12)]
    }
    else {
        if(!leapYear(year)) {
            lengthOfPrevMonth = 28
        }
        else {
            lengthOfPrevMonth = 29
        }
    }
    if(mod(m+1, 12)!=1) {
        lengthOfNextMonth = monthLengths[mod(m-1, 12)]
    }
    else {
        if(!leapYear(year)) {
            lengthOfNextMonth = 28
        }
        else {
            lengthOfNextMonth = 29
        }
    }
    // reset days to fit month/year
    let currentMonthDays = Array.from({ length: lengthOfMonth+1 }, (_, x) => {return {"number":x, "event":{"title": "null", "date": "null", "host": "null", "desc": "null"}, "highlighted": "false", "separate": "no", "composite":"day false no"}}).splice(1, lengthOfMonth)
    let firstDays = new Date(months[m] + " 1, " + y).getDay()
    let lastDays
    if(m!=1 && firstDays!=0) {
        lastDays = 6-(new Date(months[m] + " " + lengthOfMonth.toString() + ", " + y).getDay())
    }
    else {
        lastDays = 7
    }
    let prevMonthDays = (Array.from({ length: lengthOfPrevMonth+1 }, (_, x) => {return {"number":x, "event":{"title": "null", "date": "null", "host": "null", "desc": "null"}, "highlighted": "false", "separate": "sep", "composite":"day false sep"}}).splice(1, lengthOfPrevMonth)).splice(lengthOfPrevMonth-firstDays, firstDays)
    let nextMonthDays = (Array.from({ length: lengthOfNextMonth+1 }, (_, x) => {return {"number":x, "event":{"title": "null", "date": "null", "host": "null", "desc": "null"}, "highlighted": "false", "separate": "sep", "composite":"day false sep"}}).splice(1, lengthOfNextMonth)).splice(0, lastDays)
    days.value = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays]
    console.log(days.value)
    // updates days based on event list
    if((eventList[y.toString()] != undefined) && (eventList[y.toString()][months[m]] != undefined)) {
        let currentEvents = (eventList[y.toString()])[months[m]]
        console.log(currentEvents)
        for(let x=0;x<currentEvents.length;x++) {
            let dayToChange = (days.value).findIndex((z) => {return (z.number == currentEvents[x].day)})
            days.value[dayToChange].highlighted = "true"
            days.value[dayToChange].event = {
                "title": currentEvents[x].title, 
                "date": currentEvents[x].date, 
                "host": currentEvents[x].host, 
                "desc": currentEvents[x].desc
            }
            days.value[dayToChange].composite = "day true no"
        }
    }
}
export default {
    components: {
        UniformFoot,
        SideStrip,
    },
    setup() {
        const calendarUpdate = function(type, detail="") {
            if(type=="month") {
                eventHide()
                document.getElementById("up").style.opacity = 0
                document.getElementById("down").style.opacity = 0
                if(detail=="left") {
                    monthIndex.value = mod(monthIndex.value-1, 12) 
                    if(monthIndex.value == 11) {
                        year.value -= 1
                    }
                }
                else {
                    monthIndex.value = mod(monthIndex.value+1, 12) 
                    if(monthIndex.value == 0) {
                        year.value += 1
                    }
                }
            }
            else if(type=="year") {
                eventHide()
                document.getElementById("up").style.opacity = 1 - document.getElementById("up").style.opacity
                document.getElementById("down").style.opacity = 1 - document.getElementById("down").style.opacity
            }

            dayUpdate(year.value, monthIndex.value)
        }
        const yearUpdate = function(dir) {
            if(dir=="up") {
                year.value +=1
            }
            else {
                year.value -=1
            }
        }
        const eventPop = function($ev, $id) {
            if($ev.date!="null") {
                document.getElementById("cal").style.marginLeft = "-15vw";
                document.getElementById("evdisplay").style.opacity = 1;
                evdata.value = $ev
                if(document.getElementById(currentButton)!= undefined) {
                    document.getElementById(currentButton).classList.remove("selected")
                }
                currentButton = $id
                document.getElementById($id).classList.add("selected")
            }
        }
        const eventHide = function() {
            if(document.getElementById("evdisplay").style.opacity == 1) {
                document.getElementById("cal").style.marginLeft = "0vw";
                document.getElementById("evdisplay").style.opacity = 0;
                document.getElementById(currentButton).classList.remove("selected")
            }
        }
        days.value = Array.from({ length: 32 }, (_, x) => {return {"number":x, "event":{"title": "null", "date": "null", "host": "null", "desc": "null"}, "highlighted": "false", "separate": "no", "composite":"day false no"}}).splice(1)
        dayUpdate(year.value, monthIndex.value)
        return { days, months, monthIndex, year, wkdays, evdata, calendarUpdate, yearUpdate, eventPop, eventHide }
    },
    beforeRouteLeave(to, from) {
        document.getElementById("/calendar").removeEventListener("scroll", checkMainScroll)
    },
    mounted() {
        document.getElementById("/calendar").addEventListener("scroll", checkMainScroll)
    }
}
</script>