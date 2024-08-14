const heroImage=document.querySelector("#hero__animation__img");

const tl=document.querySelector("#grid__tl");
const tr=document.querySelector("#grid__tr");
const bl=document.querySelector("#grid__bl");
// const br=document.querySelector("#grid__br");


const tlBtn=document.querySelector("#grid__tl__btn");
const trBtn=document.querySelector("#grid__tr__btn");
const blBtn=document.querySelector("#grid__bl__btn");
const brBtn=document.querySelector("#grid__br__btn");


const tlContent=document.querySelector("#grid__tl__content");
const trContent=document.querySelector("#grid__tr__content");
const blContent=document.querySelector("#grid__bl__content");
const brContent=document.querySelector("#grid__br__content");

/projects/ 
const projectOne=document.querySelector(".p-1");
const projectTwo=document.querySelector(".p-2");
const projectThree=document.querySelector(".p-3");
const projectFour=document.querySelector(".p-4");
const projectFive=document.querySelector(".p-5");
const projectSix=document.querySelector(".p-6");



const bgColor="var(--bg)";
const bgColorAlt="var(--bg-alt)";
const textColor="var(--text)";
const textColorAlt="var(--text-alt)";

let tlActive="translateX(5vw) translateY(0)";
let tlHidden="translateX(-200vw) translateY(-200vh)";

let trActive="translateX(-5vw) translateY(0)";
let trHidden="translateX(200vw) translateY(-200vh)";

let blActive="translateX(10vw) translateY(7vh)";
let blHidden="translateX(-100vw) translateY(100vh)";

let brActive="translateX(-5vw) translateY(0)";
let brHidden="translateX(100vw) translateY(100vh)";



let activeCorner="";


window.addEventListener("resize",handleWindowResize);

//handling the size  

function handleWindowResize(){
switch(activeCorner){
case "top-left":
if(window.innerWidth<=1100){
tlActive="translateX(0vw) translateY(0)";
tlContent.style.transform=tlActive
tlContent.style.width="100vw";
tlContent.style.height="100vh";
tlContent.style.top="0";
tlContent.style.display="flex";
tlContent.style.alignItems="center";
tlContent.style.justifyContent="center";
tlContent.style.background="var(--bg-transparent)";
tlContent.style.zIndex="200";
tlBtn.style.zIndex="300";
trBtn.style.zIndex="100";
blBtn.style.zIndex="100";
brBtn.style.zIndex="100";


}else{
    tlActive="translateX(5vw) translateY(0)";
    tlContent.style.transform="translateX(5vw) translateY(0)";
    tlContent.style.width="30vw";
    tlContent.style.height="0";
    tlContent.style.top="10vh";
    tlContent.style.display="block";
}
break;
case "top-right":
    if(window.innerWidth<=1100){
        trActive="translateX(0vw) translateY(0)";
        trContent.style.transform=trActive
        trContent.style.width="100vw";
        trContent.style.margin="0 0 1rem";
        trContent.style.height="100vh";
        trContent.style.top="0";
        trContent.style.display="flex";
        trContent.style.alignItems="center";
        trContent.style.justifyContent="center";
        trContent.style.background="var(--bg-transparent)";
        trContent.style.zIndex="200";
        trBtn.style.zIndex="300";
        tlBtn.style.zIndex="100";
        blBtn.style.zIndex="100";
        brBtn.style.zIndex="100";
        
        
        }else{
            trActive="translateX(-5vw) translateY(0)";
            trContent.style.transform="translateX(-5vw) translateY(0)";
            trContent.style.width="30vw";
            trContent.style.height="0";
            trContent.style.top="10vh";
            trContent.style.display="block";
        }

break;
case "bottom-left":

if(window.innerWidth<=600){
    blActive="translateX(0vw) translateY(0)";
    blContent.style.transform=blActive
    blContent.style.width="100vw";
    blContent.style.height="100vh";
    blContent.style.top="0";
    blContent.style.display="flex";
    blContent.style.alignItems="center";
    blContent.style.justifyContent="center";
    blContent.style.background="var(--bg-transparent)";
    blContent.style.zIndex="200";
    trBtn.style.zIndex="100";
    tlBtn.style.zIndex="100";
    blBtn.style.zIndex="300";
    brBtn.style.zIndex="100";
    projectOne.style.width="70%";
    projectOne.style.margin="auto auto 0.5rem";
    projectTwo.style.width="70%";
    projectTwo.style.margin="auto auto 0.5rem";
    projectThree.style.width="70%";
    projectThree.style.margin="auto auto 0.5rem";
    projectFour.style.width="70%";
    projectFour.style.margin="auto auto 0.5rem";
    projectFive.style.width="70%";
    projectFive.style.margin="auto auto 0.5rem";
    projectSix.style.width="70%";
    projectSix.style.margin="auto auto 0.5rem";
    
    
    }else if(window.innerWidth<=1100){
        blActive="translateX(0vw) translateY(0)";
    blContent.style.transform=blActive
    blContent.style.width="100vw";
    blContent.style.height="100vh";
    blContent.style.top="0";
    blContent.style.display="flex";
    blContent.style.alignItems="center";
    blContent.style.justifyContent="center";
    blContent.style.background="var(--bg-transparent)";
    blContent.style.zIndex="200";
    trBtn.style.zIndex="100";
    tlBtn.style.zIndex="100";
    blBtn.style.zIndex="300";
    brBtn.style.zIndex="100";
    projectOne.style.width="40%";
    projectOne.style.margin="auto auto 0.5rem";
    projectTwo.style.width="40%";
    projectTwo.style.margin="auto auto 0.5rem";
    projectThree.style.width="40%";
    projectThree.style.margin="auto auto 0.5rem";
    projectFour.style.width="40%";
    projectFour.style.margin="auto auto 0.5rem";
    projectFive.style.width="40%";
    projectFive.style.margin="auto auto 0.5rem";
    projectSix.style.width="40%";
    projectSix.style.margin="auto auto 0.5rem";
    
    }
    else{
        blActive="translateX(10vw) translateY(3vh)";
        blContent.style.transform="translateX(10vw) translateY(3vh)";
        blContent.style.width="15rem";
        blContent.style.height="0";
        blContent.style.top="40vh";
        blContent.style.display="block";
    projectOne.style.width="100%";
 
    projectTwo.style.width="100%";

    projectThree.style.width="100%";
    projectFour.style.width="100%";
    projectFive.style.width="100%";
    projectSix.style.width="100%";
   

    }

break;

case "bottom-right":
    if(window.innerWidth<=1100){
        brActive="translateX(0vw) translateY(0)";
        brContent.style.transform=brActive
        brContent.style.width="100vw";
      
        brContent.style.height="100vh";
        brContent.style.bottom="0";
        brContent.style.display="flex";
        brContent.style.flexDirection="column";
        brContent.style.alignItems="center";
        brContent.style.justifyContent="center";
        brContent.style.background="var(--bg-transparent)";
        brContent.style.zIndex="200";
        trBtn.style.zIndex="100";
        tlBtn.style.zIndex="100";
        blBtn.style.zIndex="100";
        brBtn.style.zIndex="300";
        
        
        }else{
            brActive="translateX(-5vw) translateY(0)";
            brContent.style.transform="translateX(-5vw) translateY(0)";
            brContent.style.width="30vw";
            brContent.style.height="0";
            brContent.style.bottom="30vh";
            brContent.style.display="block";
        }

break;
default:
}
}


let lastReverseAnimation="";
 
//animation functions 

function playAnimation(animation,reverseAnimation){
    heroImage.className="";
if(lastReverseAnimation!==""){

    heroImage.classList.add(lastReverseAnimation);
    setTimeout(() => {
        heroImage.classList.remove(lastReverseAnimation)
        heroImage.classList.add(animation);
        lastReverseAnimation=reverseAnimation
    }, 200);
}else{
    heroImage.classList.add(animation)
    lastReverseAnimation=reverseAnimation;
}

};

function playClosingAnimation(reverseAnimation){
tlBtn.innerHTML="About"
trBtn.innerHTML="Skills"
blBtn.innerHTML="Projects"
brBtn.innerHTML="Contact"

switch (activeCorner){

    case "top-left":
        tlBtn.style.background=bgColor;
        tlBtn.style.color=textColor;
        tlContent.style.transform=tlHidden;
    break;

    case "top-right":
        trBtn.style.background=bgColor;
        trBtn.style.color=textColor;
        trContent.style.transform=trHidden;
    break;

    case "bottom-left":
        blBtn.style.background=bgColor;
        blBtn.style.color=textColor;
        blContent.style.transform=blHidden;
    break;
    case "bottom-right":
        brBtn.style.background=bgColor;
        brBtn.style.color=textColor;
        brContent.style.transform=brHidden;
    break;

   
    default:
}
heroImage.className="";
lastReverseAnimation="";
activeCorner="";
heroImage.classList.add(reverseAnimation);
setTimeout(() => {
    heroImage.classList.remove(reverseAnimation);
}, 200);
};

tlBtn.onclick=function(){
    if(activeCorner==="top-left"){
        playClosingAnimation("reverse-animate-top-left")
    }else{
        trBtn.innerHTML="Skills"
        blBtn.innerHTML="Projects"
        brBtn.innerHTML="Contact"

        activeCorner="top-left";
    tlBtn.innerHTML="&uarr;<br/>About";
handleWindowResize();
playAnimation("animate-top-left","reverse-animate-top-left");


//change backgroundcolor

trBtn.style.background=bgColor;
brBtn.style.background=bgColor;
blBtn.style.background=bgColor;
tlBtn.style.background=bgColorAlt;

//change text color
trBtn.style.color=textColor;
brBtn.style.color=textColor;
blBtn.style.color=textColor;
tlBtn.style.color=textColorAlt;

//change postions of corner content

trContent.style.transform=trHidden;
brContent.style.transform=brHidden;
blContent.style.transform=blHidden;
tlContent.style.transform=tlActive;



    }
}


trBtn.onclick=function(){
    if(activeCorner==="top-right"){
        playClosingAnimation("reverse-animate-top-right")
    }else{

        tlBtn.innerHTML="About"
        blBtn.innerHTML="Projects"
        brBtn.innerHTML="Contact"


        activeCorner="top-right";
    trBtn.innerHTML="&uarr;<br/>Skills";
handleWindowResize();
playAnimation("animate-top-right","reverse-animate-top-right");


//change backgroundcolor

trBtn.style.background=bgColorAlt;
brBtn.style.background=bgColor;
blBtn.style.background=bgColor;
tlBtn.style.background=bgColor;

//change text color
trBtn.style.color=textColorAlt;
brBtn.style.color=textColor;
blBtn.style.color=textColor;
tlBtn.style.color=textColor;

//change postions of corner content

trContent.style.transform=trActive;
brContent.style.transform=brHidden;
blContent.style.transform=blHidden;
tlContent.style.transform=tlHidden;



    }
};



blBtn.onclick=function(){
    if(activeCorner==="bottom-left"){
        playClosingAnimation("reverse-animate-bottom-left")
    }else{

        tlBtn.innerHTML="About"
        trBtn.innerHTML="Skills"
        brBtn.innerHTML="Contact"


        activeCorner="bottom-left";
        blBtn.innerHTML="Projects<br/>&darr;";
handleWindowResize();
playAnimation("animate-bottom-left","reverse-animate-bottom-left");


//change backgroundcolor

trBtn.style.background=bgColor;
brBtn.style.background=bgColor;
blBtn.style.background=bgColorAlt;
tlBtn.style.background=bgColor;

//change text color
trBtn.style.color=textColor;
brBtn.style.color=textColor;
blBtn.style.color=textColorAlt;
tlBtn.style.color=textColor;

//change postions of corner content

trContent.style.transform=trHidden;
brContent.style.transform=brHidden;
blContent.style.transform=blActive;
tlContent.style.transform=tlHidden;



    }
};


brBtn.onclick=function(){
    if(activeCorner==="bottom-right"){
        playClosingAnimation("reverse-animate-bottom-right")
    }else{

        tlBtn.innerHTML="About"
        blBtn.innerHTML="Projects"
        trBtn.innerHTML="Skills"


        activeCorner="bottom-right";
    brBtn.innerHTML="Contact<br/>&darr;";
handleWindowResize();
playAnimation("animate-bottom-right","reverse-animate-bottom-right");


//change backgroundcolor

trBtn.style.background=bgColor;
brBtn.style.background=bgColorAlt;
blBtn.style.background=bgColor;
tlBtn.style.background=bgColor;

//change text color
trBtn.style.color=textColor;
brBtn.style.color=textColorAlt;
blBtn.style.color=textColor;
tlBtn.style.color=textColor;

//change postions of corner content

trContent.style.transform=trHidden;
brContent.style.transform=brActive;
blContent.style.transform=blHidden;
tlContent.style.transform=tlHidden;



    }
}