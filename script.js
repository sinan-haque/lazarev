// function locolotiveAnimation(){
//     gsap.registerPlugin(ScrollTrigger);


// // --- SETUP START ---
// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.defaults({ scroller: "#main" });
// // --- SETUP END ---



// // // --- RED PANEL ---
// // gsap.from(".line-1", {
// //   scrollTrigger: {
// //     trigger: ".line-1",
// //     scrub: true,
// //     start: "top bottom",
// //     end: "top top",
// //     onUpdate() {
// //       console.log("Update")
// //     }
// //   },
// //   scaleX: 0,
// //   transformOrigin: "left center", 
// //   ease: "none"
// // });


// // // --- ORANGE PANEL ---
// // gsap.from(".line-2", {
// //   scrollTrigger: {
// //     trigger: ".orange",
// //     scrub: true,
// //     pin: true,
// //     start: "top top",
// //     end: "+=100%",
// //     onUpdate() {
// //       console.log("Update")
// //     }
// //   },
// //   scaleX: 0, 
// //   transformOrigin: "left center", 
// //   ease: "none"
// // });


// // // --- PURPLE/GREEN PANEL ---
// // var tl = gsap.timeline({
// //     scrollTrigger: {
// //       trigger: ".purple",
// //       scrub: true,
// //       pin: true,
// //       start: "top top",
// //       end: "+=100%",
// //       onUpdate() {
// //         console.log("Update")
// //       }
// //     }
// //   });

// // tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
// //   .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
// //   .to(".purple", {backgroundColor: "#28a92b"}, 0);





// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }
// locolotiveAnimation();

function navAnimation(){

const nav=document.querySelector('nav')
nav.addEventListener('mouseenter',function(){
    const tl=gsap.timeline()
    tl.to('#nav-bottom',{
        height:'21vh'
    })
    tl.to('.sub-nav h5',{
        display:'block',
        duration:0.1
    })
    tl.to('.sub-nav h5 span',{
        y:20,
        stagger:{
            amount:0.0001
        }
    })
})


nav.addEventListener('mouseleave',function(){
    const tl=gsap.timeline()

    tl.to('.sub-nav h5 span',{
           y:25,
           stagger:{
            amount:0.2
           }
    })

    tl.to('.sub-nav h5',{
        display:'none',
        duration:0.1
    })

    tl.to('#nav-bottom',{
        height:0,
        duration:0.2
        
    })

})
}
navAnimation();

function page2Animation(){
    
const rightElems = document.querySelectorAll('.right-elem')

rightElems.forEach(function(elem){

    elem.addEventListener('mouseenter',function(){
        elem.childNodes[3].style.opacity=1;
        elem.childNodes[3].style.scale=1;

    })
    elem.addEventListener('mouseleave',function(){
        elem.childNodes[3].style.opacity=0;
        elem.childNodes[3].style.scale=0;  
    })
    elem.addEventListener('mousemove',function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x-elem.getBoundingClientRect().x-70,
            y:dets.y-elem.getBoundingClientRect().y-140
        })
    })

})
}
page2Animation();

function page3animation(){
    const page3Center = document.querySelector('.page3-center')
const video = document.querySelector('#page3 video')

page3Center.addEventListener('click',function(){
    video.play()
    gsap.to(video,{
        transform:'scaleX(1) scaleY(1)',
        opacity:1,
        borderRadius:0
    })

})
video.addEventListener('click',function(){
    video.pause()
    gsap.to(video,{
        transform:'scaleX(0.7) scaleY(0)',
        opacity:0,
        borderRadius:'30px'
    })

})


}
page3animation();

// loading ANIMATION 

var tl=gsap.timeline()
tl.from('#page1',{
    opacity:0,
    duration:0.3,
    delay:0.2
})
tl.from('#page1',{
    transform:'scaleX(0.7) scaleY(0) translateY(80%)',
     borderRadius:'20%',
     duration:2,
     ease:'expo.out'
})
tl.from('nav',{
    opacity:0,
    delay:-2.0
})
tl.from('#page1 h1 ,#page1 p ,#page1 div',{
    opacity:0,
    duration:0.2,
    stagger:0.3
})