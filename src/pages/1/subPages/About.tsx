import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { Link } from "react-router-dom"
import TextHover from "../components/TextHover"

const h2Styles = {
    fontSize: '3rem',
    whiteSpace: 'pre-wrap',
    fontWeight: 'bold',
    lineHeight: '3rem'
}
const pStyles = {
    fontSize: '1rem',
}

const About = () => {
    const scope = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('#fixedText', { scale: 2, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: 'power1.out' })

        // Animation for scrolling down
        gsap.timeline({
            scrollTrigger: {
                trigger: scope.current,
                start: 'top top',
                end: '+=900 top',
                // markers: true,
                scrub: 1,
            }
        })
            .to('#fixedText', { scale: 0.8, opacity: 0.2 })

    }, { scope: scope, dependencies: [] })


    return (
        <section ref={scope} className="grid place-items-center w-screen min-h-screen routerChange">
            <Link to={'/1'} className="fixed top-10 right-10 text-sm">
                <TextHover text='CLOSE' isLink={true} />
            </Link>
            <section className='fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className="flex items-center justify-between text-[16vw] leading-6" id='fixedText'>
                    {`( INFO) `}
                </div>
            </section>
            <section className="mt-[105vh] max-w-[950px] pb-[40vh] px-8 bg-transparent flex flex-col justify-center items-center text-center space-y-10" >
                <h2 style={h2Styles}>INDEPENDANT DESIGNER &amp; DIRECTOR WORKING FOR AGENCIES AND BRANDS WORLDWIDE</h2>
                <p style={pStyles}>PAST EXPERIENCE<br />DESIGN DIRECTOR AT WORK AND CO, BROOKLYN ASSOCIATE DESIGN<br />DIRECTOR AT CODE AND THEORY,NEW YORK<br />CREATIVE LEAD AT DOMANI STUDIOS, NEW YORK</p>
                <h2 style={h2Styles}>BRANDING, DESIGN, MOTION, PRODUCT, DIRECTION, UX STRATEGY</h2>
                <p style={pStyles}>CLIENTS INCLUDE<br />ADIDAS, APPLE, BMW, CNN, CHASE, COMCAST, DEAN AND DELUCA, EQUINOX, GIVENCHY, HARLEY-DAVIDSON, IKEA, HILTON, JP MORGAN, LUXURY BRAND PARTNERS, MARRIOTT HOTELS, MERCEDES-BENZ, MC DONALDS, MINI, NBC, NEW ENGLAND AQUARIUM, NIKE, NINTENDO, SHAKE SHACK, UNDER ARMOUR</p>
                <h2 style={h2Styles}>ALWAYS PUTS AN EMPHASIS ON CREATING MEMORABLE EXPERIENCE THAT TRANSCENDS OBJECTIVES</h2>
                <ul className="space-y-5">
                    <li>Fast Company - Finalist in Retail and Fashion Categories<br />For Givenchy / November 2022</li>
                    <li>Webby Awards - Nominee in Corporate Communication<br />For Givenchy / November 2022</li>
                    <li>Indigo Awards - Gold in Digital Design 2022<br />For Givenchy / January 2022</li>
                    <li>Muse Awards - Gold in the E-commerce category<br />For Givenchy / January 2022</li>
                    <li>Muse Awards - Gold in the Retail Category<br />For Givenchy / January 2022</li>
                    <li>W3 Awards - Best User Interface<br />For Givenchy / January 2022</li>
                    <li>Emmy Awards - On-air Touch Screen for Data Visualization<br />For CNN MAGICWALL / January 2021</li>
                    <li>W3 Awards - Gold in Mobile Apps/Games<br />For MOTORTREND / January 2019</li>
                    <li>Webby Awards Honoree - Apps and Connected Products<br />For CNN MAGICWALL / January 2019</li>
                    <li>Webby Awards Nominee - Apps : Best Visual Design<br />For EQUINOX / January 2019</li>
                    <li>Shorty Awards - Audience Honor in Snapchat Presence<br />For NBC STAYTUNED / January 2018</li>
                    <li>Webby Awards Honoree - Social News &amp; Information<br />For NBC STAYTUNED / January 2018</li>
                    <li>Site of the Day - Awwwards<br />For R+CO / SEPTEMBER 2014</li>
                    <li>Selected Website - SITEINSPIRE<br />For R+CO / AUGUST 2014</li>
                    <li>Site of the Day - FDI<br />For R+CO / AUGUST 2014</li>
                    <li>Site of the Day - AWWWARDS<br />For GC WATCHES / JULY 2013</li>
                    <li>Site of the Day - FWA<br />FAR FROM THE TREE / FEBRUARY 2013</li>
                </ul>
                <h2 style={h2Styles}>*</h2>
                <h2 style={h2Styles}>OPEN FOR ENQUIRIES <br />REACH OUT</h2>
            </section >
        </section >

    )
}

export default About;