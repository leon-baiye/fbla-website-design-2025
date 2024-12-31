<template>
    <main>
    <div class="title">
      <video id="introvid" class="title" autoplay muted>
        <source src="../assets/NewCastleFieldhouseIntro.mp4" type="video/mp4" />
      </video>
      <div class="caption">
          <h1 id="field" class="left">NEW CASTLE <br>
            FIELDHOUSE
          </h1>
      </div>
    </div>
    <h2>Upcoming Events</h2>
    <div class="eventstrip">
      <div class="eventcard" v-for="event in events">
        <h3 class="eventcard">{{ event.title }}</h3>
        <h4 class="eventcard">{{ event.date }}</h4>
        <p class="eventcard">{{ event.desc }}</p>
      </div>
    </div>
    <br>
    <br>
    <img src="../assets/fieldhouse1.webp" class="interpic">
    <Infostrip _align="left" text1="Who We Are" text2="DISCOVER THE FIELDHOUSE" color="green" bcol="black" loc=""/>
    <img src="../assets/fieldhouse2.webp" class="interpic">
    <Infostrip _align="flex-end" text1="Visit Us" text2="SCHEDULE A TOUR" color="green" bcol="black" loc=""/>
    <img src="../assets/fieldhouse3.webp" class="interpic">
    <Infostrip _align="left" text1="Plan With Us" text2="MAKE YOUR NEXT EVENT AMAZING" color="green" bcol="black" loc=""/>
    <img src="../assets/fieldhouse4.webp" class="interpic">
    <Infostrip _align="flex-end" text1="About The Fieldhouse" text2="LEARN ABOUT DIRECTIONS, SEATING AND MORE" color="green" bcol="black" loc="/info"/>
    <img src="../assets/fieldhouse5.webp" class="interpic" style="margin-bottom: -1vw">
    <UniformFoot/>
    </main>
</template>

<script>
import Infostrip from '../components/Infostrip.vue';
import UniformFoot from '../components/UniformFoot.vue';
import { ref } from 'vue'
import { currentTrans } from '../main';

const delay = ms => new Promise(res => setTimeout(res, ms));

export default {
    name: "HomePage",
    components: {
      Infostrip,
      UniformFoot
    },
    setup() {
      const events = ref([
        {
          title: "Fake Event",
          date: "NOV 2, 2024",
          desc: "Event description."
        },
        {
          title: "Event 2",
          date: "NOV 8, 2024",
          desc: "Event description."
        },
        {
          title: "Event 3",
          date: "DEC 20, 2024",
          desc: "Event description."
        },
        {
          title: "Event 4",
          date: "JAN 2, 2025",
          desc: "Event description."
        },
      ]);
      return { events }
    },
    async mounted() {
      if(currentTrans != "entrance") {
        document.getElementById("field").style.transition = "none"
        document.getElementById("field").style.opacity = 1
        document.getElementById("introvid").currentTime = 9;
      }
      return
    }
  }
</script>