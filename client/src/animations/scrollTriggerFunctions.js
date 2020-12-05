import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const animateOnScroll = () => {   
    gsap.registerPlugin(ScrollTrigger);
   
    let tl = gsap.timeline()
    tl.from('.content', {
        y: "-30%",
        opacity: 0,
        duration: 2,
        ease: "Power4.easeOut"
    })
    tl.from('.staggeredEntrance', {
        y: "-50",
        opacity: 0,
        stagger: 0.3,
        duration: 2,
        ease: "Power4.easeOut"
    }, "-=1.5")
    tl.from('.hero-design', {
        opacity: 0,
        y: 50,
        ease: "Power4.easeOut",
        duration: 1
    }, "-=2")
    gsap.from(".square-anim", {
        stagger: .2,
        scale: 0.1,
        duration: 2.5,
        // ease: "back.out(1.7)"
        ease: "elastic.out(1, 0.3)"
    })
    gsap.from(".transition2", {
        scrollTrigger:{
            trigger: ".transition2",
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3
        }
    )

    gsap.from(".transition3", {
        scrollTrigger:{
            trigger: ".transition3",
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3
        }
    )

    gsap.from(".portfolio-left-4", {
        scrollTrigger:{
            trigger: ".transitionLeft4",
            start: "top 90%",
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        }
    )
    gsap.from(".transitionRight4", {
        scrollTrigger:{
            trigger: ".transitionRight4",
            start: "top 90%",
        },
        x: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3
        }
    )



    gsap.from(".portfolio-left-5", {
        scrollTrigger:{
            trigger: ".transitionLeft5",
            start: "top 90%",
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        }
    )
    gsap.from(".transitionRight5", {
        scrollTrigger:{
            trigger: ".transitionRight5",
            start: "top 90%",
        },
        x: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3
        }
    )

    gsap.from(".portfolio-left-6", {
        scrollTrigger:{
            trigger: ".transitionLeft6",
            start: "top 90%",
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3
        }
    )

    gsap.from(".transitionRight6", {
        scrollTrigger:{
            trigger: ".transitionRight6",
            start: "top 90%",
        },
        x: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3
        }
    )
}