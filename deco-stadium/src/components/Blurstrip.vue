<script>
export default {
    props: ['_align', 'bkg', 'text1', 'text2', 'color', 'bcol'],
    setup(props) {
        
    },
    computed: {
        cssVars() {
            return {
                '--bkg': `url(${this.bkg})`,
                '--align': this._align,
                '--bcol': this.bcol,
            }
    }
  }
}
/* {{ text1 }}*/
</script>
<template>
<div :style="cssVars" class="blurstrip">
    <h2 :style="cssVars" :class=color>{{ text1 }}</h2>
    <button :style="cssVars" class="blur">{{ text2 }} &rarr;</button>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&family=Lexend+Giga:wght@100..900&display=swap');

    div.blurstrip {
        background-image: var(--bkg);
        background-size: 100% 100%;
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
        width: fit-content;
        color: var(--bcol);
        border-color: var(--bcol);
        border-width: 1px;
        border-style: solid;
        border-radius: 16px;
        padding: 1vw;
        font-size: 2vw;
        background: transparent;
        font-family: 'Lexend Exa', sans-serif;
        font-weight: 300;
        margin-right: 10vw;
        margin-top: -1vw;
        margin-bottom: 2vw;
    }

    strong {
        color: #FFECCE;
    }
</style>