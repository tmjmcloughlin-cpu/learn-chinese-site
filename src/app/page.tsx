"use client";

import { useState } from "react";

type Token = {
  hanzi: string;
  pinyin: string;
  english: string;
};

type Paragraph = Token[];

const springFestivalLesson: Paragraph[] = [
  [
    { hanzi: "二零二六年", pinyin: "èr líng èr liù nián", english: "the year 2026" },
    { hanzi: "二月十七日", pinyin: "èr yuè shí qī rì", english: "February 17" },
    { hanzi: "是", pinyin: "shì", english: "is" },
    { hanzi: "春节", pinyin: "Chūn Jié", english: "Spring Festival" },
    { hanzi: "。", pinyin: "。", english: "" },
    { hanzi: "这", pinyin: "zhè", english: "this" },
    { hanzi: "是", pinyin: "shì", english: "is" },
    { hanzi: "新年的第一天", pinyin: "xīn nián de dì yī tiān", english: "the first day of the New Year" },
    { hanzi: "，", pinyin: "，", english: "" },
    { hanzi: "也是", pinyin: "yě shì", english: "also" },
    { hanzi: "中国最大的节日", pinyin: "Zhōngguó zuì dà de jié rì", english: "China's biggest holiday" },
    { hanzi: "。", pinyin: "。", english: "" },
  ],
  [
    { hanzi: "在这一天", pinyin: "zài zhè yī tiān", english: "on this day" },
    { hanzi: "，", pinyin: "，", english: "" },
    { hanzi: "天气虽冷", pinyin: "tiān qì suī lěng", english: "the weather is cold" },
    { hanzi: "，", pinyin: "，", english: "" },
    { hanzi: "大家都很高兴", pinyin: "dà jiā dōu hěn gāo xìng", english: "everyone is happy" },
    { hanzi: "。", pinyin: "。", english: "" },
    { hanzi: "我们会买很多东西", pinyin: "wǒ men huì mǎi hěn duō dōng xi", english: "we buy lots of things" },
    { hanzi: "：", pinyin: "：", english: "" },
    { hanzi: "有鱼", pinyin: "yǒu yú", english: "there is fish" },
    { hanzi: "、", pinyin: "、", english: "" },
    { hanzi: "有肉", pinyin: "yǒu ròu", english: "meat" },
    { hanzi: "、", pinyin: "、", english: "" },
    { hanzi: "有水果", pinyin: "yǒu shuǐ guǒ", english: "fruit" },
    { hanzi: "，", pinyin: "，", english: "" },
    { hanzi: "还有新衣服", pinyin: "hái yǒu xīn yī fu", english: "and new clothes" },
    { hanzi: "。", pinyin: "。", english: "" },
  ],
  [
    { hanzi: "家人们会在一起吃饭", pinyin: "jiā rén men huì zài yī qǐ chī fàn", english: "families eat together" },
    { hanzi: "，", pinyin: "，", english: "" },
    { hanzi: "聊天", pinyin: "liáo tiān", english: "chat" },
    { hanzi: "、", pinyin: "、", english: "" },
    { hanzi: "喝茶", pinyin: "hē chá", english: "drink tea" },
    { hanzi: "，", pinyin: "，", english: "" },
    { hanzi: "看电视", pinyin: "kàn diàn shì", english: "watch TV" },
    { hanzi: "。", pinyin: "。", english: "" },
    { hanzi: "大人会给孩子们红包", pinyin: "dà rén huì gěi hái zi men hóng bāo", english: "adults give children red envelopes" },
    { hanzi: "，", pinyin: "，", english: "" },
    { hanzi: "里面有钱", pinyin: "lǐ miàn yǒu qián", english: "with money inside" },
    { hanzi: "。", pinyin: "。", english: "" },
    { hanzi: "我们会穿红色新衣服", pinyin: "wǒ men huì chuān hóng sè xīn yī fu", english: "we wear new red clothes" },
    { hanzi: "，", pinyin: "，", english: "" },
    { hanzi: "非常漂亮", pinyin: "fēi cháng piào liang", english: "very beautiful" },
    { hanzi: "。", pinyin: "。", english: "" },
  ],
];

export default function Home() {
  const [activeTokenKey, setActiveTokenKey] = useState<string | null>(null);

  const handleTokenClick = (key: string) => {
    setActiveTokenKey((current) => (current === key ? null : key));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-white px-4 py-10 text-slate-900">
      <main className="mx-auto flex max-w-5xl flex-col gap-10 rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-black/5 backdrop-blur">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-rose-500">Hover-reading demo</p>
          <h1 className="text-3xl font-semibold text-slate-900">
            Spring Festival bilingual reader
          </h1>
          <p className="text-base text-slate-600">
            Hover (or tap) characters to reveal pinyin + English glosses. This mirrors the Mandarin Bean
            experience using nothing more than semantic HTML, Tailwind utility classes, and a simple data map.
          </p>
        </header>

        <section className="space-y-6">
          {springFestivalLesson.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex} className="text-2xl leading-[2.5rem] text-slate-900">
              {paragraph.map((token, tokenIndex) => {
                const tokenKey = `${paragraphIndex}-${tokenIndex}`;
                const isActive = activeTokenKey === tokenKey;

                if (!token.english) {
                  return (
                    <span key={tokenKey} className="text-slate-800">
                      {token.hanzi}
                    </span>
                  );
                }

                return (
                  <button
                    key={tokenKey}
                    type="button"
                    tabIndex={0}
                    onClick={() => handleTokenClick(tokenKey)}
                    onMouseEnter={() => setActiveTokenKey(tokenKey)}
                    onFocus={() => setActiveTokenKey(tokenKey)}
                    onMouseLeave={() => setActiveTokenKey(null)}
                    onBlur={() => setActiveTokenKey(null)}
                    className="group relative mx-0.5 inline-flex cursor-help items-center rounded-md px-0.5 text-left font-medium text-slate-900 transition hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
                    aria-pressed={isActive}
                  >
                    {token.hanzi}
                    <span
                      className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden -translate-x-1/2 flex-col items-center gap-1 rounded-xl border border-black/5 bg-white/95 px-3 py-2 text-sm font-normal text-slate-800 shadow-lg shadow-rose-200/60 group-hover:flex group-focus-visible:flex"
                      data-active={isActive}
                      style={{ display: isActive ? "flex" : undefined }}
                    >
                      <span className="text-xs uppercase tracking-widest text-rose-500">{token.pinyin}</span>
                      <span className="text-base font-medium text-slate-900">{token.english}</span>
                    </span>
                  </button>
                );
              })}
            </p>
          ))}
        </section>

        <section className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
          <h2 className="text-base font-semibold text-slate-900">How to extend this</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Swap the inline data for a JSON/SQLite glossary generated from CC-CEDICT or JMdict.
            </li>
            <li>
              Tokenize lesson text at build time and wrap each token with the attributes used above.
            </li>
            <li>
              Upgrade tooltips with libraries like Tippy.js for smart positioning, and add tap-to-pin logic for
              mobile if you need persistent cards.
            </li>
            <li>
              Layer audio buttons (native <code>&lt;audio&gt;</code> or Web Speech API) for instant pronunciation.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
