/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ShieldAlert, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught rendering error in Crotteau Parts App:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center bg-zinc-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
          <div className="max-w-md p-8 bg-white dark:bg-slate-900 rounded-xl border border-zinc-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="flex justify-center">
              <div className="p-3 bg-red-100 dark:bg-red-950/40 rounded-full text-red-600 dark:text-red-400">
                <ShieldAlert className="w-10 h-10" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-xl font-bold font-sans tracking-tight">System Render Intercepted</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                An unexpected chunk or render anomaly occurred. Crotteau's fault-tolerance protocol has safely isolated the incident.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 bg-zinc-100 dark:bg-slate-950 rounded text-left border border-zinc-200 dark:border-slate-850 font-mono text-[10px] text-slate-600 dark:text-slate-400 overflow-x-auto max-h-24">
                {this.state.error.message || 'Unknown runtime render crash'}
              </div>
            )}

            <button
              onClick={this.handleReset}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold font-mono text-xs uppercase tracking-wider rounded-lg transition-colors shadow-lg shadow-amber-500/10 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Restart System Router
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
