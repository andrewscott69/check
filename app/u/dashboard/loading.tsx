"use client"

import { Zap } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-6">
        {/* Main logo container with zoom animation only */}
        <div className="relative">
          {/* Static ring */}
          <div
            className="absolute inset-0 rounded-full border-4 border-primary/20"
            style={{ width: "80px", height: "80px" }}
          >
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1"></div>
          </div>

          {/* Inner circle */}
          <div className="relative w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            {/* Logo icon with zoom animation */}
            <Zap
              className="w-8 h-8 text-primary"
              style={{
                animation: "zoom 1.5s ease-in-out infinite",
              }}
            />
          </div>

          {/* Static dots */}
          <div className="absolute inset-0">
            <div className="absolute top-2 left-1/2 w-1 h-1 bg-primary/60 rounded-full transform -translate-x-1/2"></div>
            <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-primary/60 rounded-full transform -translate-x-1/2"></div>
            <div className="absolute left-2 top-1/2 w-1 h-1 bg-primary/60 rounded-full transform -translate-y-1/2"></div>
            <div className="absolute right-2 top-1/2 w-1 h-1 bg-primary/60 rounded-full transform -translate-y-1/2"></div>
          </div>
        </div>

        {/* Loading text with typing animation */}
        <div className="text-center space-y-2">
          <h2 className="text-lg font-semibold text-foreground animate-pulse">
            Loading
            <span className="inline-block animate-bounce" style={{ animationDelay: "0s" }}>
              .
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s" }}>
              .
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>
              .
            </span>
          </h2>
          <p className="text-sm text-muted-foreground">Please wait while we prepare everything</p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full animate-pulse"
            style={{
              width: "60%",
              animation: "loading-progress 2s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: "3s",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        @keyframes zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
      `}</style>
    </div>
  )
}
