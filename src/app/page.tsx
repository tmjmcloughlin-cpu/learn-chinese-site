import Image from "next/image";
import Link from "next/link";
import { lessons, latestLesson } from "@/data/lessons";

const levelTracks = [
  {
    level: "HSK 1",
    title: "First words",
    description: "120-character micro stories: greetings, family, food, taxis.",
    palette: "from-[#ffd86f] to-[#ffae66]",
  },
  {
    level: "HSK 2",
    title: "Daily life",
    description: "Travel + work scenes with 会 / 要 / 想 patterns and noun color-coding.",
    palette: "from-[#ff9770] to-[#ff6f91]",
  },
  {
    level: "HSK 3",
    title: "Applied living",
    description: "Office, wellness, planning narratives with grammar callouts + audio notes.",
    palette: "from-[#ff6f91] to-[#ff9671]",
  },
];

const subjects = [
  { name: "Work", description: "meetings · coworker syncs · remote calls", color: "bg-[#ffe9cf]" },
  { name: "Life", description: "habits · food · health routines", color: "bg-[#ffd7e2]" },
  { name: "Travel", description: "train trips · hotels · weekend plans", color: "bg-[#ffe6f3]" },
  { name: "Culture", description: "festivals · etiquette · markets", color: "bg-[#ffe1d2]" },
];

const heroFacts = [
  { label: "06:00 London", text: "Fresh drop every morning" },
  { label: "90% in-level", text: "Dashed outlines mark stretch vocab" },
  { label: "Hover = Pinyin", text: "Tap to pin on mobile" },
];

export default function Home() {
  const featuredLessons = lessons.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#120c3b] via-[#151c4f] to-[#1c1f33] px-4 py-10 text-slate-50">
      <main className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-[#ffe066] via-[#ff9f68] to-[#ff6f91] p-10 text-white shadow-2xl">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/20 blur-3xl" aria-hidden />
          <div className="absolute right-0 top-10 h-40 w-40 rounded-[35%] bg-white/20 blur-3xl" aria-hidden />
          <div className="relative space-y-6">
            <div className="flex flex-wrap items-center gap-4">
            <div className="rounded-2xl bg-[#ffe066] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#7a3a00] shadow-lg">
              LC
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Daily Chinese drop · coral → mango palette</p>
          </div>
            <h1 className="text-4xl font-semibold leading-tight">
              Drops-inspired stories. Hover any character and the pinyin + part of speech appears instantly.
            </h1>
            <div className="max-w-3xl space-y-3 text-lg text-white/90">
              <p>
                Pick a level, pick a context, and hover every character for instant pinyin + parts of speech. Stretch vocabulary
                shows up with a dashed outline so you know exactly what to screenshot or jot down.
              </p>
              <p>
                Each article lands at 06:00 London. Fonts stay bold, colors stay coral-to-mango, and the flow mirrors the “tap to
                learn” rhythm from Drops—except now it’s made for reading drills.
              </p>
            </div>
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
            <div className="grid gap-4 text-xs uppercase tracking-[0.3em] text-white/70 sm:grid-cols-3">
              {heroFacts.map((fact) => (
                <div key={fact.label} className="rounded-3xl bg-white/15 px-4 py-3 text-center font-semibold">
                  <p className="text-white">{fact.label}</p>
                  <p className="text-[0.7rem] text-white/70">{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-4xl bg-gradient-to-br from-[#ff5f6d] to-[#ffc371] p-8 text-white shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="space-y-5">
              <p className="text-xs uppercase tracking-[0.4em] text-white/80">Today’s spotlight</p>
              <h2 className="text-3xl font-semibold">{latestLesson.title}</h2>
              <p className="text-base text-white/90">{latestLesson.summary}</p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                {latestLesson.topicTags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/20 px-3 py-1 text-white">
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="space-y-3 text-sm text-white/90">
                {latestLesson.focusPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/lessons/${latestLesson.slug}`}
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-500"
                >
                  Read lesson
                </Link>
                <div className="rounded-full bg-white/15 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                  HSK {latestLesson.hskLevel} · {new Date(latestLesson.date).toLocaleDateString("en-GB", { dateStyle: "medium" })}
                </div>
              </div>
            </article>
            <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/20">
              <Image src={latestLesson.coverImage} alt={latestLesson.heroImageAlt} fill className="object-cover" priority />
            </div>
          </div>
        </section>

        <section className="rounded-4xl bg-gradient-to-br from-[#ffba7a] to-[#ff6f91] p-8 text-white shadow-2xl">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Image src="/images/partner-nihaocafe.png" alt="That’s Mandarin / NihaoCafe" width={150} height={40} className="drop-shadow" />
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">That’s Mandarin Online School</p>
            </div>
            <h2 className="text-2xl font-semibold">Pair hover reading with live immersion</h2>
            <p className="text-base text-white/90">
              When you need speaking + listening reps, jump into That’s Mandarin’s online program. Classes run through NihaoCafe,
              their in-house platform, and every teacher is native, TCSL-certified, and part of the top 5% of applicants they
              accept.
            </p>
            <ul className="space-y-2 text-sm text-white/90">
              <li>• 100% Chinese instruction, even for beginners (teachers lean on visuals instead of switching to English)</li>
              <li>• NihaoCafe homework, recordings, and vocab tracking after every session</li>
              <li>• Dedicated HSK Preparation Course with mock exams + coaching when you’re test-focused</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://www.thatsmandarin.com/learn-chinese-online/?utm_source=learnchinese-site&utm_medium=partner&utm_campaign=hover_lessons"
                target="_blank"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-500"
              >
                Explore live classes
              </Link>
              <Link
                href="https://www.thatsmandarin.com/hsk-preparation-course/?utm_source=learnchinese-site&utm_medium=partner&utm_campaign=hover_lessons"
                target="_blank"
                className="rounded-full border border-white/70 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
              >
                HSK prep course
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-4xl bg-gradient-to-br from-[#1c2f66] to-[#3a7bd5] p-8 text-white shadow-2xl">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Latest drops</p>
            <h2 className="text-2xl font-semibold">Swipe through the newest HSK stories</h2>
            <p className="text-sm text-white/80">
              We rotate subjects daily so there’s always a work, life, and travel article waiting. Tap a card to dive in and try the
              hover reader yourself.
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {featuredLessons.map((lesson) => (
              <article
                key={lesson.slug}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1"
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
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#ffd9ec]">
                    <span>HSK {lesson.hskLevel}</span>
                    <span className="h-1 w-1 rounded-full bg-white/50" aria-hidden />
                    <span>{lesson.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{lesson.title}</h3>
                  <p className="text-sm text-white/80">{lesson.summary}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-white/70">
                    {lesson.topicTags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/10 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/lessons/${lesson.slug}`} className="inline-flex items-center text-sm font-semibold text-[#ffd9ec]">
                    Read now →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="levels" className="rounded-4xl bg-gradient-to-r from-[#7f5af0] via-[#9a57ff] to-[#c850c0] p-8 text-white shadow-2xl">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Level selector</p>
            <h2 className="text-2xl font-semibold">One new lesson per HSK lane</h2>
            <p className="text-sm text-white/80">
              Lessons stay 90% inside the target vocab range. Out-of-level words wear dashed outlines, so you can log them in your
              notebook asap.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {levelTracks.map((track) => (
              <article
                key={track.level}
                className={`rounded-3xl bg-gradient-to-br ${track.palette} p-5 text-white shadow-lg backdrop-blur`}
              >
                <p className="text-xs uppercase tracking-[0.4em] text-white/80">{track.level}</p>
                <h3 className="mt-3 text-xl font-semibold">{track.title}</h3>
                <p className="mt-2 text-sm text-white/90">{track.description}</p>
                <button className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-[0.3em] text-white">
                  View stories →
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-4xl bg-white/95 p-8 text-slate-900 shadow-2xl">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Subject filters</p>
            <h2 className="text-2xl font-semibold text-slate-900">Pick the context you care about</h2>
            <p className="text-sm text-slate-600">
              Work call coming up? Planning a trip? Tap a subject and grab the matching article in seconds.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {subjects.map((subject) => (
              <article key={subject.name} className={`rounded-3xl border border-white/10 bg-white/90 px-4 py-5 text-slate-900 ${subject.color}`}>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-600">{subject.name}</p>
                <p className="mt-2 text-sm text-slate-700">{subject.description}</p>
                <button className="mt-4 text-xs font-semibold text-rose-500">Browse {subject.name} lessons →</button>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-4xl bg-gradient-to-br from-[#27105a] to-[#0f0a27] p-8 text-slate-50 shadow-2xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-rose-200">Why this format works</p>
              <h2 className="mt-3 text-2xl font-semibold">Coral gradients + hover grammar = fast reps</h2>
              <p className="mt-3 text-sm text-slate-200">
                We borrow the playful energy of apps like Drops (gradients, rounded tiles, white typography) but keep the content
                laser-focused on HSK bands. Hovering exposes pinyin + part of speech, dashed outlines warn you about stretch
                vocab, and the companion practice prompts give you output reps.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Release cadence</p>
                <p className="text-sm text-slate-200">New HSK 1–3 lessons every day at 06:00 London.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Find your fit</p>
                <p className="text-sm text-slate-200">Color-coded parts of speech, stretch vocab warnings, and filters mean zero guesswork.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Next up</p>
                <p className="text-sm text-slate-200">Audio buttons, flashcard drills, and streak tracking—rolling out soon.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
