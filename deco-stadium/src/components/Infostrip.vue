<script>
export default {
    props: ['_align', 'bkg', 'text1', 'text2', 'color', 'bcol', 'loc'],
    setup(props) {
        
    },
    methods: { 
        scrollToTop() {
            window.scrollTo(0,0);
        }
    },
    computed: {
        cssVars() {
            return {
                '--align': this._align,
                '--bcol': this.bcol,
            }
    }
  }
}
/* {{ text1 }}*/
</script>
<template>
<div :style="cssVars" class="infostrip">
    <h2 :style="cssVars" :class=color>{{ text1 }}</h2>
    <RouterLink style="text-decoration: none;":onclick="scrollToTop" :to="loc"><button :style="cssVars" class="blur">{{ text2 }}<img class="rarr" src="../assets/rarr.png"></button></RouterLink>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&family=Lexend+Giga:wght@100..900&display=swap');

    div.infostrip {
        background-color: #FFF;
        align-items: var(--align);
        width: 98vw;
        display: flex;
        flex-direction: column;
        padding-left: 6vw;
        padding-bottom: 2vw;
    }
    h2.white {
        color: white;
        font-family: 'Lexend Giga', sans-serif;
        font-weight: 300;
        font-size: 5vw;
        padding-right: 10vw;
        margin-top: 2vw;
    }
    h2.black {
        color: black;
        font-family: 'Lexend Giga', sans-serif;
        font-weight: 300;
        font-size: 5vw;
        text-align: left;
        margin-right: 10vw;
        margin-top: 2vw;
    }
    h2.green {
        color: #00BE49;
        font-family: 'Lexend Giga', sans-serif;
        font-weight: 400;
        font-size: 5vw;
        text-align: left;
        margin-right: 10vw;
        margin-top: 2vw;
    }
    button.blur {
        text-align: left;
        width: max-content;
        padding-right:1vw;
        color: var(--bcol);
        border-color: var(--bcol);
        border-width: 0.1vw;
        border-style: solid;
        border-radius: 1.4vw;
        font-size: 2vw;
        background: transparent;
        font-family: 'Lexend Exa', sans-serif;
        font-weight: 300;
        margin-right: 10vw;
        margin-top: -1vw;
        margin-bottom: 2vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none !important;
        gap: 0vw;
        transition: 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    button.blur:hover {
        gap: 1vw;
        padding-right: 0vw;
    }
    img.rarr {
        width: 5vw;
        border-radius: 1.6vw;
    }
    strong {
        color: #FFECCE;
    }
</style>