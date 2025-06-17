
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ResourceCard from '../components/ResourceCard';
import { Book, Youtube, Compass, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredResources = [
    {
      title: "ROS2 Beginner Tutorial Series",
      description: "Complete introduction to ROS2 concepts, installation, and your first nodes",
      level: "Beginner" as const,
      duration: "4 hours",
      icon: <Youtube size={24} />,
      tags: ["ROS2", "Python", "Tutorials"]
    },
    {
      title: "Programming Robots with ROS",
      description: "Comprehensive book covering ROS fundamentals to advanced robotics programming",
      level: "Intermediate" as const,
      duration: "400 pages",
      icon: <Book size={24} />,
      tags: ["ROS", "C++", "Python"]
    },
    {
      title: "Arduino Robot Projects",
      description: "Build your first robot with Arduino - from sensors to autonomous navigation",
      level: "Beginner" as const,
      duration: "2 weeks",
      icon: <Code size={24} />,
      tags: ["Arduino", "Sensors", "Hardware"]
    }
  ];

  return (
    <Layout>
      <Hero />
      
      {/* Featured Resources Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Start Your Journey</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Handpicked resources to get you started with robotics and ROS
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/start-here"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Compass className="mr-2" size={20} />
              View Complete Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
            Explore by Category
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              to="/tutorials"
              className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center group border border-slate-200 dark:border-slate-600"
            >
              <Youtube className="mx-auto mb-4 text-red-600 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Video Tutorials</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">Curated YouTube playlists</p>
            </Link>

            <Link 
              to="/books"
              className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center group border border-slate-200 dark:border-slate-600"
            >
              <Book className="mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Books</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">Free and recommended reading</p>
            </Link>

            <Link 
              to="/tools"
              className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center group border border-slate-200 dark:border-slate-600"
            >
              <Code className="mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Tools & Platforms</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">ROS, Gazebo, Arduino, and more</p>
            </Link>

            <Link 
              to="/courses"
              className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center group border border-slate-200 dark:border-slate-600"
            >
              <Compass className="mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Courses</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">Hands-on learning experiences with courses</p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
