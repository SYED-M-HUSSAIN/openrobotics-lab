import Layout from '../components/Layout';
import ResourceCard from '../components/ResourceCard';
import { Book, Search } from 'lucide-react';
import { useState } from 'react';

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const types = ['All', 'Free', 'Paid', 'Open Source'];

  const books = [
    {
      title: "A Gentle Introduction to ROS",
      description: "Concise beginner-level guide to ROS core concepts (topics, services, nodes) by Jason O'Kane. Highly recommended by the community.",
      level: "Beginner" as const,
      duration: "200 pages",
      icon: <Book size={24} />,
      href: "https://cse.sc.edu/~jokane/agitr/",
      tags: ["ROS", "Topics", "Services", "Nodes"],
      type: "Free"
    },
    {
      title: "Probabilistic Robotics",
      description: "Canonical reference on robotics uncertainty and perception by Sebastian Thrun, Wolfram Burgard & Dieter Fox. The definitive guide to probabilistic approaches in robotics.",
      level: "Advanced" as const,
      duration: "647 pages",
      icon: <Book size={24} />,
      href: "https://docs.ufpr.br/~danielsantos/ProbabilisticRobotics.pdf",
      tags: ["SLAM", "Localization", "Probability", "Perception", "Kalman Filters"],
      type: "Free"
    },
    {
      title: "Think Python: How to Think Like a Computer Scientist",
      description: "A solid introduction to computer science concepts using Python 3 by Allen B. Downey. Perfect for beginners learning programming fundamentals for robotics applications.",
      level: "Beginner" as const,
      duration: "292 pages",
      icon: <Book size={24} />,
      href: "https://greenteapress.com/thinkpython2/thinkpython2.pdf",
      tags: ["Python", "Programming", "Computer Science", "Fundamentals"],
      type: "Free"
    }
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'All' || book.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Robotics
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"> Books</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Essential reading materials from beginner guides to advanced research topics
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
                  placeholder="Search books..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                />
              </div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap gap-2">
              {types.slice(1).map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedType === type
                      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Books Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBooks.map((book, index) => (
                <ResourceCard key={index} {...book} />
              ))}
            </div>

            {filteredBooks.length === 0 && (
              <div className="text-center py-12">
                <Book className="mx-auto mb-4 text-slate-400 dark:text-slate-500" size={48} />
                <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">No books found</h3>
                <p className="text-slate-500 dark:text-slate-500">Try adjusting your search terms or type filter</p>
              </div>
            )}
          </div>

          {/* Free Resources Highlight */}
          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">📚 Featured Free Resources</h2>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3">Learning Path:</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">1. Programming Foundation</p>
                    <p className="text-sm opacity-90">Start with <strong>Think Python</strong> to build solid programming skills with Python 3</p>
                  </div>
                  <div>
                    <p className="font-medium">2. ROS Fundamentals</p>
                    <p className="text-sm opacity-90">Continue with <strong>A Gentle Introduction to ROS</strong> for robotics-specific concepts</p>
                  </div>
                  <div>
                    <p className="font-medium">3. Advanced Topics</p>
                    <p className="text-sm opacity-90">Master <strong>Probabilistic Robotics</strong> for SLAM, localization, and perception</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm opacity-90 text-center">
              💡 All books are completely free and available as PDF downloads!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Books;
