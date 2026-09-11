# 🎯 SmarterDeck AI — Universal MCP Connector

[![smithery badge](https://smithery.ai/badge/contacto-n7el/smarterdeck)](https://smithery.ai/servers/contacto-n7el/smarterdeck)
[![Glama MCP](https://glama.ai/mcp/connectors/app.run.us-east1.smarterdeck-backend-599892281817/smarter-deck-ai-official-mcp/badges/score.svg)](https://glama.ai/mcp/connectors/app.run.us-east1.smarterdeck-backend-599892281817/smarter-deck-ai-official-mcp)
[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue.svg)](https://modelcontextprotocol.io)
[![Zero Retention](https://img.shields.io/badge/Security-Zero--Retention-green.svg)](https://smarterdeck.com/security)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Compile agency-grade, executive presentation suites directly from Claude Desktop, Cursor IDE, Windsurf, or any autonomous LLM agent.**

SmarterDeck AI is an autonomous presentation engine that compiles a **5-in-1 multi-format suite** from a single prompt or raw enterprise dataset in under 30 seconds:

1. 📊 **PowerPoint (.pptx)**: 100% native vector DrawingML shapes, custom theme typography, and editable cards (zero flat screenshots).
2. 🌐 **Interactive Web Deck (.html)**: Responsive slides with smooth navigation and animations.
3. 📈 **Executive KPI Dashboard (.html)**: Real-time interactive metrics, charts, and financial indicators.
4. 🎨 **Whiteboard Infographic (.html)**: Sketch-style canvas designed for quick visual synthesis.
5. 📑 **Vector PDF (.pdf)**: High-definition vector document ready for executive printing.

---

## ⚡ Quickstart (2 Minutes)

### Option A: Install via Smithery CLI (Recommended)

To install SmarterDeck for Claude Desktop automatically via [Smithery](https://smithery.ai/servers/contacto-n7el/smarterdeck):

```bash
npx -y smithery mcp add contacto-n7el/smarterdeck
```

---

### Option B: Manual Configuration

1. Get your API Key at: 👉 **[smarterdeck.com/dashboard?view=api_keys](https://smarterdeck.com/dashboard?view=api_keys)**
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

## 🛠️ Available MCP Tools

### 1. `generate_presentation_suite`
Compiles raw data, business reports, or strategic concepts into the complete 5-in-1 executive suite.

**Parameters:**
| Parameter | Type | Required | Description |
|---|---|---|---|
| `prompt` | `string` | **Yes** | Detailed description of the presentation content, business goals, and metrics to include. |
| `theme` | `string` | No | Visual theme palette: `corporate`, `minimal`, `technical`, `financial`, `bold`, `nature`, `executive`. Default: `corporate`. |
| `slides_count` | `integer` | No | Target number of slides (between 3 and 15). Default: `6`. |
| `include_raw_data` | `boolean` | No | Whether to include synthetic data extraction tables in the response. Default: `false`. |

**Output Structure:**
Returns a Markdown table with ephemeral download links (60-minute expiration) for:
- Editable DrawingML PowerPoint (.pptx)
- Interactive Presentation (.html)
- Real-time Executive Dashboard (.html)
- Infographic Whiteboard (.html)
- Executive PDF (.pdf)

---

### 2. `list_themes`
Retrieves all available design themes with their primary, secondary, and accent color hex codes, plus font pairings.

**Parameters:** None.

---

### 3. `get_quota`
Queries the authenticated user's current account status, available generation credits, active subscription tier, and API key permissions.

**Parameters:** None.

---

### 4. `health_check`
Performs an operational readiness and latency check against the SmarterDeck generation pipeline.

**Parameters:** None.

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
