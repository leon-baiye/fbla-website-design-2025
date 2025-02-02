<style>

/* parallax image effect */

.parallax {
  min-height: 51vw;
  width: 100vw;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: -0.1vw;
}

/* parallax disabled on smaller devices to reduce disorientation */

@media only screen and (max-device-width: 1366px) {
  .parallax {
    background-attachment: scroll;
  }
}
</style>

<template>
    <main>
    <div class="title">
      <video id="introvid" class="title" autoplay muted>
        <source src="../assets/NewCastleFieldhouseIntro.mp4" type="video/mp4" />
      </video>
      <div class="caption">
          <h1 id="field" class="left">MARVIN RIDGE <br>
            MECCA
          </h1>
      </div>
    </div>
    <div style="background: white;margin-top: -4vw; padding-top: 4vw; padding-bottom: 4vw; margin-bottom: -0.1vw;">
      <h2>Upcoming Events</h2>
      <div class="eventstrip">
        <div class="eventcard" v-for="event in events" v-on:click="window.open(event.link);">
          <h3 class="eventcard">{{ event.title }}</h3>
          <h4 class="eventcard">{{ event.date }}</h4>
          <h4 class="eventcard">{{ event.time }}</h4>
          <p class="eventcard">{{ event.desc }}</p>
        </div>
        <div class="eventcard" v-on:click="window.scrollTo(0,0);router.push('/calendar');">
          <h2 class="eventcard">
            See More  &rarr;
          </h2>
        </div>
      </div>
    </div>
    <div class="parallax" style="background-image: url('/src/assets/innerpic1.jpeg');"></div>
    <Infostrip _align="left" text1="Gym History" text2="DISCOVER THE MECCA" color="#e16a0dff" bcol="black" loc=""/>
    <div class="parallax" style="background-image: url('/src/assets/innerpic2.jpeg');"></div>
    <Infostrip _align="flex-end" text1="Visit Us" text2="SCHEDULE A TOUR" color="#e16a0dff" bcol="black" loc=""/>
    <div class="parallax" style="background-image: url('/src/assets/innerpic3.jpg');"></div>
    <Infostrip _align="left" text1="Plan With Us" text2="MAKE YOUR NEXT EVENT AMAZING" color="#e16a0dff" bcol="black" loc="/planning"/>
    <div class="parallax" style="background-image: url('/src/assets/innerpic4.jpg');"></div>
    <Infostrip _align="flex-end" text1="About The Gym" text2="LEARN ABOUT DIRECTIONS, SEATING AND MORE" color="#e16a0dff" bcol="black" loc="/info"/>
    <div class="parallax" style="background-image: url('/src/assets/innerpic5.jpg');"></div>
    <UniformFoot class="fhome"/>
    </main>

</template>

<script>
import Infostrip from '../components/Infostrip.vue';
import UniformFoot from '../components/UniformFoot.vue';
import { ref } from 'vue'
import { currentTrans } from '../main';
import { eventList } from '../eventList';
import { useRouter } from 'vue-router';
import { checkMainScroll } from '../components/UniformHead.vue';

export default {
    name: "HomePage",
    components: {
      Infostrip,
      UniformFoot
    },
    beforeRouteLeave(to, from) {
      document.getElementById("/").removeEventListener("scroll", checkMainScroll)
    },
    setup() {
      const router = useRouter()
      let currentDay = new Date()
      let currentMonth = currentDay.getMonth();
      let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      var events = []
      for(let x=1;x<3;x++) {
        for(let y=currentMonth;y<3;y++) {
          events = events.concat(eventList['202' + (x+4).toString()][monthList[y]])
        }
      }
      for (let x=0;x<events.length;x++) {
        if((events[x]==undefined || events[x].date < currentDay)) {
          events.splice(x)
        }
      }
      return { events, router, window }
    },
    async mounted() {
      document.getElementById("/").addEventListener("scroll", checkMainScroll)
      this.window.scrollTo(0, 0);
      if(currentTrans != "entrance") {
        document.getElementById("field").style.transition = "none"
        document.getElementById("field").style.opacity = 1
        document.getElementById("introvid").currentTime = 9;
      }
      return
    }
  }
</script>