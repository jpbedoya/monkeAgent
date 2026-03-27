import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-mk-green/20 bg-[#0d1a10]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🐵</span>
          <span className="text-mk-ivory">
            monke<span className="text-mk-yellow">Agent</span>
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <a href="#features" className="hidden text-sm text-mk-ivory/70 hover:text-mk-ivory sm:block">
            Features
          </a>
          <a href="#pricing" className="hidden text-sm text-mk-ivory/70 hover:text-mk-ivory sm:block">
            Pricing
          </a>
          <Link
            href="/signup"
            className="rounded-lg bg-mk-yellow px-5 py-2 text-sm font-semibold text-mk-dark-green transition hover:bg-mk-yellow/90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-mk-dark-green/50 via-[#0d1a10] to-[#0d1a10]" />
      <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-mk-green/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-block rounded-full border border-mk-green/30 bg-mk-green/10 px-4 py-1.5 text-sm text-mk-light-green">
          🐵 Powered by MonkeDAO · Built on OpenClaw
        </div>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-mk-ivory sm:text-6xl">
          Your personal AI assistant,{" "}
          <span className="text-mk-yellow">ready in minutes</span>
        </h1>
        <p className="mb-10 text-lg text-mk-ivory/60 sm:text-xl">
          Your own AI agent, deployed in minutes. Powered by OpenClaw.. No
          terminal needed, full control, your own server.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="rounded-xl bg-mk-yellow px-8 py-3.5 text-lg font-semibold text-mk-dark-green transition hover:bg-mk-yellow/90 hover:shadow-lg hover:shadow-mk-yellow/20"
          >
            Get Started Free
          </Link>
          <a
            href="#features"
            className="rounded-xl border border-mk-green/30 px-8 py-3.5 text-lg font-semibold text-mk-ivory transition hover:bg-mk-green/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: "🖥️",
    title: "No Terminal Needed",
    description:
      "Set up your AI assistant through a simple web wizard. No SSH, no CLI, no DevOps experience required.",
  },
  {
    icon: "🔒",
    title: "Your Own Server",
    description:
      "Each instance runs on dedicated infrastructure. Your data stays yours, always.",
  },
  {
    icon: "⚡",
    title: "Full Control",
    description:
      "Connect your preferred AI provider, Telegram bot, and integrations. Configure everything from the dashboard.",
  },
  {
    icon: "🌍",
    title: "Global Infrastructure",
    description:
      "Powered by Hetzner data centers worldwide. Low latency, high availability, 99.9% uptime.",
  },
  {
    icon: "🤖",
    title: "Multi-AI Support",
    description:
      "Choose Claude, GPT-4, or Gemini as your AI backbone. Switch anytime from your dashboard.",
  },
  {
    icon: "🐵",
    title: "Community Driven",
    description:
      "Built by MonkeDAO on OpenClaw. Join a growing community of builders and contributors shaping the future of personal AI.",
  },
];

function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-mk-ivory sm:text-4xl">
            Everything you need to run your AI
          </h2>
          <p className="text-lg text-mk-ivory/50">
            From setup to daily operations, we handle the infrastructure so you
            can focus on what matters.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-mk-green/20 bg-mk-dark-green/30 p-6 transition hover:border-mk-green/40 hover:bg-mk-dark-green/50"
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-mk-ivory">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-mk-ivory/50">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Community",
    price: "$9",
    description: "Perfect for getting started with your personal AI assistant.",
    features: [
      "1 OpenClaw instance",
      "Telegram integration",
      "1 AI provider",
      "Community support",
      "5GB storage",
      "99.5% uptime SLA",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For power users who need more integrations and reliability.",
    features: [
      "3 OpenClaw instances",
      "Telegram + Discord + Google",
      "All AI providers",
      "Priority support",
      "25GB storage",
      "99.9% uptime SLA",
      "Custom domain",
      "Daily backups",
    ],
    cta: "Get Started",
    highlighted: true,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-mk-ivory sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-mk-ivory/50">
            Start free, scale when you need to. No hidden fees.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-mk-yellow/50 bg-mk-dark-green/60 shadow-lg shadow-mk-yellow/5"
                  : "border-mk-green/20 bg-mk-dark-green/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-mk-yellow px-4 py-1 text-xs font-bold text-mk-dark-green">
                  MOST POPULAR
                </div>
              )}
              <h3 className="mb-2 text-xl font-bold text-mk-ivory">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-mk-yellow">
                  {plan.price}
                </span>
                <span className="text-mk-ivory/50">/mo</span>
              </div>
              <p className="mb-6 text-sm text-mk-ivory/50">
                {plan.description}
              </p>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-mk-ivory/70"
                  >
                    <span className="text-mk-light-green">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={`block rounded-xl py-3 text-center font-semibold transition ${
                  plan.highlighted
                    ? "bg-mk-yellow text-mk-dark-green hover:bg-mk-yellow/90"
                    : "border border-mk-green/30 text-mk-ivory hover:bg-mk-green/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-mk-green/20 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-mk-ivory/50">
          <span className="text-lg">🐵</span>
          <span>
            monke<span className="text-mk-yellow">Agent</span> &copy; 2026
            MonkeDAO
          </span>
        </div>
        <div className="flex gap-6 text-sm text-mk-ivory/40">
          <span className="cursor-pointer hover:text-mk-ivory/60">Terms</span>
          <span className="cursor-pointer hover:text-mk-ivory/60">Privacy</span>
          <span className="cursor-pointer hover:text-mk-ivory/60">Docs</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
