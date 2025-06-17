
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Code, Compass } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            All-in-one Open
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Robotics</span>
            <br />Learning Hub
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            From complete beginner to advanced roboticist. Discover curated tutorials, 
            books, courses, and projects to master ROS, Arduino, SLAM, Computer Vision, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/start-here"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Start Learning <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link 
              to="/tutorials"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Browse Tutorials
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Compass className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">Structured Learning</h3>
              <p className="text-slate-600 dark:text-slate-400">Follow our carefully crafted roadmaps from beginner to advanced levels</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Book className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">Curated Resources</h3>
              <p className="text-slate-600 dark:text-slate-400">Hand-picked tutorials, books, and courses from the best in the field</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Code className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">Hands-on Projects</h3>
              <p className="text-slate-600 dark:text-slate-400">Learn by building real robots with step-by-step project guides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
