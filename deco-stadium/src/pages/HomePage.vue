<template>
    <main>
    <div class="title">
      <h1>Welcome To</h1>
      <img class="deco welcome" src="../assets/Deco Logo_reg.svg" alt="Deco Logo"/>
      <h1>Stadium</h1>
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
    <Blurstrip bkg="../../src/assets/testimage1.png" _align="left" text1="Who We Are" text2="DISCOVER MORE ABOUT DECO" color="yellow" bcol="white"/>
    <Blurstrip bkg="../../src/assets/testimage2.png" _align="flex-end" text1="Visit Us" text2="SCHEDULE A TOUR" color="black" bcol="black"/>
    <Blurstrip bkg="../../src/assets/testimage1.png" _align="left" text1="Plan With Us" text2="MAKE YOUR NEXT EVENT A DECO EVENT" color="yellow" bcol="white"/>
    <Blurstrip bkg="../../src/assets/testimage2.png"  _align="flex-end" text1="About The Stadium" text2="LEARN ABOUT THE DECO DIFFERENCE" color="black" bcol="black"/>
    <UniformFoot/>
    </main>
</template>

<script>
import Blurstrip from '../components/Blurstrip.vue'
import UniformFoot from '../components/UniformFoot.vue';
import { ref } from 'vue'
export default {
    name: "HomePage",
    components: {
      Blurstrip,
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
      return
    }
  }
</script>