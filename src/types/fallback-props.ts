export interface FallbackProps {
  error: Error;
  resetErrorBoundary: (...args: unknown[]) => void;
}
