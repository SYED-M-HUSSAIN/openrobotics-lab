
import Layout from '../components/Layout';
import ResourceCard from '../components/ResourceCard';
import { Youtube, Search } from 'lucide-react';
import { useState } from 'react';

const Tutorials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'ROS/ROS2', 'Arduino', 'Computer Vision', 'SLAM', 'Machine Learning', 'Hardware'];

  const tutorials = [
    {
      title: "ROS2 Humble Complete Tutorial Series",
      description: "Comprehensive 20-part series covering ROS2 from installation to advanced topics including navigation and perception.",
      level: "Beginner" as const,
      duration: "8 hours",
      icon: <Youtube size={24} />,
      href: "https://youtube.com/playlist?list=PLLSegLrePWgIbIrA4iehUQ-impvIXdd9Q",
      tags: ["ROS2", "Python", "Navigation"],
      category: "ROS/ROS2"
    },
    {
      title: "Arduino Robotics for Beginners",
      description: "Learn to build robots with Arduino from scratch. Covers sensors, motors, and basic autonomous behaviors.",
      level: "Beginner" as const,
      duration: "6 hours",
      icon: <Youtube size={24} />,
      href: "https://youtube.com/playlist?list=PLGs0VKk2DiYw-L-RibttcvK-WBZm8WLEP",
      tags: ["Arduino", "Sensors", "Motors"],
      category: "Arduino"
    },
    {
      title: "Computer Vision with OpenCV and Python",
      description: "Master computer vision fundamentals and apply them to robotics applications including object detection and tracking.",
      level: "Intermediate" as const,
      duration: "10 hours",
      icon: <Youtube size={24} />,
      href: "https://youtube.com/playlist?list=PLMoSUbG1Q_r8jFS04rot-3NzidnV54Z2q",
      tags: ["OpenCV", "Python", "Object Detection"],
      category: "Computer Vision"
    },
    {
      title: "Robot Building and Workflows",
      description: "A full playlist that walks through the complete process of building Bluetooth/mobile robots, from concept to implementation.",
      level: "Intermediate" as const,
      duration: "5 hours",
      icon: <Youtube size={24} />,
      href: "https://www.youtube.com/playlist?list=PLBbhfIdh4Ndjsxl-NFCMLRI6fbdBrO4gj",
      tags: ["Robot Building", "Bluetooth", "Mobile Robots", "Hardware"],
      category: "Hardware"
    },
    {
      title: "Best Robotics Tutorial for Beginners",
      description: "A beginner-friendly series covering Arduino-based mobile robots, sensors, and fundamental concepts to get started with hands-on builds.",
      level: "Beginner" as const,
      duration: "4 hours",
      icon: <Youtube size={24} />,
      href: "https://www.youtube.com/playlist?list=PL4g1oAdmuCfqmYvURLzVFkMMUI7839biN",
      tags: ["Arduino", "Mobile Robots", "Sensors", "Beginner"],
      category: "Arduino"
    },
    {
      title: "Introduction to Robotics and Robots for Beginners",
      description: "Covers the mechanical build and fundamentals using platforms like Elegoo Smart Car—great for understanding practical robot assembly.",
      level: "Beginner" as const,
      duration: "3 hours",
      icon: <Youtube size={24} />,
      href: "https://www.youtube.com/playlist?list=PLGs0VKk2DiYxkoe2XNxDvVHqL5XG4dMWi",
      tags: ["Mechanical Build", "Elegoo Smart Car", "Assembly", "Beginner"],
      category: "Hardware"
    },
    {
      title: "Robotics Series – Arduino Lab",
      description: "Deep dives into autonomous mobile robots with ultrasonic sensors, object following, and Arduino-based control systems.",
      level: "Intermediate" as const,
      duration: "5 hours",
      icon: <Youtube size={24} />,
      href: "https://www.youtube.com/playlist?list=PL0_aoTs5sGaSDm8MzpOQ3r2RFg33z4xTy",
      tags: ["Arduino", "Autonomous Robots", "Ultrasonic Sensors", "Object Following"],
      category: "Arduino"
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || tutorial.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Video
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent"> Tutorials</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Handpicked YouTube tutorials and playlists from the best robotics educators
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500" size={20} />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.slice(1).map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tutorial Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial, index) => (
                <ResourceCard key={index} {...tutorial} />
              ))}
            </div>

            {filteredTutorials.length === 0 && (
              <div className="text-center py-12">
                <Youtube className="mx-auto mb-4 text-slate-400 dark:text-slate-500" size={48} />
                <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">No tutorials found</h3>
                <p className="text-slate-500 dark:text-slate-500">Try adjusting your search terms or category filter</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tutorials;
