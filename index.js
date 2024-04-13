


function cursorEffect(){
    var page1content=document.querySelector("#page1-content");
var cursor=document.querySelector('.cursor');

page1content.addEventListener("mousemove",function(event){
    gsap.to(cursor,{
        x:event.x,
        y:event.y
    })
});

page1content.addEventListener('mouseenter',function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1content.addEventListener('mouseleave',function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}

cursorEffect();


// scroller function

function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
}

locomotive();



function animationPage2() {
    gsap.from('.lowepart-page2>div>h1', {
        y: 120,
        stagger: 0.25,
        duration: 1,
        ease: "power1.inout",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2
        }
    });
}

animationPage2();




function animatio_page3(){
gsap.from("#page3>div>div>h1", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    ease: "power1.inout",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 50%",
        end: "top 37%",
        scrub: 2
    }
})
}
animatio_page3();







function page4_video_play() {
    var box1 = document.querySelector('.box1 video');
    var box1_img = document.querySelector('.box1 img');
    var box2 = document.querySelector('.box2 video');
    var box2_img = document.querySelector('.box2 img');
    var box3 = document.querySelector('.box3 video'); 
    var box3_img = document.querySelector('.box3 img'); 

    box1_img.addEventListener('mouseenter', function () {
        box1_img.style.zIndex=-1000;
        box1.play();
        box1.setAttribute('loop',true)
        box1.setAttribute('muted',true)
        
    });

    // If you want to pause the video when the mouse leaves the element
    box1.addEventListener('mouseleave', function () {
        box1_img.style.zIndex=1000;
        box1.pause();
        box1.removeAttribute('loop');
        box1.removeAttribute('muted');
    });

    // Repeat the pattern for box2
    box2_img.addEventListener('mouseenter', function () {
        box2_img.style.zIndex = -1000;
        box2.play();
        box2.setAttribute('loop',true);
        box2.setAttribute('muted',true)
    });

    box2.addEventListener('mouseleave', function () {
        box2_img.style.zIndex = 1000;
        box2.pause();
        box2.removeAttribute('loop');
        box2.removeAttribute('muted');
    });

    // Repeat the pattern for box3
    box3_img.addEventListener('mouseenter', function () {
        box3_img.style.zIndex = -1000;
        box3.play();
        box3.setAttribute('loop',true);
        
        box3.setAttribute('muted',true)
    });

    box3.addEventListener('mouseleave', function () {
        box3_img.style.zIndex = 1000;
        box3.pause();
        box3.removeAttribute('loop');
        box3.removeAttribute('muted');
    });
}

// Call the function to enable the event listeners
page4_video_play();



function page5_animation(){
    gsap.from(".page5-inner-span",{
        y:120,
        // opacity:0,
        duration:1,
        stagger:0.25,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            start:"top 40%",
            end:"top center",
            scrub:1
        }
    })
}

page5_animation();



function page6_cursor(){
    var page6=document.querySelector(".page6_over")
    var cursor_page6=document.querySelector('.page6_cursor');

    page6.addEventListener('mousemove',function(event){
        gsap.to(cursor_page6,{
        x:event.x,
        y:event.y
        })
    });


    page6.addEventListener('mouseenter',function(){
       gsap.to(cursor_page6,{
        scale:1,
        opacity:1
       })
    })

    page6.addEventListener('mouseleave',function(){
        gsap.to(cursor_page6,{
            scale:0,
            opacity:0
        })
    })
}

page6_cursor();


function page7_animation(){
    gsap.from(".page7-inner-span",{
        y:120,
        // opacity:0,
        duration:1,
        stagger:0.25,
        scrollTrigger:{
            trigger:"#page7",
            scroller:"#main",
            start:"top 40%",
            end:"top center",
            scrub:1
        }
    });



    gsap.from(".page7-div1>span",{
        y:120,
        // opacity:0,
        duration:1,
        stagger:0.25,
        scrollTrigger:{
            trigger:"#page7",
            scroller:"#main",
            start:"top 80%",
            end:"top center",
            scrub:1
        }
    })
}

page7_animation();



function swiper(){
    var swiper=new Swiper(".mySwiper",{
        slidesPerView:1,
        spaceBetween:30,
        loop:true,
        autoplay:{
            delay:2500,
            disableOnInteration:true,
        }
    })
}


swiper()



function loader(){


    var t1=gsap.timeline();
    t1.from(".loader>h3",{
        x:40,
        stagger:0.2,
        duration:1,
        opacity:0
    })


    t1.to(".loader>h3",{
        x:-40,
        stagger:0.1,
        duration:.7,
        opacity:0
    })
    
    t1.to(".loader",{
        opacity:0,
        duration:.3
    });

    t1.to(".loader",{
        display:"none"
    })


}

loader();



function page9animation(){

    gsap.from(".page9_h1",{
        y:120,
        // opacity:0,
        duration:1,

        scrollTrigger:{
            trigger:"#page9",
            scroller:"#main",
            start:"top 30%",
            end:"top 70%",
            scrub:1
        }
    })
}

page9animation();


function page10animation(){

    if (window.innerWidth<430) {
        var height=`70%`
    }

    else{
        var height=`20%`
    }

    gsap.from(".page10_lower_part>h1>span",{
        y:-350,
        stagger:0.3,
        // opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:"#page10",
            scroller:"#main",
            start:`top ${height}`,
            end:"top center",
            scrub:5
        }
    })
}

page10animation();

function menu(){
    var open_menu=document.querySelector(".open_menu");
    var close_menu=document.querySelector('.menu_close');
    var menu=document.querySelector("#menu");
    var video=document.querySelector(".first_part_menu>video")
    
    if(window.innerWidth<430){
        var hmob=350;
    }
    else{
        var hmob=430;
    }


    open_menu.addEventListener('click',function(){
        video.play();
        gsap.to(menu, {
            height: hmob,  // Set the target height
            duration: 1, // Animation duration in seconds
            ease: "power2.inOut", // Easing function
        });
    })


    close_menu.addEventListener("click", function () {
        video.pause();
        gsap.to(menu, {
            height: 0,  // Set the target height
            duration: 1, // Animation duration in seconds
            ease: "power2.inOut", // Easing function
        });
    });
}
menu();

