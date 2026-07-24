/* ======================================
   K Portfolio
   script.js
====================================== */

// ==========================
// Loading Screen
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(() => {
                loader.style.display = "none";
            },800);

        },1500);

    }

});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// ==========================
// Navbar Shadow
// ==========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(header){

        header.style.boxShadow=
            window.scrollY>30
            ?"0 10px 25px rgba(0,0,0,.08)"
            :"none";

    }

});

// ==========================
// Active Navigation
// ==========================

const navLinks=document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>item.style.color="");

        link.style.color="#E989A5";

        // close mobile menu after a link is tapped
        if(navMenu&&navMenu.classList.contains("active")){

            navMenu.classList.remove("active");
            navToggle.textContent="☰";
            navToggle.setAttribute("aria-expanded","false");

        }

    });

});

// ==========================
// Mobile Nav Toggle
// ==========================

const navToggle=document.getElementById("navToggle");
const navMenu=document.getElementById("navLinks");

if(navToggle&&navMenu){

    navToggle.addEventListener("click",()=>{

        const isOpen=navMenu.classList.toggle("active");

        navToggle.textContent=isOpen?"✕":"☰";
        navToggle.setAttribute("aria-expanded",isOpen?"true":"false");

    });

}

// ==========================
// Fade In Sections
// ==========================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.2});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="1s";

    observer.observe(section);

});

// ==========================
// Floating Stars
// ==========================

const stars=document.querySelectorAll(".star");

if(stars.length){

    setInterval(()=>{

        stars.forEach(star=>{

            const x=Math.random()*8-4;
            const y=Math.random()*8-4;

            star.style.transform=`translate(${x}px,${y}px)`;

        });

    },1000);

}

// ==========================
// Typing Effect
// ==========================

const title=document.querySelector(".hero h2");

if(title){

    const text="Aspiring UI/UX Designer";

    let i=0;

    title.textContent="";

    function type(){

        if(i<text.length){

            title.textContent+=text.charAt(i);

            i++;

            setTimeout(type,70);

        }

    }

    setTimeout(type,1800);

}

// ==========================
// Cursor Glow
// ==========================

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="20px";
glow.style.height="20px";
glow.style.borderRadius="50%";
glow.style.background="rgba(248,182,200,.35)";
glow.style.pointerEvents="none";
glow.style.transform="translate(-50%,-50%)";
glow.style.transition="0.08s";
glow.style.zIndex="999";

document.body.appendChild(glow);

document.addEventListener("mousemove",e=>{

    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";

});

// ==========================
// Pixel Card Tilt
// ==========================

const card=document.querySelector(".pixel-window");

if(card){

    card.style.transition="transform .25s";

    card.addEventListener("mousemove",e=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*10;
        const rotateX=((y/rect.height)-0.5)*-10;

        card.style.transform=
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=
        "perspective(900px) rotateX(0) rotateY(0) scale(1)";

    });

}

console.log("🌸 Welcome to K Portfolio 🌸");