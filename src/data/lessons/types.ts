export type PartOfSpeech =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "particle"
  | "expression"
  | "number"
  | "grammar"
  | "noun-phrase";

export type Token = {
  hanzi: string;
  pinyin: string;
  english: string;
  pos: PartOfSpeech;
  isHsk: boolean;
};

export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  hskLevel: 1 | 2 | 3;
  category: string;
  topicTags: string[];
  date: string; // ISO date
  heroImageAlt: string;
  coverImage: string;
  focusPoints: string[];
  paragraphs: Token[][];
};
