"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ConnectSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(200,169,110,0.25)",
    borderRadius: 2,
    padding: "14px 16px",
    color: "#e8eaf0",
    fontFamily: "var(--font-sans), 'DM Sans', sans-serif",
    fontSize: 14,
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono), 'DM Mono', monospace",
    fontSize: 10,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#4a5070",
    display: "block",
    marginBottom: 8,
  };

  return (
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "60px 32px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono), 'DM Mono', monospace",
          fontSize: 11,
          color: "#c8a96e",
          letterSpacing: "0.15em",
          marginBottom: 16,
        }}
      >
        — Get in Touch
      </div>
      <h2
        style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          fontWeight: 900,
          fontSize: 52,
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
          marginBottom: 16,
        }}
      >
        Connect
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sans), 'DM Sans', sans-serif",
          fontWeight: 300,
          color: "#6070a0",
          lineHeight: 1.7,
          fontSize: 15,
          maxWidth: 520,
          marginBottom: 56,
        }}
      >
        Whether you&apos;re exploring AI governance for regulated industries,
        looking to discuss analytics strategy, or just want to exchange ideas
        — reach out. Happy to connect.
      </p>

      <div style={{ maxWidth: 560 }}>
        {status === "success" ? (
          <div
            style={{
              padding: "40px 36px",
              border: "1px solid rgba(0,229,160,0.2)",
              background: "rgba(0,229,160,0.03)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 12,
                color: "#00e5a0",
              }}
            >
              Message sent.
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans), 'DM Sans', sans-serif",
                fontWeight: 300,
                color: "#6070a0",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              I&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#c8a96e")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(200,169,110,0.25)")}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#c8a96e")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(200,169,110,0.25)")}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.target.style.borderColor = "#c8a96e")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(200,169,110,0.25)")}
                placeholder="What's on your mind?"
              />
            </div>

            {status === "error" && (
              <div
                style={{
                  fontFamily: "var(--font-mono), 'DM Mono', monospace",
                  fontSize: 12,
                  color: "#ff6b6b",
                  padding: "12px 16px",
                  border: "1px solid rgba(255,107,107,0.2)",
                  background: "rgba(255,107,107,0.03)",
                }}
              >
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                alignSelf: "flex-start",
                background: status === "loading" ? "rgba(200,169,110,0.4)" : "#c8a96e",
                color: "#080b12",
                border: "none",
                borderRadius: 2,
                padding: "14px 32px",
                fontFamily: "var(--font-mono), 'DM Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                transition: "opacity 0.2s",
              }}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
