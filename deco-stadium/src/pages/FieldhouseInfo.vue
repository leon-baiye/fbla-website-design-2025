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
}
div.rightcontainer {
    display: flex;
    flex-direction: column;
}
div.card {
    justify-content: center;
    border-radius: 8px;
    overflow-y: scroll;
    background: #CDFFED;
    min-width: 40vw;
    padding-top: 0;
    padding-bottom: 2vw;
    margin: 2vw;
}
h3.cardtitle {
    position: sticky;
    top: 0;
    margin-top: 0;
    width: 100%;
    background-color: #12873F;
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
    border-radius: 10px;
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
    font-size: 1vw;
    font-weight: 300;
    font-family:'Lexend Exa', sans-serif;
}
h4.map {
    margin-bottom: 0.2vw;
    margin-top: 0.2vw;
}
h4.excited {
    font-weight: 500; 
    margin-left: 15%; 
    margin-right: 15%;
}
strong {
  color: #2cb15f;
}

/* seating card */

img.seats {
    width: 50%;
    margin-left: 25%;
    border-radius: 10px;
    border-width: 0.2vw;
    border-style: solid;
    border-color: #00461b;
}

/* amenities card */

div.amenit {
    padding-left: 10%;
    padding-right: 10%;
}
h4.amenit {
    text-align: left;
    font-weight: 600;
}
li.amenit {
    font-size: 1.2vw;
}

/* policies card */

h4.handbook {
    font-size: 3vw;
    background: rgb(0, 153, 51);
    border-radius: 8px;
    text-align: center;
    margin-left: 20%;
    width: 60%;
    padding: 0.4vw;
    color: white;
    margin-top: 0;
}
a.handbook {
    text-decoration: none ;
}
a.handbook:visited {
    color: white;
}
ul.policies {
    margin-top: 0vw;
}
li.policies {
    font-size: 1.5vw;
}
/* seating overlay */

div#over {
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    position: fixed;
    margin-top: 100vh;
    z-index: 4;
    width: 100%;
    height: 130%;
    background: rgba(0, 0, 0, 0.808);
    transition: 1s margin-top cubic-bezier(0.34, 1.56, 0.64, 1);
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
</style>

<template>
    <main>
        <div id="over">
            <img v-on:click="overlay('close')" src="../assets/X.svg" class="xout">
            <img src="../assets/Seating Chart.svg" class="seatingoverlay">
        </div>
        <div class="title2">
            <h1>Fieldhouse<br>Info</h1>
        </div>
        <div class="cardcontainer">
            <div class="card" style="height: 80vw">
                <h3 class="cardtitle">Directions</h3>
                <h4 style="font-weight: 500;"><a class="maps" href="https://www.google.com/maps/place/New+Castle+High+School/@39.9128291,-85.3813085,16z/data=!3m1!4b1!4m6!3m5!1s0x88153314bbd8e93d:0x21a566c0eca05050!8m2!3d39.9128292!4d-85.3764376!16s%2Fm%2F03d0v25?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">801 Parkview Dr, New Castle, IN 47362</a></h4>
                <div class="mapcontainer">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133723.0853894376!2d-90.25436728750002!3d39.9128292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88153314bbd8e93d%3A0x21a566c0eca05050!2sNew%20Castle%20High%20School!5e0!3m2!1sen!2sus!4v1735655314629!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <h4 class="map">Reccomendations</h4>
                <ul class="maps">
                    <li class="maps">If you're coming from I-70 West: </li>
                        <ul class="sub">
                            <li class="sub">Take exit 131 onto Wilbur Wright Road</li>
                            <li class="sub">Stay on Wilbur Wright Rd for 6.9 mi</li>
                            <li class="sub">Turn right onto South 14th Street after 0.8 mi</li>
                            <li class="sub">Turn left onto M Avenue after 0.6 mi, then directly left onto Ross Street.</li>
                            <li class="sub">Turn right into the NCHS parking lot</li>
                        </ul>
                    <li class="maps">If you're coming from I-70 East: </li>
                        <ul class="sub">
                            <li class="sub">Take exit 123 onto IN-3 towards New Castle</li>
                            <li class="sub">Turn left onto IN-3 North after 4.6 mi</li>
                            <li class="sub">Turn right onto Trojan Lane after 0.4 mi</li>
                            <li class="sub">Turn left into the NCHS parking lot</li>
                        </ul>
                    <li class="maps">If you're coming from I-69 South: </li>
                        <ul class="sub">
                            <li class="sub">Take exit 286 towards Markle</li>
                            <li class="sub">Turn left onto East Markle Road after 0.3 mi</li>
                            <li class="sub">Turn right onto West Morse Street after 0.6 mi</li>
                            <li class="sub">Turn right onto South Clark Road after 48.3 mi</li>
                            <li class="sub">Take the IN-3 exit towards New Castle after 0.3 mi</li>
                            <li class="sub">Turn left onto IN-3 South (passing by KFC) after 16.3 mi</li>
                            <li class="sub">Turn left onto Parkfiew Drive after 0.4 mi</li>
                            <li class="sub">Stay on Parkview Drive until reaching Ross Street. Turn right onto Ross Street.</li>
                            <li class="sub">Turn right into the NCHS parking lot</li>
                        </ul>
                    <li class="maps">Be aware that traffic is <strong>thickest</strong> on xdays from x-x, and <strong>thinnest</strong> on xdays from x-x.</li>
                </ul>
                <h4 class="excited">We're excited to see you at the Fieldhouse sometime soon!</h4>
            </div>
            <div class="rightcontainer">
                <div class="card" style="height: 26vw;margin-bottom: 0vw;overflow:hidden">
                    <h3 class="cardtitle">Seating</h3>
                    <h4>Overhead View<br>[click to expand]</h4>
                    <img v-on:click="overlay('open')" src="../assets/Seating Chart.svg" class="seats">
                </div>
                <div class="card" style="height: 50vw;overflow:hidden;">
                    <h3 class="cardtitle">Amenities</h3>
                    <div class="amenit">
                        <h4 class="amenit">Bathrooms</h4>
                            <li class="amenit">Located on the XYZ concourse</li>
                        <h4 class="amenit">Concessions</h4>
                            <li class="amenit">Located on the XYZ concourse</li>
                        <h4 class="amenit">Performer/Player Access</h4>
                            <li class="amenit">Located on the XYZ concourse</li>
                        <h4 class="amenit">Walkways</h4>
                            <li class="amenit">Located on the XYZ concourse</li>
                        <h4 class="amenit">VIP Box</h4>
                            <li class="amenit">Located on the XYZ concourse</li>
                        <h4 class="amenit">JumboTron</h4>
                            <li class="amenit">Located on the XYZ concourse</li>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style="width:90%;height: 40vw; margin-left:5vw; margin-right:5vw;">
            <h3 class="cardtitle">Policies</h3>
            <h4 class="handbook"><a class="handbook" href="https://ecode360.com/11774565">View Full Policy Handbook</a></h4>
            <div style="width: 90%; margin-left:5%; margin-right: 5%;">
                <h4 style="text-align: left;font-size: 2vw;margin-bottom: 1vw;">Notable policies include: </h4>
                <ul class="policies">
                    <li class="policies">some policy</li>
                </ul>
            </div>
        </div>
        <UniformFoot/>
    </main>
</template>

<script>
import UniformFoot from '../components/UniformFoot.vue';
export default {
    components: {
        UniformFoot
    },
    setup() {
        const overlay = function(mode) {
            if(mode=="open") {
                document.getElementById("over").style.marginTop = "0"
            }
            else {
                document.getElementById("over").style.marginTop = "100vh"
            }
        }
        return { overlay }
    }
}
</script>