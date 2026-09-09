export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  whatItDoes: string;
  problem: string;
  mainIdea: string;
  technologies: readonly string[];
  liveUrl: string;
  githubUrl: string;
  image?: {
    src: string;
    alt: string;
  };
  visual: {
    eyebrow: string;
    nodes: readonly string[];
    caption: string;
  };
};

export const projects: readonly Project[] = [
  {
    id: "prism",
    number: "01",
    title: "Prism",
    subtitle: "AI software engineering teammate",
    description:
      "A production multi-agent AI system that transforms software engineering issues into grounded implementation plans, executes and validates changes, and generates GitHub pull request drafts.",
    whatItDoes:
      "Takes a raw engineering issue through a structured workflow to understand the repository, plan implementation, run tests, debug failures, and prepare a pull request.",
    problem:
      "Engineers lose significant time understanding unfamiliar codebases, planning changes, running tests, and preparing pull requests.",
    mainIdea:
      "Coordinate specialized agents grounded in the actual repository, with human approval checkpoints and isolated test execution.",
    technologies: [
      "6 agents",
      "LangGraph",
      "RAG",
      "Human-in-the-loop",
      "LangSmith",
      "Modal",
      "GitHub automation",
    ],
    liveUrl: "https://prism-beta-one.vercel.app/",
    githubUrl: "",
    visual: {
      eyebrow: "Repository-grounded execution",
      nodes: [
        "Issue",
        "Planner",
        "Code navigator",
        "Human approval",
        "Test runner",
        "Debugger",
        "GitHub PR",
      ],
      caption: "Six agents. One controlled path from issue to pull request.",
    },
  },
  {
    id: "signal",
    number: "02",
    title: "Signal",
    subtitle: "Autonomous startup & funding intelligence",
    description:
      "An autonomous AI system that collects, processes, evaluates, and organizes startup and funding intelligence from multiple sources.",
    whatItDoes:
      "Collects multi-source information, extracts structured entities, evaluates evidence, and maintains semantic memory to produce cleaner intelligence.",
    problem:
      "Startup and funding information is fragmented, making it difficult to collect, structure, validate, and deduplicate efficiently.",
    mainIdea:
      "Combine parallel collection, structured extraction, semantic memory, and LLM evaluation in a 15-node autonomous workflow.",
    technologies: [
      "15-node workflow",
      "LangGraph",
      "Semantic memory",
      "Tool calling",
      "LLM evaluation",
      "Supabase pgvector",
    ],
    liveUrl: "https://signal-topaz-nu.vercel.app/",
    githubUrl: "",
    visual: {
      eyebrow: "Multi-source intelligence loop",
      nodes: [
        "Sources",
        "Parallel collect",
        "Extract",
        "Resolve entities",
        "Evaluate",
        "Semantic memory",
        "Intelligence",
      ],
      caption: "Fragmented signals become structured, evaluated intelligence.",
    },
  },
  {
    id: "grape-guru",
    number: "03",
    title: "Grape Guru",
    subtitle: "Voice AI for Indian agriculture",
    description:
      "A production conversational AI application combining voice interaction, RAG, vision, and weather intelligence for Indian agriculture.",
    whatItDoes:
      "Lets users speak naturally while combining agricultural knowledge retrieval, disease detection, and real-time weather intelligence.",
    problem:
      "Farmers need practical agricultural guidance in an accessible, conversational format that supports voice and regional languages.",
    mainIdea:
      "Connect speech, an LLM, domain tools, retrieval, and vision in one clear response pipeline.",
    technologies: [
      "Voice AI",
      "RAG",
      "Whisper",
      "Vision",
      "Multilingual",
      "Weather API",
    ],
    liveUrl: "https://grape-guru.vercel.app/",
    githubUrl: "",
    visual: {
      eyebrow: "Multimodal assistance pipeline",
      nodes: [
        "Voice",
        "Speech to text",
        "LLM router",
        "Tools + RAG",
        "Vision",
        "Weather",
        "Response",
      ],
      caption: "Local questions move through a multimodal, tool-grounded system.",
    },
  },
] as const;
