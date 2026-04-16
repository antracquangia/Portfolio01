import { Github, Mail, Terminal, User, Briefcase, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import ProjectCard from './components/ProjectCard';

const projects = [
  {
    id: 'spend-wise',
    title: 'Spend Wise',
    github: 'https://github.com/antracquangia/spend_wise',
    star: {
      situation: 'Users needed a unified way to track expenses across devices.',
      task: 'Build a responsive personal finance app with visual analytics.',
      action: 'Developed a full-stack app with secure auth and real-time charts.',
      result: 'Delivered a seamless tracker that helps users reduce unnecessary spending.'
    },
    codeSnippet: ``,
    demoUrl: 'https://spendwisean.netlify.app/',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    techStack: [
      { category: 'Frontend', description: 'Next.js for building the user interface, and Tailwind CSS for styling.' },
      { category: 'Data Visualization', description: 'Libraries such as Recharts and Chart.js to create interactive charts and graphs for spending habits.' },
      { category: 'Backend', description: 'Node.js with Express to handle user requests and business logic.' },
      { category: 'Database', description: 'PostgreSQL to securely store users, transactions, and categories.' },
      { category: 'Authentication', description: 'Implemented secure login to protect sensitive financial data.' }
    ]
  },
  {
    id: 'gold-price-bot',
    title: 'Gold Price Bot',
    github: 'https://github.com/antracquangia/gold-price-bot',
    star: {
      situation: 'Investors needed real-time alerts for gold price changes.',
      task: 'Create an automated bot for instant price notifications.',
      action: 'Built a Python bot scraping financial APIs and sending Telegram alerts.',
      result: 'Provided a low-latency alert system for timely trading decisions.'
    },
    codeSnippet: ``,
    demoUrl: 'https://gold-price-bot-bac3.onrender.com/',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    techStack: [
      { category: 'Programming Language', description: 'JavaScript for robust backend scripting and automation.' },
      { category: 'Web Scraping & APIs', description: 'Requests library to pull live data from financial APIs.' },
      { category: 'Task Scheduling', description: 'Automated intervals to check prices 24/7 without manual intervention.' },
      { category: 'Cloud Hosting', description: 'Deployed to a cloud provider so the bot runs continuously.' }
    ]
  },
  {
    id: 'url-shortener',
    title: 'URL Shortener',
    github: 'https://github.com/antracquangia/url-shortener',
    star: {
      situation: 'Long URLs were cumbersome for marketing and sharing.',
      task: 'Build a fast URL shortener with click tracking.',
      action: 'Engineered a scalable Node.js backend with an in-memory hash table.',
      result: 'Reduced URL lengths by 80% and provided valuable click analytics.'
    },
    codeSnippet: ``,
    demoUrl: 'https://url-shortener-f43b.onrender.com/',
    imageUrl: '/Picture1.jpg',
    techStack: [
      { category: 'Backend Engineering', description: 'Node.js with Express to handle incoming requests and route them quickly.' },
      { category: 'Database & Caching', description: 'In-memory hash table (Redis) for lightning-fast redirects and persistent storage for analytics.' },
      { category: 'Algorithms', description: 'Encoding algorithms (like Base62) to convert long URLs into short, unique strings.' },
      { category: 'HTTP Protocols', description: 'Deep understanding of HTTP status codes (301/302) for redirection logic.' },
      { category: 'Frontend', description: 'Clean React interface for users to paste links and view click analytics.' }
    ]
  }
];

const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Node.js & Express",
  "Tailwind CSS",
  "SQL & NoSQL Databases",
  "RESTful APIs",
  "Git & GitHub",
];

const softSkills = [
  "Problem Solving",
  "Effective Communication",
  "Team Collaboration",
  "Adaptability",
  "Time Management",
  "Critical Thinking",
  "Continuous Learning",
  "Attention to Detail",
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-purple-500/30 selection:text-white relative overflow-hidden">
      
      {/* Background glowing effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-900/10 blur-[120px]" />
      </div>

      {/* Header / Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-20 md:py-32 relative z-10">
        
        {/* Pokemon Sprites */}
        <motion.img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png" 
          alt="Gengar"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-0 right-0 md:right-10 w-32 md:w-64 opacity-80 drop-shadow-[0_0_30px_rgba(168,85,247,0.6)] pointer-events-none z-0"
        />
        
        <motion.img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png" 
          alt="Umbreon"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-24 md:-bottom-32 left-0 md:-left-10 w-24 md:w-48 opacity-80 drop-shadow-[0_0_30px_rgba(234,179,8,0.6)] pointer-events-none z-0 hidden md:block"
        />

        <div className="space-y-6 max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-sm font-medium text-zinc-300">
            <Terminal className="w-4 h-4 text-purple-400" />
            <span>Software Engineer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">Tran Thien An.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl">
            I build clean, scalable applications and solve complex problems with elegant code.
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <a href="https://github.com/antracquangia" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors text-zinc-300 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:tranthienan0704@gmail.com" className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors text-zinc-300 hover:text-white">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-24 md:mt-48 space-y-32 pb-32 relative z-10">
        
        {/* Skills Section */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <Cpu className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900/50 text-zinc-300 text-sm font-medium hover:border-purple-500/50 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <User className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Soft Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 text-sm font-medium border border-zinc-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-12">
          <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
            <Briefcase className="w-6 h-6 text-zinc-400" />
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          
          <div className="space-y-16">
            {projects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-zinc-800 py-12 text-center text-zinc-500 text-sm relative z-10">
        <p>© {new Date().getFullYear()} Tran Thien An. All rights reserved.</p>
      </footer>
    </div>
  );
}
