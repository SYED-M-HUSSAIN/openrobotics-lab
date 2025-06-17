
import { ReactNode } from 'react';

interface ResourceCardProps {
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration?: string;
  icon?: ReactNode;
  href?: string;
  tags?: string[];
}

const ResourceCard = ({ title, description, level, duration, icon, href, tags }: ResourceCardProps) => {
  const levelColors = {
    Beginner: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
    Advanced: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
  };

  const CardContent = () => (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-6 h-full flex flex-col border border-slate-200 dark:border-slate-700">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
          <div className="flex items-center space-x-2 mb-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelColors[level]}`}>
              {level}
            </span>
            {duration && (
              <span className="text-xs text-slate-500 dark:text-slate-400">{duration}</span>
            )}
          </div>
        </div>
        {icon && (
          <div className="text-blue-600 ml-4">
            {icon}
          </div>
        )}
      </div>
      
      <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">{description}</p>
      
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default ResourceCard;
