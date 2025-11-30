<template>
    <footer class="foot">
      <img class="deco foot" src="../assets/mackhead.png" alt="Deco Logo"/>
      <p class="foot">COPYRIGHT © MARVIN RIDGE HIGH SCHOOL</p>
      <RouterLink class="contactus" to="/planning#contac" @click.native="scrollTo('contac')">Contact Us ✉</RouterLink>
    </footer>
</template>

<script>
import { ref } from 'vue'

const _hash = ref("")

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
    }
  }
</script>
