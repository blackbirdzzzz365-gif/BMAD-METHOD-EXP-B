/**
 * ID Generation Utilities
 */

/**
 * Generate a unique ID
 */
export function generateId(prefix?: string): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 9);
  return prefix ? `${prefix}_${timestamp}_${random}` : `${timestamp}_${random}`;
}

/**
 * Generate a session ID
 */
export function generateSessionId(): string {
  return generateId('session');
}

/**
 * Generate a message ID
 */
export function generateMessageId(): string {
  return generateId('msg');
}

/**
 * Validate ID format
 */
export function isValidId(id: string): boolean {
  return /^[a-zA-Z0-9_-]+$/.test(id);
}