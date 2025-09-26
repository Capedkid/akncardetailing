"use client";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export default function LoadingSpinner({ 
  size = "md", 
  text = "Yükleniyor...", 
  className = "" 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      {/* Loading Spinner */}
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-zinc-800 rounded-full animate-spin`}>
          <div className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-transparent border-t-amber-500 rounded-full animate-spin`}></div>
        </div>
        
        {/* Inner ring */}
        <div 
          className={`absolute top-1 left-1 ${sizeClasses[size === "sm" ? "sm" : size === "md" ? "md" : "lg"]} border-4 border-transparent border-t-amber-400 rounded-full animate-spin`} 
          style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
        ></div>
        
        {/* Center dot */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${size === "sm" ? "w-1 h-1" : size === "md" ? "w-1.5 h-1.5" : "w-2 h-2"} bg-amber-500 rounded-full animate-pulse`}></div>
      </div>
      
      {/* Loading text */}
      {text && (
        <p className={`text-zinc-400 font-medium animate-pulse ${textSizeClasses[size]}`}>
          {text}
        </p>
      )}
    </div>
  );
}
