"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg 
                    className="w-10 h-10 text-red-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
                    />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <h2 className="text-2xl font-[var(--font-display)] mb-4 text-red-400">
                Bir Hata Oluştu
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Beklenmeyen bir hata meydana geldi. Lütfen sayfayı yenileyin veya 
                ana sayfaya dönün.
              </p>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-zinc-900/50 p-4 rounded-lg text-sm text-zinc-300">
                  <summary className="cursor-pointer text-red-400 mb-2">
                    Hata Detayları (Geliştirme Modu)
                  </summary>
                  <pre className="whitespace-pre-wrap text-xs">
                    {this.state.error.message}
                    {this.state.error.stack && `\n\n${this.state.error.stack}`}
                  </pre>
                </details>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button 
                onClick={() => window.location.reload()}
                className="block w-full rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 font-semibold transition-all duration-300 hover:from-amber-400 hover:to-amber-500 hover:shadow-lg hover:shadow-amber-500/25"
              >
                Sayfayı Yenile
              </button>
              
              <button 
                onClick={() => window.location.href = '/'}
                className="block w-full rounded-lg border border-white/20 text-white px-6 py-3 font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                Ana Sayfaya Dön
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="mt-12 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
