
export interface ScheduleItem {
  time: string;
  topic: string;
}

export interface Project {
  title: string;
  description: string;
  isPortfolio?: boolean;
}

export interface Day {
  day: string;
  title:string;
  schedule: ScheduleItem[];
  project: Project;
}

export interface Week {
  week: number;
  title: string;
  focus: string;
  days: Day[];
}

export interface InfoSectionData {
  title: string;
  items: string[];
}
