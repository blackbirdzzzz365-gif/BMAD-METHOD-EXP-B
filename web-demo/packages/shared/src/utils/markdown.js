/**
 * Markdown Processing Utilities
 */
/**
 * Extract YAML frontmatter from markdown content
 */
export function extractFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) {
        return { frontmatter: null, content };
    }
    try {
        // Simple YAML parsing (for basic key-value pairs)
        const yamlContent = match[1];
        const frontmatter = {};
        yamlContent.split('\n').forEach(line => {
            const colonIndex = line.indexOf(':');
            if (colonIndex > 0) {
                const key = line.substring(0, colonIndex).trim();
                const value = line.substring(colonIndex + 1).trim();
                // Handle quoted strings
                if ((value.startsWith('"') && value.endsWith('"')) ||
                    (value.startsWith("'") && value.endsWith("'"))) {
                    frontmatter[key] = value.slice(1, -1);
                }
                else if (value === 'true') {
                    frontmatter[key] = true;
                }
                else if (value === 'false') {
                    frontmatter[key] = false;
                }
                else if (!isNaN(Number(value))) {
                    frontmatter[key] = Number(value);
                }
                else {
                    frontmatter[key] = value;
                }
            }
        });
        return { frontmatter, content: match[2].trim() };
    }
    catch (error) {
        console.error('Error parsing frontmatter:', error);
        return { frontmatter: null, content };
    }
}
/**
 * Extract code blocks from markdown
 */
export function extractCodeBlocks(content) {
    const blocks = [];
    const regex = /```(\w+)?\n([\s\S]*?)```/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        blocks.push({
            language: match[1] || 'text',
            code: match[2].trim(),
            index: match.index
        });
    }
    return blocks;
}
/**
 * Parse command syntax from markdown
 */
export function parseCommandSyntax(text) {
    // Match patterns like: /command <param1> [param2] - Description
    const match = text.match(/^(\/\w+)\s*((?:<[^>]+>|\[[^\]]+\]|\S+)*)\s*(?:-\s*(.*))?$/);
    if (!match)
        return null;
    const command = match[1];
    const paramString = match[2] || '';
    const description = match[3] || '';
    // Extract parameters
    const parameters = paramString
        .match(/<[^>]+>|\[[^\]]+\]|\S+/g)
        ?.map(p => p.trim())
        .filter(Boolean) || [];
    return { command, parameters, description };
}
/**
 * Convert markdown table to structured data
 */
export function parseMarkdownTable(tableText) {
    const lines = tableText.trim().split('\n');
    if (lines.length < 3)
        return []; // Need header, separator, and at least one row
    const headers = lines[0]
        .split('|')
        .map(h => h.trim())
        .filter(Boolean);
    const rows = [];
    for (let i = 2; i < lines.length; i++) {
        const cells = lines[i]
            .split('|')
            .map(c => c.trim())
            .filter(Boolean);
        if (cells.length === headers.length) {
            const row = {};
            headers.forEach((header, index) => {
                row[header] = cells[index];
            });
            rows.push(row);
        }
    }
    return rows;
}
