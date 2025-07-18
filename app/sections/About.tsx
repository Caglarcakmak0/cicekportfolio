import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Çiçek Aydost"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Kullanıcı deneyimi (UI/UX) geliştirmeye tutkulu, problem çözmeye odaklı bir geliştiriciyim. RPA süreçleri, veri tabanı yönetimi ve yazılım geliştirme alanlarında pratik deneyime sahibim. Kullanıcı odaklı tasarım ilkelerini teknik becerilerimle birleştirerek sezgisel ve görsel olarak etkileyici dijital deneyimler oluşturuyorum." />

                        <AnimatedBody
                            delay={0.1}
                            text="PUXO Dijital Deneyimler A.Ş.'de UI/UX Geliştirici Stajyeri olarak çalışırken, iç süreç optimizasyonuna yönelik kullanıcı dostu arayüzler tasarlayarak manuel işleri %30 azalttım. SEO ekibiyle birlikte çalışarak, veri işleme hızını %40 artıran anahtar kelime analizi ve performans raporlama araçları geliştirdik."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Şu anda Armek Mekatronik'te UI/UX Tasarımcısı ve VisionCore'da UI/UX Geliştirici olarak çalışıyorum. Endüstriyel yapay zeka çözümlerini sezgisel ve kullanıcı dostu arayüzlere dönüştürüyorum."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
