import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, FileText, Globe, Code2 } from 'lucide-react';

interface StarDetails {
  situation: string;
  task: string;
  action: string;
  result: string;
}

interface TechDetail {
  category: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  github: string;
  star: StarDetails;
  codeSnippet: string;
  demoUrl?: string;
  imageUrl?: string;
  techStack?: TechDetail[];
}

export default function ProjectCard({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<'description' | 'skills' | 'code' | 'demo'>('description');

  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-lg hover:shadow-zinc-700/30 transition-all duration-300">
      {project.imageUrl && (
        <div className="w-full h-48 md:h-72 overflow-hidden border-b border-zinc-800 relative group">
          <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={project.imageUrl} 
            alt={`${project.title} preview`} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      
      <div className="p-6 md:p-8 border-b border-zinc-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-2xl font-bold tracking-tight text-white">{project.title}</h3>
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-sm font-medium transition-colors text-zinc-200"
            >
              <Github className="w-4 h-4" />
              <span>View Source</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-zinc-950 px-6 py-3 border-b border-zinc-800 flex gap-6 overflow-x-auto">
        <button
          onClick={() => setActiveTab('description')}
          className={`flex items-center gap-2 text-sm font-medium py-2 border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'description' ? 'border-white text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <FileText className="w-4 h-4" />
          STAR Method
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`flex items-center gap-2 text-sm font-medium py-2 border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'skills' ? 'border-white text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <Code2 className="w-4 h-4" />
          Tech Stack
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center gap-2 text-sm font-medium py-2 border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'code' ? 'border-white text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <Github className="w-4 h-4" />
          Repository
        </button>
        <button
          onClick={() => setActiveTab('demo')}
          className={`flex items-center gap-2 text-sm font-medium py-2 border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'demo' ? 'border-white text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <Globe className="w-4 h-4" />
          Live Web
        </button>
      </div>

      <div className="p-6 md:p-8 min-h-[320px] relative bg-zinc-900">
        <AnimatePresence mode="wait">
          {activeTab === 'description' && (
            <motion.div
              key="description"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Situation</h4>
                  <p className="text-zinc-300 leading-relaxed">{project.star.situation}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Task</h4>
                  <p className="text-zinc-300 leading-relaxed">{project.star.task}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Action</h4>
                  <p className="text-zinc-300 leading-relaxed">{project.star.action}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Result</h4>
                  <p className="text-zinc-300 leading-relaxed">{project.star.result}</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col items-center py-8"
            >
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
                <Code2 className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-8">Technical Architecture</h4>
              <div className="w-full max-w-2xl grid gap-4 text-left">
                {project.techStack?.map((tech, idx) => (
                  <div key={idx} className="bg-zinc-800/40 p-5 rounded-xl border border-zinc-700/50 hover:border-purple-500/30 transition-colors">
                    <h5 className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-2">{tech.category}</h5>
                    <p className="text-zinc-300 text-sm leading-relaxed">{tech.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'code' && (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
            >
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
                <Github className="w-8 h-8 text-zinc-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">GitHub Repository</h4>
              <p className="text-zinc-400 max-w-md">
                View the complete source code, commit history, and documentation on GitHub.
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
              >
                View Source Code <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          )}

          {activeTab === 'demo' && (
            <motion.div
              key="demo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
            >
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-zinc-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Live Web</h4>
              <p className="text-zinc-400 max-w-md">
                Experience the live application deployed on the web.
              </p>
              <a
                href={project.demoUrl || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
              >
                Launch Live Web <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
