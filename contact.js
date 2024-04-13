
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

function redirectTo(url) {
  window.location.href = url;
}