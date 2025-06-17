
import Layout from '../components/Layout';
import { CheckCircle, ArrowRight, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const StartHere = () => {
  const roadmapSteps = [
    {
      phase: "Foundation",
      level: "Beginner",
      duration: "2-4 weeks",
      color: "green",
      steps: [
        "Learn Python basics (variables, functions, classes)",
        "Understand basic electronics and circuits",
        "Get familiar with Linux terminal commands",
        "Set up your development environment"
      ]
    },
    {
      phase: "Arduino & Hardware",
      level: "Beginner",
      duration: "3-4 weeks", 
      color: "blue",
      steps: [
        "Arduino programming fundamentals",
        "Work with sensors (ultrasonic, IMU, cameras)",
        "Motor control and PWM",
        "Build your first robot (line follower)"
      ]
    },
    {
      phase: "ROS Fundamentals",
      level: "Intermediate",
      duration: "4-6 weeks",
      color: "orange",
      steps: [
        "Install and configure ROS2",
        "Understand nodes, topics, and services",
        "Write your first ROS2 node",
        "Work with ROS2 packages and launch files"
      ]
    },
    {
      phase: "Simulation & Visualization",
      level: "Intermediate", 
      duration: "3-4 weeks",
      color: "purple",
      steps: [
        "Learn Gazebo simulation environment",
        "Use RViz for visualization",
        "Create robot models (URDF)",
        "Simulate sensors and actuators"
      ]
    },
    {
      phase: "Advanced Topics",
      level: "Advanced",
      duration: "8+ weeks",
      color: "red",
      steps: [
        "SLAM (Simultaneous Localization and Mapping)",
        "Computer Vision with OpenCV",
        "Path planning and navigation",
        "Machine Learning for robotics"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-100 text-green-800 border-green-200",
      blue: "bg-blue-100 text-blue-800 border-blue-200", 
      orange: "bg-orange-100 text-orange-800 border-orange-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      red: "bg-red-100 text-red-800 border-red-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-orange-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Robotics Learning
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> Roadmap</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Follow this structured path to go from complete beginner to confident roboticist
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Clock className="mx-auto mb-3 text-blue-600" size={24} />
                <h3 className="font-semibold text-lg mb-2">20-26 Weeks</h3>
                <p className="text-gray-600">Total estimated time</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Users className="mx-auto mb-3 text-green-600" size={24} />
                <h3 className="font-semibold text-lg mb-2">Self-Paced</h3>
                <p className="text-gray-600">Learn at your own speed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <CheckCircle className="mx-auto mb-3 text-orange-600" size={24} />
                <h3 className="font-semibold text-lg mb-2">Practical</h3>
                <p className="text-gray-600">Hands-on projects included</p>
              </div>
            </div>

            {/* Roadmap Steps */}
            <div className="space-y-8">
              {roadmapSteps.map((phase, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Phase {index + 1}: {phase.phase}
                      </h2>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(phase.color)}`}>
                          {phase.level}
                        </span>
                        <span className="text-gray-600 flex items-center">
                          <Clock size={16} className="mr-1" />
                          {phase.duration}
                        </span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-300">
                      {index + 1}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-3">
                        <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>

                  {index < roadmapSteps.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <ArrowRight className="text-gray-400" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg p-8 text-white text-center mt-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="mb-6 opacity-90">
                Begin with our curated tutorials and build your first robot
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/tutorials"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Browse Tutorials
                </Link>
                <Link 
                  to="/projects"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StartHere;
