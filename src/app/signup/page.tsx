"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = ["Account", "Telegram", "AI Provider", "Launch"];

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="mb-10 flex items-center justify-center gap-2">
      {steps.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors ${
              i < current
                ? "bg-mk-light-green text-mk-dark-green"
                : i === current
                ? "bg-mk-yellow text-mk-dark-green"
                : "bg-mk-green/20 text-mk-ivory/40"
            }`}
          >
            {i < current ? "✓" : i + 1}
          </div>
          <span
            className={`hidden text-xs sm:block ${
              i === current ? "text-mk-ivory" : "text-mk-ivory/40"
            }`}
          >
            {label}
          </span>
          {i < steps.length - 1 && (
            <div
              className={`mx-1 h-px w-8 ${
                i < current ? "bg-mk-light-green" : "bg-mk-green/20"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function StepCreateAccount({ onNext }: { onNext: () => void }) {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-mk-ivory">
          Create your account
        </h2>
        <p className="text-sm text-mk-ivory/50">
          Get started with OpenClaw Cloud in minutes
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm text-mk-ivory/70">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-mk-green/30 bg-mk-dark-green/50 px-4 py-3 text-mk-ivory placeholder:text-mk-ivory/30 focus:border-mk-yellow focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-mk-ivory/70">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-mk-green/30 bg-mk-dark-green/50 px-4 py-3 text-mk-ivory placeholder:text-mk-ivory/30 focus:border-mk-yellow focus:outline-none"
          />
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full rounded-xl bg-mk-yellow py-3 font-semibold text-mk-dark-green transition hover:bg-mk-yellow/90"
      >
        Create Account
      </button>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-mk-green/20" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#0d1a10] px-4 text-sm text-mk-ivory/40">or</span>
        </div>
      </div>

      <button
        onClick={onNext}
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-mk-green/30 py-3 font-semibold text-mk-ivory transition hover:bg-mk-green/10"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Sign up with Google
      </button>
    </div>
  );
}

function StepTelegram({ onNext }: { onNext: () => void }) {
  const [testing, setTesting] = useState(false);
  const [connected, setConnected] = useState(false);

  const handleTest = () => {
    setTesting(true);
    setTimeout(() => {
      setTesting(false);
      setConnected(true);
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-mk-ivory">
          Connect your Telegram Bot
        </h2>
        <p className="text-sm text-mk-ivory/50">
          Your OpenClaw will communicate through this bot
        </p>
      </div>

      <div className="rounded-xl border border-mk-green/20 bg-mk-dark-green/30 p-5">
        <h3 className="mb-3 text-sm font-semibold text-mk-light-green">
          Quick Setup Guide
        </h3>
        <ol className="space-y-2 text-sm text-mk-ivory/60">
          <li className="flex gap-2">
            <span className="font-bold text-mk-yellow">1.</span>
            Open Telegram and search for @BotFather
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-mk-yellow">2.</span>
            Send /newbot and follow the prompts
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-mk-yellow">3.</span>
            Copy the API token BotFather gives you
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-mk-yellow">4.</span>
            Paste it below and test the connection
          </li>
        </ol>
      </div>

      <div>
        <label className="mb-1.5 block text-sm text-mk-ivory/70">
          Bot Token
        </label>
        <input
          type="text"
          placeholder="123456789:ABCdefGHIjklMNOpqrsTUVwxyz"
          className="w-full rounded-lg border border-mk-green/30 bg-mk-dark-green/50 px-4 py-3 font-mono text-sm text-mk-ivory placeholder:text-mk-ivory/30 focus:border-mk-yellow focus:outline-none"
        />
      </div>

      {connected ? (
        <div className="rounded-lg border border-mk-light-green/30 bg-mk-light-green/10 p-4 text-center">
          <span className="text-lg">✅</span>
          <p className="mt-1 text-sm font-semibold text-mk-light-green">
            Bot connected successfully!
          </p>
          <p className="text-xs text-mk-ivory/50">@your_openclaw_bot is ready</p>
        </div>
      ) : (
        <button
          onClick={handleTest}
          disabled={testing}
          className="w-full rounded-xl border border-mk-green/30 py-3 font-semibold text-mk-ivory transition hover:bg-mk-green/10 disabled:opacity-50"
        >
          {testing ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Testing Connection...
            </span>
          ) : (
            "Test Connection"
          )}
        </button>
      )}

      <button
        onClick={onNext}
        disabled={!connected}
        className="w-full rounded-xl bg-mk-yellow py-3 font-semibold text-mk-dark-green transition hover:bg-mk-yellow/90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Continue
      </button>
    </div>
  );
}

const aiProviders = [
  {
    id: "claude",
    name: "Claude",
    company: "Anthropic",
    description: "Advanced reasoning and analysis. Great for complex tasks.",
    color: "#D97706",
  },
  {
    id: "gpt4",
    name: "GPT-4",
    company: "OpenAI",
    description: "Versatile and widely used. Excellent general-purpose AI.",
    color: "#10B981",
  },
  {
    id: "gemini",
    name: "Gemini",
    company: "Google",
    description: "Multimodal capabilities. Strong at search and synthesis.",
    color: "#3B82F6",
  },
];

function StepAI({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-mk-ivory">
          Choose your AI provider
        </h2>
        <p className="text-sm text-mk-ivory/50">
          Select which AI model will power your assistant
        </p>
      </div>

      <div className="grid gap-4">
        {aiProviders.map((ai) => (
          <button
            key={ai.id}
            onClick={() => setSelected(ai.id)}
            className={`rounded-xl border p-5 text-left transition ${
              selected === ai.id
                ? "border-mk-yellow bg-mk-yellow/5"
                : "border-mk-green/20 bg-mk-dark-green/30 hover:border-mk-green/40"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-white"
                style={{ backgroundColor: ai.color }}
              >
                {ai.name[0]}
              </div>
              <div>
                <div className="font-semibold text-mk-ivory">{ai.name}</div>
                <div className="text-xs text-mk-ivory/40">{ai.company}</div>
              </div>
              {selected === ai.id && (
                <span className="ml-auto text-mk-yellow">✓</span>
              )}
            </div>
            <p className="mt-3 text-sm text-mk-ivory/50">{ai.description}</p>
          </button>
        ))}
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="space-y-2"
        >
          <label className="block text-sm text-mk-ivory/70">API Key</label>
          <input
            type="password"
            placeholder={`Enter your ${
              aiProviders.find((a) => a.id === selected)?.company
            } API key`}
            className="w-full rounded-lg border border-mk-green/30 bg-mk-dark-green/50 px-4 py-3 font-mono text-sm text-mk-ivory placeholder:text-mk-ivory/30 focus:border-mk-yellow focus:outline-none"
          />
          <p className="text-xs text-mk-ivory/30">
            Your key is encrypted and stored securely. We never share it.
          </p>
        </motion.div>
      )}

      <button
        onClick={onNext}
        disabled={!selected}
        className="w-full rounded-xl bg-mk-yellow py-3 font-semibold text-mk-dark-green transition hover:bg-mk-yellow/90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Continue
      </button>
    </div>
  );
}

function StepLaunch() {
  const [phase, setPhase] = useState<"summary" | "provisioning" | "done">(
    "summary"
  );
  const [progress, setProgress] = useState(0);

  const handleLaunch = () => {
    setPhase("provisioning");
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setPhase("done"), 500);
      }
      setProgress(Math.min(p, 100));
    }, 300);
  };

  if (phase === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto max-w-md text-center"
      >
        <div className="mb-6 text-6xl">🐵</div>
        <h2 className="mb-3 text-3xl font-bold text-mk-ivory">
          Your OpenClaw is ready!
        </h2>
        <p className="mb-2 text-mk-ivory/50">
          Your instance has been deployed and is running.
        </p>
        <div className="my-6 rounded-xl border border-mk-light-green/30 bg-mk-light-green/10 p-4">
          <p className="text-sm text-mk-ivory/50">Your server URL</p>
          <p className="mt-1 font-mono text-lg font-bold text-mk-light-green">
            alex.openclaw.ai
          </p>
        </div>
        <Link
          href="/dashboard"
          className="inline-block rounded-xl bg-mk-yellow px-8 py-3 font-semibold text-mk-dark-green transition hover:bg-mk-yellow/90"
        >
          Go to Dashboard
        </Link>
      </motion.div>
    );
  }

  if (phase === "provisioning") {
    return (
      <div className="mx-auto max-w-md text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="mb-6 inline-block text-5xl"
        >
          🐵
        </motion.div>
        <h2 className="mb-3 text-2xl font-bold text-mk-ivory">
          Provisioning your server...
        </h2>
        <p className="mb-6 text-sm text-mk-ivory/50">
          Setting up your OpenClaw instance on Hetzner Ashburn
        </p>
        <div className="overflow-hidden rounded-full bg-mk-green/20">
          <motion.div
            className="h-3 rounded-full bg-gradient-to-r from-mk-green to-mk-yellow"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        <p className="mt-3 font-mono text-sm text-mk-ivory/40">
          {progress < 30
            ? "Creating server instance..."
            : progress < 60
            ? "Installing dependencies..."
            : progress < 90
            ? "Configuring integrations..."
            : "Finalizing setup..."}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-mk-ivory">
          Ready to launch
        </h2>
        <p className="text-sm text-mk-ivory/50">
          Review your configuration and deploy
        </p>
      </div>

      <div className="space-y-3">
        {[
          { label: "Telegram Bot", value: "@your_openclaw_bot", icon: "💬" },
          { label: "AI Provider", value: "Claude (Anthropic)", icon: "🤖" },
          { label: "Region", value: "Hetzner Ashburn", icon: "🌍" },
          { label: "Plan", value: "Community ($9/mo)", icon: "📦" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 rounded-xl border border-mk-green/20 bg-mk-dark-green/30 p-4"
          >
            <span className="text-2xl">{item.icon}</span>
            <div>
              <div className="text-xs text-mk-ivory/40">{item.label}</div>
              <div className="font-semibold text-mk-ivory">{item.value}</div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleLaunch}
        className="w-full rounded-xl bg-mk-yellow py-3 text-lg font-semibold text-mk-dark-green transition hover:bg-mk-yellow/90"
      >
        🚀 Launch My OpenClaw
      </button>
    </div>
  );
}

export default function SignupPage() {
  const [step, setStep] = useState(0);

  return (
    <main className="min-h-screen bg-[#0d1a10]">
      {/* Header */}
      <div className="border-b border-mk-green/20 px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🐵</span>
          <span className="text-mk-ivory">
            Open<span className="text-mk-yellow">Claw</span> Cloud
          </span>
        </Link>
      </div>

      <div className="px-6 py-12">
        <StepIndicator current={step} />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {step === 0 && <StepCreateAccount onNext={() => setStep(1)} />}
            {step === 1 && <StepTelegram onNext={() => setStep(2)} />}
            {step === 2 && <StepAI onNext={() => setStep(3)} />}
            {step === 3 && <StepLaunch />}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
