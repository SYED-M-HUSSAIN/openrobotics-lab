
import Layout from '../components/Layout';
import ResourceCard from '../components/ResourceCard';
import { Compass, Search, Github } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const projects = [
    {
      title: "Arduino Line Following Robot",
      description: "Build a simple autonomous robot that follows a black line using infrared sensors and basic PID control.",
      level: "Beginner" as const,
      duration: "1-2 weeks",
      icon: <Compass size={24} />,
      href: "https://create.arduino.cc/projecthub/robocircuits/line-follower-robot-arduino-299bae",
      tags: ["Arduino", "Sensors", "PID", "Autonomous"]
    },
    {
      title: "ROS2 Turtlebot Navigation",
      description: "Program a Turtlebot to navigate autonomously using ROS2 navigation stack and SLAM for mapping.",
      level: "Intermediate" as const,
      duration: "3-4 weeks",
      icon: <Compass size={24} />,
      href: "https://emanual.robotis.com/docs/en/platform/turtlebot3/navigation/",
      tags: ["ROS2", "Navigation", "SLAM", "Turtlebot"]
    },
    {
      title: "Computer Vision Object Tracker",
      description: "Create a pan-tilt camera system that tracks and follows objects using OpenCV and servo motors.",
      level: "Intermediate" as const,
      duration: "2-3 weeks",
      icon: <Compass size={24} />,
      href: "https://www.instructables.com/Object-Tracking-Camera/",
      tags: ["Computer Vision", "OpenCV", "Servos", "Tracking"]
    },
    {
      title: "Robotic Arm Kinematics",
      description: "Build and program a 6-DOF robotic arm with forward and inverse kinematics using Arduino and servo motors.",
      level: "Advanced" as const,
      duration: "4-6 weeks",
      icon: <Compass size={24} />,
      href: "https://howtomechatronics.com/tutorials/arduino/diy-arduino-robot-arm-with-smartphone-control/",
      tags: ["Kinematics", "Robotic Arm", "Arduino", "Mathematics"]
    },
    {
      title: "Voice Controlled Robot",
      description: "Create a robot that responds to voice commands using speech recognition and natural language processing.",
      level: "Intermediate" as const,
      duration: "2-3 weeks",
      icon: <Compass size={24} />,
      href: "https://maker.pro/arduino/projects/how-to-build-a-voice-controlled-arduino-robot",
      tags: ["Voice Control", "NLP", "Python", "AI"]
    },
    {
      title: "Obstacle Avoiding Robot",
      description: "Design an autonomous robot that navigates around obstacles using ultrasonic sensors and path planning.",
      level: "Beginner" as const,
      duration: "1-2 weeks",
      icon: <Compass size={24} />,
      href: "https://create.arduino.cc/projecthub/Varun2905/obstacle-avoiding-robot-3936e5",
      tags: ["Ultrasonic", "Path Planning", "Autonomous", "Arduino"]
    },
    {
      title: "ROS Gazebo Simulation",
      description: "Create a custom robot model in Gazebo with sensors and test autonomous behaviors in simulation.",
      level: "Intermediate" as const,
      duration: "3-4 weeks",
      icon: <Compass size={24} />,
      href: "http://gazebosim.org/tutorials?tut=ros_overview",
      tags: ["Gazebo", "ROS", "Simulation", "URDF"]
    },
    {
      title: "Drone Autonomous Landing",
      description: "Program a quadcopter to autonomously detect and land on a target using computer vision and flight control.",
      level: "Advanced" as const,
      duration: "6-8 weeks",
      icon: <Compass size={24} />,
      href: "https://ardupilot.org/dev/docs/precision-landing-with-irlock.html",
      tags: ["Drone", "Computer Vision", "Flight Control", "Autonomous"]
    },
    {
      title: "Mobile Robot SLAM",
      description: "Implement simultaneous localization and mapping (SLAM) on a mobile robot using lidar and ROS.",
      level: "Advanced" as const,
      duration: "5-7 weeks",
      icon: <Compass size={24} />,
      href: "https://google-cartographer-ros.readthedocs.io/en/latest/",
      tags: ["SLAM", "Lidar", "ROS", "Mapping"]
    },
    {
      title: "Gesture Controlled Robot",
      description: "Build a robot that follows hand gestures captured through a camera using machine learning recognition.",
      level: "Intermediate" as const,
      duration: "3-4 weeks",
      icon: <Compass size={24} />,
      href: "https://www.hackster.io/nishantpandey955/hand-gesture-controlled-robot-142a53",
      tags: ["Gesture Control", "Machine Learning", "Computer Vision", "Python"]
    },
    {
      title: "Swarm Robotics Simulation",
      description: "Create a multi-robot system simulation where robots coordinate to complete tasks collectively.",
      level: "Advanced" as const,
      duration: "6-8 weeks",
      icon: <Compass size={24} />,
      href: "https://www.argos-sim.info/examples.php",
      tags: ["Swarm Robotics", "Multi-agent", "Coordination", "Simulation"]
    },
    {
      title: "Arduino Pet Robot",
      description: "Build an interactive pet robot that responds to touch, follows you around, and shows emotions through LEDs.",
      level: "Beginner" as const,
      duration: "2-3 weeks",
      icon: <Compass size={24} />,
      href: "https://www.instructables.com/Otto-DIY-build-your-own-robot/",
      tags: ["Arduino", "Interactive", "LEDs", "Touch Sensors"]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLevel = selectedLevel === 'All' || project.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Hands-on
              <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent"> Projects</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Learn by building real robots with step-by-step project guides and code examples
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
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
                />
              </div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap gap-2">
              {levels.slice(1).map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedLevel === level
                      ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-600'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ResourceCard key={index} {...project} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <Compass className="mx-auto mb-4 text-slate-400 dark:text-slate-500" size={48} />
                <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">No projects found</h3>
                <p className="text-slate-500 dark:text-slate-500">Try adjusting your search terms or level filter</p>
              </div>
            )}
          </div>

          {/* Project Progression */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-8">Suggested Project Progression</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 dark:text-green-400 font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4">Start Simple</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Arduino Pet Robot</li>
                  <li>• Line Following Robot</li>
                  <li>• Obstacle Avoiding Robot</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Add Intelligence</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Voice Controlled Robot</li>
                  <li>• Computer Vision Tracker</li>
                  <li>• ROS2 Navigation</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-4">Go Advanced</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Robotic Arm Kinematics</li>
                  <li>• Mobile Robot SLAM</li>
                  <li>• Swarm Robotics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contribute Section */}
          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-700 dark:to-red-700 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
              <Github className="mr-2" size={24} />
              Contribute Your Projects
            </h2>
            <p className="mb-6 opacity-90">
              Have you built an amazing robot? Share your project with the community and help others learn!
            </p>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Submit a Project
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
