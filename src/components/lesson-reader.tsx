"use client";

import { useState } from "react";
import type { Lesson, Token } from "@/data/lessons/types";

const posColors: Record<string, string> = {
  noun: "text-sky-700",
  verb: "text-rose-600",
  adjective: "text-emerald-600",
  adverb: "text-amber-600",
  particle: "text-slate-600",
  expression: "text-purple-600",
  number: "text-cyan-600",
  grammar: "text-slate-700",
  "noun-phrase": "text-indigo-600",
};

const posLabels: Record<string, string> = {
  noun: "Noun",
  verb: "Verb",
  adjective: "Adjective",
  adverb: "Adverb",
  particle: "Particle",
  expression: "Expression",
  number: "Number",
  grammar: "Grammar",
  "noun-phrase": "Phrase",
};

export function LessonReader({ lesson }: { lesson: Lesson }) {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleEnter = (key: string) => setActiveKey(key);
  const handleLeave = () => setActiveKey(null);

  const renderToken = (token: Token, key: string) => {
    if (!token.english) {
      return (
        <span key={key} className="text-slate-700">
          {token.hanzi}
        </span>
      );
    }

    const colorClass = posColors[token.pos] ?? "text-slate-900";
    const isActive = activeKey === key;

    return (
      <button
        key={key}
        type="button"
        className={`group relative mx-0.5 inline-flex cursor-help items-center rounded-md px-0.5 text-left font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400 ${colorClass} ${
          token.isHsk ? "" : "ring-1 ring-dashed ring-amber-400/80"
        }`}
        aria-pressed={isActive}
        onMouseEnter={() => handleEnter(key)}
        onFocus={() => handleEnter(key)}
        onMouseLeave={handleLeave}
        onBlur={handleLeave}
        onClick={() => setActiveKey((prev) => (prev === key ? null : key))}
      >
        {token.hanzi}
        <span
          className={`pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 hidden w-max max-w-xs -translate-x-1/2 flex-col rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 text-sm shadow-xl shadow-rose-100/60 group-hover:flex group-focus-visible:flex ${
            isActive ? "flex" : ""
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2b0e68]">
            {token.pinyin}
          </span>
          <span className="text-lg font-semibold text-slate-900">{token.english}</span>
          <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
            <span>{posLabels[token.pos] ?? "Word"}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden />
            <span>{token.isHsk ? `HSK ${lesson.hskLevel}` : "Non-HSK highlight"}</span>
          </div>
        </span>
      </button>
    );
  };

  return (
    <div className="space-y-6 text-2xl leading-[2.6rem]">
      {lesson.paragraphs.map((paragraph, pIndex) => (
        <p key={`p-${pIndex}`} className="text-balance text-slate-900">
          {paragraph.map((token, tIndex) => renderToken(token, `${pIndex}-${tIndex}`))}
        </p>
      ))}
    </div>
  );
}
