<script>
export default {
    props: ['_align', 'text1', 'text2', 'vid', 'post'],
    setup(props) {
        
    },
    computed: {
        cssVars() {
            return {
                '--align': this._align,
                '--dir': this._align == "left" ? "row" : "row-reverse",
                '--dotdiv': this._align == "left" ? "-3vw" : "0",
                '--dotvid': this._align == "left" ? "0" : "-3.1vw",
            }
    }
  }
}
/* {{ text1 }}*/
</script>
<template>
<div :style="cssVars" class="historystrip">
    <div :style="cssVars" class="historycontain">
        <h3 class="historystrip">{{ text1 }}</h3>
        <p class="historystrip">{{ text2 }}</p>
    </div>
    <div class="historydot"></div>
    <img :style="cssVars" :src="post" class="historystrip"/>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&family=Lexend+Giga:wght@100..900&display=swap');

    div.historystrip {
        display: flex;
        flex-direction: var(--dir);
        align-items: center;
        gap: 4vw;
        background-color: #FFF;
        width: 90vw;
        margin-left: 5vw;
        padding-bottom: 0vw;
    }
    .historycontain::after {
        content: '';
        position: absolute;
        width: 0.5vw;
        background-color: #e16a0dff;
        top: 10vh;
        height: 300vh;
        bottom: 0;
        left: 50%;
        margin-left: 0px;
        z-index: 0;
    }
    div.historycontain {
        text-align: var(--align);
        margin: 0;
        width: 40vw;
        padding: 1vw;
    }
    h3.historystrip {
        font-size: 2.5vw;
        margin-bottom: 2vw;
        color: rgb(0, 106, 255);
    }
    p.historystrip {
        font-size: 1.5vw;
        color: black;
        margin-bottom: 2vw;
    }
    .historydot {
        content: '';
        min-width: 3vw;
        min-height: 3vw;
        background-color: rgb(255, 255, 255);
        border: 0.5vw solid #f5ad6eff;

        border-radius: 50%;
        z-index: 2;
        margin-left: var(--dotdiv);
        margin-right: var(--dotvid);
    }
    img.historystrip {
        object-fit: cover;
        background-attachment: fixed;
        position: relative;
        width: 35vw;
        height: 23vw;
        margin: 0;
        border-radius: 0.7vw;
        border-color: gray;
        border-width: 0.2vw;
        border-style: solid;
    }
</style>