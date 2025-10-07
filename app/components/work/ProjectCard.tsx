import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React from "react";
// removed unused icon imports

const ProjectCard = ({
    id,
    name,
    description,
    technologies,
    techNames,
    techLinks,

    image,
    available,
}: ProjectProps) => {
    const isEvenProject = id % 2 === 0;

    return (
        <motion.div
            className="relative z-10 w-full"
            initial="initial"
            animate="animate"
        >
            <Container
                width="100%"
                height="auto"
                borderRadius={25}
                color="rgba(255, 255, 255, 0.1)"
                blur={false}
                grain
                top={0}
                left={0}
                angle={0}
            >
                <div
                    className={`relative z-10 flex w-full flex-col gap-8 px-8 py-12 sm:px-12 lg:min-h-[420px] ${isEvenProject ? "lg:flex-row" : "lg:flex-row-reverse"} lg:items-center lg:gap-12`}
                >
                    <div
                        className={`flex w-full flex-1 flex-col gap-6 text-white ${isEvenProject ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"} lg:gap-8`}
                    >
                    
        
                        <AnimatedTitle
                            text={name}
                            className={`mx-auto max-w-[90%] text-center text-[40px] leading-none text-white sm:text-[44px] lg:mx-0 lg:max-w-[480px] ${isEvenProject ? "lg:text-left" : "lg:text-right"} lg:text-[48px]`}
                            wordSpace="mr-[0.25em]"
                            charSpace="-mr-[0.01em]"
                        />

                        <AnimatedBody
                            text={description}
                            className={`mx-auto mt-4 w-full max-w-[520px] text-center text-[16px] font-semibold text-[#95979D] ${isEvenProject ? "lg:mx-0 lg:text-left" : "lg:mx-0 lg:text-right"}`}
                        />

                        <div
                            className={`mt-8 flex flex-wrap justify-center gap-5 text-[#e4ded7] ${isEvenProject ? "lg:justify-start" : "lg:justify-end"}`}
                        >
                            {technologies.map((IconComponent, techIndex) => {
                                const href = techLinks?.[techIndex];
                                const label = techNames?.[techIndex] ?? "";
                                const content = (
                                    <span className="flex h-10 w-10 items-center justify-center text-[20px] md:h-11 md:w-11 md:text-[24px] lg:h-12 lg:w-12 lg:text-[28px]">
                                        <IconComponent />
                                    </span>
                                );

                                if (!href) {
                                    // Fallback: render the icon without a link to avoid Next.js Link href errors
                                    return (
                                        <span
                                            key={techIndex}
                                            aria-label={label}
                                            title={label}
                                            data-blobity-tooltip={label}
                                            data-blobity-magnetic="false"
                                        >
                                            {content}
                                        </span>
                                    );
                                }

                                return (
                                    <Link
                                        key={techIndex}
                                        href={href}
                                        target="_blank"
                                        aria-label={`Learn more about ${label}`}
                                        className="flex h-10 w-10 items-center justify-center text-[20px] md:h-11 md:w-11 md:text-[24px] lg:h-12 lg:w-12 lg:text-[28px]"
                                        title={href}
                                        data-blobity-tooltip={label}
                                        data-blobity-magnetic="false"
                                    >
                                        <IconComponent />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div
                        className={`flex w-full flex-1 justify-center ${isEvenProject ? "lg:justify-end" : "lg:justify-start"}`}
                    >
                        <Image
                            src={image}
                            alt={name}
                            width={500}
                            height={500}
                            className={`w-full max-w-[360px] sm:max-w-[480px] md:max-w-[420px] lg:max-w-[440px] ${isEvenProject ? "lg:ml-6" : "lg:mr-6"}`}
                            priority
                        />
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default ProjectCard;
