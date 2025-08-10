#!/usr/bin/env node

/**
 * Upload expansion packs to Cloudflare KV
 * 
 * Usage: node upload-packs.js <kv-namespace-id> <packs-directory>
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function uploadPacks(kvNamespaceId, packsDir) {
  console.log('📦 Uploading BMAD expansion packs to Cloudflare KV');
  console.log('================================================');
  
  // Check if wrangler is available
  const { execSync } = await import('child_process');
  
  try {
    execSync('wrangler --version', { stdio: 'ignore' });
  } catch {
    console.error('❌ Wrangler CLI not found. Please install it first:');
    console.error('   npm install -g wrangler');
    process.exit(1);
  }

  // Read pack directories
  const packDirs = await fs.readdir(packsDir);
  let uploadedCount = 0;

  for (const packId of packDirs) {
    const packPath = path.join(packsDir, packId);
    const configPath = path.join(packPath, 'config.yaml');

    // Check if it's a valid pack directory
    try {
      await fs.access(configPath);
    } catch {
      console.log(`⏭️  Skipping ${packId} (no config.yaml)`);
      continue;
    }

    console.log(`\n📦 Processing pack: ${packId}`);

    // Load pack data
    const packData = {
      id: packId,
      config: await loadYaml(configPath),
      agents: await loadMarkdownFiles(path.join(packPath, 'agents')),
      tasks: await loadMarkdownFiles(path.join(packPath, 'tasks')),
      templates: await loadFiles(path.join(packPath, 'templates')),
      frameworks: await loadFrameworks(path.join(packPath, 'frameworks')),
      workflows: await loadFiles(path.join(packPath, 'workflows')),
      lastUpdated: Date.now(),
    };

    // Upload to KV
    const key = `pack:${packId}`;
    const value = JSON.stringify(packData);
    
    console.log(`  📤 Uploading to KV (key: ${key})...`);
    
    try {
      execSync(
        `wrangler kv:key put --namespace-id="${kvNamespaceId}" "${key}" '${value}'`,
        { stdio: 'inherit' }
      );
      uploadedCount++;
      console.log(`  ✅ Successfully uploaded ${packId}`);
    } catch (error) {
      console.error(`  ❌ Failed to upload ${packId}:`, error.message);
    }
  }

  console.log(`\n✨ Upload complete! ${uploadedCount} packs uploaded.`);
}

async function loadYaml(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');
  // Simple YAML parsing (you might want to use js-yaml in production)
  const result = {};
  content.split('\n').forEach(line => {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      result[match[1]] = match[2].replace(/^["']|["']$/g, '');
    }
  });
  return result;
}

async function loadMarkdownFiles(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    const results = [];
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const content = await fs.readFile(path.join(dirPath, file), 'utf-8');
        results.push({
          id: file.replace('.md', ''),
          content,
        });
      }
    }
    
    return results;
  } catch {
    return [];
  }
}

async function loadFiles(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    const results = [];
    
    for (const file of files) {
      const content = await fs.readFile(path.join(dirPath, file), 'utf-8');
      results.push({
        id: file.replace(/\.[^.]+$/, ''),
        filename: file,
        content,
      });
    }
    
    return results;
  } catch {
    return [];
  }
}

async function loadFrameworks(dirPath) {
  const frameworks = [];
  
  try {
    // Check for subdirectories (classic, modern)
    const subdirs = await fs.readdir(dirPath);
    
    for (const subdir of subdirs) {
      const subdirPath = path.join(dirPath, subdir);
      const stat = await fs.stat(subdirPath);
      
      if (stat.isDirectory()) {
        const files = await loadMarkdownFiles(subdirPath);
        files.forEach(file => {
          file.category = subdir;
          frameworks.push(file);
        });
      }
    }
    
    // Also check root directory
    const rootFiles = await loadMarkdownFiles(dirPath);
    rootFiles.forEach(file => {
      file.category = 'general';
      frameworks.push(file);
    });
  } catch {
    // Directory doesn't exist
  }
  
  return frameworks;
}

// Main execution
const args = process.argv.slice(2);

if (args.length !== 2) {
  console.log('Usage: node upload-packs.js <kv-namespace-id> <packs-directory>');
  console.log('Example: node upload-packs.js abc123def456 ../../../BMAD-METHOD/expansion-packs');
  process.exit(1);
}

const [kvNamespaceId, packsDir] = args;

uploadPacks(kvNamespaceId, packsDir).catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});