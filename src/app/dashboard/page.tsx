"use client";

import Link from "next/link";
import { useState } from "react";

function DashboardNav() {
  return (
    <nav className="border-b border-mk-green/20 bg-[#0d1a10]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="text-xl">🐵</span>
          <span className="text-mk-ivory">
            monke<span className="text-mk-yellow">Agent</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-mk-light-green/30 bg-mk-light-green/10 px-3 py-1 text-xs font-semibold text-mk-light-green">
            <span className="h-2 w-2 rounded-full bg-mk-light-green" />
            Running
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-mk-green text-sm font-bold text-white">
            A
          </div>
        </div>
      </div>
    </nav>
  );
}

function ServerStatusCard() {
  return (
    <div className="rounded-2xl border border-mk-green/20 bg-mk-dark-green/30 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-mk-ivory">Server Status</h2>
        <span className="rounded-full bg-mk-light-green/10 px-3 py-1 text-xs font-semibold text-mk-light-green">
          Running
        </span>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-4">
        {[
          { label: "Uptime", value: "99.9%" },
          { label: "Region", value: "Hetzner Ashburn" },
          { label: "Last Restart", value: "3 days ago" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-xs text-mk-ivory/40">{stat.label}</div>
            <div className="mt-1 text-lg font-semibold text-mk-ivory">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4 flex items-center gap-2 text-sm">
        <span className="font-mono text-mk-ivory/50">alex.monkeagent.ai</span>
        <span className="text-mk-ivory/20">|</span>
        <span className="text-mk-ivory/40">CX22 &bull; 2 vCPU &bull; 4GB RAM</span>
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="rounded-lg border border-mk-green/30 px-4 py-2 text-sm font-medium text-mk-ivory transition hover:bg-mk-green/10">
          Restart
        </button>
        <button className="rounded-lg border border-mk-green/30 px-4 py-2 text-sm font-medium text-mk-ivory transition hover:bg-mk-green/10">
          Stop
        </button>
        <a
          href="http://alex.monkeagent.ai:18789"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-mk-green/30 px-4 py-2 text-sm font-medium text-mk-ivory/60 transition hover:bg-mk-green/10 hover:text-mk-ivory"
        >
          Open Control UI &rarr;
        </a>
      </div>
    </div>
  );
}

const channels = [
  {
    name: "Telegram",
    icon: "💬",
    connected: true,
    detail: "@alex_monkeagent_bot",
  },
  {
    name: "WhatsApp",
    icon: "📱",
    connected: true,
    detail: "+1 (415) 555-0142",
  },
  {
    name: "Discord",
    icon: "🎮",
    connected: false,
  },
  {
    name: "iMessage",
    icon: "💭",
    connected: false,
  },
  {
    name: "Slack",
    icon: "🔗",
    connected: false,
    label: "(Plugin)",
  },
];

function ChannelsSection() {
  return (
    <div className="rounded-2xl border border-mk-green/20 bg-mk-dark-green/30 p-6">
      <h2 className="text-lg font-bold text-mk-ivory">Messaging Channels</h2>
      <p className="mb-4 mt-1 text-xs text-mk-ivory/40">
        Connect the apps you want your agent to respond in
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {channels.map((ch) => (
          <div
            key={ch.name}
            className="flex items-center justify-between rounded-xl border border-mk-green/15 bg-[#0d1a10]/50 p-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{ch.icon}</span>
              <div>
                <div className="text-sm font-semibold text-mk-ivory">
                  {ch.name}
                  {ch.label && (
                    <span className="ml-1 text-xs font-normal text-mk-ivory/30">
                      {ch.label}
                    </span>
                  )}
                </div>
                {ch.connected && ch.detail && (
                  <div className="text-xs text-mk-ivory/40">{ch.detail}</div>
                )}
              </div>
            </div>
            {ch.connected ? (
              <span className="rounded-full bg-mk-light-green/10 px-2.5 py-1 text-xs font-medium text-mk-light-green">
                Connected
              </span>
            ) : (
              <button className="rounded-full border border-mk-green/30 px-3 py-1 text-xs font-medium text-mk-ivory transition hover:bg-mk-green/10">
                + Connect
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function AIProviderCard() {
  return (
    <div className="rounded-2xl border border-mk-green/20 bg-mk-dark-green/30 p-6">
      <h2 className="mb-4 text-lg font-bold text-mk-ivory">AI Provider</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-mk-ivory/40">Provider</span>
          <span className="text-sm font-medium text-mk-ivory">
            Claude &middot; Anthropic
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-mk-ivory/40">Model</span>
          <span className="font-mono text-sm text-mk-ivory/70">
            claude-sonnet-4-5
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-mk-ivory/40">API Key</span>
          <span className="flex items-center gap-2 text-sm text-mk-ivory/70">
            <span className="font-mono">••••••••sk-ant</span>
            <span className="rounded-full bg-mk-light-green/10 px-2 py-0.5 text-xs font-medium text-mk-light-green">
              Configured
            </span>
          </span>
        </div>
      </div>
      <div className="mt-4">
        <button className="rounded-lg border border-mk-green/30 px-4 py-2 text-sm font-medium text-mk-ivory transition hover:bg-mk-green/10">
          Change Provider
        </button>
      </div>
    </div>
  );
}

const civicIntegrations = [
  { name: "Gmail", icon: "📧", authorized: true },
  { name: "Google Calendar", icon: "📅", authorized: true },
  { name: "GitHub", icon: "🐙", authorized: false },
  { name: "Slack", icon: "💼", authorized: false },
];

function CivicIntegrationsCard() {
  return (
    <div className="rounded-2xl border border-mk-green/20 bg-mk-dark-green/30 p-6">
      <h2 className="text-lg font-bold text-mk-ivory">
        App Integrations via Civic
      </h2>
      <p className="mb-4 mt-1 text-xs text-mk-ivory/40">
        Your agent accesses these apps securely through Civic — credentials
        never leave the Civic Hub
      </p>
      <div className="grid grid-cols-2 gap-3">
        {civicIntegrations.map((int) => (
          <div
            key={int.name}
            className="flex items-center gap-3 rounded-xl border border-mk-green/15 bg-[#0d1a10]/50 p-4"
          >
            <span className="text-xl">{int.icon}</span>
            <div>
              <div className="text-sm font-semibold text-mk-ivory">
                {int.name}
              </div>
              {int.authorized ? (
                <div className="text-xs text-mk-light-green">authorized ✓</div>
              ) : (
                <div className="text-xs text-mk-ivory/30">not connected</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <a
          href="https://app.civic.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-mk-green/20 px-4 py-2 text-sm font-medium text-mk-ivory/60 transition hover:bg-mk-green/10 hover:text-mk-ivory"
        >
          Manage in Civic &rarr;
        </a>
        <span className="text-xs text-mk-ivory/20">
          Powered by Civic &middot; app.civic.com
        </span>
      </div>
    </div>
  );
}

function AdvancedSection() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ssh monke@alex.monkeagent.ai");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-mk-green/10 bg-mk-dark-green/15 p-6 opacity-70">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-mk-ivory/70">Advanced</h2>
          <span className="text-xs text-mk-ivory/30">(for power users)</span>
        </div>
        <span
          className={`text-mk-ivory/40 transition-transform ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-mk-green/10 bg-[#0d1a10]/30 p-4">
            <div className="text-sm font-semibold text-mk-ivory/60">
              OpenClaw Control UI
            </div>
            <div className="mt-1 text-xs text-mk-ivory/30">
              Full dashboard with chat, sessions, and config
            </div>
            <a
              href="http://alex.monkeagent.ai:18789"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs font-medium text-mk-ivory/40 underline transition hover:text-mk-ivory/60"
            >
              alex.monkeagent.ai:18789
            </a>
          </div>

          <div className="rounded-xl border border-mk-green/10 bg-[#0d1a10]/30 p-4">
            <div className="text-sm font-semibold text-mk-ivory/60">
              SSH Access
            </div>
            <div className="mt-1 flex items-center gap-2">
              <code className="rounded bg-[#0d1a10]/60 px-2 py-1 font-mono text-xs text-mk-ivory/50">
                ssh monke@alex.monkeagent.ai
              </code>
              <button
                onClick={handleCopy}
                className="rounded border border-mk-green/20 px-2 py-1 text-xs text-mk-ivory/40 transition hover:bg-mk-green/10 hover:text-mk-ivory/60"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="mt-1 text-xs text-mk-ivory/25">
              Port 22 &middot; key-based auth only
            </div>
          </div>

          <div className="rounded-xl border border-mk-green/10 bg-[#0d1a10]/30 p-4">
            <div className="text-sm font-semibold text-mk-ivory/60">
              Config file
            </div>
            <code className="mt-1 block font-mono text-xs text-mk-ivory/40">
              ~/.openclaw/openclaw.json
            </code>
            <div className="mt-1 flex items-center gap-2 text-xs text-mk-ivory/30">
              Edit directly for advanced settings &middot;{" "}
              <a
                href="https://docs.openclaw.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition hover:text-mk-ivory/50"
              >
                docs.openclaw.ai
              </a>
            </div>
          </div>

          <div className="border-t border-mk-green/10 pt-3">
            <button className="text-xs text-red-400/50 transition hover:text-red-400/80">
              Delete Server
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0d1a10]">
      <DashboardNav />

      <div className="mx-auto max-w-4xl px-6 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-mk-ivory">
            Welcome back, Alex 🐵
          </h1>
          <p className="text-sm text-mk-ivory/50">
            Your monkeAgent is running smoothly &middot; Powered by OpenClaw
          </p>
        </div>

        {/* Full-width stacked layout */}
        <div className="space-y-6">
          <ServerStatusCard />
          <ChannelsSection />
          <AIProviderCard />
          <CivicIntegrationsCard />
          <AdvancedSection />
        </div>
      </div>
    </div>
  );
}
