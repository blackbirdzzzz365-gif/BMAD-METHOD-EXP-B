/**
 * Browser-based file reader using Fetch API
 */
export class BrowserFileReader {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async readFile(path) {
        const url = `${this.baseUrl}/${path}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to read file: ${response.status} ${response.statusText}`);
        }
        return response.text();
    }
    async readDir(path) {
        // In browser, we need a manifest file or API endpoint
        const url = `${this.baseUrl}/${path}/.manifest.json`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                return [];
            }
            const manifest = await response.json();
            return manifest.files || [];
        }
        catch {
            // Fallback: try to get directory listing from API
            const apiUrl = `${this.baseUrl}/api/list?path=${encodeURIComponent(path)}`;
            try {
                const response = await fetch(apiUrl);
                if (response.ok) {
                    const data = await response.json();
                    return data.files || [];
                }
            }
            catch {
                // Ignore API errors
            }
            return [];
        }
    }
    async exists(path) {
        const url = `${this.baseUrl}/${path}`;
        try {
            const response = await fetch(url, { method: 'HEAD' });
            return response.ok;
        }
        catch {
            return false;
        }
    }
    async isDirectory(path) {
        // Check if it has a manifest file
        const manifestUrl = `${this.baseUrl}/${path}/.manifest.json`;
        try {
            const response = await fetch(manifestUrl, { method: 'HEAD' });
            return response.ok;
        }
        catch {
            return false;
        }
    }
}
