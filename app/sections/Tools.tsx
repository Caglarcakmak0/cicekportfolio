import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
    SiGit,
    SiGithub,
    SiMysql,
    SiJavascript, 
    SiNextdotjs, 
    SiReact, 
    SiTypescript,
    SiVuedotjs,
    SiTailwindcss,
    SiFirebase,
    SiPython,
    SiHtml5,
    SiCss3
} from "react-icons/si";
import Animated from "../animations/Animated";

const Tools = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"KULLANDIĞIM ARAÇLAR"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
                   
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Diller" />
                        <div className="grid grid-cols-5 gap-4">
                            <Animated delay={0.2}>
                                <SiTypescript size={50}/>
                            </Animated>
                            <Animated delay={0.3}>
                                <SiJavascript size={50}/>
                            </Animated>
                            <Animated delay={0.4}>
                                <SiHtml5 size={50}/>
                            </Animated>
                            <Animated delay={0.5}>
                                <SiCss3 size={50}/>
                            </Animated>
                            <Animated delay={0.6}>
                                <SiPython size={50}/>
                            </Animated>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="Framework'ler" />
                        <div className="grid grid-cols-5 gap-4">
                            <Animated delay={0.3}>
                                <SiReact size={50}/>
                            </Animated>
                            <Animated delay={0.4}>
                                <SiNextdotjs size={50}/>
                            </Animated>
                            <Animated delay={0.5}>
                                <SiVuedotjs size={50}/>
                            </Animated>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="UI Kütüphaneleri" />
                        <div className="grid grid-cols-5 gap-4">
                            <Animated delay={0.4}>
                                <SiTailwindcss size={50}/>
                            </Animated>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.5} text="Veritabanları & Araçlar" />
                        <div className="grid grid-cols-5 gap-4">
                            <Animated delay={0.5}>
                                <SiMysql size={50}/>
                            </Animated>

                            <Animated delay={0.6}>
                                <SiFirebase size={50}/>
                            </Animated>
                            <Animated delay={0.7}>
                                <SiGithub size={50}/>
                            </Animated>
                            <Animated delay={0.8}>
                                <SiGit size={50}/>
                            </Animated>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    );
};

export default Tools;

