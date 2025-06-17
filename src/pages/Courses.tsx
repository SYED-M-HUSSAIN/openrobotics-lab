import Layout from '../components/Layout';
import ResourceCard from '../components/ResourceCard';
import { GraduationCap, Search } from 'lucide-react';
import { useState } from 'react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('All');

  const providers = ['All', 'Coursera', 'Udemy', 'Robot Ignite Academy', 'University of Michigan', 'Mimo', 'Henki Robotics', 'Community'];

  const courses = [
    // Python Programming Courses
    {
      title: "Python for Everybody Specialization",
      description: "Beginner-friendly, extensive exercises, full university-backed curriculum from University of Michigan. Highly rated in 2025 guides.",
      level: "Beginner" as const,
      duration: "8 months",
      icon: <GraduationCap size={24} />,
      href: "https://www.coursera.org/specializations/python",
      tags: ["Python", "Programming Fundamentals", "Data Structures"],
      provider: "University of Michigan"
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2025",
      description: "Project-focused learning with 100 real-world tasks. Led by Dr. Angela Yu with ~1.4M students enrolled.",
      level: "Beginner" as const,
      duration: "100 days",
      icon: <GraduationCap size={24} />,
      href: "https://www.udemy.com/course/100-days-of-code/",
      tags: ["Python", "Projects", "Web Development", "Data Science"],
      provider: "Udemy"
    },
    {
      title: "Python Mega Course: Build 20 Apps in 60 Days",
      description: "Build multiple apps across domains with hands-on Python. Rated 4.6/5 with comprehensive practical applications.",
      level: "Intermediate" as const,
      duration: "60 days",
      icon: <GraduationCap size={24} />,
      href: "https://www.udemy.com/course/the-python-mega-course/",
      tags: ["Python", "App Development", "Projects", "Full-Stack"],
      provider: "Udemy"
    },
    {
      title: "Fundamental + AI Developer Career Path",
      description: "From basic syntax to AI-powered Python, with interactive coding and real portfolio projects.",
      level: "Beginner" as const,
      duration: "6 months",
      icon: <GraduationCap size={24} />,
      href: "https://mimo.org/career-path/python-developer",
      tags: ["Python", "AI", "Machine Learning", "Portfolio"],
      provider: "Mimo"
    },
    // Robotics & ROS Courses
    {
      title: "Comprehensive ROS Training Bundle",
      description: "Bundle includes ROS Navigation in 5 Days, ROS2 Navigation, OpenCV for Robotics, Using Jetson Nano, ROS Manipulation—all in Python.",
      level: "Intermediate" as const,
      duration: "Self-paced",
      icon: <GraduationCap size={24} />,
      href: "https://www.robotigniteacademy.com/en/bundle/comprehensive-ros-training/",
      tags: ["ROS", "ROS2", "Navigation", "OpenCV", "Manipulation"],
      provider: "Robot Ignite Academy"
    },
    {
      title: "ROS for Beginners: Basics, Motion, and OpenCV",
      description: "Highly rated (~4979 reviews), ideal ROS1 intro course for beginners covering fundamentals to practical applications.",
      level: "Beginner" as const,
      duration: "8 weeks",
      icon: <GraduationCap size={24} />,
      href: "https://www.udemy.com/course/ros-essentials/",
      tags: ["ROS", "Motion Control", "OpenCV", "Robotics Basics"],
      provider: "Udemy"
    },
    {
      title: "ROS 2 for Beginners (ROS Jazzy – 2025)",
      description: "Covers ROS2 fundamentals with Python and C++, suited for those starting fresh with the latest ROS2 distribution.",
      level: "Beginner" as const,
      duration: "10 weeks",
      icon: <GraduationCap size={24} />,
      href: "https://www.udemy.com/course/ros2-for-beginners/",
      tags: ["ROS2", "Python", "C++", "Jazzy"],
      provider: "Udemy"
    },
    {
      title: "ROS for Beginners II: Localization, Navigation and SLAM",
      description: "Practical SLAM/nav applications in ROS with ~1567 reviews. Build on ROS basics to implement advanced navigation.",
      level: "Intermediate" as const,
      duration: "6 weeks",
      icon: <GraduationCap size={24} />,
      href: "https://www.udemy.com/course/ros-navigation/",
      tags: ["ROS", "SLAM", "Navigation", "Localization"],
      provider: "Udemy"
    },
    {
      title: "Robotics & ROS 2 Essentials",
      description: "Master's-level material made available as free GitHub course by Henki Robotics/UEF. Well-documented, well-designed intro to ROS2.",
      level: "Intermediate" as const,
      duration: "14 weeks",
      icon: <GraduationCap size={24} />,
      href: "https://github.com/henki-robotics/ros2-essentials",
      tags: ["ROS2", "Open Source", "University-Level", "Free"],
      provider: "Henki Robotics"
    },
    {
      title: "Edouard Renard's ROS2 Intro (Python/C++)",
      description: "Community-endorsed ROS2 introduction covering both Python and C++ implementations. Recommended alongside The Construct courses.",
      level: "Beginner" as const,
      duration: "8 weeks",
      icon: <GraduationCap size={24} />,
      href: "https://www.youtube.com/playlist?list=PLLSegLrePWgJudpPUof4-nVFHGkB62Izy",
      tags: ["ROS2", "Python", "C++", "Community Pick"],
      provider: "Community"
    },
    // Computer Vision Courses
    {
      title: "Deep Learning for Computer Vision",
      description: "Covers fundamental and advanced CV concepts including CNNs, object detection, segmentation, and face recognition. Hands-on projects using Python and TensorFlow/PyTorch.",
      level: "Intermediate" as const,
      duration: "6 weeks",
      icon: <GraduationCap size={24} />,
      href: "https://www.coursera.org/learn/deep-learning-computer-vision",
      tags: ["Computer Vision", "Deep Learning", "TensorFlow", "PyTorch"],
      provider: "Coursera"
    },
    {
      title: "Complete Computer Vision with Python and OpenCV",
      description: "Comprehensive course focusing on practical CV applications. Covers image processing, feature detection, object tracking, and real-time video processing with lots of code examples.",
      level: "Beginner" as const,
      duration: "12 weeks",
      icon: <GraduationCap size={24} />,
      href: "https://www.udemy.com/course/computer-vision-with-python/",
      tags: ["Computer Vision", "OpenCV", "Python", "Image Processing"],
      provider: "Udemy"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesProvider = selectedProvider === 'All' || course.provider === selectedProvider;
    return matchesSearch && matchesProvider;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Online
              <span className="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent"> Courses</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Top Python programming and Robotics/ROS courses from leading platforms - active and highly rated in 2025
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
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                />
              </div>
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              >
                {providers.map(provider => (
                  <option key={provider} value={provider}>{provider}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap gap-2">
              {providers.slice(1).map(provider => (
                <button
                  key={provider}
                  onClick={() => setSelectedProvider(provider)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedProvider === provider
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-600'
                  }`}
                >
                  {provider}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <ResourceCard key={index} {...course} />
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <GraduationCap className="mx-auto mb-4 text-slate-400 dark:text-slate-500" size={48} />
                <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">No courses found</h3>
                <p className="text-slate-500 dark:text-slate-500">Try adjusting your search terms or provider filter</p>
              </div>
            )}
          </div>

          {/* Learning Paths */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-8">Recommended Learning Paths</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4">🐍 Python & Projects Track</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-sm font-bold">1</div>
                    <span className="text-slate-700 dark:text-slate-300">Python for Everybody (Coursera) or Mimo Fundamental</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-sm font-bold">2</div>
                    <span className="text-slate-700 dark:text-slate-300">100 Days Bootcamp or Python Mega Course</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-sm font-bold">3</div>
                    <span className="text-slate-700 dark:text-slate-300">Fundamental + AI Developer Career Path (Mimo)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">🤖 ROS & Robotics Track</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold">1</div>
                    <span className="text-slate-700 dark:text-slate-300">Robotics & ROS 2 Essentials (Henki) or ROS for Beginners</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold">2</div>
                    <span className="text-slate-700 dark:text-slate-300">ROS 2 for Beginners + ROS II Localization/SLAM</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold">3</div>
                    <span className="text-slate-700 dark:text-slate-300">Robot Ignite Academy Comprehensive Bundle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
