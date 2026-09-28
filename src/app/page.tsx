"use client";

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDownRight, X, Download, Mail, Quote, Home as HomeIcon, Briefcase, Code } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import CustomCursor from '@/components/CustomCursor';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger, Draggable);

// SVGs
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.3 5.3 0 0 0-.1 3.8 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
);
const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const ClientLogo1 = () => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20L20 10H40L30 20L40 30H20L10 20Z" fill="currentColor"/>
    <text x="45" y="25" fontFamily="Nohemi, sans-serif" fontWeight="bold" fontSize="18" fill="currentColor">ACME CORP</text>
  </svg>
);
const ClientLogo2 = () => (
  <svg width="130" height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="10" fill="currentColor"/><circle cx="35" cy="20" r="10" fill="currentColor" fillOpacity="0.5"/>
    <text x="55" y="25" fontFamily="Nohemi, sans-serif" fontWeight="bold" fontSize="18" fill="currentColor">GLOBEX</text>
  </svg>
);
const ClientLogo3 = () => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="20" height="20" rx="4" fill="currentColor" transform="rotate(45 20 20)"/>
    <text x="45" y="25" fontFamily="Nohemi, sans-serif" fontWeight="bold" fontSize="18" fill="currentColor">NEXUS</text>
  </svg>
);

import Image from 'next/image';

const playTools = [
  { name: 'React', icon: '/skillsicon/React.svg' },
  { name: 'Next.js', icon: '/skillsicon/Next.js.svg' },
  { name: 'TypeScript', icon: '/skillsicon/TypeScript.svg' },
  { name: 'Tailwind', icon: '/skillsicon/Tailwind CSS.svg' },
  { name: 'JavaScript', icon: '/skillsicon/JavaScript.svg' },
  { name: 'Node.js', icon: '/skillsicon/Node.js.svg' },
  { name: 'Python', icon: '/skillsicon/Python.svg' },
  { name: 'HTML5', icon: '/skillsicon/HTML5.svg' },
  { name: 'CSS3', icon: '/skillsicon/CSS3.svg' },
  { name: 'MySQL', icon: '/skillsicon/MySQL.svg' },
  { name: 'Git', icon: '/skillsicon/Git.svg' },
  { name: 'GitHub', icon: '/skillsicon/GitHub.svg' },
  { name: 'Docker', icon: '/skillsicon/Docker.svg' },
  { name: 'Figma', icon: '/skillsicon/Figma.svg' },
  { name: 'Bootstrap', icon: '/skillsicon/Bootstrap.svg' },
  { name: 'WordPress', icon: '/skillsicon/WordPress.svg' },
  { name: 'VS Code', icon: '/skillsicon/Visual Studio Code (VS Code).svg' }
];

type Project = {
  id: string;
  title: string;
  role: string;
  summary: string;
  tech: string[];
  details: string[];
  color: string;
  bg: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: "brandvault",
    title: "BrandVault",
    role: "UX/UI & Frontend Dev",
    summary: "A scalable brand management platform transforming how teams store, share, and collaborate on brand assets.",
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Figma'],
    details: [
      "Architected the frontend using Next.js App Router for optimal performance.",
      "Integrated Supabase for real-time collaborative features.",
      "Designed an intuitive UI utilizing a modular component system."
    ],
    color: "#800000",
    bg: "#f8f9fa",
    link: "https://brandvaultv1.vercel.app/"
  },
  {
    id: "orthocare",
    title: "OrthoCare",
    role: "UX/UI & Frontend Dev",
    summary: "Accessible healthcare CMS built for patient discovery, SEO optimization, and seamless clinical management.",
    tech: ['Next.js', 'Headless CMS', 'WCAG', 'Tailwind'],
    details: [
      "Engineered an SEO-focused frontend to increase patient discovery.",
      "Ensured strict WCAG accessibility compliance.",
      "Built headless CMS integration for dynamic content management."
    ],
    color: "#660000",
    bg: "#f1f3f5",
    link: "https://orthoexpertcare.in/"
  },
  {
    id: "ylearn",
    title: "YLearn Mobile",
    role: "UX/UI Redesign",
    summary: "Ground-up redesign of a mobile learning application, significantly boosting student engagement through intuitive flows.",
    tech: ['Figma', 'Prototyping', 'User Research', 'Mobile UX'],
    details: [
      "Conducted extensive user research to identify friction points.",
      "Created high-fidelity interactive prototypes in Figma.",
      "Developed a custom mobile-first design system."
    ],
    color: "#800000",
    bg: "#e9ecef"
  }
];

const testimonials = [
  {
    text: "Affan's user-focused design transformed the YLearn App, enhancing usability for over 700,000+ students. His professionalism and knack for engaging gamification features make him a true asset to any project!",
    name: "Khan Israr",
    role: "Senior Flutter Developer"
  },
  {
    text: "Affan knows how to create clean, user-friendly experiences. He's constantly exploring new areas like AI and full-stack development. You can count on him when you need a reliable teammate who cares about doing things well.",
    name: "Milad Joodi",
    role: "Frontend Developer"
  },
  {
    text: "Shaikh simplified incredibly complex data into an intuitive interface through rigorous user interviews and iterative prototyping. His ability to make the complex simple is a true gift. A world-class UX developer.",
    name: "Zakaullah Ansari",
    role: "Full Stack Developer"
  }
];

export default function Home() {
  const container = useRef(null);
  const footerRef = useRef(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedStack, setSelectedStack] = useState<string[]>([]);

  const handleDragStart = (e: React.DragEvent, toolName: string) => {
    e.dataTransfer.setData('toolName', toolName);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const toolName = e.dataTransfer.getData('toolName');
    if (toolName && !selectedStack.includes(toolName)) {
      setSelectedStack([...selectedStack, toolName]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const removeTool = (toolName: string) => {
    setSelectedStack(selectedStack.filter(t => t !== toolName));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveal
      gsap.from(".reveal-text", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      });



      // 3D Tilt effect for case study cards
      const tiltElements = document.querySelectorAll('.tilt-effect');
      tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e: any) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const tiltX = ((y - centerY) / centerY) * -3;
          const tiltY = ((x - centerX) / centerX) * 3;
          
          gsap.to(el, {
            rotationX: tiltX,
            rotationY: tiltY,
            transformPerspective: 1200,
            ease: 'power2.out',
            duration: 0.5
          });
        });
        
        el.addEventListener('mouseleave', () => {
          gsap.to(el, {
            rotationX: 0,
            rotationY: 0,
            ease: 'elastic.out(1, 0.3)',
            duration: 1
          });
        });
      });

      // Footer Animation
      gsap.from(footerRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
      
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="min-h-screen bg-[#fdfdfd] text-[#111111] font-secondary selection:bg-[#800000] selection:text-white relative">
      <CustomCursor />
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-white/70 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-primary font-bold text-2xl tracking-tighter text-[#800000]">AFFAN.</span>
          <div className="flex gap-6 items-center">
            <a href="#work" className="text-sm font-bold hover:text-[#800000] transition-colors uppercase tracking-widest hidden md:block">Work</a>
            <a href="#contact" className="px-5 py-2.5 bg-[#111111] text-white rounded-full text-sm font-bold hover:bg-[#800000] transition-all transform hover:scale-105">Let's Talk</a>
          </div>
        </div>
      </nav>

      <main className="w-full">
        
        {/* Hero Section with Grid Background */}
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-24 pb-12 w-full overflow-hidden hero-grid">
          
          {/* Subtle Glow Behind Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#800000]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10 space-y-8">
            <div className="overflow-hidden">
              <h1 className="reveal-text font-primary text-[12vw] md:text-[8vw] leading-[0.9] font-black uppercase tracking-tighter text-[#111111]">
                Interactive <br />
                <span className="text-[#800000]">Experiences.</span>
              </h1>
            </div>
            
            <div className="overflow-hidden max-w-2xl">
              <p className="reveal-text text-xl md:text-2xl font-normal text-gray-700 leading-relaxed">
                Products fail when design and code don't speak the same language. I bridge the gap. I design and build highly interactive, scalable web applications.
              </p>
            </div>
            
            <div className="overflow-hidden flex flex-wrap gap-4 pt-8">
              <div className="reveal-text">
                <a href="#work" className="inline-flex items-center gap-2 px-8 py-4 bg-[#800000] text-white rounded-full font-bold uppercase tracking-widest hover:bg-[#111111] transition-colors shadow-xl shadow-[#800000]/20">
                  Explore Work <ArrowDownRight size={20} />
                </a>
              </div>
              <div className="reveal-text">
                <a href="/mohdaffan_resume.pdf" download className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#111111] text-[#111111] rounded-full font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-colors bg-white">
                  <Download size={20} /> Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Endless Marquee Slider (Client Logos) */}
        <div className="w-full border-y border-black/5 bg-white py-10 overflow-hidden flex items-center relative z-20">
          <div className="marquee flex gap-20 whitespace-nowrap animate-marquee text-gray-400 items-center">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-20 items-center">
                <ClientLogo1 />
                <ClientLogo2 />
                <ClientLogo3 />
                <ClientLogo1 />
                <ClientLogo2 />
                <ClientLogo3 />
              </div>
            ))}
          </div>
        </div>

        {/* Stacked Case Studies */}
        <section id="work" className="pt-40 pb-32 bg-[#111111] text-white relative w-full">
          <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
            <h2 className="font-primary text-5xl md:text-7xl font-bold uppercase tracking-tighter">Selected <span className="text-[#800000]">Case Studies</span></h2>
          </div>
          
          <div className="max-w-6xl mx-auto px-6 relative space-y-12 pb-[10vh]">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="sticky w-full flex justify-center pb-4"
                style={{ 
                  top: `calc(12vh + ${index * 40}px)`,
                  zIndex: index + 10 
                }}
              >
                {/* Visual shadow behind to separate stacked cards */}
                <div className="absolute inset-x-8 -bottom-10 h-full bg-black/60 blur-2xl -z-10 rounded-[2.5rem]"></div>
                
                <div 
                  onClick={() => setActiveProject(project)}
                  className="w-full h-auto rounded-[2rem] p-6 md:p-8 flex flex-col justify-between cursor-pointer border border-white/10 shadow-2xl tilt-effect transform-gpu origin-top transition-transform hover:scale-[1.01]"
                  style={{ backgroundColor: project.bg, color: '#111111' }}
                >
                  <div className="flex flex-col md:flex-row justify-between gap-6 pointer-events-none">
                    <div className="max-w-xl space-y-4">
                      <span className="inline-block font-bold tracking-widest uppercase text-xs md:text-sm border border-[#111111] rounded-full px-4 py-1.5">{project.role}</span>
                      <h3 className="font-primary text-4xl md:text-6xl font-black uppercase tracking-tighter" style={{ color: project.color }}>
                        {project.title}
                      </h3>
                      <p className="text-lg md:text-xl font-normal text-gray-800 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#111111] text-white flex items-center justify-center pointer-events-auto shadow-xl transition-colors hover:bg-[#800000]">
                        <ArrowRight size={32} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-black/10 flex flex-wrap gap-2 pointer-events-none">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-white rounded-full text-xs font-bold shadow-sm">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-32 px-6 max-w-5xl mx-auto w-full text-center">
          <Quote size={64} className="mx-auto text-[#800000]/20 mb-10" />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 6000, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            className="w-full pb-16"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <h2 className="font-primary text-2xl md:text-4xl font-bold tracking-tight text-[#111111] leading-relaxed mb-10">
                  "{t.text}"
                </h2>
                <div className="flex flex-col items-center justify-center gap-2">
                  <span className="font-bold text-xl text-[#111111]">{t.name}</span>
                  <span className="text-[#800000] font-medium uppercase tracking-widest text-sm">{t.role}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Interactive Playable Tools Section */}
        <section id="arsenal" className="py-24 px-6 max-w-7xl mx-auto w-full bg-[#f8f9fa] rounded-[3rem] mb-32 border border-black/5 relative overflow-hidden tools-arena shadow-inner flex flex-col lg:flex-row gap-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#800000]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="lg:w-2/5 flex flex-col justify-center relative z-10 mb-10 lg:mb-0">
            <h2 className="font-primary text-4xl md:text-5xl font-bold uppercase tracking-tighter text-[#111111]">
              Build <br/>The <span className="text-[#800000]">Stack.</span>
            </h2>
            <p className="mt-4 text-gray-600 font-medium text-lg">Drag your required tools into the drop zone below, and let's start a project with them.</p>
            
            <div 
              id="drop-zone" 
              className={`mt-12 w-full min-h-64 border-2 border-dashed ${selectedStack.length > 0 ? 'border-[#800000] bg-[#800000]/5' : 'border-black/10'} rounded-3xl p-6 transition-colors flex flex-col items-center justify-center relative`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {selectedStack.length === 0 ? (
                <span className="font-primary text-gray-400 font-bold tracking-widest uppercase">Drop Tools Here</span>
              ) : (
                <div className="w-full">
                  <div className="flex flex-wrap gap-4 justify-center mb-8">
                    {selectedStack.map(toolName => {
                      const tool = playTools.find(t => t.name === toolName);
                      if (!tool) return null;
                      return (
                        <div key={tool.name} className="relative group">
                          <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-3 animate-fade-in">
                            <Image src={tool.icon} alt={tool.name} width={32} height={32} className="object-contain" />
                          </div>
                          <button 
                            onClick={() => removeTool(tool.name)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      )
                    })}
                  </div>
                  <a 
                    href={`mailto:moh.affan.ux@gmail.com?subject=New Project Request&body=Hi Affan,%0D%0A%0D%0AI would like to start a project using the following stack:%0D%0A- ${selectedStack.join('%0D%0A- ')}%0D%0A%0D%0ALet's discuss!`}
                    className="w-full block text-center py-4 bg-[#111111] text-white rounded-xl font-bold uppercase tracking-widest hover:bg-[#800000] transition-colors shadow-lg animate-fade-in"
                  >
                    Request Project With Stack
                  </a>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:w-3/5 grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-4 relative z-10 min-h-[400px] content-start">
            {playTools.filter(t => !selectedStack.includes(t.name)).map(tool => (
              <div 
                key={tool.name} 
                draggable
                onDragStart={(e) => handleDragStart(e, tool.name)}
                className="playable-tool aspect-square w-full bg-white border border-gray-100 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 md:gap-3 cursor-grab active:cursor-grabbing text-[#111111] hover:border-[#800000]/30 hover:scale-105 transition-all"
                title={tool.name}
              >
                <div className="relative w-8 h-8 md:w-12 md:h-12 pointer-events-none">
                  <Image src={tool.icon} alt={tool.name} fill className="object-contain" />
                </div>
                <span className="font-bold text-[10px] md:text-xs tracking-wider pointer-events-none text-center truncate w-full px-2">{tool.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Experience Grid */}
        <section className="py-10 px-6 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <h2 className="font-primary text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
              Not Just A <br/><span className="text-[#800000]">Resume.</span>
            </h2>
            <p className="max-w-md text-xl font-normal text-gray-700">
              I bring a hybrid skillset to the table. Combining deep UX/UI principles with robust React & Next.js engineering to build digital products from end-to-end.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dev Card */}
            <div className="bg-white rounded-3xl p-10 hover:bg-[#800000] hover:text-white transition-colors duration-500 group border border-black/5 shadow-sm">
              <h3 className="font-primary text-3xl font-bold mb-2">Frontend Developer</h3>
              <p className="font-bold opacity-60 mb-8 uppercase tracking-widest text-sm">Web Solutions • 2025</p>
              <p className="text-lg leading-relaxed font-normal mb-8 opacity-80 group-hover:opacity-100">
                Architected and developed highly interactive, performant web applications. Strictly focused on engineering robust systems using React.js, Next.js, and complex state management with Supabase.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'TypeScript', 'Supabase'].map(t => (
                  <span key={t} className="px-3 py-1 border border-current rounded-full text-xs font-bold">{t}</span>
                ))}
              </div>
            </div>

            {/* Design Card */}
            <div className="bg-white rounded-3xl p-10 hover:bg-[#800000] hover:text-white transition-colors duration-500 group border border-black/5 shadow-sm">
              <h3 className="font-primary text-3xl font-bold mb-2">UX Designer Intern</h3>
              <p className="font-bold opacity-60 mb-8 uppercase tracking-widest text-sm">AIKTC • 2025-2026</p>
              <p className="text-lg leading-relaxed font-normal mb-8 opacity-80 group-hover:opacity-100">
                Translated complex business requirements into intuitive user flows. Created comprehensive wireframes and high-fidelity prototypes while conducting usability tests to validate design decisions.
              </p>
              <div className="flex flex-wrap gap-2">
                {['User Research', 'Wireframing', 'Prototyping', 'Figma'].map(t => (
                  <span key={t} className="px-3 py-1 border border-current rounded-full text-xs font-bold">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Massive CTA Section */}
        <section id="contact" ref={footerRef} className="py-40 px-6 bg-[#800000] text-white text-center rounded-t-[4rem] md:rounded-t-[8rem] w-full mt-32">
          <h2 className="font-primary text-6xl md:text-[9vw] font-black uppercase tracking-tighter leading-none mb-10 text-white">
            Let's Build <br/> It Together.
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:moh.affan.ux@gmail.com" className="px-10 py-5 bg-white text-[#800000] rounded-full font-primary text-xl md:text-2xl font-bold uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-3 shadow-2xl">
              <Mail /> Email Me
            </a>
            <a href="/mohdaffan_resume.pdf" download className="px-10 py-5 border-2 border-white text-white rounded-full font-primary text-xl md:text-2xl font-bold uppercase tracking-wider hover:bg-white hover:text-[#800000] transition-colors flex items-center gap-3 shadow-2xl">
              <Download /> Resume
            </a>
          </div>
          
          <div className="mt-32 flex justify-center gap-8">
             <a href="https://linkedin.com/in/shaikh-affan/" target="_blank" className="text-white/70 hover:text-white transition-colors"><LinkedinIcon size={36}/></a>
             <a href="https://github.com/affanshaikh-dev" target="_blank" className="text-white/70 hover:text-white transition-colors"><GithubIcon size={36}/></a>
          </div>
        </section>

      </main>

      {/* Fullscreen Case Study Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[100000] bg-white flex flex-col animate-fade-in overflow-y-auto">
          <div className="absolute top-8 right-8 z-50">
            <button 
              onClick={() => setActiveProject(null)}
              className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#800000] hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="h-[50vh] flex flex-col justify-end p-8 md:p-20" style={{ backgroundColor: activeProject.bg }}>
            <span className="font-bold tracking-widest uppercase text-sm mb-6 text-[#111111]">{activeProject.role}</span>
            <h3 className="font-primary text-6xl md:text-9xl font-black uppercase tracking-tighter" style={{ color: activeProject.color }}>
              {activeProject.title}
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 py-20 space-y-20 w-full">
            {activeProject.link && (
              <div>
                <a 
                  href={activeProject.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#800000] text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
                >
                  Visit Live Project <ArrowRight size={20} />
                </a>
              </div>
            )}
            
            <div>
              <h4 className="font-primary text-3xl font-bold uppercase tracking-widest mb-6 text-gray-400">The Overview</h4>
              <p className="text-2xl md:text-4xl font-normal leading-relaxed text-[#111111]">
                {activeProject.summary}
              </p>
            </div>
            
            <div>
              <h4 className="font-primary text-3xl font-bold uppercase tracking-widest mb-8 text-gray-400">Key Contributions</h4>
              <ul className="space-y-6">
                {activeProject.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-6 items-start text-xl md:text-2xl font-normal text-gray-700">
                    <span className="font-primary font-bold text-[#800000] pt-1">0{idx + 1}.</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-primary text-3xl font-bold uppercase tracking-widest mb-8 text-gray-400">Tech Stack</h4>
              <div className="flex flex-wrap gap-4">
                {activeProject.tech.map(tech => (
                  <span key={tech} className="px-6 py-3 border-2 border-[#111111] text-[#111111] rounded-full text-lg font-bold uppercase tracking-wider hover:bg-[#111111] hover:text-white transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full bg-[#111111] text-white flex justify-around items-center pt-4 pb-6 px-2 z-[9000] md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.2)] border-t border-white/10 rounded-t-3xl backdrop-blur-md bg-opacity-95">
        <a href="#" className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 hover:text-[#800000] transition-all">
          <HomeIcon size={22} />
          <span className="text-[9px] font-bold tracking-widest uppercase">Home</span>
        </a>
        <a href="#work" className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 hover:text-[#800000] transition-all">
          <Briefcase size={22} />
          <span className="text-[9px] font-bold tracking-widest uppercase">Work</span>
        </a>
        <a href="#arsenal" className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 hover:text-[#800000] transition-all">
          <Code size={22} />
          <span className="text-[9px] font-bold tracking-widest uppercase">Arsenal</span>
        </a>
        <a href="mailto:moh.affan.ux@gmail.com" className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 hover:text-[#800000] transition-all">
          <Mail size={22} />
          <span className="text-[9px] font-bold tracking-widest uppercase">Contact</span>
        </a>
      </div>

      <style jsx global>{`
        .hero-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
          background-position: center center;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        /* Swiper Fixes */
        .swiper-pagination {
          position: relative !important;
          margin-top: 2rem !important;
        }
        .swiper-pagination-bullet-active {
          background: #800000 !important;
        }

        /* Force hide native cursor on desktop */
        @media (pointer: fine) {
          body, body * {
            cursor: none !important;
          }
        }
      `}</style>
    </div>
  );
}
