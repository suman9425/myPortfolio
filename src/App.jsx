import React, { useState, useEffect } from 'react';
import myPhoto from './assets/photo.jpg';

function App() {
  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Dark mode toggle logic
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Connecting to Backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Backend को API मा डाटा पठाउने
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
        // म्यासेज गएपछि फर्म खाली गर्ने
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        alert('❌ Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      alert('⚠️ Error connecting to the server. Is the backend running?');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Suman Rai
          </div>
          <div className="flex items-center gap-6">
            <a href="#projects" className="hidden md:block font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">Projects</a>
            <a href="#contact" className="hidden md:block font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contact</a>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        
        {/* Advanced Hero Section */}
        <section className="py-20 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold text-sm tracking-wide">
              Full Stack Developer
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Building Digital <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Experiences.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
              I specialize in building scalable, responsive, and high-performance web applications. Turning complex problems into elegant, user-friendly solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="/Suman_Rai_CV.pdf" download className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download CV
              </a>
              <a href="#projects" className="flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-500 rounded-xl font-bold transition-all hover:-translate-y-1">
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-72 h-72 md:w-80 md:h-80 bg-slate-200 dark:bg-slate-800 rounded-[2rem] overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-all duration-500">
                <img src={myPhoto} alt="My Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack / Skills Section */}
        <section className="py-12 border-y border-slate-200 dark:border-slate-800">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">My Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Git'].map((tech) => (
              <div key={tech} className="px-6 py-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-300 hover:scale-105 transition-transform cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Projects Section */}
        <section id="projects" className="py-24">
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

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Let's Connect</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
            <p className="mt-6 text-slate-600 dark:text-slate-400 text-center max-w-lg">Have a project in mind or just want to say hi? Feel free to send me a message!</p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Send Message
              </button>
            </form>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
        <p>© 2026 Suman Rai. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;