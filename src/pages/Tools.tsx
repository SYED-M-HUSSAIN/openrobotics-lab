import Layout from '../components/Layout';
import ResourceCard from '../components/ResourceCard';
import { Code, Search } from 'lucide-react';
import { useState } from 'react';

const Tools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Simulation', 'ROS/ROS2', 'Hardware', 'Computer Vision', 'Machine Learning', 'Development'];

  const tools = [
    {
      title: "ROS (Robot Operating System)",
      description: "Open-source robotics middleware suite providing libraries and tools to help software developers create robot applications.",
      level: "Intermediate" as const,
      duration: "Framework",
      icon: <Code size={24} />,
      href: "https://www.ros.org/",
      tags: ["ROS", "Middleware", "Communication"],
      category: "ROS/ROS2"
    },
    {
      title: "ROS 2",
      description: "Next generation of ROS with improved real-time capabilities, security, and multi-platform support.",
      level: "Intermediate" as const,
      duration: "Framework",
      icon: <Code size={24} />,
      href: "https://docs.ros.org/en/humble/",
      tags: ["ROS2", "Real-time", "Multi-platform"],
      category: "ROS/ROS2"
    },
    {
      title: "Gazebo",
      description: "High-fidelity 3D robot simulation with physics engine, sensors, and environmental modeling capabilities.",
      level: "Intermediate" as const,
      duration: "Simulator",
      icon: <Code size={24} />,
      href: "https://gazebosim.org/",
      tags: ["Simulation", "Physics", "3D"],
      category: "Simulation"
    },
    {
      title: "RViz",
      description: "3D visualization tool for ROS that displays sensor data, robot state, and planning results in real-time.",
      level: "Beginner" as const,
      duration: "Visualization",
      icon: <Code size={24} />,
      href: "http://wiki.ros.org/rviz",
      tags: ["Visualization", "ROS", "3D"],
      category: "ROS/ROS2"
    },
    {
      title: "Arduino IDE",
      description: "Simple integrated development environment for programming Arduino microcontrollers and compatible boards.",
      level: "Beginner" as const,
      duration: "IDE",
      icon: <Code size={24} />,
      href: "https://www.arduino.cc/en/software",
      tags: ["Arduino", "IDE", "Microcontroller"],
      category: "Hardware"
    },
    {
      title: "OpenCV",
      description: "Open-source computer vision library with Python, C++, and Java bindings for image processing and analysis.",
      level: "Intermediate" as const,
      duration: "Library",
      icon: <Code size={24} />,
      href: "https://opencv.org/",
      tags: ["Computer Vision", "Image Processing", "Python"],
      category: "Computer Vision"
    },
    {
      title: "Webots",
      description: "Professional robot simulation software with realistic physics and sensor modeling for rapid prototyping.",
      level: "Intermediate" as const,
      duration: "Simulator",
      icon: <Code size={24} />,
      href: "https://cyberbotics.com/",
      tags: ["Simulation", "Physics", "Professional"],
      category: "Simulation"
    },
    {
      title: "PyTorch",
      description: "Machine learning framework with dynamic computation graphs, popular for robotics AI and deep learning research.",
      level: "Advanced" as const,
      duration: "Framework",
      icon: <Code size={24} />,
      href: "https://pytorch.org/",
      tags: ["Machine Learning", "Deep Learning", "Python"],
      category: "Machine Learning"
    },
    {
      title: "MoveIt",
      description: "Motion planning framework for ROS providing inverse kinematics, path planning, and collision detection.",
      level: "Advanced" as const,
      duration: "Framework",
      icon: <Code size={24} />,
      href: "https://moveit.picknik.ai/main/index.html",
      tags: ["Motion Planning", "ROS", "Manipulation"],
      category: "ROS/ROS2"
    },
    {
      title: "PlatformIO",
      description: "Cross-platform IDE for embedded development supporting Arduino, ESP32, and hundreds of development boards.",
      level: "Intermediate" as const,
      duration: "IDE",
      icon: <Code size={24} />,
      href: "https://platformio.org/",
      tags: ["Embedded", "IDE", "Cross-platform"],
      category: "Hardware"
    },
    {
      title: "TensorFlow",
      description: "End-to-end machine learning platform with tools for deploying AI models on robots and edge devices.",
      level: "Advanced" as const,
      duration: "Framework",
      icon: <Code size={24} />,
      href: "https://www.tensorflow.org/",
      tags: ["Machine Learning", "AI", "Edge Computing"],
      category: "Machine Learning"
    },
    {
      title: "Foxglove Studio",
      description: "Modern robotics visualization and debugging tool with support for ROS bags, live data, and custom layouts.",
      level: "Intermediate" as const,
      duration: "Tool",
      icon: <Code size={24} />,
      href: "https://foxglove.dev/",
      tags: ["Visualization", "Debugging", "ROS"],
      category: "Development"
    }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Tools &
              <span className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent"> Platforms</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Essential software tools and platforms for robotics development and research
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
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
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
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map((tool, index) => (
                <ResourceCard key={index} {...tool} />
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <Code className="mx-auto mb-4 text-slate-400 dark:text-slate-500" size={48} />
                <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">No tools found</h3>
                <p className="text-slate-500 dark:text-slate-500">Try adjusting your search terms or category filter</p>
              </div>
            )}
          </div>

          {/* Getting Started Guide */}
          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">🚀 Getting Started Toolkit</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">For Beginners:</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• Arduino IDE - Hardware prototyping</li>
                  <li>• RViz - Visualization basics</li>
                  <li>• Gazebo - Simulation practice</li>
                  <li>• OpenCV - Computer vision intro</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">For Advanced Users:</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• ROS 2 - Production robotics</li>
                  <li>• MoveIt - Manipulation planning</li>
                  <li>• PyTorch - AI integration</li>
                  <li>• Foxglove - Professional debugging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tools;
