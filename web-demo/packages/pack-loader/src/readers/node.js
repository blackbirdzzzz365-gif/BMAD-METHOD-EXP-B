import { promises as fs } from 'node:fs';
import path from 'node:path';
/**
 * Node.js file reader using fs module
 */
export class NodeFileReader {
    basePath;
    constructor(basePath) {
        this.basePath = basePath;
    }
    async readFile(filePath) {
        const fullPath = path.join(this.basePath, filePath);
        return fs.readFile(fullPath, 'utf-8');
    }
    async readDir(dirPath) {
        const fullPath = dirPath ? path.join(this.basePath, dirPath) : this.basePath;
        try {
            const entries = await fs.readdir(fullPath);
            // Return just the entry names, not full paths
            return entries;
        }
        catch {
            return [];
        }
    }
    async exists(filePath) {
        const fullPath = path.join(this.basePath, filePath);
        try {
            await fs.access(fullPath);
            return true;
        }
        catch {
            return false;
        }
    }
    async isDirectory(filePath) {
        // If filePath doesn't start with /, it's relative to basePath
        const fullPath = filePath.startsWith('/') ? filePath : path.join(this.basePath, filePath);
        try {
            const stats = await fs.stat(fullPath);
            return stats.isDirectory();
        }
        catch {
            return false;
        }
    }
}
