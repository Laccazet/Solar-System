class Planet {

    constructor(name,width,height,radious,radiant,speed,area,mass,age,overview,pName){
        this.radiant = radiant;
        this.name = name;
        this.width = width;
        this.height = height;
        this.radious = radious;
        this.speed = speed;
        this.area = area;
        this.mass = mass;
        this.age = age;
        this.overview = overview;
        this.pName = pName;
        $(name).css("width",width);
        $(name).css("height",height);
        $(name).children().css("left",-(width/2));
        $(name).children().css("top",-(height/2));
        $(name).children().children().css("left",width-10);
        $(name).children().children().css("bottom",height);
        

        //Planet's hover effects (Name Bubble, Show Orbit)
        $(name).children().hover(function(){

            $(name).children().children().css("display","flex");
            
            $(".orbit-center").css("filter","opacity(100%)")

            $(".orbit").css("width",2 * radious);
            $(".orbit").css("height",2 * radious);

            $(".orbit-center").css("left", -($(".orbit").width() / 2) - 2) + "px";
            $(".orbit-center").css("top", -($(".orbit").height() / 2) - 2) + "px";
            

            }, function(){
            $(name).children().children().css("display","none");

            $(".orbit-center").css("filter","opacity(0%)")
        });

        
    }

    //Set planet's info to info elements
    infoSet() {
        $("h1").html(this.pName);
        $(".surface-area").html(this.area);
        $(".mass").html(this.mass);
        $(".age").html(this.age);
        $("p").html(this.overview);
    }
    
    //Calculating orbiting around sun.
    rotate(radiant) {

        let sinus = (Math.sin(radiant) * this.radious) + $(".sun").position().left;
        let cosinus = (Math.cos(radiant) * this.radious) + $(".sun").position().top;

        $(this.name).css("left",sinus+"px");
        $(this.name).css("top",cosinus+"px");

    }

}


//Planet's infos.
var sun = new Planet(".sun",70,70,0,0,0,"6.09×10^12 ㎢","1,989E30 kg","4.5 Billion","The Sun is the most prominent feature in our solar system. It is the largest object and contains approximately 98% of the total solar system mass. One hundred and nine Earths would be required to fit across the Sun's disk, and its interior could hold over 1.3 million Earths. The Sun's outer visible layer is called the photosphere and has a temperature of 6,000°C (11,000°F). This layer has a mottled appearance due to the turbulent eruptions of energy at the surface.","Sun");

var mercury = new Planet(".mercury",30,30,70,1,.02,"74.797.000 ㎢","3,285E23 kg","4.5 Billion","Mercury was named by the Romans after the fleet-footed messenger of the gods because it seemed to move more quickly than any other planet. It is the closest planet to the Sun, and second smallest planet in the solar system. Its diameter is 40% smaller than Earth and 40% larger than the Moon. It is even smaller than Jupiter's moon Ganymede and Saturn's moon Titan.","Mercury");

var venus = new Planet(".venus",30,30,110,-0.6,.017,"460.200.000 ㎢","4,867E24 kg","4.5 Billion","Venus, the jewel of the sky, was once know by ancient astronomers as the morning star and evening star. Early astronomers once thought Venus to be two separate bodies. Venus, which is named after the Roman goddess of love and beauty, is veiled by thick swirling cloud cover.","Venus");

var earth = new Planet(".earth",30,30,150,1,.013,"510.100.000 ㎢","5,972E24 kg","4.5 Billion","From the perspective we get on Earth, our planet appears to be big and sturdy with an endless ocean of air. From space, astronauts often get the impression that the Earth is small with a thin, fragile layer of atmosphere. For a space traveler, the distinguishing Earth features are the blue waters, brown and green land masses and white clouds set against a black background.","Earth");

var mars = new Planet(".mars",30,30,190,1.5,.01,"144.400.000 ㎢","6,39E23 kg","4.6 Billion","Mars is the fourth planet from the Sun and is commonly referred to as the Red Planet. The rocks, soil and sky have a red or pink hue. The distinct red color was observed by stargazers throughout history. It was given its name by the Romans in honor of their god of war. Other civilizations have had similar names. The ancient Egyptians named the planet Her Descher meaning the red one.","Mars");

var jupiter = new Planet(".jupiter",30,30,230,-0.6,.005,"6,142E10 ㎢","1,898E27 kg","4,6 Billion","Jupiter is the fifth planet from the Sun and is the largest one in the solar system. If Jupiter were hollow, more than one thousand Earths could fit inside. It also contains more matter than all of the other planets combined. It has a mass of 1.9 x 1027 kg and is 142,800 kilometers (88,736 miles) across the equator. Jupiter possesses 16 satellites, four of which - Callisto, Europa, Ganymede and Io - were observed by Galileo as long ago as 1610. There is a ring system, but it is very faint and is totally invisible from the Earth. (The rings were discovered in 1979 by Voyager 1.)","Jupiter");

var saturn = new Planet(".saturn",40,30,270,2.6,.004,"4,27E10 ㎢","5,683E26 kg","4,5 Billion","Saturn is the sixth planet from the Sun and is the second largest in the solar system with an equatorial diameter of 119,300 kilometers (74,130 miles). Much of what is known about the planet is due to the Voyager explorations in 1980-81. Saturn is visibly flattened at the poles, a result of the very fast rotation of the planet on its axis. Its day is 10 hours, 39 minutes long, and it takes 29.5 Earth years to revolve about the Sun.","Saturn");

var uranus = new Planet(".uranus",30,30,310,1.3,.003,"8,083E9 ㎢","8,681E25 kg","4,5 Billion","Uranus is the seventh planet from the Sun and is the third largest in the solar system. It was discovered by William Herschel in 1781. It has an equatorial diameter of 51,800 kilometers (32,190 miles) and orbits the Sun once every 84.01 Earth years. It has a mean distance from the Sun of 2.87 billion kilometers (1.78 billion miles). The length of a day on Uranus is 17 hours 14 minutes. Uranus has at least 15 moons. The two largest moons, Titania and Oberon, were discovered by William Herschel in 1787.","Uranus");

var neptune = new Planet(".neptune",30,30,350,-1,.002,"7,618E9 ㎢","1,024E26 kg","4,5 Billion","Neptune is the outermost planet of the gas giants. It has an equatorial diameter of 49,500 kilometers (30,760 miles). If Neptune were hollow, it could contain nearly 60 Earths. Neptune orbits the Sun every 165 years. It has eight moons, six of which were found by Voyager. A day on Neptune is 16 hours and 6.7 minutes. Neptune was discovered on September 23, 1846 by Johann Gottfried Galle, of the Berlin Observatory, and Louis d'Arrest, an astronomy student, through mathematical predictions made by Urbain Jean Joseph Le Verrier.","Neptune");

var planets = [sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune];




//All planet's movement starts.
function movePlanets(){

    for (let i = 0; i < planets.length; i++) {
        
        planets[i].radiant += planets[i].speed;
        planets[i].rotate(planets[i].radiant);

    }

    requestAnimationFrame(movePlanets);

}
window.requestAnimationFrame(movePlanets);



//Click counter
var click = 0;

//Planet tracker's interval
var tracker;
var trackerPan;


//Planet click behaviors
$(".planet").click(function(){
    
    //Zoom to planet class
    $(".planets").addClass("expand");
    var planet = $(this);
    
    //Find the equivalent of the clicked div in the planet class.
    for (let i = 0; i < planets.length; i++) {
        if (("." + planet.attr('class').split(' ')[1]) === planets[i].name){
            planets[i].infoSet()
        }
    }

    //Planet tracker function.
    function planetTracker(){
        x = (planet.position().left + trackerPan) + "px";
        y = planet.position().top + "px";
    
        $(":root").css("--x", x);
        $(":root").css("--y", y);
    
        requestAnimationFrame(planetTracker);
    }
    
    function closeInfo(){

        click--;
        cancelAnimationFrame(tracker);

        //Removal of effects applied to planets that were not clicked.
        $('.planet').not(this).each(function(){
            $(this).children().css("opacity","100%");
            $(this).removeClass("disable");
            $(this).children().removeClass("disable");
        });
        
        //Close info screen
        $(".planets").removeClass("expand");
        $(".info-container").css("opacity","0%");
        $(".info-container").on("transitionend",function(){
            $(this).css("display","none");
        })
    }

    //Click counter
    if (click === 0) {
        //Start tracker.
        tracker = window.requestAnimationFrame(planetTracker);
    
        click++;
    
        //Effects applied to planets that were not clicked.
        $('.planet').not(this).each(function(){
            $(this).children().css("opacity","10%");
            $(this).addClass("disable")
            $(this).children().addClass("disable")
        });
    
        //Show info screen
        $(".info-container").css("display","flex");
        $(".info-container").css("opacity","100%");

    
    }else{
        //Stop tracker and close info.
        closeInfo();
    }

    //Info close button.
    $(".close-button").unbind('click').click(function() {
        closeInfo();
    });
     
})


//Get planet's starting position and speed values.
var planetStartPosition = [];
var planetSpeed = [];
for (let i = 0; i < planets.length; i++) {
    planetStartPosition.push(planets[i].radiant);
    planetSpeed.push(planets[i].speed);
}


//Make planets's speed and position = 0.
var mobile = false;
function planetsMobileView(){  
    if (mobile === true){
        for (let i = 0; i < planets.length; i++) {
            planets[i].radiant = 0;
            planets[i].speed = 0;
            trackerPan = 0;
        }
    }else {
        for (let i = 0; i < planets.length; i++) {
            planets[i].radiant = planetStartPosition[i];
            planets[i].speed = planetSpeed[i];
            trackerPan = 300;
        }
    }
}


//Switch to mobile version
const media = () => {
    let q = matchMedia('(max-width: 700px)');
    if(q.matches){
        mobile = true;
        planetsMobileView();
        $(".space").css("height","95%");
    }else{
        mobile = false;
        planetsMobileView();
        $(".space").css("height","100%");
    }
}
onload = media;
window.onresize = media;


//Show menu button
$(".menu-button").click(function(){
    $(".menu").toggleClass("menu-opened");
})






//Version 1.0