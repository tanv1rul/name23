import { redirect } from "react-router-dom";
import * as images from "../assets"



  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "members",
      title: "Members",
    },
  ];
  
  const services = [
    {
      title: "Dept. of NAME",
      icon: images.buet,
      forward: "https://name.buet.ac.bd/",
    },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  // const technologies = [
  //   {
  //     name: "HTML 5",
  //     icon: html,
  //   },
  //   {
  //     name: "CSS 3",
  //     icon: css,
  //   },
  //   {
  //     name: "JavaScript",
  //     icon: javascript,
  //   },
  //   {
  //     name: "TypeScript",
  //     icon: typescript,
  //   },
  //   {
  //     name: "React JS",
  //     icon: reactjs,
  //   },
  //   {
  //     name: "Redux Toolkit",
  //     icon: redux,
  //   },
  //   {
  //     name: "Tailwind CSS",
  //     icon: tailwind,
  //   },
  //   {
  //     name: "Node JS",
  //     icon: nodejs,
  //   },
  //   {
  //     name: "MongoDB",
  //     icon: mongodb,
  //   },
  //   {
  //     name: "Three JS",
  //     icon: threejs,
  //   },
  //   {
  //     name: "git",
  //     icon: git,
  //   },
  //   {
  //     name: "figma",
  //     icon: figma,
  //   },
  //   {
  //     name: "docker",
  //     icon: docker,
  //   },
  // ];
  
  const experiences = [
    {
      name: "Rubaiyat Ahmed",
      college: "Govt. Michael Madhusudan College, Jashore",
      icon: images.rubaiyat,
      iconBg: "#383E56",
    },
    {
      name: "Zubayer Ahmed",
      college: "He sucks ocean!!",
      icon: images.zubayer,
      iconBg: "#383E56",
    },
    {
      name: "Saba Khandaker",
      college: "Holy Cross College",
      icon: images.saba,
      iconBg: "#383E56",
    },
    {
      name: "Suriya Fatima",
      college: "Viqarunnisa Noon School & College",
      icon: images.suraiya,
      iconBg: "#383E56",
    },
    {
      name: "Abdullah Al Mamun",
      college: "Kushtia Govt. Central College",
      icon: images.mamun,
      iconBg: "#383E56",
    },
    {
      name: "Rafia Nahna",
      college: "Rajshahi College",
      icon: images.rafia,
      iconBg: "#383E56",
    },
    {
      name: "Aritra Sarker",
      college: "Chalna KC College",
      icon: images.aritra,
      iconBg: "#383E56",
    },
    {
      name: "Rakibul Islam",
      college: "Dr. Mahbubur Rahman Mollah College",
      icon: images.rakib,
      iconBg: "#383E56",
    },
    {
      name: "Mohammad Tahmid",
      college: "Hathazari Govt. College",
      icon: images.tahmid,
      iconBg: "#383E56",
    },
    {
      name: "Ahnaf Sultan",
      college: "St. Gregory's High School & College",
      icon: images.ahnaf,
      iconBg: "#383E56",
    },
    {
      name: "Abu Hussain",
      college: "Govt. Azizul Haque College, Bogura",
      icon: images.abu,
      iconBg: "#383E56",
    },
    {
      name: "Nafis Iqbal",
      college: "Mymensingh Govt. College",
      icon: images.nafis,
      iconBg: "#383E56",
    },
    {
      name: "Bayazid Hossen",
      college: "",
      icon: images.bayazid,
      iconBg: "#383E56",
    },
    {
      name: "Tanzimul Islam",
      college: "Gazipur Cantonment College",
      icon: images.tanzimul,
      iconBg: "#383E56",
    },
    {
      name: "Raiyat Ul Maheer",
      college: "",
      icon: images.raiyat,
      iconBg: "#383E56",
    },
    {
      name: "Priom Sarkar",
      college: "Notre Dame College",
      icon: images.priom,
      iconBg: "#383E56",
    },
    {
      name: "Sidratul Muntaha",
      college: "Notre Dame College",
      icon: images.muntaha,
      iconBg: "#383E56",
    },
    {
      name: "Rahil Raiyan",
      college: "Rajuk Uttara Model College",
      icon: images.rahil,
      iconBg: "#383E56",
    },
    {
      name: "Hedayatullah Labib",
      college: "Moulvibazar Govt. College",
      icon: images.labib,
      iconBg: "#383E56",
    },
    {
      name: "Piyas Ghosh",
      college: "Hajiganj Model Govt. College",
      icon: images.piyas,
      iconBg: "#383E56",
    },
    {
      name: "Anam Bin Morshed",
      college: "Notre Dame College",
      icon: images.anam,
      iconBg: "#383E56",
    },
    {
      name: "Mohammad Tanvirul Islam",
      college: "Notre Dame College",
      icon: images.tanvirul,
      iconBg: "#383E56",
    },
    {
      name: "Toufique Shahriar",
      college: "Rajuk Uttara Model College",
      icon: images.toufique,
      iconBg: "#383E56",
    },
    {
      name: "Shadman Saif",
      college: "Bir Shrestha Munshi Abdur Rouf Public College",
      icon: images.saif,
      iconBg: "#383E56",
    },
    {
      name: "Sandipon Bhowmik",
      college: "St. Joseph Higher Secondary School",
      icon: images.sandipon,
      iconBg: "#383E56",
    },
    {
      name: "Sabbir Hasan",
      college: "BPATC School & College",
      icon: images.sabbir,
      iconBg: "#383E56",
    },
    {
      name: "Mahedi Hasan Munna",
      college: "Cant. Public School & College, Rangpur",
      icon: images.munna,
      iconBg: "#383E56",
    },
    {
      name: "Arfan Uddin",
      college: "Dhaka College",
      icon: images.arfan,
      iconBg: "#383E56",
    },
    {
      name: "Md. Tamim Hossain",
      college: "Govt. MM College, Jashore",
      icon: images.tamim,
      iconBg: "#383E56",
    },
    {
      name: "Mehedi Hassan",
      college: "Notre Dame College",
      icon: images.mehedi,
      iconBg: "#383E56",
    },
    {
      name: "Shouvro Joty Malakar",
      college: "Notre Dame College",
      icon: images.shouvro,
      iconBg: "#383E56",
    },
    {
      name: "Hasibur Rahman",
      college: "Shahid A.H.M. Kamaruzzaman Govt. Degree College",
      icon: images.hasibur,
      iconBg: "#383E56",
    },
    {
      name: "Sabid Hasan Pranto",
      college: "Rajbari Govt. College",
      icon: images.pranto,
      iconBg: "#383E56",
    },
    {
      name: "Rezwan Ahmed",
      college: "Dhaka College",
      icon: images.rezwan,
      iconBg: "#383E56",
    },
    {
      name: "Mursalin Molla",
      college: "Govt. Yeasin College",
      icon: images.mursalin,
      iconBg: "#383E56",
    },
    {
      name: "Sawana Tukan",
      college: "Holy Cross College",
      icon: images.sawana,
      iconBg: "#383E56",
    },
    {
      name: "Mohammad Bin Sharif",
      college: "Hazera Taju Degree College, Chattogram",
      icon: images.sharif,
      iconBg: "#383E56",
    },
    {
      name: "Sumir Chowdhury",
      college: "Govt. Shah Sultan College, Bogura",
      icon: images.sumir,
      iconBg: "#383E56",
    },
    {
      name: "Maruf Hossain Rafsan",
      college: "Govt. Tolaram College",
      icon: images.maruf,
      iconBg: "#383E56",
    },
    {
      name: "Nabil Ahmed",
      college: "Notre Dame College",
      icon: images.nabil,
      iconBg: "#383E56",
    },
    {
      name: "Arif hasnat Shovo",
      college: "St. Joseph Higher Secondary School",
      icon: images.shovo,
      iconBg: "#383E56",
    },
    {
      name: "Nawrin Khan",
      college: "Chattogram Cantonment Public College",
      icon: images.nawrin,
      iconBg: "#383E56",
    },
    {
      name: "Tanvir Mahmud",
      college: "Motijheel Govt. Boys' High School",
      icon: images.tanvirMahmud,
      iconBg: "#383E56",
    },
    {
      name: "Jannatul Nyeem Ratul",
      college: "Ghatail Cantonment Public School and College",
      icon: images.ratul,
      iconBg: "#383E56",
    },
    {
      name: "Rifat Uzzaman Sapnil",
      college: "New Government Degree College, Rajshahi",
      icon: images.sapnil,
      iconBg: "#383E56",
    },
    {
      name: "Abdullah Al Rafiu",
      college: "Naogaon Govt. College",
      icon: images.rafiu,
      iconBg: "#383E56",
    },
    {
      name: "Ahadul Islam",
      college: "Hajiganj Degree College",
      icon: images.ahadul,
      iconBg: "#383E56",
    },
    {
      name: "Raj Banik",
      college: "Government Hazi Muhammad Mohsin College, Chattogram",
      icon: images.raj,
      iconBg: "#383E56",
    },
    {
      name: "Sirajul Arafin",
      college: "Agricultural University College, Mymensingh",
      icon: images.sirajul,
      iconBg: "#383E56",
    },
    {
      name: "Sadman Amin",
      college: "Notre Dame College",
      icon: images.amin,
      iconBg: "#383E56",
    },
    {
      name: "Ahnaf Irtiza Nibir",
      college: "Notre Dame College",
      icon: images.nibir,
      iconBg: "#383E56",
    },
    {
      name: "Maria Rahman",
      college: "Shamsul Hoque Khan School and College",
      icon: images.maria,
      iconBg: "#383E56",
    },
    {
      name: "Md. Imtiaz Kabir",
      college: "Notre Dame College",
      icon: images.imtiaz,
      iconBg: "#383E56",
    },
    {
      name: "Dhrubo Saha",
      college: "Notre Dame College",
      icon: images.dhrubo,
      iconBg: "#383E56",
    },
    {
      name: "Shrabon Acharja",
      college: "Notre Dame College",
      icon: images.shrabon,
      iconBg: "#383E56",
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  // const projects = [
  //   {
  //     name: "Car Rent",
  //     description:
  //       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "mongodb",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "tailwind",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: carrent,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Job IT",
  //     description:
  //       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "restapi",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "scss",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: jobit,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Trip Guide",
  //     description:
  //       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //     tags: [
  //       {
  //         name: "nextjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "supabase",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "css",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: tripguide,
  //     source_code_link: "https://github.com/",
  //   },
  // ];
  
  export { services, experiences };
