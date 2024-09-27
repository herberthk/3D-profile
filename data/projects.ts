export interface Projects {
  title: string;
  desc: string;
  url?: string;
  imageUrl: string;
  githubUrl?: string;
  imageContain?: boolean;
  iconList: string[];
}

// export const projects = [
//   {
//     id: 1,
//     title: "3D Solar System Planets to Explore",
//     des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
//     img: "/assets/p1.svg",
//     iconLists: [
//       "/assets/re.svg",
//       "/assets/tail.svg",
//       "/assets/ts.svg",
//       "/assets/three.svg",
//       "/assets/fm.svg",
//     ],
//     link: "/assets/ui.earth.com",
//   },
//   {
//     id: 2,
//     title: "Yoom - Video Conferencing App",
//     des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
//     img: "/assets/p2.svg",
//     iconLists: [
//       "/assets/next.svg",
//       "/assets/tail.svg",
//       "/assets/ts.svg",
//       "/assets/stream.svg",
//       "/assets/c.svg",
//     ],
//     link: "/assets/ui.yoom.com",
//   },
//   {
//     id: 3,
//     title: "AI Image SaaS - Canva Application",
//     des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
//     img: "/assets/p3.svg",
//     iconLists: [
//       "/assets/re.svg",
//       "/assets/tail.svg",
//       "/assets/ts.svg",
//       "/assets/three.svg",
//       "/assets/c.svg",
//     ],
//     link: "/assets/ui.aiimg.com",
//   },
//   {
//     id: 4,
//     title: "Animated Apple Iphone 3D Website",
//     des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
//     img: "/assets/p4.svg",
//     iconLists: [
//       "/assets/next.svg",
//       "/assets/tail.svg",
//       "/assets/ts.svg",
//       "/assets/three.svg",
//       "/assets/gsap.svg",
//     ],
//     link: "/assets/ui.apple.com",
//   },
// ];

export const projects: Projects[] = [
  {
    title: "Sourcegraph",
    desc: "Sourcegraph is the code intelligence SaaS platform built with features that help you understand, fix, and automate across your entire codebase. It is used by over 1.8M engineers. I contributed to this project while working at Gitstart YC(S19), all contributions was made on behalf of Gitstart YC(S19)",
    imageUrl: "/assets/sourcegraph.png",
    url: "https://about.sourcegraph.com/",
    githubUrl: "https://github.com/sourcegraph/sourcegraph",
    iconList: [
      "/assets/typescript.svg",
      "/assets/react.svg",
      "/assets/nodejs.svg",
      "/assets/docker.svg",
      "/assets/kubernetes.svg",
    ],
  },

  {
    title: "Gitstart Official",
    desc: "This is the main website for Gitstart YC(S-19) which handles business transactions and bookings with clients seeking services of the the company. Whenever clients projects are over or waiting for feedback from clients after pushing pull request, its rule we have to fix bugs, creating new features for the company website basing tasks created by the team leads of those projects",
    imageUrl: "/assets/gitstart.png",
    url: "https://www.gitstart.com/",
    iconList: [
      "/assets/nodejs.svg",
      "/assets/docker.svg",
      "/assets/kubernetes.svg",
      "/assets/typescript.svg",
      "/assets/react.svg",
    ],
  },
  {
    title: "AERIAL",
    url: "https://aerialops.io/",
    desc: "Aerial is the SaaS application that offers effortless legal document management that leverages the power of machine learning to prepare for and complete due diligence in a fraction of the time. It is based in Seattle Washington DC united states.",
    imageUrl: "/assets/aerial.png",
    iconList: [
      "/assets/css.svg",
      "/assets/GraphQL.svg",
      "/assets/nextjs.svg",
      "/assets/typescript.svg",
      "/assets/react.svg",
    ],
  },
  {
    title: "Finance manager",
    desc: "This software aims to minimize the complexity of book keeping by providing automated generation of financial statements like business journals, ledgers, Trial balance, statement of financial position (income statement), Income statement, cashbooks, balance sheet,and payroll reports basing on data of the company provided through our easy to use user interface",
    imageUrl: "/assets/fm.jpg",
    url: "https://financemanager.netbritz.com/",
    githubUrl: "https://github.com/herberthk/finance-manager-frontend",
    iconList: [
      "/assets/typescript.svg",
      "/assets/react.svg",
      "/assets/docker.svg",
      "/assets/nodejs.svg",
      "/assets/GraphQL.svg",
    ],
  },
  {
    title: "Gitstart developer portal",
    desc: "This is the developer portal for Gitstart YC(S-19) which handles applications of new developers, database of all staff and developers, and payment information and work schedule of developers. Whenever clients projects are over or waiting for feedback from clients after pushing pull request, its rule we have to fix bugs, creating new features for the company website basing tasks created by the team leads of those projects",
    imageUrl: "/assets/gitstartdev.png",
    url: "https://www.gitstart.dev/",
    iconList: [
      "/assets/typescript.svg",
      "/assets/react.svg",
      "/assets/nodejs.svg",
      "/assets/docker.svg",
      "/assets/kubernetes.svg",
    ],
  },

  {
    title: "Connect up",
    url: "https://play.google.com/store/search?q=connect+up&c=apps",
    desc: "This is the native application available on both android and IOS with over 5000 downloads that is one stop center, offering short videos services, e-commerce, chat, messaging, bookings and many others. It was written with react-native and Typescript on front-end and php/laravel on backend. I'm currently the lead developer for this application",
    imageUrl: "/assets/c-main.jpg",
    imageContain: true,
    iconList: [
      "/assets/typescript.svg",
      "/assets/Kotlin.svg",
      "/assets/firebase.svg",
      "/assets/react.svg",
      "/assets/php.svg",
    ],
  },

  {
    title: "Netbritz",
    desc: "Netbritz is the new social media and social networking internet service that provides modern, efficient and easy way to share with the world. Share photos, text, videos, emoji Gif with your loved ones. Create photo albums to organize your photos. Follow your Preferred topics with hashtag and a lot more. ",
    imageUrl: "/assets/nb.jpg",
    url: "https://netbritz.com/",
    iconList: [
      "/assets/css.svg",
      "/assets/typescript.svg",
      "/assets/react.svg",
      "/assets/nextjs.svg",
      "/assets/PostgresSQL.svg",
    ],
  },
  {
    title: "Nylas AI email and scheduling client",
    desc: "This application uses Nylas API and ChatGPT to create and view calendar events, View and send emails, Schedule meetings, and Auto responder with the power of Chart GPT written with Nextjs-13 app-router, Typescript, Zustand, Mantine UI, Nylas Nodejs API, OpenAI chatGTP, Storybook, and others",
    githubUrl: "https://github.com/herberthk/nylas-frontend",
    imageUrl: "/assets/new email.png",
    iconList: [
      "/assets/re.svg",
      "/assets/tail.svg",
      "/assets/typescript.svg",
      "/assets/three.svg",
      "/assets/fm.svg",
    ],
  },
];
