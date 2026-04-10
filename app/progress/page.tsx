"use client";

import React, { useEffect, useMemo, useState } from "react";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Footer from '../../components/HomePageFooter';
import NavBar from '../../components/NavBar'
import "../../styles/homepage.css"
import "../../styles/NavBar.module.css"

import {
  Check,
  CirclePlus,
  ExternalLink,
  Link2,
  PencilLine,
  Plus,
  Search,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";

type Status = "Next" | "In Progress" | "Someday" | "Completed";
type LinkItem = { label: string; url: string };
type ProgressItem = {
  id: string;
  title: string;
  category: string;
  status: Status;
  note: string;
  links: LinkItem[];
  createdAt: number;
  completedAt?: number;
};

const STATUS_ORDER: Status[] = ["Next", "In Progress", "Someday", "Completed"];

const DOT: Record<Status, string> = {
  Next: "#722F37",
  "In Progress": "#3A5443",
  Someday: "#BB9E63",
  Completed: "#191970",
};
const PILL_STYLE: Record<Status, React.CSSProperties> = {
  Next: { background: "#722F37", color: "#fff" },
  "In Progress": { background: "#3A5443", color: "#fff" },
  Someday: { background: "#BB9E63", color: "#fff" },
  Completed: { background: "#191970", color: "#fff" },
};
const BADGE_STYLE: Record<Status, React.CSSProperties> = {
  Next: { background: "rgba(114,47,55,0.1)", color: "#722F37" },
  "In Progress": { background: "rgba(58,84,67,0.1)", color: "#3A5443" },
  Someday: { background: "rgba(187,158,99,0.15)", color: "#8B6E2E" },
  Completed: { background: "rgba(25,25,112,0.1)", color: "#191970" },
};
const LANE_SUBS: Record<Status, string> = {
  Next: "Up next to start",
  "In Progress": "Currently active",
  Someday: "Future ideas",
  Completed: "Done and archived",
};

function isValidHttpUrl(v: string) {
  try { const u = new URL(v); return u.protocol === "http:" || u.protocol === "https:"; }
  catch { return false; }
}
function fmtDate(ms?: number) {
  if (!ms) return "";
  return new Date(ms).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function isYouTube(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

// ── YouTube Preview ───────────────────────────────────────────────────────────
function YouTubePreview({ url }: { url: string }) {
  const [title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`)
      .then(r => r.json())
      .then(d => setTitle(d.title))
      .catch(() => null);
  }, [url]);

  if (!title) return null;

  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 5,
      background: "rgba(255,0,0,0.06)", borderRadius: 8,
      padding: "4px 8px", marginTop: 6,
    }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF0000">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.6 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8z"/>
        <path d="M9.7 15.5V8.5l6.3 3.5-6.3 3.5z" fill="white"/>
      </svg>
      <span style={{ fontSize: 11, color: "#cc0000", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 200 }}>
        {title}
      </span>
    </div>
  );
}

// ── Pill ──────────────────────────────────────────────────────────────────────
function Pill({ status, small }: { status: Status; small?: boolean }) {
  return (
    <span style={{
      ...PILL_STYLE[status],
      borderRadius: 999,
      padding: small ? "2px 8px" : "3px 10px",
      fontSize: small ? 10 : 11,
      fontWeight: 500,
      display: "inline-block",
    }}>
      {status}
    </span>
  );
}

// ── Drawer ────────────────────────────────────────────────────────────────────
function Drawer({
  item, isAdmin, onClose, onSave, onDelete, onQuickStatus,
}: {
  item: ProgressItem; isAdmin: boolean;
  onClose: () => void;
  onSave: (u: Partial<ProgressItem>) => Promise<void>;
  onDelete: () => Promise<void>;
  onQuickStatus: (s: Status) => Promise<void>;
}) {
  const [draft, setDraft] = useState({
    title: item.title, category: item.category,
    note: item.note, status: item.status, links: item.links,
  });
  const [linkDraft, setLinkDraft] = useState({ label: "", url: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setDraft({ title: item.title, category: item.category, note: item.note, status: item.status, links: item.links });
  }, [item]);

  function addLink() {
    if (!linkDraft.label.trim() || !isValidHttpUrl(linkDraft.url.trim())) return;
    setDraft(p => ({ ...p, links: [...p.links, { label: linkDraft.label.trim(), url: linkDraft.url.trim() }] }));
    setLinkDraft({ label: "", url: "" });
  }
  function removeLink(i: number) {
    setDraft(p => ({ ...p, links: p.links.filter((_, idx) => idx !== i) }));
  }
  async function handleSave() {
    setSaving(true);
    await onSave({
      title: draft.title.trim() || item.title,
      category: draft.category.trim() || item.category,
      note: draft.note, status: draft.status, links: draft.links,
      completedAt: draft.status === "Completed" ? (item.completedAt ?? Date.now()) : undefined,
    });
    setSaving(false);
    onClose();
  }
  async function handleDelete() { setSaving(true); await onDelete(); setSaving(false); }

  const inputStyle: React.CSSProperties = {
    height: 40, borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)",
    background: "#f8f7f2", padding: "0 12px", fontSize: 13,
    outline: "none", width: "100%", fontFamily: "inherit", boxSizing: "border-box",
  };
  const labelStyle: React.CSSProperties = { fontSize: 12, fontWeight: 500, color: "#64748b", marginBottom: 4, display: "block" };

  return (
    <div
      onClick={e => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        background: "rgba(15,23,42,0.4)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
      }}
    >
      <div style={{
        width: "100%", maxWidth: 760, maxHeight: "90vh",
        background: "#fff", borderRadius: "24px 24px 0 0",
        border: "1px solid rgba(0,0,0,0.06)", display: "flex", flexDirection: "column",
        overflow: "hidden",
      }}>
        {/* handle */}
        <div style={{ width: 36, height: 4, background: "#e2e8f0", borderRadius: 999, margin: "10px auto 0" }} />

        {/* header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "12px 20px", borderBottom: "1px solid rgba(0,0,0,0.06)", flexShrink: 0 }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8" }}>{item.category}</div>
            <div style={{ fontSize: 17, fontWeight: 600, color: "#191970", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.title}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <Pill status={draft.status} />
            <button onClick={onClose} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.08)", background: "transparent", cursor: "pointer", color: "#94a3b8" }}>
              <X size={13} />
            </button>
          </div>
        </div>

        {/* body */}
        <div style={{ padding: 20, overflowY: "auto", flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          {/* title + category */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={labelStyle}>Title</label>
              <input style={inputStyle} value={draft.title} disabled={!isAdmin}
                onChange={e => setDraft(p => ({ ...p, title: e.target.value }))} />
            </div>
            <div>
              <label style={labelStyle}>Category</label>
              <input style={inputStyle} value={draft.category} disabled={!isAdmin}
                onChange={e => setDraft(p => ({ ...p, category: e.target.value }))} />
            </div>
          </div>

          {/* status */}
          <div>
            <label style={labelStyle}>Status</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
              {STATUS_ORDER.map(s => {
                const active = draft.status === s;
                return (
                  <button key={s} disabled={!isAdmin} onClick={() => isAdmin && setDraft(p => ({ ...p, status: s }))}
                    style={{
                      borderRadius: 10, padding: "8px 6px", fontSize: 12, fontWeight: 500,
                      border: active ? `1.5px solid ${DOT[s]}` : "1px solid rgba(0,0,0,0.08)",
                      background: active ? `${DOT[s]}18` : "#f8f7f2",
                      color: active ? DOT[s] : "#64748b",
                      cursor: isAdmin ? "pointer" : "default", fontFamily: "inherit",
                      transition: "all 0.12s",
                    }}>
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* notes */}
          <div>
            <label style={labelStyle}>Notes</label>
            <textarea
              value={draft.note} disabled={!isAdmin}
              onChange={e => setDraft(p => ({ ...p, note: e.target.value }))}
              placeholder="What changed, what you learned, what's next..."
              rows={5}
              style={{
                width: "100%", borderRadius: 14, border: "1px solid rgba(0,0,0,0.08)",
                background: "#f8f7f2", padding: 12, fontSize: 13, outline: "none",
                fontFamily: "inherit", resize: "vertical", boxSizing: "border-box",
              }}
            />
          </div>

          {/* links */}
          <div>
            <label style={labelStyle}>Links</label>
            <div style={{ background: "#fcfaf5", borderRadius: 16, border: "1px solid rgba(0,0,0,0.06)", padding: 12 }}>
              {isAdmin && (
                <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                  <input value={linkDraft.label} placeholder="Label"
                    onChange={e => setLinkDraft(p => ({ ...p, label: e.target.value }))}
                    style={{ ...inputStyle, height: 36, flex: 1, fontSize: 12 }} />
                  <input value={linkDraft.url} placeholder="https://..."
                    onChange={e => setLinkDraft(p => ({ ...p, url: e.target.value }))}
                    style={{ ...inputStyle, height: 36, flex: 1, fontSize: 12 }} />
                  <button onClick={addLink}
                    style={{ height: 36, borderRadius: 10, border: "none", background: "#3A5443", color: "#fff", padding: "0 14px", fontSize: 12, cursor: "pointer", fontFamily: "inherit", flexShrink: 0 }}>
                    Add
                  </button>
                </div>
              )}
              {draft.links.length === 0 ? (
                <div style={{ borderRadius: 12, border: "1px dashed rgba(0,0,0,0.1)", background: "#fff", padding: "14px 12px", textAlign: "center", fontSize: 12, color: "#94a3b8" }}>
                  Add AllTrails, YouTube, image pages, or any URL.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {draft.links.map((link, i) => (
                    <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "8px 10px", boxShadow: "0 0 0 1px rgba(0,0,0,0.06)" }}>
                      {/* link row */}
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        {isYouTube(link.url) ? (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="#FF0000" style={{ flexShrink: 0 }}>
                            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.6 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8z"/>
                            <path d="M9.7 15.5V8.5l6.3 3.5-6.3 3.5z" fill="white"/>
                          </svg>
                        ) : (
                          <Link2 size={12} style={{ color: "#94a3b8", flexShrink: 0 }} />
                        )}
                        <a href={link.url} target="_blank" rel="noopener noreferrer"
                          style={{ flex: 1, fontSize: 12, fontWeight: 500, color: "#334155", textDecoration: "underline", textDecorationColor: "#cbd5e1", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {link.label}
                        </a>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8", display: "flex" }}>
                          <ExternalLink size={13} />
                        </a>
                        {isAdmin && (
                          <button onClick={() => removeLink(i)} style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8", display: "flex", padding: 0 }}>
                            <Trash2 size={13} />
                          </button>
                        )}
                      </div>
                      {/* YouTube preview below the row */}
                      {isYouTube(link.url) && <YouTubePreview url={link.url} />}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, padding: "12px 20px", borderTop: "1px solid rgba(0,0,0,0.06)", flexShrink: 0, flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 8 }}>
            {isAdmin && (
              <>
                <button onClick={handleSave} disabled={saving}
                  style={{ display: "flex", alignItems: "center", gap: 6, borderRadius: 999, background: "#3A5443", color: "#fff", border: "none", padding: "8px 16px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", opacity: saving ? 0.6 : 1 }}>
                  <PencilLine size={13} /> Save
                </button>
                <button onClick={handleDelete} disabled={saving}
                  style={{ borderRadius: 999, background: "rgba(220,38,38,0.06)", color: "#b91c1c", border: "1px solid rgba(220,38,38,0.15)", padding: "8px 14px", fontSize: 13, cursor: "pointer", fontFamily: "inherit", opacity: saving ? 0.6 : 1 }}>
                  Delete
                </button>
              </>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 11, color: "#94a3b8" }}>
              Created {fmtDate(item.createdAt)}{item.completedAt ? ` · Done ${fmtDate(item.completedAt)}` : ""}
            </span>
            {isAdmin && item.status !== "Completed" && (
              <button onClick={() => onQuickStatus("Completed")} disabled={saving}
                style={{ display: "flex", alignItems: "center", gap: 6, borderRadius: 999, background: "#722F37", color: "#fff", border: "none", padding: "8px 14px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", opacity: saving ? 0.6 : 1 }}>
                <Check size={13} /> Mark done
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── New Item Modal ─────────────────────────────────────────────────────────────
function NewItemModal({ onClose, onCreate, defaultStatus }: {
  onClose: () => void;
  onCreate: (d: { title: string; category: string; status: Status }) => Promise<void>;
  defaultStatus?: Status;
}) {
  const [form, setForm] = useState({ title: "", category: "", status: (defaultStatus ?? "Next") as Status });
  const [saving, setSaving] = useState(false);

  async function handleCreate() {
    if (!form.title.trim()) return;
    setSaving(true);
    await onCreate({ title: form.title.trim(), category: form.category.trim() || "General", status: form.status });
    setSaving(false);
    onClose();
  }

  const inputStyle: React.CSSProperties = {
    height: 40, borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)",
    background: "#f8f7f2", padding: "0 12px", fontSize: 13,
    outline: "none", width: "100%", fontFamily: "inherit", boxSizing: "border-box",
  };

  return (
    <div onClick={e => e.target === e.currentTarget && onClose()}
      style={{ position: "fixed", inset: 0, zIndex: 50, background: "rgba(15,23,42,0.4)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ width: "100%", maxWidth: 440, background: "#fff", borderRadius: 20, border: "1px solid rgba(0,0,0,0.06)", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#191970" }}>New item</span>
          <button onClick={onClose} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.08)", background: "transparent", cursor: "pointer", color: "#94a3b8" }}>
            <X size={13} />
          </button>
        </div>
        <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 500, color: "#64748b", marginBottom: 4, display: "block" }}>Title</label>
            <input autoFocus value={form.title} placeholder="Something worth doing"
              onChange={e => setForm(p => ({ ...p, title: e.target.value }))}
              onKeyDown={e => e.key === "Enter" && handleCreate()}
              style={inputStyle} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 500, color: "#64748b", marginBottom: 4, display: "block" }}>Category</label>
              <input value={form.category} placeholder="Books, Hikes, Code..."
                onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
                style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 500, color: "#64748b", marginBottom: 4, display: "block" }}>Status</label>
              <select value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value as Status }))}
                style={{ ...inputStyle, cursor: "pointer" }}>
                {STATUS_ORDER.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, padding: "12px 18px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <button onClick={onClose} style={{ borderRadius: 999, border: "1px solid rgba(0,0,0,0.08)", background: "#fff", padding: "8px 14px", fontSize: 13, color: "#64748b", cursor: "pointer", fontFamily: "inherit" }}>Cancel</button>
          <button onClick={handleCreate} disabled={saving || !form.title.trim()}
            style={{ borderRadius: 999, background: "#722F37", color: "#fff", border: "none", padding: "8px 18px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", opacity: (saving || !form.title.trim()) ? 0.5 : 1 }}>
            Create item
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Kanban Card ───────────────────────────────────────────────────────────────
function KanbanCard({ item, isAdmin, onClick, onQuickComplete }: {
  item: ProgressItem; isAdmin: boolean;
  onClick: () => void; onQuickComplete: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const isDone = item.status === "Completed";
  const ytLinks = item.links.filter(l => isYouTube(l.url));

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 16,
        padding: "13px 14px", cursor: "pointer",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 6px 20px rgba(0,0,0,0.07)" : "none",
        transition: "all 0.12s", position: "relative",
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 3 }}>
        {item.category}
      </div>
      <div style={{ fontSize: 13.5, fontWeight: 600, color: "#191970", lineHeight: 1.35, marginBottom: item.note ? 6 : 0 }}>
        {item.title}
      </div>
      {item.note && (
        <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {item.note}
        </div>
      )}

      {/* YouTube previews on card */}
      {ytLinks.map((l, i) => <YouTubePreview key={i} url={l.url} />)}

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#94a3b8" }}>
          {item.links.length > 0 && (
            <>
              {ytLinks.length > 0 ? (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#FF0000">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.6 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8z"/>
                  <path d="M9.7 15.5V8.5l6.3 3.5-6.3 3.5z" fill="white"/>
                </svg>
              ) : (
                <Link2 size={11} />
              )}
              {item.links.length}
            </>
          )}
        </div>
        {isAdmin && (
          <button
            onClick={e => { e.stopPropagation(); onQuickComplete(); }}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: 24, height: 24, borderRadius: 7,
              border: isDone ? `1px solid ${DOT["Completed"]}` : "1px solid rgba(0,0,0,0.1)",
              background: isDone ? DOT["Completed"] : (hovered ? "#f1f5f9" : "#f8fafc"),
              cursor: "pointer", color: isDone ? "#fff" : "#94a3b8",
              transition: "all 0.1s",
            }}
            title={isDone ? "Move back" : "Mark done"}
          >
            <Check size={11} />
          </button>
        )}
      </div>
    </article>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function ProgressPage() {
  const { isLoaded, isSignedIn } = useUser();
  const isAdmin = !!isSignedIn;

  const [items, setItems] = useState<ProgressItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Status | "All">("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [newDefaultStatus, setNewDefaultStatus] = useState<Status>("Next");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true); setError(null);
      try {
        const res = await fetch("/api/progress", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load items");
        const raw = await res.json();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: ProgressItem[] = Array.isArray(raw)
          ? raw.map((item: any) => ({ ...item, id: item.id ?? String(item._id) }))
          : [];
        if (!cancelled) setItems(data);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  const counts = useMemo(() =>
    STATUS_ORDER.reduce((acc, s) => ({ ...acc, [s]: items.filter(i => i.status === s).length }), {} as Record<Status, number>),
    [items]);

  const completionRate = Math.round((counts.Completed / Math.max(items.length, 1)) * 100);

  const filtered = useMemo(() =>
    items
      .filter(i => filter === "All" || i.status === filter)
      .filter(i => {
        const hay = [i.title, i.category, i.note, ...i.links.map(l => `${l.label} ${l.url}`)].join(" ").toLowerCase();
        return hay.includes(query.toLowerCase());
      }),
    [items, filter, query]);

  async function refreshItems() {
    const res = await fetch("/api/progress", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to refresh");
    const raw = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: ProgressItem[] = Array.isArray(raw)
      ? raw.map((item: any) => ({ ...item, id: item.id ?? String(item._id) }))
      : [];
    setItems(data);
  }

  async function createItem(data: { title: string; category: string; status: Status }) {
    setError(null);
    try {
      const res = await fetch("/api/progress", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, note: "", links: [] }),
      });
      if (!res.ok) throw new Error("Could not create item");
      await refreshItems();
    } catch (err) { setError(err instanceof Error ? err.message : "Something went wrong"); }
  }

  async function saveItem(id: string, updates: Partial<ProgressItem>) {
    setError(null);
    try {
      const res = await fetch(`/api/progress/${id}`, {
        method: "PATCH", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error("Could not save item");
      await refreshItems();
    } catch (err) { setError(err instanceof Error ? err.message : "Something went wrong"); }
  }

  async function deleteItem(id: string) {
    setError(null);
    try {
      const res = await fetch(`/api/progress/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Could not delete item");
      await refreshItems();
      setSelectedId(null);
    } catch (err) { setError(err instanceof Error ? err.message : "Something went wrong"); }
  }

  async function quickStatus(item: ProgressItem, status: Status) {
    await saveItem(item.id, { status, completedAt: status === "Completed" ? (item.completedAt ?? Date.now()) : undefined });
  }

  const selectedItem = items.find(i => i.id === selectedId) ?? null;

  if (!isLoaded) {
    return (
      <div style={{ minHeight: "100vh", background: "#F7EECE", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontSize: 14, color: "#64748b" }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg,#fcfaf5 0%,#F7EECE 100%)", color: "#0f172a", display: "flex", flexDirection: "column" }}>
      <NavBar />
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "24px 20px", flex: 1, width: "100%" }}>

        {/* ── Top bar ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(58,84,67,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Sparkles size={15} style={{ color: "#3A5443" }} />
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#191970", lineHeight: 1.2 }}>in progress / queue / bucket list</div>
              <div style={{ fontSize: 12, color: "#94a3b8" }}>a living list of what is next.</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {!isSignedIn ? (
              <SignInButton>
                <button style={{ display: "flex", alignItems: "center", gap: 6, borderRadius: 999, background: "#722F37", color: "#fff", border: "none", padding: "8px 16px", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
                  <PencilLine size={13} /> Sign in
                </button>
              </SignInButton>
            ) : <UserButton />}
            {isAdmin && (
              <button
                onClick={() => { setNewDefaultStatus("Next"); setShowNew(true); }}
                style={{ display: "flex", alignItems: "center", gap: 6, borderRadius: 999, background: "#3A5443", color: "#fff", border: "none", padding: "8px 16px", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
                <Plus size={14} /> Add item
              </button>
            )}
          </div>
        </div>

        {error && (
          <div style={{ marginBottom: 16, borderRadius: 16, border: "1px solid #fecaca", background: "#fef2f2", padding: "10px 16px", fontSize: 13, color: "#b91c1c" }}>
            {error}
          </div>
        )}

        {/* ── Stat cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 16 }}>
          {STATUS_ORDER.map(s => {
            const active = filter === s;
            return (
              <button key={s} onClick={() => setFilter(active ? "All" : s)}
                style={{
                  position: "relative", overflow: "hidden", borderRadius: 18,
                  border: active ? `1.5px solid ${DOT[s]}` : "1px solid rgba(0,0,0,0.07)",
                  background: "#fff", padding: 16, textAlign: "left", cursor: "pointer",
                  transition: "all 0.15s", fontFamily: "inherit",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-1px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: DOT[s], borderRadius: "18px 0 0 18px" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: DOT[s] }} />
                  <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8" }}>{s}</span>
                </div>
                <div style={{ fontSize: 32, fontWeight: 700, color: "#191970", lineHeight: 1 }}>{counts[s]}</div>
                <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>{LANE_SUBS[s]}</div>
              </button>
            );
          })}
        </div>

        {/* ── Search + progress ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
          <label style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1px solid rgba(0,0,0,0.07)", background: "#fff", padding: "9px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)", minWidth: 200 }}>
            <Search size={14} style={{ color: "#94a3b8", flexShrink: 0 }} />
            <input value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Search projects, books, hikes..."
              style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 13, fontFamily: "inherit", color: "#0f172a" }} />
            {query && (
              <button onClick={() => setQuery("")} style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8", display: "flex", padding: 0 }}>
                <X size={13} />
              </button>
            )}
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <span style={{ fontSize: 12, color: "#94a3b8", whiteSpace: "nowrap" }}>Completion</span>
            <div style={{ width: 100, height: 5, background: "#e2e8f0", borderRadius: 999, overflow: "hidden" }}>
              <div style={{ width: `${completionRate}%`, height: "100%", background: "#3A5443", borderRadius: 999, transition: "width 0.4s ease" }} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#722F37", whiteSpace: "nowrap" }}>{completionRate}%</span>
          </div>
        </div>

        {/* ── Kanban board ── */}
        {loading ? (
          <div style={{ borderRadius: 24, border: "1px dashed rgba(0,0,0,0.1)", background: "rgba(255,255,255,0.6)", padding: 48, textAlign: "center", fontSize: 13, color: "#94a3b8" }}>
            Loading items...
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {STATUS_ORDER.map(status => {
              const lane = filtered.filter(i => i.status === status);
              return (
                <div key={status} style={{ display: "flex", flexDirection: "column", borderRadius: 20, border: "1px solid rgba(0,0,0,0.07)", borderTop: `2.5px solid ${DOT[status]}`, background: "rgba(248,247,242,0.7)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px 8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: DOT[status] }} />
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#191970" }}>{status}</span>
                    </div>
                    <span style={{ ...BADGE_STYLE[status], borderRadius: 999, padding: "2px 9px", fontSize: 11, fontWeight: 500 }}>
                      {lane.length}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "0 10px 8px", overflowY: "auto", maxHeight: 480 }}>
                    {lane.length === 0 ? (
                      <div style={{ borderRadius: 14, border: "1px dashed rgba(0,0,0,0.1)", background: "rgba(255,255,255,0.6)", padding: 20, textAlign: "center", fontSize: 12, color: "#94a3b8" }}>
                        Nothing here yet
                      </div>
                    ) : lane.map(item => (
                      <KanbanCard key={item.id} item={item} isAdmin={isAdmin}
                        onClick={() => setSelectedId(item.id)}
                        onQuickComplete={() => quickStatus(item, item.status === "Completed" ? "In Progress" : "Completed")}
                      />
                    ))}
                  </div>
                  {isAdmin && (
                    <button
                      onClick={() => { setNewDefaultStatus(status); setShowNew(true); }}
                      style={{
                        margin: "0 10px 10px", borderRadius: 14, border: "1px dashed rgba(0,0,0,0.1)",
                        background: "rgba(255,255,255,0.4)", padding: "10px", cursor: "pointer",
                        fontSize: 12, color: "#94a3b8", fontFamily: "inherit",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                        transition: "all 0.1s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#64748b"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "#94a3b8"; }}
                    >
                      <CirclePlus size={13} /> Add to {status.toLowerCase()}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {selectedItem && (
        <Drawer
          item={selectedItem} isAdmin={isAdmin}
          onClose={() => setSelectedId(null)}
          onSave={updates => saveItem(selectedItem.id, updates)}
          onDelete={() => deleteItem(selectedItem.id)}
          onQuickStatus={status => quickStatus(selectedItem, status)}
        />
      )}

      {showNew && isSignedIn && (
        <NewItemModal
          defaultStatus={newDefaultStatus}
          onClose={() => setShowNew(false)}
          onCreate={createItem}
        />
      )}
      <Footer />
    </div>
  );
}