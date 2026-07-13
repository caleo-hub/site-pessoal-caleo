"use client";

const CAREER_START_YEAR = 2019;

export function YearsInTech() {
  const years = Math.max(new Date().getFullYear() - CAREER_START_YEAR, 0);

  return <strong suppressHydrationWarning>{years}+</strong>;
}

