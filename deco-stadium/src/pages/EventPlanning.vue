<style>

/* imports */ 

@import url('https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&family=Lexend+Giga:wght@100..900&family=Lexend+Peta:wght@100..900&family=Lexend+Zetta:wght@100..900&display=swap');

/* heading */

h3.take {
    color: black;
    text-align: center;
    font-weight: 400;
    font-size: 2.5vw;
}

/* testimonials */

div.testimonials {
    padding: 2vw;
    max-width: 100vw;
    margin-bottom: 4vw;
    background: #F2F2F2;
    border-color: #7CFFAD;
    border-width: 0.5vw;
    border-style: solid;
    overflow-x: hidden;
    user-select: none;
    display: flex;
    -webkit-mask: linear-gradient(
        90deg, 
        transparent, 
        white 40%, 
        white 60%,
        transparent
        );

    mask: linear-gradient(
        90deg, 
        transparent, 
        white 40%, 
        white 60%,
        transparent
        );
}

div.testinner {
    margin-left: 2vw;
    display: flex;
    flex-direction: row;
    gap: 2vw;
    height: 100%;
    animation: scroll 40s linear infinite;
}

/* infinite scrolling animation */
@keyframes scroll {
    to {
        transform: translateX(-100%)
    }
}
div.testcard {
    padding-left: 2vw;
    padding-right: 2vw;
    background: white;
    border-radius: 8px;
    min-width: 14vw;
    min-height: 28vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: primary 3s linear infinite;
}
h3.name {
    font-family: 'Lexend Zetta', sans-serif;
    font-size: 1.7vw;
    color: black;
    margin-bottom: 0;
}
h4.org {
    font-family: 'Lexend Peta', sans-serif;
    font-size: 1.2vw;
    color: #009238;
    margin-top: 0.4vw;
}
img.testimonial {
    width: 11vw;
    height: 11vw;
    border-radius: 6px;
    margin-bottom: 0.7vw;
}
p.testimonial {
    font-family: 'Lexend Peta', sans-serif;
    font-size: 0.9vw;
    color: black;
    margin-bottom: 1.3vw;
}
a.testimonial {
    font-family: 'Lexend Peta', sans-serif;
    font-size: 0.8vw;
    text-decoration: none;
    font-weight: 600;
    color: black;
    background: rgb(233, 255, 226);
    padding: 0.4vw;
    border-radius: 2px;
}
a.testimonial:visited {
    color: black;
}

/* hosting benefits list */

ul.hosting {
    width: 70vw;
    margin-left: 12%;
}
li.hosting {
    font-size: 1.5vw;
    margin-bottom: 1vw;
}

/* details */

div.details {
    border-radius: 12px;
    height: auto;
    padding-top: 1vw;
    padding-bottom: 1vw;
    margin-left: 15vw;
    margin-right: 15vw;
    width: 70vw;
    margin-bottom: 3vw;
}
p.details {
    font-family: 'Lexend Exa', sans-serif;
    font-size: 2vw;
    line-height: 4vw;
    text-align: center;
}
h3.details {
    text-align: center;
    font-size: 2vw;
    color: black;
}
a.details {
    color: white;
}
a.details:visited {
    color: white;
}

/* contacts */

div.contacts {
    background: #30724c;
    margin-left: 30vw;
    margin-right: 30vw;
    border-radius: 8px;
    padding: 1.4vw;
    margin-bottom: 1.5vw;
    text-align: center;
}
h3.contacts {
    margin-top:0;
    color: white;
    font-size: 1.8vw;
    font-weight: 400;
}
a.contacts {
    font-size: 1.4vw;
    text-decoration-style:wavy;
    color: #00EE5C;
    font-weight: 500;
}

/* "excited" text */

h3.excited {
    color: #009e3c;
    font-size: 3vw;
    width: 100%;
    height: 4vw;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    margin-top: 3vw;
}

/* scroll animation setup */

div#anim0 {
    opacity: 0;
    margin-left: 100vw;
    transition: 0.3s opacity ease-out,
                0.3s margin-left ease-out;
}
div#anim1 {
    opacity: 0;
    margin-right: 100vw;
    transition: 0.3s opacity ease-out,
                0.3s margin-right ease-out;
}
div#anim2 {
    opacity: 0;
    margin-left: 25vw;
    margin-right: 25vw;
    transition: 0.3s opacity ease-out,
                0.3s margin-left ease-out,
                0.3s margin-right ease-out;
}
div#anim3 {
    opacity: 0;
    margin-left: 35vw;
    margin-right: 35vw;
    transition: 0.3s opacity ease-out,
                0.3s margin-left ease-out,
                0.3s margin-right ease-out;
}
div#anim4 {
    opacity: 0;
    margin-left: 25vw;
    margin-right: 25vw;
    transition: 0.3s opacity ease-out,
                0.3s margin-left ease-out,
                0.3s margin-right ease-out;
}
div#anim5 {
    opacity: 0;
    margin-left: 35vw;
    margin-right: 35vw;
    transition: 0.3s opacity ease-out,
                0.3s margin-left ease-out,
                0.3s margin-right ease-out;
}
#anim6 {
    font-size: 2vw;
    opacity: 0;
    transition: 1s font-size cubic-bezier(1,1.7,.33,1.03),
                1s opacity cubic-bezier(1,1.7,.33,1.03);
}
</style>

<template>
    <main>
        <div class="title2">
            <h1>Event Planning</h1>
        </div>
        <h2>WHY HOST AT THE <br>FIELDHOUSE?</h2>
        <h3 class="take">Don't just take it from us.<br>Here's what people are saying about hosting<br>events at the Fieldhouse.</h3>
        <div class="testimonials">
            <div class="testinner">
                <div class="testcard" v-for="test in testimonials" :style="''">
                    <h3 class="name">{{ test.name }}</h3>
                    <h4 class="org">{{ test.org }}</h4>
                    <img :src="test.img" class="testimonial">
                    <p class="testimonial">{{ test.quote }}</p>
                    <a class="testimonial" :href="test.link">{{ checkLink(test.link) }}</a>
                </div>
            </div>
            <div class="testinner">
                <div class="testcard" v-for="test in testimonials" :style="''">
                    <h3 class="name">{{ test.name }}</h3>
                    <h4 class="org">{{ test.org }}</h4>
                    <img :src="test.img" class="testimonial">
                    <p class="testimonial">{{ test.quote }}</p>
                    <a class="testimonial" :href="test.link">{{ checkLink(test.link) }}</a>
                </div>
            </div>
        </div>
        <h2>HOSTING BENEFITS</h2>
        <ul class="hosting">
            <li class="hosting">Thousands of square feet for your organization</li>
            <li class="hosting">Free access to the NCFH ticketing network & complete control over ticketing</li>
            <li class="hosting">Personalized event landing page</li>
            <li class="hosting">Free promotion over the unparalleled TROJAN® media network</li>
            <li class="hosting">A venue like no other, complete with concessions, convenient parking, and <a>other amenities</a></li>
            <li class="hosting">The features of a major stadium for the price of a high school graduation</li>
        </ul>
        <h2>DETAILS</h2>
        <div id="anim0" class="details" style="background:#009238">
            <p class="details" style="color: white">
                Fill out our Event Hosting Form<br> 
                to get started:<br>
                <a class="details" href="https://google.com">Access Form</a>
            </p>
        </div>
        <div id="anim1" class="details" style="background:#D9D9D9">
            <h3 class="details"> You'll need:</h3>
            <p class="details" style="color: black">
                you & your organization's legal name<br>
                basic event details (i.e. name, date, time)<br>
                event requirements (i.e. specific areas prepared) <br>
                target audience and expected event turnout<br>
                any other pertinent event information<br>
            </p>
        </div>
        <h2>CONTACTS</h2>
        <div id="anim2" class="contacts">
            <h3 class="contacts">Pricing Questions:</h3>
            <a class="contacts" href="mailto:support@google.com">pricing@trojanhosting.com</a>
        </div>
        <div id="anim3" class="contacts">
            <h3 class="contacts">Amenditites Questions:</h3>
            <a class="contacts" href="mailto:support@google.com">amendities@trojanhosting.com</a>
        </div>
        <div id="anim4" class="contacts">
            <h3 class="contacts">Availability Questions:</h3>
            <a class="contacts" href="mailto:support@google.com">availability@trojanhosting.com</a>
        </div>
        <div id="anim5" class="contacts">
            <h3 class="contacts" style="text-decoration: underline;">All Other Inquires:</h3>
            <a class="contacts" href="mailto:support@google.com">general@trojanhosting.com</a>
        </div>
        <h3 id="anim6" class="excited">WE'RE EXCITED TO WORK WITH YOU SOON!</h3>
        <UniformFoot/>
    </main>
</template>

<script>
import UniformFoot from '../components/UniformFoot.vue';
import { testimonials } from '../testimonials';

var breakpoints = []
var marked = []

async function animatePage() {
    if(window.scrollY > breakpoints[0] && !marked.includes(0)) {
        marked.push(0)
        document.getElementById("anim0").style = "background:#009238; opacity:1;margin-left:15vw;"
    }
    else if(window.scrollY > breakpoints[1] && !marked.includes(1)) {
        marked.push(1)
        document.getElementById("anim1").style = "background:#D9D9D9; opacity:1;margin-right:15vw;"
    }
    else if(window.scrollY > breakpoints[2] && !marked.includes(2)) {
        marked.push(2)
        document.getElementById("anim2").style = "margin-left: 30vw; margin-right: 30vw; opacity:1;"
    }
    else if(window.scrollY > breakpoints[3] && !marked.includes(3)) {
        marked.push(3)
        document.getElementById("anim3").style = "margin-left: 30vw; margin-right: 30vw; opacity:1;"
    }
    else if(window.scrollY > breakpoints[4] && !marked.includes(4)) {
        marked.push(4)
        document.getElementById("anim4").style = "margin-left: 30vw; margin-right: 30vw; opacity:1;"
    }
    else if(window.scrollY > breakpoints[5] && !marked.includes(5)) {
        marked.push(5)
        document.getElementById("anim5").style = "margin-left: 30vw; margin-right: 30vw; opacity:1;"
    }
    else if(window.scrollY > breakpoints[6] && !marked.includes(6)) {
        marked.push(6)
        document.getElementById("anim6").style.fontSize = "3vw"
        document.getElementById("anim6").style.opacity = 1
    }
}
export default {
    components: {
        UniformFoot
    },
    setup() {
        const checkLink = function(link) {
            if(link!="none") {
                return "Full Story"
            } 
            else {return ""}
        }
        return { checkLink, testimonials }
    },
    mounted() {
        let initial = 1500
        let spacing1 = 400
        let spacing2 = 500
        let spacing3 = 140
        
        breakpoints.push(initial, (initial+spacing1), (initial+spacing1+spacing2))
        for(let x=1;x<5;x++) {
            breakpoints.push((initial+spacing1+spacing2+(spacing3*x)))
        }
        document.addEventListener('scroll', animatePage)
    }
}
</script>