"use client";

import Link from "next/link";
import { useState } from "react";

type View = "overview" | "channels" | "ai-provider" | "integrations" | "advanced";

const sidebarItems: { id: View; icon: string; label: string }[] = [
  { id: "overview", icon: "🏠", label: "Overview" },
  { id: "channels", icon: "💬", label: "Channels" },
  { id: "ai-provider", icon: "🤖", label: "AI Provider" },
  { id: "integrations", icon: "🔐", label: "Integrations" },
  { id: "advanced", icon: "⚙️", label: "Advanced" },
];

function DashboardNav() {
  return (
    <nav className="border-b border-mk-green/20 bg-[#0d1a10]/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="text-xl">🐵</span>
          <span className="text-mk-ivory">
            monke<span className="text-mk-yellow">Agent</span>
          </span>
        </Link>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-mk-green text-sm font-bold text-white">
          A
        </div>
      </div>
    </nav>
  );
}

/* ── Sidebar ── */

function Sidebar({
  active,
  onSelect,
}: {
  active: View;
  onSelect: (v: View) => void;
}) {
  return (
    <aside className="hidden lg:flex w-60 shrink-0 flex-col justify-between bg-[#0a1509] border-r border-mk-green/15 px-3 py-6">
      <nav className="space-y-1">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              active === item.id
                ? "bg-mk-yellow/10 text-mk-yellow"
                : "text-mk-ivory/50 hover:bg-mk-green/10 hover:text-mk-ivory/70"
            }`}
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-auto space-y-2 px-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-mk-light-green">
          <span className="h-2 w-2 rounded-full bg-mk-light-green" />
          Running
        </div>
        <div className="font-mono text-[11px] text-mk-ivory/30">
          alex.monkeagent.ai
        </div>
      </div>
    </aside>
  );
}

function MobileTabBar({
  active,
  onSelect,
}: {
  active: View;
  onSelect: (v: View) => void;
}) {
  return (
    <div className="flex lg:hidden overflow-x-auto border-b border-mk-green/15 bg-[#0a1509] px-2">
      {sidebarItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`flex shrink-0 items-center gap-1.5 px-3 py-2.5 text-xs font-medium transition border-b-2 ${
            active === item.id
              ? "border-mk-yellow text-mk-yellow"
              : "border-transparent text-mk-ivory/50 hover:text-mk-ivory/70"
          }`}
        >
          <span>{item.icon}</span>
          {item.label}
        </button>
      ))}
    </div>
  );
}

/* ── Overview Panel ── */

function OverviewPanel() {
  const channelIcons = [
    { name: "Telegram", icon: "💬", active: true },
    { name: "WhatsApp", icon: "📱", active: true },
    { name: "Discord", icon: "🎮", active: false },
    { name: "iMessage", icon: "💭", active: false },
    { name: "Slack", icon: "🔗", active: false },
  ];

  return (
    <div className="space-y-5">
      {/* Stat cards row */}
      <div className="grid gap-4 sm:grid-cols-3">
        {/* Channels stat */}
        <div className="rounded-xl border border-mk-green/20 bg-mk-dark-green/30 p-4">
          <div className="text-xl font-bold text-mk-ivory">2 of 5</div>
          <div className="mt-1 text-xs text-mk-ivory/40">channels connected</div>
          <div className="mt-3 flex gap-1.5">
            {channelIcons.map((ch) => (
              <span
                key={ch.name}
                className={`text-lg ${ch.active ? "" : "opacity-25 grayscale"}`}
                title={ch.name}
              >
                {ch.icon}
              </span>
            ))}
          </div>
        </div>

        {/* AI Provider stat */}
        <div className="rounded-xl border border-mk-green/20 bg-mk-dark-green/30 p-4">
          <div className="text-xl font-bold text-mk-ivory">Claude Sonnet</div>
          <div className="mt-1 text-xs text-mk-ivory/40">AI Provider</div>
          <div className="mt-3">
            <span className="rounded-full bg-mk-yellow/15 px-2.5 py-1 text-xs font-semibold text-mk-yellow">
              Anthropic
            </span>
          </div>
        </div>

        {/* Server stat */}
        <div className="rounded-xl border border-mk-green/20 bg-mk-dark-green/30 p-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-mk-light-green" />
            <span className="text-xl font-bold text-mk-ivory">Running</span>
          </div>
          <div className="mt-1 text-xs text-mk-ivory/40">99.9% uptime</div>
          <div className="mt-3 font-mono text-xs text-mk-ivory/30">
            alex.monkeagent.ai
          </div>
        </div>
      </div>

      {/* Civic integrations strip */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-mk-green/15 bg-mk-dark-green/20 px-4 py-3">
        <div className="text-sm text-mk-ivory/60">
          <span className="font-semibold text-mk-ivory/80">2 of 85+</span> apps
          connected via Civic
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-mk-light-green/10 px-2 py-0.5 text-xs font-medium text-mk-light-green">
            📧 Gmail ✓
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-mk-light-green/10 px-2 py-0.5 text-xs font-medium text-mk-light-green">
            📅 Calendar ✓
          </span>
        </div>
        <a
          href="https://app.civic.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-xs font-medium text-mk-ivory/40 transition hover:text-mk-ivory/70"
        >
          Manage &rarr;
        </a>
      </div>
    </div>
  );
}

/* ── Channels Panel ── */

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
  { name: "Discord", icon: "🎮", connected: false },
  { name: "iMessage", icon: "💭", connected: false },
  {
    name: "Slack",
    icon: "🔗",
    connected: false,
    label: "(Plugin required)",
  },
];

function ChannelsPanel() {
  return (
    <div>
      <h2 className="text-xl font-bold text-mk-ivory">Messaging Channels</h2>
      <p className="mb-5 mt-1 text-sm text-mk-ivory/40">
        Connect the apps you want your agent to respond in
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {channels.map((ch) => (
          <div
            key={ch.name}
            className="flex items-center justify-between rounded-xl border border-mk-green/15 bg-mk-dark-green/30 p-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{ch.icon}</span>
              <div>
                <div className="text-sm font-semibold text-mk-ivory">
                  {ch.name}
                  {ch.label && (
                    <span className="ml-1.5 text-xs font-normal text-mk-ivory/30">
                      {ch.label}
                    </span>
                  )}
                </div>
                {ch.connected && ch.detail && (
                  <div className="text-xs text-mk-ivory/40">{ch.detail}</div>
                )}
                {ch.connected && (
                  <span className="mt-1 inline-block rounded-full bg-mk-light-green/10 px-2 py-0.5 text-[10px] font-medium text-mk-light-green">
                    Connected
                  </span>
                )}
              </div>
            </div>
            {ch.connected ? (
              <button className="rounded-lg border border-mk-green/30 px-3 py-1.5 text-xs font-medium text-mk-ivory/60 transition hover:bg-mk-green/10 hover:text-mk-ivory">
                Edit
              </button>
            ) : (
              <button className="rounded-lg border border-mk-yellow/30 bg-mk-yellow/10 px-3 py-1.5 text-xs font-semibold text-mk-yellow transition hover:bg-mk-yellow/20">
                + Connect
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── AI Provider Panel ── */

const providers = [
  { name: "Claude Sonnet", company: "Anthropic", letter: "C", color: "bg-orange-500", active: true },
  { name: "GPT-4", company: "OpenAI", letter: "G", color: "bg-emerald-600", active: false },
  { name: "Gemini", company: "Google", letter: "G", color: "bg-blue-500", active: false },
];

function AIProviderPanel() {
  const [selected, setSelected] = useState("Claude Sonnet");

  return (
    <div>
      <h2 className="text-xl font-bold text-mk-ivory">AI Provider</h2>

      {/* Current provider */}
      <div className="mt-5 rounded-xl border border-mk-yellow/20 bg-mk-dark-green/40 p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-xl font-bold text-white">
            C
          </div>
          <div>
            <div className="text-lg font-bold text-mk-ivory">Claude Sonnet</div>
            <div className="text-xs text-mk-ivory/40">Anthropic</div>
          </div>
          <span className="ml-auto rounded-full bg-mk-yellow/15 px-3 py-1 text-xs font-semibold text-mk-yellow">
            Active
          </span>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-mk-ivory/50">
          <span className="font-mono text-xs">••••••••sk-ant</span>
          <span className="rounded-full bg-mk-light-green/10 px-2 py-0.5 text-xs font-medium text-mk-light-green">
            Configured
          </span>
        </div>
      </div>

      {/* Switch provider */}
      <h3 className="mb-3 mt-6 text-sm font-semibold text-mk-ivory/50">
        Switch Provider
      </h3>
      <div className="grid gap-3 sm:grid-cols-3">
        {providers.map((p) => (
          <button
            key={p.name}
            onClick={() => setSelected(p.name)}
            className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${
              selected === p.name
                ? "border-mk-yellow/30 bg-mk-dark-green/40"
                : "border-mk-green/15 bg-mk-dark-green/20 opacity-50 hover:opacity-70"
            }`}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-md ${p.color} text-sm font-bold text-white`}
            >
              {p.letter}
            </div>
            <div>
              <div className="text-xs font-semibold text-mk-ivory">{p.name}</div>
              <div className="text-[10px] text-mk-ivory/30">{p.company}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Integrations Panel ── */

interface Integration {
  name: string;
  icon: string;
  authorized: boolean;
}

interface IntegrationCategory {
  category: string;
  apps: Integration[];
}

const integrationCategories: IntegrationCategory[] = [
  {
    category: "Google Workspace",
    apps: [
      { name: "Gmail", icon: "📧", authorized: true },
      { name: "Google Calendar", icon: "📅", authorized: true },
      { name: "Google Drive", icon: "📁", authorized: false },
      { name: "Google Docs", icon: "📝", authorized: false },
      { name: "Google Sheets", icon: "📊", authorized: false },
      { name: "Google Slides", icon: "📽️", authorized: false },
      { name: "Google Analytics", icon: "📈", authorized: false },
      { name: "Google Ads", icon: "📣", authorized: false },
    ],
  },
  {
    category: "Microsoft 365",
    apps: [
      { name: "Outlook Mail", icon: "✉️", authorized: false },
      { name: "Teams", icon: "👥", authorized: false },
      { name: "SharePoint", icon: "🗂️", authorized: false },
    ],
  },
  {
    category: "Communication",
    apps: [
      { name: "Slack", icon: "💬", authorized: false },
      { name: "Postmark", icon: "📮", authorized: false },
      { name: "IMAP", icon: "📥", authorized: false },
    ],
  },
  {
    category: "CRM & Sales",
    apps: [
      { name: "Salesforce", icon: "☁️", authorized: false },
      { name: "HubSpot", icon: "🧲", authorized: false },
      { name: "Pipedrive", icon: "🔀", authorized: false },
      { name: "ActiveCampaign", icon: "📨", authorized: false },
      { name: "Intercom", icon: "💁", authorized: false },
    ],
  },
  {
    category: "Project Management",
    apps: [
      { name: "Atlassian (Jira)", icon: "🎯", authorized: false },
      { name: "Linear", icon: "⚡", authorized: false },
      { name: "ClickUp", icon: "✅", authorized: false },
      { name: "Monday.com", icon: "📋", authorized: false },
      { name: "Asana", icon: "🏃", authorized: false },
      { name: "Trello", icon: "📌", authorized: false },
      { name: "Notion", icon: "📓", authorized: false },
      { name: "Tempo", icon: "⏱️", authorized: false },
    ],
  },
  {
    category: "Databases",
    apps: [
      { name: "PostgreSQL", icon: "🐘", authorized: false },
      { name: "MySQL", icon: "🐬", authorized: false },
      { name: "SQL Server", icon: "🗄️", authorized: false },
      { name: "MongoDB", icon: "🍃", authorized: false },
      { name: "Elasticsearch", icon: "🔍", authorized: false },
      { name: "Redshift", icon: "🔴", authorized: false },
    ],
  },
  {
    category: "Finance & Payments",
    apps: [
      { name: "Stripe", icon: "💳", authorized: false },
      { name: "PayPal", icon: "💰", authorized: false },
      { name: "Square", icon: "🟦", authorized: false },
      { name: "QuickBooks Online", icon: "📒", authorized: false },
      { name: "Bill.com", icon: "🧾", authorized: false },
    ],
  },
  {
    category: "Analytics & Monitoring",
    apps: [
      { name: "PostHog", icon: "🦔", authorized: false },
      { name: "Mixpanel", icon: "📉", authorized: false },
      { name: "Grafana", icon: "📊", authorized: false },
      { name: "Sentry", icon: "🛡️", authorized: false },
      { name: "CoinGecko", icon: "🦎", authorized: false },
    ],
  },
  {
    category: "Marketing & Social",
    apps: [
      { name: "Meta Ads", icon: "📢", authorized: false },
      { name: "Twitter/X", icon: "🐦", authorized: false },
      { name: "Bluesky", icon: "🦋", authorized: false },
    ],
  },
  {
    category: "AI & Web",
    apps: [
      { name: "Firecrawl", icon: "🔥", authorized: false },
      { name: "Tavily", icon: "🌐", authorized: false },
      { name: "Apify", icon: "🤖", authorized: false },
      { name: "Mistral OCR", icon: "👁️", authorized: false },
      { name: "Replicate", icon: "🔄", authorized: false },
    ],
  },
  {
    category: "Storage & Content",
    apps: [
      { name: "Box", icon: "📦", authorized: false },
      { name: "Dropbox", icon: "💧", authorized: false },
      { name: "Canva", icon: "🎨", authorized: false },
      { name: "Webflow", icon: "🌊", authorized: false },
    ],
  },
  {
    category: "Infrastructure",
    apps: [
      { name: "Cloudflare", icon: "☁️", authorized: false },
      { name: "AWS Billing", icon: "💲", authorized: false },
      { name: "n8n", icon: "🔧", authorized: false },
      { name: "Home Assistant", icon: "🏠", authorized: false },
    ],
  },
  {
    category: "Business Ops",
    apps: [
      { name: "Shopify", icon: "🛒", authorized: false },
      { name: "ServiceTitan", icon: "🔩", authorized: false },
      { name: "Findymail", icon: "🔎", authorized: false },
    ],
  },
];

function IntegrationsPanel() {
  const [search, setSearch] = useState("");
  const lowerSearch = search.toLowerCase();

  const filtered = integrationCategories
    .map((cat) => ({
      ...cat,
      apps: cat.apps.filter(
        (app) =>
          app.name.toLowerCase().includes(lowerSearch) ||
          cat.category.toLowerCase().includes(lowerSearch)
      ),
    }))
    .filter((cat) => cat.apps.length > 0);

  return (
    <div>
      <h2 className="text-xl font-bold text-mk-ivory">
        Secure App Integrations
      </h2>
      <p className="mb-5 mt-1 text-sm text-mk-ivory/40">
        Connect your apps securely through Civic — your agent accesses them
        without ever seeing your credentials
      </p>

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search integrations..."
        className="mb-5 w-full rounded-lg border border-mk-green/20 bg-[#0a1509] px-3 py-2 text-sm text-mk-ivory placeholder-mk-ivory/25 outline-none focus:border-mk-yellow/40"
      />

      {/* Categories */}
      <div className="space-y-5">
        {filtered.map((cat) => (
          <div key={cat.category}>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-mk-ivory/30">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.apps.map((app) => (
                <div
                  key={app.name}
                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs ${
                    app.authorized
                      ? "border-mk-light-green/25 bg-mk-light-green/10 text-mk-light-green"
                      : "border-mk-green/15 bg-mk-dark-green/20 text-mk-ivory/40"
                  }`}
                >
                  <span>{app.icon}</span>
                  <span className="font-medium">{app.name}</span>
                  {app.authorized ? (
                    <span className="ml-0.5 text-mk-light-green">✓ Auth</span>
                  ) : (
                    <span className="ml-0.5 opacity-40">+ Add</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 space-y-2 border-t border-mk-green/10 pt-4">
        <div className="text-xs text-mk-ivory/30">
          Powered by Civic &middot;{" "}
          <a
            href="https://app.civic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition hover:text-mk-ivory/50"
          >
            Manage all integrations at app.civic.com &rarr;
          </a>
        </div>
        <div className="text-[11px] text-mk-ivory/20">
          New integrations are added regularly — if you don&apos;t see one today,
          check back soon.
        </div>
      </div>
    </div>
  );
}

/* ── Advanced Panel ── */

function AdvancedPanel() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ssh monke@alex.monkeagent.ai");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-mk-ivory">Advanced</h2>
      <p className="mb-5 mt-1 text-sm text-mk-ivory/40">
        For power users who want to go deeper
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {/* OpenClaw Control UI */}
        <div className="rounded-xl border border-mk-green/15 bg-mk-dark-green/20 p-4 opacity-80">
          <div className="text-sm font-semibold text-mk-ivory/70">
            OpenClaw Control UI
          </div>
          <div className="mt-1 text-xs text-mk-ivory/35">
            Full dashboard with chat, sessions, logs, and raw config
          </div>
          <a
            href="http://alex.monkeagent.ai:18789"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-lg border border-mk-green/20 px-3 py-1.5 text-xs font-medium text-mk-ivory/50 transition hover:bg-mk-green/10 hover:text-mk-ivory/80"
          >
            Open Control UI &rarr;
          </a>
        </div>

        {/* SSH Access */}
        <div className="rounded-xl border border-mk-green/15 bg-mk-dark-green/20 p-4 opacity-80">
          <div className="text-sm font-semibold text-mk-ivory/70">
            SSH Access
          </div>
          <div className="mt-1 text-xs text-mk-ivory/35">
            Direct terminal access to your server
          </div>
          <div className="mt-3 flex items-center gap-2">
            <code className="rounded bg-[#0a1509] px-2 py-1 font-mono text-[11px] text-mk-ivory/45">
              ssh monke@alex.monkeagent.ai
            </code>
            <button
              onClick={handleCopy}
              className="rounded border border-mk-green/20 px-2 py-1 text-[10px] text-mk-ivory/40 transition hover:bg-mk-green/10 hover:text-mk-ivory/60"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="mt-2 text-[10px] text-mk-ivory/25">
            Port 22 &middot; key-based authentication
          </div>
        </div>

        {/* Config File */}
        <div className="rounded-xl border border-mk-green/15 bg-mk-dark-green/20 p-4 opacity-80">
          <div className="text-sm font-semibold text-mk-ivory/70">
            Config File
          </div>
          <div className="mt-1 text-xs text-mk-ivory/35">
            Raw OpenClaw config for advanced settings
          </div>
          <code className="mt-3 block font-mono text-[11px] text-mk-ivory/40">
            ~/.openclaw/openclaw.json
          </code>
          <a
            href="https://docs.openclaw.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs font-medium text-mk-ivory/40 underline transition hover:text-mk-ivory/60"
          >
            View docs &rarr;
          </a>
        </div>
      </div>

      <div className="mt-8">
        <button className="text-xs text-red-400/50 transition hover:text-red-400/80">
          Delete this server...
        </button>
      </div>
    </div>
  );
}

/* ── Main Page ── */

export default function DashboardPage() {
  const [activeView, setActiveView] = useState<View>("overview");

  const panels: Record<View, React.ReactNode> = {
    overview: <OverviewPanel />,
    channels: <ChannelsPanel />,
    "ai-provider": <AIProviderPanel />,
    integrations: <IntegrationsPanel />,
    advanced: <AdvancedPanel />,
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0d1a10]">
      <DashboardNav />
      <MobileTabBar active={activeView} onSelect={setActiveView} />

      <div className="flex flex-1">
        <Sidebar active={activeView} onSelect={setActiveView} />

        <main className="flex-1 overflow-y-auto px-6 py-8 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-mk-ivory">
                Welcome back, Alex 🐵
              </h1>
              <p className="text-sm text-mk-ivory/50">
                Your monkeAgent is running smoothly &middot; Powered by OpenClaw
              </p>
            </div>

            {panels[activeView]}
          </div>
        </main>
      </div>
    </div>
  );
}
