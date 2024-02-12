import Card from "./card"
import teacherRafael from '../assets/img/teacher1.jpg'
import teacherArthur from '../assets/img/teacher2.png'
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Main() {
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <main>
            <div data-aos="fade-right" data-aos-duration="3000" className="text-center mt-10 mb-10">
                <h1 className="text-4xl text-zinc-100 font-[600]">Conheça a nossa trilha de cursos!</h1>
                <p className="text-zinc-500 px-1 w-full text-center max-w-xl mx-auto mt-5">
                    Acompanhe de perto a diversidade de tópicos e áreas de conhecimento explorados em cada curso disponível em nossa plataforma, proporcionando uma visão abrangente e detalhada do conteúdo oferecido.
                </p>
                <div className="flex items-center justify-center gap-3 mt-6">
                    <a className="text-white transition delay-75 bg-transparent border border-[rgb(58,0,119)] hover:bg-[rgb(58,0,119)] p-2 rounded-full text-3xl" href="https://instagram.com/owerestacademy"><FaInstagram /></a>
                    <a className="text-white transition delay-75 bg-transparent border border-[rgb(58,0,119)] hover:bg-[rgb(58,0,119)] p-2 rounded-full text-3xl" href="https://t.me/+I42abDrX9m02YmMx"><FaTelegramPlane /></a>
                </div>
            </div>

            <div data-aos="fade-right" data-aos-duration="3000" className="flex flex-col lg:flex-row items-center justify-center lg:gap-8 mx-4 lg:mx-0">
                <Card
                    imageUrl="https://wallpapercave.com/wp/wp7794551.jpg"
                    title="Formação em Cibersegurança"
                    teacherPhoto={teacherRafael}
                    teacherName="Rafael Romão"
                    teacherPosition="CEO da Owerest Academy"
                    url="/embreve"
                    className="lg:w-1/2"
                    data-aos="fade-left"
                />
                <Card
                    imageUrl="https://media.discordapp.net/attachments/1201539208477691954/1206316820026368050/OIG1.png?ex=65db9116&is=65c91c16&hm=4c50f3c3419712012a50829e4159fefda04945982324c448753113154b748b35&=&format=webp&quality=lossless&width=559&height=559"
                    title="Formação em Design UI/UX"
                    teacherPhoto={teacherArthur}
                    teacherName="Arthur Mendes"
                    teacherPosition="Co-Fundador da Owerest Academy"
                    url="/trilha/design"
                    className="lg:w-1/2"
                />
            </div>
        </main>
    )
}
