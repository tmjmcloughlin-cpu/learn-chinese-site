import Image from "next/image";

export function AuthorCard() {
  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-md">
          <Image src="/images/joi-profile.jpg" alt="Joi" fill className="object-cover" />
        </div>
        <div className="space-y-1 text-sm text-slate-600">
          <p className="text-base font-semibold text-slate-900">Joi · That’s Mandarin Study Partner</p>
          <p>
            Remote learning strategist + study buddy. I test every hover lesson and pair it with live practice ideas from our
            That’s Mandarin teachers so you always know the next step.
          </p>
        </div>
      </div>
    </section>
  );
}
