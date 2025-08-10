/**
 * BMAD Web Demo Shared Types
 * 
 * Central type definitions used across all packages
 */

// Re-export all types
export * from './pack.js';
export * from './websocket.js';
export * from './runtime.js';

// Additional utility types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type AsyncResult<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  metadata?: {
    timestamp: number;
    requestId: string;
    duration?: number;
  };
}