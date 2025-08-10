import type { FileReader } from '../loader.js';

/**
 * Browser-based file reader using Fetch API
 */
export class BrowserFileReader implements FileReader {
  constructor(private baseUrl: string) {}

  async readFile(path: string): Promise<string> {
    const url = `${this.baseUrl}/${path}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to read file: ${response.status} ${response.statusText}`);
    }
    
    return response.text();
  }

  async readDir(path: string): Promise<string[]> {
    // In browser, we need a manifest file or API endpoint
    const url = `${this.baseUrl}/${path}/.manifest.json`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return [];
      }
      
      const manifest = await response.json() as any;
      return manifest.files || [];
    } catch {
      // Fallback: try to get directory listing from API
      const apiUrl = `${this.baseUrl}/api/list?path=${encodeURIComponent(path)}`;
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json() as any;
          return data.files || [];
        }
      } catch {
        // Ignore API errors
      }
      
      return [];
    }
  }

  async exists(path: string): Promise<boolean> {
    const url = `${this.baseUrl}/${path}`;
    
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }

  async isDirectory(path: string): Promise<boolean> {
    // Check if it has a manifest file
    const manifestUrl = `${this.baseUrl}/${path}/.manifest.json`;
    
    try {
      const response = await fetch(manifestUrl, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }
}