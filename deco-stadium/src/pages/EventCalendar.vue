<template>
    <main>
        <div class="title2">
            <h1>Event Calendar</h1>
        </div>
        <div class="calendar">
            <div class="day" v-for="day in days"></div>
        </div>
        <UniformFoot/>
    </main>
</template>

<script>
import UniformFoot from '../components/UniformFoot.vue';
import { ref } from 'vue';
const days = ref([])
export default {
    components: {
        UniformFoot
    },
    setup() {
        return { days }
    }
}
</script>