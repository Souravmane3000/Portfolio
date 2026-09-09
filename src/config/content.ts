export const capabilities = [
  "AI Agents",
  "Multi-Agent Systems",
  "Agentic Workflows",
  "RAG Systems",
  "LLM Orchestration",
  "AI Automation",
  "Tool Calling",
  "Human-in-the-Loop",
  "LLM Evaluation",
  "Production AI",
] as const;

export const process = ["Idea", "Architect", "Build", "Evaluate", "Ship"] as const;

export const stack = [
  {
    category: "AI & Agents",
    items: [
      "Python",
      "LangGraph",
      "LangChain",
      "CrewAI",
      "Agent Orchestration",
      "Multi-Agent Systems",
      "HITL",
    ],
  },
  {
    category: "LLM & RAG",
    items: [
      "RAG",
      "pgvector",
      "Semantic Search",
      "Vector Embeddings",
      "Prompt Engineering",
      "Tool Calling",
      "Structured Outputs",
      "LLM Evaluation",
    ],
  },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "REST APIs",
      "Supabase",
      "PostgreSQL",
      "Webhooks",
      "Serverless Architecture",
    ],
  },
  {
    category: "Frontend",
    items: ["Next.js", "TypeScript", "Vercel", "Zod"],
  },
  {
    category: "Observability & Automation",
    items: [
      "LangSmith",
      "n8n",
      "Git",
      "GitHub",
      "PyGitHub",
      "Cursor",
      "MCP",
    ],
  },
] as const;
