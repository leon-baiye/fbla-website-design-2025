<style>
/* scrollable history section */
div.history {
    background: white;
    margin-top: 4vw;
    padding-top: 3vw;
    margin-bottom: 4vw;
    padding-bottom: 3vw;
    height: 30vw;
    overflow-y: scroll;
    z-index: -1;
    -webkit-mask: linear-gradient(
        transparent, 
        white 30%, 
        white 70%,
        transparent
        );

    mask: linear-gradient(
        transparent, 
        white 30%, 
        white 70%,
        transparent
        );
}

h2.history {
  font-family: 'Lexend Giga', sans-serif;
  text-align: center;
  font-weight: 700;
  font-size: 4vw;
  color: #12873F;
  margin-bottom: 0vw;
}

/* scroll explain */

div#scrollExp {
    position: absolute;
    display: flex;
    gap: 0;
    flex-direction: column;
    margin-left: 20vw;
    margin-top: 0vw;
    width: 60vw;
    height: 30vw;
    font-weight: 250;
    opacity: 0;
    align-items: center;
    transition: 0.3s opacity linear;
    z-index: 2;
}
img.scrollExpl {
    height: 100%;

}
div#scrollExp.animated {
    animation: 1.5s ease-out 0s 3 normal forwards running bob
}
@keyframes bob {
    0% {
        gap: 0;
    }
    12.5% {
        gap: 1.08vw;
    }
    25% {
        gap: 1.5vw;
    }
    37.5% {
        gap: 1.08vw;
    }
    50% {
        gap: 0;
    }
    62.5% {
        gap: -1.08vw;
    }
    75% {
        gap: -1.5vw;
    }
    87.5% {
        gap: -1.08vw;
    }
    100% {
        gap: 0;
    }
}
p.scrollExpl {
    text-align: center;
    font-size: 1.5vw;
    color: black;
}
</style>

<template>
    <main>
        <div class="title2">
            <h1>Fieldhouse History</h1>
        </div>
        <div id="scrollExp">
            <p class="scrollExpl">Scroll to see more history!</p>
            <img class="scrollExpl" src="../assets/movingarrow.png">
        </div>
        <div class="history">
            <HistoryStrip 
                positioning="relative"
                _align="left"
                text1="The Catalyst" 
                text2="In 1954, Milan High School of Indiana won the state basketball championship, garnerning statewide attention & acclaim.
                Their coach, Marvin Wood, was hired by New Castle High School shortly after. In disucssions with the prospective coach, New Castle administrators shared their plans to rebuild the school's gym, outdated at the time.
                Wood suggested a larger, more modern facility, and the idea for the Fieldhouse was born. While the Milan coach didn't end up staying with New Castle, his vision for the Fieldhouse did." 
                post="/src/assets/milan.jpg"
            />
            <HistoryStrip 
                positioning="relative"
                _align="right" 
                text1="'Gym Now'" 
                text2="After Marvin Wood left New Castle to pursue other coaching dreams, the New Castle-Henry Township Building Corporation took over the Fieldhouse project.
                However, initial attempts to speed up construction were met with opposition from Superintendent Rexford Wright, who stated that construction of a new gym would have to wait.
                However, for New Castle fans, having to attend games in the outdated Church Street Gym simply wasn't an option. 'Gym Now' quickly became a rallying cry for the community and its hopes for an updated stadium." 
                post="/src/assets/gymnow.jpg"
            />
            <HistoryStrip 
                positioning="relative"
                _align="left" 
                text1="Construction" 
                text2="A fundraiser for the new stadium begain in May 1956, which raised over $200,000 (equivalent to $1.9 million today) in less than two years.
                With $875,000 from a bond issue and the $200,000 raised, construction of the New Castle Fieldhouse began on December 30th of 1957.
                The Fieldhouse was completed in 1959, and was the largest (and 'Finest') high school gym in the world at the time."
                post="/src/assets/construction.jpg"
            />
            <HistoryStrip 
                positioning="relative"
                _align="right"  
                text1="The Fieldhouse Today" 
                text2="The Fieldhouse has been a staple of New Castle since its completion in 1959. It has hosted numerous high school basketball games, graduations, and other events.
                The Fieldhouse has also been featured in several movies, including the 1986 film 'Hoosiers'. 
                The world-renowned gym is still in use today, and is a popular venue for events in the New Castle area."
                post="/src/assets/currentcastle.webp"
            />
        </div>
        <UniformFoot/>
    </main>
  </template>
  
<script>
    import HistoryStrip from '../components/HistoryStrip.vue';
    import UniformFoot from '../components/UniformFoot.vue';
    import { createStateChangeDetector } from '../main';

    const delay = ms => new Promise(res => setTimeout(res, ms));

    export default {
        components: {
            HistoryStrip,
            UniformFoot,
        },
        setup() {
            window.scrollTo(0,0);
        },
        async mounted() {
            async function showTut() {
                await delay(1500)
                document.getElementById('scrollExp').style.opacity = 1
                document.getElementById('scrollExp').classList.add("animated")
                await delay(5000)
                document.getElementById('scrollExp').classList.remove("animated")
                document.getElementById('scrollExp').style.opacity = 0
            }
            const checkTut = createStateChangeDetector(
                () => (window.scrollY > 200),
                showTut,
                null
            )
            document.addEventListener('scroll', checkTut)
        }
    };
</script>

