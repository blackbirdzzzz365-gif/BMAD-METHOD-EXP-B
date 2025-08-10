import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { FileReader } from '../loader.js';

/**
 * Node.js file reader using fs module
 */
export class NodeFileReader implements FileReader {
  constructor(private basePath: string) {}

  async readFile(filePath: string): Promise<string> {
    const fullPath = path.join(this.basePath, filePath);
    return fs.readFile(fullPath, 'utf-8');
  }

  async readDir(dirPath: string): Promise<string[]> {
    const fullPath = dirPath ? path.join(this.basePath, dirPath) : this.basePath;
    
    try {
      const entries = await fs.readdir(fullPath);
      // Return just the entry names, not full paths
      return entries;
    } catch {
      return [];
    }
  }

  async exists(filePath: string): Promise<boolean> {
    const fullPath = path.join(this.basePath, filePath);
    
    try {
      await fs.access(fullPath);
      return true;
    } catch {
      return false;
    }
  }

  async isDirectory(filePath: string): Promise<boolean> {
    // If filePath doesn't start with /, it's relative to basePath
    const fullPath = filePath.startsWith('/') ? filePath : path.join(this.basePath, filePath);
    
    try {
      const stats = await fs.stat(fullPath);
      return stats.isDirectory();
    } catch {
      return false;
    }
  }
}