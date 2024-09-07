


function page1Animation(){
    var tl=gsap.timeline();
tl.from("nav h1,nav h4,nav button",{
    y:-30,
    opacity:0,
    delay:1,
    duration:0.6,
    stagger:0.3
})
tl.from(".center-part1 h1,.center-part1 p",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:0.3
})
tl.from(".center-part1 button",{
    y:-20,
    opacity:0,
    duration:1
})
tl.from(".center-part2 img",{
    x:30,
    opacity:0,
    duration:0.5
},"-=3")

tl.from(".section1bottom h3",{ 
    y:30,
    opacity:0,
    duration:0.6,
    stagger:0.15
})
}
 function page2Animation(){
    gsap.from(".services",{
        x:30,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".services h3",
            scroller:"body",
            start:"top 50%",
            end:"top -50%"
        }
    
    })
    let tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",
            end:"top -50%",
            scrub:2,
    
        }
    })
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:4,
        stagger:0.3
    },"ratan")
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:4,
        stagger:0.3
    },"ratan")
}
page1Animation()

page2Animation()