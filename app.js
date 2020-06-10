function init(params) {
    
    //Nav
    const hamburger = document.querySelector(".menu");
    const hamburgerLines = document.querySelectorAll(".menu line");
    const navOpen = document.querySelector(".nav-open");
    const contact = document.querySelector(".contact");
    const address = document.querySelector(".address");
    const logo = document.querySelector(".logo");
 
    const tl = new TimelineMax({ paused: true, reversed: true });
 
    tl.to(navOpen, 0.5, { y: 0 })
       .fromTo(
          contact,
          0.8,
          { opacity: 0, y: 0 },
          { opacity: 1, y: 30 },
          "-=0.5"
       )
       .fromTo(address, 0.8, { opacity: 0, y: 0 }, { opacity: 1, y: 30 }, "-=0.5")
       .fromTo(logo, 0.2, { color: "white" }, { color: "black" }, "-=1")
       .fromTo(
          hamburgerLines,
          0.2,
          { stroke: "white" },
          { stroke: "black" },
          "-=1"
       );
 
    hamburger.addEventListener("click", () => {
       tl.reversed() ? tl.play() : tl.reverse();
    });

}

init();