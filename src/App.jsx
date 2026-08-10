import React, { useState, useEffect } from 'react';
import myPhoto from './assets/photo.jpg';

function App() {
  // Dark Mode State 
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert('🎉 Message sent successfully! Your data is saved in MongoDB.');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        alert('❌ Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      alert('⚠️ Error connecting to the server. Is the backend running?');
    }
  };

  // Tech Stack Data with Beautiful Official Logos
  const techStack = [
    {
      category: "Frontend Development",
      icon: "💻",
      items: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" }
      ]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      items: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invertDark: true },
        { name: "NPM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" },
        { name: "JSON", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg", invertDark: true }
      ]
    },
    {
      category: "Database & Tools",
      icon: "🔧",
      items: [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "Mongoose", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invertDark: true },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
        { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
      
      {/* CSS Animations for Hero Section */}
      <style>
        {`
          @keyframes slideDownFade {
            from { opacity: 0; transform: translateY(-40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUpFade {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-title {
            animation: slideDownFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-buttons {
            opacity: 0;
            animation: slideDownFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            animation-delay: 0.2s;
          }
          .animate-image {
            opacity: 0;
            animation: slideUpFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            animation-delay: 0.4s;
          }
        `}
      </style>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Suman Rai
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#home" className="hidden md:block font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">Home</a>
            <a href="#about" className="hidden md:block font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">About</a>
            <a href="#skills" className="hidden md:block font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">Skills</a>
            <a href="#projects" className="hidden md:block font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">Projects</a>
            <a href="#contact" className="hidden md:block font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        
        {/* Hero Section */}
        <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-20 flex flex-col items-center justify-center relative overflow-hidden">
          
          {/* Animated Text */}
          <div className="z-10 flex flex-col items-center text-center animate-title scroll-mt-24">
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 dark:text-white mb-2">
              Hi I'm Suman
            </h1>
            <h2 className="text-6xl md:text-8xl font-serif italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 pb-4">
              Full Stack Developer
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="z-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-6 animate-buttons w-full sm:w-auto">
            {/* View CV Button */}
            <a href="/Suman_Rai_CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-xl font-bold transition-all hover:-translate-y-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              View CV
            </a>

            {/* Download CV Button */}
            <a href="/Suman_Rai_CV.pdf" download className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download CV
            </a>

            {/* View Projects Button */}
            <a href="#projects" className="flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-500 rounded-xl font-bold transition-all hover:-translate-y-1">
              View Projects
            </a>
          </div>

          {/* Animated Profile Photo */}
          <div className="mt-12 z-0 relative flex justify-center animate-image w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-[80px] opacity-20 dark:opacity-40"></div>
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
              <img 
                src={myPhoto} 
                alt="My Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>
        </section>

        {/* Premium About Section - Divided into 3 Sections */}
        <section id="about" className="py-24 scroll-mt-12 relative">
          <div className="flex flex-col items-center mb-16 relative z-10">
            <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            
            {/* 1. Education Card */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Education</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Hi, I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Suman Rai</span>, a passionate Full Stack Developer based in Nepal. I hold a degree in <span className="font-semibold text-indigo-600 dark:text-indigo-400">BSc. (Hons) Computing</span> from Itahari International College.
              </p>
            </div>

            {/* 2. My Journey Card */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-purple-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.36c-5.91 0-7.75-8.22-7.75-8.22s8.22 1.84 8.22 7.75a6 6 0 01-7.36 5.84m12.73-12.73a7.5 7.5 0 01-10.6 10.6L2.2 21.8l3.18-3.18m13.78-13.78a7.5 7.5 0 01-10.6 10.6L6.44 19.66l3.18-3.18M15 9a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">My Journey</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                My journey into web development started out of curiosity, which quickly turned into a deep passion for building interactive and scalable digital experiences. I believe in writing clean code and constantly learning new technologies to solve real-world problems.
              </p>
            </div>

            {/* 3. Hobbies Card */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-pink-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Hobbies</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                When I'm not in front of my computer screen, you can usually find me <span className="italic text-slate-500 dark:text-slate-400">traveling, reading books, listening to music, or watching football</span>.
              </p>
            </div>
            
          </div>
        </section>

        {/* Premium Skills Section with Logos */}
        <section id="skills" className="py-24 relative scroll-mt-12">
          <div className="absolute top-1/2 left-0 -ml-32 -mt-32 w-80 h-80 bg-indigo-500 rounded-full blur-[120px] opacity-10 dark:opacity-20 pointer-events-none"></div>
          <div className="absolute top-1/2 right-0 -mr-32 -mt-32 w-80 h-80 bg-purple-500 rounded-full blur-[120px] opacity-10 dark:opacity-20 pointer-events-none"></div>

          <div className="flex flex-col items-center mb-16 relative z-10">
            <h2 className="text-4xl font-extrabold mb-4">My Tech Stack</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
            <p className="mt-6 text-slate-600 dark:text-slate-400 text-center max-w-lg">
              Technologies and tools I use to build robust, scalable, and beautiful web applications.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {techStack.map((category, index) => (
              <div key={index} className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-white/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl shadow-sm">
                    {category.icon}
                  </span>
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-3 gap-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center p-3 bg-white dark:bg-slate-700/30 rounded-xl border border-slate-100 dark:border-slate-600/50 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 group/item">
                      <img 
                        src={item.logo} 
                        alt={item.name} 
                        className={`w-10 h-10 mb-2 group-hover/item:scale-110 transition-transform duration-300 ${item.invertDark ? 'dark:invert dark:opacity-90' : ''}`} 
                      />
                      <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 text-center">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Projects Section */}
        <section id="projects" className="py-24 scroll-mt-12">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Featured Work</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Project 1 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-64 bg-slate-200 dark:bg-slate-700 flex items-center justify-center relative overflow-hidden">
                 <span className="text-slate-400 dark:text-slate-500">[ Project Image / Screenshot ]</span>
                 <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Pro E-Commerce</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">A full-stack e-commerce platform featuring JWT authentication, Stripe payment gateway, and an admin dashboard for inventory management.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-md">React</span>
                  <span className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold rounded-md">Node.js</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-md">MongoDB</span>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition">View Live</button>
                  <button className="flex-1 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition">Source Code</button>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-64 bg-slate-200 dark:bg-slate-700 flex items-center justify-center relative overflow-hidden">
                 <span className="text-slate-400 dark:text-slate-500">[ Project Image / Screenshot ]</span>
                 <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">TaskFlow Pro</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">A real-time collaborative project management tool with drag-and-drop Kanban boards using WebSockets.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-md">Tailwind</span>
                  <span className="px-3 py-1 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-bold rounded-md">Express</span>
                  <span className="px-3 py-1 bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-bold rounded-md">Socket.io</span>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition">View Live</button>
                  <button className="flex-1 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition">Source Code</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Contact Section with Info + Form */}
        <section id="contact" className="py-24 border-t border-slate-200 dark:border-slate-800 scroll-mt-12 relative">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[150px] opacity-10 dark:opacity-20 pointer-events-none"></div>

          <div className="flex flex-col items-center mb-16 relative z-10">
            <h2 className="text-4xl font-extrabold mb-4">Let's Connect</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
            <p className="mt-6 text-slate-600 dark:text-slate-400 text-center max-w-lg">
              Have a project in mind or just want to say hi? Feel free to reach out via message or direct contact!
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start relative z-10">
            
            {/* Left Side: Contact Information Cards */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* WhatsApp Card */}
              <a href="https://wa.me/9779862122979" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-white/50 dark:border-slate-700/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">WhatsApp</h4>
                  <p className="text-lg font-bold text-slate-800 dark:text-slate-100">+977 9862122979</p>
                </div>
              </a>

              {/* Email Card */}
              <a href="mailto:sumankulungiicat24@gmail.com" className="flex items-center gap-5 p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-white/50 dark:border-slate-700/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-base font-bold text-slate-800 dark:text-slate-100 truncate">sumankulungiicat24@gmail.com</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-5 p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-white/50 dark:border-slate-700/50 shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-bold text-slate-800 dark:text-slate-100">Itahari, Sunsari, Nepal</p>
                </div>
              </div>

            </div>

            {/* Right Side: The Contact Form */}
            <div className="lg:col-span-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/50 dark:border-slate-700/50 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/80 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/80 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/80 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none" placeholder="How can I help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-center md:text-left">
            © 2026 Suman Rai. Built with React & Tailwind CSS.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="https://github.com/suman9425" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition transform hover:scale-110">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/suman-kulung-60a07825b/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition transform hover:scale-110">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;