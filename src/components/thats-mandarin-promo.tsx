import Image from "next/image";
import Link from "next/link";

const externalUrl = "https://www.thatsmandarin.com/learn-chinese-online/?utm_source=learnchinese-site&utm_medium=partner&utm_campaign=hover_lessons";
const hskUrl = "https://www.thatsmandarin.com/hsk-preparation-course/?utm_source=learnchinese-site&utm_medium=partner&utm_campaign=hover_lessons";

export function ThatsMandarinPromo({ variant = "full" }: { variant?: "full" | "compact" }) {
  if (variant === "compact") {
    return (
      <section className="rounded-3xl bg-gradient-to-br from-[#ff7e67] to-[#ffd76f] p-6 text-white shadow-lg">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Partner drop</p>
          <h3 className="text-2xl font-semibold">Live lessons with That’s Mandarin</h3>
          <p className="text-sm text-white/90">
            Jump into teacher-led classes via NihaoCafe, That’s Mandarin’s online school platform. Native teachers,
            immersive sessions, and flexible scheduling when you need extra speaking reps.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={externalUrl}
              target="_blank"
              className="inline-flex items-center rounded-full bg-white/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-rose-500 transition hover:bg-white"
            >
              Book a live class →
            </Link>
            <Link
              href={hskUrl}
              target="_blank"
              className="inline-flex items-center rounded-full border border-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white hover:bg-white hover:text-rose-500"
            >
              HSK prep course →
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-4xl bg-gradient-to-br from-[#ff7e67] to-[#ffd76f] p-8 text-white shadow-2xl">
      <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Partner resource</p>
          <h2 className="text-3xl font-semibold">Study live with That’s Mandarin</h2>
          <p className="text-base text-white/90">
            We recommend That’s Mandarin when you want real-time speaking practice. Their NihaoCafe platform pairs you with
            vetted native teachers (only 5% make the cut) and keeps everything immersive, even for beginners. Need exam help?
            Their HSK Preparation Course has mock tests and coaching built in.
          </p>
          <ul className="space-y-2 text-sm text-white/90">
            <li>• Certified TCSL/TCSOL instructors with years of experience</li>
            <li>• Interactive platform + recordings so you can review after each class</li>
            <li>• Dedicated HSK Preparation Course with mock tests and coaching</li>
            <li>• Flexible schedules for students abroad or traveling in China</li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link
              href={externalUrl}
              target="_blank"
              className="rounded-full bg-white/95 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-rose-500 transition hover:bg-white"
            >
              Explore That’s Mandarin
            </Link>
            <Link
              href={hskUrl}
              target="_blank"
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white hover:bg-white hover:text-rose-500"
            >
              HSK prep course
            </Link>
            <span className="rounded-full bg-white/20 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/80">
              NihaoCafe access included
            </span>
          </div>
        </div>
        <div className="relative h-72 w-full overflow-hidden rounded-3xl">
          <Image src="/images/thats-mandarin-cover.jpg" alt="That’s Mandarin online classes" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
