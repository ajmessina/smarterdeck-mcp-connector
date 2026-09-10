# 🚀 SmarterDeck AI — Universal MCP Connector

[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue.svg)](https://modelcontextprotocol.io)
[![Zero Retention](https://img.shields.io/badge/Security-Zero--Retention-green.svg)](https://smarterdeck.com/security)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Compile agency-grade, executive presentation suites directly from Claude Desktop, Cursor IDE, or any autonomous LLM agent.**

SmarterDeck AI is the first autonomous presentation engine that compiles a **5-in-1 multi-format suite** from a single prompt:

1. 📊 **PowerPoint (.pptx)**: 100% native vector DrawingML shapes, custom theme typography, and editable cards (zero flat screenshots).
2. 🌐 **Interactive Web Deck (.html)**: Responsive slides with smooth navigation and animations.
3. 📈 **Executive KPI Dashboard (.html)**: Real-time interactive metrics, charts, and financial indicators.
4. 🎨 **Whiteboard Infographic (.html)**: Sketch-style canvas designed for quick visual synthesis.
5. 📑 **Vector PDF (.pdf)**: High-definition vector document ready for executive printing.

---

## ⚡ Quickstart (2 Minutes)

### 1. Get Your Free API Key
Sign up or log in to get your API Key at:  
👉 **[smarterdeck.com/dashboard?view=api_keys](https://smarterdeck.com/dashboard?view=api_keys)**

---

### 2. Connect to Anthropic Claude Desktop

Add SmarterDeck to your `claude_desktop_config.json`:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "smarterdeck": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://smarterdeck-backend-599892281817.us-east1.run.app/mcp",
        "--header",
        "Authorization: Bearer YOUR_SMARTERDECK_API_KEY"
      ]
    }
  }
}
```

Restart Claude Desktop. You will now see the `generate_presentation_suite` tool active.

---

### 3. Connect to Cursor IDE or Glama.ai / MCP Inspector

- **Streamable HTTP (Standard 2024-11-05 / 2025)**:  
  Endpoint: `https://smarterdeck-backend-599892281817.us-east1.run.app/mcp`  
  Header: `Authorization: Bearer YOUR_SMARTERDECK_API_KEY`
- **Legacy SSE Transport**:  
  Endpoint: `https://smarterdeck-backend-599892281817.us-east1.run.app/mcp/sse`

---

## 💡 Example Prompt in Claude Desktop

> *"Create a 5-slide executive expansion pitch for Q3 targeting enterprise retail clients. Use the financial theme and include revenue growth projections."*

Claude will automatically invoke SmarterDeck and return your interactive table with instant download links for all 5 formats.

---

## 🔒 Enterprise Security & Zero-Retention

* **In-Memory Compilation**: Presentations are compiled entirely in volatile memory (RAM). Prompt text and slide contents are never stored in databases.
* **Ephemeral Signed URLs**: Cloud Storage V4 signed URLs expire strictly after **60 minutes** and objects are purged after 24h.
* **Cryptographic Token Scoping**: Dual authentication with SHA-256 hashed API keys and instant revocation support.

---

## 📄 License
MIT © [SmarterDeck AI](https://smarterdeck.com)
