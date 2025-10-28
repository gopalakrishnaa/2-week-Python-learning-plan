
import type { Week, InfoSectionData } from './types';

export const studyPlan: Week[] = [
  {
    week: 1,
    title: "Week 1: Foundation & Core Concepts",
    focus: "Speed through basics, dive deeper into job-relevant topics",
    days: [
      {
        day: "Day 1-2",
        title: "Python Fundamentals (Mon-Tue)",
        schedule: [
          { time: "8:30-9:30", topic: "Variables, data types, operators, strings" },
          { time: "9:30-10:30", topic: "Control flow (if/else, loops)" },
          { time: "10:30-11:30", topic: "Functions and basic exercises" },
        ],
        project: { title: "Mini-project", description: "Create a command-line calculator or number guessing game" },
      },
      {
        day: "Day 3-4",
        title: "Data Structures (Wed-Thu)",
        schedule: [
          { time: "8:30-9:30", topic: "Lists, tuples, sets" },
          { time: "9:30-10:30", topic: "Dictionaries and comprehensions" },
          { time: "10:30-11:30", topic: "Practice problems + start mini-project" },
        ],
        project: { title: "Mini-project", description: "Build a contact management system or to-do list CLI app" },
      },
      {
        day: "Day 5",
        title: "OOP Basics (Fri)",
        schedule: [
          { time: "8:30-10:00", topic: "Classes, objects, methods, inheritance" },
          { time: "10:00-11:30", topic: "Practice OOP concepts with exercises" },
        ],
        project: { title: "Evening review", description: "Solidify Week 1 concepts" },
      },
    ],
  },
  {
    week: 2,
    title: "Week 2: Advanced Topics & Portfolio Projects",
    focus: "Job-ready skills + building 2-3 showcase projects",
    days: [
      {
        day: "Day 6",
        title: "File Handling & Error Management (Mon)",
        schedule: [
          { time: "8:30-9:30", topic: "File I/O operations (read/write CSV, JSON, txt)" },
          { time: "9:30-10:30", topic: "Exception handling and debugging" },
          { time: "10:30-11:30", topic: "Apply to mini-project" },
        ],
        project: { title: "Mini-project", description: "CSV data analyzer or expense tracker" },
      },
      {
        day: "Day 7-8",
        title: "Key Libraries (Tue-Wed)",
        schedule: [
            { time: "8:30-9:30", topic: "Requests library (APIs)" },
            { time: "9:30-10:30", topic: "Pandas basics (data manipulation)" },
            { time: "10:30-11:30", topic: "Practice with real datasets" },
        ],
        project: { title: "Mini-project", description: "Weather app using API or basic data analysis dashboard" },
      },
      {
        day: "Day 9-10",
        title: "Portfolio Project #1 (Thu-Fri)",
        schedule: [],
        project: { 
            title: "Portfolio Project #1",
            description: "Choose one: Web scraper (BeautifulSoup), Automation script, or a Data analysis project. Build, test, document, and push to GitHub.",
            isPortfolio: true 
        },
      },
       {
        day: "Day 11-12",
        title: "Portfolio Project #2 (Sat-Sun)",
        schedule: [],
        project: { 
            title: "Portfolio Project #2",
            description: "Choose a different type: REST API (Flask basics), GUI application (Tkinter), or a Command-line tool (argparse). Polish and document thoroughly.",
            isPortfolio: true
        },
      },
      {
        day: "Day 13-14",
        title: "Final Project + Polish (Mon-Tue)",
        schedule: [
             { time: "Day 13", topic: "Start and work on final integrative project" },
             { time: "Day 14", topic: "Complete, document, and polish all projects" },
        ],
        project: { 
            title: "Final Portfolio Push",
            description: "Create excellent README files for each project and prepare your GitHub profile by pinning your best work.",
            isPortfolio: true
        },
      },
    ],
  },
];

export const dailyTips: InfoSectionData = {
  title: "Daily Routine Tips",
  items: [
    "First 15 mins: Review previous day's notes",
    "Last 15 mins: Document what you learned, push code to GitHub",
    "Between sessions: Practice typing code (don't copy-paste)",
    "Evening (optional): 30 mins reviewing concepts or coding challenges",
  ],
};

export const portfolioGoals: InfoSectionData = {
  title: "Projects for GitHub Portfolio",
  items: [
    "3-4 mini-projects (from daily work)",
    "2 solid portfolio projects (Week 2, Days 9-12)",
    "1 final integrative project",
    "All well-documented with README files",
  ],
};

export const jobPrep: InfoSectionData = {
    title: "Job Prep Additions",
    items: [
        "LeetCode/HackerRank: 2-3 easy problems per week",
        "GitHub commits: Daily commits show consistency",
        "LinkedIn: Update with 'Learning Python' + share projects",
    ]
};

export const resources: InfoSectionData = {
    title: "Resources Checklist",
    items: [
        "Udemy course sections bookmarked",
        "GitHub account set up",
        "Code editor ready (VS Code recommended)",
        "Python environment configured",
        "Project ideas list prepared",
    ]
};
