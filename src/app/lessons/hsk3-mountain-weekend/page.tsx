import Image from "next/image";
import Link from "next/link";
import { LessonReader } from "@/components/lesson-reader";
import { hsk3MountainWeekend } from "@/data/lessons/hsk3-mountain-weekend";

const legend = [
  { label: "Noun", color: "bg-sky-200 text-sky-900" },
  { label: "Verb", color: "bg-rose-200 text-rose-900" },
  { label: "Adjective", color: "bg-emerald-200 text-emerald-900" },
  { label: "Adverb", color: "bg-amber-200 text-amber-900" },
  { label: "Expression", color: "bg-purple-200 text-purple-900" },
];

export default function LessonPage() {
  const lesson = hsk3MountainWeekend;

  return (
    <div className="bg-neutral-50 px-4 py-12 text-slate-900">
      <div className="mx-auto max-w-5xl space-y-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-rose-500 hover:text-rose-600"
        >
          ← Back to homepage
        </Link>

        <header className="grid gap-6 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-rose-400">
              HSK {lesson.hskLevel} · {lesson.category}
            </p>
            <h1 className="text-4xl font-semibold text-slate-900">{lesson.title}</h1>
            <p className="text-lg text-slate-600">{lesson.summary}</p>
          </div>
          <div className="relative h-60 w-full overflow-hidden rounded-2xl">
            <Image src={lesson.coverImage} alt={lesson.heroImageAlt} fill className="object-cover" />
          </div>
        </header>

        <section className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-base font-semibold text-slate-900">Today’s objectives</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              {lesson.focusPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2 rounded-2xl bg-rose-50 p-4 text-sm text-rose-700">
            <p className="font-semibold uppercase tracking-[0.3em] text-rose-500">Legend</p>
            <div className="flex flex-wrap gap-2">
              {legend.map((item) => (
                <span key={item.label} className={`rounded-full px-3 py-1 text-xs font-semibold ${item.color}`}>
                  {item.label}
                </span>
              ))}
              <span className="rounded-full border border-dashed border-amber-500 px-3 py-1 text-xs font-semibold text-amber-700">
                Non-HSK highlight
              </span>
            </div>
            <p>Words with dashed outlines fall outside HSK {lesson.hskLevel} but appear for context.</p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <LessonReader lesson={lesson} />
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-[#ff7e67] to-[#ffd76f] p-6 text-white">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Practice prompts</p>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-white/10 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">叙述练习</h3>
              <p className="text-sm text-white/80">
                用 “先…再…” 描述你上一次放松的周末行程。
              </p>
            </article>
            <article className="rounded-2xl bg-white/10 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">感受分享</h3>
              <p className="text-sm text-white/80">
                说说什么地方让你觉得最放松，用 “安静、舒服、放松” 来形容。
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
