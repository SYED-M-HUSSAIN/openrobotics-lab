import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className, showText = true, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <div className={cn(
        "relative rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 shadow-lg",
        sizeClasses[size]
      )}>
        {/* Glossy effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-white/10 to-white/20"></div>
        
        {/* Inner glow */}
        <div className="absolute inset-[2px] rounded-[10px] bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600"></div>
        
        {/* Logo mark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-[60%] h-[60%]"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Stylized O with circuit-like design */}
            <circle
              cx="12"
              cy="12"
              r="8"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="12"
              cy="12"
              r="5"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="2 2"
            />
            <circle cx="12" cy="4" r="1.5" fill="white" />
            <circle cx="20" cy="12" r="1.5" fill="white" />
            <circle cx="12" cy="20" r="1.5" fill="white" />
            <circle cx="4" cy="12" r="1.5" fill="white" />
          </svg>
        </div>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={cn(
            "font-bold text-slate-800 dark:text-slate-100 leading-tight",
            textSizeClasses[size]
          )}>
            OpenRobotics
          </span>
          <span className={cn(
            "text-sm text-slate-600 dark:text-slate-400 -mt-1",
            size === 'lg' && "text-base"
          )}>
            Learning Lab
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;