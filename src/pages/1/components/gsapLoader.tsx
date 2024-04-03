import gsap from "gsap";

export const gsapLoader = () => {
    return gsap.to(".routerChange", { opacity: 0, duration: 0.5, onComplete: () => window.scrollTo({ top: 0 }) });
};