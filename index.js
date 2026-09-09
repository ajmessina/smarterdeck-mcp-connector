#!/usr/bin/env node

/**
 * SmarterDeck AI — MCP Stdio-to-SSE Remote Gateway
 * Bridges local MCP clients (Claude Desktop, Cursor) to SmarterDeck Cloud Run.
 * 
 * ZERO-RETENTION GUARANTEE:
 * No credentials or presentation data are stored locally or in this proxy.
 */

import { spawn } from "child_process";

// Public endpoint of the hosted SmarterDeck MCP service
const REMOTE_SSE_URL = "https://smarterdeck-backend-599892281817.us-east1.run.app/mcp/sse";

// API Key is provided by user environment variable or CLI argument
const apiKey = process.env.SMARTERDECK_API_KEY || process.argv[2];

if (!apiKey) {
  console.error("\n❌ [SmarterDeck MCP] Error: SMARTERDECK_API_KEY is required.");
  console.error("👉 Get your free API key at: https://smarterdeck.com/dashboard?view=api_keys");
  console.error("Usage: SMARTERDECK_API_KEY=smd_live_... npx @smarterdeck/mcp-connector\n");
  process.exit(1);
}

// Spawns mcp-remote proxy bridging local stdio (Claude Desktop / Cursor) to remote Cloud Run SSE endpoint
const child = spawn("npx", [
  "-y",
  "mcp-remote",
  REMOTE_SSE_URL,
  "--header",
  `Authorization: Bearer ${apiKey}`
], {
  stdio: "inherit",
  shell: true
});

child.on("exit", (code) => {
  process.exit(code || 0);
});
