<script>
export default {
    props: ['_align', 'marg', 'vidmarg', 'text1', 'text2', 'vid', 'post'],
    setup(props) {
        
    },
    computed: {
        cssVars() {
            return {
                '--align': this._align,
                '--marg': this.marg,
                '--vidmarg': this.vidmarg
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
    <video :poster="post" class="tutorialstrip" loop autoplay muted><source :src="vid" type="video/mp4"/></video>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&family=Lexend+Giga:wght@100..900&display=swap');

    div.tutorialstrip {
        background-color: #FFF;
        width: 90vw;
        margin-left: 10vw;
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
        position: absolute;
        width: 35%;
        margin-top: -18vw;
        margin-left: var(--vidmarg);
        border-radius: 7px;
        border-color: gray;
        border-width: 1px;
        border-style: solid;
    }
    </style>