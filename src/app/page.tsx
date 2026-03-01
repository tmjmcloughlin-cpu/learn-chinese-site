import Image from "next/image";
import Link from "next/link";
import { lessons, latestLesson } from "@/data/lessons";

const levelTracks = [
  {
    level: "HSK 1",
    title: "First words",
    description: "Color-coded mini stories covering greetings, family, food, and transport essentials.",
    release: "06:00 daily",
  },
  {
    level: "HSK 2",
    title: "Daily life",
    description: "Work, travel, and celebration narratives with 会 / 要 / 想 patterns highlighted.",
    release: "06:00 daily",
  },
  {
    level: "HSK 3",
    title: "Applied living",
    description: "Office, planning, and wellness flows with grammar callouts and light audio cues.",
    release: "06:00 daily",
  },
];

const subjects = [
  { name: "Work", description: "Meetings, coworker chats, scheduling" },
  { name: "Life", description: "Family, habits, health" },
  { name: "Travel", description: "Transport, hotels, customs" },
  { name: "Culture", description: "Festivals, food, etiquette" },
];

export default function Home() {
  const featuredLessons = lessons.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fff6f1] px-4 py-12 text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-[#ff7eb3] via-[#ff758c] to-[#ffb677] p-10 text-white shadow-2xl">
          <div className="absolute -right-12 -top-12 h-60 w-60 rounded-full bg-white/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-10 h-32 w-32 rounded-[35%] bg-white/20 blur-3xl" aria-hidden />
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Daily Chinese drop · 06:00 London</p>
            <h1 className="text-4xl font-semibold leading-tight">
              Drops-inspired gradients, HSK-locked stories. Tap characters, see pinyin instantly.
            </h1>
            <p className="max-w-3xl text-lg text-white/90">
              Students just pick level + subject and dive in. 90% of the vocab stays inside target HSK bands; dashed
              outlines flag the stretch words for notebook time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/lessons/${latestLesson.slug}`}
                className="rounded-full bg-white/95 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-500 transition hover:bg-white"
              >
                Start today’s lesson
              </Link>
              <Link
                href="#levels"
                className="rounded-full border border-white/80 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:border-white"
              >
                Pick my level
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-white/70">
              <span>Color-coded parts of speech</span>
              <span>Dashed outline = stretch vocab</span>
              <span>New drop every morning</span>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg shadow-rose-100">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="space-y-5">
              <p className="text-xs uppercase tracking-[0.4em] text-rose-400">Today’s spotlight</p>
              <h2 className="text-3xl font-semibold text-slate-900">{latestLesson.title}</h2>
              <p className="text-base text-slate-600">{latestLesson.summary}</p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-600">
                {latestLesson.topicTags.map((tag) => (
                  <span key={tag} className="rounded-full bg-rose-50 px-3 py-1 text-rose-700">
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                {latestLesson.focusPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/lessons/${latestLesson.slug}`}
                  className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
                >
                  Read lesson
                </Link>
                <div className="rounded-full bg-rose-100 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                  HSK {latestLesson.hskLevel} · {new Date(latestLesson.date).toLocaleDateString("en-GB", { dateStyle: "medium" })}
                </div>
              </div>
            </article>
            <div className="relative h-80 w-full overflow-hidden rounded-3xl">
              <Image src={latestLesson.coverImage} alt={latestLesson.heroImageAlt} fill className="object-cover" priority />
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Latest drops</p>
            <h2 className="text-2xl font-semibold text-slate-900">Find the article that matches your level + subject</h2>
            <p className="text-sm text-slate-600">
              Each card shows the topic, HSK tier, and a splash image from real China moments. Tap through to see the
              hover-ready reader.
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {featuredLessons.map((lesson) => (
              <article
                key={lesson.slug}
                className="group rounded-3xl border border-slate-100 bg-slate-50 shadow-sm transition hover:-translate-y-1"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-3xl">
                  <Image
                    src={lesson.coverImage}
                    alt={lesson.heroImageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 px-4 py-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
                    <span>HSK {lesson.hskLevel}</span>
                    <span className="h-1 w-1 rounded-full bg-rose-200" aria-hidden />
                    <span>{lesson.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{lesson.title}</h3>
                  <p className="text-sm text-slate-600">{lesson.summary}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                    {lesson.topicTags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white px-2 py-1 text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/lessons/${lesson.slug}`} className="inline-flex items-center text-sm font-semibold text-rose-500">
                    Read now →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="levels" className="rounded-3xl bg-white p-8 shadow-lg shadow-rose-100">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Level selector</p>
            <h2 className="text-2xl font-semibold text-slate-900">New lesson every morning for each HSK tier</h2>
            <p className="text-sm text-slate-600">
              Choose your lane—each feed sticks to ~90% target vocabulary. Non-level words wear the dashed amber outline so
              you can note them quickly.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {levelTracks.map((track) => (
              <article key={track.level} className="rounded-3xl border border-slate-100 bg-slate-900 text-white p-5">
                <p className="text-xs uppercase tracking-[0.4em] text-amber-300">{track.level}</p>
                <h3 className="mt-3 text-xl font-semibold">{track.title}</h3>
                <p className="mt-2 text-sm text-white/80">{track.description}</p>
                <p className="mt-4 text-xs text-white/60">Release: {track.release}</p>
                <button className="mt-5 inline-flex items-center text-sm font-semibold text-amber-200">
                  View stories →
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg shadow-rose-100">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Subject filters</p>
            <h2 className="text-2xl font-semibold text-slate-900">Pick the context you care about</h2>
            <p className="text-sm text-slate-600">
              Each subject gets its own rotating queue of lessons. Tap a card to surface matching articles for your HSK level.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {subjects.map((subject) => (
              <article key={subject.name} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-rose-400">{subject.name}</p>
                <p className="mt-2 text-sm text-slate-600">{subject.description}</p>
                <button className="mt-4 text-xs font-semibold text-rose-500">
                  Browse {subject.name} lessons →
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-900 p-8 text-slate-50">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-rose-200">Why this format works</p>
              <h2 className="mt-3 text-2xl font-semibold">Daily micro-lessons, Language Drops energy</h2>
              <p className="mt-3 text-sm text-slate-200">
                Gradient hero, single-row cards, and playful rounded buttons keep the UI breezy while the data stays strict:
                90% HSK vocab per level, with stretch words intentionally highlighted. It’s the same “tap to learn” dopamine
                loop you know from Drops, tuned for reading practice.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-800/70 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Release cadence</p>
                <p className="text-sm text-slate-200">New HSK 1–3 stories every day at 06:00 London.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Find the right fit</p>
                <p className="text-sm text-slate-200">
                  Filters, tags, and level capsules help you land on the exact difficulty in under 10 seconds.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Coming soon</p>
                <p className="text-sm text-slate-200">Audio buttons, flashcard drills, and streak tracking.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
