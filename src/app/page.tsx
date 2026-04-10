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
        className="mx-auto flex items-center justify-between px-4 md:px-8 py-4"
        style={{ maxWidth: 1200 }}
      >
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight" style={{ color: "#E8F0E9" }}>
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg border"
            style={{ background: "var(--g-dark)", border: "1px solid var(--g)", padding: 4 }}
          >
            <img src="/m-agent-logo-white.svg" alt="MonkeAgent" style={{ width: "100%", height: "100%",  }} />
          </div>
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
    <section className="w-full">
    <div
      className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-8 gap-10 md:gap-20 pt-28 pb-16 md:pb-20"
      style={{
        maxWidth: 1200,
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
            fontFamily: "'Inter', sans-serif",
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
          Your personal AI
          <br />
          assistant.{" "}
          <em style={{ fontStyle: "normal", color: "var(--g-light)" }}>Deployed.</em>
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
                color: "rgba(134,201,148,0.85)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span className="h-1 w-1 rounded-full" style={{ background: "var(--g-light)" }} />
              {ch}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/signup"
            className="rounded-lg px-7 py-3.5 text-sm font-bold transition hover:translate-y-[-1px]"
            style={{ background: "var(--g)", color: "#0A0E0B", letterSpacing: "0.01em" }}
          >
            Get Early Access
          </Link>
          <a
            href="#features"
            className="rounded-lg border px-7 py-3.5 text-sm font-bold transition hover:translate-y-[-1px]"
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
          className="w-[195px] md:w-[220px]"
          style={{
            background: "#0F1510",
            border: "1.5px solid rgba(74,143,93,0.3)",
            borderRadius: 28,
            overflow: "hidden",
            maxWidth: "100%",

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
            ><img src="/m-agent-logo-white.svg" alt="MonkeAgent" style={{ width: 20, height: 20,  }} /></div>
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
              height: 280,
              overflowY: "auto",
              overflowX: "hidden",
              position: "relative",
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
        className="mx-auto flex flex-wrap items-center justify-center px-4 md:px-8 py-7 gap-6 md:gap-16"
        style={{ maxWidth: 1200, margin: "0 auto" }}
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
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {stat.label}
              </div>
            </div>
            {i < arr.length - 1 && (
              <div key={`div-${i}`} className="hidden md:block" style={{ width: 0.5, height: 32, background: "rgba(74,143,93,0.2)" }} />
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
    thumb: (
      <svg viewBox="0 0 120 120" width="100%" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="28" fill="#184623" stroke="#4A8F5D" strokeWidth="1"/>
        <circle cx="60" cy="60" r="18" fill="#4A8F5D"/>
        <path d="M62 44 L54 62 L61 62 L58 78 L70 58 L63 58 Z" fill="#FFC919"/>
        <ellipse cx="60" cy="60" rx="44" ry="16" fill="none" stroke="#2E4A31" strokeWidth="0.8" strokeDasharray="3,3"/>
        <ellipse cx="60" cy="60" rx="16" ry="44" fill="none" stroke="#2E4A31" strokeWidth="0.8" strokeDasharray="3,3"/>
        <circle cx="104" cy="60" r="3" fill="#86C994"/>
        <circle cx="16" cy="60" r="3" fill="#86C994"/>
        <circle cx="60" cy="16" r="3" fill="#FFC919"/>
        <circle cx="60" cy="104" r="2" fill="#4A8F5D"/>
      </svg>
    ),
    title: "No terminal needed",
    description: "Set up your agent through a simple step-by-step process. No SSH, no CLI, no DevOps experience required.",
  },
  {
    thumb: (
      <svg viewBox="0 0 120 120" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="28" width="76" height="15" rx="3" fill="#184623" stroke="#4A8F5D" strokeWidth="0.8"/>
        <circle cx="33" cy="35.5" r="3.5" fill="#86C994"/>
        <rect x="40" y="33" width="22" height="5" rx="2" fill="#2E4A31"/>
        <rect x="66" y="33" width="10" height="5" rx="2" fill="#FFC919"/>
        <rect x="22" y="50" width="76" height="15" rx="3" fill="#184623" stroke="#4A8F5D" strokeWidth="0.8"/>
        <circle cx="33" cy="57.5" r="3.5" fill="#86C994"/>
        <rect x="40" y="55" width="22" height="5" rx="2" fill="#2E4A31"/>
        <rect x="66" y="55" width="10" height="5" rx="2" fill="#4A8F5D"/>
        <rect x="22" y="72" width="76" height="15" rx="3" fill="#184623" stroke="#4A8F5D" strokeWidth="0.8"/>
        <circle cx="33" cy="79.5" r="3.5" fill="#FFC919"/>
        <rect x="40" y="77" width="22" height="5" rx="2" fill="#2E4A31"/>
        <rect x="66" y="77" width="10" height="5" rx="2" fill="#86C994"/>
        <rect x="50" y="92" width="20" height="14" rx="2" fill="#4A8F5D"/>
        <path d="M54 92 Q60 84 66 92" fill="none" stroke="#4A8F5D" strokeWidth="2.5"/>
        <circle cx="60" cy="99" r="2" fill="#F3EFCD"/>
      </svg>
    ),
    title: "Dedicated server",
    description: "Your agent runs on its own isolated instance. Your data stays yours — always. No shared runtimes.",
  },
  {
    thumb: (
      <svg viewBox="0 0 120 120" width="100%" xmlns="http://www.w3.org/2000/svg">
        <polygon points="60,20 80,31 80,53 60,64 40,53 40,31" fill="#184623" stroke="#4A8F5D" strokeWidth="1"/>
        <line x1="60" y1="24" x2="60" y2="30" stroke="#86C994" strokeWidth="1.5"/>
        <line x1="76" y1="34" x2="73" y2="38" stroke="#4A8F5D" strokeWidth="1.2"/>
        <line x1="76" y1="50" x2="73" y2="46" stroke="#4A8F5D" strokeWidth="1.2"/>
        <line x1="60" y1="42" x2="52" y2="30" stroke="#FFC919" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="60" cy="42" r="4" fill="#4A8F5D"/>
        <circle cx="60" cy="42" r="2" fill="#F3EFCD"/>
        <line x1="60" y1="64" x2="30" y2="87" stroke="#2E4A31" strokeWidth="0.8"/>
        <line x1="60" y1="64" x2="60" y2="87" stroke="#2E4A31" strokeWidth="0.8"/>
        <line x1="60" y1="64" x2="90" y2="87" stroke="#2E4A31" strokeWidth="0.8"/>
        <circle cx="30" cy="98" r="11" fill="#1C2B1E" stroke="#4A8F5D" strokeWidth="0.8"/>
        <circle cx="30" cy="98" r="7.5" fill="#29B6F6"/>
        <g transform="translate(30,98) scale(0.52)"><path d="M5,-6 L-8,2 L-1,1 L1,7 Z" fill="white"/><path d="M-1,1 L1,7 L-8,2 Z" fill="#29B6F6"/></g>
        <circle cx="60" cy="98" r="11" fill="#1C2B1E" stroke="#86C994" strokeWidth="0.8"/>
        <g transform="translate(60,98)"><path d="M-6,-3 Q0,-7 6,-3 L7,3 Q0,7 -7,3 Z" fill="#5865F2"/><circle cx="-2.5" cy="0" r="1.5" fill="white"/><circle cx="2.5" cy="0" r="1.5" fill="white"/></g>
        <circle cx="90" cy="98" r="11" fill="#1C2B1E" stroke="#FFC919" strokeWidth="0.8"/>
        <g transform="translate(90,98)"><rect x="-5" y="-5" width="4" height="4" rx="1" fill="#E01E5A"/><rect x="1" y="-5" width="4" height="4" rx="1" fill="#36C5F0"/><rect x="-5" y="1" width="4" height="4" rx="1" fill="#2EB67D"/><rect x="1" y="1" width="4" height="4" rx="1" fill="#ECB22E"/></g>
      </svg>
    ),
    title: "Full control",
    description: "Bring your own AI key or use ours. Choose your integrations — Telegram, Discord, Slack — and configure everything your way.",
  },
  {
    thumb: (
      <svg viewBox="0 0 120 120" width="100%" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="58" r="36" fill="none" stroke="#2E4A31" strokeWidth="0.8"/>
        <ellipse cx="60" cy="58" rx="36" ry="14" fill="none" stroke="#2E4A31" strokeWidth="0.8"/>
        <ellipse cx="60" cy="58" rx="20" ry="36" fill="none" stroke="#2E4A31" strokeWidth="0.8"/>
        <line x1="24" y1="58" x2="96" y2="58" stroke="#2E4A31" strokeWidth="0.8"/>
        <circle cx="40" cy="46" r="3" fill="#FFC919"/>
        <circle cx="72" cy="42" r="3" fill="#86C994"/>
        <circle cx="52" cy="68" r="3" fill="#86C994"/>
        <circle cx="80" cy="64" r="3" fill="#FFC919"/>
        <circle cx="32" cy="66" r="2" fill="#4A8F5D"/>
        <line x1="40" y1="46" x2="72" y2="42" stroke="#4A8F5D" strokeWidth="0.6"/>
        <line x1="72" y1="42" x2="80" y2="64" stroke="#4A8F5D" strokeWidth="0.6"/>
        <line x1="40" y1="46" x2="52" y2="68" stroke="#4A8F5D" strokeWidth="0.6"/>
        <line x1="52" y1="68" x2="80" y2="64" stroke="#4A8F5D" strokeWidth="0.6"/>
        <rect x="22" y="102" width="76" height="7" rx="3.5" fill="#184623"/>
        <rect x="22" y="102" width="73" height="7" rx="3.5" fill="#86C994"/>
      </svg>
    ),
    title: "Global infrastructure",
    description: "Powered by Hetzner data centers worldwide. Low latency, high availability, 99.9% uptime SLA.",
  },
  {
    thumb: (
      <svg viewBox="0 0 120 120" width="100%" xmlns="http://www.w3.org/2000/svg">
        <line x1="60" y1="60" x2="96" y2="60" stroke="#2E4A31" strokeWidth="0.8"/>
        <line x1="60" y1="60" x2="78" y2="91" stroke="#2E4A31" strokeWidth="0.8"/>
        <line x1="60" y1="60" x2="42" y2="91" stroke="#2E4A31" strokeWidth="0.8"/>
        <line x1="60" y1="60" x2="24" y2="60" stroke="#2E4A31" strokeWidth="0.8"/>
        <line x1="60" y1="60" x2="42" y2="29" stroke="#2E4A31" strokeWidth="0.8"/>
        <line x1="60" y1="60" x2="78" y2="29" stroke="#2E4A31" strokeWidth="0.8"/>
        <circle cx="96" cy="60" r="10" fill="#1C2B1E" stroke="#4A8F5D" strokeWidth="0.8"/>
        <g transform="translate(96,60)"><line x1="0" y1="-5" x2="0" y2="5" stroke="#F3EFCD" strokeWidth="1.4" strokeLinecap="round"/><line x1="-4.3" y1="-2.5" x2="4.3" y2="2.5" stroke="#F3EFCD" strokeWidth="1.4" strokeLinecap="round"/><line x1="-4.3" y1="2.5" x2="4.3" y2="-2.5" stroke="#F3EFCD" strokeWidth="1.4" strokeLinecap="round"/></g>
        <circle cx="78" cy="91" r="10" fill="#1C2B1E" stroke="#4A8F5D" strokeWidth="0.8"/>
        <g transform="translate(78,91)"><path d="M0,-7 Q1,0 7,0 Q1,0 0,7 Q-1,0 -7,0 Q-1,0 0,-7Z" fill="#4285F4"/></g>
        <circle cx="42" cy="91" r="10" fill="#1C2B1E" stroke="#FFC919" strokeWidth="0.8"/>
        <g transform="translate(42,91)"><circle cx="0" cy="0" r="6" fill="#FFC919"/><circle cx="2.5" cy="0" r="4.2" fill="#1C2B1E"/></g>
        <circle cx="24" cy="60" r="10" fill="#1C2B1E" stroke="#86C994" strokeWidth="0.8"/>
        <g transform="translate(24,60)"><path d="M-5,3 L-2,-3 L1,2 L4,-3 L7,3" fill="none" stroke="#86C994" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></g>
        <circle cx="42" cy="29" r="10" fill="#1C2B1E" stroke="#4A8F5D" strokeWidth="0.8"/>
        <g transform="translate(42,29)"><line x1="-4.5" y1="-4.5" x2="4.5" y2="4.5" stroke="#F3EFCD" strokeWidth="2" strokeLinecap="round"/><line x1="4.5" y1="-4.5" x2="-4.5" y2="4.5" stroke="#F3EFCD" strokeWidth="2" strokeLinecap="round"/></g>
        <circle cx="78" cy="29" r="10" fill="#1C2B1E" stroke="#86C994" strokeWidth="0.8"/>
        <g transform="translate(78,29)"><path d="M0,-6 L6,0 L0,6 L-6,0 Z" fill="none" stroke="#CC785C" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="0" cy="0" r="2" fill="#CC785C"/></g>
        <circle cx="60" cy="60" r="13" fill="#184623" stroke="#4A8F5D" strokeWidth="1.2"/>
        <rect x="55.5" y="55.5" width="9" height="9" rx="2" fill="#FFC919"/>
        <line x1="53.5" y1="60" x2="51" y2="60" stroke="#FFC919" strokeWidth="1"/>
        <line x1="66.5" y1="60" x2="69" y2="60" stroke="#FFC919" strokeWidth="1"/>
        <line x1="60" y1="53.5" x2="60" y2="51" stroke="#FFC919" strokeWidth="1"/>
        <line x1="60" y1="66.5" x2="60" y2="69" stroke="#FFC919" strokeWidth="1"/>
      </svg>
    ),
    title: "Multi-model support",
    description: "Choose from ChatGPT, Gemini, MiniMax, and more supported providers. Switch anytime — no lock-in.",
  },
  {
    thumb: (
      <svg viewBox="0 0 120 120" width="100%" xmlns="http://www.w3.org/2000/svg">
        <circle cx="34" cy="62" r="12" fill="#184623" stroke="#2E4A31" strokeWidth="0.8"/>
        <circle cx="34" cy="56" r="7" fill="#184623" stroke="#2E4A31" strokeWidth="0.8"/>
        <circle cx="28" cy="57" r="4" fill="#184623" stroke="#2E4A31" strokeWidth="0.8"/>
        <circle cx="40" cy="57" r="4" fill="#184623" stroke="#2E4A31" strokeWidth="0.8"/>
        <ellipse cx="34" cy="58" rx="4" ry="3" fill="#2E4A31"/>
        <circle cx="32" cy="56" r="1" fill="#86C994"/>
        <circle cx="36" cy="56" r="1" fill="#86C994"/>
        <circle cx="86" cy="62" r="12" fill="#184623" stroke="#2E4A31" strokeWidth="0.8"/>
        <circle cx="86" cy="56" r="7" fill="#184623" stroke="#2E4A31" strokeWidth="0.8"/>
        <circle cx="80" cy="57" r="4" fill="#184623" stroke="#2E4A31" strokeWidth="0.8"/>
        <circle cx="92" cy="57" r="4" fill="#184623" stroke="#2E4A31" strokeWidth="0.8"/>
        <ellipse cx="86" cy="58" rx="4" ry="3" fill="#2E4A31"/>
        <circle cx="84" cy="56" r="1" fill="#86C994"/>
        <circle cx="88" cy="56" r="1" fill="#86C994"/>
        <circle cx="60" cy="60" r="15" fill="#4A8F5D" stroke="#86C994" strokeWidth="1"/>
        <circle cx="60" cy="52" r="9" fill="#4A8F5D" stroke="#86C994" strokeWidth="1"/>
        <circle cx="51" cy="53" r="5" fill="#4A8F5D" stroke="#86C994" strokeWidth="1"/>
        <circle cx="69" cy="53" r="5" fill="#4A8F5D" stroke="#86C994" strokeWidth="1"/>
        <ellipse cx="60" cy="55" rx="5" ry="4" fill="#86C994"/>
        <circle cx="57" cy="53" r="1.5" fill="#184623"/>
        <circle cx="63" cy="53" r="1.5" fill="#184623"/>
        <path d="M51 47 L55 40 L60 45 L65 40 L69 47 Z" fill="#FFC919"/>
        <circle cx="51" cy="47" r="1.5" fill="#FFC919"/>
        <circle cx="69" cy="47" r="1.5" fill="#FFC919"/>
        <circle cx="60" cy="45" r="1.5" fill="#FFC919"/>
        <g opacity="0.8">
          {[90,96,102].map(y => [20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100].map(x => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={y===102?1.5:x<46?1.5:1.5} fill={y===102?"#2E4A31":x<46?"#4A8F5D":"#86C994"}/>
          )))}
        </g>
      </svg>
    ),
    title: "Community-built",
    description: "Built by MonkeDAO on OpenClaw. 3,000+ members strong and growing — shaping what personal AI looks like.",
  },
];

function Features() {
  return (
    <section id="features" className="w-full py-24">
    <div className="mx-auto px-4 md:px-8" style={{ maxWidth: 1200 }}>
      {/* Section label */}
      <div
        className="mb-3 text-xs font-medium uppercase"
        style={{
          color: "var(--g)",
          letterSpacing: "0.1em",
          fontFamily: "'Inter', sans-serif",
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
        className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-2xl"
        style={{
          gap: 1,
          background: "rgba(74,143,93,0.18)",
          border: "0.5px solid rgba(74,143,93,0.18)",
          alignItems: "stretch",
        }}
      >
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col p-6 md:p-8 transition-colors hover:bg-[#181E19]"
            style={{ background: "var(--surface)" }}
          >
            {/* Icon box — fixed 48px, SVG inside */}
            <div
              className="mb-5 flex items-center justify-center overflow-hidden rounded-xl"
              style={{ width: 48, height: 48, background: "var(--g-dark)", border: "0.5px solid var(--g)", flexShrink: 0 }}
            >
              {f.thumb}
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
  "Scale beyond Pro — agents for your team",
  "White-label under your brand — your domain, your identity",
  "Custom model configuration per use case",
  "99.99% uptime SLA with dedicated infrastructure",
  "Priority infrastructure, isolated per deployment",
  "Hands-on onboarding and a dedicated point of contact",
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
      className="flex flex-col rounded-2xl p-6 md:p-8"
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
            fontFamily: "'Inter', sans-serif",
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
          fontFamily: "'Inter', sans-serif",
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
          fontFamily: "'Inter', sans-serif",
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
      className="flex flex-col rounded-2xl p-6 md:p-8"
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
          fontFamily: "'Inter', sans-serif",
          position: "absolute",
          top: 0,
        }}
      >
        Enterprise
      </div>

      {/* Plan name */}
      <div
        className="mb-3 text-xs font-semibold uppercase"
        style={{
          color: "rgba(134,201,148,0.55)",
          letterSpacing: "0.08em",
          fontFamily: "'Inter', sans-serif",
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
          fontFamily: "'Inter', sans-serif",
          marginBottom: "2rem",
        }}
      >
        for teams, DAOs &amp; communities
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
        href="mailto:hello@monke.is"
        className="block rounded-lg py-3 text-center text-sm font-bold transition"
        style={{
          border: "1px solid rgba(134,201,148,0.35)",
          color: "var(--g-light)",
          background: "transparent",
          marginTop: "auto",
        }}
      >
        Talk to the Team
      </a>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="w-full py-24">
    <div className="mx-auto px-4 md:px-8" style={{ maxWidth: 1200 }}>
      {/* Section label */}
      <div
        className="mb-3 text-xs font-medium uppercase"
        style={{
          color: "var(--g)",
          letterSpacing: "0.1em",
          fontFamily: "'Inter', sans-serif",
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
        style={{ color: "rgba(134,201,148,0.65)", lineHeight: 1.75 }}
      >
        Server hosting from $9/mo. Bring your own AI key, or choose a fully managed plan.{" "}No hidden fees.
      </p>

      {/* Managed footnote */}
      <p
        className="mb-12 text-sm italic"
        style={{ color: "rgba(134,201,148,0.5)", marginBottom: "3rem" }}
      >
        Don&apos;t have an AI subscription? We offer fully managed plans —{" "}
        <a href="mailto:hello@monke.is" className="underline hover:text-[var(--g-light)]">
          contact us
        </a>{" "}
        to learn more.
      </p>

      {/* Cards grid — all cards stretch to equal height */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        style={{
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
    </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────── */
function Footer() {
  return (
    <footer className="w-full" style={{ borderTop: "0.5px solid rgba(74,143,93,0.18)" }}>
    <div className="mx-auto px-4 md:px-8 py-10" style={{ maxWidth: 1200 }}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left */}
        <div>
          <div
            className="mb-2 flex items-center gap-2.5 font-bold text-lg"
            style={{ color: "#E8F0E9", letterSpacing: "-0.02em" }}
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg border"
              style={{ background: "var(--g-dark)", border: "1px solid var(--g)", padding: 4 }}
            >
              <img src="/m-agent-logo-white.svg" alt="MonkeAgent" style={{ width: "100%", height: "100%",  }} />
            </div>
            MonkeAgent
          </div>
          <div
            className="text-xs"
            style={{ color: "rgba(134,201,148,0.35)", fontFamily: "'Inter', sans-serif" }}
          >
            © 2026 MonkeDAO. All rights reserved.
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <span
            className="rounded px-3 py-1 text-xs"
            style={{
              background: "rgba(24,70,35,0.3)",
              border: "0.5px solid rgba(74,143,93,0.18)",
              color: "rgba(134,201,148,0.4)",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            agent.monke.is
          </span>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs transition-colors hover:text-[var(--g-light)]"
              style={{ color: "rgba(134,201,148,0.35)", fontFamily: "'Inter', sans-serif" }}
            >
              Privacy
            </Link>
            <a
              href="mailto:hello@monke.is"
              className="text-xs transition-colors hover:text-[var(--g-light)]"
              style={{ color: "rgba(134,201,148,0.35)", fontFamily: "'Inter', sans-serif" }}
            >
              Contact
            </a>
          </div>
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
