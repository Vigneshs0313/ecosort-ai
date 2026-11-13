import React, { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, RotateCcw } from 'lucide-react'

interface Props {
  children: ReactNode
  fallbackTitle?: string
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo })
    console.error('EcoSort AI ErrorBoundary caught an unhandled error:', error, errorInfo)
  }

  handleReload = (): void => {
    window.location.reload()
  }

  handleGoHome = (): void => {
    window.location.hash = '#/'
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  handleClearData = (): void => {
    try {
      localStorage.removeItem('ecosort-ai:scans:v1')
    } catch (e) {
      console.error('Could not clear localStorage:', e)
    }
    this.handleReload()
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
          <div className="card max-w-xl w-full p-8 text-center shadow-lg border border-slate-200">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600 mb-4">
              <AlertTriangle size={32} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              {this.props.fallbackTitle || 'Something went wrong'}
            </h1>
            <p className="mt-2 text-slate-600">
              An unexpected error occurred in EcoSort AI. Your device data is safe, and you can reload or return to the homepage below.
            </p>

            {this.state.error && (
              <div className="mt-4 text-left">
                <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-900 font-mono break-words">
                  {this.state.error.message || String(this.state.error)}
                </div>
                {this.state.errorInfo?.componentStack && (
                  <details className="mt-2 text-xs text-slate-500">
                    <summary className="cursor-pointer hover:underline">View technical stack details</summary>
                    <pre className="mt-2 p-3 bg-slate-100 rounded-lg overflow-x-auto whitespace-pre-wrap font-mono">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button onClick={this.handleReload} className="btn-primary">
                <RefreshCw size={18} /> Reload Application
              </button>
              <button onClick={this.handleGoHome} className="btn-ghost">
                <Home size={18} /> Go to Homepage
              </button>
              <button onClick={this.handleClearData} className="btn-ghost !text-red-700 hover:!bg-red-50" title="Clear local scan cache if corrupted">
                <RotateCcw size={16} /> Reset Local Data
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
