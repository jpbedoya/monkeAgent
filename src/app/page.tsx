import Link from "next/link";

/* ─────────────────────────────────────────
   NAVBAR
   ───────────────────────────────────────── */
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,14,11,0.92)] backdrop-blur-xl"
      style={{ borderBottom: "0.5px solid rgba(74,143,93,0.18)" }}
    >
      <div
        className="mx-auto flex items-center justify-between px-8 py-4"
        style={{ maxWidth: 1200 }}
      >
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight" style={{ color: "#E8F0E9" }}>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg border text-lg"
            style={{ background: "var(--g-dark)", border: "1px solid var(--g)", fontSize: 16 }}
          >
            🐵
          </span>
          MonkeAgent
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          <a href="#features" className="text-xs font-medium uppercase tracking-widest transition-colors hover:text-[var(--g-light)]" style={{ color: "rgba(134,201,148,0.55)", letterSpacing: "0.04em" }}>
            Features
          </a>
          <a href="#pricing" className="text-xs font-medium uppercase tracking-widest transition-colors hover:text-[var(--g-light)]" style={{ color: "rgba(134,201,148,0.55)", letterSpacing: "0.04em" }}>
            Pricing
          </a>
          <Link href="/privacy" className="text-xs font-medium uppercase tracking-widest transition-colors hover:text-[var(--g-light)]" style={{ color: "rgba(134,201,148,0.55)", letterSpacing: "0.04em" }}>
            Privacy
          </Link>
        </div>

        <Link
          href="/signup"
          className="rounded-md px-5 py-2 text-sm font-semibold transition hover:opacity-90"
          style={{ background: "var(--g)", color: "#0A0E0B", letterSpacing: "0.02em" }}
        >
          Get Early Access
        </Link>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────
   HERO
   ───────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="grid min-h-screen items-center px-8 pt-24"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        paddingTop: "7rem",
        paddingBottom: "5rem",
      }}
    >
      {/* Left: copy */}
      <div className="flex flex-col gap-6">
        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium uppercase"
          style={{
            background: "rgba(24,70,35,0.5)",
            border: "0.5px solid var(--g)",
            color: "var(--g-light)",
            letterSpacing: "0.1em",
            fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
            alignSelf: "flex-start",
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--g-light)", animation: "pulse 2s infinite" }} />
          agent.monke.is
        </div>

        {/* Headline */}
        <h1
          className="font-extrabold leading-tight tracking-tight"
          style={{ fontSize: "clamp(2.6rem, 5vw, 4rem)", letterSpacing: "-0.035em", lineHeight: 1.05, color: "#F0F7F1" }}
        >
          Your agent.
          <br />
          Already{" "}
          <em style={{ fontStyle: "normal", color: "var(--g-light)" }}>at work.</em>
        </h1>

        {/* Sub */}
        <p
          className="text-base leading-relaxed"
          style={{ color: "rgba(134,201,148,0.65)", maxWidth: 480, lineHeight: 1.75 }}
        >
          No dashboard to open. No tab to switch to. Your operator runs 24/7 and
          shows up where you already are.
        </p>

        {/* Channel badges */}
        <div className="flex flex-wrap gap-2">
          {["Telegram", "Discord", "Slack", "More"].map((ch) => (
            <div
              key={ch}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs"
              style={{
                background: "rgba(24,70,35,0.3)",
                border: "0.5px solid rgba(74,143,93,0.15)",
                color: "rgba(134,201,148,0.5)",
                fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
              }}
            >
              <span className="h-1 w-1 rounded-full" style={{ background: "var(--g-light)" }} />
              {ch}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/signup"
            className="rounded-lg px-7 py-3.5 text-sm font-bold transition hover:translate-y-[-1px]"
            style={{ background: "var(--g)", color: "#0A0E0B", letterSpacing: "0.01em" }}
          >
            Get Early Access
          </Link>
          <a
            href="#features"
            className="rounded-lg border px-6 py-3.5 text-sm font-medium transition"
            style={{ border: "0.5px solid rgba(134,201,148,0.35)", color: "rgba(134,201,148,0.65)" }}
          >
            See how it works
          </a>
        </div>
      </div>

      {/* Right: Telegram phone mockup */}
      <div className="flex justify-center">
        {/* Phone frame */}
        <div
          style={{
            width: 260,
            background: "#0F1510",
            border: "1.5px solid rgba(74,143,93,0.3)",
            borderRadius: 36,
            overflow: "hidden",
          }}
        >
          {/* Notch */}
          <div
            style={{
              height: 28,
              background: "#0A0E0B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 60, height: 4, background: "#1E2620", borderRadius: 4 }} />
          </div>

          {/* TG Header */}
          <div
            style={{
              background: "#17211A",
              padding: "10px 12px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              borderBottom: "0.5px solid rgba(74,143,93,0.15)",
            }}
          >
            <div
              style={{
                width: 32, height: 32,
                borderRadius: "50%",
                background: "var(--g-dark)",
                border: "1px solid var(--g)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, flexShrink: 0,
              }}
            >🐵</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#E8F2EA", letterSpacing: "-0.01em" }}>My Operator</div>
              <div style={{ fontSize: 9, color: "var(--g-light)", fontFamily: "var(--font-jetbrains), monospace" }}>online</div>
            </div>
            <div style={{ width: 5, height: 5, background: "var(--g-light)", borderRadius: "50%", animation: "pulse 2s infinite" }} />
          </div>

          {/* Chat body */}
          <div
            style={{
              padding: "10px 10px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              background: "#0F1510",
              minHeight: 340,
            }}
          >
            {/* Date divider */}
            <div style={{ textAlign: "center", fontSize: 9, color: "rgba(134,201,148,0.3)", fontFamily: "var(--font-jetbrains), monospace", margin: "4px 0" }}>
              Today, 8:00 AM
            </div>

            {/* Agent morning brief */}
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "88%", alignSelf: "flex-start" }}>
              <div style={{ background: "#1E2E21", border: "0.5px solid rgba(74,143,93,0.2)", borderRadius: "14px 14px 14px 4px", padding: "8px 11px", fontSize: 11, lineHeight: 1.55, color: "#C8E8CC" }}>
                Good morning. Here&apos;s what&apos;s on your plate today.
              </div>
              {/* Brief card */}
              <div style={{ background: "#17211A", border: "0.5px solid rgba(74,143,93,0.25)", borderRadius: 10, overflow: "hidden", marginTop: 2 }}>
                <div style={{ background: "#1A2C1D", padding: "5px 9px", fontSize: 9, fontWeight: 700, color: "var(--g-light)", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 5, height: 5, background: "var(--g-light)", borderRadius: "50%" }} />
                  Morning brief — Apr 10
                </div>
                <div style={{ padding: "7px 9px", display: "flex", flexDirection: "column", gap: 4 }}>
                  {[
                    { icon: "★", text: "4 unread emails flagged" },
                    { icon: "↑", text: "2pm meeting has new agenda" },
                    { icon: "!", text: "1 overdue task from yesterday" },
                    { icon: "◎", text: "Rest of the day is clear" },
                  ].map((row) => (
                    <div key={row.text} style={{ fontSize: 10, color: "rgba(200,232,204,0.8)", display: "flex", gap: 6, alignItems: "flex-start", lineHeight: 1.4 }}>
                      <span style={{ color: "var(--y)", flexShrink: 0 }}>{row.icon}</span>
                      {row.text}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ fontSize: 8, color: "rgba(134,201,148,0.3)", fontFamily: "var(--font-jetbrains), monospace", marginTop: 3, padding: "0 3px" }}>8:00 AM</div>
            </div>

            {/* User message */}
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "88%", alignSelf: "flex-end" }}>
              <div style={{ background: "#184623", borderRadius: "14px 14px 4px 14px", padding: "8px 11px", fontSize: 11, lineHeight: 1.55, color: "#D4F0D8" }}>
                Summarize those emails and draft replies
              </div>
              <div style={{ fontSize: 8, color: "rgba(134,201,148,0.3)", fontFamily: "var(--font-jetbrains), monospace", marginTop: 3, padding: "0 3px", textAlign: "right" }}>8:03 AM ✓✓</div>
            </div>

            {/* Agent reply */}
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "88%", alignSelf: "flex-start" }}>
              <div style={{ background: "#1E2E21", border: "0.5px solid rgba(74,143,93,0.2)", borderRadius: "14px 14px 14px 4px", padding: "8px 11px", fontSize: 11, lineHeight: 1.55, color: "#C8E8CC" }}>
                Done. 4 summaries ready, 3 draft replies written. Send or save as drafts?
              </div>
              <div style={{ fontSize: 8, color: "rgba(134,201,148,0.3)", fontFamily: "var(--font-jetbrains), monospace", marginTop: 3, padding: "0 3px" }}>8:03 AM</div>
            </div>

            {/* User: save drafts */}
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "88%", alignSelf: "flex-end" }}>
              <div style={{ background: "#184623", borderRadius: "14px 14px 4px 14px", padding: "8px 11px", fontSize: 11, lineHeight: 1.55, color: "#D4F0D8" }}>
                Save as drafts
              </div>
              <div style={{ fontSize: 8, color: "rgba(134,201,148,0.3)", fontFamily: "var(--font-jetbrains), monospace", marginTop: 3, padding: "0 3px", textAlign: "right" }}>8:04 AM ✓✓</div>
            </div>

            {/* Agent confirmation */}
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "88%", alignSelf: "flex-start" }}>
              <div style={{ background: "#1E2E21", border: "0.5px solid rgba(74,143,93,0.2)", borderRadius: "14px 14px 14px 4px", padding: "8px 11px", fontSize: 10, lineHeight: 1.7, color: "var(--g-light)", fontFamily: "var(--font-jetbrains), monospace" }}>
                ✓ 3 drafts saved to inbox<br />
                ✓ Overdue task rescheduled<br />
                ✓ Memory updated
              </div>
              <div style={{ fontSize: 8, color: "rgba(134,201,148,0.3)", fontFamily: "var(--font-jetbrains), monospace", marginTop: 3, padding: "0 3px" }}>8:04 AM</div>
            </div>
          </div>

          {/* Input bar */}
          <div
            style={{
              background: "#17211A",
              padding: "8px 10px",
              display: "flex",
              alignItems: "center",
              gap: 7,
              borderTop: "0.5px solid rgba(74,143,93,0.15)",
            }}
          >
            <div style={{ flex: 1, background: "#1E2620", borderRadius: 16, height: 26, display: "flex", alignItems: "center", padding: "0 10px" }}>
              <span style={{ fontSize: 9, color: "rgba(134,201,148,0.25)", fontFamily: "var(--font-jetbrains), monospace" }}>Message operator...</span>
            </div>
            <div style={{ width: 24, height: 24, background: "var(--g)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg viewBox="0 0 10 10" fill="none" style={{ width: 10, height: 10 }}>
                <path d="M1 9L9 5L1 1V4.5L6.5 5L1 5.5V9Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PROOF BAR
   ───────────────────────────────────────── */
function ProofBar() {
  return (
    <div
      style={{
        borderTop: "0.5px solid rgba(74,143,93,0.18)",
        borderBottom: "0.5px solid rgba(74,143,93,0.18)",
        background: "rgba(15,21,16,0.7)",
      }}
    >
      <div
        className="mx-auto flex items-center justify-center px-8 py-7"
        style={{ maxWidth: 1200, gap: "4rem" }}
      >
        {[
          { num: "3K+", label: "Community Members" },
          { num: "99.9%", label: "SLA-backed Uptime" },
          { num: "<5min", label: "Deploy Time" },
        ].map((stat, i, arr) => (
          <>
            <div key={stat.label} className="flex flex-col items-center">
              <div
                className="font-extrabold"
                style={{ fontSize: "1.75rem", color: "#F0F7F1", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 4 }}
              >
                {stat.num}
              </div>
              <div
                className="text-xs uppercase"
                style={{
                  color: "rgba(134,201,148,0.45)",
                  letterSpacing: "0.08em",
                  fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
                }}
              >
                {stat.label}
              </div>
            </div>
            {i < arr.length - 1 && (
              <div key={`div-${i}`} style={{ width: 0.5, height: 32, background: "rgba(74,143,93,0.2)" }} />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   DIVIDER
   ───────────────────────────────────────── */
function Divider() {
  return (
    <div
      className="mx-auto"
      style={{ height: 0.5, background: "rgba(74,143,93,0.18)", maxWidth: 1200 }}
    />
  );
}

/* ─────────────────────────────────────────
   FEATURES
   ───────────────────────────────────────── */
const features = [
  {
    icon: "⚡",
    title: "No terminal needed",
    description:
      "Set up your agent through a simple step-by-step process. No SSH, no CLI, no DevOps experience required.",
  },
  {
    icon: "🔒",
    title: "Dedicated server",
    description:
      "Your agent runs on its own isolated instance. Your data stays yours — always. No shared runtimes.",
  },
  {
    icon: "🎛",
    title: "Full control",
    description:
      "Bring your own AI key or use ours. Choose your integrations — Telegram, Discord, Slack — and configure everything your way.",
  },
  {
    icon: "🌍",
    title: "Global infrastructure",
    description:
      "Powered by Hetzner data centers worldwide. Low latency, high availability, 99.9% uptime SLA.",
  },
  {
    icon: "🤖",
    title: "Multi-model support",
    description:
      "Choose from ChatGPT, Gemini, MiniMax, and more supported providers. Switch anytime — no lock-in.",
  },
  {
    icon: "🐵",
    title: "Community-built",
    description:
      "Built by MonkeDAO on OpenClaw. 3,000+ members strong and growing — shaping what personal AI looks like.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="px-8 py-24"
      style={{ maxWidth: 1200, margin: "0 auto" }}
    >
      {/* Section label */}
      <div
        className="mb-3 text-xs font-medium uppercase"
        style={{
          color: "var(--g)",
          letterSpacing: "0.1em",
          fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
        }}
      >
        What&apos;s included
      </div>

      {/* Title */}
      <h2
        className="mb-4 font-extrabold leading-tight"
        style={{
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          color: "#F0F7F1",
        }}
      >
        Built for people,
        <br />
        not engineers.
      </h2>

      {/* Sub — increased contrast */}
      <p
        className="mb-8 text-base"
        style={{ color: "rgba(134,201,148,0.65)", maxWidth: 640, lineHeight: 1.75, marginBottom: "2rem" }}
      >
        Everything you need to run a personal AI agent — from setup to daily use.
      </p>

      {/* Grid — equal-height cards via flex + stretch */}
      <div
        className="grid overflow-hidden rounded-2xl"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "rgba(74,143,93,0.18)",
          border: "0.5px solid rgba(74,143,93,0.18)",
          alignItems: "stretch",
        }}
      >
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col p-8 transition-colors hover:bg-[#181E19]"
            style={{ background: "var(--surface)" }}
          >
            {/* Icon box — fixed size, top-aligned */}
            <div
              className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl text-lg"
              style={{ background: "var(--g-dark)", border: "0.5px solid var(--g)", flexShrink: 0 }}
            >
              {f.icon}
            </div>
            {/* Title */}
            <h3
              className="mb-2 text-base font-bold"
              style={{ color: "#E8F0E9", letterSpacing: "-0.01em" }}
            >
              {f.title}
            </h3>
            {/* Desc — takes remaining space */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(134,201,148,0.65)", lineHeight: 1.65, flexGrow: 1 }}
            >
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PRICING
   ───────────────────────────────────────── */
const plans = [
  {
    name: "Community",
    price: "9",
    period: "/ month",
    features: [
      "1 OpenClaw instance",
      "Telegram integration",
      "BYOK — bring your own key",
      "5 GB storage",
      "99.5% uptime SLA",
    ],
    cta: "Request Access",
    highlighted: false,
    tag: null,
  },
  {
    name: "Pro",
    price: "29",
    period: "/ month",
    features: [
      "3 OpenClaw instances",
      "Telegram + Discord + Slack",
      "All supported AI providers",
      "Custom domain",
      "25 GB storage + daily backups",
      "Priority support + 99.9% SLA",
    ],
    cta: "Request Access",
    highlighted: true,
    tag: "Most Popular",
  },
];

const enterpriseFeatures = [
  "Unlimited OpenClaw instances",
  "White-label deployment",
  "Custom AI model fine-tuning",
  "SLA up to 99.99% uptime",
  "Dedicated infrastructure",
  "Onboarding + ongoing support",
];

function PricingCard({
  name,
  price,
  period,
  features,
  cta,
  highlighted,
  tag,
  priceLabel,
}: {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  tag: string | null;
  priceLabel?: string;
}) {
  return (
    <div
      className="flex flex-col rounded-2xl p-8"
      style={{
        background: highlighted ? "var(--surface2)" : "var(--surface)",
        border: highlighted
          ? "1.5px solid var(--g)"
          : "0.5px solid rgba(74,143,93,0.18)",
        flexGrow: 1,
      }}
    >
      {/* Badge */}
      {tag && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-bold"
          style={{
            background: "var(--g)",
            color: "#0A0E0B",
            letterSpacing: "0.08em",
            fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
            position: "absolute",
            top: 0,
          }}
        >
          {tag}
        </div>
      )}

      {/* Plan name */}
      <div
        className="mb-3 text-xs font-semibold uppercase"
        style={{
          color: "rgba(134,201,148,0.55)",
          letterSpacing: "0.08em",
          fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
        }}
      >
        {name}
      </div>

      {/* Price */}
      <div className="mb-1 flex items-baseline gap-0.5">
        <span
          className="font-extrabold"
          style={{ color: "#F0F7F1", letterSpacing: "-0.04em", lineHeight: 1, fontSize: priceLabel ? "2rem" : "3rem" }}
        >
          {priceLabel ?? `$${price}`}
        </span>
      </div>
      <div
        className="mb-8 text-xs"
        style={{
          color: "rgba(134,201,148,0.4)",
          fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
          marginBottom: "2rem",
        }}
      >
        {period}
      </div>

      {/* Features — pushes CTA to bottom via flex-1 */}
      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-sm"
            style={{ color: "rgba(134,201,148,0.65)", lineHeight: 1.5 }}
          >
            <span
              className="flex h-4 w-4 shrink-0 items-center justify-center rounded"
              style={{ background: "var(--g-dark)", border: "0.5px solid var(--g)" }}
            >
              <svg viewBox="0 0 10 10" fill="none" className="h-2.5 w-2.5">
                <polyline
                  points="1.5,5 4,7.5 8.5,2.5"
                  stroke="#86C994"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA — always at bottom */}
      <Link
        href="/signup"
        className="block rounded-lg py-3 text-center text-sm font-bold transition"
        style={{
          border: highlighted
            ? "1px solid var(--g)"
            : "1px solid rgba(134,201,148,0.35)",
          background: highlighted ? "var(--g)" : "transparent",
          color: highlighted ? "#0A0E0B" : "var(--g-light)",
          marginTop: "auto",
        }}
      >
        {cta}
      </Link>
    </div>
  );
}

function EnterpriseCard() {
  return (
    <div
      className="flex flex-col rounded-2xl p-8"
      style={{
        background: "var(--surface)",
        border: "0.5px solid rgba(74,143,93,0.18)",
        flexGrow: 1,
      }}
    >
      {/* Badge */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-bold"
        style={{
          background: "var(--surface3)",
          color: "var(--g-light)",
          border: "0.5px solid rgba(74,143,93,0.35)",
          letterSpacing: "0.08em",
          fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
          position: "absolute",
          top: 0,
        }}
      >
        Custom
      </div>

      {/* Plan name */}
      <div
        className="mb-3 text-xs font-semibold uppercase"
        style={{
          color: "rgba(134,201,148,0.55)",
          letterSpacing: "0.08em",
          fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
        }}
      >
        Enterprise
      </div>

      {/* Price */}
      <div className="mb-1 flex items-baseline gap-0.5">
        <span
          className="font-extrabold"
          style={{ color: "#F0F7F1", letterSpacing: "-0.03em", lineHeight: 1, fontSize: "2rem" }}
        >
          Let&apos;s talk
        </span>
      </div>
      <div
        className="mb-8 text-xs"
        style={{
          color: "rgba(134,201,148,0.4)",
          fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
          marginBottom: "2rem",
        }}
      >
        tailored to your needs
      </div>

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3">
        {enterpriseFeatures.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-sm"
            style={{ color: "rgba(134,201,148,0.65)", lineHeight: 1.5 }}
          >
            <span
              className="flex h-4 w-4 shrink-0 items-center justify-center rounded"
              style={{ background: "var(--g-dark)", border: "0.5px solid var(--g)" }}
            >
              <svg viewBox="0 0 10 10" fill="none" className="h-2.5 w-2.5">
                <polyline
                  points="1.5,5 4,7.5 8.5,2.5"
                  stroke="#86C994"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="mailto:enterprise@monke.is"
        className="block rounded-lg py-3 text-center text-sm font-bold transition"
        style={{
          border: "1px solid rgba(134,201,148,0.35)",
          color: "var(--g-light)",
          background: "transparent",
          marginTop: "auto",
        }}
      >
        Contact Us
      </a>
    </div>
  );
}

function Pricing() {
  return (
    <section
      id="pricing"
      className="px-8 py-24"
      style={{ maxWidth: 1200, margin: "0 auto" }}
    >
      {/* Section label */}
      <div
        className="mb-3 text-xs font-medium uppercase"
        style={{
          color: "var(--g)",
          letterSpacing: "0.1em",
          fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
        }}
      >
        Pricing
      </div>

      {/* Title */}
      <h2
        className="mb-4 font-extrabold leading-tight"
        style={{
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          color: "#F0F7F1",
        }}
      >
        Simple pricing.
        <br />
        No surprises.
      </h2>

      {/* Sub */}
      <p
        className="mb-4 text-base"
        style={{ color: "rgba(134,201,148,0.65)", maxWidth: 640, lineHeight: 1.75 }}
      >
        Server hosting from $9/mo. Bring your own AI key or choose a fully managed plan. No hidden fees.
      </p>

      {/* Managed footnote */}
      <p
        className="mb-12 text-sm italic"
        style={{ color: "rgba(134,201,148,0.5)", marginBottom: "3rem" }}
      >
        Don&apos;t have an AI subscription? We offer fully managed plans —{" "}
        <a href="mailto:enterprise@monke.is" className="underline hover:text-[var(--g-light)]">
          contact us
        </a>{" "}
        to learn more.
      </p>

      {/* Cards grid — all cards stretch to equal height */}
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          maxWidth: 1080,
          alignItems: "stretch",
        }}
      >
        <div className="relative">
          <PricingCard
            name="Community"
            price="9"
            period="/ month"
            features={plans[0].features}
            cta={plans[0].cta}
            highlighted={false}
            tag={null}
          />
        </div>
        <div className="relative">
          <PricingCard
            name="Pro"
            price="29"
            period="/ month"
            features={plans[1].features}
            cta={plans[1].cta}
            highlighted={true}
            tag="Most Popular"
          />
        </div>
        <div className="relative">
          <EnterpriseCard />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────── */
function Footer() {
  return (
    <footer
      className="px-8 py-10"
      style={{ borderTop: "0.5px solid rgba(74,143,93,0.18)", maxWidth: 1200, margin: "0 auto" }}
    >
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <div
            className="mb-2 flex items-center gap-2.5 font-bold text-lg"
            style={{ color: "#E8F0E9", letterSpacing: "-0.02em" }}
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg border text-lg"
              style={{ background: "var(--g-dark)", border: "1px solid var(--g)", fontSize: 16 }}
            >
              🐵
            </span>
            MonkeAgent
          </div>
          <div
            className="text-xs"
            style={{ color: "rgba(134,201,148,0.35)", fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
          >
            © 2026 MonkeDAO. All rights reserved.
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end gap-3">
          <span
            className="rounded px-3 py-1 text-xs"
            style={{
              background: "rgba(24,70,35,0.3)",
              border: "0.5px solid rgba(74,143,93,0.18)",
              color: "rgba(134,201,148,0.4)",
              fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
              letterSpacing: "0.04em",
            }}
          >
            agent.monke.is
          </span>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs transition-colors hover:text-[var(--g-light)]"
              style={{ color: "rgba(134,201,148,0.35)", fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
            >
              Privacy
            </Link>
            <a
              href="mailto:enterprise@monke.is"
              className="text-xs transition-colors hover:text-[var(--g-light)]"
              style={{ color: "rgba(134,201,148,0.35)", fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────
   ROOT
   ───────────────────────────────────────── */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProofBar />
      <Divider />
      <Features />
      <Divider />
      <Pricing />
      <Divider />
      <Footer />
    </main>
  );
}
