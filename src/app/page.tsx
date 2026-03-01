import Link from "next/link";
import { chineseJohnSpringFestival } from "@/data/lessons/chinese-john-spring-festival";

const hskTracks = [
  {
    level: 1,
    title: "HSK 1 · Survival flow",
    focus: "Daily greetings, numbers, food, and transport micro-dialogues.",
    cadence: "Short 120-character lessons with picture cues.",
  },
  {
    level: 2,
    title: "HSK 2 · Stories in motion",
    focus: "Work, travel, and culture vignettes with 会/要/想 patterns.",
    cadence: "Paragraph-length narratives + ERAP prompts.",
  },
  {
    level: 3,
    title: "HSK 3 · Applied life",
    focus: "Office, health, and social planning scenarios with light grammar notes.",
    cadence: "Multi-section articles + audio drops.",
  },
];

export default function Home() {
  const latestLesson = chineseJohnSpringFestival;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50/40 to-white px-4 py-12">
      <main className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="rounded-4xl relative overflow-hidden bg-slate-900 p-10 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.25),_transparent_50%)]" aria-hidden />
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-rose-300">Daily Chinese drop</p>
            <h1 className="text-4xl font-semibold leading-tight">
              Learn Chinese through color-coded stories and ERAP drills.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              Fresh HSK-aligned lessons every morning. Hover or tap to reveal pinyin, grammar cues, and
              non-HSK highlights so you know exactly where to focus.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/lessons/${latestLesson.slug}`}
                className="rounded-full bg-rose-400/90 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-rose-300"
              >
                Start today’s lesson
              </Link>
              <Link
                href="#blog"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white"
              >
                Browse ERAP feed
              </Link>
            </div>
            <p className="text-xs text-slate-400">
              New lesson posts at 06:00 London · Archive auto-builds on GitHub · Vercel deploy in seconds
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <article className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-500">
              <span>Today’s lesson · HSK {latestLesson.hskLevel}</span>
              <span>{new Date(latestLesson.date).toLocaleDateString("en-GB", { dateStyle: "medium" })}</span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">{latestLesson.title}</h2>
            <p className="mt-3 text-base text-slate-600">{latestLesson.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {latestLesson.topicTags.map((tag) => (
                <span key={tag} className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                  {tag}
                </span>
              ))}
            </div>
            <ul className="mt-6 grid gap-3 text-sm text-slate-600">
              {latestLesson.focusPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/lessons/${latestLesson.slug}`}
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
              >
                Read lesson
              </Link>
              <button
                type="button"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600"
              >
                Download vocab CSV (coming soon)
              </button>
            </div>
          </article>
          <aside className="rounded-3xl border border-dashed border-rose-200 bg-rose-50/70 p-6 text-sm text-rose-900">
            <p className="text-xs uppercase tracking-[0.35em] text-rose-400">Release cadence</p>
            <ul className="mt-4 space-y-3">
              <li>
                <span className="font-semibold">06:00</span> · Push HSK lesson + glossary diff
              </li>
              <li>
                <span className="font-semibold">12:00</span> · ERAP blog synthesis by level
              </li>
              <li>
                <span className="font-semibold">18:00</span> · Flashcard drill + audio drop
              </li>
            </ul>
            <p className="mt-4 text-xs text-rose-600">
              90% of each lesson stays within target HSK vocabulary. Dashed outlines mark stretch words.
            </p>
          </aside>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Tracks</p>
              <h2 className="text-2xl font-semibold text-slate-900">HSK-focused study lanes</h2>
              <p className="text-sm text-slate-600">
                Pick your lane and get one new story every morning. We color-code parts of speech and flag
                out-of-level words so you can skim or deep-dive.
              </p>
            </div>
            <Link href="#signup" className="self-start rounded-full border border-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em]">
              Get notified
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {hskTracks.map((track) => (
              <article key={track.level} className="rounded-2xl border border-slate-100 bg-slate-900 text-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.4em] text-rose-300">Level {track.level}</p>
                <h3 className="mt-3 text-xl font-semibold">{track.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{track.focus}</p>
                <p className="mt-3 text-xs text-amber-200">{track.cadence}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="blog" className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">ERAP feed</p>
            <h2 className="text-2xl font-semibold text-slate-900">Explain · Relate · Apply · Produce</h2>
            <p className="text-sm text-slate-600">
              Each afternoon we spin the morning lesson into multi-level prompts. Filter by HSK level to stay in
              range, or read them all to stretch.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["Explain", "Apply", "Produce"].map((phase) => (
              <article key={phase} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-rose-400">HSK 2 focus</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{phase} prompt</h3>
                <p className="text-sm text-slate-600">
                  Placeholder entry. Once the CMS is wired, this surfaces the latest ERAP blog grouped by level
                  and topic (work / life / travel).
                </p>
                <button className="mt-3 text-sm font-semibold text-rose-500">Read sample →</button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
