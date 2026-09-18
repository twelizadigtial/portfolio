export interface PersonalDetails {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  heroSubtitle: string;
  bio: string;
  email: string;
  phone: string;
  birthday: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
  videoIntroUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  colorTheme: string;
  iconName: string;
  techList?: string[];
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
  thumbnail: string;
}

export interface EducationItem {
  id: number;
  title: string;
  duration: string;
  institution: string;
  category: "education" | "course";
}

export interface ProjectItem {
  id: number;
  title: string;
  categoryBadge?: string;
  description: string;
  image: string;
  technologies: { name: string; icon: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "tools" | "design";
  percentage: number;
  icon: string;
}

export interface CertificateItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface SocialItem {
  name: string;
  url: string;
  icon: string;
}

export const personalData: PersonalDetails = {
  name: "Chathushi Jayarathna",
  shortName: "Chathu Jayarathna",
  role: "Web Developer • Designer • IT Trainer • AI Enthusiast",
  tagline: "Transforming Ideas Into Dreams Through Technology",
  heroSubtitle: "Hi! I'm Chathu, a Web Developer, Designer, IT Trainer & AI Enthusiast.",
  bio: "Passionate about building modern web applications, crafting intuitive UI/UX experiences, empowering learners through IT education, and exploring practical AI solutions.",
  email: "chathushi0707@gmail.com",
  phone: "(+94) 742269976",
  birthday: "07th July 2000",
  location: "Bandarawela, Sri Lanka",
  profileImage: "/profile.png",
  resumeUrl: "https://drive.google.com/file/d/1Te2yOjA9246FpLsXnZN0qgA3H1HwDIDd/view?usp=sharing",
  videoIntroUrl: "https://youtu.be/19Ou49woKTY?si=MRN40ugvAeezINpH",
};

export const servicesData: ServiceItem[] = [
  {
    id: "fullstack",
    title: "Full-Stack Engineering",
    category: "01 — Full-Stack Engineering",
    description: "Building scalable, production-ready web applications from frontend to backend.",
    techList: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Java",
      "Spring Boot",
      "PHP",
      "MySQL",
      "REST APIs",
      "Git/GitHub",
    ],
    colorTheme: "from-blue-600/20 via-cyan-500/10 to-transparent",
    iconName: "Code2",
  },
  {
    id: "modern-tech",
    title: "Modern Technologies",
    category: "02 — Modern Technologies",
    description: "Using modern tools and technologies to enhance web applications and digital experiences.",
    techList: [
      "AI Tools",
      "API Integration",
      "AI-Assisted Development",
      "Automation",
      "Cloud Basics",
      "Deployment",
      "Performance Optimization",
    ],
    colorTheme: "from-purple-600/20 via-pink-500/10 to-transparent",
    iconName: "Server",
  },
  {
    id: "product-design",
    title: "Product Design & UX",
    category: "03 — Product Design & UX",
    description: "Designing intuitive interfaces that look great and feel effortless to use.",
    techList: [
      "UI/UX",
      "Figma",
      "Axure RP",
      "Balsamiq",
      "Responsive Design",
      "Prototyping",
      "Design Systems",
      "Interaction Design",
      "Canva",
      "Adobe Lightroom",
    ],
    colorTheme: "from-amber-500/20 via-indigo-500/10 to-transparent",
    iconName: "Layout",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Microsoft 365 Admin Trainer",
    company: "Key Institute of Digital Success",
    location: "Sri Lanka",
    duration: "May 2025 – Aug 2026",
    thumbnail: "/exp1.svg",
    responsibilities: [
      "Delivered practical Microsoft 365 administration training.",
      "Trained learners in user and account management.",
      "Covered security, collaboration, and cloud services.",
      "Guided learners through hands-on Microsoft 365 exercises.",
      "Supported learners with real-world administration scenarios.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "HIP",
    location: "Malaysia",
    duration: "Oct 2024 - Jan 2025",
    thumbnail: "/exp2.svg",
    responsibilities: [
      "Built responsive websites using Webflow, WordPress, and Elementor.",
      "Utilized Webflow CMS and Elementor widgets for dynamic content management.",
      "Integrated Advanced Custom Fields (ACF) with WordPress for custom data.",
      "Enhanced site interactivity with custom JavaScript and CSS.",
      "Experienced in GitLab version control, including branching and merging.",
    ],
  },
  {
    id: 3,
    title: "Software Developer",
    company: "Edelosoft",
    location: "Singapore",
    duration: "May 2024 - Sep 2024",
    thumbnail: "/exp3.svg",
    responsibilities: [
      "Developed and customized WordPress themes using PHP.",
      "Integrated and utilized Advanced Custom Fields (ACF) for flexible content management.",
      "Connected WordPress ACF fields with PHP to dynamically display custom data.",
      "Gained significant experience in GitLab, including version control, branching, and merging.",
      "Demonstrated strong customer handling abilities.",
    ],
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Cenozai",
    location: "Malaysia",
    duration: "July 2023 - Jan 2024",
    thumbnail: "/exp4.svg",
    responsibilities: [
      "Developed new features including referral code implementation.",
      "Recommended and documented suitable testing methodologies.",
      "Created comprehensive test cases covering unit and integration testing.",
      "Updated project dependencies to preferred versions.",
      "Demonstrated proficiency in managing complex systems and enhancing project functionality.",
    ],
  },
  {
    id: 5,
    title: "IT Trainee",
    company: "Ceylon Electricity Board",
    location: "Sri Lanka",
    duration: "Feb 2023 - Present",
    thumbnail: "/exp1.svg",
    responsibilities: [
      "Proficient in database management.",
      "Provided technical support.",
      "Documented processes and procedures.",
      "Skilled in Microsoft Office applications.",
      "Demonstrated strong customer handling abilities.",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: "Bachelor of Science (Honors) in Computer Science",
    duration: "Expected Feb 2027",
    institution: "University of Roehampton, UK",
    category: "education",
  },
  {
    id: 2,
    title: "Bachelor of Information Technology (BIT)",
    duration: "Expected July 2028",
    institution: "University of Colombo, Sri Lanka",
    category: "education",
  },
  {
    id: 3,
    title: "Higher National Diploma in Software Engineering",
    duration: "March 2024",
    institution: "Lithan Academy, Singapore",
    category: "education",
  },
  {
    id: 4,
    title: "G.C.E. A/L (Maths Stream) & G.C.E. O/L (English Medium)",
    duration: "Aug 2020",
    institution: "Bandarawela Central College",
    category: "education",
  },
  {
    id: 5,
    title: "Human Resources Management",
    duration: "July 2023",
    institution: "Open University Sri Lanka",
    category: "course",
  },
  {
    id: 6,
    title: "Information Communication Technology",
    duration: "July 2017",
    institution: "Open University Sri Lanka",
    category: "course",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "TWELIZA Digital Solutions",
    categoryBadge: "Agency Website · Flagship Studio Platform",
    description: "Official studio platform created to showcase TWELIZA's design, engineering, and digital growth capabilities through interactive 3D web technology and modern UI/UX.",
    image: "/images/projects/tweliza-digital-solutions.png",
    technologies: [
      { name: "React", icon: "/7.png" },
      { name: "Tailwind CSS", icon: "/25.svg" },
      { name: "JavaScript", icon: "/3.png" },
      { name: "HTML/CSS", icon: "/23.png" },
    ],
    liveUrl: "https://tweliza.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Shoe Shop",
    categoryBadge: "3D E-Commerce Website · Footwear",
    description: "3D animated e-commerce website featuring immersive product presentation, interactive 3D visuals, smooth animations, and a modern shopping experience.",
    image: "/images/projects/shoe-shop.png",
    technologies: [
      { name: "3D / WebGL", icon: "/26.png" },
      { name: "React", icon: "/7.png" },
      { name: "Tailwind CSS", icon: "/25.svg" },
      { name: "JavaScript", icon: "/3.png" },
    ],
    liveUrl: "https://avi-shoes.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Aurel Coffee",
    categoryBadge: "3D Brand Website · Artisanal Roaster",
    description: "3D animated coffee brand website featuring immersive 3D visuals, interactive animations, dynamic product presentation, and a premium brand experience.",
    image: "/images/projects/aurel-coffee.png",
    technologies: [
      { name: "3D / WebGL", icon: "/26.png" },
      { name: "React", icon: "/7.png" },
      { name: "Tailwind CSS", icon: "/25.svg" },
      { name: "HTML/CSS", icon: "/23.png" },
    ],
    liveUrl: "https://temporary-spry-argon-q32hh1x.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "Rose Cake House",
    categoryBadge: "3D E-Commerce Website · Luxury Artisan Bakery",
    description: "3D animated luxury bakery e-commerce website featuring 3D sculpted cake previews, custom cake studio builder, interactive flavor selection, and smooth online ordering.",
    image: "/images/projects/rose-cake-house.png",
    technologies: [
      { name: "3D / WebGL", icon: "/26.png" },
      { name: "React", icon: "/7.png" },
      { name: "Tailwind CSS", icon: "/25.svg" },
      { name: "JavaScript", icon: "/3.png" },
    ],
    liveUrl: "https://luxury-cake-shop.vercel.app/",
  },
  {
    id: 5,
    title: "Lune Cafe",
    categoryBadge: "3D Brand Website · Café & Patisserie",
    description: "3D animated luxury café website featuring interactive 3D menu showcases, private dining cabin reservations, artisanal coffee presentation, and immersive brand design.",
    image: "/images/projects/lune-cafe.png",
    technologies: [
      { name: "3D / WebGL", icon: "/26.png" },
      { name: "React", icon: "/7.png" },
      { name: "Tailwind CSS", icon: "/25.svg" },
    ],
    liveUrl: "https://luna-cafe-tweliza.vercel.app/",
  },
  {
    id: 6,
    title: "Chavéra Photography",
    categoryBadge: "Photography · Creative",
    description: "Photography website created for a professional photographer offering weddings, birthdays, events, and portrait photography.",
    image: "/images/projects/chavera-photography.png",
    technologies: [
      { name: "React", icon: "/7.png" },
      { name: "Tailwind CSS", icon: "/25.svg" },
      { name: "HTML/CSS", icon: "/23.png" },
    ],
    liveUrl: "https://chavera-sigma.vercel.app/",
  },
  {
    id: 7,
    title: "KIDS Institute Website",
    categoryBadge: "Education · Certifications",
    description: "Educational institute website focused on English education and Microsoft examination / certification programs.",
    image: "/images/projects/kids-institute.png",
    technologies: [
      { name: "React", icon: "/7.png" },
      { name: "Tailwind CSS", icon: "/25.svg" },
      { name: "JavaScript", icon: "/3.png" },
    ],
  },
  {
    id: 8,
    title: "LEW Tech",
    categoryBadge: "Automotive · Industrial",
    description: "Industrial welding and engineering website built for a client providing American vehicle welding and specialized automotive services.",
    image: "/images/projects/lew-tech.png",
    technologies: [
      { name: "React", icon: "/7.png" },
      { name: "Tailwind CSS", icon: "/25.svg" },
      { name: "HTML/CSS", icon: "/23.png" },
    ],
  },
  {
    id: 9,
    title: "New Regal Gym Website",
    categoryBadge: "Fitness · Health & Wellness",
    description: "Created for the owner of New Regal Gym to establish a bold, professional online presence for the fitness club.",
    image: "/images/projects/new-regal-gym.png",
    technologies: [
      { name: "React", icon: "/7.png" },
      { name: "Tailwind CSS", icon: "/25.svg" },
      { name: "JavaScript", icon: "/3.png" },
    ],
  },
  {
    id: 10,
    title: "Dev Clothing E-Commerce",
    categoryBadge: "E-Commerce · Fashion",
    description: "E-commerce clothing platform created for a client running a fashion retail business with product catalog and checkout workflow.",
    image: "/images/projects/dev-clothing.png",
    technologies: [
      { name: "React", icon: "/7.png" },
      { name: "Tailwind CSS", icon: "/25.svg" },
      { name: "Java", icon: "/5.png" },
      { name: "Spring Boot", icon: "/8.png" },
    ],
  },
  {
    id: 11,
    title: "ABC Car Portal",
    categoryBadge: "Automotive Sales · Web App",
    description: "Developed a web app for buying and selling used cars, featuring vehicle browsing and bidding at discounted prices.",
    image: "/images/projects/car-sales.png",
    technologies: [
      { name: "Java", icon: "/5.png" },
      { name: "Spring Boot", icon: "/8.png" },
      { name: "JavaScript", icon: "/3.png" },
      { name: "HTML/CSS", icon: "/23.png" },
    ],
    githubUrl: "https://github.com/Chathu-Jayarathna/Lithan-Projects/tree/main/Module%209%20-%20ADP/Project%20-%20ABC%20Car%20Portal",
  },
  {
    id: 12,
    title: "AAA Hosting Website",
    categoryBadge: "Web Infrastructure · Cloud",
    description: "Website created for AAA Hosting Group to present their web hosting services, server packages, and online presence.",
    image: "/images/projects/aaa-hosting.png",
    technologies: [
      { name: "Liferay", icon: "/13.png" },
      { name: "Java", icon: "/5.png" },
      { name: "HTML/CSS", icon: "/23.png" },
    ],
    githubUrl: "https://github.com/Chathu-Jayarathna/Lithan-Projects/tree/main/Module%208%20-%20WFS/Project%20-%20AAA%20Hosting",
  },
  {
    id: 13,
    title: "Meals on Wheels",
    categoryBadge: "Enterprise System · Food Business",
    description: "Designed and developed a secure, user-friendly website for MerryMeal to streamline operations and support growth.",
    image: "/images/projects/marry-food-shop.png",
    technologies: [
      { name: "React", icon: "/7.png" },
      { name: "Java", icon: "/5.png" },
      { name: "Spring Boot", icon: "/8.png" },
      { name: "JavaScript", icon: "/3.png" },
      { name: "HTML/CSS", icon: "/23.png" },
    ],
    githubUrl: "https://github.com/Chathu-Jayarathna/Lithan-Projects/tree/main/Module%2011%20-%20DEA/Project%20-%20MerryMeals",
    liveUrl: "https://dea-meerymeals.vercel.app/",
  },
  {
    id: 14,
    title: "Know Your Neighborhood",
    categoryBadge: "Location Search · Web App",
    description: "Built a neighborhood info app with OAuth2 login, user profiles, and store search.",
    image: "/api.jpg",
    technologies: [
      { name: "React", icon: "/7.png" },
      { name: "Tailwind CSS", icon: "/25.svg" },
      { name: "Spring Boot", icon: "/8.png" },
      { name: "REST APIs", icon: "/23.png" },
      { name: "VS Code", icon: "/11.png" },
    ],
    githubUrl: "https://github.com/Chathu-Jayarathna/Lithan-Projects/tree/main/Module%2010%20-%20API/Project%20-%20Know%20Your%20Neighborhood",
    liveUrl: "https://adp-kyn.vercel.app/",
  },
  {
    id: 15,
    title: "Jumpstart E-Commerce",
    categoryBadge: "E-Commerce · Web App",
    description: "Simplified e-commerce with easy signup, secure login, smooth browsing, and robust admin tools.",
    image: "/cpj.png",
    technologies: [
      { name: "Java", icon: "/5.png" },
      { name: "Spring Boot", icon: "/8.png" },
      { name: "JavaScript", icon: "/3.png" },
      { name: "HTML/CSS", icon: "/23.png" },
    ],
    githubUrl: "https://github.com/Chathu-Jayarathna/Lithan-Projects/tree/main/Module%2012%20-%20CPL/Project%20-%20Jumpstart%20E-Commerce%20Site",
  },
];

export const skillsData: SkillItem[] = [
  { name: "HTML", category: "frontend", percentage: 90, icon: "/1.png" },
  { name: "CSS", category: "frontend", percentage: 90, icon: "/2.png" },
  { name: "JavaScript", category: "frontend", percentage: 80, icon: "/3.png" },
  { name: "Bootstrap", category: "frontend", percentage: 85, icon: "/4.png" },
  { name: "Tailwind CSS", category: "frontend", percentage: 80, icon: "/25.svg" },
  { name: "React", category: "frontend", percentage: 85, icon: "/7.png" },
  { name: "Angular", category: "frontend", percentage: 80, icon: "/6.png" },
  { name: "Java", category: "backend", percentage: 75, icon: "/5.png" },
  { name: "Spring Boot", category: "backend", percentage: 75, icon: "/8.png" },
  { name: "PHP", category: "backend", percentage: 70, icon: "/19.png" },
  { name: "WordPress", category: "tools", percentage: 70, icon: "/20.png" },
  { name: "Webflow", category: "design", percentage: 80, icon: "/26.png" },
  { name: "VS Code", category: "tools", percentage: 90, icon: "/11.png" },
  { name: "Postman", category: "tools", percentage: 80, icon: "/9.png" },
  { name: "Eclipse IDE", category: "tools", percentage: 60, icon: "/10.png" },
  { name: "Liferay", category: "backend", percentage: 65, icon: "/13.png" },
  { name: "IntelliJ IDEA", category: "tools", percentage: 65, icon: "/12.png" },
  { name: "Figma", category: "design", percentage: 80, icon: "/14.png" },
  { name: "XAMPP", category: "tools", percentage: 85, icon: "/21.png" },
  { name: "Microsoft 365", category: "tools", percentage: 90, icon: "/24.png" },
  { name: "Lightroom", category: "design", percentage: 90, icon: "/18.png" },
];

export const certificatesData: CertificateItem[] = [
  { id: 1, title: "Analyzing Your Web Site to Improve SEO", category: "Web Development & Designing", image: "/C1 (1).png" },
  { id: 2, title: "Axure RP for UX Design", category: "Web Development & Designing", image: "/C1 (2).png" },
  { id: 3, title: "Dreamweaver CC Essential Training", category: "Web Development & Designing", image: "/C1 (3).png" },
  { id: 4, title: "Improve SEO for Your Website", category: "Web Development & Designing", image: "/C1 (4).png" },
  { id: 5, title: "IntelliJ IDEA Community Edition Essential Training", category: "Web Development & Designing", image: "/C1 (5).png" },
  { id: 6, title: "Introduction to Web Design and Development", category: "Web Development & Designing", image: "/C1 (6).png" },
  { id: 7, title: "Java EE: Servlets and JavaServer Pages (JSP)", category: "Web Development & Designing", image: "/C1 (8).png" },
  { id: 8, title: "JUnit 5", category: "Web Development & Designing", image: "/C1 (9).png" },
  { id: 9, title: "Lightroom: Get Professional Result", category: "Design & Photography", image: "/C1 (10).png" },
  { id: 10, title: "Project Management", category: "Web Development & Designing", image: "/C1 (11).png" },
  { id: 11, title: "SEO: Keyword Strategy", category: "Web Development & Designing", image: "/C1 (12).png" },
  { id: 12, title: "Spring MVC", category: "Web Development & Designing", image: "/C1 (13).png" },
  { id: 13, title: "UX Design", category: "Web Development & Designing", image: "/C1 (14).png" },
  { id: 14, title: "Lightroom Classic Essential Training", category: "Design & Photography", image: "/C1 (15).png" },
];

export const socialLinks: SocialItem[] = [
  { name: "GitHub", url: "https://github.com/Chathu-Jayarathna", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/chathushi-jayarathna-578098234", icon: "Linkedin" },
  { name: "WhatsApp", url: "https://wa.me/94742269976", icon: "MessageSquare" },
  { name: "Email", url: "mailto:chathushi0707@gmail.com", icon: "Mail" },
  { name: "Skype", url: "https://join.skype.com/invite/sneaIOJ34nBW", icon: "Video" },
];
