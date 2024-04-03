import { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Scroll from '../components/Scroll';
import { Link } from 'react-router-dom';
import TextHover from '../components/TextHover';

const Home = () => {
    const scope = useRef<HTMLDivElement>(null)

    let data = [
        {
            title: 'Givenchy',
            imageLink: 'https://cdn.sanity.io/images/mbttrbyl/production/4deceba7fbbfb685d55a0cd4eaaa6077e68135c9-2000x2500.jpg?q=60&auto=format',
            color: '#eeeeea'
        },
        {
            title: 'Replay',
            imageLink: 'https://cdn.sanity.io/images/mbttrbyl/production/ef3e1575c2c83d455d48d0cece290e2af704f5b7-2000x2500.jpg?q=60&auto=format',
            color: '#2a4655'
        },
        {
            title: 'Equinox',
            imageLink: 'https://cdn.sanity.io/images/mbttrbyl/production/947b09129d093a71b27c670a366038159da4c03d-1000x1250.jpg?q=60&auto=format',
            color: '#e71442'
        },
        {
            title: 'Sophie',
            imageLink: 'https://cdn.sanity.io/images/mbttrbyl/production/ca3bae94469a74660456f1e8ab395104446eb394-2000x2500.jpg?q=60&auto=format',
            color: '#262c29'
        },
        {
            title: 'Harley',
            imageLink: 'https://cdn.sanity.io/images/mbttrbyl/production/48404a0139bd362614834f55025a6aef8caa4b58-2000x2500.jpg?q=60&auto=format',
            color: '#994b36'
        },
        {
            title: 'Renew',
            imageLink: 'https://cdn.sanity.io/images/mbttrbyl/production/704e277065144efc4dc942cf409a1c1bce105f61-2000x2500.jpg?q=60&auto=format',
            color: '#202045'
        },
        {
            title: 'Originals',
            imageLink: 'https://cdn.sanity.io/images/mbttrbyl/production/c3f31ae29a626f9b779f8b29ad642166be277755-2000x2500.jpg?q=60&auto=format',
            color: '#1e2126'
        },
    ]

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        // Animation for scrolling down
        gsap.timeline({
            scrollTrigger: {
                trigger: '#fixedText',
                start: '-=250 top',
                end: 'bottom top',
                scrub: true,
            }
        })
            .to('#scrollDown', { opacity: 0, duration: 0.1, })
            .to('#fixedText', { scale: 0.7, opacity: 0.8, })

        // Animation for scrolling up
        gsap.timeline({
            scrollTrigger: {
                trigger: '#lastElement',
                start: '-=400 30%',
                end: 'center top',
                scrub: true,
            }
        })
            .to('#fixedText', { scale: 1 })
            .to('#scrollUp', { opacity: 1 })

    }, { scope: scope, dependencies: [] })

    return (
        <section className='h-full w-full routerChange' ref={scope} >
            <section className='fixed w-screen h-screen top-0 left-0 px-4 grid place-items-center '>
                <div className="[&>div]:flex [&>div]:items-center [&>div]:justify-between text-xl leading-6" id='fixedText'>
                    <div>
                        <TextHover text="GABRIEL CONTASSOT" />
                        <p>*</p>
                    </div>
                    <TextHover text="FREELANCE DESIGN DIRECTOR" />
                    <div>
                        <TextHover text="18.24" />
                        <p>--</p>
                        <TextHover text="SELECTED WORKS" />
                    </div>

                    <div className="mt-8">
                        <Link to={'/1/about'}>
                            <TextHover isLink={true} text="INFO" />
                        </Link>
                        <Link to={'/1/contact'}>
                            <TextHover isLink={true} text="CONTACT" />
                        </Link>
                    </div>
                </div>
            </section>

            <div>
                {data.map(item => (
                    <Scroll data={item} key={item.title} />
                ))}
            </div>
            <div className='h-[60rem]' id='lastElement' />
            <div className="fixed bottom-7 left-1/2 -translate-x-1/2 text-xs z-0" id='scrollDown'>SCROLL TO EXPLORE</div>
            <div className="fixed bottom-7 left-1/2 -translate-x-1/2 text-xs z-0 opacity-0" id='scrollUp'>SCROLL UP</div>
        </section>
    )
}

export default Home
