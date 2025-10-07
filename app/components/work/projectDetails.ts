import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiVuedotjs,
    SiFirebase,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiGit
} from "react-icons/si";
import { IconType } from "react-icons";

type GitHubLink = string;
type DemoLink = string;

export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: GitHubLink;
    demo: DemoLink;
    image: string;
    available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Nik YKS Portal",
        description:
            "Nik YKS de yapay zeka destekli birebir koçluk hizmetleri sunarak öğrencilerin toplu çalışma odaları, çalışma takip modülleri, takvim modülleri, birebir koçluk ile günlük planlama, öğrenciye özel kişiselleştirilmiş öneriler sunan AI aistan hizmetleri sunan öğrenme platformu.",
        technologies: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFirebase],
        techNames: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
        techLinks: [
            "https://nextjs.org/",
            "https://reactjs.org/",
            "https://www.typescriptlang.org/",
            "https://tailwindcss.com/",
            "https://firebase.google.com/"
        ],
        github: "https://github.com/CaglarCakmak0",
        demo: "https://portal.nikykskoclugu.com.tr",
        image: "/projects/portal.png",
        available: true,
    },
    {
        id: 1,
        name: "Nik YKS ",
        description:
            "Nik YKS Şirket tanıtım sitesini geliştirdim, optimize ettim ve bakımını üstlendim. Modern web teknolojileri kullanarak kullanıcı dostu ve etkileşimli bir deneyim sağladım. SEO ve performans iyileştirmeleri ile sitenin görünürlüğünü artırdım. Aylık analizler yaparak kullanıcı davranışlarını izledim ve buna göre stratejiler geliştirdim.",
        technologies: [SiReact, SiExpress, SiTypescript, SiCss3, SiJavascript],
        techNames: ["react", "express", "turso", "typescript", "scss", "websocket"],    
        techLinks: [
            "https://nextjs.org/",
            "https://reactjs.org/",
            "https://www.typescriptlang.org/",
            "https://tailwindcss.com/"
        ],
        github: "https://github.com/CaglarCakmak0",
        demo: "https://portal.nikykskoclugu.com.tr",
        image: "/projects/nikyks.png",
        available: true,
    },
    {
        id: 2,
        name: "Pixa Software ",
        description:
            " Çalıştığım süre boyunca şirketin frontend SaaS uygulamasını Vue 3, TypeScript ve SCSS kullanarak geliştirdim. Kullanıcı dostu arayüzler oluşturdum, performansı optimize ettim ve ekip içi işbirliğini artırdım. Ayrıca, yeni özelliklerin tasarımında ve uygulanmasında aktif rol aldım, kullanıcı geri bildirimlerine dayalı iyileştirmeler yaptım.  Mailchimp üzerinden yürütülen e-posta kampanyalarının HTML/CSS tabanlı mailing tasarımlarını kodladım. Şirketin landing page ve pazarlama sayfalarının geliştirilmesini WordPress ile gerçekleştirdim.",
        technologies: [SiVuedotjs, SiTypescript, SiTailwindcss, SiGit],
        techNames: ["Vue 3", "TypeScript", "Tailwind CSS", "Git, Bitbucket, Jira, WordPress, Mailchimp"],
        techLinks: [
            "https://vuejs.org/",
            "https://www.typescriptlang.org/",
            "https://tailwindcss.com/",
            "https://git-scm.com/"
        ],
        github: "https://github.com/CaglarCakmak0",
        demo: "https://pixasoftware.com",
        image: "/projects/pixa.png",
        available: true,
    },
    {
        id: 3,  
        name: "Armek Mekatronik",
        description:
            "Portföyün kolay incelendiği modern ve responsive site. Yönetim paneliyle içerik güncelleme basitleştirildi; etkileşim belirgin arttı.",
        technologies: [SiReact, SiHtml5, SiCss3, SiJavascript],
        techNames: ["React", "HTML5", "CSS3", "JavaScript"],
        techLinks: ["https://reactjs.org/", "https://developer.mozilla.org/en-US/docs/Web/HTML", "https://developer.mozilla.org/en-US/docs/Web/CSS", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
        github: "https://github.com/CaglarCakmak0",
        demo: "https://armak.com.tr",
        image: "/projects/motorcami.png",
        available: true,
    },
    {
        id: 4,
        name: "MERN Tabanlı E-ticaret Platformu",
        description:
            "KOBİ’ler için modüler, yönetilebilir MERN e‑ticaret altyapısı. Sipariş, müşteri ve envanter otomasyonu tek panelde.",
        technologies: [SiReact, SiNodedotjs, SiExpress, SiMongodb],
        techNames: ["React", "Node.js", "Express.js", "MongoDB"],
        techLinks: ["https://reactjs.org/", "https://nodejs.org/", "https://expressjs.com/", "https://www.mongodb.com/"],
        github: "https://github.com/CaglarCakmak0",
        demo: "https://ecommerce.harunbulbul.com",
        image: "/projects/ecommerce.png",
        available: true,
    },
];

