import { useRef } from "react"
import { Link } from "react-router-dom"
import TextHover from "../components/TextHover"

const Contact = () => {
    const scope = useRef<HTMLElement>(null)
    return (
        <section ref={scope} className="grid place-items-center text-center w-screen min-h-screen routerChange">
            <Link to={'/1'} className="fixed top-10 right-10 text-sm"  >
                <TextHover text='CLOSE' isLink={true} />
            </Link>
            <section className='text-[15vw] leading-[14vw]'>
                <TextHover text='EMAIL' isLink={true} />
                <TextHover text='LINKEDIN' isLink={true} />
            </section>
        </section >
    )
}

export default Contact;