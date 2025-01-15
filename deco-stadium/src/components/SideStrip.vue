<script>
export default {
    props: ['_align', 'marg', 'vidmarg', 'text1', 'text2', 'vid', 'post', 'topmarg', 'vidwidth', 'divmargin', 'positioning'],
    setup(props) {
        
    },
    computed: {
        cssVars() {
            return {
                '--align': this._align,
                '--marg': this.marg,
                '--vidmarg': this.vidmarg,
                '--topmarg': this.topmarg,
                '--vidwidth': this.vidwidth,
                '--divmargin': this.divmargin,
                '--positioning': this.positioning
            }
    }
  }
}
/* {{ text1 }}*/
</script>
<template>
<div :style="cssVars" class="tutorialstrip">
    <div :style="cssVars" class="tutorialcontain">
        <h3 class="tutorialstrip">{{ text1 }}</h3>
        <p class="tutorialstrip">{{ text2 }}</p>
    </div>
    <video :style="cssVars" :poster="post" class="tutorialstrip" loop autoplay muted><source :src="vid" type="video/mp4"/></video>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&family=Lexend+Giga:wght@100..900&display=swap');

    div.tutorialstrip {
        background-color: #FFF;
        width: 90vw;
        margin-left: var(--divmargin);
        margin-bottom: 5vw;
    }
    div.tutorialcontain {
        text-align: var(--align);
        margin-left: var(--marg);
        width: 40%;
        padding: 1vw;
    }
    h3.tutorialstrip{
        font-size: 2.5vw;
        margin-bottom: 2vw;
        color: rgb(12, 199, 40);
    }
    p.tutorialstrip{
        font-size: 1.5vw;
        color: black;
        margin-bottom: 2vw;
    }
    video.tutorialstrip {
        position: var(--positioning);
        width: var(--vidwidth);
        margin-top: var(--topmarg);
        margin-left: var(--vidmarg);
        border-radius: 0.7vw;
        border-color: gray;
        border-width: 0.2vw;
        border-style: solid;
    }
    </style>