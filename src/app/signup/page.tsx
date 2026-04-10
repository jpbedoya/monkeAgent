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
            className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors"
            style={{
              background:
                i < current
                  ? "var(--g-light)"
                  : i === current
                  ? "var(--y)"
                  : "rgba(74,143,93,0.2)",
              color:
                i < current
                  ? "#0A0E0B"
                  : i === current
                  ? "#0A0E0B"
                  : "rgba(232,240,233,0.4)",
            }}
          >
            {i < current ? "✓" : i + 1}
          </div>
          <span
            className="hidden text-xs sm:block"
            style={{
              color:
                i === current ? "#E8F0E9" : "rgba(232,240,233,0.4)",
            }}
          >
            {label}
          </span>
          {i < steps.length - 1 && (
            <div
              className="mx-1 h-px w-8"
              style={{
                background:
                  i < current ? "var(--g-light)" : "rgba(74,143,93,0.2)",
              }}
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
        <h2
          className="mb-2 text-2xl font-bold"
          style={{ color: "#E8F0E9" }}
        >
          Create your account
        </h2>
        <p className="text-sm" style={{ color: "rgba(232,240,233,0.5)" }}>
          Get your MonkeAgent up and running in minutes
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            className="mb-1.5 block text-sm"
            style={{ color: "rgba(232,240,233,0.7)" }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border px-4 py-3 text-sm"
            style={{
              border: "1px solid rgba(74,143,93,0.3)",
              background: "rgba(24,70,35,0.5)",
              color: "#E8F0E9",
              outline: "none",
            }}
          />
        </div>
        <div>
          <label
            className="mb-1.5 block text-sm"
            style={{ color: "rgba(232,240,233,0.7)" }}
          >
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border px-4 py-3 text-sm"
            style={{
              border: "1px solid rgba(74,143,93,0.3)",
              background: "rgba(24,70,35,0.5)",
              color: "#E8F0E9",
              outline: "none",
            }}
          />
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full rounded-xl py-3 font-semibold transition hover:opacity-90"
        style={{ background: "var(--y)", color: "#0A0E0B" }}
      >
        Create Account
      </button>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div
            className="w-full"
            style={{ borderTop: "1px solid rgba(74,143,93,0.2)" }}
          />
        </div>
        <div className="relative flex justify-center">
          <span
            className="px-4 text-sm"
            style={{
              background: "var(--ink)",
              color: "rgba(232,240,233,0.4)",
            }}
          >
            or
          </span>
        </div>
      </div>

      <button
        onClick={onNext}
        className="flex w-full items-center justify-center gap-3 rounded-xl border py-3 font-semibold transition hover:bg-[rgba(74,143,93,0.1)]"
        style={{
          border: "1px solid rgba(74,143,93,0.3)",
          color: "#E8F0E9",
        }}
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
        <h2
          className="mb-2 text-2xl font-bold"
          style={{ color: "#E8F0E9" }}
        >
          Connect your Telegram Bot
        </h2>
        <p className="text-sm" style={{ color: "rgba(232,240,233,0.5)" }}>
          Your MonkeAgent will communicate through this bot
        </p>
      </div>

      <div
        className="rounded-xl border p-5"
        style={{
          border: "1px solid rgba(74,143,93,0.2)",
          background: "rgba(24,70,35,0.3)",
        }}
      >
        <h3 className="mb-3 text-sm font-semibold" style={{ color: "var(--g-light)" }}>
          Quick Setup Guide
        </h3>
        <ol className="space-y-2 text-sm" style={{ color: "rgba(232,240,233,0.6)" }}>
          <li className="flex gap-2">
            <span className="font-bold" style={{ color: "var(--y)" }}>1.</span>
            Open Telegram and search for @BotFather
          </li>
          <li className="flex gap-2">
            <span className="font-bold" style={{ color: "var(--y)" }}>2.</span>
            Send /newbot and follow the prompts
          </li>
          <li className="flex gap-2">
            <span className="font-bold" style={{ color: "var(--y)" }}>3.</span>
            Copy the API token BotFather gives you
          </li>
          <li className="flex gap-2">
            <span className="font-bold" style={{ color: "var(--y)" }}>4.</span>
            Paste it below and test the connection
          </li>
        </ol>
      </div>

      <div>
        <label
          className="mb-1.5 block text-sm"
          style={{ color: "rgba(232,240,233,0.7)" }}
        >
          Bot Token
        </label>
        <input
          type="text"
          placeholder="123456789:ABCdefGHIjklMNOpqrsTUVwxyz"
          className="w-full rounded-lg border px-4 py-3 text-sm font-mono"
          style={{
            border: "1px solid rgba(74,143,93,0.3)",
            background: "rgba(24,70,35,0.5)",
            color: "#E8F0E9",
            outline: "none",
          }}
        />
      </div>

      {connected ? (
        <div
          className="rounded-lg border p-4 text-center"
          style={{
            border: "1px solid rgba(134,201,148,0.3)",
            background: "rgba(134,201,148,0.1)",
          }}
        >
          <span className="text-lg">✅</span>
          <p
            className="mt-1 text-sm font-semibold"
            style={{ color: "var(--g-light)" }}
          >
            Bot connected successfully!
          </p>
          <p className="text-xs" style={{ color: "rgba(232,240,233,0.5)" }}>
            @your_openclaw_bot is ready
          </p>
        </div>
      ) : (
        <button
          onClick={handleTest}
          disabled={testing}
          className="w-full rounded-xl border py-3 font-semibold transition hover:bg-[rgba(74,143,93,0.1)] disabled:opacity-50"
          style={{
            border: "1px solid rgba(74,143,93,0.3)",
            color: "#E8F0E9",
          }}
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
        className="w-full rounded-xl py-3 font-semibold transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        style={{ background: "var(--y)", color: "#0A0E0B" }}
      >
        Continue
      </button>
    </div>
  );
}

const aiProviders = [
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
  {
    id: "minimax",
    name: "MiniMax",
    company: "MiniMax",
    description: "Fast, affordable, and great for real-time conversations.",
    color: "#8B5CF6",
  },
];

function StepAI({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <div className="text-center">
        <h2
          className="mb-2 text-2xl font-bold"
          style={{ color: "#E8F0E9" }}
        >
          Choose your AI provider
        </h2>
        <p className="text-sm" style={{ color: "rgba(232,240,233,0.5)" }}>
          Select which AI model will power your assistant
        </p>
      </div>

      <div className="grid gap-4">
        {aiProviders.map((ai) => (
          <button
            key={ai.id}
            onClick={() => setSelected(ai.id)}
            className="rounded-xl border p-5 text-left transition"
            style={{
              border:
                selected === ai.id
                  ? "1px solid var(--y)"
                  : "1px solid rgba(74,143,93,0.2)",
              background:
                selected === ai.id
                  ? "rgba(255,201,25,0.05)"
                  : "rgba(24,70,35,0.3)",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-white"
                style={{ backgroundColor: ai.color }}
              >
                {ai.name[0]}
              </div>
              <div>
                <div className="font-semibold" style={{ color: "#E8F0E9" }}>
                  {ai.name}
                </div>
                <div className="text-xs" style={{ color: "rgba(232,240,233,0.4)" }}>
                  {ai.company}
                </div>
              </div>
              {selected === ai.id && (
                <span className="ml-auto" style={{ color: "var(--y)" }}>✓</span>
              )}
            </div>
            <p
              className="mt-3 text-sm"
              style={{ color: "rgba(232,240,233,0.5)" }}
            >
              {ai.description}
            </p>
          </button>
        ))}
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="space-y-2"
        >
          <label className="block text-sm" style={{ color: "rgba(232,240,233,0.7)" }}>
            API Key
          </label>
          <input
            type="password"
            placeholder={`Enter your ${aiProviders.find((a) => a.id === selected)?.company} API key`}
            className="w-full rounded-lg border px-4 py-3 font-mono text-sm"
            style={{
              border: "1px solid rgba(74,143,93,0.3)",
              background: "rgba(24,70,35,0.5)",
              color: "#E8F0E9",
              outline: "none",
            }}
          />
          <p className="text-xs" style={{ color: "rgba(232,240,233,0.3)" }}>
            Your key is encrypted and stored securely. We never share it.
          </p>
        </motion.div>
      )}

      <button
        onClick={onNext}
        disabled={!selected}
        className="w-full rounded-xl py-3 font-semibold transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        style={{ background: "var(--y)", color: "#0A0E0B" }}
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
        <div className="mb-6 flex justify-center"><img src="/m-agent-logo-white.svg" alt="MonkeAgent" style={{width:80,height:80}} /></div>
        <h2
          className="mb-3 text-3xl font-bold"
          style={{ color: "#E8F0E9" }}
        >
          Your MonkeAgent is live! 🎉
        </h2>
        <p className="mb-2" style={{ color: "rgba(232,240,233,0.5)" }}>
          Your AI agent is deployed and running. Powered by OpenClaw.
        </p>
        <div
          className="my-6 rounded-xl border p-4"
          style={{
            border: "1px solid rgba(134,201,148,0.3)",
            background: "rgba(134,201,148,0.1)",
          }}
        >
          <p className="text-sm" style={{ color: "rgba(232,240,233,0.5)" }}>
            Your server URL
          </p>
          <p
            className="mt-1 font-mono text-lg font-bold"
            style={{ color: "var(--g-light)" }}
          >
            alex.monke.is
          </p>
        </div>
        <Link
          href="/dashboard"
          className="inline-block rounded-xl px-8 py-3 font-semibold transition hover:opacity-90"
          style={{ background: "var(--y)", color: "#0A0E0B" }}
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
          className="mb-6 inline-block"
          style={{ width: 64, height: 64 }}
        >
          <img src="/m-agent-logo-white.svg" alt="MonkeAgent" style={{ width: 64, height: 64 }} />
        </motion.div>
        <h2
          className="mb-3 text-2xl font-bold"
          style={{ color: "#E8F0E9" }}
        >
          Provisioning your server...
        </h2>
        <p className="mb-6 text-sm" style={{ color: "rgba(232,240,233,0.5)" }}>
          Spinning up your MonkeAgent on Hetzner Ashburn...
        </p>
        <div
          className="overflow-hidden rounded-full"
          style={{ background: "rgba(74,143,93,0.2)" }}
        >
          <motion.div
            className="h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(to right, var(--g), var(--y))",
            }}
          />
        </div>
        <p
          className="mt-3 font-mono text-sm"
          style={{ color: "rgba(232,240,233,0.4)" }}
        >
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
        <h2
          className="mb-2 text-2xl font-bold"
          style={{ color: "#E8F0E9" }}
        >
          Ready to launch
        </h2>
        <p className="text-sm" style={{ color: "rgba(232,240,233,0.5)" }}>
          Review your configuration and deploy
        </p>
      </div>

      <div className="space-y-3">
        {[
          { label: "Telegram Bot", value: "@your_openclaw_bot", icon: "💬" },
          { label: "AI Provider", value: "GPT-4 (OpenAI)", icon: "🤖" },
          { label: "Region", value: "Hetzner Ashburn", icon: "🌍" },
          { label: "Plan", value: "Community ($9/mo)", icon: "📦" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 rounded-xl border p-4"
            style={{
              border: "1px solid rgba(74,143,93,0.2)",
              background: "rgba(24,70,35,0.3)",
            }}
          >
            <span className="text-2xl">{item.icon}</span>
            <div>
              <div className="text-xs" style={{ color: "rgba(232,240,233,0.4)" }}>
                {item.label}
              </div>
              <div className="font-semibold" style={{ color: "#E8F0E9" }}>
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleLaunch}
        className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-lg font-semibold transition hover:opacity-90"
        style={{ background: "var(--y)", color: "#0A0E0B" }}
      >
        🚀 Launch My MonkeAgent
      </button>
    </div>
  );
}

export default function SignupPage() {
  const [step, setStep] = useState(0);

  return (
    <main className="min-h-screen" style={{ background: "var(--ink)" }}>
      {/* Header */}
      <div
        className="border-b px-6 py-4"
        style={{ borderBottom: "0.5px solid rgba(74,143,93,0.18)" }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold"
          style={{ color: "#E8F0E9" }}
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg border text-lg"
            style={{
              background: "var(--g-dark)",
              border: "1px solid var(--g)",
            }}
          >
            <img src="/m-agent-logo-white.svg" alt="MonkeAgent" style={{ width: 20, height: 20 }} />
          </span>
          MonkeAgent
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
