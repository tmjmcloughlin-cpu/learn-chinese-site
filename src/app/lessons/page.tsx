"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { lessons } from "@/data/lessons";

const levelFilters = ["All", "HSK1", "HSK2", "HSK3"];

export default function LessonsFeed() {
  const tags = useMemo(() => {
    const set = new Set<string>();
    lessons.forEach((lesson) => lesson.topicTags.forEach((tag) => set.add(tag)));
    return ["All", ...Array.from(set)];
  }, []);

  const [level, setLevel] = useState("All");
  const [tag, setTag] = useState("All");

  const filtered = lessons.filter((lesson) => {
    const matchLevel = level === "All" || `HSK${lesson.hskLevel}` === level;
    const matchTag = tag === "All" || lesson.topicTags.includes(tag);
    return matchLevel && matchTag;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#120c3b] via-[#151c4f] to-[#1c1f33] px-4 py-12 text-slate-50">
      <main className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="rounded-4xl bg-gradient-to-br from-[#1b0c3a] via-[#2c1f62] to-[#45218a] p-8 text-white shadow-2xl">
          <h1 className="text-3xl font-semibold">Lesson feed</h1>
          <p className="mt-3 text-base text-white/90">
            Filter by HSK level or topic to jump straight into the lesson that matches your focus. Hover any entry to reveal the
            pinyin instantly once you open it.
          </p>
        </header>

        <section className="rounded-3xl bg-white/10 p-6 shadow-lg">
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Level</p>
              <div className="mt-2 flex flex-wrap gap-3">
                {levelFilters.map((value) => (
                  <button
                    key={value}
                    onClick={() => setLevel(value)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                      level === value ? "bg-white text-rose-500" : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Topic</p>
              <div className="mt-2 flex flex-wrap gap-3">
                {tags.map((value) => (
                  <button
                    key={value}
                    onClick={() => setTag(value)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                      tag === value ? "bg-white text-rose-500" : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {filtered.map((lesson) => (
            <article key={lesson.slug} className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b0c3a] to-[#2f195c] p-6 shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">HSK {lesson.hskLevel}</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">{lesson.title}</h2>
              <p className="mt-2 text-sm text-white/80">{lesson.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
                {lesson.topicTags.map((topic) => (
                  <span key={topic} className="rounded-full bg-white/10 px-2 py-1">
                    {topic}
                  </span>
                ))}
              </div>
              <Link
                href={`/lessons/${lesson.slug}`}
                className="mt-4 inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-rose-500"
              >
                Open lesson →
              </Link>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-white/70">No lessons match this combination yet. Try clearing a filter.</p>
          )}
        </section>
      </main>
    </div>
  );
}
