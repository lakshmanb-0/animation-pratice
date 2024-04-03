import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import TextPlugin from "gsap/TextPlugin"
import { useRef, useState } from "react"

const TextHover = ({ text, isLink, delay }: { text: string, isLink?: boolean, delay?: number }) => {
    const scope = useRef<HTMLParagraphElement>(null)
    const [isHover, setIsHover] = useState(true)

    useGSAP(() => {
        gsap.registerPlugin(TextPlugin)
        gsap.to(scope.current, { text: `${text.split("").reverse().join("")}`, duration: 0.1, ease: 'power1.out', delay: delay ?? 0 })
        gsap.to(scope.current, { text: text, duration: 0.7, delay: delay ?? 0 + 0.1, ease: 'power1.out' })

    }, { scope: scope, dependencies: [isHover] })

    return (
        <p ref={scope} className="" onMouseEnter={() => { isLink && setIsHover(!isHover) }}></p>
    )
}

export default TextHover