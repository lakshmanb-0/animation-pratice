import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";

const Project1 = ({ children }: { children: React.ReactNode }) => {
  const [number, setNumber] = useState(1)
  const scope = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = "Gabriel Contassot";
    new LocomotiveScroll();
  }, [])

  useGSAP(() => {
    gsap.fromTo('.preloader', { x: 0 }, {
      x: '100%', duration: 3, ease: 'power1.inOut',
      onUpdate: function () { setNumber(Math.round(this.progress() * 100)) },
      onComplete: () => setNumber(101)
    })
  }, { scope: scope, dependencies: [] })

  return (
    <main className="w-screen min-h-screen bg-black text-white font-questrial overflow-hidden transition-colors duration-1000 ease-in-out" id='firstProject' ref={scope}>
      {number == 101
        ? children
        : <section className="w-screen h-screen grid place-items-center">
          <div className=" w-full px-10">
            <p className="preloader">{number}</p>
          </div>
        </section>}
    </main>
  )
}

export default Project1