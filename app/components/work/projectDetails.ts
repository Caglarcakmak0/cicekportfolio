import {
    SiGithub,
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiVuedotjs,
    SiFirebase,
    SiMysql,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiPython
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "VisionCore Yapay Zeka Arayüz Tasarımları",
        description:
            "Endüstriyel yapay zeka çözümleri sunan VisionCore'un web sitesinin 2.0 versiyonunun UI/UX tasarımı ve geliştirilmesine liderlik ettim. Karmaşık yapay zeka fonksiyonlarını sezgisel ve kullanıcı dostu arayüzlere dönüştürdüm. Figma kullanarak yapay zeka modeli analizlerini görselleştiren pano tasarımları oluşturdum.",
        technologies: [SiTypescript, SiReact, SiPython, SiTailwindcss],
        techNames: ["TypeScript", "React", "Python", "Tailwind CSS"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://www.python.org/", "https://tailwindcss.com/"],
        github: "#",
        demo: "#",
        image: "/projects/eldoraui.png",
        available: true,
    },
    {
        id: 1,
        name: "Armek Mekatronik - UI/UX Tasarım",
        description:
            "Armek Mekatronik'in dijital varlığını yenilemek amacıyla kullanıcı deneyimi odaklı yeni bir web arayüzü tasarladım. Anında bilgi almak isteyen ziyaretçiler için sezgisel ve kullanımı kolay bir arayüz oluşturdum. SEO düzenlemeleriyle birlikte web sitesi trafiğinde %60 artış sağladım.",
        technologies: [SiHtml5, SiCss3, SiJavascript, SiMysql],
        techNames: ["HTML", "CSS", "JavaScript", "MySQL"],
        techLinks: ["https://developer.mozilla.org/en-US/docs/Web/HTML", "https://developer.mozilla.org/en-US/docs/Web/CSS", "https://developer.mozilla.org/en-US/docs/Web/JavaScript", "https://www.mysql.com/"],
        github: "#",
        demo: "#",
        image: "/projects/vrmall.png",
        available: true,
    },
    {
        id: 2,
        name: "Kullanıcı Odaklı Üniversite Veritabanı Sistemi",
        description:
            "Microsoft SQL Server kullanılarak kullanıcı deneyimi odaklı kapsamlı bir üniversite veritabanı sistemi geliştirdim. Veritabanına kullanıcı erişimi için etkileşimli panel tasarladım. Öğrenci kayıtları, akademik kadro bilgileri ve ders detayları için görsel arayüzler oluşturdum.",
        technologies: [SiMysql, SiCss3, SiHtml5, SiJavascript],
        techNames: ["MySQL", "CSS", "HTML", "JavaScript"],
        techLinks: ["https://www.mysql.com/", "https://developer.mozilla.org/en-US/docs/Web/CSS", "https://developer.mozilla.org/en-US/docs/Web/HTML", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
        github: "#",
        demo: "#",
        image: "/projects/eldoraui.png",
        available: true,
    },
    {
        id: 3,
        name: "ESP32 Tabanlı Robot Kol Kullanıcı Arayüzü",
        description:
            "ESP32 tabanlı bir sistem için kullanıcı dostu kontrol arayüzü tasarladım. Gelişmiş sensörler ve ivmeölçerlerle insan hareketlerini algılayan robot kol için etkileşimli kontrol paneli geliştirdim. Endüstriyel operasyonlarda kullanıcı verimliliğini artırmaya yönelik görsel arayüzler oluşturdum.",
        technologies: [SiPython, SiCss3, SiHtml5, SiJavascript],
        techNames: ["Python", "CSS", "HTML", "JavaScript"],
        techLinks: ["https://www.python.org/", "https://developer.mozilla.org/en-US/docs/Web/CSS", "https://developer.mozilla.org/en-US/docs/Web/HTML", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
        github: "#",
        demo: "#",
        image: "/projects/vrmall.png",
        available: true,
    },
];
