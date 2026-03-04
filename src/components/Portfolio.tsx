"use client";

import { useState, useEffect } from "react";
import ConnectSection from "./ConnectSection";

const NAV = [
  "Journey",
  "Impact Archive",
  "Governance Lab",
  "Innovation Forge",
  "Thought Leadership",
  "Skills",
  "Connect",
];

const JOURNEY = [
  {
    year: "2013–2015",
    era: "The Scientist",
    role: "NSF Research Analyst · Hiram College",
    desc: "Wrote computational simulations in C to model protein polymer folding transitions. Studied physical structures using statistical mechanics, early evidence of a pattern-seeking, systems-thinking mind.",
    tag: "Foundation",
  },
  {
    year: "2017–2018",
    era: "The Analyst",
    role: "Business Analytics Specialist · Case Western Reserve",
    desc: "MS in Business Analytics. Managed financial data systems, built dashboards for university CFO, and earned a merit scholarship.",
    tag: "Education",
  },
  {
    year: "2018–2022",
    era: "The Data Scientist",
    role: "Data Scientist → Senior Data Scientist · Cleveland Clinic",
    desc: "Built predictive models for marketing targeting and patient behavior. Led campaigns to 130% of annual leads and 190% of patient goals across 22 markets, up from 1 institute and 8 markets at the start.",
    tag: "Healthcare",
  },
  {
    year: "2022–2024",
    era: "The Strategist",
    role: "Analytics & Strategy Manager · Merkle",
    desc: "Led 3 teams serving AmEx, Goldman Sachs, AbbVie, Regions, and more. Built forecasting models with <2% margin of error. Drove $2B+ in incremental sales through campaign optimizations and 20% media ROI improvement.",
    tag: "Enterprise Scale",
  },
  {
    year: "2024–Now",
    era: "The Architect",
    role: "Senior Analytics Manager, CXM · Merkle/Dentsu",
    desc: "Leading GenAI strategy and enterprise AI adoption. Architecting RAG and agentic AI proofs of concept. Pioneering AI solutions for health vertical. Pitching 8-figure contracts. Leading staff augmentation for top pharma.",
    tag: "AI Pioneer",
  },
];

const GOVERNANCE = [
  {
    icon: "🔐",
    title: "Data Sovereignty & Enclaves",
    subtitle: "Solving for Data Leakage",
    desc: "Designing isolated VPC-style data environments that allow LLMs to operate on sensitive health and financial data without any exfiltration risk. Applied in production for Top 5 Global Pharma organizations.",
  },
  {
    icon: "🧬",
    title: "Privacy-Safe Clean Room Architecture",
    subtitle: "AMC · ADH · LiveRamp Safe Haven",
    desc: "Certified architect of Amazon Marketing Cloud and Google ADH clean room solutions. For Top 5 Global Pharma clients, led data architecture and end-to-end reporting design within LiveRamp Safe Haven — driving audience evaluation, targeting strategies, and measurable media performance while maintaining full PII compliance. Designed reporting use cases tied directly to business impact metrics.",
  },
  {
    icon: "⚖️",
    title: "RAG Compliance Layer",
    subtitle: "Solving for HIPAA Compliance",
    desc: "Designing retrieval-augmented generation pipelines that operate within strict regulatory boundaries. Ensuring knowledge bases remain auditable, explainable, and compliant with HIPAA and evolving AI governance standards.",
  },
  {
    icon: "🛡️",
    title: "AI Ethics & Guardrails Framework",
    subtitle: "Solving for Legal Risk",
    desc: "Establishing human-in-the-loop checkpoints, audit trails, and compliance-first agent design for regulated industries. Presented at enterprise level as modular, plug-and-play governance assets for Healthcare and Pharma clients.",
  },
];

const IMPACT = [
  {
    metric: "$2B+",
    label: "Incremental Sales Driven",
    vertical: "Retail · Financial Services",
    desc: "Cross-channel media optimization and audience targeting strategies across multiple Fortune 500 brands, consistently achieving 20%+ media ROI improvement.",
    color: "#00e5a0",
  },
  {
    metric: "<2%",
    label: "Forecasting Margin of Error",
    vertical: "Retail · E-Commerce",
    desc: "Built SEM and media spend forecasting models using time series, diminishing returns, and seasonality for a major big-box retailer. Achieved sub-2% error, exceeding client benchmarks.",
    color: "#7c6fff",
  },
  {
    metric: "30%",
    label: "Lead Generation Lift",
    vertical: "Financial Services",
    desc: "Omnichannel attribution and scenario planning for a super-regional bank. Incorporated Markov chain modeling and media mix optimization to improve lead output by 30%.",
    color: "#ff6b6b",
  },
  {
    metric: "8-Fig",
    label: "Contract Pitch Architected",
    vertical: "Global CPG · Dentsu",
    desc: "Lead analytics architect for unified measurement and AI transformation strategy for a global beverage brand. Positioned Dentsu for an 8-figure engagement.",
    color: "#c8a96e",
  },
  {
    metric: "1:10+",
    label: "ROAS Targets Exceeded",
    vertical: "Pharma · Tech · FinServ",
    desc: "Consistently delivered ROAS/ROI targets above 1:10 through predictive modeling, identity solutions (Merkury DataSource), and machine learning-driven audience targeting.",
    color: "#00cfff",
  },
  {
    metric: "Team of 8",
    label: "Staff Aug Model Led",
    vertical: "Top 10 Global Pharma",
    desc: "Currently leading a cross-functional team of engineers, data scientists, and analysts on AI-driven marketing initiatives for one of the world's largest pharmaceutical companies.",
    color: "#ff9f40",
  },
];

const INNOVATION = [
  {
    name: "Marketing Competitive Intelligence Platform",
    status: "Built & Deployed",
    tag: "AI Product",
    desc: "An AI-powered marketing intelligence platform integrating multi-API data ingestion, LLM-based scoring, and ML-driven segmentation. Generates competitive and customer insights automatically. Productionized with CI/CD, monitoring, and error handling.",
    stack: ["RAG", "LangChain", "OpenAI API", "Python", "CI/CD"],
    icon: "🧠",
  },
  {
    name: "DonorSync",
    status: "Active",
    tag: "Social Impact",
    desc: "An AI tool designed to synchronize and optimize non-profit donor data. Helps mission-driven organizations improve data accuracy, reduce duplication, and increase fundraising efficiency, applying enterprise-grade analytics to the social good sector.",
    stack: ["Python", "ML", "Data Engineering", "NLP"],
    icon: "🤝",
  },
  {
    name: "Agentic AI Prototypes",
    status: "In Progress",
    tag: "R&D",
    desc: "Actively building and testing GenAI agentic prototypes in Databricks, Google Vertex AI, and Microsoft Copilot Studio for analytics use cases. Includes RAG retrieval pipelines, multi-agent orchestration, and MCP server integration.",
    stack: ["Databricks", "Vertex AI", "Copilot Studio", "LangChain", "MCP"],
    icon: "⚡",
  },
];

const THOUGHT_LEADERSHIP = [
  {
    type: "Webinar",
    title: "AI & Analytics Services Showcase",
    org: "Merkle / Dentsu",
    desc: "Co-leading client-facing webinars on Merkle's advanced analytics capabilities, including GenAI use cases, clean room analytics, and identity solutions, as a strategic sales and education initiative.",
    icon: "📡",
  },
  {
    type: "Workshop",
    title: "Data Science & Clean Room Workshops",
    org: "Fortune 500 Paints & Coatings Co.",
    desc: "Leading hands-on data science workshops and cleanroom analytics consulting for one of the largest paints and coatings companies globally. Teaching attribution modeling, partner analytics, and privacy-safe data collaboration.",
    icon: "🎓",
  },
  {
    type: "Curriculum",
    title: "Reporting & Attribution Modeling Training Program",
    org: "Top U.S. Financial Services Company",
    desc: "Developed and led a comprehensive analytics training curriculum on reporting methodologies and attribution modeling for one of the largest financial services companies in the country, translating advanced data science into scalable internal knowledge and business decision frameworks.",
    icon: "📐",
  },
  {
    type: "Award",
    title: "Weatherhead's 5 Under 35",
    org: "Case Western Reserve University · 2024",
    desc: "Recognized among the top 5 rising leaders under 35 by Weatherhead School of Management, honoring impact in analytics, AI, and business innovation.",
    icon: "🏆",
  },
  {
    type: "Award",
    title: "Crain's 20 in Their Twenties",
    org: "Crain's Cleveland Business · 2022",
    desc: "Named one of Cleveland's top 20 young professionals, recognized for leadership in data science, marketing analytics, and cross-industry impact.",
    icon: "🌟",
  },
  {
    type: "Certificate",
    title: "Generative AI Engineering with Databricks",
    org: "2025",
    desc: "Certified in GenAI engineering covering LLM deployment, RAG architecture, and agentic workflow design on the Databricks platform.",
    icon: "📜",
  },
  {
    type: "Certificate",
    title: "AMC Clean Room Analytics Practitioner",
    org: "Amazon · 2022",
    desc: "Certified practitioner in Amazon Marketing Cloud, one of the most privacy-forward clean room platforms in the industry.",
    icon: "📜",
  },
];

const SKILLS = [
  {
    category: "Predictive & Statistical Modeling",
    icon: "📈",
    items: [
      "Forecasting",
      "Scenario Planning",
      "Propensity Modeling",
      "Lead Scoring",
      "Churn Prediction",
      "CLV Modeling",
      "ML Models (Regression, Classification, Clustering)",
      "Time Series Analysis",
      "A/B Testing",
      "Incrementality Testing",
      "Holdout Design",
      "Statistical Significance Testing",
    ],
  },
  {
    category: "Attribution & Measurement",
    icon: "🎯",
    items: [
      "Marketing Mix Modeling (MMM)",
      "Multi-Touch Attribution (MTA)",
      "Omnichannel Attribution",
      "Media Mix Optimization",
      "ROAS / ROI Analysis",
      "Lift Studies",
      "Markov Chain Attribution",
    ],
  },
  {
    category: "Audience & Media Intelligence",
    icon: "🔍",
    items: [
      "Audience Lookalike Modeling",
      "Audience Targeting Strategy",
      "Customer Segmentation",
      "Identity Solutions (Merkury, LiveRamp)",
      "Media Optimization",
      "RFM Analysis",
      "Next Best Action",
      "CRM Strategy",
    ],
  },
  {
    category: "AI & GenAI Engineering",
    icon: "🤖",
    items: [
      "RAG Pipeline Design",
      "Agentic AI Architecture",
      "LangChain",
      "Databricks",
      "Google Vertex AI",
      "Microsoft Copilot Studio",
      "Prompt Engineering",
      "Multi-Agent Orchestration",
      "MCP Integration",
      "Vector Databases",
      "LLM Deployment",
    ],
  },
  {
    category: "Data Infrastructure & Governance",
    icon: "🛡️",
    items: [
      "Clean Room Architecture (AMC, LiveRamp, ADH)",
      "HIPAA-Compliant AI Design",
      "Data Sovereignty",
      "ETL / ELT Pipelines",
      "Feature Engineering",
      "Data Modeling",
      "API Integration",
      "Data Quality Frameworks",
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "⚙️",
    items: [
      "Python",
      "SQL",
      "R",
      "Spark",
      "Databricks",
      "Tableau",
      "Power BI",
      "Looker",
      "Google Analytics",
      "Adobe Analytics",
      "Salesforce",
      "AWS",
      "GCP",
      "Azure",
      "dbt",
    ],
  },
  {
    category: "Leadership & Enablement",
    icon: "🎓",
    items: [
      "Curriculum Development",
      "Workshop Facilitation",
      "Executive Presentations",
      "Stakeholder Management",
      "Team Building & Staff Augmentation",
      "Proposal & Pitch Writing",
      "P&L Ownership",
      "Cross-functional Leadership",
    ],
  },
];

const BG = "#f2f2f0";

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [journeyActive, setJourneyActive] = useState(4);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: "#0b0e1c",
        fontFamily: "var(--font-sans), 'DM Sans', sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${BG}; }
        ::-webkit-scrollbar-thumb { background: #c0c5d8; border-radius: 2px; }
        .nav-btn { background: none; border: none; cursor: pointer; font-family: var(--font-mono), 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #6a7090; padding: 8px 16px; transition: all 0.3s; white-space: nowrap; }
        .nav-btn:hover { color: #c8a96e; }
        .nav-btn.active { color: #c8a96e; border-bottom: 1px solid #c8a96e; }
        .nav-btn.connect-btn { color: #c8a96e; border: 1px solid rgba(200,169,110,0.3); border-radius: 2px; margin-left: 8px; }
        .nav-btn.connect-btn:hover { background: rgba(200,169,110,0.08); }
        .nav-btn.connect-btn.active { background: rgba(200,169,110,0.1); border-color: #c8a96e; border-bottom: 1px solid #c8a96e; }
        .fade-in { animation: fadeIn 0.7s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .card { background: rgba(0,0,0,0.03); border: 1px solid rgba(0,0,0,0.07); border-radius: 2px; transition: all 0.3s; }
        .card:hover { background: rgba(0,0,0,0.05); border-color: rgba(200,169,110,0.3); }
        .tag { font-family: var(--font-mono), 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 10px; border-radius: 1px; }
        .chip { font-family: var(--font-mono), 'DM Mono', monospace; font-size: 10px; padding: 3px 8px; background: rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.1); border-radius: 1px; color: #6a7090; }
        .metric { font-family: var(--font-playfair), 'Playfair Display', serif; font-weight: 900; letter-spacing: -0.02em; }
        .section { max-width: 1100px; margin: 0 auto; padding: 60px 32px; }
        .hero-line { font-family: var(--font-playfair), 'Playfair Display', serif; font-weight: 900; line-height: 1.0; letter-spacing: -0.03em; }
        .subtle { font-family: var(--font-sans), 'DM Sans', sans-serif; font-weight: 300; color: #4a5570; line-height: 1.7; font-size: 15px; }
        .gold { color: #c8a96e; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
        @media (max-width: 800px) { .grid-2, .grid-3 { grid-template-columns: 1fr; } .hero-line { font-size: 42px !important; } }
        .timeline-node { cursor: pointer; transition: all 0.2s; }
        .timeline-node:hover .node-dot { background: #c8a96e; }
        .glow { box-shadow: 0 0 60px rgba(200,169,110,0.05); }
      `}</style>

      {/* Nav */}
      <nav
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: `rgba(242,242,240,0.95)`,
          backdropFilter: "blur(20px)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono), 'DM Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.15em",
              color: "#c8a96e",
              textTransform: "uppercase",
            }}
          >
            Su Latt · Strategic AI
          </div>
          <div style={{ display: "flex", gap: 4, overflowX: "auto", alignItems: "center" }}>
            {NAV.map((n, i) => (
              <button
                key={n}
                className={`nav-btn${active === i ? " active" : ""}${n === "Connect" ? " connect-btn" : ""}`}
                onClick={() => setActive(i)}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s" }}>

        {/* JOURNEY */}
        {active === 0 && (
          <div className="fade-in">
            <div
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.05)",
                padding: "80px 32px 60px",
                maxWidth: 1100,
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono), 'DM Mono', monospace",
                  fontSize: 11,
                  color: "#c8a96e",
                  letterSpacing: "0.15em",
                  marginBottom: 24,
                }}
              >
                From Physics to AI Architecture
              </div>
              <h1
                className="hero-line"
                style={{ fontSize: 72, marginBottom: 24, lineHeight: 1.05 }}
              >
                Bridging the gap
                <br />
                between{" "}
                <span style={{ fontStyle: "italic", color: "#6a7090" }}>
                  frontier AI
                </span>
                <br />
                and <span className="gold">regulated enterprise.</span>
              </h1>
              <p className="subtle" style={{ maxWidth: 560, marginBottom: 40 }}>
                A decade of engineering intelligence across healthcare,
                financial services, and global enterprise, now pioneering
                GenAI governance frameworks and agentic systems for regulated
                industries.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {[
                  "AMC Certified · Amazon",
                  "McKinsey Accelerator",
                  "Crain's 20 in 20s",
                  "Weatherhead 5 Under 35",
                  "GenAI · Databricks Certified",
                ].map((b) => (
                  <span key={b} className="chip">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="section">
              <div
                style={{
                  fontFamily: "var(--font-mono), 'DM Mono', monospace",
                  fontSize: 11,
                  color: "#8a90a0",
                  letterSpacing: "0.12em",
                  marginBottom: 40,
                  textTransform: "uppercase",
                }}
              >
                Career Evolution
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {JOURNEY.map((j, i) => (
                  <div
                    key={i}
                    className="timeline-node"
                    onClick={() => setJourneyActive(i)}
                    style={{
                      display: "flex",
                      gap: 32,
                      padding: "24px 0",
                      borderTop: "1px solid rgba(0,0,0,0.05)",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ minWidth: 100, paddingTop: 4 }}>
                      <div
                        style={{
                          fontFamily: "var(--font-mono), 'DM Mono', monospace",
                          fontSize: 11,
                          color: journeyActive === i ? "#c8a96e" : "#8a90a0",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {j.year}
                      </div>
                    </div>
                    <div
                      className="node-dot"
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: journeyActive === i ? "#c8a96e" : "#c8cdd8",
                        marginTop: 6,
                        minWidth: 8,
                        transition: "all 0.3s",
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          gap: 12,
                          alignItems: "baseline",
                          marginBottom: 6,
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                            fontSize: 20,
                            fontWeight: 700,
                            color: journeyActive === i ? "#0b0e1c" : "#6a7090",
                          }}
                        >
                          {j.era}
                        </span>
                        <span
                          className="tag"
                          style={{
                            background:
                              journeyActive === i
                                ? "rgba(200,169,110,0.1)"
                                : "transparent",
                            color:
                              journeyActive === i ? "#c8a96e" : "#8a90a0",
                            border: `1px solid ${
                              journeyActive === i
                                ? "rgba(200,169,110,0.3)"
                                : "rgba(0,0,0,0.07)"
                            }`,
                          }}
                        >
                          {j.tag}
                        </span>
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono), 'DM Mono', monospace",
                          fontSize: 11,
                          color: "#6a7090",
                          marginBottom: 10,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {j.role}
                      </div>
                      {journeyActive === i && (
                        <p className="subtle fade-in" style={{ fontSize: 14 }}>
                          {j.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 1,
                  marginTop: 60,
                  border: "1px solid rgba(0,0,0,0.07)",
                }}
              >
                {[
                  ["10+", "Years Experience"],
                  ["$2B+", "Incremental Sales"],
                  ["15", "Team Members Led"],
                  ["Fortune 500", "Clients Served"],
                ].map(([m, l]) => (
                  <div
                    key={l}
                    style={{
                      padding: "32px 24px",
                      textAlign: "center",
                      borderRight: "1px solid rgba(0,0,0,0.07)",
                    }}
                  >
                    <div
                      className="metric gold"
                      style={{ fontSize: 32, marginBottom: 8 }}
                    >
                      {m}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono), 'DM Mono', monospace",
                        fontSize: 10,
                        color: "#8a90a0",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* IMPACT ARCHIVE */}
        {active === 1 && (
          <div className="fade-in">
            <div className="section">
              <div
                style={{
                  fontFamily: "var(--font-mono), 'DM Mono', monospace",
                  fontSize: 11,
                  color: "#c8a96e",
                  letterSpacing: "0.15em",
                  marginBottom: 16,
                }}
              >
                Anonymized · NDA Compliant
              </div>
              <h2
                className="hero-line"
                style={{ fontSize: 52, marginBottom: 16 }}
              >
                Impact Archive
              </h2>
              <p className="subtle" style={{ maxWidth: 560, marginBottom: 60 }}>
                High-stakes engagements across Fortune 500 healthcare, finance,
                retail, and global CPG. Client names withheld to protect
                proprietary relationships.
              </p>
              <div className="grid-2">
                {IMPACT.map((item, i) => (
                  <div key={i} className="card" style={{ padding: 36 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 20,
                      }}
                    >
                      <div
                        className="metric"
                        style={{
                          fontSize: 52,
                          color: item.color,
                          lineHeight: 1,
                        }}
                      >
                        {item.metric}
                      </div>
                      <span
                        className="tag"
                        style={{
                          background: "rgba(0,0,0,0.04)",
                          color: "#6a7090",
                          border: "1px solid rgba(0,0,0,0.07)",
                        }}
                      >
                        {item.vertical}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                        fontSize: 17,
                        fontWeight: 600,
                        marginBottom: 12,
                        color: "#0b0e1c",
                      }}
                    >
                      {item.label}
                    </div>
                    <p className="subtle" style={{ fontSize: 13 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Verticals covered */}
              <div
                style={{
                  marginTop: 48,
                  padding: "28px 36px",
                  borderTop: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono), 'DM Mono', monospace",
                    fontSize: 10,
                    color: "#8a90a0",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 20,
                  }}
                >
                  Industries Served
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {[
                    "Global Pharma (Top 5)",
                    "Financial Services",
                    "Super-Regional Banking",
                    "Big-Box Retail",
                    "Global CPG",
                    "Healthcare Systems",
                    "Technology",
                    "Paints & Coatings (Fortune 500)",
                  ].map((v) => (
                    <span
                      key={v}
                      className="chip"
                      style={{ fontSize: 12, padding: "6px 14px" }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GOVERNANCE LAB */}
        {active === 2 && (
          <div className="fade-in">
            <div className="section">
              <div
                style={{
                  fontFamily: "var(--font-mono), 'DM Mono', monospace",
                  fontSize: 11,
                  color: "#c8a96e",
                  letterSpacing: "0.15em",
                  marginBottom: 16,
                }}
              >
                Proprietary Methodology
              </div>
              <h2
                className="hero-line"
                style={{ fontSize: 52, marginBottom: 16 }}
              >
                The Governance Lab
              </h2>
              <p className="subtle" style={{ maxWidth: 580, marginBottom: 60 }}>
                A proprietary collection of frameworks solving the &ldquo;Trust
                Barrier&rdquo; for AI adoption in Healthcare, Pharma, and regulated
                Financial Services. Built from years of production deployments,
                not theory.
              </p>
              <div className="grid-2" style={{ marginBottom: 20 }}>
                {GOVERNANCE.map((g, i) => (
                  <div key={i} className="card glow" style={{ padding: 36 }}>
                    <div style={{ fontSize: 28, marginBottom: 20 }}>
                      {g.icon}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono), 'DM Mono', monospace",
                        fontSize: 10,
                        color: "#c8a96e",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: 10,
                      }}
                    >
                      {g.subtitle}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                        fontSize: 22,
                        fontWeight: 700,
                        marginBottom: 14,
                      }}
                    >
                      {g.title}
                    </h3>
                    <p className="subtle" style={{ fontSize: 14 }}>
                      {g.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Certification strip */}
              <div
                style={{
                  padding: "28px 36px",
                  border: "1px solid rgba(200,169,110,0.15)",
                  background: "rgba(200,169,110,0.03)",
                  marginTop: 40,
                  display: "flex",
                  alignItems: "center",
                  gap: 40,
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono), 'DM Mono', monospace",
                    fontSize: 10,
                    color: "#c8a96e",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Verified Expertise
                </div>
                {[
                  "AMC Clean Room Practitioner · Amazon",
                  "LiveRamp Safe Haven · Applied",
                  "Google ADH · Applied",
                  "HIPAA Framework · Authored",
                ].map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>

              {/* Health vertical callout */}
              <div
                style={{
                  marginTop: 40,
                  padding: "36px",
                  border: "1px solid rgba(0,0,0,0.07)",
                  background: "rgba(0,0,0,0.02)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono), 'DM Mono', monospace",
                    fontSize: 10,
                    color: "#c8a96e",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  Current Initiative
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    fontSize: 26,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  Pioneering AI in the Health Vertical
                </h3>
                <p className="subtle" style={{ fontSize: 14, maxWidth: 680 }}>
                  Currently leading the development of AI solutions specifically
                  for the Health &amp; Life Sciences vertical at Merkle, including
                  patient audience intelligence, TV measurement strategies for
                  specialty pharmaceuticals, and HIPAA-compliant LLM deployment
                  architectures. Applied across Top 5 Global Pharma
                  organizations.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* INNOVATION FORGE */}
        {active === 3 && (
          <div className="fade-in">
            <div className="section">
              <div
                style={{
                  fontFamily: "var(--font-mono), 'DM Mono', monospace",
                  fontSize: 11,
                  color: "#c8a96e",
                  letterSpacing: "0.15em",
                  marginBottom: 16,
                }}
              >
                Personal R&D
              </div>
              <h2
                className="hero-line"
                style={{ fontSize: 52, marginBottom: 16 }}
              >
                Innovation Forge
              </h2>
              <p className="subtle" style={{ maxWidth: 560, marginBottom: 60 }}>
                Projects built outside the 9-to-5, proof that the work isn&apos;t
                just a career, it&apos;s a calling.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {INNOVATION.map((proj, i) => (
                  <div
                    key={i}
                    className="card"
                    style={{
                      padding: 40,
                      display: "flex",
                      gap: 40,
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ fontSize: 40, minWidth: 56 }}>{proj.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          gap: 12,
                          alignItems: "center",
                          marginBottom: 12,
                          flexWrap: "wrap",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                            fontSize: 22,
                            fontWeight: 700,
                          }}
                        >
                          {proj.name}
                        </h3>
                        <span
                          className="tag"
                          style={{
                            background: "rgba(200,169,110,0.08)",
                            color: "#c8a96e",
                            border: "1px solid rgba(200,169,110,0.2)",
                          }}
                        >
                          {proj.tag}
                        </span>
                        <span
                          className="tag"
                          style={{
                            background: "rgba(0,229,160,0.05)",
                            color: "#00e5a0",
                            border: "1px solid rgba(0,229,160,0.2)",
                          }}
                        >
                          {proj.status}
                        </span>
                      </div>
                      <p
                        className="subtle"
                        style={{ fontSize: 14, marginBottom: 20 }}
                      >
                        {proj.desc}
                      </p>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {proj.stack.map((s) => (
                          <span key={s} className="chip">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direction callout */}
              <div
                style={{
                  marginTop: 48,
                  padding: "40px",
                  border: "1px solid rgba(200,169,110,0.15)",
                  background:
                    "linear-gradient(135deg, rgba(200,169,110,0.03), rgba(242,242,240,0))",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono), 'DM Mono', monospace",
                    fontSize: 10,
                    color: "#c8a96e",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  Direction
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    fontSize: 28,
                    fontWeight: 700,
                    marginBottom: 16,
                    fontStyle: "italic",
                  }}
                >
                  Where the Work Is Headed
                </h3>
                <p className="subtle" style={{ fontSize: 14, maxWidth: 680 }}>
                  Every prototype in this forge is proof that modern AI can be
                  both powerful and governed, deployable in the most regulated
                  environments on earth. The next phase: taking these frameworks
                  to scale. Privacy-safe AI deployment, predictive intelligence
                  systems, and agentic automation built specifically for
                  healthcare, pharma, and financial services.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* THOUGHT LEADERSHIP */}
        {active === 4 && (
          <div className="fade-in">
            <div className="section">
              <div
                style={{
                  fontFamily: "var(--font-mono), 'DM Mono', monospace",
                  fontSize: 11,
                  color: "#c8a96e",
                  letterSpacing: "0.15em",
                  marginBottom: 16,
                }}
              >
                Industry Voice & Recognition
              </div>
              <h2
                className="hero-line"
                style={{ fontSize: 52, marginBottom: 16 }}
              >
                Thought Leadership
              </h2>
              <p className="subtle" style={{ maxWidth: 560, marginBottom: 60 }}>
                Teaching, publishing, and being recognized, evidence that the
                expertise extends beyond internal projects into the broader
                field.
              </p>
              <div className="grid-2">
                {THOUGHT_LEADERSHIP.map((item, i) => (
                  <div key={i} className="card" style={{ padding: 32 }}>
                    <div
                      style={{
                        display: "flex",
                        gap: 16,
                        marginBottom: 16,
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ fontSize: 24 }}>{item.icon}</span>
                      <div>
                        <span
                          className="tag"
                          style={{
                            background:
                              item.type === "Award"
                                ? "rgba(200,169,110,0.08)"
                                : "rgba(0,0,0,0.04)",
                            color:
                              item.type === "Award" ? "#c8a96e" : "#6a7090",
                            border: `1px solid ${
                              item.type === "Award"
                                ? "rgba(200,169,110,0.2)"
                                : "rgba(0,0,0,0.07)"
                            }`,
                          }}
                        >
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                        fontSize: 19,
                        fontWeight: 700,
                        marginBottom: 8,
                      }}
                    >
                      {item.title}
                    </h3>
                    <div
                      style={{
                        fontFamily: "var(--font-mono), 'DM Mono', monospace",
                        fontSize: 10,
                        color: "#6a7090",
                        letterSpacing: "0.08em",
                        marginBottom: 14,
                      }}
                    >
                      {item.org}
                    </div>
                    <p className="subtle" style={{ fontSize: 13 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Education strip */}
              <div
                style={{
                  marginTop: 48,
                  padding: "32px 36px",
                  borderTop: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono), 'DM Mono', monospace",
                    fontSize: 10,
                    color: "#8a90a0",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 20,
                  }}
                >
                  Academic Foundation
                </div>
                <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                        fontSize: 16,
                        fontWeight: 700,
                        marginBottom: 4,
                      }}
                    >
                      MS Business Analytics
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono), 'DM Mono', monospace",
                        fontSize: 11,
                        color: "#6a7090",
                      }}
                    >
                      Case Western Reserve · Weatherhead · Merit Scholarship
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                        fontSize: 16,
                        fontWeight: 700,
                        marginBottom: 4,
                      }}
                    >
                      BA Physics
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono), 'DM Mono', monospace",
                        fontSize: 11,
                        color: "#6a7090",
                      }}
                    >
                      Hiram College · Garfield Institute Scholar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SKILLS */}
        {active === 5 && (
          <div className="fade-in">
            <div className="section">
              <div
                style={{
                  fontFamily: "var(--font-mono), 'DM Mono', monospace",
                  fontSize: 11,
                  color: "#c8a96e",
                  letterSpacing: "0.15em",
                  marginBottom: 16,
                }}
              >
                Expertise Inventory
              </div>
              <h2
                className="hero-line"
                style={{ fontSize: 52, marginBottom: 16 }}
              >
                Skills & Capabilities
              </h2>
              <p className="subtle" style={{ maxWidth: 560, marginBottom: 60 }}>
                A living inventory of technical and strategic capabilities built
                across a decade of high-stakes deployments. Updated as the work
                evolves.
              </p>
              <div className="grid-2" style={{ gap: 24 }}>
                {SKILLS.map((cat, i) => (
                  <div key={i} className="card" style={{ padding: 32 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 20,
                      }}
                    >
                      <span style={{ fontSize: 22 }}>{cat.icon}</span>
                      <h3
                        style={{
                          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                          fontSize: 18,
                          fontWeight: 700,
                        }}
                      >
                        {cat.category}
                      </h3>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {cat.items.map((skill) => (
                        <span
                          key={skill}
                          className="chip"
                          style={{ fontSize: 11, padding: "4px 10px" }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 32,
                  padding: "20px 28px",
                  border: "1px solid rgba(200,169,110,0.15)",
                  background: "rgba(200,169,110,0.03)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    color: "#c8a96e",
                    fontFamily: "var(--font-mono), 'DM Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  Always Expanding
                </span>
                <span className="subtle" style={{ fontSize: 13 }}>
                  This section grows as new capabilities are added. Check back often.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* CONNECT */}
        {active === 6 && <ConnectSection />}
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(0,0,0,0.08)",
          padding: "32px",
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono), 'DM Mono', monospace",
            fontSize: 10,
            color: "#9aa0b0",
            letterSpacing: "0.1em",
          }}
        >
          Client details anonymized · NDA compliant
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono), 'DM Mono', monospace",
            fontSize: 10,
            color: "#9aa0b0",
            letterSpacing: "0.1em",
          }}
        >
          Su Latt · Strategic AI & Analytics
        </div>
      </footer>
    </div>
  );
}
