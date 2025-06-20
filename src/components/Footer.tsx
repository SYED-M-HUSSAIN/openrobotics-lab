
import { Github } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              A comprehensive open-source platform dedicated to robotics education. 
              Connecting learners with cutting-edge resources, tools, and a vibrant community of robotics enthusiasts worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/SYED-M-HUSSAIN/open-robotics-lab" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/start-here" className="hover:text-white transition-colors">Getting Started</a></li>
              <li><a href="/tutorials" className="hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="/community" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/books" className="hover:text-white transition-colors">Books</a></li>
              <li><a href="/courses" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="/tools" className="hover:text-white transition-colors">Tools</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 OpenRobotics Lab. Built for the robotics community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
