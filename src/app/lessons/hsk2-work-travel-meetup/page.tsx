import Image from "next/image";
import Link from "next/link";
import { LessonReader } from "@/components/lesson-reader";
import { AuthorCard } from "@/components/author-card";
import { ThatsMandarinPromo } from "@/components/thats-mandarin-promo";
import { hsk2WorkTravelMeetup } from "@/data/lessons/hsk2-work-travel-meetup";

const legend = [
  { label: "Noun", color: "bg-sky-200 text-sky-900" },
  { label: "Verb", color: "bg-rose-200 text-rose-900" },
  { label: "Adjective", color: "bg-emerald-200 text-emerald-900" },
  { label: "Adverb", color: "bg-amber-200 text-amber-900" },
  { label: "Expression", color: "bg-purple-200 text-purple-900" },
];

const prompts = [
  {
    title: "行程复述",
    chinese: "用三句话复述李娜为杰森安排的交通、酒店和晚餐计划。",
    pinyin: "Yòng sān jù huà fùshù Lǐ Nà wèi Jiésēn ānpái de jiāotōng, jiǔdiàn hé wǎncān jìhuà.",
    english: "Retell in three sentences the transport, hotel, and dinner plan Li Na set up for Jason.",
  },
  {
    title: "口语输出",
    chinese: "说说你最近一次出差：你得准备什么？有什么好吃的？",
    pinyin: "Shuōshuō nǐ zuìjìn yī cì chūchāi: nǐ děi zhǔnbèi shénme? Yǒu shénme hǎochī de?",
    english: "Talk about your latest business trip: what did you have to prepare and what tasty food did you find?",
  },
];

export default function LessonPage() {
  const lesson = hsk2WorkTravelMeetup;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#120c3b] via-[#151c4f] to-[#1c1f33] px-4 py-12 text-slate-50">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Lesson rules</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Stay within 90% target HSK vocab—dashed outlines show the stretch words.</li>
            <li>Hover or tap any token to see pinyin, part of speech, and HSK flag.</li>
            <li>Color legend + practice prompts are consistent on every page.</li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-[#2b0e68] hover:text-rose-600"
        >
          ← Back to homepage
        </Link>

        <header className="grid gap-6 rounded-3xl border border-white/10 bg-white/95 p-6 text-slate-900 shadow-lg md:grid-cols-[2fr_1fr]">
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

        <section className="grid gap-4 rounded-3xl border border-white/10 bg-white/95 p-6 text-slate-900 shadow-lg lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-base font-semibold text-slate-900">Today’s objectives</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              {lesson.focusPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2 rounded-2xl bg-rose-50 p-4 text-sm text-rose-700">
            <p className="font-semibold uppercase tracking-[0.3em] text-[#2b0e68]">Legend</p>
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

        <section className="rounded-3xl border border-white/10 bg-white/95 p-8 text-slate-900 shadow-lg">
          <LessonReader lesson={lesson} />
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-[#ff7e67] to-[#ffd76f] p-6 text-white">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Practice prompts</p>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            {prompts.map((prompt) => (
              <article key={prompt.title} className="rounded-2xl bg-white/10 p-4 shadow-sm">
                <h3 className="text-lg font-semibold">{prompt.title}</h3>
                <p className="text-sm text-white">{prompt.chinese}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">{prompt.pinyin}</p>
                <p className="text-sm text-white/90">{prompt.english}</p>
              </article>
            ))}
          </div>
        </section>

        <AuthorCard />

        <ThatsMandarinPromo variant="compact" />
      </div>
    </div>
  );
}
