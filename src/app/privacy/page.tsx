import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — MonkeAgent",
  description: "How MonkeAgent collects, uses, and protects your data.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: `MonkeAgent is a managed AI agent hosting service built by MonkeDAO on OpenClaw. When you use MonkeAgent, you trust us with information about how you work and communicate. This policy explains what we collect, why we collect it, and how we keep it safe.

We don't sell your data. We don't use it for advertising. We use it to run your agent and improve the service.`,
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    items: [
      {
        label: "Account information",
        detail:
          "Your email address and username when you register. Used to identify your account and send service-related communications.",
      },
      {
        label: "Agent configuration",
        detail:
          "Settings you configure for your agent — integrations, preferences, and connected services. Stored to run your agent correctly.",
      },
      {
        label: "Usage data",
        detail:
          "Aggregate metrics like uptime, request counts, and error rates. Used to monitor service health and improve reliability. We do not log the content of your agent's conversations.",
      },
      {
        label: "Billing information",
        detail:
          "Handled entirely by our payment processor. We store only your plan tier and subscription status — never raw card details.",
      },
      {
        label: "API keys (BYOK)",
        detail:
          "If you bring your own AI API keys, they are encrypted at rest and only decrypted in memory when your agent processes a request. We never read, share, or use your keys for any purpose other than running your agent.",
      },
    ],
  },
  {
    id: "what-we-dont-collect",
    title: "What we don't collect",
    content: `We do not read, log, or store the content of conversations between you and your agent beyond what is needed for the immediate request. Your messages, tasks, and outputs are yours.

We do not collect biometric data, location data, or any data from third-party sources beyond what you explicitly connect to your agent.`,
  },
  {
    id: "data-storage",
    title: "Data storage & security",
    content: `Your agent runs on dedicated infrastructure — not shared containers. Your data is isolated to your instance by default.

All data is encrypted in transit (TLS) and at rest (AES-256). API keys and credentials are stored in encrypted vaults. We follow industry-standard security practices and conduct regular security reviews.

Infrastructure is hosted on Hetzner data centers in the EU. If you require a specific data residency region, contact us.`,
  },
  {
    id: "third-parties",
    title: "Third-party services",
    content: `MonkeAgent integrates with platforms you choose — Telegram, Discord, Slack, and others. When you connect a platform, that platform's own privacy policy applies to data flowing through it. We only pass data to platforms that you've explicitly authorised.

If you use a managed AI plan, your prompts are processed by our selected AI provider under their privacy terms. We will always disclose which provider is in use.`,
  },
  {
    id: "your-rights",
    title: "Your rights",
    items: [
      { label: "Access", detail: "Request a copy of all data we hold about you." },
      { label: "Deletion", detail: "Delete your account and all associated data at any time. Deletion is permanent and irreversible." },
      { label: "Portability", detail: "Export your agent configuration and settings in a machine-readable format." },
      { label: "Correction", detail: "Update or correct any inaccurate account information." },
      { label: "Objection", detail: "Object to any processing of your data that goes beyond what is strictly necessary to provide the service." },
    ],
  },
  {
    id: "retention",
    title: "Data retention",
    content: `We retain your data for as long as your account is active. If you cancel your subscription, your data is retained for 30 days to allow recovery, then permanently deleted.

Aggregate and anonymised usage data (e.g. total request counts with no identifying information) may be retained indefinitely for service improvement purposes.`,
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: `We may update this policy as the service evolves. When we make material changes, we'll notify you by email and update the "Last updated" date below. Continued use of MonkeAgent after changes take effect constitutes acceptance of the revised policy.`,
  },
  {
    id: "contact",
    title: "Contact",
    content: `Questions about this policy or how your data is handled? Reach us at:`,
    email: "hello@monke.is",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--ink)" }}>
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,14,11,0.92)] backdrop-blur-xl"
        style={{ borderBottom: "0.5px solid rgba(74,143,93,0.18)" }}
      >
        <div
          className="mx-auto flex items-center justify-between px-8 py-4"
          style={{ maxWidth: 1200 }}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-lg tracking-tight"
            style={{ color: "#E8F0E9" }}
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ background: "var(--g-dark)", border: "1px solid var(--g)", fontSize: 16 }}
            >
              <img src="/m-agent-logo-white.svg" alt="MonkeAgent" style={{ width: "100%", height: "100%" }} />
            </span>
            MonkeAgent
          </Link>
          <Link
            href="/"
            className="text-xs font-medium uppercase tracking-widest transition-colors hover:text-[var(--g-light)]"
            style={{
              color: "rgba(134,201,148,0.55)",
              letterSpacing: "0.04em",
              fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
            }}
          >
            ← Back to home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div
        className="mx-auto px-8 pb-24"
        style={{ maxWidth: 760, paddingTop: "8rem" }}
      >
        {/* Header */}
        <div className="mb-12">
          <div
            className="mb-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium uppercase"
            style={{
              background: "rgba(24,70,35,0.5)",
              border: "0.5px solid var(--g)",
              color: "var(--g-light)",
              letterSpacing: "0.1em",
              fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--g-light)" }}
            />
            Legal
          </div>
          <h1
            className="mb-4 font-extrabold leading-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              color: "#F0F7F1",
            }}
          >
            Privacy Policy
          </h1>
          <p
            className="text-sm"
            style={{
              color: "rgba(134,201,148,0.4)",
              fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
            }}
          >
            Last updated: April 2026 · Applies to agent.monke.is
          </p>
        </div>

        {/* Table of contents */}
        <div
          className="mb-12 rounded-xl p-6"
          style={{
            background: "var(--surface2)",
            border: "0.5px solid rgba(74,143,93,0.18)",
          }}
        >
          <div
            className="mb-3 text-xs font-semibold uppercase"
            style={{
              color: "var(--g)",
              letterSpacing: "0.1em",
              fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
            }}
          >
            Contents
          </div>
          <ol className="space-y-1.5">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex items-center gap-3 text-sm transition-colors hover:text-[var(--g-light)]"
                  style={{ color: "rgba(134,201,148,0.55)" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
                      color: "rgba(134,201,148,0.3)",
                      fontSize: 11,
                      minWidth: 18,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, i) => (
            <section key={section.id} id={section.id}>
              {/* Section heading */}
              <div className="mb-5 flex items-center gap-4">
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
                    color: "var(--g)",
                    fontSize: 11,
                    letterSpacing: "0.05em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  className="font-extrabold"
                  style={{
                    fontSize: "1.2rem",
                    color: "#F0F7F1",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {section.title}
                </h2>
                <div
                  style={{
                    flex: 1,
                    height: 0.5,
                    background: "rgba(74,143,93,0.18)",
                  }}
                />
              </div>

              {/* Body */}
              {section.content && (
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(134,201,148,0.65)",
                    lineHeight: 1.85,
                    whiteSpace: "pre-line",
                  }}
                >
                  {section.content}
                </p>
              )}

              {/* Email contact */}
              {section.email && (
                <a
                  href={`mailto:${section.email}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--g-light)]"
                  style={{ color: "var(--g-light)" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
                    }}
                  >
                    → {section.email}
                  </span>
                </a>
              )}

              {/* Bullet items */}
              {section.items && (
                <ul className="mt-2 space-y-4">
                  {section.items.map((item) => (
                    <li
                      key={item.label}
                      className="rounded-xl p-4"
                      style={{
                        background: "var(--surface2)",
                        border: "0.5px solid rgba(74,143,93,0.12)",
                      }}
                    >
                      <div
                        className="mb-1 text-sm font-bold"
                        style={{ color: "#E8F0E9", letterSpacing: "-0.01em" }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(134,201,148,0.6)", lineHeight: 1.7 }}
                      >
                        {item.detail}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Footer */}
        <div
          className="mt-16 pt-8 text-center text-xs"
          style={{
            borderTop: "0.5px solid rgba(74,143,93,0.18)",
            color: "rgba(134,201,148,0.3)",
            fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
          }}
        >
          © 2026 MonkeDAO. agent.monke.is
        </div>
      </div>
    </main>
  );
}
