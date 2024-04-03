import { Link } from "react-router-dom"

let data = [
    {
        title: 'Gabriel Contassot',
        link: '/1',
        video: 'https://res.cloudinary.com/dxzcpxpuc/video/upload/v1712143704/Animation_-_3_April_2024_1_o1jzqp.mp4',
        remake: 'https://gabrielcontassot.com/'
    }
]
const App = () => {
    return (
        <main className="w-screen min-h-screen bg-[#1b1b1b] text-white">
            <h1 className="w-full text-center text-[7vw] leading-[7vw] p-4 font-bold tracking-wide uppercase">Animation</h1>
            <div className="px-4 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {data.map(el => (
                    <Link to={el.link} target="_blank" key={el.video}>
                        <div className="aspect-video">
                            <video src={el.video} className="rounded-3xl " autoPlay muted loop />
                        </div>
                    </Link>

                ))}
            </div>
        </main>
    )
}

export default App