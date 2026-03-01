import { chineseJohnSpringFestival } from "./chinese-john-spring-festival";
import { hsk1MorningMarket } from "./hsk1-morning-market";
import { hsk2RemoteSync } from "./hsk2-remote-sync";
import { hsk2WorkTravelMeetup } from "./hsk2-work-travel-meetup";
import { hsk3StartupDemoDay } from "./hsk3-startup-demo-day";
import { hsk3MountainWeekend } from "./hsk3-mountain-weekend";
import type { Lesson } from "./types";

export const lessons: Lesson[] = [
  hsk3MountainWeekend,
  hsk2RemoteSync,
  hsk1MorningMarket,
  hsk3StartupDemoDay,
  hsk2WorkTravelMeetup,
  chineseJohnSpringFestival,
];

export const latestLesson = lessons[0];
