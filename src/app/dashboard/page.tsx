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
          Healthy
        </span>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Uptime", value: "99.9%" },
          { label: "Region", value: "Ashburn" },
          { label: "Last Restart", value: "3 days ago" },
          { label: "CPU Usage", value: "12%" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-xs text-mk-ivory/40">{stat.label}</div>
            <div className="mt-1 text-lg font-semibold text-mk-ivory">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="font-mono text-mk-ivory/50">alex.monkeagent.ai</span>
        <span className="text-mk-ivory/20">|</span>
        <span className="text-mk-ivory/40">Hetzner CX21 &bull; 2 vCPU &bull; 4GB RAM</span>
      </div>

      <div className="mt-4 flex gap-3">
        <button className="rounded-lg border border-mk-green/30 px-4 py-2 text-sm font-medium text-mk-ivory transition hover:bg-mk-green/10">
          Restart
        </button>
        <button className="rounded-lg border border-mk-green/30 px-4 py-2 text-sm font-medium text-mk-ivory transition hover:bg-mk-green/10">
          Stop
        </button>
        <button className="rounded-lg border border-mk-green/30 px-4 py-2 text-sm font-medium text-mk-ivory transition hover:bg-mk-green/10">
          View Logs
        </button>
      </div>
    </div>
  );
}

const integrations = [
  {
    name: "Telegram",
    status: "connected",
    detail: "@alex_openclaw_bot",
    icon: "💬",
  },
  {
    name: "AI Provider",
    status: "connected",
    detail: "Claude (Anthropic)",
    icon: "🤖",
  },
  {
    name: "Google",
    status: "not_connected",
    detail: "Calendar, Gmail, Drive",
    icon: "📧",
  },
  {
    name: "Discord",
    status: "not_connected",
    detail: "Server bot integration",
    icon: "🎮",
  },
];

function IntegrationsSection() {
  return (
    <div className="rounded-2xl border border-mk-green/20 bg-mk-dark-green/30 p-6">
      <h2 className="mb-4 text-lg font-bold text-mk-ivory">
        Connected Integrations
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {integrations.map((int) => (
          <div
            key={int.name}
            className="flex items-center justify-between rounded-xl border border-mk-green/15 bg-[#0d1a10]/50 p-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{int.icon}</span>
              <div>
                <div className="text-sm font-semibold text-mk-ivory">
                  {int.name}
                </div>
                <div className="text-xs text-mk-ivory/40">{int.detail}</div>
              </div>
            </div>
            {int.status === "connected" ? (
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

const activities = [
  {
    text: 'Responded to message from @jpbedoya',
    time: "2 min ago",
    icon: "💬",
  },
  {
    text: "Summarized 3 unread emails",
    time: "15 min ago",
    icon: "📧",
  },
  {
    text: "Created calendar event: Team standup",
    time: "1 hour ago",
    icon: "📅",
  },
  {
    text: "Answered question from @monke_dev",
    time: "3 hours ago",
    icon: "🐵",
  },
  {
    text: "Server health check passed",
    time: "6 hours ago",
    icon: "✅",
  },
];

function RecentActivity() {
  return (
    <div className="rounded-2xl border border-mk-green/20 bg-mk-dark-green/30 p-6">
      <h2 className="mb-4 text-lg font-bold text-mk-ivory">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((activity, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg border border-mk-green/10 bg-[#0d1a10]/30 px-4 py-3"
          >
            <span className="text-lg">{activity.icon}</span>
            <span className="flex-1 text-sm text-mk-ivory/70">
              {activity.text}
            </span>
            <span className="whitespace-nowrap text-xs text-mk-ivory/30">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickConfig() {
  const [autoReply, setAutoReply] = useState(true);
  const [digest, setDigest] = useState(false);
  const [debug, setDebug] = useState(false);

  const Toggle = ({
    enabled,
    onToggle,
  }: {
    enabled: boolean;
    onToggle: () => void;
  }) => (
    <button
      onClick={onToggle}
      className={`relative h-6 w-11 rounded-full transition-colors ${
        enabled ? "bg-mk-light-green" : "bg-mk-green/30"
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
          enabled ? "left-[22px]" : "left-0.5"
        }`}
      />
    </button>
  );

  return (
    <div className="rounded-2xl border border-mk-green/20 bg-mk-dark-green/30 p-6">
      <h2 className="mb-4 text-lg font-bold text-mk-ivory">Quick Config</h2>
      <div className="space-y-4">
        {[
          {
            label: "Auto-reply when offline",
            description: "Respond to messages even when you're away",
            enabled: autoReply,
            toggle: () => setAutoReply(!autoReply),
          },
          {
            label: "Daily email digest",
            description: "Get a summary of all interactions each morning",
            enabled: digest,
            toggle: () => setDigest(!digest),
          },
          {
            label: "Debug mode",
            description: "Show detailed logs in the activity feed",
            enabled: debug,
            toggle: () => setDebug(!debug),
          },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between"
          >
            <div>
              <div className="text-sm font-medium text-mk-ivory">
                {item.label}
              </div>
              <div className="text-xs text-mk-ivory/40">
                {item.description}
              </div>
            </div>
            <Toggle enabled={item.enabled} onToggle={item.toggle} />
          </div>
        ))}
      </div>
    </div>
  );
}

function DangerZone() {
  return (
    <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6">
      <h2 className="mb-1 text-lg font-bold text-red-400">Danger Zone</h2>
      <p className="mb-4 text-xs text-red-400/50">
        These actions can affect your running server
      </p>
      <div className="flex flex-wrap gap-3">
        <button className="rounded-lg border border-red-500/30 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/10">
          Restart Server
        </button>
        <button className="rounded-lg border border-red-500/30 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/10">
          Reset Config
        </button>
        <button className="rounded-lg border border-red-500/50 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/20">
          Delete Server
        </button>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0d1a10]">
      <DashboardNav />

      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-mk-ivory">
            Welcome back, Alex 🐵
          </h1>
          <p className="text-sm text-mk-ivory/50">
            Your monkeAgent is running smoothly · Powered by OpenClaw
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <ServerStatusCard />
            <IntegrationsSection />
            <RecentActivity />
          </div>
          <div className="space-y-6">
            <QuickConfig />
            <DangerZone />
          </div>
        </div>
      </div>
    </div>
  );
}
