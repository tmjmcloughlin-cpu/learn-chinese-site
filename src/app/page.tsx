import Image from "next/image";
import Link from "next/link";
import { lessons, latestLesson } from "@/data/lessons";

const levelTracks = [
  {
    level: "HSK 1",
    title: "Starter lane",
    description: "Greetings, numbers, taxi chats, and breakfast orders.",
  },
  {
    level: "HSK 2",
    title: "Daily flow",
    description: "Travel + work vignettes with 会 / 要 / 想 patterns.",
  },
  {
    level: "HSK 3",
    title: "Applied life",
    description: "Office, health, and planning scenarios with light grammar notes.",
  },
];

const subjects = [
  { name: "Work", description: "Meetings · standups · coworker chats" },
  { name: "Life", description: "Habits · food · health routines" },
  { name: "Travel", description: "Trains · hotels · temple fairs" },
  { name: "Culture", description: "Festivals · etiquette · markets" },
];

const heroHighlights = [
  "New lesson 06:00 London",
  "Hover reveals pinyin + POS",
  "Dashed outline = stretch vocab",
];

export default function Home() {
  const featuredLessons = lessons.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fef9f6] px-4 py-10 text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="rounded-3xl border border-[#ffd7cf] bg-[#fff4ef] p-8">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-rose-400">Daily Chinese drop</p>
            <h1 className="text-3xl font-semibold text-slate-900">
              Simple HSK reading practice. Pick a level, hover each character, note the stretch vocab, done.
            </h1>
            <p className="max-w-3xl text-base text-slate-600">
              We post one new lesson per level every morning. Content stays 90% inside the target HSK vocab and highlights the
              remaining 10% so you can screenshot or jot them down. Nothing flashy—just clean typography, clear callouts, and fast
              study reps.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-700">
              {heroHighlights.map((item) => (
                <span key={item} className="rounded-full border border-[#ffd7cf] px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/lessons/${latestLesson.slug}`}
                className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
              >
                Start today’s lesson
              </Link>
              <Link
                href="#levels"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700"
              >
                Choose my level
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Today’s spotlight</p>
              <h2 className="text-2xl font-semibold">{latestLesson.title}</h2>
              <p className="text-base text-slate-600">{latestLesson.summary}</p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                {latestLesson.topicTags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {latestLesson.focusPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                <span>HSK {latestLesson.hskLevel}</span>
                <span>{new Date(latestLesson.date).toLocaleDateString("en-GB", { dateStyle: "medium" })}</span>
              </div>
            </article>
            <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-slate-100">
              <Image src={latestLesson.coverImage} alt={latestLesson.heroImageAlt} fill className="object-cover" priority />
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Newest lessons</p>
            <h2 className="text-xl font-semibold">Browse the latest drops</h2>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {featuredLessons.map((lesson) => (
              <article key={lesson.slug} className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="relative h-40 w-full overflow-hidden rounded-xl">
                  <Image src={lesson.coverImage} alt={lesson.heroImageAlt} fill className="object-cover" />
                </div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                  <span>HSK {lesson.hskLevel}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-400" aria-hidden />
                  <span>{lesson.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{lesson.title}</h3>
                <p className="text-sm text-slate-600">{lesson.summary}</p>
                <Link href={`/lessons/${lesson.slug}`} className="text-sm font-semibold text-rose-500">
                  Read lesson →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="levels" className="rounded-3xl border border-slate-200 bg-white p-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Level selector</p>
            <h2 className="text-xl font-semibold">Pick your HSK lane</h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {levelTracks.map((track) => (
              <article key={track.level} className="rounded-2xl border border-slate-100 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-rose-400">{track.level}</p>
                <h3 className="mt-2 text-lg font-semibold">{track.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{track.description}</p>
                <button className="mt-4 text-xs font-semibold text-rose-500">View lessons →</button>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Subject filters</p>
            <h2 className="text-xl font-semibold">Jump straight to the right topic</h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {subjects.map((subject) => (
              <article key={subject.name} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{subject.name}</p>
                <p className="mt-2 text-sm text-slate-600">{subject.description}</p>
                <button className="mt-3 text-xs font-semibold text-rose-500">Browse {subject.name} →</button>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Why this build</p>
              <h2 className="text-xl font-semibold">Calm layout, practical callouts</h2>
              <p className="text-sm text-slate-600">
                We kept the UI lightweight so the content stays front and centre. White backgrounds, clean typography, and simple
                badges make it obvious what to read next. Hover reveals pinyin + part of speech, dashed outlines warn you about
                out-of-level vocab, and each lesson ships with bilingual practice prompts.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-600">
              <p>• New HSK 1–3 lessons land daily at 06:00 London.</p>
              <p>• Practice prompts include Chinese, pinyin, and English so you can output quickly.</p>
              <p>• Partner live classes (That’s Mandarin) are linked on each lesson for when you need voice time.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
