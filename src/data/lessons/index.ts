import { chineseJohnSpringFestival } from "./chinese-john-spring-festival";
import { hsk2WorkTravelMeetup } from "./hsk2-work-travel-meetup";
import { hsk3StartupDemoDay } from "./hsk3-startup-demo-day";
import type { Lesson } from "./types";

export const lessons: Lesson[] = [
  hsk3StartupDemoDay,
  hsk2WorkTravelMeetup,
  chineseJohnSpringFestival,
];

export const latestLesson = lessons[0];
