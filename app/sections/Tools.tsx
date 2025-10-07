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
    SiCss3,
    SiAntdesign,
    SiMui,
    SiVuetify,
    SiNodedotjs,
    SiExpress,
    SiNpm,
    SiPypi
} from "react-icons/si";
import Animated from "../animations/Animated";
import { useI18n } from "../i18n/I18nProvider";

const Tools = () => {
    const { t } = useI18n();
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={t("tools.title")}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[32px] md:leading-relaxed lg:mb-16 lg:w-[70%]">
                        <AnimatedBody delay={0.1} text={t("tools.languages")} />
                        <div className="grid grid-cols-5 gap-4 justify-items-center sm:grid-cols-6">
                            <Animated delay={0.1}>
                                <SiTypescript size={48} />
                            </Animated>
                            <Animated delay={0.2}>
                                <SiJavascript size={48} />
                            </Animated>
                            <Animated delay={0.3}>
                                <SiPython size={48} />
                            </Animated>
                            <Animated delay={0.4}>
                                <SiHtml5 size={48} />
                            </Animated>
                            <Animated delay={0.5}>
                                <SiCss3 size={48} />
                            </Animated>
                        </div>
                    </div>

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[32px] md:leading-relaxed lg:mb-16 lg:w-[70%]">
                        <AnimatedBody delay={0.2} text={t("tools.frameworks")} />
                        <div className="grid grid-cols-5 gap-4 justify-items-center sm:grid-cols-6">
                            <Animated delay={0.2}>
                                <SiReact size={48} />
                            </Animated>
                            <Animated delay={0.3}>
                                <SiNextdotjs size={48} />
                            </Animated>
                            <Animated delay={0.4}>
                                <SiVuedotjs size={48} />
                            </Animated>
                            <Animated delay={0.5}>
                                <SiNodedotjs size={48} />
                            </Animated>
                            <Animated delay={0.6}>
                                <SiExpress size={48} />
                            </Animated>
                        </div>
                    </div>

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[32px] md:leading-relaxed lg:mb-16 lg:w-[70%]">
                        <AnimatedBody delay={0.3} text={t("tools.ui")} />
                        <div className="grid grid-cols-4 gap-4 justify-items-center sm:grid-cols-6">
                            <Animated delay={0.3}>
                                <SiTailwindcss size={48} />
                            </Animated>
                            <Animated delay={0.4}>
                                <SiAntdesign size={48} />
                            </Animated>
                            <Animated delay={0.5}>
                                <SiMui size={48} />
                            </Animated>
                            <Animated delay={0.6}>
                                <SiVuetify size={48} />
                            </Animated>
                        </div>
                    </div>

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[32px] md:leading-relaxed lg:mb-16 lg:w-[70%]">
                        <AnimatedBody delay={0.4} text={t("tools.dataDevops")} />
                        <div className="grid grid-cols-5 gap-4 justify-items-center sm:grid-cols-6">
                            <Animated delay={0.4}>
                                <SiFirebase size={48} />
                            </Animated>
                            <Animated delay={0.5}>
                                <SiMysql size={48} />
                            </Animated>
                            <Animated delay={0.6}>
                                <SiGit size={48} />
                            </Animated>
                            <Animated delay={0.7}>
                                <SiGithub size={48} />
                            </Animated>
                            <Animated delay={0.8}>
                                <SiNpm size={48} />
                            </Animated>
                            <Animated delay={0.9}>
                                <SiPypi size={48} />
                            </Animated>
                        </div>
                    </div>

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[16px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-3 md:text-[20px] lg:mb-16 lg:w-[80%]">
                        <AnimatedBody
                            delay={0.5}
                            text={t("tools.capabilitiesTitle")}
                            className="text-[18px] font-bold md:text-[24px]"
                        />
                        <AnimatedBody
                            delay={0.55}
                            text={t("tools.capabilitiesBody")}
                        />
                    </div>

                    <div className="flex w-[100%] flex-col gap-4 text-[16px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:gap-3 md:text-[20px] lg:w-[60%]">
                        <AnimatedBody
                            delay={0.6}
                            text={t("tools.languagesProficiencyTitle")}
                            className="text-[18px] font-bold md:text-[24px]"
                        />
                        <AnimatedBody
                            delay={0.65}
                            text={t("tools.languagesProficiencyBody")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;


