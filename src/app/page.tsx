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
            style={{
              background: "var(--g-dark)",
              border: "1px solid var(--g)",
              fontSize: 16,
            }}
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
          <a href="#" className="text-xs font-medium uppercase tracking-widest transition-colors hover:text-[var(--g-light)]" style={{ color: "rgba(134,201,148,0.55)", letterSpacing: "0.04em" }}>
            Docs
          </a>
        </div>

        <Link
          href="/signup"
          className="rounded-md px-5 py-2 text-sm font-semibold transition hover:opacity-90"
          style={{ background: "var(--g)", color: "#0A0E0B", letterSpacing: "0.02em" }}
        >
          Deploy Free
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
      <div>
        {/* Badge */}
        <div
          className="mb-7 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium uppercase"
          style={{
            background: "rgba(24,70,35,0.6)",
            border: "0.5px solid var(--g)",
            color: "var(--g-light)",
            letterSpacing: "0.08em",
            fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--g-light)", animation: "pulse 2s infinite" }}
          />
          agent.monke.is — Now Live
        </div>

        {/* Headline */}
        <h1
          className="mb-6 font-extrabold leading-tight tracking-tight"
          style={{
            fontSize: "clamp(2.6rem, 5vw, 4rem)",
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
            color: "#F0F7F1",
          }}
        >
          Your AI agent,
          <br />
          <em style={{ fontStyle: "normal", color: "var(--g-light)" }}>deployed</em>
          <br />
          in minutes.
        </h1>

        {/* Sub */}
        <p
          className="mb-9 text-base leading-relaxed"
          style={{ color: "rgba(134,201,148,0.55)", maxWidth: 460, lineHeight: 1.7 }}
        >
          No terminal. No server setup. No DevOps. Your own AI running 24/7 on
          dedicated infrastructure — built by MonkeDAO on OpenClaw.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/signup"
            className="rounded-lg px-7 py-3.5 text-sm font-bold transition hover:translate-y-[-1px]"
            style={{ background: "var(--g)", color: "#0A0E0B", letterSpacing: "0.01em" }}
          >
            Deploy Free
          </Link>
          <a
            href="#features"
            className="rounded-lg border px-6 py-3.5 text-sm font-medium transition"
            style={{ border: "0.5px solid rgba(134,201,148,0.35)", color: "rgba(134,201,148,0.55)" }}
          >
            See how it works
          </a>
        </div>
      </div>

      {/* Right: terminal */}
      <div
        className="overflow-hidden rounded-2xl"
        style={{ background: "var(--surface2)", border: "0.5px solid rgba(74,143,93,0.18)" }}
      >
        {/* Terminal bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ background: "var(--surface3)", borderBottom: "0.5px solid rgba(74,143,93,0.18)" }}
        >
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#FF5F56" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#27C93F" }} />
          <span
            className="ml-2 text-xs"
            style={{
              color: "rgba(134,201,148,0.4)",
              letterSpacing: "0.05em",
              fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
            }}
          >
            agent.monke.is — shell
          </span>
        </div>

        {/* Terminal body */}
        <div
          className="p-5 font-medium"
          style={{
            minHeight: 240,
            fontSize: 12.5,
            lineHeight: 2,
            fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
          }}
        >
          <div className="flex gap-2">
            <span style={{ color: "var(--g)" }}>$</span>
            <span style={{ color: "#D4F1DA" }}>monke agent:deploy --name my-agent</span>
          </div>
          <div className="flex gap-2" style={{ color: "rgba(134,201,148,0.6)" }}>
            → Provisioning dedicated server...
          </div>
          <div className="flex gap-2" style={{ color: "rgba(134,201,148,0.6)" }}>
            → Installing OpenClaw runtime...
          </div>
          <div className="flex gap-2" style={{ color: "rgba(134,201,148,0.6)" }}>
            → Connecting Telegram webhook...
          </div>
          <div className="flex gap-2">
            <span style={{ color: "var(--y)" }}>status</span>
            <span style={{ color: "rgba(134,201,148,0.3)" }}>:</span>
            <span style={{ color: "var(--g-light)" }}>✓ Agent online</span>
          </div>
          <div className="flex gap-2">
            <span style={{ color: "var(--y)" }}>uptime</span>
            <span style={{ color: "rgba(134,201,148,0.3)" }}>:</span>
            <span style={{ color: "var(--g-light)" }}>99.9%</span>
          </div>
          <div className="flex gap-2">
            <span style={{ color: "var(--y)" }}>endpoint</span>
            <span style={{ color: "rgba(134,201,148,0.3)" }}>:</span>
            <span style={{ color: "var(--g-light)" }}>my-agent.monke.is</span>
          </div>
          <div className="flex gap-2">
            <span style={{ color: "var(--g)" }}>$</span>
            <span
              className="inline-block h-3.5 w-1.5 rounded-sm"
              style={{ background: "var(--g)", animation: "blink 1.2s infinite", verticalAlign: "middle" }}
            />
          </div>
        </div>

        {/* Stats row — marketing-friendly labels */}
        <div
          className="flex px-5 pt-4 pb-5"
          style={{ borderTop: "0.5px solid rgba(74,143,93,0.18)", gap: "1.5rem" }}
        >
          {[
            { num: "3K+", label: "Community Members" },
            { num: "99.9%", label: "SLA-backed Uptime" },
            { num: "<5min", label: "Deploy Time" },
          ].map((stat) => (
            <div className="flex-1 text-center" key={stat.label}>
              <div
                className="text-xl font-extrabold"
                style={{ color: "#F0F7F1", letterSpacing: "-0.02em" }}
              >
                {stat.num}
              </div>
              <div
                className="mt-0.5 text-xs"
                style={{
                  color: "rgba(134,201,148,0.55)",
                  letterSpacing: "0.03em",
                  fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
      "Configure everything through a clean web wizard. No SSH, no CLI, no DevOps experience required.",
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
      "Bring your own AI key or use ours. Connect Telegram, Discord, Google — all from one dashboard.",
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
      "Choose from ChatGPT, Gemini, Kimi, MiniMax, and more. Switch providers anytime from your dashboard.",
  },
  {
    icon: "🐵",
    title: "Community-built",
    description:
      "Built by MonkeDAO on OpenClaw. 3,000+ members across 80+ countries shaping personal AI together.",
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
        -- What&apos;s inside
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

      {/* Sub */}
      <p
        className="mb-12 text-base"
        style={{ color: "rgba(134,201,148,0.55)", maxWidth: 520, lineHeight: 1.7 }}
      >
        Everything you need to run a personal AI agent — from first deploy to
        daily operations.
      </p>

      {/* Grid */}
      <div
        className="grid overflow-hidden rounded-2xl"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "rgba(74,143,93,0.18)",
          border: "0.5px solid rgba(74,143,93,0.18)",
        }}
      >
        {features.map((f) => (
          <div
            key={f.title}
            className="p-8 transition-colors hover:bg-[#181E19]"
            style={{ background: "var(--surface)" }}
          >
            {/* Icon box */}
            <div
              className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl text-lg"
              style={{ background: "var(--g-dark)", border: "0.5px solid var(--g)" }}
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
            {/* Desc */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(134,201,148,0.55)", lineHeight: 1.65 }}
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
    cta: "Get Started",
    highlighted: false,
    tag: null,
  },
  {
    name: "Pro",
    price: "29",
    period: "/ month",
    features: [
      "3 OpenClaw instances",
      "Telegram + Discord + Google",
      "All AI providers (BYOK)",
      "Custom domain",
      "25 GB storage + daily backups",
      "Priority support + 99.9% SLA",
    ],
    cta: "Get Started",
    highlighted: true,
    tag: "Most Popular",
  },
];

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
        -- Pricing
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
        style={{ color: "rgba(134,201,148,0.55)", maxWidth: 520, lineHeight: 1.7 }}
      >
        Server hosting from $9/mo. Bring your own AI key or let us handle it.
        No hidden fees.
      </p>

      {/* Managed footnote */}
      <p
        className="mb-12 text-sm italic"
        style={{ color: "rgba(134,201,148,0.4)", marginBottom: "3rem" }}
      >
        Don&apos;t have an AI subscription? We offer fully managed plans —{" "}
        <a href="#" className="underline hover:text-[var(--g-light)]">
          contact us
        </a>{" "}
        to learn more.
      </p>

      {/* Cards — 3 columns */}
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(3, 1fr)", maxWidth: 960 }}
      >
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="relative flex flex-col rounded-2xl p-8"
            style={{
              background: plan.highlighted ? "var(--surface2)" : "var(--surface)",
              border: plan.highlighted
                ? "1.5px solid var(--g)"
                : "0.5px solid rgba(74,143,93,0.18)",
            }}
          >
            {/* Badge */}
            {plan.tag && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-bold"
                style={{
                  background: "var(--g)",
                  color: "#0A0E0B",
                  letterSpacing: "0.08em",
                  fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
                }}
              >
                {plan.tag}
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
              {plan.name}
            </div>

            {/* Price */}
            <div className="mb-1 flex items-baseline gap-0.5">
              <span
                className="text-5xl font-extrabold"
                style={{ color: "#F0F7F1", letterSpacing: "-0.04em", lineHeight: 1 }}
              >
                ${plan.price}
              </span>
            </div>
            <div
              className="mb-7 text-xs"
              style={{
                color: "rgba(134,201,148,0.4)",
                fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
                marginBottom: "1.75rem",
              }}
            >
              {plan.period}
            </div>

            {/* Features */}
            <ul className="mb-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 text-sm"
                  style={{ color: "rgba(134,201,148,0.55)", lineHeight: 1.5 }}
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

            {/* CTA button */}
            <Link
              href="/signup"
              className="block rounded-lg py-3 text-center text-sm font-bold transition"
              style={{
                border: plan.highlighted ? "1px solid var(--g)" : "0.5px solid rgba(134,201,148,0.35)",
                background: plan.highlighted ? "var(--g)" : "transparent",
                color: plan.highlighted ? "#0A0E0B" : "var(--g-light)",
              }}
            >
              {plan.cta}
            </Link>
          </div>
        ))}

        {/* Enterprise card */}
        <div
          className="relative flex flex-col rounded-2xl p-8"
          style={{
            background: "var(--surface)",
            border: "0.5px solid rgba(74,143,93,0.18)",
          }}
        >
          {/* "Custom" badge */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-bold"
            style={{
              background: "var(--surface3)",
              color: "var(--g-light)",
              border: "0.5px solid rgba(74,143,93,0.35)",
              letterSpacing: "0.08em",
              fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
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
              className="text-3xl font-extrabold"
              style={{ color: "#F0F7F1", letterSpacing: "-0.03em", lineHeight: 1 }}
            >
              Let&apos;s talk
            </span>
          </div>
          <div
            className="mb-7 text-xs"
            style={{
              color: "rgba(134,201,148,0.4)",
              fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
              marginBottom: "1.75rem",
            }}
          >
            tailored to your needs
          </div>

          {/* Features */}
          <ul className="mb-8 flex-1 space-y-3">
            {[
              "Unlimited OpenClaw instances",
              "White-label deployment",
              "Custom AI model fine-tuning",
              "SLA up to 99.99% uptime",
              "Dedicated infrastructure",
              "Onboarding + ongoing support",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2.5 text-sm"
                style={{ color: "rgba(134,201,148,0.55)", lineHeight: 1.5 }}
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

          {/* CTA button */}
          <a
            href="mailto:enterprise@monke.is"
            className="block rounded-lg py-3 text-center text-sm font-bold transition"
            style={{
              border: "0.5px solid rgba(134,201,148,0.35)",
              color: "var(--g-light)",
              background: "transparent",
            }}
          >
            Contact Us
          </a>
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
            {["Terms", "Privacy", "Docs"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs transition-colors hover:text-[var(--g-light)]"
                style={{ color: "rgba(134,201,148,0.35)", fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
              >
                {link}
              </a>
            ))}
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
      <Divider />
      <Features />
      <Divider />
      <Pricing />
      <Divider />
      <Footer />
    </main>
  );
}
