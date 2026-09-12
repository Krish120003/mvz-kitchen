export type WeekDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export const OPENING_HOURS_BY_DAY: Record<WeekDay, string> = {
  Monday: "11:00 AM - 9:00 PM",
  Tuesday: "11:00 AM - 9:00 PM",
  Wednesday: "11:00 AM - 9:00 PM",
  Thursday: "11:00 AM - 9:00 PM",
  Friday: "11:00 AM - 10:00 PM",
  Saturday: "11:00 AM - 10:00 PM",
  Sunday: "11:00 AM - 9:00 PM",
};

export type GroupedOpeningHours = {
  /** Short grouped day label, e.g. "Mon - Thu, Sun" */
  label: string;
  days: WeekDay[];
  /** Full hours string, e.g. "11:00 AM - 9:00 PM" */
  hours: string;
  /** Short display string, e.g. "11 AM to 9 PM" */
  displayHours: string;
};

export const GROUPED_OPENING_HOURS: GroupedOpeningHours[] = [
  {
    label: "Mon - Thu, Sun",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
    hours: "11:00 AM - 9:00 PM",
    displayHours: "11 AM to 9 PM",
  },
  {
    label: "Fri - Sat",
    days: ["Friday", "Saturday"],
    hours: "11:00 AM - 10:00 PM",
    displayHours: "11 AM to 10 PM",
  },
];
