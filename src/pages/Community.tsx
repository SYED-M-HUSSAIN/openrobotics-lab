
import Layout from '../components/Layout';
import { Users, Github, Youtube } from 'lucide-react';

const Community = () => {
  const communities = [
    {
      name: "ROS Community",
      description: "Official ROS community forums for discussions, help, and announcements",
      icon: <Users className="text-blue-600 dark:text-blue-400" size={32} />,
      href: "https://discourse.ros.org/",
      members: "25,000+",
      type: "Forum"
    },
    {
      name: "r/robotics",
      description: "Reddit community for robotics enthusiasts, researchers, and hobbyists",
      icon: <Users className="text-orange-600 dark:text-orange-400" size={32} />,
      href: "https://reddit.com/r/robotics",
      members: "180,000+",
      type: "Reddit"
    },
    {
      name: "Arduino Community",
      description: "Official Arduino forum for hardware projects and programming help",
      icon: <Users className="text-green-600 dark:text-green-400" size={32} />,
      href: "https://forum.arduino.cc/",
      members: "500,000+",
      type: "Forum"
    },
    {
      name: "Robotics GitHub",
      description: "Curated list of awesome robotics libraries, software and resources",
      icon: <Github className="text-slate-800 dark:text-slate-200" size={32} />,
      href: "https://github.com/topics/robotics",
      members: "100,000+",
      type: "Repository"
    }
  ];

  const channels = [
    {
      name: "Articulated Robotics",
      description: "Excellent tutorials on ROS, robot modeling, and practical robotics projects",
      subscribers: "45K+",
      href: "https://youtube.com/@ArticulatedRobotics"
    },
    {
      name: "Robotics Back-End",
      description: "In-depth technical content on robotics algorithms and implementation",
      subscribers: "28K+",
      href: "https://youtube.com/@RoboticsBackEnd"
    },
    {
      name: "The Construct",
      description: "ROS tutorials, simulations, and robotics programming courses",
      subscribers: "35K+",
      href: "https://youtube.com/@TheConstruct"
    },
    {
      name: "Muhammad Luqman",
      description: "Comprehensive ROS tutorials from basics to advanced topics with practical examples",
      subscribers: "15K+",
      href: "https://www.youtube.com/@robotisim/videos"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Join the
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"> Community</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Connect with fellow roboticists, get help, and share your projects
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Forums and Communities */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">Forums & Communities</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {communities.map((community, index) => (
                <a
                  key={index}
                  href={community.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow block border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {community.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{community.name}</h3>
                        <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded">
                          {community.type}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-3">{community.description}</p>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-500">
                        <Users size={16} className="mr-1" />
                        {community.members} members
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* YouTube Channels */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
              YouTube Channels to Follow
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {channels.map((channel, index) => (
                <a
                  key={index}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow block border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Youtube className="text-red-600 dark:text-red-400" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">{channel.name}</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-3">{channel.description}</p>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-500">
                        <Users size={16} className="mr-1" />
                        {channel.subscribers} subscribers
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 text-center">Community Guidelines</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">✅ Do</h3>
                  <ul className="space-y-2 opacity-90">
                    <li>• Ask clear, specific questions</li>
                    <li>• Share your code and error messages</li>
                    <li>• Help others when you can</li>
                    <li>• Search before posting</li>
                    <li>• Be respectful and patient</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">❌ Don't</h3>
                  <ul className="space-y-2 opacity-90">
                    <li>• Ask homework questions without effort</li>
                    <li>• Post without relevant details</li>
                    <li>• Be rude or dismissive</li>
                    <li>• Spam or self-promote excessively</li>
                    <li>• Share proprietary code without permission</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="opacity-90">
                  Remember: Everyone was a beginner once. Be kind, be helpful, and learn together! 🤖
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
