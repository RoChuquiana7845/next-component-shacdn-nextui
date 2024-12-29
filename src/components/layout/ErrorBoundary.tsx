import React, { ErrorInfo, ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackMessage?: string; 
  onRetry?: () => void; 
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
    if (this.props.onRetry) {
      this.props.onRetry();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <Alert variant="destructive" role="alert">
          <AlertTitle>Oops! Something went wrong.</AlertTitle>
          <AlertDescription>
            {this.state.error?.message || this.props.fallbackMessage || "An unexpected error occurred."}
          </AlertDescription>
          <div className="mt-4 flex space-x-2">
            <Button onClick={this.handleRetry} variant="outline">
              Try Again
            </Button>
            <Button onClick={() => window.location.reload()} variant="destructive">
              Reload Page
            </Button>
          </div>
        </Alert>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
