import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { useI18n } from "../i18n/I18nProvider";

const Hero = () => {
    const { t } = useI18n();
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />
            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
                <div
                    className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
                >
                    <AnimatedTitle
                        text={t("hero.title")}
                        className={
                            "mb-6 text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-10 md:text-[60px] lg:text-[80px]"
                        }
                        wordSpace={"mr-[10px]"}
                        charSpace={"mr-[0.001em]"}
                    />
                    <AnimatedBody
                        text={t("hero.subtitle")}
                        className="max-w-[780px] text-center text-[18px] font-medium leading-relaxed text-[#e4ded7] md:text-[20px] lg:text-[22px]"
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;

