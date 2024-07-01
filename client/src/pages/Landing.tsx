import { useRef, useEffect, useState } from "react";

// npm install @gsap/react
// npm i gsap
// npm i split-type
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'

// npm install tailwindcss@latest clsx tailwind-merge framer-motion
// npm i next-themes
import Particles from "/src/components/magicui/particles";
import GradualSpacing from "../components/magicui/gradual-spacing";
import { useTheme } from "next-themes";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, useScroll } from "framer-motion";
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// npm i swiper
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


function Landing() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    gsap.registerPlugin(ScrollTrigger);
    const splitTypes = document.querySelectorAll('.textScrollTrigger')
    splitTypes.forEach((char,i) => {
        const text = new SplitType(char, { type: 'chars'})
        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: char,
                start: 'top 90%',
                end: 'top 30%%',
                scrub: true,
                markers: false,
            },
            opacity: 0.3,
            stagger: 0.1,
        })
    })

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start","end end"]
    });

    useGSAP(
        () => {
            ScrollTrigger.create({
                trigger: '.goal-container',
                start: 'center center',
                end: '+=600',
                pin: true,
                markers: false,
            });
        },
        { scope: ref }
    );

    return (
        <>
            <div className="relative flex h-[100vh] bg-white w-full items-center justify-center overflow-hidden p-4">
                <div className="text-black z-10 p-0 flex justify-center items-center">
                    <div className="z-10">
                        <p className="bg-gradient-to-t from-green-400 to-main-sky to-40% bg-clip-text text-transparent text-[16rem] translate-y-5 translate-x-9 p-0 h-fit"> Just</p>
                        <p className="bg-gradient-to-t from-main-green to-main-sky bg-clip-text text-transparent text-[11rem] tracking-wider -translate-y-32 translate-x-9 p-0"> Learn</p>
                        <p className="text-main-purple text-3xl text-end -translate-y-44 p-0 h-fit"> Good subtext here </p>
                    </div>
                    <div className="w-[45vw] h-[60vh] rounded-xl p-1 bg-gradient-to-t from-main-green to-main-sky flex justify-center items-center">
                        <div className="bg-white rounded-xl w-full h-full relative">
                            <div></div>
                            <button className="bg-main-green text-white px-4 text-2xl absolute bottom-0 right-10 rounded-t-lg"> Login </button>
                        </div>
                    </div>
                </div>
                <Particles
                    className="absolute inset-0"
                    quantity={3000}
                    ease={300}
                    color={color}
                    refresh
                />
            </div>

            <div className="bg-white h-[80vh] flex flex-col justify-center items-center">
                <h2 className="bg-gradient-to-t from-[#F38F79] to-[#9E53FE] to-90% bg-clip-text text-transparent text-8xl font-bold"> What is JustLearn</h2>
                <p className="text-main-green w-[60%] text-4xl text-center textScrollTrigger">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor vel metus gravida consectetur. Vivamus blandit risus sapien, a commodo ipsum iaculis in. Praesent posuere rutrum ante, sit amet iaculis diam ornare sit amet. Suspendisse rutrum, risus ac tincidunt efficitur, erat urna accumsan felis, eu consectetur augue lectus id elit. Aliquam at dui placerat, scelerisque tellus accumsan, pharetra urna. Aenean venenatis lobortis purus sodales rutrum. Donec pretium, nisi ut </p>
            </div>

            <div ref={ref} className="h-[120vh] bg-neutral-50">
                <div className="goal-container bg-neutral-50  justify-center items-center flex flex-col gap-4 pb-8">
                    <GradualSpacing
                        className="font-display text-center tracking-[-0.1rem] bg-gradient-to-t from-[#2D4FC7] to-[#9E53FE] to-90% bg-clip-text text-transparent text-9xl font-bold p-2"
                        text="find your goal"
                    />
                    <div className="flex text-black w-full justify-center gap-3">
                        <div className=" flex flex-col gap-4">
                            <figure className="progress flex gap-2 justify-center items-center">
                                <svg id="progress" width="10" height="75" viewBox="0 0 10 75">
                                    <line
                                        x2="5"
                                        y2="0"
                                        x1="5"
                                        y1="200"
                                        className="stroke-gray-300 stroke-[3vw]"
                                    />
                                    <motion.line
                                        x2="5"
                                        y2="200"
                                        x1="5"
                                        y1="0"
                                        className="stroke-main-green stroke-[3vw]"
                                        style={{ pathLength: scrollYProgress }}
                                    />
                                </svg>
                                <div>
                                    <p className="text-3xl">SomeText here</p>
                                    <p className="font-light w-[90%]">Lorem Ipsum is simply dummy text and typesetting industry....</p>
                                </div>
                            </figure>
                        </div>
                        <div className=" bg-neutral-50 h-[50vh] w-[50vw] rounded-2xl border border-neutral-200"> Graph of Some Job</div>
                    </div>
                </div>
            </div>

            <div className="bg-white h-[80vh] justify-center items-center flex flex-col gap-4">
                <h2 className="bg-gradient-to-t from-[#2D4FC7] to-[#9E53FE] to-90% bg-clip-text text-transparent text-8xl font-bold p-2">Learn</h2>
                <div>Video Container</div>
            </div>

            <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-white">
                <h2 className="text-6xl text-center text-pink-500">ตรงนี้แสดง Course</h2>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 30,
                        modifier: 20,
                        slideShadows: true,
                    }}
                    pagination={true}
                    navigation={true}
                    // navigation={{
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    // className="bg-red-400"
                >
                    <SwiperSlide>
                        <CourseCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseCard/>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="bg-white flex flex-col justify-center items-center">
                <div className="w-full h-2 bg-gradient-to-r from-green-400 to-main-sky"/>
                <div className="h-72 w-full text-black">
                    @2024 nongmind2105 Software House
                </div>
                <div className="w-full h-2 bg-gradient-to-r from-green-400 to-main-sky"/>
            </div>
        </>
    );
}

function CourseCard(){
    return(
        <div className="rounded-xl w-full h-[230px] bg-gradient-to-t from-[#7D9DF0] to-[#AC75F4] p-4">
            <h3 className="text-5xl line-clamp-2 py-2"> Lorem Ipsum is simply dummy text </h3>
            <p className="font-light">skill : dfnvkfdv, fdvkdfvd, afvkndfvfvf, dfvdfv</p>
            <p className="font-light">knowledge : dfnvkfdv, fdvkdfvd, afvkndfvfvf, dfvdfv</p>
            <div className="grow"></div>
            <div className="w-full text-end">
                <button className="bg-white w-fit h-fit p-1 px-4 rounded-full text-purple-800 transition-all hover:scale-105">view this course</button>
            </div>
        </div>
    )
}

export default Landing