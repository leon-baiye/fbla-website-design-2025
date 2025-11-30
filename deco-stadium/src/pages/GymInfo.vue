<style>

/* imports */ 

@import url('https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&family=Lexend+Giga:wght@100..900&family=Lexend+Mega:wght@100..900&display=swap');

/* info cards */

div.cardcontainer {
    display: flex;
    flex-direction: row;
    margin-top: 3vw;
    margin-left: 3vw;
    width: 94%;
    height: auto;
}
div.rightcontainer {
    display: flex;
    flex-direction: column;
    height: auto;
}

/* transition below is for scrolling pop-up */

div.card {
    justify-content: center;
    border-radius: 1.1vw;
    overflow-y: scroll;
    background: #5bc0ebff;
    
    min-width: 40vw;
    padding-top: 0;
    padding-bottom:2vw;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 100vh;
    padding-left: 0;
    transition: 1.2s margin-top ease-out;
}
h3.cardtitle {
    position: sticky;
    top: 0;
    margin-top: 0;
    width: 100%;
    background-color: #002366ff;
    padding-top: 1vw;
    padding-bottom: 1vw;
    color: white;
    font-family: 'Lexend Mega', sans-serif;
    font-size: 2vw;
    text-align: center;
}

/* directions card */

div.mapcontainer {
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 3vw;
    height: 30vw;
    border-radius: 1.2vw;
    overflow: hidden;
    display: flex;
    align-content: center;
    justify-content: center;
}
a.maps {
    text-align: center;
    width: 100%;
    display: block;
    text-decoration: none;
}
a.maps:visited {
    color: black;
}
ul.maps {
    margin-left: 15%;
    margin-right: 20%;
    padding: 0;
    margin-top: 1.5vw;
    margin-bottom: 0vw;
    list-style-type: ">  "; 
}
ul.sub {
    padding-left: 2vw;
    color: black;
    list-style-type: ">>  "; 
}
li {
    padding-top: 0.3vw;
    padding-bottom: 0.3vw;
    color: black;
    font-size: 1.6vw;
    font-weight: 300;
    font-family:'Lexend Exa', sans-serif;
}
h4.map {
    margin-bottom: 0vw;
    margin-top: 0.2vw;
    font-size: 2vw;
}
h4.excited {
    font-weight: 500; 
    margin-left: 15%; 
    margin-right: 15%;
}
strong {
  color: rgb(255, 236, 200);
}

/* seating card */

img.seats {
    width: 50%;
    margin-left: 25%;
    border-radius: 1.2vw;
    border-width: 0.2vw;
    border-style: solid;
    border-color: #002366ff;
}

/* amenities card */

div.amenit {
    padding-left: 10%;
    padding-right: 10%;
    height: 43vw;
    overflow-y: scroll;
}
h4.amenit {
    text-align: left;
    font-weight: 600;
    font-size: 1.8vw;
}
p.amenit {
    font-size: 1.6vw;
    padding-top: 0.3vw;
    padding-bottom: 0.3vw;
    color: black;
    font-weight: 300;
    font-family: 'Lexend Exa', sans-serif;
}

/* policies card */

h4.handbook {
    font-size: 3vw;
    background: #f5ad6eff;
    border-radius: 1.1vw;
    text-align: center;
    margin-left: 20%;
    width: 60%;
    padding: 0.4vw;
    color: white !important;
    margin-top: 0;
}
a.handbook {
    text-decoration: none !important;
    color: white;
}
a.handbook:visited {
    color: white;
}
ul.policies {
    margin-top: 0vw;
}
li.policies {
    font-size: 1.5vw;
    margin-bottom: 0.3vw;
}
/* seating overlay */

div#over {
    border-top-left-radius: 3vw;
    border-top-right-radius: 3vw;
    position: fixed;
    top: 100vh;
    z-index: 4;
    width: 100%;
    height: 130%;
    background: rgba(0, 0, 0, 0.808);
    opacity: 0;
    transition: 
        1s top cubic-bezier(0.34, 1.56, 0.64, 1),
        1s opacity cubic-bezier(0.34, 1.56, 0.64, 1);
}
img.seatingoverlay {
    margin-top: 15vw;
    width: 50%;
    margin-left: 25%
}
img.xout {
    position: fixed;
    z-index: 5;
    width: 3vw;
    margin-left: 15vw;
    margin-top: 15vw;
}
img.amenit {
    object-fit: cover;
    width: 35vw;
    margin-left: 0.2vw;
    border-radius: 0.4vw;
    border-width: 0.2vw;
    border-style: solid;
    border-color: #002366ff;
}
strong.beige {
    color: #FFECC8;
}
strong.pol {
    color: black;
}

div#policy {
    margin-bottom: 6vw;
}

@media only screen and (max-device-width: 700px) {
    div#policy {
        margin-bottom: 10vw;
    }
}
</style>

<template>
    <main class="mi">
        <div id="over">
            <img v-on:click="overlay('close')" src="../assets/X.svg" class="xout">
            <img src="../assets/Seating Chart.svg" class="seatingoverlay">
        </div>
        <div class="outer">
            <div class="inner">
                <div class="title2">
                    <h1>Gym Info</h1>
                </div>
                <div class="cardcontainer">
                    <div class="card" style="height: 80vw" id="dir">
                        <h3 class="cardtitle">Directions</h3>
                        <h4 style="font-weight: 500; font-size: 1.8vw;"><a class="maps" href="https://www.google.com/maps/place/Marvin+Ridge+High+School/@34.9738401,-80.796021,17z/data=!3m1!4b1!4m6!3m5!1s0x8854291cc41102a3:0x1754a3ba7c97bca5!8m2!3d34.9738401!4d-80.796021!16s%2Fm%2F043kmwx?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D">2825 Crane Rd, Waxhaw, NC 28173</a></h4>
                        <div class="mapcontainer">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.3123521944353!2d-80.79602099999998!3d34.973840100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854291cc41102a3%3A0x1754a3ba7c97bca5!2sMarvin%20Ridge%20High%20School!5e0!3m2!1sen!2sus!4v1738548443297!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <h4 class="map">Reccomendations</h4>
                        <ul class="maps">
                            <li class="maps">Be aware that traffic in the Waxhaw area is <strong class="beige">thickest</strong> on weekdays from 7:40 - 8 AM & 2:45 - 3:20 PM, and <strong class="beige">thinnest</strong> on the weekends.</li>
                            <li class="maps">You or your organization should aim to <strong class="beige">visit on a weekend</strong>, as communter traffic fills up the highways to & from Waxhaw during the week.</li>
                            <li class="maps">If you're coming from the north, it's best to <strong class="beige">take the I-485 loop around Charlotte</strong> to get to the Mecca. Traffic on I-77 is often congested.</li>
                            <li class="maps">Make sure to <RouterLink to="/tour"><strong class="beige">book a tour here</strong></RouterLink> before your visit. Due to high demand, we will not be able to accomodate impromptu Mecca tour requests.</li>
                        </ul>
                        <h4 class="excited">We're excited to see you at the Mecca sometime soon!</h4>
                    </div>
                    <div class="rightcontainer">
                        <div class="card" style="height: 27vw;margin-bottom: 0vw;overflow:hidden" id="seat">
                            <h3 style="margin-bottom: 0.8vw;" class="cardtitle">Seating</h3>
                            <h4 style="margin-top: 0;">Overhead View<br>[click to expand]</h4>
                            <img v-on:click="overlay('open')" src="../assets/Seating Chart.svg" class="seats">
                        </div>
                        <div class="card" style="height: 50vw;overflow:hidden;" id="amen">
                            <h3 class="cardtitle">Amenities</h3>
                            <div class="amenit">
                                <img class="amenit" src="../assets/bathroom.jpg">
                                <h4 class="amenit">Bathrooms</h4>
                                    <p class="amenit">Easily accessible in <strong class="beige">4 convinient locations</strong> across the Mecca! </p>
                                    <img class="amenit" src="../assets/concessions_edited.png">
                                <h4 class="amenit">Concessions</h4>
                                    <p class="amenit">A variety of <strong class="beige">culutural concessions stands</strong> from local businesses like La Victoria and Open Rice, well-known for their <strong>delicious food</strong> and <strong>stellar service</strong>. </p>
                                <img class="amenit" src="../assets/meetandgreet.jpg">
                                <h4 class="amenit">Performer/Player Access</h4>
                                    <p class="amenit"><strong class="beige">Designated meet-and-greet area</strong> complete with backdrop, props, queue and safety officers. </p>
                                <img class="amenit" src="../assets/indoor track.jpg">
                                <h4 class="amenit">Walkways</h4>
                                    <p class="amenit">A <strong class="beige">400-meter track</strong> used during the Cross Country season traverses the Mecca, providing an <strong>easy way to see all the Mecca has to offer</strong>. </p>
                                <img class="amenit" src="../assets/vipbox.webp">
                                <h4 class="amenit">VIP Box</h4>
                                    <p class="amenit">Reward your dedicated patrons with an <strong class="beige">elevated seating experience</strong> including individual <strong class="beige">luxury chairs</strong>, <strong class="beige">complimentary food</strong> and beverage service and A/C <strong class="beige">calibrated to each guest's needs</strong>.</p>
                                <img class="amenit" src="../assets/jumbotron_clear.jpg">
                                <h4 class="amenit">JumboTron</h4>
                                    <p class="amenit">Never miss a play with our 4-sided display box that has <strong class="beige">cutting-edge motion tracking</strong> capabilities and <strong class="beige">AI-powered replays!</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card" style="width:90%;height: 35vw; margin-left:5vw; margin-right:5vw; overflow-y: hidden;" id="policy">
                    <h3 class="cardtitle">Policies</h3>
                    <div style="width: 90%; margin-left:5%; margin-right: 5%;">
                        <h4 style="text-align: left;font-size: 2vw;margin-bottom: 1vw;">Notable policies include the following: </h4>
                        <ul class="policies">
                            <li class="policies">Any bags brought into the Mecca must be translucent and measure up to 4.5" by 6.5".</li>
                            <li class="policies">Children under age 13 must be accompained by an adult (21 years or older) to any events at the Mecca.</li>
                            <li class="policies">All ticket sales at Mecca events will end at halftime or the midpoint of the event.</li>
                            <li class="policies">No outside food or beverages are allowed inside the Mecca.</li>
                            <li class="policies">All guests are subject to a security screening upon entry.</li>
                            <li class="policies">Smoking is prohibited within the Mecca premises.</li>
                            <li class="policies">Guests must adhere to the posted event-specific guidelines and instructions.</li>
                            <li class="policies"><strong class="pol">Please <RouterLink to="/planning#cont">contact us</RouterLink> if you have any questions about our policies!</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        <UniformFoot class="fi"/>
        </div>
    </main>
</template>

<script>
import UniformFoot from '../components/UniformFoot.vue';
import { RouterLink, useRouter } from 'vue-router';
import { checkMainScroll } from '../components/UniformHead.vue';

var popped = []

const delay = ms => new Promise(res => setTimeout(res, ms));


function popCard() {
    if(document.getElementById("/info").scrollTop>=window.outerHeight*0.1 && !popped.includes("seat")) {
        popped.push("seat")
        document.getElementById("seat").style.marginTop = "2vh"
    }
    if(document.getElementById("/info").scrollTop>=window.outerHeight*0.5 && !popped.includes("amen")) {
        popped.push("amen")
        document.getElementById("amen").style.marginTop = "0.6vh"
    }
    if(document.getElementById("/info").scrollTop>=(window.outerHeight) && !popped.includes("policy")) {
        popped.push("policy")
        document.getElementById("policy").style.marginTop = "2vh"
    }
}
export default {
    components: {
        UniformFoot
    },
    setup() {
        const overlay = function(mode) {
            if(mode=="open") {
                document.getElementById("over").style.top = "0"
                document.getElementById("over").style.opacity = 1
            }
            else {
                document.getElementById("over").style.top = "100vh"
                document.getElementById("over").style.opacity = 0
            }
        }
        return { overlay }
    },
    beforeRouteLeave(to, from) {
        document.getElementById("/info").removeEventListener("scroll", checkMainScroll)
    },
    async mounted() {
        document.getElementById("/info").addEventListener("scroll", checkMainScroll)
        if(window.outerWidth < 1000) {
            document.getElementById("dir").style.marginTop = "2vh"
            document.getElementById("seat").style.marginTop = "2vh"
            document.getElementById("amen").style.marginTop = "0.6vh"
            document.getElementById("policy").style.marginTop = "2vh"
        }
        else {
            popped = []
            document.getElementById("/info").addEventListener("scroll", (event) => {
                if(popped.length!=3) {
                popCard();
                }
            })
            await delay(300)
            document.getElementById("dir").style.marginTop = "2vh"
        }
    }
}
</script>