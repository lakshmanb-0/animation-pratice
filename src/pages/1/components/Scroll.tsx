import { useRef } from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type TScroll = {
    title: string,
    imageLink: string,
    color: string,
}
const Scroll: React.FC<{ data: TScroll }> = ({ data }) => {
    const scope = useRef<HTMLBodyElement>(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.timeline({
            scrollTrigger: {
                trigger: scope.current,
                // markers: true,
                start: window.innerWidth > 1024 ? 'center center' : 'top center',
                end: `+=${window.innerHeight * (window.innerWidth > 1024 ? 1.8 : 1.5)} center`,
                scrub: 1,
                onUpdate: (self) => {
                    const progressPercentage = Math.round(self.progress * 100);
                    progressPercentage == 0 && (gsap.to(scope.current?.getElementsByClassName('FixedBox')!, { display: 'none' }))
                    progressPercentage > 1 && (gsap.to(scope.current?.getElementsByClassName('FixedBox')!, { display: 'block' }))
                    progressPercentage > 86 && (gsap.to(scope.current?.getElementsByClassName('FixedBox')!, { display: 'none' }))
                },
            },
        })
            .to('#clipPathDiv', { clipPath: 'inset(0% 0px 0%)', scale: 1.2 })
            .to('#clipPathDiv', { clipPath: 'inset(0% 0px 100%)', scale: 1.3, })

    }, { scope: scope, dependencies: [] })

    const backgroundColorChange = (color: string) => {
        let element = document.getElementById('firstProject')
        element && (element.style.backgroundColor = color)
    }
    return (
        // <section className="relative w-full my-[130vh] md:my-[130vh] lg:my-[100vh] xl:my-[100vh] bg-transparent" ref={scope}>
        <section className="relative w-full my-[105vh] bg-transparent" ref={scope}>
            <h1 className="text-center text-[15vw] uppercase">{data.title}</h1>
            {/* <div className='hidden fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] w-4/5 sm:w-3/5 lg:w-1/3 xl:w-1/3 mx-auto overflow-hidden FixedBox' */}
            <div className='hidden fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[60vh] sm:h-[80vh] lg:h-[90vh] w-4/5 lg:w-1/3 mx-auto overflow-hidden FixedBox'
                id="FixedBox"
            >
                <img src={data.imageLink} alt={data.title} className="w-full h-full object-cover z-0"
                    id="clipPathDiv"
                    style={{ clipPath: 'inset(100% 0px 0%)', }}
                    onMouseEnter={() => backgroundColorChange(data.color)}
                    onMouseLeave={() => backgroundColorChange('black')} />
            </div>
        </section >
    )
}

export default Scroll